const r = require("raylib")
const b = require("./bitmap")
const w = require("./wolverine")

const config = {
    screen : {
        width: 500,
        height: 500,
        title: "Filter",
        fps: 50,
    },
    pixel:{
        width: 15,
        height: 15,
    },
    bitmap: w.wolverine,
}

function setup() {
    const {screen} = config;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screen.width, screen.height, screen.title);
    r.SetTargetFPS(screen.fps);

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

function update(world) {
    
}


function draw(world) {
    const coloredBitmap = b.getColoredBitmap(world.bitmap)
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    drawBitmap(coloredBitmap, world.pixel);
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

