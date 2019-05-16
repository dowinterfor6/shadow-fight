import Level from "./level";

export default class Arena {
  constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.running = true;

    this.level = new Level(this.ctx, this.dimensions);

    this.drawBackground = this.drawBackground.bind(this);
    this.play = this.play.bind(this);
    this.animate();
  }
  
  play() {
    this.running = true;
    this.ctx.canvas.removeEventListener('mousedown',this.play);
    this.animationFrame = requestAnimationFrame(this.animate.bind(this));
  }

  animate() {
    if (this.running) {
      // TODO: TEMPORARY
      let time = this.level.animate(200, 200);
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

  // ONLY FOR STARTING SCREEN
  drawBackground() {
    // TODO: Get a good background

    let background = new Image();
    background.src = 'https://i.kym-cdn.com/photos/images/original/000/921/502/3b0.png';
    background.onload = () => {
      this.ctx.drawImage(background, 0, 0, this.dimensions.width, this.dimensions.height);
    }
    
    this.ctx.canvas.addEventListener('mousedown', this.play);

    // this.ctx.beginPath();
    // this.ctx.rect(0, 0, this.dimensions.width, this.dimensions.height);
    // this.ctx.fillStyle = 'Black';
    // this.ctx.fill();
  }
}