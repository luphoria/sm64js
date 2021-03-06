// Wdw

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT
} from "../../../include/surface_terrains"

// Unused collision mapping for the water level diamond.

// 0x070184C8 - 0x07018528
export const wdw_seg7_collision_070184C8 = [
    COL_INIT(),
    COL_VERTEX_INIT(0x6),
    COL_VERTEX(51, 50, -50),
    COL_VERTEX(-50, 50, -50),
    COL_VERTEX(0, 101, 0),
    COL_VERTEX(-50, 50, 51),
    COL_VERTEX(0, 0, 0),
    COL_VERTEX(51, 50, 51),
    COL_TRI_INIT(SURFACE_DEFAULT, 8),
    COL_TRI(0, 1, 2),
    COL_TRI(3, 1, 4),
    COL_TRI(1, 0, 4),
    COL_TRI(1, 3, 2),
    COL_TRI(5, 3, 4),
    COL_TRI(3, 5, 2),
    COL_TRI(5, 0, 2),
    COL_TRI(0, 5, 4),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 1620705666 - 2021-05-13 00:28:59 -0400
