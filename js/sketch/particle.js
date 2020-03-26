// Particle class
class Particle {
    constructor() {
        this.x = random(0, width);
        this.y = random(0, height);
        this.margin = 100;
        this.r = random(1, 8);
        this.xSpeed = random(-2, 2);
        this.ySpeed = random(-1, 1.5);
    }

    createParticle() {
        noStroke();
        fill('rgba(71, 93, 255, 0.5)');
        circle(this.x, this.y, this.r);
    }

    moveParticle() {
        if (this.x < 0 || this.x > width)
            this.xSpeed *= -1;
        if (this.y < 0 || this.y > height)
            this.ySpeed *= -1;
        if (this.x > (width / 2) - ((outermost_rotater.w / 2) + this.margin) && this.x < (width / 2) + ((outermost_rotater.w / 2) + this.margin) && this.y > (height / 2) - ((outermost_rotater.h / 2) + this.margin) && this.y < (height / 2) + ((outermost_rotater.h / 2) + this.margin)) {
            this.x = random(0, width);
            this.y = random(0, height);
        }
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }

    joinParticles(paraticles) {
        particles.forEach(element => {
            let dis = dist(this.x, this.y, element.x, element.y);
            if (dis < 85) {
                stroke('rgba(87, 107, 255, 0.04)');
                line(this.x, this.y, element.x, element.y);
            }
        });
    }

    resize() {
        this.x = random(0, width);
        this.y = random(0, height);
    }
}