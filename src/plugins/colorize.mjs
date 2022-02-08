function colorize(color) {
    if (!Array.isArray(color) || color.length < 3) {
        return this;
    }

    this.grayscale();

    /*this.color([{
                apply: "mix",
                params: [{
                    r: color[0],
                    g: color[1],
                    b: color[2]
                }, 75]
            }]);*/

    this.scan(0, 0, this.getWidth(), this.getHeight(), function (x, y, idx) {
        this.bitmap.data[idx] = (this.bitmap.data[idx] / 255 * color[0]);
        this.bitmap.data[idx + 1] = (this.bitmap.data[idx + 1] / 255 * color[1]);
        this.bitmap.data[idx + 2] = (this.bitmap.data[idx + 2] / 255 * color[2]);
    });

    return this;
}

export default () => ({
    colorize
});
