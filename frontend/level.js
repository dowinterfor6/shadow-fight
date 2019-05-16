const LEVEL_CONSTANTS = {
  MAX_TIME: 60 * 120,
  TIMER_TEXT_HEIGHT: 22.5,
};

export default class Level {
  constructor(ctx, dimensions) {
    this.dimensions = dimensions;
    this.time = LEVEL_CONSTANTS.MAX_TIME;
    this.ctx = ctx;
  }

  animate() {
    this.drawTimer();
  }

  drawTimer() {
    // TODO: Need better solution
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    // TIMER
    this.ctx.font = '16px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(
      `${Math.round(this.time / 60)}`, 
      this.dimensions.width / 2, 
      LEVEL_CONSTANTS.TIMER_TEXT_HEIGHT
    );
    this.time = this.time - 1;
    // CIRCLE
    this.ctx.beginPath();
    this.ctx.arc(
      this.dimensions.width / 2, 
      LEVEL_CONSTANTS.TIMER_TEXT_HEIGHT - 5, 
      15, 0, 2 * Math.PI);
    this.ctx.stroke();
    return this.time;
  }
}