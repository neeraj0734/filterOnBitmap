function convertInBrightness(value) {
    return {
        r: value,
        g: value,
        b: value,
        a: 255,
    }
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

module.exports = {
    getColoredBitmap,
}