const ENVIRONMENT_CONSTANTS = {
  GRAVITY: -0.7,
  ENVIRONMENT_DIMENSIONS: {
    1: {
      sx: 0,
      sy: 0,
      sw: 94,
      sh: 94
    },
    2: {
      sx: 94,
      sy: 0,
      sw: 94,
      sh: 94
    },
    3: {
      sx: 188,
      sy: 0,
      sw: 94,
      sh: 94
    }
  },
  ENVIRONMENT_RESIZE: 25
}

export default class Environment {
  constructor(ctx, dimensions) {
    this.ctx = ctx;
    this.dimensions = dimensions;
    this.pos = {
      x: Math.round(Math.random() * this.dimensions.width),
      y: -94
    }

    this.randSprite = Math.round(Math.random() * 2 + 1);

    this.deltax = Math.random() * 0.5 - 0.25;
    this.move = this.move.bind(this);
    this.drawEnvironment = this.drawEnvironment.bind(this);
    this.animate = this.animate.bind(this);
  }

  animate() {
    this.move();
    this.drawEnvironment();
  }

  move() {
    this.pos.y -= ENVIRONMENT_CONSTANTS.GRAVITY;
    this.pos.x += this.deltax;
  }

  drawEnvironment() {
    let environment = new Image();
    environment.src = 'frontend/assets/images/sakura.png';
    this.ctx.drawImage(
      environment, 
      ENVIRONMENT_CONSTANTS.ENVIRONMENT_DIMENSIONS[this.randSprite].sx, 
      ENVIRONMENT_CONSTANTS.ENVIRONMENT_DIMENSIONS[this.randSprite].sy,
      ENVIRONMENT_CONSTANTS.ENVIRONMENT_DIMENSIONS[this.randSprite].sw,
      ENVIRONMENT_CONSTANTS.ENVIRONMENT_DIMENSIONS[this.randSprite].sh,
      this.pos.x,
      this.pos.y,
      ENVIRONMENT_CONSTANTS.ENVIRONMENT_RESIZE,
      ENVIRONMENT_CONSTANTS.ENVIRONMENT_RESIZE,
    );
  }
}