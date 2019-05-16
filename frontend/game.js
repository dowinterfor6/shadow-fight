import Level from "./level";

export default class Arena {
  constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.running = true;

    this.level = new Level(this.ctx, this.dimensions);

    this.animationFrame = requestAnimationFrame(this.animate.bind(this));
    this.drawBackground = this.drawBackground.bind(this);
  }

  animate() {

    if (this.running) {
      let time = this.level.animate();
      if (time === 0) {
        this.running = false;
      }
      requestAnimationFrame(this.animate.bind(this));
    } else {
      cancelAnimationFrame(this.animationFrame);
      // Display start screen
      this.drawBackground();
    }
  }

  drawBackground() {
    // TODO: Get a good background

    // let background = new Image();
    // background.src = 'https://i.imgur.com/NNoFNWf.png';
    // background.onload = () => {
    //   this.ctx.drawImage(background, 0, 0, this.dimensions.width, this.dimensions.height);
    // }
    this.ctx.beginPath();
    this.ctx.rect(0, 0, this.dimensions.width, this.dimensions.height);
    this.ctx.fillStyle = 'Black';
    this.ctx.fill();
  }
}