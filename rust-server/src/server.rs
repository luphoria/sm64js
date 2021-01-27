use crate::{
    proto::{
        root_msg, sm64_js_msg, AnnouncementMsg, AttackMsg, ChatMsg, ConnectedMsg, GrabFlagMsg,
        MarioMsg, PlayerNameMsg, RootMsg, SkinMsg, Sm64JsMsg,
    },
    ChatError, ChatHistoryData, ChatResult, Client, Clients, Player, Players, Rooms,
};

use actix::{prelude::*, Recipient};
use anyhow::Result;
use censor::Censor;
use dashmap::DashMap;
use parking_lot::RwLock;
use prost::Message as ProstMessage;
use rand::{self, Rng};
use rayon::prelude::*;
use std::{
    collections::{HashMap, HashSet},
    env,
    net::SocketAddr,
    sync::Arc,
};
use v_htmlescape::escape;

lazy_static! {
    pub static ref ADMIN_COMMANDS: HashSet<&'static str> = hashset! {"ANNOUNCEMENT"};
    pub static ref ADMIN_TOKENS: Arc<RwLock<HashSet<String>>> =
        Arc::new(RwLock::new(HashSet::new()));
}

#[derive(Message)]
#[rtype(result = "()")]
pub struct Message(pub Vec<u8>);

pub struct Sm64JsServer {
    clients: Arc<Clients>,
    players: Players,
    rooms: Rooms,
    chat_history: ChatHistoryData,
}

impl Actor for Sm64JsServer {
    type Context = Context<Self>;

    fn started(&mut self, _: &mut Self::Context) {}
}

#[derive(Message)]
#[rtype(u32)]
pub struct Connect {
    pub addr: Recipient<Message>,
    pub ip: Option<SocketAddr>,
    pub real_ip: Option<String>,
}

impl Handler<Connect> for Sm64JsServer {
    type Result = u32;

    fn handle(&mut self, msg: Connect, _: &mut Context<Self>) -> Self::Result {
        let socket_id = rand::thread_rng().gen::<u32>();
        let client = Client::new(msg.addr, msg.ip, msg.real_ip, socket_id);

        let root_msg = RootMsg {
            message: Some(root_msg::Message::UncompressedSm64jsMsg(Sm64JsMsg {
                message: Some(sm64_js_msg::Message::ConnectedMsg(ConnectedMsg {
                    socket_id,
                })),
            })),
        };

        let mut msg = vec![];
        root_msg.encode(&mut msg).unwrap();

        client.send(Message(msg)).unwrap();
        self.clients.insert(socket_id, client);
        socket_id
    }
}

#[derive(Message)]
#[rtype(result = "()")]
pub struct Disconnect {
    pub socket_id: u32,
}

impl Handler<Disconnect> for Sm64JsServer {
    type Result = ();

    fn handle(&mut self, msg: Disconnect, _: &mut Context<Self>) {
        self.clients.remove(&msg.socket_id);
        self.players.remove(&msg.socket_id);
    }
}

#[derive(Message)]
#[rtype(result = "()")]
pub struct SetData {
    pub socket_id: u32,
    pub data: MarioMsg,
}

impl Handler<SetData> for Sm64JsServer {
    type Result = ();

    fn handle(&mut self, msg: SetData, _: &mut Context<Self>) {
        self.clients
            .get_mut(&msg.socket_id)
            .map(|mut client| client.set_data(msg.data));
    }
}

#[derive(Message)]
#[rtype(result = "()")]
pub struct SendAttack {
    pub socket_id: u32,
    pub attack_msg: AttackMsg,
}

impl Handler<SendAttack> for Sm64JsServer {
    type Result = ();

    fn handle(&mut self, send_attack: SendAttack, _: &mut Context<Self>) {
        let socket_id = send_attack.socket_id;
        let attack_msg = send_attack.attack_msg;
        if let Some((level_id, attacker_pos)) = self
            .clients
            .get(&socket_id)
            .map(|client| try { (client.get_level()?, client.get_pos()?.clone()) })
            .flatten()
        {
            if let Some(room) = self.rooms.get(&level_id) {
                let flag_id = attack_msg.flag_id as usize;
                let target_id = attack_msg.target_socket_id;
                room.process_attack(flag_id, attacker_pos, target_id);
            }
        }
    }
}

#[derive(Message)]
#[rtype(result = "()")]
pub struct SendGrabFlag {
    pub socket_id: u32,
    pub grab_flag_msg: GrabFlagMsg,
}

impl Handler<SendGrabFlag> for Sm64JsServer {
    type Result = ();

    fn handle(&mut self, send_grab: SendGrabFlag, _: &mut Context<Self>) {
        let socket_id = send_grab.socket_id;
        let grab_flag_msg = send_grab.grab_flag_msg;
        if let Some(level_id) = self
            .clients
            .get(&socket_id)
            .map(|client| client.get_level())
            .flatten()
        {
            if let Some(room) = self.rooms.get(&level_id) {
                let flag_id = grab_flag_msg.flag_id as usize;
                let pos = grab_flag_msg.pos;
                room.process_grab_flag(flag_id, pos, socket_id);
            }
        }
    }
}

#[derive(Message)]
#[rtype(result = "Option<Vec<u8>>")]
pub struct SendChat {
    pub socket_id: u32,
    pub chat_msg: ChatMsg,
}

impl Handler<SendChat> for Sm64JsServer {
    type Result = Option<Vec<u8>>;

    fn handle(&mut self, send_chat: SendChat, _: &mut Context<Self>) -> Self::Result {
        let socket_id = send_chat.socket_id;
        let chat_msg = send_chat.chat_msg;

        let msg = if chat_msg.message.starts_with('/') {
            Ok(Self::handle_command(chat_msg))
        } else {
            if let Some(player) = self.players.get(&socket_id) {
                self.handle_chat(player, chat_msg)
            } else {
                Ok(None)
            }
        };

        match msg {
            Ok(Some(msg)) => {
                let level = self.clients.get(&socket_id)?.get_level()?;
                let room = self.rooms.get(&level)?;
                room.broadcast_message(&msg);
                None
            }
            Ok(None) => None,
            Err(msg) => Some(msg),
        }
    }
}

#[derive(Message)]
#[rtype(result = "()")]
pub struct SendSkin {
    pub socket_id: u32,
    pub skin_msg: SkinMsg,
}

impl Handler<SendSkin> for Sm64JsServer {
    type Result = ();

    fn handle(&mut self, send_skin: SendSkin, _: &mut Context<Self>) {
        let socket_id = send_skin.socket_id;
        let skin_msg = send_skin.skin_msg;
        if let Some(player) = self.players.get_mut(&socket_id) {
            player.write().set_skin_data(skin_msg.skin_data);
        }
    }
}

#[derive(Message)]
#[rtype(result = "Option<bool>")]
pub struct SendPlayerName {
    pub socket_id: u32,
    pub player_name_msg: PlayerNameMsg,
}

impl Handler<SendPlayerName> for Sm64JsServer {
    type Result = Option<bool>;

    fn handle(&mut self, send_player_name: SendPlayerName, _: &mut Context<Self>) -> Self::Result {
        let player_name_msg = send_player_name.player_name_msg;
        let socket_id = send_player_name.socket_id;
        if let Some(mut room) = self.rooms.get_mut(&player_name_msg.level) {
            if room.has_player(socket_id) {
                None
            } else {
                if Self::is_name_valid(&player_name_msg.name) {
                    let level = player_name_msg.level;
                    let player = Arc::new(RwLock::new(Player::new(
                        self.clients.clone(),
                        socket_id,
                        level,
                        player_name_msg.name,
                    )));
                    room.add_player(socket_id, Arc::downgrade(&player));
                    self.clients
                        .get_mut(&socket_id)
                        .map(|mut client| client.set_level(level));
                    self.players.insert(socket_id, player);
                    Some(true)
                } else {
                    Some(false)
                }
            }
        } else {
            None
        }
    }
}

impl Sm64JsServer {
    pub fn new(chat_history: ChatHistoryData, rooms: Rooms) -> Self {
        if let Ok(admin_tokens) = env::var("ADMIN_TOKENS") {
            admin_tokens
                .split(':')
                .par_bridge()
                .for_each(|admin_token| {
                    ADMIN_TOKENS.write().insert(admin_token.to_string());
                })
        }
        Sm64JsServer {
            clients: Arc::new(DashMap::new()),
            players: HashMap::new(),
            rooms,
            chat_history,
        }
    }

    fn handle_command(chat_msg: ChatMsg) -> Option<Vec<u8>> {
        let message = chat_msg.message;
        if let Some(index) = message.find(' ') {
            let (cmd, message) = message.split_at(index);
            if ADMIN_COMMANDS.contains(cmd) && !ADMIN_TOKENS.read().contains(&chat_msg.admin_token)
            {
                return None;
            }
            match cmd.to_ascii_uppercase().as_ref() {
                "ANNOUNCEMENT" => {
                    let root_msg = RootMsg {
                        message: Some(root_msg::Message::UncompressedSm64jsMsg(Sm64JsMsg {
                            message: Some(sm64_js_msg::Message::AnnouncementMsg(AnnouncementMsg {
                                message: message.to_string(),
                                timer: 300,
                            })),
                        })),
                    };

                    let mut msg = vec![];
                    root_msg.encode(&mut msg).unwrap();
                    Some(msg)
                }
                _ => None,
            }
        } else {
            None
        }
    }

    fn handle_chat(
        &self,
        player: &Arc<RwLock<Player>>,
        mut chat_msg: ChatMsg,
    ) -> Result<Option<Vec<u8>>, Vec<u8>> {
        let root_msg = match player
            .write()
            .add_chat_message(self.chat_history.clone(), &chat_msg.message)
        {
            ChatResult::Ok(message) => {
                chat_msg.message = message;
                chat_msg.is_admin = ADMIN_TOKENS.read().contains(&chat_msg.admin_token);
                Some(RootMsg {
                    message: Some(root_msg::Message::UncompressedSm64jsMsg(Sm64JsMsg {
                        message: Some(sm64_js_msg::Message::ChatMsg(chat_msg)),
                    })),
                })
            }
            ChatResult::Err(err) => match err {
                ChatError::Spam => {
                    chat_msg.message =
                            "Chat message ignored: You have to wait longer between sending chat messages"
                                .to_string();
                    chat_msg.sender = "Server".to_string();
                    let root_msg = RootMsg {
                        message: Some(root_msg::Message::UncompressedSm64jsMsg(Sm64JsMsg {
                            message: Some(sm64_js_msg::Message::ChatMsg(chat_msg)),
                        })),
                    };
                    let mut msg = vec![];
                    root_msg.encode(&mut msg).unwrap();

                    return Err(msg);
                }
            },
        };

        Ok(if let Some(root_msg) = root_msg {
            let mut msg = vec![];
            root_msg.encode(&mut msg).unwrap();
            Some(msg)
        } else {
            None
        })
    }

    fn is_name_valid(name: &String) -> bool {
        if name.len() < 3 || name.len() > 14 || name.to_ascii_uppercase() == "SERVER" {
            return false;
        }
        let mut sanitized_name = format!("{}", escape(&name));
        let censor = Censor::Standard;
        sanitized_name = censor.censor(&sanitized_name);
        &sanitized_name == name
    }
}
