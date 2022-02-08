import TGA from "tga";

const FILE_EXTENSION = "tga";
const MIME_TYPE = "image/x-tga";

function encode(image) {
    const buffer = TGA.createTgaBuffer(image.getWidth(), image.getHeight(), image.bitmap.data);

    return buffer;
}

function decode(buffer) {
    const tga = new TGA(buffer);

    return {
        data: tga.pixels,
        height: tga.height,
        width: tga.width
    };
}

export default () => ({
    constants: {
        MIME_TGA: MIME_TYPE
    },

    encoders: {
        [MIME_TYPE]: encode
    },

    decoders: {
        [MIME_TYPE]: decode
    },

    mime: {
        [MIME_TYPE]: [FILE_EXTENSION]
    }
});
