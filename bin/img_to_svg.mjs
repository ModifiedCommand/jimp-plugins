#!/usr/bin/env node
import Jimp from "../src/index.mjs";
import {writeFile} from "fs/promises";

(async () => {
    const img_path = process.argv[2];
    const svg_path = process.argv[3];

    if (!img_path || !svg_path) {
        console.error("Please pass an img input path and a svg output path");
        process.exit(1);
    }

    console.log(`Convert ${img_path} to ${svg_path}`);

    const img = await Jimp.read(img_path);

    const svg = img.toRectanglesSvg();

    await writeFile(svg_path, svg);
})();
