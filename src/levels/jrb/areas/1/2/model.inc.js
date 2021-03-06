import * as Gbi from "../../../../../include/gbi"
import {
    jrb_seg7_texture_07000000,
    jrb_seg7_texture_07000800,
    jrb_seg7_texture_07001800,
    jrb_seg7_texture_07002000
} from "../../../texture.inc"

import {
    water_09000000,
    water_09000800,
    water_09001800,
    water_09002800,
    water_09003800,
    water_09004800,
    water_09005800,
    water_09006000,
    water_09006800,
    water_09007800,
    water_09008800,
    water_09009000,
    water_0900A000,
    water_0900A800,
    water_0900B800
} from "../../../../../textures/water"

const jrb_seg7_lights_070030A8 = Gbi.gdSPDefLights1(
	    0x10, 0x25, 0x1e,
	    0x41, 0x96, 0x78, 0x28, 0x28, 0x28
)

const jrb_seg7_lights_070030C0 = Gbi.gdSPDefLights1(
	    0x3f, 0x3f, 0x3f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const jrb_seg7_lights_070030D8 = Gbi.gdSPDefLights1(
	    0x1e, 0x27, 0x3a,
	    0x79, 0x9f, 0xeb, 0x28, 0x28, 0x28
)

const jrb_seg7_vertex_070030F0 = [
	{ pos: [ 3093, -5119, 4015 ], flag: 0, tc: [ 1220, 2248 ], color: [ 65, 99, 213, 255 ] },
	{ pos: [ 4422, -5119, 4786 ], flag: 0, tc: [ 2268, 1970 ], color: [ 6, 118, 210, 255 ] },
	{ pos: [ 4774, -5119, 2892 ], flag: 0, tc: [ 1500, 852 ], color: [ 15, 120, 219, 255 ] },
	{ pos: [ 4979, -5631, 2482 ], flag: 0, tc: [ 1396, 546 ], color: [ 0, 126, 0, 255 ] },
	{ pos: [ 4569, -5119, 2687 ], flag: 0, tc: [ 1296, 852 ], color: [ 37, 120, 241, 255 ] },
	{ pos: [ 5183, -5119, 2892 ], flag: 0, tc: [ 1704, 648 ], color: [ 241, 120, 219, 255 ] },
	{ pos: [ 4569, -5119, 2277 ], flag: 0, tc: [ 1092, 648 ], color: [ 37, 120, 15, 255 ] },
	{ pos: [ 5388, -5119, 2277 ], flag: 0, tc: [ 1500, 238 ], color: [ 219, 120, 15, 255 ] },
	{ pos: [ 5388, -5119, 2687 ], flag: 0, tc: [ 1704, 444 ], color: [ 219, 120, 241, 255 ] },
	{ pos: [ 4774, -5119, 2073 ], flag: 0, tc: [ 1092, 444 ], color: [ 15, 120, 37, 255 ] },
	{ pos: [ 5183, -5119, 2073 ], flag: 0, tc: [ 1296, 238 ], color: [ 241, 120, 37, 255 ] },
	{ pos: [ 2722, -5119, 2615 ], flag: 0, tc: [ 336, 1736 ], color: [ 63, 105, 29, 255 ] },
	{ pos: [ 6478, -5119, 1243 ], flag: 0, tc: [ 1528, -822 ], color: [ 171, 68, 65, 255 ] },
	{ pos: [ 5821, -5119, 4414 ], flag: 0, tc: [ 2780, 1086 ], color: [ 196, 96, 201, 255 ] },
	{ pos: [ 3750, -5119, 844 ], flag: 0, tc: [ 0, 340 ], color: [ 49, 77, 87, 255 ] },
	{ pos: [ 5150, -5119, 472 ], flag: 0, tc: [ 480, -544 ], color: [ 245, 91, 86, 255 ] },
]

const jrb_seg7_vertex_070031F0 = [
	{ pos: [ 6849, -5119, 2643 ], flag: 0, tc: [ 2412, -308 ], color: [ 161, 83, 10, 255 ] },
	{ pos: [ 6478, -5119, 1243 ], flag: 0, tc: [ 1528, -822 ], color: [ 171, 68, 65, 255 ] },
	{ pos: [ 5388, -5119, 2277 ], flag: 0, tc: [ 1500, 238 ], color: [ 219, 120, 15, 255 ] },
	{ pos: [ 5388, -5119, 2687 ], flag: 0, tc: [ 1704, 444 ], color: [ 219, 120, 241, 255 ] },
	{ pos: [ 5821, -5119, 4414 ], flag: 0, tc: [ 2780, 1086 ], color: [ 196, 96, 201, 255 ] },
	{ pos: [ 5183, -5119, 2892 ], flag: 0, tc: [ 1704, 648 ], color: [ 241, 120, 219, 255 ] },
]

const jrb_seg7_vertex_07003250 = [
	{ pos: [ 1888, 1024, 6165 ], flag: 0, tc: [ 1884, 3024 ], color: [ 42, 68, 158, 255 ] },
	{ pos: [ 1879, -511, 5086 ], flag: 0, tc: [ 1500, 3032 ], color: [ 53, 84, 179, 255 ] },
	{ pos: [ 1098, 1024, 6104 ], flag: 0, tc: [ 1884, 3812 ], color: [ 1, 83, 161, 255 ] },
	{ pos: [ 294, -511, 4758 ], flag: 0, tc: [ 1500, 4614 ], color: [ 222, 113, 211, 255 ] },
	{ pos: [ -219, 512, 5643 ], flag: 0, tc: [ 1756, 5128 ], color: [ 227, 99, 183, 255 ] },
	{ pos: [ 330, 1024, 6232 ], flag: 0, tc: [ 1884, 4578 ], color: [ 211, 107, 205, 255 ] },
	{ pos: [ -1662, -1023, 3030 ], flag: 0, tc: [ 1116, -312 ], color: [ 252, 123, 27, 255 ] },
	{ pos: [ -2362, -1023, 3215 ], flag: 0, tc: [ 652, -188 ], color: [ 45, 99, 63, 255 ] },
	{ pos: [ -2876, -1023, 4101 ], flag: 0, tc: [ 312, 400 ], color: [ 67, 107, 249, 255 ] },
	{ pos: [ -777, -1023, 3544 ], flag: 0, tc: [ 1708, 30 ], color: [ 212, 102, 59, 255 ] },
	{ pos: [ -1848, 0, 2330 ], flag: 0, tc: [ 996, -778 ], color: [ 251, 109, 64, 255 ] },
	{ pos: [ -2690, -1023, 4801 ], flag: 0, tc: [ 432, 866 ], color: [ 53, 107, 215, 255 ] },
	{ pos: [ -1805, -1023, 5315 ], flag: 0, tc: [ 1024, 1206 ], color: [ 22, 96, 177, 255 ] },
	{ pos: [ -1105, -1023, 5129 ], flag: 0, tc: [ 1488, 1082 ], color: [ 226, 103, 189, 255 ] },
	{ pos: [ -3762, 0, 3587 ], flag: 0, tc: [ -276, 58 ], color: [ 43, 119, 249, 255 ] },
	{ pos: [ -3390, 512, 4987 ], flag: 0, tc: [ 0, 990 ], color: [ 57, 97, 200, 255 ] },
]

const jrb_seg7_vertex_07003350 = [
	{ pos: [ -1105, -1023, 5129 ], flag: 0, tc: [ 1488, 1082 ], color: [ 226, 103, 189, 255 ] },
	{ pos: [ -219, 512, 5643 ], flag: 0, tc: [ 2076, 1424 ], color: [ 227, 99, 183, 255 ] },
	{ pos: [ 294, -511, 4758 ], flag: 0, tc: [ 2420, 838 ], color: [ 222, 113, 211, 255 ] },
	{ pos: [ -591, -1023, 4244 ], flag: 0, tc: [ 1832, 496 ], color: [ 216, 120, 1, 255 ] },
	{ pos: [ -1662, -1023, 3030 ], flag: 0, tc: [ 1116, -312 ], color: [ 252, 123, 27, 255 ] },
	{ pos: [ -1619, 512, 6015 ], flag: 0, tc: [ 1148, 1672 ], color: [ 0, 108, 190, 255 ] },
	{ pos: [ -1805, -1023, 5315 ], flag: 0, tc: [ 1024, 1206 ], color: [ 22, 96, 177, 255 ] },
	{ pos: [ -77, -511, 3358 ], flag: 0, tc: [ 2172, -94 ], color: [ 242, 122, 29, 255 ] },
	{ pos: [ -777, -1023, 3544 ], flag: 0, tc: [ 1708, 30 ], color: [ 212, 102, 59, 255 ] },
	{ pos: [ -3390, 512, 4987 ], flag: 0, tc: [ 0, 990 ], color: [ 57, 97, 200, 255 ] },
	{ pos: [ -2690, -1023, 4801 ], flag: 0, tc: [ 432, 866 ], color: [ 53, 107, 215, 255 ] },
	{ pos: [ -2876, -1023, 4101 ], flag: 0, tc: [ 312, 400 ], color: [ 67, 107, 249, 255 ] },
	{ pos: [ -3762, 0, 3587 ], flag: 0, tc: [ -276, 58 ], color: [ 43, 119, 249, 255 ] },
	{ pos: [ -2362, -1023, 3215 ], flag: 0, tc: [ 652, -188 ], color: [ 45, 99, 63, 255 ] },
	{ pos: [ -4133, 0, 2187 ], flag: 0, tc: [ -524, -872 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -3248, 0, 2701 ], flag: 0, tc: [ 64, -530 ], color: [ 29, 116, 40, 255 ] },
]

const jrb_seg7_vertex_07003450 = [
	{ pos: [ -1848, 0, 2330 ], flag: 0, tc: [ 996, -778 ], color: [ 251, 109, 64, 255 ] },
	{ pos: [ -3248, 0, 2701 ], flag: 0, tc: [ 64, -530 ], color: [ 29, 116, 40, 255 ] },
	{ pos: [ -2362, -1023, 3215 ], flag: 0, tc: [ 652, -188 ], color: [ 45, 99, 63, 255 ] },
	{ pos: [ -1619, 512, 6015 ], flag: 0, tc: [ 1148, 1672 ], color: [ 0, 108, 190, 255 ] },
	{ pos: [ -3390, 512, 4987 ], flag: 0, tc: [ 0, 990 ], color: [ 57, 97, 200, 255 ] },
	{ pos: [ -4161, 512, 6315 ], flag: 0, tc: [ -540, 1872 ], color: [ 26, 105, 191, 255 ] },
	{ pos: [ -5256, 512, 4733 ], flag: 0, tc: [ -1268, 820 ], color: [ 4, 123, 226, 255 ] },
	{ pos: [ -3762, 0, 3587 ], flag: 0, tc: [ -276, 58 ], color: [ 43, 119, 249, 255 ] },
	{ pos: [ -219, 512, 5643 ], flag: 0, tc: [ 2076, 1424 ], color: [ 227, 99, 183, 255 ] },
	{ pos: [ -805, 512, 7672 ], flag: 0, tc: [ 1688, 2774 ], color: [ 234, 103, 187, 255 ] },
	{ pos: [ -777, -1023, 3544 ], flag: 0, tc: [ 1708, 30 ], color: [ 212, 102, 59, 255 ] },
	{ pos: [ -77, -511, 3358 ], flag: 0, tc: [ 2172, -94 ], color: [ 242, 122, 29, 255 ] },
	{ pos: [ -705, 0, 2401 ], flag: 0, tc: [ 1756, -730 ], color: [ 20, 107, 64, 255 ] },
	{ pos: [ -4133, 0, 2187 ], flag: 0, tc: [ -524, -872 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -2771, 0, 1676 ], flag: 0, tc: [ 380, -1212 ], color: [ 0, 127, 0, 255 ] },
]

const jrb_seg7_vertex_07003540 = [
	{ pos: [ -2771, 614, 1676 ], flag: 0, tc: [ 2536, 120 ], color: [ 3, 122, 32, 255 ] },
	{ pos: [ -705, 512, 2401 ], flag: 0, tc: [ 4600, 844 ], color: [ 219, 96, 73, 255 ] },
	{ pos: [ -3747, 1024, 257 ], flag: 0, tc: [ 1564, -1296 ], color: [ 254, 121, 37, 255 ] },
	{ pos: [ 1879, -511, 5086 ], flag: 0, tc: [ 3476, 1054 ], color: [ 53, 84, 179, 255 ] },
	{ pos: [ -77, -511, 3358 ], flag: 0, tc: [ 2172, -94 ], color: [ 242, 122, 29, 255 ] },
	{ pos: [ 294, -511, 4758 ], flag: 0, tc: [ 2420, 838 ], color: [ 222, 113, 211, 255 ] },
	{ pos: [ 1136, -1023, 2287 ], flag: 0, tc: [ 2980, -806 ], color: [ 87, 62, 67, 255 ] },
	{ pos: [ -705, 0, 2401 ], flag: 0, tc: [ 1756, -730 ], color: [ 20, 107, 64, 255 ] },
	{ pos: [ -4133, 0, 2187 ], flag: 0, tc: [ -524, -872 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ -5170, 0, 3362 ], flag: 0, tc: [ -1212, -92 ], color: [ 3, 124, 234, 255 ] },
	{ pos: [ -3762, 0, 3587 ], flag: 0, tc: [ -276, 58 ], color: [ 43, 119, 249, 255 ] },
	{ pos: [ -5256, 512, 4733 ], flag: 0, tc: [ -1268, 820 ], color: [ 4, 123, 226, 255 ] },
	{ pos: [ -4307, 1024, 405 ], flag: 0, tc: [ 1004, -1146 ], color: [ 9, 123, 28, 255 ] },
	{ pos: [ -4133, 614, 2187 ], flag: 0, tc: [ 1176, 632 ], color: [ 17, 123, 23, 255 ] },
	{ pos: [ -5345, 1024, 1011 ], flag: 0, tc: [ 0, -542 ], color: [ 21, 123, 20, 255 ] },
	{ pos: [ -5756, 1024, 1719 ], flag: 0, tc: [ -440, 164 ], color: [ 25, 122, 19, 255 ] },
]

const jrb_seg7_vertex_07003640 = [
	{ pos: [ -5170, 614, 3362 ], flag: 0, tc: [ 144, 1802 ], color: [ 35, 121, 3, 255 ] },
	{ pos: [ -4133, 614, 2187 ], flag: 0, tc: [ 1176, 632 ], color: [ 17, 123, 23, 255 ] },
	{ pos: [ -5756, 1024, 1719 ], flag: 0, tc: [ -440, 164 ], color: [ 25, 122, 19, 255 ] },
	{ pos: [ -4579, 1024, 508 ], flag: 0, tc: [ 732, -1044 ], color: [ 13, 123, 26, 255 ] },
	{ pos: [ -5345, 1024, 1011 ], flag: 0, tc: [ 0, -542 ], color: [ 21, 123, 20, 255 ] },
	{ pos: [ -4307, 1024, 405 ], flag: 0, tc: [ 1004, -1146 ], color: [ 9, 123, 28, 255 ] },
	{ pos: [ -5963, 1024, 1954 ], flag: 0, tc: [ -644, 398 ], color: [ 39, 120, 12, 255 ] },
	{ pos: [ -6077, 1024, 3782 ], flag: 0, tc: [ -760, 2222 ], color: [ 46, 117, 242, 255 ] },
	{ pos: [ -5256, 1024, 4733 ], flag: 0, tc: [ 56, 3170 ], color: [ 37, 116, 224, 255 ] },
	{ pos: [ -705, 512, 2401 ], flag: 0, tc: [ 4600, 844 ], color: [ 219, 96, 73, 255 ] },
	{ pos: [ -3443, 1024, 319 ], flag: 0, tc: [ 1864, -1234 ], color: [ 204, 74, 87, 255 ] },
	{ pos: [ -3747, 1024, 257 ], flag: 0, tc: [ 1564, -1296 ], color: [ 254, 121, 37, 255 ] },
]

const jrb_seg7_vertex_07003700 = [
	{ pos: [ 728, -630, 3571 ], flag: 0, tc: [ 2012, 990 ], color: [ 32, 9, 122, 255 ] },
	{ pos: [ 696, 1024, 3452 ], flag: 0, tc: [ 1604, -662 ], color: [ 32, 9, 122, 255 ] },
	{ pos: [ 519, 1024, 3349 ], flag: 0, tc: [ 1120, -662 ], color: [ 151, 8, 69, 255 ] },
	{ pos: [ 799, 1024, 3275 ], flag: 0, tc: [ 1120, -662 ], color: [ 122, 9, 224, 255 ] },
	{ pos: [ 589, -726, 3046 ], flag: 0, tc: [ 204, 1084 ], color: [ 7, 8, 130, 255 ] },
	{ pos: [ 622, 1024, 3172 ], flag: 0, tc: [ 640, -662 ], color: [ 187, 8, 151, 255 ] },
	{ pos: [ 927, -751, 3241 ], flag: 0, tc: [ 1120, 1108 ], color: [ 122, 9, 224, 255 ] },
	{ pos: [ 402, -607, 3381 ], flag: 0, tc: [ 1120, 966 ], color: [ 130, 8, 249, 255 ] },
	{ pos: [ 225, -595, 2823 ], flag: 0, tc: [ -1112, 872 ], color: [ 109, 7, 63, 255 ] },
	{ pos: [ 2, 1024, 2812 ], flag: 0, tc: [ -600, -744 ], color: [ 231, 7, 124, 255 ] },
	{ pos: [ -40, -455, 2888 ], flag: 0, tc: [ -164, 734 ], color: [ 161, 7, 83, 255 ] },
	{ pos: [ 150, -509, 2557 ], flag: 0, tc: [ -2072, 788 ], color: [ 63, 7, 147, 255 ] },
	{ pos: [ 105, 1024, 2635 ], flag: 0, tc: [ -1624, -744 ], color: [ 63, 7, 147, 255 ] },
	{ pos: [ -105, -376, 2631 ], flag: 0, tc: [ -1112, 654 ], color: [ 172, 7, 162, 255 ] },
	{ pos: [ -34, 1024, 2672 ], flag: 0, tc: [ -1112, -744 ], color: [ 132, 6, 230, 255 ] },
	{ pos: [ 142, 1024, 2775 ], flag: 0, tc: [ -1112, -744 ], color: [ 109, 7, 63, 255 ] },
]

const jrb_seg7_vertex_07003800 = [
	{ pos: [ -3928, 922, 2443 ], flag: 0, tc: [ 2012, -3610 ], color: [ 87, 38, 84, 255 ] },
	{ pos: [ -3928, 0, 2443 ], flag: 0, tc: [ 2012, 990 ], color: [ 56, 0, 113, 255 ] },
	{ pos: [ -3928, 0, 1829 ], flag: 0, tc: [ 0, 990 ], color: [ 113, 0, 200, 255 ] },
	{ pos: [ 1252, -664, 3893 ], flag: 0, tc: [ 928, 942 ], color: [ 83, 7, 95, 255 ] },
	{ pos: [ 1166, 1024, 3843 ], flag: 0, tc: [ 928, -744 ], color: [ 124, 7, 25, 255 ] },
	{ pos: [ 1043, 1024, 3876 ], flag: 0, tc: [ 1380, -744 ], color: [ 193, 7, 109, 255 ] },
	{ pos: [ 1185, -712, 3631 ], flag: 0, tc: [ 0, 990 ], color: [ 95, 7, 173, 255 ] },
	{ pos: [ 1133, 1024, 3720 ], flag: 0, tc: [ 476, -744 ], color: [ 25, 7, 132, 255 ] },
	{ pos: [ 925, -640, 3703 ], flag: 0, tc: [ 928, 918 ], color: [ 147, 7, 193, 255 ] },
	{ pos: [ 1010, 1024, 3752 ], flag: 0, tc: [ 928, -744 ], color: [ 147, 7, 193, 255 ] },
	{ pos: [ 995, -594, 3958 ], flag: 0, tc: [ 1856, 872 ], color: [ 193, 7, 109, 255 ] },
	{ pos: [ -3928, 922, 1829 ], flag: 0, tc: [ 2012, -3608 ], color: [ 84, 38, 169, 255 ] },
	{ pos: [ -4543, 0, 1829 ], flag: 0, tc: [ -1048, 990 ], color: [ 200, 0, 143, 255 ] },
	{ pos: [ -4543, 922, 1829 ], flag: 0, tc: [ -1052, -3608 ], color: [ 169, 38, 172, 255 ] },
	{ pos: [ -3928, 922, 1829 ], flag: 0, tc: [ 0, -3610 ], color: [ 84, 38, 169, 255 ] },
]

const jrb_seg7_vertex_070038F0 = [
	{ pos: [ -4543, 922, 1829 ], flag: 0, tc: [ 0, -3610 ], color: [ 169, 38, 172, 255 ] },
	{ pos: [ -4543, 0, 1829 ], flag: 0, tc: [ 0, 990 ], color: [ 200, 0, 143, 255 ] },
	{ pos: [ -4543, 0, 2443 ], flag: 0, tc: [ 2012, 990 ], color: [ 143, 0, 56, 255 ] },
	{ pos: [ -4543, 922, 2443 ], flag: 0, tc: [ 2012, -3610 ], color: [ 172, 38, 87, 255 ] },
	{ pos: [ -4543, 922, 2443 ], flag: 0, tc: [ -1052, -3608 ], color: [ 172, 38, 87, 255 ] },
	{ pos: [ -3928, 0, 2443 ], flag: 0, tc: [ 2012, 990 ], color: [ 56, 0, 113, 255 ] },
	{ pos: [ -3928, 922, 2443 ], flag: 0, tc: [ 2012, -3608 ], color: [ 87, 38, 84, 255 ] },
	{ pos: [ -4543, 0, 2443 ], flag: 0, tc: [ -1048, 990 ], color: [ 143, 0, 56, 255 ] },
	{ pos: [ -3928, 922, 1829 ], flag: 0, tc: [ 2012, -3608 ], color: [ 84, 38, 169, 255 ] },
	{ pos: [ -3928, 0, 1829 ], flag: 0, tc: [ 2012, 990 ], color: [ 113, 0, 200, 255 ] },
	{ pos: [ -4543, 0, 1829 ], flag: 0, tc: [ -1048, 990 ], color: [ 200, 0, 143, 255 ] },
	{ pos: [ -3976, 1024, 1877 ], flag: 0, tc: [ 1772, -4120 ], color: [ 48, 67, 160, 255 ] },
	{ pos: [ -4543, 922, 1829 ], flag: 0, tc: [ -1052, -3608 ], color: [ 169, 38, 172, 255 ] },
	{ pos: [ -4495, 1024, 2395 ], flag: 0, tc: [ -812, -4120 ], color: [ 208, 67, 96, 255 ] },
	{ pos: [ -3976, 1024, 2395 ], flag: 0, tc: [ 1772, -4120 ], color: [ 96, 67, 48, 255 ] },
]

const jrb_seg7_vertex_070039E0 = [
	{ pos: [ -3928, 922, 1829 ], flag: 0, tc: [ 0, -3610 ], color: [ 84, 38, 169, 255 ] },
	{ pos: [ -3976, 1024, 1877 ], flag: 0, tc: [ 128, -4120 ], color: [ 48, 67, 160, 255 ] },
	{ pos: [ -3976, 1024, 2395 ], flag: 0, tc: [ 1852, -4120 ], color: [ 96, 67, 48, 255 ] },
	{ pos: [ -3928, 922, 2443 ], flag: 0, tc: [ 2012, -3610 ], color: [ 87, 38, 84, 255 ] },
	{ pos: [ -4495, 1024, 1877 ], flag: 0, tc: [ 128, -4120 ], color: [ 160, 67, 208, 255 ] },
	{ pos: [ -4543, 922, 2443 ], flag: 0, tc: [ 2012, -3610 ], color: [ 172, 38, 87, 255 ] },
	{ pos: [ -4495, 1024, 2395 ], flag: 0, tc: [ 1852, -4120 ], color: [ 208, 67, 96, 255 ] },
	{ pos: [ -4543, 922, 1829 ], flag: 0, tc: [ 0, -3610 ], color: [ 169, 38, 172, 255 ] },
	{ pos: [ -3976, 1024, 1877 ], flag: 0, tc: [ 1772, -4120 ], color: [ 48, 67, 160, 255 ] },
	{ pos: [ -4543, 922, 1829 ], flag: 0, tc: [ -1052, -3608 ], color: [ 169, 38, 172, 255 ] },
	{ pos: [ -4495, 1024, 1877 ], flag: 0, tc: [ -812, -4120 ], color: [ 160, 67, 208, 255 ] },
]

const jrb_seg7_vertex_07003A90 = [
	{ pos: [ -2585, 512, 6165 ], flag: 0, tc: [ 780, 1090 ], color: [ 200, 5, 113, 255 ] },
	{ pos: [ -2483, 512, 6165 ], flag: 0, tc: [ 1264, 1090 ], color: [ 113, 5, 56, 255 ] },
	{ pos: [ -2500, 1024, 6148 ], flag: 0, tc: [ 1444, 582 ], color: [ 56, 5, 113, 255 ] },
	{ pos: [ -2500, 1024, 6080 ], flag: 0, tc: [ 1120, 582 ], color: [ 113, 5, 200, 255 ] },
	{ pos: [ -2483, 512, 6062 ], flag: 0, tc: [ 780, 1090 ], color: [ 56, 5, 143, 255 ] },
	{ pos: [ -2568, 1024, 6080 ], flag: 0, tc: [ 800, 582 ], color: [ 200, 5, 143, 255 ] },
	{ pos: [ -2585, 512, 6062 ], flag: 0, tc: [ 300, 1090 ], color: [ 143, 5, 200, 255 ] },
	{ pos: [ -2568, 1024, 6148 ], flag: 0, tc: [ 1120, 582 ], color: [ 143, 5, 56, 255 ] },
]

const jrb_seg7_vertex_07003B10 = [
	{ pos: [ 7030, -3325, 1838 ], flag: 0, tc: [ 564, 1274 ], color: [ 136, 26, 31, 255 ] },
	{ pos: [ 7092, -3022, 1822 ], flag: 0, tc: [ 664, 1290 ], color: [ 136, 26, 31, 255 ] },
	{ pos: [ 7435, 0, 615 ], flag: 0, tc: [ 1672, 498 ], color: [ 157, 19, 76, 255 ] },
	{ pos: [ 6478, -5119, 1243 ], flag: 0, tc: [ 0, 558 ], color: [ 171, 68, 65, 255 ] },
	{ pos: [ 7038, -3476, 1995 ], flag: 0, tc: [ 516, 1400 ], color: [ 136, 26, 31, 255 ] },
	{ pos: [ 7162, -2871, 1962 ], flag: 0, tc: [ 716, 1432 ], color: [ 136, 26, 31, 255 ] },
	{ pos: [ 7992, 0, 2714 ], flag: 0, tc: [ 1672, 2398 ], color: [ 131, 19, 1, 255 ] },
	{ pos: [ 5662, -4095, 533 ], flag: 0, tc: [ 308, -372 ], color: [ 194, 24, 107, 255 ] },
	{ pos: [ 5221, 0, -669 ], flag: 0, tc: [ 1672, -1516 ], color: [ 247, 15, 125, 255 ] },
	{ pos: [ 5457, -3890, 366 ], flag: 0, tc: [ 376, -594 ], color: [ 194, 24, 107, 255 ] },
	{ pos: [ 5221, 1024, -669 ], flag: 0, tc: [ 2012, -1516 ], color: [ 223, 0, 122, 255 ] },
	{ pos: [ 7435, 1024, 615 ], flag: 0, tc: [ 2012, 498 ], color: [ 146, 0, 62, 255 ] },
	{ pos: [ 7117, -3476, 2292 ], flag: 0, tc: [ 516, 1670 ], color: [ 136, 26, 31, 255 ] },
	{ pos: [ 6849, -5119, 2643 ], flag: 0, tc: [ 0, 1824 ], color: [ 161, 83, 10, 255 ] },
	{ pos: [ 5662, -4709, 675 ], flag: 0, tc: [ 104, -260 ], color: [ 194, 24, 107, 255 ] },
	{ pos: [ 7187, -3325, 2432 ], flag: 0, tc: [ 564, 1812 ], color: [ 136, 26, 30, 255 ] },
]

const jrb_seg7_vertex_07003C10 = [
	{ pos: [ 7249, -3022, 2416 ], flag: 0, tc: [ 664, 1828 ], color: [ 136, 26, 31, 255 ] },
	{ pos: [ 6849, -5119, 2643 ], flag: 0, tc: [ 0, 1824 ], color: [ 161, 83, 10, 255 ] },
	{ pos: [ 7992, 0, 2714 ], flag: 0, tc: [ 1672, 2398 ], color: [ 131, 19, 1, 255 ] },
	{ pos: [ 7187, -3325, 2432 ], flag: 0, tc: [ 564, 1812 ], color: [ 136, 26, 30, 255 ] },
	{ pos: [ 7241, -2871, 2259 ], flag: 0, tc: [ 716, 1700 ], color: [ 136, 26, 31, 255 ] },
	{ pos: [ 7162, -2871, 1962 ], flag: 0, tc: [ 716, 1432 ], color: [ 136, 26, 31, 255 ] },
	{ pos: [ 7435, 1024, 615 ], flag: 0, tc: [ 2012, 498 ], color: [ 146, 0, 62, 255 ] },
	{ pos: [ 7992, 1024, 2714 ], flag: 0, tc: [ 2012, 2398 ], color: [ 134, 0, 223, 255 ] },
	{ pos: [ -805, 512, 7672 ], flag: 0, tc: [ 1840, -8672 ], color: [ 234, 103, 187, 255 ] },
	{ pos: [ -805, 1024, 7672 ], flag: 0, tc: [ 2012, -8672 ], color: [ 34, 0, 134, 255 ] },
	{ pos: [ -210, 1024, 7709 ], flag: 0, tc: [ 2012, -8162 ], color: [ 212, 59, 154, 255 ] },
	{ pos: [ -4161, 512, 6315 ], flag: 0, tc: [ 1840, -11024 ], color: [ 26, 105, 191, 255 ] },
	{ pos: [ -3443, 1024, 319 ], flag: 0, tc: [ 2012, -9448 ], color: [ 204, 74, 87, 255 ] },
	{ pos: [ -705, 512, 2401 ], flag: 0, tc: [ 1840, -6164 ], color: [ 219, 96, 73, 255 ] },
	{ pos: [ -705, 1024, 2401 ], flag: 0, tc: [ 2012, -6164 ], color: [ 235, 0, 125, 255 ] },
	{ pos: [ -4161, 1024, 6315 ], flag: 0, tc: [ 2012, -11024 ], color: [ 47, 0, 139, 255 ] },
]

const jrb_seg7_vertex_07003D10 = [
	{ pos: [ 4279, 1024, 7071 ], flag: 0, tc: [ 2012, -3890 ], color: [ 197, 0, 145, 255 ] },
	{ pos: [ 4279, -1535, 7071 ], flag: 0, tc: [ 1160, -3890 ], color: [ 0, 41, 136, 255 ] },
	{ pos: [ 3190, 1024, 7360 ], flag: 0, tc: [ 2012, -4988 ], color: [ 31, 27, 137, 255 ] },
	{ pos: [ 6707, 1024, 4928 ], flag: 0, tc: [ 2012, -756 ], color: [ 163, 0, 171, 255 ] },
	{ pos: [ 6707, -1023, 4928 ], flag: 0, tc: [ 1332, -756 ], color: [ 154, 12, 182, 255 ] },
	{ pos: [ 5821, -5119, 4414 ], flag: 0, tc: [ 0, -1304 ], color: [ 196, 96, 201, 255 ] },
	{ pos: [ 4422, -5119, 4786 ], flag: 0, tc: [ 0, -2716 ], color: [ 6, 118, 210, 255 ] },
	{ pos: [ 5221, 0, -669 ], flag: 0, tc: [ 1672, -1516 ], color: [ 247, 15, 125, 255 ] },
	{ pos: [ 5167, -3890, 198 ], flag: 0, tc: [ 376, -858 ], color: [ 240, 27, 122, 255 ] },
	{ pos: [ 5457, -3890, 366 ], flag: 0, tc: [ 376, -594 ], color: [ 194, 24, 107, 255 ] },
	{ pos: [ 4842, -3890, 284 ], flag: 0, tc: [ 376, -276 ], color: [ 31, 26, 120, 255 ] },
	{ pos: [ 5221, 0, -669 ], flag: 0, tc: [ 1672, 498 ], color: [ 247, 15, 125, 255 ] },
	{ pos: [ 3121, 0, -112 ], flag: 0, tc: [ 1672, -1618 ], color: [ 70, 16, 104, 255 ] },
	{ pos: [ 4638, -4095, 383 ], flag: 0, tc: [ 308, -502 ], color: [ 31, 26, 120, 255 ] },
	{ pos: [ 5167, -3890, 198 ], flag: 0, tc: [ 376, 52 ], color: [ 240, 27, 122, 255 ] },
]

const jrb_seg7_vertex_07003E00 = [
	{ pos: [ 3121, 1024, -112 ], flag: 0, tc: [ 2012, -1618 ], color: [ 62, 0, 110, 255 ] },
	{ pos: [ 5221, 0, -669 ], flag: 0, tc: [ 1672, 498 ], color: [ 247, 15, 125, 255 ] },
	{ pos: [ 5221, 1024, -669 ], flag: 0, tc: [ 2012, 498 ], color: [ 223, 0, 122, 255 ] },
	{ pos: [ 3121, 0, -112 ], flag: 0, tc: [ 1672, -1618 ], color: [ 70, 16, 104, 255 ] },
	{ pos: [ 3750, -5119, 844 ], flag: 0, tc: [ 0, -1500 ], color: [ 49, 77, 87, 255 ] },
	{ pos: [ 4638, -4095, 383 ], flag: 0, tc: [ 308, -502 ], color: [ 31, 26, 120, 255 ] },
	{ pos: [ 4638, -4709, 518 ], flag: 0, tc: [ 104, -564 ], color: [ 31, 26, 120, 255 ] },
	{ pos: [ 5150, -5119, 472 ], flag: 0, tc: [ 0, -90 ], color: [ 245, 91, 86, 255 ] },
	{ pos: [ 4842, -4914, 509 ], flag: 0, tc: [ 36, -378 ], color: [ 31, 26, 120, 255 ] },
	{ pos: [ 7992, 0, 2714 ], flag: 0, tc: [ 1672, 1398 ], color: [ 131, 19, 1, 255 ] },
	{ pos: [ 5821, -5119, 4414 ], flag: 0, tc: [ 0, -1304 ], color: [ 196, 96, 201, 255 ] },
	{ pos: [ 6707, -1023, 4928 ], flag: 0, tc: [ 1332, -756 ], color: [ 154, 12, 182, 255 ] },
	{ pos: [ 6478, -5119, 1243 ], flag: 0, tc: [ 0, 558 ], color: [ 171, 68, 65, 255 ] },
	{ pos: [ 5662, -4709, 675 ], flag: 0, tc: [ 104, -260 ], color: [ 194, 24, 107, 255 ] },
	{ pos: [ 5457, -4914, 603 ], flag: 0, tc: [ 36, -408 ], color: [ 194, 24, 107, 255 ] },
]

const jrb_seg7_vertex_07003EF0 = [
	{ pos: [ 2350, 0, 1215 ], flag: 0, tc: [ 1672, 236 ], color: [ 95, 14, 82, 255 ] },
	{ pos: [ 2722, -5119, 2615 ], flag: 0, tc: [ 0, -304 ], color: [ 63, 105, 29, 255 ] },
	{ pos: [ 3750, -5119, 844 ], flag: 0, tc: [ 0, 1010 ], color: [ 49, 77, 87, 255 ] },
	{ pos: [ 1136, -1023, 2287 ], flag: 0, tc: [ 1332, -850 ], color: [ 87, 62, 67, 255 ] },
	{ pos: [ 3121, 0, -112 ], flag: 0, tc: [ 1672, 1222 ], color: [ 70, 16, 104, 255 ] },
	{ pos: [ 7992, 1024, 2714 ], flag: 0, tc: [ 2012, 1398 ], color: [ 134, 0, 223, 255 ] },
	{ pos: [ 7992, 0, 2714 ], flag: 0, tc: [ 1672, 1398 ], color: [ 131, 19, 1, 255 ] },
	{ pos: [ 6707, -1023, 4928 ], flag: 0, tc: [ 1332, -756 ], color: [ 154, 12, 182, 255 ] },
	{ pos: [ 6707, 1024, 4928 ], flag: 0, tc: [ 2012, -756 ], color: [ 163, 0, 171, 255 ] },
	{ pos: [ 6478, -5119, 1243 ], flag: 0, tc: [ 0, 558 ], color: [ 171, 68, 65, 255 ] },
	{ pos: [ 5457, -4914, 603 ], flag: 0, tc: [ 36, -408 ], color: [ 194, 24, 107, 255 ] },
	{ pos: [ 5150, -5119, 472 ], flag: 0, tc: [ 0, -650 ], color: [ 245, 91, 86, 255 ] },
	{ pos: [ 6849, -5119, 2643 ], flag: 0, tc: [ 0, 420 ], color: [ 161, 83, 10, 255 ] },
	{ pos: [ 5821, -5119, 4414 ], flag: 0, tc: [ 0, -1304 ], color: [ 196, 96, 201, 255 ] },
]

const jrb_seg7_vertex_07003FD0 = [
	{ pos: [ 2863, 1024, 7010 ], flag: 0, tc: [ 2012, -1176 ], color: [ 82, 50, 174, 255 ] },
	{ pos: [ 3190, 1024, 7360 ], flag: 0, tc: [ 2012, -1642 ], color: [ 31, 27, 137, 255 ] },
	{ pos: [ 4279, -1535, 7071 ], flag: 0, tc: [ 1160, -1936 ], color: [ 0, 41, 136, 255 ] },
	{ pos: [ 1879, -511, 5086 ], flag: 0, tc: [ 1500, 978 ], color: [ 53, 84, 179, 255 ] },
	{ pos: [ 3093, -5119, 4015 ], flag: 0, tc: [ 0, 1296 ], color: [ 65, 99, 213, 255 ] },
	{ pos: [ 4422, -5119, 4786 ], flag: 0, tc: [ 0, 0 ], color: [ 6, 118, 210, 255 ] },
	{ pos: [ 1136, -1023, 2287 ], flag: 0, tc: [ 1332, 3766 ], color: [ 87, 62, 67, 255 ] },
	{ pos: [ 2722, -5119, 2615 ], flag: 0, tc: [ 0, 2690 ], color: [ 63, 105, 29, 255 ] },
	{ pos: [ 1888, 1024, 6165 ], flag: 0, tc: [ 2012, 40 ], color: [ 42, 68, 158, 255 ] },
	{ pos: [ -705, 1024, 2401 ], flag: 0, tc: [ 2012, -6164 ], color: [ 235, 0, 125, 255 ] },
	{ pos: [ 1136, -1023, 2287 ], flag: 0, tc: [ 1332, -4478 ], color: [ 87, 62, 67, 255 ] },
	{ pos: [ 1136, 1024, 2287 ], flag: 0, tc: [ 2012, -4478 ], color: [ 61, 0, 111, 255 ] },
	{ pos: [ 5457, -4914, 603 ], flag: 0, tc: [ 36, -408 ], color: [ 194, 24, 107, 255 ] },
	{ pos: [ 5152, -4914, 427 ], flag: 0, tc: [ 36, -686 ], color: [ 240, 27, 122, 255 ] },
	{ pos: [ 5150, -5119, 472 ], flag: 0, tc: [ 0, -650 ], color: [ 245, 91, 86, 255 ] },
]

const jrb_seg7_vertex_070040C0 = [
	{ pos: [ 5150, -5119, 472 ], flag: 0, tc: [ 0, -90 ], color: [ 245, 91, 86, 255 ] },
	{ pos: [ 5152, -4914, 427 ], flag: 0, tc: [ 36, -66 ], color: [ 240, 27, 122, 255 ] },
	{ pos: [ 4842, -4914, 509 ], flag: 0, tc: [ 36, -378 ], color: [ 31, 26, 120, 255 ] },
	{ pos: [ 1136, 1024, 2287 ], flag: 0, tc: [ 2012, -828 ], color: [ 61, 0, 111, 255 ] },
	{ pos: [ 2350, 0, 1215 ], flag: 0, tc: [ 1672, 236 ], color: [ 95, 14, 82, 255 ] },
	{ pos: [ 2350, 1024, 1215 ], flag: 0, tc: [ 2012, 248 ], color: [ 102, 0, 75, 255 ] },
	{ pos: [ 3121, 0, -112 ], flag: 0, tc: [ 1672, 1222 ], color: [ 70, 16, 104, 255 ] },
	{ pos: [ 3121, 1024, -112 ], flag: 0, tc: [ 2012, 1234 ], color: [ 62, 0, 110, 255 ] },
	{ pos: [ 1136, -1023, 2287 ], flag: 0, tc: [ 1332, -850 ], color: [ 87, 62, 67, 255 ] },
	{ pos: [ -705, 1024, 2401 ], flag: 0, tc: [ 2012, -6164 ], color: [ 235, 0, 125, 255 ] },
	{ pos: [ -705, 0, 2401 ], flag: 0, tc: [ 1672, -6164 ], color: [ 20, 107, 64, 255 ] },
	{ pos: [ 1136, -1023, 2287 ], flag: 0, tc: [ 1332, -4478 ], color: [ 87, 62, 67, 255 ] },
	{ pos: [ -219, 512, 5643 ], flag: 0, tc: [ 1840, -7222 ], color: [ 227, 99, 183, 255 ] },
	{ pos: [ -805, 512, 7672 ], flag: 0, tc: [ 1840, -8672 ], color: [ 234, 103, 187, 255 ] },
	{ pos: [ 111, 1024, 6993 ], flag: 0, tc: [ 2012, -7548 ], color: [ 182, 99, 231, 255 ] },
	{ pos: [ 330, 1024, 6232 ], flag: 0, tc: [ 2012, -7004 ], color: [ 211, 107, 205, 255 ] },
]

const jrb_seg7_vertex_070041C0 = [
	{ pos: [ -805, 512, 7672 ], flag: 0, tc: [ 1840, -8672 ], color: [ 234, 103, 187, 255 ] },
	{ pos: [ -210, 1024, 7709 ], flag: 0, tc: [ 2012, -8162 ], color: [ 212, 59, 154, 255 ] },
	{ pos: [ 111, 1024, 6993 ], flag: 0, tc: [ 2012, -7548 ], color: [ 182, 99, 231, 255 ] },
]

export const jrb_seg7_dl_070041F0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, water_09003800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPLight(jrb_seg7_lights_070030A8.l[0], 1),
	Gbi.gsSPLight(jrb_seg7_lights_070030A8.a, 2),
	Gbi.gsSPVertex(jrb_seg7_vertex_070030F0, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  2,  3,  4, 0x0),
	...Gbi.gsSP2Triangles( 5,  3,  2, 0x0,  4,  3,  6, 0x0),
	...Gbi.gsSP2Triangles( 7,  3,  8, 0x0,  6,  3,  9, 0x0),
	...Gbi.gsSP2Triangles( 8,  3,  5, 0x0,  9,  3, 10, 0x0),
	...Gbi.gsSP2Triangles( 3,  7, 10, 0x0, 11,  0,  4, 0x0),
	...Gbi.gsSP2Triangles( 0,  2,  4, 0x0, 12, 10,  7, 0x0),
	...Gbi.gsSP2Triangles(13,  5,  1, 0x0,  5,  2,  1, 0x0),
	...Gbi.gsSP2Triangles(11,  4,  6, 0x0, 14, 11,  6, 0x0),
	...Gbi.gsSP2Triangles(14,  6,  9, 0x0, 15, 14,  9, 0x0),
	...Gbi.gsSP2Triangles(15,  9, 10, 0x0, 12, 15, 10, 0x0),
	Gbi.gsSPVertex(jrb_seg7_vertex_070031F0, 6, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  0,  3, 0x0,  4,  3,  5, 0x0),
	Gbi.gsSPLight(jrb_seg7_lights_070030C0.l[0], 1),
	Gbi.gsSPLight(jrb_seg7_lights_070030C0.a, 2),
	Gbi.gsSPVertex(jrb_seg7_vertex_07003250, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  4, 0x0),
	...Gbi.gsSP2Triangles( 1,  4,  2, 0x0,  2,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9, 10, 0x0),
	...Gbi.gsSP2Triangles( 6,  8, 11, 0x0,  6, 11, 12, 0x0),
	...Gbi.gsSP2Triangles( 6, 12, 13, 0x0,  6, 10,  7, 0x0),
	Gbi.gsSP1Triangle( 8, 14, 15, 0x0),
	Gbi.gsSPVertex(jrb_seg7_vertex_07003350, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  0,  3, 0x0,  0,  5,  1, 0x0),
	...Gbi.gsSP2Triangles( 0,  6,  5, 0x0,  7,  3,  2, 0x0),
	...Gbi.gsSP2Triangles( 4,  3,  8, 0x0,  7,  8,  3, 0x0),
	...Gbi.gsSP2Triangles( 9,  6, 10, 0x0,  9,  5,  6, 0x0),
	...Gbi.gsSP2Triangles(10, 11,  9, 0x0, 12, 11, 13, 0x0),
	...Gbi.gsSP2Triangles(14, 12, 15, 0x0, 12, 13, 15, 0x0),
	Gbi.gsSPVertex(jrb_seg7_vertex_07003450, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  5,  4, 0x0,  6,  4,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  3,  9, 0x0,  3,  5,  9, 0x0),
	...Gbi.gsSP2Triangles(10, 11,  0, 0x0, 12,  0, 11, 0x0),
	...Gbi.gsSP2Triangles(13,  1,  0, 0x0, 14, 13,  0, 0x0),
	Gbi.gsSP1Triangle(12, 14,  0, 0x0),
	Gbi.gsSPVertex(jrb_seg7_vertex_07003540, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  6,  7,  4, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  9, 11, 10, 0x0),
	...Gbi.gsSP2Triangles( 0,  2, 12, 0x0, 13,  0, 12, 0x0),
	Gbi.gsSP1Triangle(13, 14, 15, 0x0),
	Gbi.gsSPVertex(jrb_seg7_vertex_07003640, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  4, 0x0),
	...Gbi.gsSP2Triangles( 1,  5,  3, 0x0,  0,  2,  6, 0x0),
	...Gbi.gsSP2Triangles( 0,  7,  8, 0x0,  0,  6,  7, 0x0),
	Gbi.gsSP1Triangle( 9, 10, 11, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const jrb_seg7_dl_070044C8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, water_09001800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPLight(jrb_seg7_lights_070030D8.l[0], 1),
	Gbi.gsSPLight(jrb_seg7_lights_070030D8.a, 2),
	Gbi.gsSPVertex(jrb_seg7_vertex_07003700, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  5,  4, 0x0),
	...Gbi.gsSP2Triangles( 7,  2,  5, 0x0,  6,  3,  0, 0x0),
	...Gbi.gsSP2Triangles( 3,  1,  0, 0x0,  8,  9, 10, 0x0),
	...Gbi.gsSP2Triangles( 0,  2,  7, 0x0, 11, 12,  8, 0x0),
	...Gbi.gsSP2Triangles(12, 11, 13, 0x0, 12, 13, 14, 0x0),
	...Gbi.gsSP2Triangles(12, 15,  8, 0x0, 10, 14, 13, 0x0),
	...Gbi.gsSP2Triangles(10,  9, 14, 0x0,  8, 15,  9, 0x0),
	Gbi.gsSPVertex(jrb_seg7_vertex_07003800, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 4,  3,  6, 0x0,  4,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  7,  6, 0x0,  8,  9,  7, 0x0),
	...Gbi.gsSP2Triangles( 3,  5, 10, 0x0, 10,  5,  8, 0x0),
	...Gbi.gsSP2Triangles( 5,  9,  8, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle( 0,  2, 14, 0x0),
	Gbi.gsSPVertex(jrb_seg7_vertex_070038F0, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0, 11,  8, 12, 0x0),
	...Gbi.gsSP2Triangles(13,  4,  6, 0x0, 13,  6, 14, 0x0),
	Gbi.gsSPVertex(jrb_seg7_vertex_070039E0, 11, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	Gbi.gsSP1Triangle( 8,  9, 10, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const jrb_seg7_dl_07004658 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, water_09002800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPVertex(jrb_seg7_vertex_07003A90, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  2, 0x0),
	...Gbi.gsSP2Triangles( 1,  4,  3, 0x0,  4,  5,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  6,  5, 0x0,  6,  0,  7, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  5, 0x0,  0,  2,  7, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const jrb_seg7_dl_070046C0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, water_09004800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPLight(jrb_seg7_lights_070030C0.l[0], 1),
	Gbi.gsSPLight(jrb_seg7_lights_070030C0.a, 2),
	Gbi.gsSPVertex(jrb_seg7_vertex_07003B10, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  0,  2, 0x0),
	...Gbi.gsSP2Triangles( 4,  0,  3, 0x0,  1,  5,  2, 0x0),
	...Gbi.gsSP2Triangles( 5,  6,  2, 0x0,  2,  7,  3, 0x0),
	...Gbi.gsSP2Triangles( 2,  8,  9, 0x0,  2,  9,  7, 0x0),
	...Gbi.gsSP2Triangles(10,  8,  2, 0x0, 10,  2, 11, 0x0),
	...Gbi.gsSP2Triangles(11,  2,  6, 0x0, 12,  4,  3, 0x0),
	...Gbi.gsSP2Triangles(12,  3, 13, 0x0,  3,  7, 14, 0x0),
	Gbi.gsSP1Triangle(15, 12, 13, 0x0),
	Gbi.gsSPVertex(jrb_seg7_vertex_07003C10, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  0,  2, 0x0,  5,  4,  2, 0x0),
	...Gbi.gsSP2Triangles( 6,  2,  7, 0x0,  8,  9, 10, 0x0),
	...Gbi.gsSP2Triangles( 9,  8, 11, 0x0, 12, 13, 14, 0x0),
	Gbi.gsSP1Triangle( 9, 11, 15, 0x0),
	Gbi.gsSPVertex(jrb_seg7_vertex_07003D10, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  1,  0, 0x0),
	...Gbi.gsSP2Triangles( 3,  4,  1, 0x0,  1,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 1,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 13, 10, 12, 0x0),
	Gbi.gsSP1Triangle(10, 14, 11, 0x0),
	Gbi.gsSPVertex(jrb_seg7_vertex_07003E00, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  3, 0x0,  4,  6,  5, 0x0),
	...Gbi.gsSP2Triangles( 4,  7,  8, 0x0,  4,  8,  6, 0x0),
	...Gbi.gsSP2Triangles( 9, 10, 11, 0x0, 12, 13, 14, 0x0),
	Gbi.gsSPVertex(jrb_seg7_vertex_07003EF0, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  1,  0,  3, 0x0),
	...Gbi.gsSP2Triangles( 0,  2,  4, 0x0,  5,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 5,  7,  8, 0x0,  9, 10, 11, 0x0),
	Gbi.gsSP1Triangle( 6, 12, 13, 0x0),
	Gbi.gsSPVertex(jrb_seg7_vertex_07003FD0, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  0,  2, 0x0),
	...Gbi.gsSP2Triangles( 2,  4,  3, 0x0,  2,  5,  4, 0x0),
	...Gbi.gsSP2Triangles( 6,  3,  4, 0x0,  6,  4,  7, 0x0),
	...Gbi.gsSP2Triangles( 3,  8,  0, 0x0,  9, 10, 11, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPVertex(jrb_seg7_vertex_070040C0, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 5,  4,  6, 0x0,  5,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 3,  8,  4, 0x0,  9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 14, 0x0, 12, 14, 15, 0x0),
	Gbi.gsSPVertex(jrb_seg7_vertex_070041C0, 3, 0),
	Gbi.gsSP1Triangle( 0,  1,  2, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const jrb_seg7_dl_07004940 = [
	Gbi.gsDPSetCycleType(Gbi.G_CYC_2CYCLE),
	Gbi.gsDPSetRenderMode(Gbi.G_RM_FOG_SHADE_A_AA_ZB_OPA_SURF2),
	Gbi.gsDPSetFogColor(5, 80, 75, 255),
	Gbi.gsSPFogPosition(900, 1000),
	Gbi.gsSPSetGeometryMode(Gbi.G_FOG),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 16, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(jrb_seg7_dl_070041F0),
	Gbi.gsSPDisplayList(jrb_seg7_dl_070044C8),
	Gbi.gsSPDisplayList(jrb_seg7_dl_07004658),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 16, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(jrb_seg7_dl_070046C0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCycleType(Gbi.G_CYC_1CYCLE),
	Gbi.gsDPSetRenderMode(Gbi.G_RM_AA_ZB_OPA_SURF_NOOP2),
	Gbi.gsSPClearGeometryMode(Gbi.G_FOG),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPEndDisplayList(),
]

