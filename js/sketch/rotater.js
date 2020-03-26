class Rotater {
    constructor(size) {
        this.x = width / 2;
        this.y = height / 2;
        this.w = size;
        this.h = size;
        this.direction = floor(random(0, 1));
        this.start = floor(random(1, 360));
        this.stop = 360;
        this.r = floor(random(0, 150));
        this.g = floor(random(100, 200));
        this.b = 255;
    }

    show() {
        noFill();
        stroke(this.r, this.g, this.b, 95);
        strokeWeight(5);
        arc(this.x, this.y, this.w, this.h, this.start, this.stop);
    }

    animate() {
        if (this.direction === 1) {
            this.start++;

            if (this.start > 358) {
                this.direction = 0;
            }
        } else if (this.direction === 0) {
            this.start--;

            if (this.start < 1) {
                this.direction = 1;
            }
        } else {
            console.log("error");
        }
    }

    resize() {
        this.x = width / 2;
        this.y = height / 2;
    }
}