var canvas;
var side = 100.0;
var black = "#100007";
var orange = "#F97C00";

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
}

function draw() {
    var limitX = height / side;
    var limitY = width / side;
    var isBlack = false;

    noStroke();
    for (var y = 0; y <= limitY; y++) {
        isBlack = y % 2 === 0;
        for (var x = 0; x <= limitX; x++) {
            fill((isBlack)? black : orange);
            rect(x*side, y*side, side, side);
            isBlack = !isBlack;
        }
    }
}

window.onresize = function() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    canvas.size(w,h);
    width = w;
    height = h;
};
