# @ozelot379/jimp-plugins

Some plugins for https://github.com/oliver-moran/jimp

## Requirements

This is an "ES module"

So it requires a current web browser or NodeJS v14

If you need older support, please try to use something like `webpack` or `babel`

## Usage

### Code

Add as a dependency to your `package.json`

```bash
yarn add @ozelot379/jimp-plugins
```

Use `Jimp` with configured plugins

```javascript
import Jimp from "@ozelot379/jimp-plugins";
```

Plugins:

- `autoCropTransparent`: Remove transparent border
- `borderImage`: Create new image from border image
- `checkSameColor`: Check area is same color
- `colorize`: Colorize a grayed image with a color
- `ensureSize`: Ensure the image has a size (`ensureMaxHeight`, `ensureMaxWidth`, `ensureMinHeight`, `ensureMinWidth`)
- `fillArea`: Fill area with color
- `isEmptyArea`: Check if area is empty
- `rotateSimple`: Rotate image simple - 90deg without resize (Like `Jimp` v0.5.6)
- `toRectangles`: Generate rectangles which pixels are same colors
- `toRectanglesSvg`: Generate rectangles svg which pixels are same colors

Types:

- `tga`

### CLI

Only tested with Linux

Install it global so you can use the binaries

```bash
sudo yarn global add @ozelot379/jimp-plugins
```

Commands:
- `img_to_svg "img input path" "svg output path"`: See `toRectanglesSvg` above
