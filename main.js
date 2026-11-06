const r = require("raylib")
const config = {
    screen : {
        width: 500,
        height: 500,
        title: "Filter",
        fps: 50,
    }
}

function setup() {
    const {screen} = config;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screen.width, screen.height, screen.title);
    r.SetTargetFPS(screen.fps);

    return config;
}

function update(world) {
    
}

function draw(world) {
    
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
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

