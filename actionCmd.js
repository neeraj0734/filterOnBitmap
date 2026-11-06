const r = require("raylib")

function checkIncSizeCmd() {
    const viaLeftCtrl = r.IsKeyDown(r.KEY_LEFT_CONTROL) && r.IsKeyPressed(r.KEY_EQUAL)
    const viaRightCtrl = r.IsKeyDown(r.KEY_RIGHT_CONTROL) && r.IsKeyPressed(r.KEY_EQUAL)
    return viaLeftCtrl || viaRightCtrl
}

function checkDecSizeCmd() {
    const viaLeftCtrl = r.IsKeyDown(r.KEY_LEFT_CONTROL) && r.IsKeyPressed(r.KEY_MINUS)
    const viaRightCtrl = r.IsKeyDown(r.KEY_RIGHT_CONTROL) && r.IsKeyPressed(r.KEY_MINUS)
    return viaLeftCtrl || viaRightCtrl
}

module.exports = {
    checkDecSizeCmd,
    checkIncSizeCmd,
}