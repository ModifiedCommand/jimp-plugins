import autoCropTransparent from "./plugins/autoCropTransparent.mjs";
import borderImage from "./plugins/borderImage.mjs";
import checkAreaIsSameColor from "./plugins/checkAreaIsSameColor.mjs";
import colorize from "./plugins/colorize.mjs";
import configure from "@jimp/custom";
import ensureSize from "./plugins/ensureSize.mjs";
import fillArea from "./plugins/fillArea.mjs";
import isEmptyArea from "./plugins/isEmptyArea.mjs";
import Jimp from "jimp";
import rotateSimple from "./plugins/rotateSimple.mjs";
import tga from "./types/tga.mjs";
import toRectangles from "./plugins/toRectangles.mjs";

configure({
    plugins: [
        autoCropTransparent,
        borderImage,
        checkAreaIsSameColor,
        colorize,
        ensureSize,
        fillArea,
        isEmptyArea,
        rotateSimple,
        toRectangles
    ],
    types: [
        tga
    ]
}, Jimp);

export default Jimp;
