const { IsKeyDown, KEY_RIGHT, KEY_LEFT, KEY_UP, KEY_DOWN } = require("raylib");

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
}

module.exports = {
    createFilterFrame,
    moveFrame,

}