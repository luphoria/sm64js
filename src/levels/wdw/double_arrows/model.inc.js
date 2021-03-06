// 0x070127C8 - 0x070128A8

import {
    gsSPVertex, gsSP2Triangles, gsSPEndDisplayList, gsDPPipeSync, gsSPClearGeometryMode,
    gsSPDisplayList, gsSPSetGeometryMode,
    G_LIGHTING
} from "../../../include/gbi"
const wdw_seg7_vertex_070127C8 = [
    [[  -895,  -1496,  -3387], 0, [     0,      0], [0xff, 0xff, 0x00, 0x80]],
    [[  -895,  -1496,  -3515], 0, [     0,      0], [0xff, 0xff, 0x00, 0x80]],
    [[ -1151,  -1496,  -3323], 0, [     0,      0], [0xff, 0xff, 0x00, 0x80]],
    [[  1536,  -1496,  -3131], 0, [     0,      0], [0xff, 0xff, 0x00, 0x80]],
    [[  1536,  -1496,  -3259], 0, [     0,      0], [0xff, 0xff, 0x00, 0x80]],
    [[  1280,  -1496,  -3323], 0, [     0,      0], [0xff, 0xff, 0x00, 0x80]],
    [[  1536,  -1496,  -3387], 0, [     0,      0], [0xff, 0xff, 0x00, 0x80]],
    [[  1920,  -1496,  -3259], 0, [     0,      0], [0xff, 0xff, 0x00, 0x80]],
    [[  1536,  -1496,  -3515], 0, [     0,      0], [0xff, 0xff, 0x00, 0x80]],
    [[  1920,  -1496,  -3387], 0, [     0,      0], [0xff, 0xff, 0x00, 0x80]],
    [[  -895,  -1496,  -3259], 0, [     0,      0], [0xff, 0xff, 0x00, 0x80]],
    [[  -511,  -1496,  -3259], 0, [     0,      0], [0xff, 0xff, 0x00, 0x80]],
    [[  -895,  -1496,  -3131], 0, [     0,      0], [0xff, 0xff, 0x00, 0x80]],
    [[  -511,  -1496,  -3387], 0, [     0,      0], [0xff, 0xff, 0x00, 0x80]],
];

// 0x070128A8 - 0x07012908
const wdw_seg7_dl_070128A8 = [
    gsSPVertex(wdw_seg7_vertex_070127C8, 14, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 4,  6,  5, 0x0,  4,  7,  6, 0x0),
    gsSP2Triangles( 6,  8,  5, 0x0,  7,  9,  6, 0x0),
    gsSP2Triangles(10,  0,  2, 0x0, 10, 11,  0, 0x0),
    gsSP2Triangles(10,  2, 12, 0x0, 11, 13,  0, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07012908 - 0x07012938
export const wdw_seg7_dl_07012908 = [
    gsDPPipeSync(),
    gsSPClearGeometryMode(G_LIGHTING),
    gsSPDisplayList(wdw_seg7_dl_070128A8),
    gsDPPipeSync(),
    gsSPSetGeometryMode(G_LIGHTING),
    gsSPEndDisplayList(),
].flat();

// 1620705666 - 2021-05-13 00:28:59 -0400
