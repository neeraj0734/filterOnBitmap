const r = require("raylib")
const b = require("./bitmap")
const w = require("./wolverine")
const ff = require("./filterFrame")

const config = {
    screen : {
        width: 600,
        height: 600,
        title: "Filter",
        fps: 50,
    },
    pixel:{
        width: 20,
        height: 20,
    },
    bitmap: w.wolverine,
}

function setup() {
    const {screen, pixel,bitmap} = config;
    const frame = ff.createFilterFrame(0, 0, pixel.width * 15, pixel.height * 15)
    const coloredBitmap = b.getColoredBitmap(bitmap);

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screen.width, screen.height, screen.title);
    r.SetTargetFPS(screen.fps);

    config.frame = frame;
    config.coloredBitmap = coloredBitmap;
    return config;
}

function drawPixel(x, y, width, height, color){
    r.DrawRectangle(x, y, width, height, color);
}

function drawBitmap(bitmap,pixel) {
    const width = bitmap.width;
    const height = bitmap.height;

    for (let row = 0; row < width; row++) {
        for (let col = 0; col < height; col++) {
            const pixelBrightness = bitmap.points[col][row];
            drawPixel(row*pixel.height, col*pixel.width, pixel.width, pixel.height, pixelBrightness);
        }    
    }
}

function drawBitmapInsideRange(bitmap, range, pixel) {
    for (let row = range.hRange.st; row < range.hRange.end; row++) {
        for (let col = range.vRange.st; col < range.vRange.end; col++) {
            const pixelBrightness = bitmap.points[col][row];
            drawPixel(row*pixel.height, col*pixel.width, pixel.width, pixel.height, pixelBrightness);
        }    
    }
}

function update(world) {
    // console.log(world.frame);
    ff.moveFrame(world.frame, world.pixel)
    ff.modifyFrameDimentions(world.frame, world.pixel)
}


function draw(world) {
    const frameRange = ff.fetchFrameLocationRange(world.frame, world.pixel)
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    // drawBitmap(world.coloredBitmap, world.pixel);
    drawBitmapInsideRange(world.coloredBitmap, frameRange, world.pixel)
    r.DrawRectangleLinesEx(world.frame,2, r.RED)
    r.EndDrawing();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        update(world);
        draw(world)
    }
}

function main() {
    const world = setup();
    loop(world)
}
main();

