import Jimp from "jimp";

async function borderImage(border_left, border_top, border_right, border_bottom, new_width, new_height) {
    const new_image = await Jimp.create(new_width, new_height);

    new_image.composite(this.clone().crop(0, 0, border_left, border_top), 0, 0);
    new_image.composite(this.clone().crop(border_left, 0, (this.getWidth() - border_left - border_right), border_top).resize((new_width - border_left - border_right), border_top, Jimp.RESIZE_NEAREST_NEIGHBOR), border_left, 0);
    new_image.composite(this.clone().crop((this.getWidth() - border_right), 0, border_right, border_top), (new_width - border_right), 0);

    new_image.composite(this.clone().crop(0, border_top, border_left, (this.getHeight() - border_top - border_bottom)).resize(border_left, (new_height - border_top - border_bottom), Jimp.RESIZE_NEAREST_NEIGHBOR), 0, border_top);
    new_image.composite(this.clone().crop(border_left, border_top, (this.getWidth() - border_left - border_right), (this.getHeight() - border_top - border_bottom)).resize((new_width - border_left - border_right), (new_height - border_top - border_bottom), Jimp.RESIZE_NEAREST_NEIGHBOR), border_left, border_top);
    new_image.composite(this.clone().crop((this.getWidth() - border_right), border_top, border_right, (this.getHeight() - border_top - border_bottom)).resize(border_right, (new_height - border_top - border_bottom), Jimp.RESIZE_NEAREST_NEIGHBOR), (new_width - border_right), border_top);

    new_image.composite(this.clone().crop(0, (this.getHeight() - border_bottom), border_left, border_right), 0, (new_height - border_bottom));
    new_image.composite(this.clone().crop(border_left, (this.getHeight() - border_bottom), (this.getWidth() - border_left - border_right), border_right).resize((new_width - border_left - border_right), border_right, Jimp.RESIZE_NEAREST_NEIGHBOR), border_left, (new_height - border_bottom));
    new_image.composite(this.clone().crop((this.getWidth() - border_right), (this.getHeight() - border_bottom), border_right, border_right), (new_width - border_right), (new_height - border_bottom));

    return new_image;
}

export default () => ({
    borderImage
});
