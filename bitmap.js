function convertInBrightness(value) {
    return {
        r: value,
        g: value,
        b: value,
        a: 255,
    }
}

function constrainFrameInsideBitmap(bitmapRange, frame) {
    if(frame.x <= bitmapRange.h.st) frame.x = bitmapRange.h.st;
    if(frame.x + frame.width >= bitmapRange.h.end) frame.x = bitmapRange.h.end - frame.width;
    if(frame.y <= bitmapRange.v.st) frame.y = bitmapRange.v.st;
    if(frame.y + frame.height >= bitmapRange.v.end) frame.y = bitmapRange.v.end - frame.height;
}

function getColoredBitmap(bitmap){
    
    const coloredBitmap = [];
    for (let row = 0; row < bitmap.width; row++) {
        const inner = []
        for (let col = 0; col < bitmap.height; col++) {
            inner.push(convertInBrightness(bitmap.points[row][col]))
        }
        coloredBitmap.push(inner);
    }
    return {
        width: bitmap.width,
        height: bitmap.height,
        points: coloredBitmap,
    };
}

function getBitmapRange(x, y, width, height, pixelConfig) {
    return {
        h:{st:x * pixelConfig.width, end: width * pixelConfig.width},
        v:{st:y * pixelConfig.height, end: height * pixelConfig.height},
    }
}

module.exports = {
    getColoredBitmap,
    constrainFrameInsideBitmap,
    getBitmapRange,
}