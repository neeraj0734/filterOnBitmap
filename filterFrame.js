const r = require("raylib");
const cmd = require("./actionCmd");

function createFilterFrame(x, y, width, height) {
    return {x, y, width, height}
}

function moveFrame(frame, pixelConfig) {
    if (r.IsKeyDown(r.KEY_RIGHT)) {
        frame.x += pixelConfig.height;
    }
    if (r.IsKeyDown(r.KEY_LEFT)) {
        frame.x -= pixelConfig.height;
    }
    if(r.IsKeyDown(r.KEY_UP)){
        frame.y -= pixelConfig.width;
    }
    if(r.IsKeyDown(r.KEY_DOWN)){
        frame.y += pixelConfig.width;
    }
    constrainFrameInsideWindow(frame);
}

function constrainFrameInsideWindow(frame) {
    if(frame.x < 0){
        frame.x = 0;
    }

    if(frame.y < 0){
        frame.y = 0;
    }

    if(frame.x + frame.width > r.GetScreenWidth()){
        frame.x = r.GetScreenWidth() - frame.width;
    }

    if(frame.y + frame.height > r.GetScreenHeight()){
        frame.y = r.GetScreenHeight() - frame.height;
    }
}

function fetchFrameLocationRange(frame, pixelConfig) {
    const hRnageSt = frame.x/pixelConfig.width;
    const hRnageEnd = (frame.x + frame.width)/pixelConfig.width;
    const vRangeSt = frame.y / pixelConfig.height;
    const vRnageEnd = (frame.y + frame.height)/pixelConfig.height;

    return {
        hRange: {st: hRnageSt, end: hRnageEnd },
        vRange: {st: vRangeSt, end: vRnageEnd },
    }
}


function extractPixelsBrightness(bitmap, frame, pixelConfig){
    const frameRange = fetchFrameLocationRange(frame, pixelConfig);
    const outer = [];
    for (let row = frameRange.vRange.st; row < frameRange.vRange.end + 1; row++) {
        const inner = [];
        for (let col = frameRange.hRange.st; col < frameRange.hRange.end + 1; col++) {
          inner.push(bitmap.points[row][col]);
        }
        outer.push(inner);
    }
    return outer;
}


function modifyFrameDimentions(frame, pixelConfig) {
    if(cmd.checkDecSizeCmd()){
        frame.width -= pixelConfig.width
        frame.height -= pixelConfig.height
    }
    if(cmd.checkIncSizeCmd()){
        frame.width += pixelConfig.width
        frame.height += pixelConfig.height
    }
}

function applyZoomEffect(pixel, zoomBy) {
    if (cmd.checkZoomIn()) {
        pixel.width = pixel.width + zoomBy
        pixel.height = pixel.height + zoomBy
        console.log("Zoom in");
        
    }
    if (cmd.checkZoomOut()) {
        pixel.width = pixel.width - zoomBy
        pixel.height = pixel.height - zoomBy
        console.log("Zoom Out");
        
    }
    console.log(pixel);
    
}

function applyFilter(bitmap, frame, pixel) {
    
}

module.exports = {
    createFilterFrame,
    moveFrame,
    extractPixelsBrightness,
    fetchFrameLocationRange,
    modifyFrameDimentions,
    applyZoomEffect,
}