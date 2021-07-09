const WHITE = "#FFFFFF";
const BLACK = "#000000";
var canvas;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(BLACK);
    strokeWeight(1);
    stroke(WHITE);

    // drawing background lines
    drawPattern();

    // drawing foreground lines
    var angle = atan(mouseY / mouseX);
    translate(mouseX, mouseY);
    rotate(angle);
    drawPattern();
}

function pythagoras(x, y) {
    return sqrt(x*x + y*y);
}

function drawPattern() {
    for (var x = -windowWidth; x < 2 * windowWidth; x += 10) {
        line(x, -windowHeight, x, windowHeight);
    }
}

window.onresize = function() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    canvas.size(w, h);
    width = w;
    height = h;
};
