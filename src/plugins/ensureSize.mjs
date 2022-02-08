import Jimp from "jimp";

function ensureMaxHeight(max_height) {
    if (this.getHeight() > max_height) {
        scaleToHeight(this, max_height);
    }

    return this;
}

function ensureMaxWidth(max_width) {
    if (this.getWidth() > max_width) {
        scaleToWidth(this, max_width);
    }

    return this;
}

function ensureMinHeight(min_height) {
    if (this.getHeight() < min_height) {
        scaleToHeight(this, min_height);
    }

    return this;
}

function ensureMinWidth(min_width) {
    if (this.getWidth() < min_width) {
        scaleToWidth(this, min_width);
    }

    return this;
}

function scaleToHeight(image, height) {
    scale(image, height, image.getHeight());
}

function scaleToWidth(image, width) {
    scale(image, width, image.getWidth());
}

function scale(image, new_size, current_size) {
    image.scale((new_size / current_size), Jimp.RESIZE_NEAREST_NEIGHBOR);
}

export default () => ({
    ensureMaxHeight,
    ensureMaxWidth,
    ensureMinHeight,
    ensureMinWidth
});
