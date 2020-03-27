let innermost_rotater;
let inner_rotater;
let outer_rotater;
let outermost_rotater;
let inner_circ;
let particles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);

    // Creating rotaters
    innermost_rotater = new Rotater(100);
    inner_rotater = new Rotater(125);
    outer_rotater = new Rotater(150);
    outermost_rotater = new Rotater(200);

    //Creating ellipse
    osc_ellipse = new OscEllipse();

    // Creating particles
    if (!isMobile) {
        for (let i = 0; i < width / 10; i++) {
            particles.push(new Particle());
        }
    }
}

function draw() {
    background(255);

    // Particle system
    if (!isMobile) {
        for (let i = 0; i < particles.length; i++) {
            particles[i].createParticle();
            particles[i].moveParticle();
            particles[i].joinParticles(particles.slice(i));
        }
    }

    // Rotaters
    innermost_rotater.show();
    inner_rotater.show();
    outer_rotater.show();
    outermost_rotater.show();
    innermost_rotater.animate();
    inner_rotater.animate()
    outer_rotater.animate();
    outermost_rotater.animate();

    // Ellipse
    osc_ellipse.show();
    osc_ellipse.animate();
}

function windowResized() {
    // Resizing canvas
    resizeCanvas(windowWidth, windowHeight);

    // Resizing particles
    if (!isMobile) {
        for (let i = 0; i < particles.length; i++) {
            particles[i].resize();
        }
    }

    // Resizing rotaters
    innermost_rotater.resize();
    inner_rotater.resize();
    outer_rotater.resize();
    outermost_rotater.resize();

    // Resizing ellipse
    osc_ellipse.resize();
}