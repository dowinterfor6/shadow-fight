const SAKURA_CONSTANTS = {
  GRAVITY: -0.7,
  SAKURA_DIMENSIONS: {
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
  SAKURA_RESIZE: 25
}

export default class Sakura {
  constructor(ctx, dimensions) {
    this.ctx = ctx;
    this.dimensions = dimensions;
    this.pos = {
      x: Math.round(Math.random() * this.dimensions.width),
      y: 0
    }
    this.randSprite = Math.round(Math.random() * 2 + 1);

    this.move = this.move.bind(this);
    this.drawSakura = this.drawSakura.bind(this);
    this.animate = this.animate.bind(this);
  }

  animate() {
    this.move();
    this.drawSakura();
  }

  move() {
    this.pos.y -= SAKURA_CONSTANTS.GRAVITY;
  }

  drawSakura() {
    let sakura = new Image();
    sakura.src = 'frontend/assets/images/sakura.png';
    this.ctx.drawImage(
      sakura, 
      SAKURA_CONSTANTS.SAKURA_DIMENSIONS[this.randSprite].sx, 
      SAKURA_CONSTANTS.SAKURA_DIMENSIONS[this.randSprite].sy,
      SAKURA_CONSTANTS.SAKURA_DIMENSIONS[this.randSprite].sw,
      SAKURA_CONSTANTS.SAKURA_DIMENSIONS[this.randSprite].sh,
      this.pos.x,
      this.pos.y,
      SAKURA_CONSTANTS.SAKURA_RESIZE,
      SAKURA_CONSTANTS.SAKURA_RESIZE,
    )
  }
}