let innermost_rotater;
let inner_rotater;
let outer_rotater;
let outermost_rotater;
let inner_circ;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);

    innermost_rotater = new Rotater(100);
    inner_rotater = new Rotater(125);
    outer_rotater = new Rotater(150);
    outermost_rotater = new Rotater(200);
    osc_ellipse = new OscEllipse();
}

function draw() {
    background(255);

    // Showing objects
    innermost_rotater.show();
    inner_rotater.show();
    outer_rotater.show();
    outermost_rotater.show();
    osc_ellipse.show();

    // Animating objects
    innermost_rotater.animate();
    inner_rotater.animate()
    outer_rotater.animate();
    outermost_rotater.animate();
    osc_ellipse.animate();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}