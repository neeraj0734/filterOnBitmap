const { IsKeyDown, KEY_RIGHT, KEY_LEFT, KEY_UP, KEY_DOWN, FONT_BITMAP, GetScreenHeight, GetScreenWidth, rlGetFramebufferWidth, rlSetUniformSampler } = require("raylib");

function createFilterFrame(x, y, width, height) {
    return {x, y, width, height}
}

function moveFrame(frame, pixelConfig) {
    if (IsKeyDown(KEY_RIGHT)) {
        frame.x += pixelConfig.height;
    }
    if (IsKeyDown(KEY_LEFT)) {
        frame.x -= pixelConfig.height;
    }
    if(IsKeyDown(KEY_UP)){
        frame.y -= pixelConfig.width;
    }
    if(IsKeyDown(KEY_DOWN)){
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

    if(frame.x + frame.width > GetScreenWidth()){
        frame.x = GetScreenWidth() - frame.width;
    }

    if(frame.y + frame.height > GetScreenHeight()){
        frame.y = GetScreenHeight() - frame.height;
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

function applyFilter(bitmap, frame, pixel) {
    
}

module.exports = {
    createFilterFrame,
    moveFrame,
    extractPixelsBrightness,
    fetchFrameLocationRange,
}