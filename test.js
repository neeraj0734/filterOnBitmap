const b = require("./bitmap")
const w = require("./wolverine")
const ff = require("./filterFrame")


const bitmap = w.wolverine;
const res = b.getColoredBitmap(bitmap);
// console.log(res);

const pixel={
        width: 15,
        height: 15,
};
const frame = {x:120, y:120, width : 60, height: 60}

const extracted = ff.extractPixelsBrightness(bitmap, frame, pixel);
const newPixel = ff.applyZoomEffect(pixel, 1)
console.log(newPixel);

// console.log("outer : " , extracted.length);
// console.log("inner : " , extracted[0].length);
