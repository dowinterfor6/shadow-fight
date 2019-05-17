import Level from "./level";

export default class Arena {
  constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.running = true;

    this.level = new Level(this.ctx, this.dimensions);

    this.documentOffsetX = (document.body.clientWidth - this.dimensions.width) / 2;
    this.documentOffsetY = (document.body.clientHeight - 80 - this.dimensions.height) / 2;

    this.drawBackground = this.drawBackground.bind(this);
    this.handlePause = this.handlePause.bind(this);

    this.play = this.play.bind(this);
    this.play();
  }
  
  play() {
    this.running = true;
    this.ctx.canvas.removeEventListener('mousedown', this.play);
    this.ctx.canvas.addEventListener('mousedown', this.handlePause);
    this.animationFrame = requestAnimationFrame(this.animate.bind(this));
  }

  animate() {
    if (this.running) {
      // TODO: TEMPORARY
      let gameRunning = this.level.animate(150, 5);

      if (!gameRunning) {
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

  handlePause(e) {
    let pausePos = {
      x: this.dimensions.width - 60,
      y: 25
    };
    let pauseDimensions = {
      dx: 30,
      dy: 40
    };
    let clickPos = {
      x: e.pageX - this.documentOffsetX,
      y: e.pageY - this.documentOffsetY - 80
    }

    if (clickPos.x >= pausePos.x && clickPos.x <= pausePos.x + pauseDimensions.dx) {
      if (clickPos.y >= pausePos.y && clickPos.y <= pausePos.y + pauseDimensions.dy) {
        this.running = !this.running;
      }
    }
  }
}