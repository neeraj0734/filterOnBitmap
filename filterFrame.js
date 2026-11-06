const { IsKeyDown, KEY_RIGHT, KEY_LEFT, KEY_UP, KEY_DOWN, FONT_BITMAP, GetScreenHeight, GetScreenWidth, rlGetFramebufferWidth } = require("raylib");

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
    console.log(frame);
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

module.exports = {
    createFilterFrame,
    moveFrame,
    constrainFrameInsideWindow,
}