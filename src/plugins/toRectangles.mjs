function toRectangles() {
    const rectangles = [];

    const clone = this.clone();

    for (const {x, y, idx} of clone.scanIterator(0, 0, clone.getWidth(), clone.getHeight())) {
        if (clone.bitmap.data[idx + 3] > 0) {
            let width = 1;
            let height = 1;
            const color = [
                clone.bitmap.data[idx],
                clone.bitmap.data[idx + 1],
                clone.bitmap.data[idx + 2],
                clone.bitmap.data[idx + 3]
            ];

            while (true) {
                let found = false;
                if ((x + width + 1) <= clone.getWidth() && clone.checkAreaIsSameColor(x, y, width + 1, height, color)) {
                    found = true;
                    width++;
                }
                if ((y + height + 1) <= clone.getHeight() && clone.checkAreaIsSameColor(x, y, width, height + 1, color)) {
                    found = true;
                    height++;
                }
                if (!found) {
                    break;
                }
            }

            rectangles.push({
                x,
                y,
                width,
                height,
                color
            });

            clone.fillArea(x, y, width, height, [0, 0, 0, 0]);
        }
    }

    return rectangles;
}

function toRectanglesSvg() {
    const rectangles = toRectangles.call(this);

    return `<?xml version="1.0" encoding="UTF-8" ?>
<svg height="${this.getHeight()}" width="${this.getWidth()}" xmlns="http://www.w3.org/2000/svg">
${rectangles.map(rectangle => `    <rect ${hexColor(rectangle.color)} height="${rectangle.height}" width="${rectangle.width}" x="${rectangle.x}" y="${rectangle.y}"/>`).join(`
`)}    
</svg>`;
}

function hexColor(color) {
    return `fill="#${decToHex(color[0])}${decToHex(color[1])}${decToHex(color[2])}"${color[3] < 255 ? ` fill-opacity="${decToOpacity(color[3])}"` : ``}`

    function decToHex(dec) {
        return dec.toString(16).padStart(2, "0").toUpperCase();
    }

    function decToOpacity(dec) {
        return (dec / 255);
    }
}

export default () => ({
    toRectangles,
    toRectanglesSvg
});
