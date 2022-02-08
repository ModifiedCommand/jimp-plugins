function autoCropTransparent() {
    if (this.getWidth() < 2 || this.getHeight() < 2) {
        return this;
    }

    // Top
    let hasOnlyAlpha = true;
    this.scan(0, 0, this.getWidth(), 1, checkHasOnlyAlpha);
    if (hasOnlyAlpha) {
        this.crop(0, 1, this.getWidth(), (this.getHeight() - 1));

        return this.autoCropTransparent();
    }

    // Bottom
    hasOnlyAlpha = true;
    this.scan(0, (this.getHeight() - 1), this.getWidth(), 1, checkHasOnlyAlpha);
    if (hasOnlyAlpha) {
        this.crop(0, 0, this.getWidth(), (this.getHeight() - 1));

        return this.autoCropTransparent();
    }

    // Left
    hasOnlyAlpha = true;
    this.scan(0, 0, 1, this.getHeight(), checkHasOnlyAlpha);
    if (hasOnlyAlpha) {
        this.crop(1, 0, (this.getWidth() - 1), this.getHeight());

        return this.autoCropTransparent();
    }

    // Right
    hasOnlyAlpha = true;
    this.scan((this.getWidth() - 1), 0, 1, this.getHeight(), checkHasOnlyAlpha);
    if (hasOnlyAlpha) {
        this.crop(0, 0, (this.getWidth() - 1), this.getHeight());

        return this.autoCropTransparent();
    }

    return this;

    function checkHasOnlyAlpha(x, y, idx) {
        if (!hasOnlyAlpha) {
            return;
        }

        if (this.bitmap.data[idx + 3] > 0) {
            hasOnlyAlpha = false;
        }
    }
}

export default () => ({
    autoCropTransparent
});
