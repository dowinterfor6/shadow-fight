const LEVEL_CONSTANTS = {
  MAX_TIME: 60 * 120,
  TIMER_TEXT_HEIGHT: 22.5,
  TIMER_RADIUS: 15
};

export default class Level {
  constructor(ctx, dimensions) {
    this.dimensions = dimensions;
    this.time = LEVEL_CONSTANTS.MAX_TIME;
    this.ctx = ctx;

    this.drawTimerCircle = this.drawTimerCircle.bind(this);
    this.drawTimerDisplay = this.drawTimerDisplay.bind(this);
    this.drawTimerText = this.drawTimerText.bind(this);
  }

  animate() {
    return this.drawTimer();
  }

  drawTimer() {
    // TODO: Need better solution
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.drawTimerCircle();
    this.drawTimerDisplay();
    this.drawTimerText();
    
    this.time = this.time - 1;
    return this.time;
  }

  drawTimerText() {
    this.ctx.font = '16px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = 'red';
    this.ctx.fillText(
      `${Math.round(this.time / 60)}`,
      this.dimensions.width / 2,
      LEVEL_CONSTANTS.TIMER_TEXT_HEIGHT
    );
  }

  drawTimerCircle() {
    // CIRCLE
    this.ctx.beginPath();
    this.ctx.fillStyle = 'pink';
    this.ctx.strokeStyle = 'black';
    this.ctx.arc(
      this.dimensions.width / 2,
      LEVEL_CONSTANTS.TIMER_TEXT_HEIGHT - 5,
      LEVEL_CONSTANTS.TIMER_RADIUS, 0, 2 * Math.PI
      );
    this.ctx.fill();
    this.ctx.stroke();
  }

  drawTimerDisplay() {
    // 15 = x^2 + y^2
    // For a triangle of angle 0, e.g. (120 - time) * 2pi/120
    // Hyp = 15, x = mid + 15cos(theta), y = pos + 15sin(theta)
    let x1 = this.dimensions.width / 2
      + LEVEL_CONSTANTS.TIMER_RADIUS 
      * Math.sin((LEVEL_CONSTANTS.MAX_TIME - this.time)
      * 2 * Math.PI / LEVEL_CONSTANTS.MAX_TIME);
    
    let y1 = LEVEL_CONSTANTS.TIMER_TEXT_HEIGHT - 5
      + -LEVEL_CONSTANTS.TIMER_RADIUS 
      * Math.cos((LEVEL_CONSTANTS.MAX_TIME - this.time)
      * 2 * Math.PI / LEVEL_CONSTANTS.MAX_TIME);
    
    this.ctx.beginPath();
    this.ctx.lineWidth = 1;
    this.ctx.lineCap = 'round';
    this.ctx.strokeStyle = 'blue';
    this.ctx.moveTo(this.dimensions.width / 2, LEVEL_CONSTANTS.TIMER_TEXT_HEIGHT - 5);
    this.ctx.lineTo(x1, y1);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.fillStyle = 'green';
    this.ctx.strokeStyle = 'purple';
    this.ctx.arc(
      this.dimensions.width / 2,
      LEVEL_CONSTANTS.TIMER_TEXT_HEIGHT - 5,
      LEVEL_CONSTANTS.TIMER_RADIUS,
      - 0.5 * Math.PI,
      (LEVEL_CONSTANTS.MAX_TIME - this.time)
      * 2 * Math.PI / LEVEL_CONSTANTS.MAX_TIME
      - 0.5 * Math.PI
    );
    this.ctx.fill();
    this.ctx.stroke();
  }
}