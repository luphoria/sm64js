export const chain_chomp_seg6_animvalue_06025030 = [
    0x0000, 0x3FFF, 0x9602, 0x9483, 0x90D2, 0x8C1B, 0x878E, 0x845A,
    0x83AC, 0x88AE, 0x9264, 0x9BC5, 0x9FC9, 0x9C7C, 0x950F, 0x8C27,
    0x846D, 0x808A, 0x8348, 0x8ABB, 0x9273, 0x9602, 0x6FB2, 0x70C6,
    0x7369, 0x76BA, 0x79D6, 0x7BDD, 0x7BEB, 0x7752, 0x6ED7, 0x66CA,
    0x6379, 0x6692, 0x6D54, 0x756C, 0x7C87, 0x8054, 0x7E7C, 0x78B0,
    0x728D, 0x6FB2, 0x9602, 0x9483, 0x90D2, 0x8C1B, 0x878E, 0x845A,
    0x83AC, 0x88AE, 0x9264, 0x9BC5, 0x9FC9, 0x9C7C, 0x950F, 0x8C27,
    0x846D, 0x808A, 0x8348, 0x8ABB, 0x9273, 0x9602, 0x6FB2, 0x70C6,
    0x7369, 0x76BA, 0x79D6, 0x7BDD, 0x7BEB, 0x7752, 0x6ED7, 0x66CA,
    0x6379, 0x6692, 0x6D54, 0x756C, 0x7C87, 0x8054, 0x7E7C, 0x78B0,
    0x728D, 0x6FB2, 0x6FB2, 0x70C6, 0x7369, 0x76BA, 0x79D6, 0x7BDD,
    0x7BEB, 0x7752, 0x6ED7, 0x66CA, 0x6379, 0x6692, 0x6D54, 0x756C,
    0x7C87, 0x8054, 0x7E7C, 0x78B0, 0x728D, 0x6FB2, 0x3FFF, 0x0000,
]

const chain_chomp_seg6_animindex_06025100 = [
    0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0000, 0x0001, 0x0001, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0014, 0x002A,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0014, 0x0002,
    0x0001, 0x0000, 0x0001, 0x0066, 0x0001, 0x0000,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0014, 0x0052,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0014, 0x003E,
    0x0001, 0x0000, 0x0001, 0x0000, 0x0014, 0x0016,
]

export const chain_chomp_seg6_anim_06025160 = {
    flags: 0, unk02: 0, unk04: 0, unk06: 0, unk08: 0x14,
    unk0A: (chain_chomp_seg6_animindex_06025100.length / 6) - 1,
    values: chain_chomp_seg6_animvalue_06025030,
    indices: chain_chomp_seg6_animindex_06025100
}