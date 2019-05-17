import Level from "./level";

export default class Arena {
  constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.gameOver = true;
    this.paused = false;

    this.level = new Level(this.ctx, this.dimensions);

    this.documentOffsetX = (document.body.clientWidth - this.dimensions.width) / 2;
    this.documentOffsetY = (document.body.clientHeight - 80 - this.dimensions.height) / 2;

    this.drawBackground = this.drawBackground.bind(this);
    this.handlePause = this.handlePause.bind(this);

    this.play = this.play.bind(this);
    this.restart = this.restart.bind(this);
    this.restart();
  }

  restart() {
    this.animate();
  }
  
  play() {
    // TODO: Maybe not the best place to put this
    this.gameOver = false;
    this.paused = false;
    this.ctx.canvas.removeEventListener('mousedown', this.play);
    this.animationFrame = requestAnimationFrame(this.animate.bind(this));
  }
  
  animate() {
    if (!this.gameOver) {
      this.ctx.canvas.addEventListener('mousedown', this.handlePause);
      // TODO: TEMPORARY
      if (this.paused) {
        cancelAnimationFrame(this.animationFrame);
        this.level.animate(150, 5, true);
        // TODO: RENDER PAUSE;
      } else {
        let gameState = this.level.animate(150, 5);
        if (gameState === 'timeUp') {
          console.log(gameState);
          this.gameOver = true;
        } else if (['player', 'bot'].includes(gameState)) {
          console.log(gameState + ' wins!');
          this.gameOver = true;
        }
        requestAnimationFrame(this.animate.bind(this));
      }
    } else {
      this.ctx.canvas.removeEventListener('mousedown', this.handlePause);
      cancelAnimationFrame(this.animationFrame);
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Display start screen
      this.drawBackground();
    }
  }

  // ONLY FOR STARTING SCREEN
  drawBackground() {
    this.ctx.canvas.addEventListener('mousedown', this.play);
    
    // TODO: Get a good background

    let background = new Image();
    background.src = 'https://i.kym-cdn.com/photos/images/original/000/921/502/3b0.png';
    background.onload = () => {
      this.ctx.drawImage(background, 0, 0, this.dimensions.width, this.dimensions.height);
    }
    

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
        this.paused = !this.paused;
        if (!this.paused) {
          this.play();
        }
      }
    }
  }
}