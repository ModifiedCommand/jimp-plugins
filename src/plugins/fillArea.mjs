function fillArea(x, y, width, height, color) {
    if (!Array.isArray(color) || color.length < 3) {
        return this;
    }

    this.scan(x, y, width, height, function (x, y, idx) {
        this.bitmap.data[idx] = color[0];
        this.bitmap.data[idx + 1] = color[1];
        this.bitmap.data[idx + 2] = color[2];
        if ("3" in color) {
            this.bitmap.data[idx + 3] = color[3];
        }
    });

    return this;
}

export default () => ({
    fillArea
});
