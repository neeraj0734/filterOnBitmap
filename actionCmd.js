const r = require("raylib")

function checkZoomIn() {
    const viaLeftCtrl = r.IsKeyDown(r.KEY_LEFT_CONTROL) && r.IsKeyPressed(r.KEY_EQUAL)
    const viaRightCtrl = r.IsKeyDown(r.KEY_RIGHT_CONTROL) && r.IsKeyPressed(r.KEY_EQUAL)
    return viaLeftCtrl || viaRightCtrl
}

function checkZoomOut() {
    const viaLeftCtrl = r.IsKeyDown(r.KEY_LEFT_CONTROL) && r.IsKeyPressed(r.KEY_MINUS)
    const viaRightCtrl = r.IsKeyDown(r.KEY_RIGHT_CONTROL) && r.IsKeyPressed(r.KEY_MINUS)
    return viaLeftCtrl || viaRightCtrl
}

function checkDecSizeCmd() {
    const viaLeftShift = r.IsKeyDown(r.KEY_LEFT_SHIFT) && r.IsKeyPressed(44);
    const viaRightShift = r.IsKeyDown(r.KEY_RIGHT_SHIFT) && IsKeyPressed(44);

    return viaLeftShift ||viaRightShift
}


function checkIncSizeCmd() {
    const viaLeftShift = r.IsKeyDown(r.KEY_LEFT_SHIFT) && r.IsKeyPressed(46);
    const viaRightShift = r.IsKeyDown(r.KEY_RIGHT_SHIFT) && IsKeyPressed(46);

    return viaLeftShift ||viaRightShift
}

module.exports = {
    checkDecSizeCmd,
    checkIncSizeCmd,
    checkZoomIn,
    checkZoomOut,
}

