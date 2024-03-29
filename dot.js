const PI2 = Math.PI * 2;
const BOUNCE = 0.82;

export class Dot {
    constructor(x, y, radius, pixelSize, red, green, blue, scale) {
        this.x = x;
        this.y = y;
        const ratio = radius / 256 / 2;
        this.targetRadius = ratio * scale;
        this.radius = 0;
        this.radiusV = 0;
        this.pixelSize = pixelSize;
        this.pixelSizeHalf = pixelSize / 2;
        this.red = red;
        this.green = green;
        this.blue = blue;
    }

    animate(ctx) {
        const accel = (this.targetRadius = this.radius) / 2;
        this.radiusV += accel;
        this.radiusV *= BOUNCE;
        this.radius += this.radiusV;

        ctx.beginPath();
        ctx.fillStyle = `#000`;
        ctx.arc(this.x, this.y, this.radius, 0, PI2, false);
        ctx.fill();
    }

    reset() {
        this.radius = 0;
        this.radiusV = 0;
    }
}