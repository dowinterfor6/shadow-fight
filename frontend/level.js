const COLOR_PALETTE = {
  PRIMARY: '#00070A',
  SECONDARY: '#294552',
  TERTIARY: '#597884',
  QUATERNARY: '#ACC4CE',
  QUINTERNARY: '#9EB9B3'
};

const LEVEL_CONSTANTS = {
  MAX_TIME: 60 * 120,
  TIMER_TEXT_HEIGHT: 75,
  TIMER_RADIUS: 45,
  MAX_HEALTH: 200,
  HEALTH_BAR: {
    width: 350,
    height: 20
  }
};

export default class Level {
  constructor(ctx, dimensions) {
    this.dimensions = dimensions;
    this.time = LEVEL_CONSTANTS.MAX_TIME;
    this.ctx = ctx;

    this.drawTimerCircle = this.drawTimerCircle.bind(this);
    this.drawTimerDisplay = this.drawTimerDisplay.bind(this);
    this.drawTimerText = this.drawTimerText.bind(this);
    this.drawHealthBars = this.drawHealthBars.bind(this);
  }

  animate(playerHealth, botHealth) {
    let time =  this.drawTimer();
    this.drawHealthBars(playerHealth, botHealth);
    return time;
  }

  drawTimer() {
    // TODO: Need better solution
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.drawTimerCircle();
    this.drawTimerDisplay();
    this.drawTimerText();
    
    this.time = this.time - 1;
    if (this.time === 0) {
      let returnTime = 0;
      this.time = LEVEL_CONSTANTS.MAX_TIME;
      return returnTime;
    }
  }

  drawTimerText() {
    this.ctx.font = '42px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = 'WHITE';
    this.ctx.strokeStyle = COLOR_PALETTE.PRIMARY;
    this.ctx.fillText(
      `${Math.round(this.time / 60)}`,
      this.dimensions.width / 2,
      LEVEL_CONSTANTS.TIMER_TEXT_HEIGHT + 8
    );
    this.ctx.strokeText(
      `${Math.round(this.time / 60)}`,
      this.dimensions.width / 2,
      LEVEL_CONSTANTS.TIMER_TEXT_HEIGHT + 8
    );
  }

  drawTimerCircle() {
    this.ctx.beginPath();
    this.ctx.fillStyle = COLOR_PALETTE.SECONDARY;
    this.ctx.arc(
      this.dimensions.width / 2,
      LEVEL_CONSTANTS.TIMER_TEXT_HEIGHT - 5,
      LEVEL_CONSTANTS.TIMER_RADIUS, 0, 2 * Math.PI
      );
    this.ctx.fill();
  }

  drawTimerDisplay() {
    this.ctx.beginPath();
    this.ctx.fillStyle = COLOR_PALETTE.QUATERNARY;
    this.ctx.arc(
      this.dimensions.width / 2,
      LEVEL_CONSTANTS.TIMER_TEXT_HEIGHT - 5,
      LEVEL_CONSTANTS.TIMER_RADIUS,
      - 0.5 * Math.PI,
      (LEVEL_CONSTANTS.MAX_TIME - this.time)
      * 2 * Math.PI / LEVEL_CONSTANTS.MAX_TIME
      - 0.5 * Math.PI
    );
    this.ctx.lineTo(this.dimensions.width / 2,
      LEVEL_CONSTANTS.TIMER_TEXT_HEIGHT - 5
    );
    this.ctx.fill();
  }

  drawHealthBars(playerHealth, botHealth) {
    let playerHpPos = {
      x: this.dimensions.width / 2 - LEVEL_CONSTANTS.HEALTH_BAR.width - LEVEL_CONSTANTS.TIMER_RADIUS - 10,
      y: LEVEL_CONSTANTS.TIMER_TEXT_HEIGHT - 5 + LEVEL_CONSTANTS.HEALTH_BAR.height / 2 - LEVEL_CONSTANTS.TIMER_RADIUS
    };
    
    // Player health container
    this.ctx.beginPath();
    this.ctx.strokeStyle = 'BLACK';
    this.ctx.moveTo(
      playerHpPos.x,
      playerHpPos.y
    );
    this.ctx.lineTo(
      playerHpPos.x + LEVEL_CONSTANTS.HEALTH_BAR.width,
      playerHpPos.y
    );
    this.ctx.lineTo(
      playerHpPos.x + LEVEL_CONSTANTS.HEALTH_BAR.width - 15,
      playerHpPos.y + LEVEL_CONSTANTS.HEALTH_BAR.height
    );
    this.ctx.lineTo(
      playerHpPos.x,
      playerHpPos.y + LEVEL_CONSTANTS.HEALTH_BAR.height
    );
    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.stroke();

    // Player current health
    let playerCurrentHealthx = playerHpPos.x
      + (
        (LEVEL_CONSTANTS.MAX_HEALTH - 15) / LEVEL_CONSTANTS.MAX_HEALTH
      ) * LEVEL_CONSTANTS.HEALTH_BAR.width;
    this.ctx.beginPath();
    this.ctx.strokeStyle = 'BLACK';
    this.ctx.fillStyle = 'RED';
    this.ctx.moveTo(
      playerCurrentHealthx,
      playerHpPos.y
    );
    this.ctx.lineTo(
      playerHpPos.x + LEVEL_CONSTANTS.HEALTH_BAR.width,
      playerHpPos.y
    );
    this.ctx.lineTo(
      playerHpPos.x + LEVEL_CONSTANTS.HEALTH_BAR.width - 15,
      playerHpPos.y + LEVEL_CONSTANTS.HEALTH_BAR.height
    );
    this.ctx.lineTo(
      playerCurrentHealthx,
      playerHpPos.y + LEVEL_CONSTANTS.HEALTH_BAR.height
    );
    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.stroke();
  }
}