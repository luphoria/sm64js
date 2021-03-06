import * as Gbi from "../../../../../include/gbi"
import {
	cave_09004800,
	cave_09006800,
	cave_09007800,
	cave_09008800,
	cave_09009800
} from "../../../../../textures/cave"
const hmc_seg7_lights_070200B0 = Gbi.gdSPDefLights1(
	    0x79, 0x79, 0x79,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const hmc_seg7_vertex_070200C8 = [
	{ pos: [ -124, -4279, 6439 ], flag: 0, tc: [ -2902, 700 ], color: [ 24, 101, 71, 255 ] },
	{ pos: [ -631, -4279, 6946 ], flag: 0, tc: [ -3306, 1204 ], color: [ 119, 42, 0, 255 ] },
	{ pos: [ 20, -4279, 7598 ], flag: 0, tc: [ -2526, 1856 ], color: [ 26, 73, 157, 255 ] },
	{ pos: [ 3351, -4279, 5860 ], flag: 0, tc: [ 450, 122 ], color: [ 0, 114, 202, 255 ] },
	{ pos: [ 1396, -4279, 4919 ], flag: 0, tc: [ -1686, -816 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 3206, -4279, 6729 ], flag: 0, tc: [ 480, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 5233, -4279, 4701 ], flag: 0, tc: [ 2098, -1034 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 4437, -4279, 4774 ], flag: 0, tc: [ 1318, -962 ], color: [ 198, 110, 237, 255 ] },
	{ pos: [ 3423, -4279, 2891 ], flag: 0, tc: [ -68, -2840 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 3351, -4279, 3688 ], flag: 0, tc: [ 16, -2046 ], color: [ 227, 84, 89, 255 ] },
	{ pos: [ 2265, -4279, 4774 ], flag: 0, tc: [ -848, -962 ], color: [ 87, 92, 0, 255 ] },
	{ pos: [ 889, -4279, 7598 ], flag: 0, tc: [ -1658, 1856 ], color: [ 240, 119, 216, 255 ] },
	{ pos: [ 382, -4279, 6946 ], flag: 0, tc: [ -2294, 1204 ], color: [ 204, 73, 89, 255 ] },
	{ pos: [ -486, -4279, 6801 ], flag: 0, tc: [ -3190, 1060 ], color: [ 89, 84, 227, 255 ] },
	{ pos: [ -268, -4279, 6584 ], flag: 0, tc: [ -3016, 846 ], color: [ 221, 51, 110, 255 ] },
	{ pos: [ -305, -4279, 6548 ], flag: 0, tc: [ -3060, 810 ], color: [ 217, 113, 40, 255 ] },
]

const hmc_seg7_vertex_070201C8 = [
	{ pos: [ 889, -4279, 7598 ], flag: 0, tc: [ -1658, 1856 ], color: [ 240, 119, 216, 255 ] },
	{ pos: [ 2120, -4279, 5643 ], flag: 0, tc: [ -820, -94 ], color: [ 103, 73, 0, 255 ] },
	{ pos: [ 817, -4279, 6946 ], flag: 0, tc: [ -1860, 1204 ], color: [ 26, 73, 99, 255 ] },
	{ pos: [ 382, -4279, 6946 ], flag: 0, tc: [ -2294, 1204 ], color: [ 204, 73, 89, 255 ] },
	{ pos: [ 2482, -4279, 6005 ], flag: 0, tc: [ -386, 268 ], color: [ 220, 51, 147, 255 ] },
	{ pos: [ -486, -4279, 6801 ], flag: 0, tc: [ -3190, 1060 ], color: [ 89, 84, 227, 255 ] },
	{ pos: [ -305, -4279, 6548 ], flag: 0, tc: [ -3060, 810 ], color: [ 217, 113, 40, 255 ] },
	{ pos: [ -522, -4279, 6765 ], flag: 0, tc: [ -3234, 1024 ], color: [ 63, 89, 193, 255 ] },
]

const hmc_seg7_vertex_07020248 = [
	{ pos: [ 3496, -4382, 4412 ], flag: 0, tc: [ 790, -716 ], color: [ 213, 92, 74, 255 ] },
	{ pos: [ 4437, -4382, 4774 ], flag: 0, tc: [ 2356, 408 ], color: [ 207, 115, 16, 255 ] },
	{ pos: [ 3351, -4382, 3688 ], flag: 0, tc: [ 550, -2002 ], color: [ 19, 110, 58, 255 ] },
	{ pos: [ 3713, -4382, 4629 ], flag: 0, tc: [ 1152, -234 ], color: [ 157, 73, 26, 255 ] },
	{ pos: [ 3713, -4382, 4919 ], flag: 0, tc: [ 1152, 248 ], color: [ 167, 73, 204, 255 ] },
	{ pos: [ 3496, -4382, 5136 ], flag: 0, tc: [ 790, 488 ], color: [ 235, 92, 173, 255 ] },
	{ pos: [ 3351, -4382, 5860 ], flag: 0, tc: [ 550, 1610 ], color: [ 0, 103, 183, 255 ] },
	{ pos: [ 3206, -4382, 5136 ], flag: 0, tc: [ 308, 328 ], color: [ 52, 73, 167, 255 ] },
	{ pos: [ 2989, -4382, 4919 ], flag: 0, tc: [ -50, -154 ], color: [ 83, 92, 235, 255 ] },
	{ pos: [ 2265, -4382, 4774 ], flag: 0, tc: [ -1256, -796 ], color: [ 54, 114, 0, 255 ] },
	{ pos: [ 3206, -4382, 4412 ], flag: 0, tc: [ 308, -876 ], color: [ 26, 73, 99, 255 ] },
	{ pos: [ 2989, -4382, 4629 ], flag: 0, tc: [ -50, -636 ], color: [ 74, 92, 43, 255 ] },
]

const hmc_seg7_vertex_07020308 = [
	{ pos: [ 3351, -4279, 3688 ], flag: 0, tc: [ 8240, 0 ], color: [ 227, 84, 89, 255 ] },
	{ pos: [ 3351, -4382, 3688 ], flag: 0, tc: [ 8240, 480 ], color: [ 19, 110, 58, 255 ] },
	{ pos: [ 4437, -4382, 4774 ], flag: 0, tc: [ 4056, 480 ], color: [ 207, 115, 16, 255 ] },
	{ pos: [ 4437, -4279, 4774 ], flag: 0, tc: [ 4056, 0 ], color: [ 198, 110, 237, 255 ] },
	{ pos: [ 2265, -4279, 4774 ], flag: 0, tc: [ 12232, 0 ], color: [ 87, 92, 0, 255 ] },
	{ pos: [ 2265, -4382, 4774 ], flag: 0, tc: [ 12232, 480 ], color: [ 54, 114, 0, 255 ] },
	{ pos: [ 4437, -4279, 4774 ], flag: 0, tc: [ 20408, 0 ], color: [ 198, 110, 237, 255 ] },
	{ pos: [ 4437, -4382, 4774 ], flag: 0, tc: [ 20408, 480 ], color: [ 207, 115, 16, 255 ] },
	{ pos: [ 3351, -4382, 5860 ], flag: 0, tc: [ 16224, 480 ], color: [ 0, 103, 183, 255 ] },
	{ pos: [ 3351, -4279, 5860 ], flag: 0, tc: [ 16224, 0 ], color: [ 0, 114, 202, 255 ] },
	{ pos: [ 3496, -4382, 5136 ], flag: 0, tc: [ 17052, 480 ], color: [ 235, 92, 173, 255 ] },
	{ pos: [ 3496, -4689, 5136 ], flag: 0, tc: [ 17052, 2012 ], color: [ 204, 73, 167, 255 ] },
	{ pos: [ 3206, -4689, 5136 ], flag: 0, tc: [ 15090, 2012 ], color: [ 26, 73, 157, 255 ] },
	{ pos: [ 3206, -4382, 5136 ], flag: 0, tc: [ 15090, 480 ], color: [ 52, 73, 167, 255 ] },
]

const hmc_seg7_vertex_070203E8 = [
	{ pos: [ 3713, -4382, 4629 ], flag: 0, tc: [ 5156, 480 ], color: [ 157, 73, 26, 255 ] },
	{ pos: [ 3713, -4689, 4629 ], flag: 0, tc: [ 5156, 2012 ], color: [ 167, 73, 52, 255 ] },
	{ pos: [ 3713, -4689, 4919 ], flag: 0, tc: [ 2956, 2012 ], color: [ 157, 73, 230, 255 ] },
	{ pos: [ 3206, -4382, 5136 ], flag: 0, tc: [ 15090, 480 ], color: [ 52, 73, 167, 255 ] },
	{ pos: [ 3206, -4689, 5136 ], flag: 0, tc: [ 15090, 2012 ], color: [ 26, 73, 157, 255 ] },
	{ pos: [ 2989, -4689, 4919 ], flag: 0, tc: [ 13132, 2012 ], color: [ 89, 73, 204, 255 ] },
	{ pos: [ 2989, -4382, 4919 ], flag: 0, tc: [ 13132, 480 ], color: [ 83, 92, 235, 255 ] },
	{ pos: [ 2989, -4689, 4629 ], flag: 0, tc: [ 11332, 2012 ], color: [ 115, 42, 30, 255 ] },
	{ pos: [ 2989, -4382, 4629 ], flag: 0, tc: [ 11332, 480 ], color: [ 74, 92, 43, 255 ] },
	{ pos: [ 3206, -4689, 4412 ], flag: 0, tc: [ 9374, 2012 ], color: [ 27, 115, 46, 255 ] },
	{ pos: [ 3206, -4382, 4412 ], flag: 0, tc: [ 9374, 480 ], color: [ 26, 73, 99, 255 ] },
	{ pos: [ 3496, -4689, 4412 ], flag: 0, tc: [ 7412, 2012 ], color: [ 226, 42, 115, 255 ] },
	{ pos: [ 3496, -4382, 4412 ], flag: 0, tc: [ 7412, 480 ], color: [ 213, 92, 74, 255 ] },
	{ pos: [ 3713, -4382, 4919 ], flag: 0, tc: [ 2956, 480 ], color: [ 167, 73, 204, 255 ] },
	{ pos: [ 3496, -4689, 5136 ], flag: 0, tc: [ 700, 2012 ], color: [ 204, 73, 167, 255 ] },
	{ pos: [ 3496, -4382, 5136 ], flag: 0, tc: [ 700, 480 ], color: [ 235, 92, 173, 255 ] },
]

const hmc_seg7_vertex_070204E8 = [
	{ pos: [ 3134, -4279, 6511 ], flag: 0, tc: [ 734, 2012 ], color: [ 224, 0, 134, 255 ] },
	{ pos: [ 3134, -3255, 6511 ], flag: 0, tc: [ 734, 0 ], color: [ 192, 0, 147, 255 ] },
	{ pos: [ 3278, -3255, 6511 ], flag: 0, tc: [ 224, 0 ], color: [ 32, 0, 134, 255 ] },
	{ pos: [ 5089, -4279, 4846 ], flag: 0, tc: [ 990, 2012 ], color: [ 130, 0, 0, 255 ] },
	{ pos: [ 5089, -3255, 4846 ], flag: 0, tc: [ 990, 0 ], color: [ 130, 0, 0, 255 ] },
	{ pos: [ 5016, -3255, 4774 ], flag: 0, tc: [ 734, 0 ], color: [ 147, 0, 64, 255 ] },
	{ pos: [ 5016, -4279, 4774 ], flag: 0, tc: [ 734, 2012 ], color: [ 134, 0, 32, 255 ] },
	{ pos: [ 5016, -3255, 4629 ], flag: 0, tc: [ 224, 0 ], color: [ 134, 0, 224, 255 ] },
	{ pos: [ 5016, -4279, 4629 ], flag: 0, tc: [ 224, 2012 ], color: [ 147, 0, 192, 255 ] },
	{ pos: [ 5089, -3255, 4556 ], flag: 0, tc: [ 0, 0 ], color: [ 130, 0, 0, 255 ] },
	{ pos: [ 5089, -4279, 4556 ], flag: 0, tc: [ 0, 2012 ], color: [ 130, 0, 0, 255 ] },
	{ pos: [ 3061, -4279, 6584 ], flag: 0, tc: [ 990, 2012 ], color: [ 0, 0, 130, 255 ] },
	{ pos: [ 3061, -3255, 6584 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 130, 255 ] },
	{ pos: [ 1613, -4279, 4991 ], flag: 0, tc: [ 224, 2012 ], color: [ 109, 0, 64, 255 ] },
	{ pos: [ 1541, -3255, 5063 ], flag: 0, tc: [ 0, 0 ], color: [ 126, 0, 0, 255 ] },
	{ pos: [ 1541, -4279, 5063 ], flag: 0, tc: [ 0, 2012 ], color: [ 126, 0, 0, 255 ] },
]

const hmc_seg7_vertex_070205E8 = [
	{ pos: [ 3134, -4279, 6511 ], flag: 0, tc: [ 734, 2012 ], color: [ 224, 0, 134, 255 ] },
	{ pos: [ 3278, -3255, 6511 ], flag: 0, tc: [ 224, 0 ], color: [ 32, 0, 134, 255 ] },
	{ pos: [ 3278, -4279, 6511 ], flag: 0, tc: [ 224, 2012 ], color: [ 64, 0, 147, 255 ] },
	{ pos: [ 3351, -3255, 6584 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 130, 255 ] },
	{ pos: [ 3351, -4279, 6584 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 130, 255 ] },
	{ pos: [ 1541, -4279, 4774 ], flag: 0, tc: [ 990, 2012 ], color: [ 126, 0, 0, 255 ] },
	{ pos: [ 1541, -3255, 4774 ], flag: 0, tc: [ 990, 0 ], color: [ 126, 0, 0, 255 ] },
	{ pos: [ 1613, -3255, 4846 ], flag: 0, tc: [ 734, 0 ], color: [ 109, 0, 192, 255 ] },
	{ pos: [ 1613, -4279, 4846 ], flag: 0, tc: [ 734, 2012 ], color: [ 122, 0, 224, 255 ] },
	{ pos: [ 1613, -3255, 4991 ], flag: 0, tc: [ 224, 0 ], color: [ 122, 0, 32, 255 ] },
	{ pos: [ 1613, -4279, 4991 ], flag: 0, tc: [ 224, 2012 ], color: [ 109, 0, 64, 255 ] },
	{ pos: [ 1541, -3255, 5063 ], flag: 0, tc: [ 0, 0 ], color: [ 126, 0, 0, 255 ] },
	{ pos: [ 3061, -4279, 6584 ], flag: 0, tc: [ -1666, 2012 ], color: [ 0, 0, 130, 255 ] },
	{ pos: [ 2482, -3255, 6005 ], flag: 0, tc: [ 0, 0 ], color: [ 40, 0, 136, 255 ] },
	{ pos: [ 3061, -3255, 6584 ], flag: 0, tc: [ -1666, 0 ], color: [ 0, 0, 130, 255 ] },
]

const hmc_seg7_vertex_070206D8 = [
	{ pos: [ 1541, -4279, 4774 ], flag: 0, tc: [ 0, 2012 ], color: [ 126, 0, 0, 255 ] },
	{ pos: [ 3278, -4279, 3036 ], flag: 0, tc: [ 4874, 2012 ], color: [ 0, 0, 126, 255 ] },
	{ pos: [ 3278, -3255, 3036 ], flag: 0, tc: [ 4874, 0 ], color: [ 0, 0, 126, 255 ] },
	{ pos: [ 1541, -3255, 4774 ], flag: 0, tc: [ 0, 0 ], color: [ 126, 0, 0, 255 ] },
	{ pos: [ 3568, -4279, 3036 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 126, 255 ] },
	{ pos: [ 5089, -3255, 4556 ], flag: 0, tc: [ 4260, 0 ], color: [ 130, 0, 0, 255 ] },
	{ pos: [ 3568, -3255, 3036 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 126, 255 ] },
	{ pos: [ 5089, -4279, 4556 ], flag: 0, tc: [ 4260, 2012 ], color: [ 130, 0, 0, 255 ] },
	{ pos: [ 5089, -4279, 4846 ], flag: 0, tc: [ 0, 2012 ], color: [ 130, 0, 0, 255 ] },
	{ pos: [ 3351, -4279, 6584 ], flag: 0, tc: [ 4874, 2012 ], color: [ 0, 0, 130, 255 ] },
	{ pos: [ 3351, -3255, 6584 ], flag: 0, tc: [ 4874, 0 ], color: [ 0, 0, 130, 255 ] },
	{ pos: [ 5089, -3255, 4846 ], flag: 0, tc: [ 0, 0 ], color: [ 130, 0, 0, 255 ] },
	{ pos: [ 3496, -4279, 3108 ], flag: 0, tc: [ 734, 2012 ], color: [ 32, 0, 122, 255 ] },
	{ pos: [ 3351, -3255, 3108 ], flag: 0, tc: [ 224, 0 ], color: [ 225, 0, 122, 255 ] },
	{ pos: [ 3351, -4279, 3108 ], flag: 0, tc: [ 224, 2012 ], color: [ 193, 0, 109, 255 ] },
]

const hmc_seg7_vertex_070207C8 = [
	{ pos: [ 3061, -4279, 6584 ], flag: 0, tc: [ -1666, 2012 ], color: [ 0, 0, 130, 255 ] },
	{ pos: [ 2482, -4279, 6005 ], flag: 0, tc: [ 0, 2012 ], color: [ 220, 51, 147, 255 ] },
	{ pos: [ 2482, -3255, 6005 ], flag: 0, tc: [ 0, 0 ], color: [ 40, 0, 136, 255 ] },
	{ pos: [ 2120, -4279, 5643 ], flag: 0, tc: [ 990, 2012 ], color: [ 103, 73, 0, 255 ] },
	{ pos: [ 1541, -4279, 5063 ], flag: 0, tc: [ 2626, 2012 ], color: [ 126, 0, 0, 255 ] },
	{ pos: [ 1541, -3255, 5063 ], flag: 0, tc: [ 2626, 0 ], color: [ 126, 0, 0, 255 ] },
	{ pos: [ 2120, -3255, 5643 ], flag: 0, tc: [ 990, 0 ], color: [ 126, 0, 0, 255 ] },
	{ pos: [ 3568, -4279, 3036 ], flag: 0, tc: [ 990, 2012 ], color: [ 0, 0, 126, 255 ] },
	{ pos: [ 3568, -3255, 3036 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 0, 126, 255 ] },
	{ pos: [ 3496, -3255, 3108 ], flag: 0, tc: [ 734, 0 ], color: [ 64, 0, 109, 255 ] },
	{ pos: [ 3496, -4279, 3108 ], flag: 0, tc: [ 734, 2012 ], color: [ 32, 0, 122, 255 ] },
	{ pos: [ 3351, -3255, 3108 ], flag: 0, tc: [ 224, 0 ], color: [ 225, 0, 122, 255 ] },
	{ pos: [ 3351, -4279, 3108 ], flag: 0, tc: [ 224, 2012 ], color: [ 193, 0, 109, 255 ] },
	{ pos: [ 3278, -3255, 3036 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 0, 126, 255 ] },
	{ pos: [ 3278, -4279, 3036 ], flag: 0, tc: [ 0, 2012 ], color: [ 0, 0, 126, 255 ] },
]

const hmc_seg7_vertex_070208B8 = [
	{ pos: [ 2482, -4279, 6005 ], flag: 0, tc: [ 992, 990 ], color: [ 220, 51, 147, 255 ] },
	{ pos: [ 889, -4279, 7598 ], flag: 0, tc: [ 4952, 990 ], color: [ 240, 119, 216, 255 ] },
	{ pos: [ 889, -3255, 7598 ], flag: 0, tc: [ 4952, 0 ], color: [ 208, 0, 139, 255 ] },
	{ pos: [ 2482, -3255, 6005 ], flag: 0, tc: [ 988, 0 ], color: [ 40, 0, 136, 255 ] },
	{ pos: [ 20, -4279, 7598 ], flag: 0, tc: [ 6616, 990 ], color: [ 26, 73, 157, 255 ] },
	{ pos: [ 20, -3255, 7598 ], flag: 0, tc: [ 6616, 0 ], color: [ 64, 0, 147, 255 ] },
	{ pos: [ 382, -3255, 6946 ], flag: 0, tc: [ 664, 0 ], color: [ 224, 0, 122, 255 ] },
	{ pos: [ 817, -4279, 6946 ], flag: 0, tc: [ 1496, 990 ], color: [ 26, 73, 99, 255 ] },
	{ pos: [ 817, -3255, 6946 ], flag: 0, tc: [ 1496, 0 ], color: [ 64, 0, 109, 255 ] },
	{ pos: [ 2120, -4279, 5643 ], flag: 0, tc: [ 4176, 990 ], color: [ 103, 73, 0, 255 ] },
	{ pos: [ 2120, -3255, 5643 ], flag: 0, tc: [ 4176, 0 ], color: [ 126, 0, 0, 255 ] },
	{ pos: [ 382, -4279, 6946 ], flag: 0, tc: [ 664, 990 ], color: [ 204, 73, 89, 255 ] },
	{ pos: [ -631, -4279, 6946 ], flag: 0, tc: [ 7484, 990 ], color: [ 119, 42, 0, 255 ] },
	{ pos: [ -631, -3255, 6946 ], flag: 0, tc: [ 7484, 0 ], color: [ 120, 0, 40, 255 ] },
]

const hmc_seg7_vertex_07020998 = [
	{ pos: [ -486, -4023, 6801 ], flag: 0, tc: [ 552, 734 ], color: [ 105, 227, 63, 255 ] },
	{ pos: [ -631, -3255, 6946 ], flag: 0, tc: [ 0, 0 ], color: [ 120, 0, 40, 255 ] },
	{ pos: [ -631, -4279, 6946 ], flag: 0, tc: [ 0, 990 ], color: [ 119, 42, 0, 255 ] },
	{ pos: [ -124, -3255, 6439 ], flag: 0, tc: [ 0, 0 ], color: [ 24, 0, 124, 255 ] },
	{ pos: [ 382, -4279, 6946 ], flag: 0, tc: [ 664, 990 ], color: [ 204, 73, 89, 255 ] },
	{ pos: [ 382, -3255, 6946 ], flag: 0, tc: [ 664, 0 ], color: [ 224, 0, 122, 255 ] },
	{ pos: [ -124, -4279, 6439 ], flag: 0, tc: [ 0, 990 ], color: [ 24, 101, 71, 255 ] },
	{ pos: [ -268, -4023, 6584 ], flag: 0, tc: [ 1428, 734 ], color: [ 48, 189, 95, 255 ] },
	{ pos: [ -305, -4023, 6548 ], flag: 0, tc: [ 1428, 734 ], color: [ 177, 200, 81, 255 ] },
	{ pos: [ -268, -4279, 6584 ], flag: 0, tc: [ 1428, 990 ], color: [ 221, 51, 110, 255 ] },
	{ pos: [ -124, -3255, 6439 ], flag: 0, tc: [ 2012, 0 ], color: [ 24, 0, 124, 255 ] },
	{ pos: [ -124, -4279, 6439 ], flag: 0, tc: [ 2012, 990 ], color: [ 24, 101, 71, 255 ] },
	{ pos: [ -522, -4023, 6765 ], flag: 0, tc: [ 552, 734 ], color: [ 63, 167, 193, 255 ] },
	{ pos: [ -486, -4279, 6801 ], flag: 0, tc: [ 552, 990 ], color: [ 89, 84, 227, 255 ] },
	{ pos: [ -522, -4279, 6765 ], flag: 0, tc: [ 552, 990 ], color: [ 63, 89, 193, 255 ] },
	{ pos: [ -305, -4279, 6548 ], flag: 0, tc: [ 1428, 990 ], color: [ 217, 113, 40, 255 ] },
]

const hmc_seg7_vertex_07020A98 = [
	{ pos: [ 3206, -4689, 4412 ], flag: 0, tc: [ 0, 0 ], color: [ 27, 115, 46, 255 ] },
	{ pos: [ 3713, -4689, 4629 ], flag: 0, tc: [ 0, 0 ], color: [ 167, 73, 52, 255 ] },
	{ pos: [ 3496, -4689, 4412 ], flag: 0, tc: [ 0, 0 ], color: [ 226, 42, 115, 255 ] },
	{ pos: [ 3713, -4689, 4919 ], flag: 0, tc: [ 0, 0 ], color: [ 157, 73, 230, 255 ] },
	{ pos: [ 2989, -4689, 4919 ], flag: 0, tc: [ 0, 0 ], color: [ 89, 73, 204, 255 ] },
	{ pos: [ 3206, -4689, 5136 ], flag: 0, tc: [ 0, 0 ], color: [ 26, 73, 157, 255 ] },
	{ pos: [ 2989, -4689, 4629 ], flag: 0, tc: [ 0, 0 ], color: [ 115, 42, 30, 255 ] },
	{ pos: [ 3496, -4689, 5136 ], flag: 0, tc: [ 0, 0 ], color: [ 204, 73, 167, 255 ] },
]

export const hmc_seg7_dl_07020B18 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, cave_09006800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(hmc_seg7_lights_070200B0.l[0], 1),
	Gbi.gsSPLight(hmc_seg7_lights_070200B0.a, 2),
	Gbi.gsSPVertex(hmc_seg7_vertex_070200C8, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 5,  6,  7, 0x0,  5,  7,  3, 0x0),
	...Gbi.gsSP2Triangles( 7,  6,  8, 0x0,  9,  7,  8, 0x0),
	...Gbi.gsSP2Triangles( 3, 10,  4, 0x0, 10,  8,  4, 0x0),
	...Gbi.gsSP2Triangles(10,  9,  8, 0x0,  0,  2, 11, 0x0),
	...Gbi.gsSP2Triangles(11, 12,  0, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(hmc_seg7_vertex_070201C8, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 0,  4,  1, 0x0,  5,  6,  7, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const hmc_seg7_dl_07020BD8 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, cave_09009800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(hmc_seg7_vertex_07020248, 12, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  1, 0x0),
	...Gbi.gsSP2Triangles( 1,  5,  6, 0x0,  1,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 0,  3,  1, 0x0,  6,  5,  7, 0x0),
	...Gbi.gsSP2Triangles( 6,  8,  9, 0x0,  6,  7,  8, 0x0),
	...Gbi.gsSP2Triangles(10,  0,  2, 0x0, 11,  2,  9, 0x0),
	...Gbi.gsSP2Triangles(11, 10,  2, 0x0,  8, 11,  9, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const hmc_seg7_dl_07020C60 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, cave_09008800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPVertex(hmc_seg7_vertex_07020308, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  1,  0, 0x0,  4,  5,  1, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 9,  8,  4, 0x0,  8,  5,  4, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
	Gbi.gsSPVertex(hmc_seg7_vertex_070203E8, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  6,  5,  7, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  8,  7,  9, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0, 10,  9, 11, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 12, 11,  1, 0x0),
	...Gbi.gsSP2Triangles(12,  1,  0, 0x0, 13, 14, 15, 0x0),
	...Gbi.gsSP2Triangles( 0,  2, 13, 0x0, 13,  2, 14, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const hmc_seg7_dl_07020D50 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, cave_09007800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
	Gbi.gsSPVertex(hmc_seg7_vertex_070204E8, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  6,  5,  7, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  8,  7,  9, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0, 11,  1,  0, 0x0),
	...Gbi.gsSP2Triangles(11, 12,  1, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(hmc_seg7_vertex_070205E8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  2,  1,  3, 0x0),
	...Gbi.gsSP2Triangles( 2,  3,  4, 0x0,  5,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 5,  7,  8, 0x0,  8,  7,  9, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0, 10,  9, 11, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPVertex(hmc_seg7_vertex_070206D8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPVertex(hmc_seg7_vertex_070207C8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 10,  9, 11, 0x0),
	...Gbi.gsSP2Triangles(12, 11, 13, 0x0, 12, 13, 14, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const hmc_seg7_dl_07020EA0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, cave_09004800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 64 * 32 - 1),
	Gbi.gsSPVertex(hmc_seg7_vertex_070208B8, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 2,  1,  4, 0x0,  2,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  8,  9, 10, 0x0),
	...Gbi.gsSP2Triangles( 8,  7,  9, 0x0,  6, 11,  7, 0x0),
	...Gbi.gsSP2Triangles( 5, 12, 13, 0x0,  5,  4, 12, 0x0),
	Gbi.gsSPVertex(hmc_seg7_vertex_07020998, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 0,  7, 10, 0x0,  7, 11, 10, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 11, 0x0,  0, 10,  1, 0x0),
	...Gbi.gsSP2Triangles(12,  0, 13, 0x0, 12,  8,  7, 0x0),
	...Gbi.gsSP2Triangles( 0,  2, 13, 0x0, 12, 13, 14, 0x0),
	...Gbi.gsSP2Triangles( 8, 15,  9, 0x0, 12,  7,  0, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const hmc_seg7_dl_07020F90 = [
	Gbi.gsSPVertex(hmc_seg7_vertex_07020A98, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 0,  4,  5, 0x0,  0,  6,  4, 0x0),
	...Gbi.gsSP2Triangles( 0,  7,  3, 0x0,  0,  5,  7, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const hmc_seg7_dl_07020FD0 = [
	Gbi.gsDPSetCycleType(Gbi.G_CYC_2CYCLE),
	Gbi.gsDPSetRenderMode(Gbi.G_RM_FOG_SHADE_A_AA_ZB_OPA_SURF2),
	Gbi.gsDPSetFogColor(0, 0, 0, 255),
	Gbi.gsSPFogPosition(960, 1000),
	Gbi.gsSPSetGeometryMode(Gbi.G_FOG),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(hmc_seg7_dl_07020B18),
	Gbi.gsSPDisplayList(hmc_seg7_dl_07020BD8),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(hmc_seg7_dl_07020C60),
	Gbi.gsSPDisplayList(hmc_seg7_dl_07020D50),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 16, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 6, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(hmc_seg7_dl_07020EA0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPDisplayList(hmc_seg7_dl_07020F90),
	Gbi.gsDPSetCycleType(Gbi.G_CYC_1CYCLE),
	Gbi.gsDPSetRenderMode(Gbi.G_RM_AA_ZB_OPA_SURF_NOOP2),
	Gbi.gsSPClearGeometryMode(Gbi.G_FOG),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPEndDisplayList(),
]

