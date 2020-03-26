class OscEllipse {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
        this.size = 25;
        this.min_size = 25;
        this.max_size = 50;
        this.speed = 0.25;
        this.direction = 1;
        this.r = 255;
        this.g = floor(random(0, 100));;
        this.b = floor(random(0, 100));;
    }

    show() {
        noStroke();
        fill(this.r, this.g, this.b);
        circle(this.x, this.y, this.size);
    }

    animate() {
        if (this.direction === 1) {
            this.size += this.speed;

            if (this.size > this.max_size) {
                this.direction = 0;
            }
        } else if (this.direction === 0) {
            this.size -= this.speed;

            if (this.size < this.min_size) {
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