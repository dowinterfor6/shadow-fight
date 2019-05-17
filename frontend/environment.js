const ENVIRONMENT_CONSTANTS = {
  GRAVITY: -0.7,
  ENVIRONMENT_DIMENSIONS: 94,
  SAKURA_SPRITES: 3,
  SNOWFLAKE_SPRITES: 9,
  ENVIRONMENT_RESIZE: 25
}

export default class Environment {
  constructor(ctx, dimensions, type) {
    this.ctx = ctx;
    this.dimensions = dimensions;
    this.pos = {
      x: Math.round(Math.random() * this.dimensions.width),
      y: -94
    }

    this.type = type;
    switch (type) {
      case 'sakura':
        this.randSprite = Math.round(Math.random() * (ENVIRONMENT_CONSTANTS.SAKURA_SPRITES - 1));
        break;
      case 'snowflake':
        this.randSprite = Math.round(Math.random() * (ENVIRONMENT_CONSTANTS.SNOWFLAKE_SPRITES - 1));
        break;
    }

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
    switch (this.type) {
      case 'sakura':
        environment.src = 'frontend/assets/images/sakura.png';
        break;
      case 'snowflake':
        environment.src = 'frontend/assets/images/snowflake.png';
        break;
    }
    
    this.ctx.drawImage(
      environment, 
      ENVIRONMENT_CONSTANTS.ENVIRONMENT_DIMENSIONS * this.randSprite, 
      0,
      ENVIRONMENT_CONSTANTS.ENVIRONMENT_DIMENSIONS,
      ENVIRONMENT_CONSTANTS.ENVIRONMENT_DIMENSIONS,
      this.pos.x,
      this.pos.y,
      ENVIRONMENT_CONSTANTS.ENVIRONMENT_RESIZE,
      ENVIRONMENT_CONSTANTS.ENVIRONMENT_RESIZE,
    );
  }
}