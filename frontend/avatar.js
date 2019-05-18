const AVATAR_CONSTANTS = {
  AVATAR_DIMENSIONS: {
    width: 50,
    height: 150
  },
  GRAVITY: -0.7,
  P1_MOVEMENT: {
    87: { x: 0, y: -1 },
    65: { x: -1, y: 0 },
    83: { x: 0, y: 1 },
    68: { x: 1, y: 0 },
  },
  P2_MOVEMENT: {
    38: { x: 0, y: -1 },
    37: { x: -1, y: 0 },
    40: { x: 0, y: 1 },
    39: { x: 1, y: 0 },
  },
  MOVEMENT_SPEED: {
    x: 10,
    y: 10
  }
}

export default class Avatar {
  constructor(ctx, dimensions, playerNum) {
    this.ctx = ctx;
    this.dimensions = dimensions;
    this.playerNum = playerNum;

    let startingX = playerNum === 1 ? 50 : this.dimensions.width - 50;
    this.pos = {
      x: startingX - AVATAR_CONSTANTS.AVATAR_DIMENSIONS.width / 2,
      y: this.dimensions.height - AVATAR_CONSTANTS.AVATAR_DIMENSIONS.height - 150
    };

    this.vel = {
      vx: 0,
      vy: 0
    }

    this.paused = false;
    this.keyCodeMovement = this.playerNum === 1 ? 
      AVATAR_CONSTANTS.P1_MOVEMENT : AVATAR_CONSTANTS.P2_MOVEMENT;

    this.animate = this.animate.bind(this);
    this.drawAvatar = this.drawAvatar.bind(this);
    this.moveAvatar = this.moveAvatar.bind(this);
    this.stopAvatar = this.stopAvatar.bind(this);
    this.checkBoundary = this.checkBoundary.bind(this);

    //TODO: IS THERE A BETTER SOLUTION?
    document.addEventListener('keydown', this.moveAvatar);
    document.addEventListener('keyup', this.stopAvatar);
  }

  animate(paused) {
    this.paused = !!paused;
    if (!this.paused) {
      this.vel.vy -= AVATAR_CONSTANTS.GRAVITY;
      this.pos.y += this.vel.vy;
      this.pos.x += this.vel.vx;
      this.checkBoundary();
    }
    this.drawAvatar();
  }

  moveAvatar(e) {
    if (!this.paused) {
      if (Object.keys(this.keyCodeMovement).includes(e.keyCode.toString())) {
        // Keypress movement
        this.vel.vx = this.keyCodeMovement[e.keyCode.toString()].x 
          * AVATAR_CONSTANTS.MOVEMENT_SPEED.x;
        // Prevent infinite jump
        if (this.pos.y === this.dimensions.height - 155 - AVATAR_CONSTANTS.AVATAR_DIMENSIONS.height) {
          this.vel.vy += this.keyCodeMovement[e.keyCode.toString()].y
            * AVATAR_CONSTANTS.MOVEMENT_SPEED.y;
        }
        this.checkBoundary();
      }
    }
  }

  stopAvatar(e) {
    this.vel.vx = 0;
    this.checkBoundary();
  }
  
  drawAvatar() {
    this.ctx.fillStyle = this.playerNum === 1 ? 'Blue' : 'Red';
    this.ctx.fillRect(
      this.pos.x, 
      this.pos.y, 
      AVATAR_CONSTANTS.AVATAR_DIMENSIONS.width, 
      AVATAR_CONSTANTS.AVATAR_DIMENSIONS.height
    );
  }

  checkBoundary() {
    let offset = this.playerNum === 1 ? 0 : AVATAR_CONSTANTS.AVATAR_DIMENSIONS.width;
    if (this.pos.x < 0) {
      this.pos.x = 0;
      this.vel.vx = 0;
    } else if (this.pos.x > this.dimensions.width - offset) {
      this.pos.x = this.dimensions.width - offset;
      this.vel.vx = 0;
    } else if (this.pos.y > this.dimensions.height - 155 - AVATAR_CONSTANTS.AVATAR_DIMENSIONS.height) {
      this.pos.y = this.dimensions.height - 155 - AVATAR_CONSTANTS.AVATAR_DIMENSIONS.height;
      this.vel.vy = 0;
    } else if (this.pos.y < 0) {
      this.pos.y = 0;
    }
  }
}