/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/avatar.js":
/*!****************************!*\
  !*** ./frontend/avatar.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Avatar; });
const AVATAR_CONSTANTS = {
  AVATAR_DIMENSIONS: {
    width: 150,
    height: 300
  },
  GRAVITY: -1.8,
  P1_MOVEMENT: {
    87: { x: 0, y: -1 },
    65: { x: -1, y: 0 },
    // 83: { x: 0, y: 1 },
    68: { x: 1, y: 0 },
  },
  P2_MOVEMENT: {
    38: { x: 0, y: -1 },
    37: { x: -1, y: 0 },
    // 40: { x: 0, y: 1 },
    39: { x: 1, y: 0 },
  },
  MOVEMENT_SPEED: {
    x: 10,
    y: 30
  },
  MAX_HEALTH: 200,
  SRITESHEET: {
    WALKING: {
      1: {
        x: 0,
        y: 202,
        w: 50,
        h: 98
      },
      2: {
        x: 50,
        y: 202,
        w: 50,
        h: 98
      },
      3: {
        x: 100,
        y: 202,
        w: 65,
        h: 98
      },
      4: {
        x: 165,
        y: 202,
        w: 75,
        h: 98
      },
      5: {
        x: 240,
        y: 202,
        w: 60,
        h: 98
      },
      6: {
        x: 300,
        y: 203,
        w: 70,
        h: 97
      },
      7: {
        x: 370,
        y: 202,
        w: 80,
        h: 98
      }
    },
    IDLE: {
      1: {
        x: 0,
        y: 301,
        w: 75,
        h: 96
      },
      2: {
        x: 75,
        y: 301,
        w: 75,
        h: 96
      },
      3: {
        x: 150,
        y: 301,
        w: 75,
        h: 96
      },
      4: {
        x: 225,
        y: 301,
        w: 75,
        h: 96
      },
      5: {
        x: 300,
        y: 301,
        w: 75,
        h: 96
      },
      6: {
        x: 375,
        y: 301,
        w: 75,
        h: 96
      }
    },
    JUMP: {
      1: {
        x: 0,
        y: 95,
        w: 74,
        h: 107
      },
      2: {
        x: 74,
        y: 95,
        w: 74,
        h: 107
      },
      3: {
        x: 148,
        y: 95,
        w: 74,
        h: 107
      },
      4: {
        x: 222,
        y: 95,
        w: 74,
        h: 107
      },
      5: {
        x: 296,
        y: 95,
        w: 74,
        h: 107
      }
    },
    ATTACK: {
      1: {
        x: 0,
        y: 0,
        w: 104,
        h: 95
      },
      2: {
        x: 104,
        y: 0,
        w: 104,
        h: 95
      }
    }
  }
}

class Avatar {
  constructor(ctx, dimensions, playerNum) {
    this.ctx = ctx;
    this.dimensions = dimensions;
    this.playerNum = playerNum;

    let startingX = playerNum === 1 ? 50 : this.dimensions.width - 50;
    this.pos = {
      x: startingX - AVATAR_CONSTANTS.AVATAR_DIMENSIONS.width / 2,
      y: this.dimensions.height - AVATAR_CONSTANTS.AVATAR_DIMENSIONS.height - 1
    };

    this.vel = {
      vx: 0,
      vy: 0
    }

    this.state = {
      health: AVATAR_CONSTANTS.MAX_HEALTH,
      basicAttacking: false,
      damageDone: false,
      basicAttackHitbox: {
        w: AVATAR_CONSTANTS.AVATAR_DIMENSIONS.width / 2 + 40,
        h: 10
      },
      basicAttackDamage: 10,
      facing: playerNum === 1 ? 1 : -1,
      basicAttackKeycode: playerNum === 1 ? 74 : 97,
      movement: 'idle'
    }

    this.paused = false;
    this.keyCodeMovement = this.playerNum === 1 ? 
      AVATAR_CONSTANTS.P1_MOVEMENT : AVATAR_CONSTANTS.P2_MOVEMENT;
    this.keypressPOJO = {};
    Object.keys(this.keyCodeMovement).forEach((key) => {
      this.keypressPOJO[key] = false;
    });
    this.spriteSheet = new Image();
    this.spriteSheet.src = 'frontend/assets/images/ryu-sprite-sheet.png';

    this.animationTimer = 0;

    this.animate = this.animate.bind(this);
    this.drawAvatar = this.drawAvatar.bind(this);
    this.moveAvatar = this.moveAvatar.bind(this);
    this.stopAvatar = this.stopAvatar.bind(this);
    this.checkBoundary = this.checkBoundary.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
    this.basicAttack = this.basicAttack.bind(this);
    this.drawBasicAttack = this.drawBasicAttack.bind(this);
    this.handleAttack = this.handleAttack.bind(this);

    //TODO: IS THERE A BETTER SOLUTION?
    document.addEventListener('keydown', this.handleAttack);
    document.addEventListener('keydown', this.moveAvatar);
    document.addEventListener('keyup', this.stopAvatar);
  }

  animate(paused) {
    this.paused = !!paused;
    this.animationTimer += 0.05;
    if (!this.paused) {
      this.updatePosition();
    }
    if (this.vel.vx === 0 && this.vel.vy === 0) {
      this.state.movement = 'idle';
    }
    let bounds;
    if (!this.paused) {
      this.drawBasicAttack();
      bounds = {
        x: this.pos.x + this.state.facing * this.state.basicAttackHitbox.w,
        y: this.pos.y + this.state.basicAttackHitbox.h
      }
    }
    this.drawAvatar();
    return bounds;
  }

  updatePosition() {
    Object.keys(this.keypressPOJO).forEach((key) => {
      if (this.keypressPOJO[key]) {
        // Keypress movement
        if (this.keyCodeMovement[key].x !== 0) {
          this.vel.vx = this.keyCodeMovement[key].x
            * AVATAR_CONSTANTS.MOVEMENT_SPEED.x;
          this.state.facing = this.keyCodeMovement[key].x;
          if (this.state.movement !== 'jump') {
            this.state.movement = 'moveX';
          };
        };
        // Prevent infinite jump
        if (this.pos.y === this.dimensions.height - 1 - AVATAR_CONSTANTS.AVATAR_DIMENSIONS.height) {
          if (this.keyCodeMovement[key].y !== 0) {
            this.vel.vy = this.keyCodeMovement[key].y
              * AVATAR_CONSTANTS.MOVEMENT_SPEED.y;
            this.state.movement = 'jump';
          };
        };
      }
    });
    this.vel.vy -= AVATAR_CONSTANTS.GRAVITY;
    this.pos.y += this.vel.vy;
    this.pos.x += this.vel.vx;
    this.checkBoundary();
  }

  moveAvatar(e) {
    if (!this.paused && !e.repeat) {
      if (Object.keys(this.keyCodeMovement).includes(e.keyCode.toString())) {
        this.keypressPOJO[e.keyCode.toString()] = true;
        this.updatePosition();
      }
    }
  }

  stopAvatar(e) {
    this.vel.vx = 0;
    this.keypressPOJO[e.keyCode.toString()] = false;
    this.updatePosition();
  }
  
  drawAvatar() {
    this.ctx.fillStyle = this.playerNum === 1 ? 'Blue' : 'Red';
    let currentSpriteSliceIdx;
    let currentSpriteSlice;
    let attackOffset = 0;
    switch (this.state.movement) {
      case 'idle':
        currentSpriteSliceIdx = 1 + Math.round(this.animationTimer % (Object.keys(AVATAR_CONSTANTS.SRITESHEET.IDLE).length - 1));
        currentSpriteSlice = AVATAR_CONSTANTS.SRITESHEET.IDLE[currentSpriteSliceIdx];
        break;
      case 'moveX':
        currentSpriteSliceIdx = 1 + Math.round(2 * this.animationTimer % (Object.keys(AVATAR_CONSTANTS.SRITESHEET.WALKING).length - 1));
        currentSpriteSlice = AVATAR_CONSTANTS.SRITESHEET.WALKING[currentSpriteSliceIdx];
        break;
      case 'jump':
        currentSpriteSliceIdx = 1 + Math.round(2 * this.animationTimer % (Object.keys(AVATAR_CONSTANTS.SRITESHEET.JUMP).length - 1));
        currentSpriteSlice = AVATAR_CONSTANTS.SRITESHEET.JUMP[currentSpriteSliceIdx];
        break;
      case 'attack':
        currentSpriteSliceIdx = 1 + Math.round(this.animationTimer % (Object.keys(AVATAR_CONSTANTS.SRITESHEET.ATTACK).length - 1));
        currentSpriteSlice = AVATAR_CONSTANTS.SRITESHEET.ATTACK[currentSpriteSliceIdx];
        attackOffset = 50;
        break;
    }
    this.ctx.save();
    this.ctx.scale(this.state.facing, 1);
    let offset = 0;
    if (this.state.facing === -1) {
      offset = AVATAR_CONSTANTS.AVATAR_DIMENSIONS.width;
    }
    this.ctx.drawImage(
      this.spriteSheet,
      currentSpriteSlice.x,
      currentSpriteSlice.y,
      currentSpriteSlice.w,
      currentSpriteSlice.h,
      this.state.facing * this.pos.x - offset,
      this.pos.y,
      AVATAR_CONSTANTS.AVATAR_DIMENSIONS.width + attackOffset,
      AVATAR_CONSTANTS.AVATAR_DIMENSIONS.height
    );
    this.ctx.restore();
  }

  checkBoundary() {
    let maxOffset = this.playerNum === 1 ? 0 : AVATAR_CONSTANTS.AVATAR_DIMENSIONS.width;
    let minOffset = this.playerNum === 2 ? 0 : AVATAR_CONSTANTS.AVATAR_DIMENSIONS.width;
    if (this.pos.x < 0) {
      this.pos.x = 0;
      this.vel.vx = 0;
    } else if (this.pos.x > this.dimensions.width - maxOffset - minOffset) {
      this.pos.x = this.dimensions.width - maxOffset - minOffset;
      this.vel.vx = 0;
    };
    if (this.pos.y > this.dimensions.height - 1 - AVATAR_CONSTANTS.AVATAR_DIMENSIONS.height) {
      this.pos.y = this.dimensions.height - 1 - AVATAR_CONSTANTS.AVATAR_DIMENSIONS.height;
      this.vel.vy = 0;
    } else if (this.pos.y < 0) {
      this.pos.y = 0;
    }
  }

  basicAttack() {
    if (!this.state.basicAttacking) {
      this.state.basicAttacking = true;
      window.setTimeout(() => {
        this.state.basicAttacking = false;
        this.state.damageDone = false;
      }, 250);
    }
  }
  
  drawBasicAttack() {
    if (this.state.basicAttacking) {
      this.state.movement = 'attack';
    };
  }

  handleAttack(e) {
    if (e.keyCode === this.state.basicAttackKeycode) {
      this.basicAttack();
    }
  }
}

/***/ }),

/***/ "./frontend/entry.js":
/*!***************************!*\
  !*** ./frontend/entry.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./frontend/game.js");


document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  new _game__WEBPACK_IMPORTED_MODULE_0__["default"](canvas);
});

/***/ }),

/***/ "./frontend/environment.js":
/*!*********************************!*\
  !*** ./frontend/environment.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Environment; });
const ENVIRONMENT_CONSTANTS = {
  GRAVITY: -0.7,
  ENVIRONMENT_DIMENSIONS: 94,
  SAKURA_SPRITES: 3,
  SNOWFLAKE_SPRITES: 9,
  ENVIRONMENT_RESIZE: 25
}

class Environment {
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

/***/ }),

/***/ "./frontend/game.js":
/*!**************************!*\
  !*** ./frontend/game.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Arena; });
/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ "./frontend/level.js");
/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avatar */ "./frontend/avatar.js");



const AVATAR_CONSTANTS = {
  AVATAR_DIMENSIONS: {
    width: 150,
    height: 300
  }
}

class Arena {
  constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.gameOver = true;
    this.paused = false;
    this.sound = false;
    this.helpModal = false;
    this.winner = null;

    this.documentOffsetX = (document.body.clientWidth - this.dimensions.width) / 2;
    this.documentOffsetY = (document.body.clientHeight - 80 - this.dimensions.height) / 2;

    this.playPos = {
      x: this.dimensions.width / 2 - 110,
      y: this.dimensions.height / 2 + 28
    };
    this.playDimensions = {
      dx: 220,
      dy: 56
    };

    this.pausePos = {
      x: this.dimensions.width - 60,
      y: 25
    };
    this.pauseDimensions = {
      dx: 30,
      dy: 40
    };

    this.soundPos = {
      x: this.dimensions.width - 130,
      y: 20
    };
    this.soundDimensions = {
      dx: 50,
      dy: 50
    };

    this.helpPos = {
      x: this.dimensions.width - 70,
      y: 20
    };
    this.helpDimensions = {
      dx: 50,
      dy: 50
    };

    this.soundObj = document.createElement("audio");
    this.soundObj.src = 'frontend/assets/audio/ui-ost.mp3';
    this.soundObj.setAttribute("preload", "auto");
    this.soundObj.setAttribute("controls", "none");
    this.soundObj.setAttribute("loop", "true");
    this.soundObj.style.display = "none";
    document.body.appendChild(this.soundObj);

    this.drawBackground = this.drawBackground.bind(this);
    this.drawHelp = this.drawHelp.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleMute = this.handleMute.bind(this);
    this.handleHelp = this.handleHelp.bind(this);
    this.handleAttack = this.handleAttack.bind(this);
    this.handleModal = this.handleModal.bind(this);

    this.play = this.play.bind(this);
    this.restart = this.restart.bind(this);

    this.restart();
  }

  restart() {
    this.level = new _level__WEBPACK_IMPORTED_MODULE_0__["default"](this.ctx, this.dimensions);
    this.player1 = new _avatar__WEBPACK_IMPORTED_MODULE_1__["default"](this.ctx, this.dimensions, 1);
    this.player2 = new _avatar__WEBPACK_IMPORTED_MODULE_1__["default"](this.ctx, this.dimensions, 2);
    this.paused = false;
    this.winner = null;
    this.play();
  }
  
  play() {
    this.ctx.canvas.removeEventListener('mousedown', this.handlePlay);
    this.animationFrame = requestAnimationFrame(this.animate.bind(this));
  }
  
  animate() {
    if (!this.gameOver) {
      this.ctx.canvas.removeEventListener('mousedown', this.handleMute);
      this.ctx.canvas.removeEventListener('mousedown', this.handleHelp);
      this.ctx.canvas.addEventListener('mousedown', this.handlePause);
      // document.addEventListener('keydown', this.handleAttack);
      // TODO: TEMPORARY
      if (this.paused) {
        cancelAnimationFrame(this.animationFrame);
        this.level.animate(this.player1.state.health, this.player2.state.health, true);
        this.player1.animate(true);
        this.player2.animate(true);
      } else {
        this.winner = this.level.animate(this.player1.state.health, this.player2.state.health);
        let p1AttackHitbox = this.player1.animate(false);
        let p2AttackHitbox = this.player2.animate(false);
        if (this.player1.state.basicAttacking && !this.player1.state.damageDone) {
          this.checkAttackCollision(p1AttackHitbox, this.player1, this.player2);
        }
        if (this.player2.state.basicAttacking && !this.player2.state.damageDone) {
          this.checkAttackCollision(p2AttackHitbox, this.player2, this.player1);
        }
        if (this.winner === 'timeUp') {
          this.gameOver = true;
        } else if (['player1', 'player2'].includes(this.winner)) {
          this.gameOver = true;
        }
        requestAnimationFrame(this.animate.bind(this));
      }
    } else {
      this.ctx.canvas.addEventListener('mousedown', this.handleMute);
      this.ctx.canvas.addEventListener('mousedown', this.handleHelp);
      this.ctx.canvas.removeEventListener('mousedown', this.handlePause);
      cancelAnimationFrame(this.animationFrame);
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Display start screen
      this.drawBackground();
    }
  }

  // ONLY FOR STARTING SCREEN
  drawBackground() {
    this.ctx.canvas.addEventListener('mousedown', this.handlePlay);

    let background = new Image();
    background.src = 'frontend/assets/images/start-background.jpg';
    background.onload = () => {
      this.ctx.drawImage(background, 0, 0, this.dimensions.width, this.dimensions.height);
      
      let help = new Image();
      help.src = 'frontend/assets/images/help.png';
      help.onload = () => {
        this.ctx.drawImage(help, this.dimensions.width - 70, 20, 50, 50);
      };
  
      let mute = new Image();
      this.sound ? 
      mute.src = 'frontend/assets/images/speaker.png':
      mute.src = 'frontend/assets/images/mute.png'
      mute.onload = () => {
        this.ctx.drawImage(mute, this.dimensions.width - 130, 20, 50, 50);
      };
  
      this.ctx.textAlign = 'center';
      this.ctx.fillStyle = 'WHITE';
  
      let header = new Image();
      header.src = 'frontend/assets/images/header-white.png';
      header.onload = () => {
        this.ctx.drawImage(
          header, 
          20, 
          this.dimensions.height / 2 - 100, 
          this.dimensions.width - 40, 
          56
        );
      }
  
      switch (this.winner) {
        case null:
          this.ctx.font = '56px Trebuchet MS';
          this.ctx.fillText(
            'Play now!',
            this.dimensions.width / 2,
            this.dimensions.height / 2 + 72
          );
          break;
        case 'timeUp':
          this.ctx.font = '36px Trebuchet MS';
          this.ctx.fillText(
            'Time ran out... have you tried attacking?',
            this.dimensions.width / 2,
            this.dimensions.height / 2 + 12
          );
          this.ctx.font = '56px Trebuchet MS';
          this.ctx.fillText(
            'Play again?',
            this.dimensions.width / 2,
            this.dimensions.height / 2 + 72
          );
          break;
        default:
          this.ctx.font = '36px Trebuchet MS';
          this.ctx.fillText(
            `Congratulations, ${this.winner} won!`,
            this.dimensions.width / 2,
            this.dimensions.height / 2 + 8
          );
          this.ctx.font = '56px Trebuchet MS';
          this.ctx.fillText(
            'Play again?',
            this.dimensions.width / 2,
            this.dimensions.height / 2 + 72
          );
          break;
      }
    };
    
  }

  drawHelp() {
    this.ctx.canvas.addEventListener('mousedown', this.handleModal);

    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    this.ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);

    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    this.ctx.fillRect(120, 60, this.dimensions.width - 240, this.dimensions.height - 120);

    this.ctx.textAlign = 'left';
    this.ctx.font = '56px Arial';
    this.ctx.fillStyle = 'black';
    this.ctx.fillText('How to play:', 210, 120);

    this.ctx.font = '24px Trebuchet MS';
    this.ctx.fillStyle = 'black';
    this.ctx.fillText('Player 1: W = Jump, A = Left, D = Right, J = Attack', 210, 150);
    this.ctx.fillText('Player 2: ^ = Jump, < = Left, > = Right, 1 (numpad) = Attack', 210, 180);
    this.ctx.fillText('You have until the time runs out to defeat the other player!', 210, 210);
    this.ctx.fillText('Move erratically and jump to avoid attacks and outsmart your opponent.', 210, 240);

    this.ctx.font = '56px Arial';
    this.ctx.fillStyle = 'black';
    this.ctx.fillText('Credits:', 210, 290);

    this.ctx.font = '18px Trebuchet MS';
    this.ctx.fillStyle = 'black';
    this.ctx.fillText('Starting screen: http://www.avoidingthepuddle.com/news/2015/12/21/...', 210, 320);
    this.ctx.fillText('complete-batch-of-tekken-7-fated-retribution-images-in-high.html', 210, 340);
    this.ctx.fillText('Sakura petals: https://www.123rf.com/photo_109774081_stock-vector-...', 210, 360);
    this.ctx.fillText('sakura-petals-falling-down-romantic-pink-silky-medium-flowers-sparse-...', 210, 380);
    this.ctx.fillText('flying-cherry-petals-top-gradie.html', 210, 400);
    this.ctx.fillText('Snowflakes: https://www.freepik.com/free-photos-vectors/christmas...', 210, 420);
    this.ctx.fillText('(Christmas vector created by freepik)', 210, 440);
    this.ctx.fillText('Arena background: https://wallpapercave.com/w/wp2603480', 210, 460);
    this.ctx.fillText('Ryu spritesheet: https://www.deviantart.com/sil3nt-j/art/...', 210, 480);
    this.ctx.fillText('Ryu-Street-Fighter-1-Sprite-Sheet-769011713 (by sil3nt-j)', 210, 500);
    this.ctx.fillText('Help and sound icons: https://www.flaticon.com (made by Freepik)', 210, 520);
    this.ctx.fillText('Music: Dragon Ball Super - Ultra instinct | Instrumental Epic Rock COVER', 210, 540);
    this.ctx.fillText('Friedrich Habetler Music', 210, 560);
  }

  handlePlay(e) {
    let clickPos = {
      x: e.pageX - this.documentOffsetX,
      y: e.pageY - this.documentOffsetY - 80
    }
    if (clickPos.x >= this.playPos.x && clickPos.x <= this.playPos.x + this.playDimensions.dx) {
      if (clickPos.y >= this.playPos.y && clickPos.y <= this.playPos.y + this.playDimensions.dy) {
        this.gameOver = false;
        this.restart();
      }
    }
  }

  handlePause(e) {
    let clickPos = {
      x: e.pageX - this.documentOffsetX,
      y: e.pageY - this.documentOffsetY - 80
    }
    if (clickPos.x >= this.pausePos.x && clickPos.x <= this.pausePos.x + this.pauseDimensions.dx) {
      if (clickPos.y >= this.pausePos.y && clickPos.y <= this.pausePos.y + this.pauseDimensions.dy) {
        this.paused = !this.paused;
        if (!this.paused) {
          this.play();
        }
      }
    }
  }

  handleMute(e) {
    let clickPos = {
      x: e.pageX - this.documentOffsetX,
      y: e.pageY - this.documentOffsetY - 80
    }
    if (clickPos.x >= this.soundPos.x && clickPos.x <= this.soundPos.x + this.soundDimensions.dx) {
      if (clickPos.y >= this.soundPos.y && clickPos.y <= this.soundPos.y + this.soundDimensions.dy) {
        this.sound = !this.sound;
        if (this.sound) {
          this.soundObj.play();
        } else {
          this.soundObj.pause();
        }
        this.drawBackground();
      }
    }
  }
  
  handleHelp(e) {
    let clickPos = {
      x: e.pageX - this.documentOffsetX,
      y: e.pageY - this.documentOffsetY - 80
    }
    if (clickPos.x >= this.helpPos.x && clickPos.x <= this.helpPos.x + this.helpDimensions.dx) {
      if (clickPos.y >= this.helpPos.y && clickPos.y <= this.helpPos.y + this.helpDimensions.dy) {
        this.helpModal = !this.helpModal;
        if (this.helpModal) {
          this.drawHelp();
        } else {
          this.drawBackground();
        }
      }
    }
  }

  handleAttack(e) {
    switch (e.keyCode) {
      case 74:
        this.player1.basicAttack();
        break;
      case 97:
        this.player2.basicAttack();
        break;
    }
  }

  handleModal(e) {
    let clickPos = {
      x: e.pageX - this.documentOffsetX,
      y: e.pageY - this.documentOffsetY - 80
    }
    if (clickPos.x < 120 || clickPos.x > this.dimensions.width - 120
      || clickPos.y < 60 || clickPos.y > this.dimensions.height - 60) {
      this.ctx.canvas.removeEventListener('mousedown', this.handleModal);
      this.helpModal = !this.helpModal;
      this.animate();
    }
  }

  checkAttackCollision(bound, attackingPlayer, otherPlayer) {
    let otherPlayerBound = {
      x1: otherPlayer.pos.x - AVATAR_CONSTANTS.AVATAR_DIMENSIONS.width / 2,
      y1: otherPlayer.pos.y,
      x2: otherPlayer.pos.x + AVATAR_CONSTANTS.AVATAR_DIMENSIONS.width / 2,
      y2: otherPlayer.pos.y + AVATAR_CONSTANTS.AVATAR_DIMENSIONS.height
    };
    if (bound.x >= otherPlayerBound.x1 && bound.x <= otherPlayerBound.x2) {
      if (bound.y >= otherPlayerBound.y1 && bound.y <= otherPlayerBound.y2) {
        attackingPlayer.state.damageDone = true;
        otherPlayer.state.health -= attackingPlayer.state.basicAttackDamage;
      }
    }
  };
}

/***/ }),

/***/ "./frontend/level.js":
/*!***************************!*\
  !*** ./frontend/level.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Level; });
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment */ "./frontend/environment.js");


const COLOR_PALETTE = {
  PRIMARY: '#00070A',
  SECONDARY: '#294552',
  TERTIARY: '#597884',
  QUATERNARY: '#9EB9B3',
  QUINTERNARY: '#ACC4CE'
};

const LEVEL_CONSTANTS = {
  MAX_TIME: 60 * 120,
  TIMER_TEXT_HEIGHT: 75,
  TIMER_RADIUS: 45,
  MAX_HEALTH: 200,
  HEALTH_BAR: {
    width: 400,
    height: 20
  },
  OFFSET: 20,
  ENVIRONMENT_PROBABILITY: 45,
  ENVIRONMENTS: ['sakura', 'snowflake']
};

class Level {
  constructor(ctx, dimensions) {
    this.dimensions = dimensions;
    this.time = LEVEL_CONSTANTS.MAX_TIME;
    this.ctx = ctx;

    this.playerHpPos = {
      x: this.dimensions.width / 2 - LEVEL_CONSTANTS.TIMER_RADIUS,
      y: LEVEL_CONSTANTS.TIMER_RADIUS - LEVEL_CONSTANTS.HEALTH_BAR.height + 5
    };

    this.botHpPos = {
      x: this.dimensions.width / 2 + LEVEL_CONSTANTS.TIMER_RADIUS,
      y: LEVEL_CONSTANTS.TIMER_RADIUS - LEVEL_CONSTANTS.HEALTH_BAR.height + 5
    };

    this.paused = false;

    this.environment = [];

    let environmentIndex = Math.round(Math.random() * (LEVEL_CONSTANTS.ENVIRONMENTS.length - 1));
    this.environmentType = LEVEL_CONSTANTS.ENVIRONMENTS[environmentIndex];

    this.drawTimerCircle = this.drawTimerCircle.bind(this);
    this.drawTimerDisplay = this.drawTimerDisplay.bind(this);
    this.drawTimerText = this.drawTimerText.bind(this);
    this.drawHealthBars = this.drawHealthBars.bind(this);
    this.drawNames = this.drawNames.bind(this);
    this.drawPause = this.drawPause.bind(this);
    this.drawBackground = this.drawBackground.bind(this);
    this.drawFloor = this.drawFloor.bind(this);
  }

  animate(playerHealth, botHealth, paused) {
    let time;
    let winner;

    this.drawBackground();

    let environmentGeneration = Math.round(Math.random() * LEVEL_CONSTANTS.ENVIRONMENT_PROBABILITY);

    if (environmentGeneration === 1) {
      let newEnvironment = new _environment__WEBPACK_IMPORTED_MODULE_0__["default"](this.ctx, this.dimensions, this.environmentType);
      this.environment.push(newEnvironment);
    }

    this.environment.forEach((environment, idx) => {
      environment.animate();
      if (environment.pos.y > this.dimensions.height + 94) {
        this.environment.shift();
      };
    });

    time = this.drawTimer();
    this.drawHealthBars();
    winner = this.drawCurrentHealthBars(playerHealth, botHealth);
    this.drawNames();
    // this.drawFloor();
    paused ? this.paused = true : this.paused = false;
    this.drawPause();
      
    if (time === 0) {
      this.environment = [];
      return 'timeUp';
    } else if (winner) {
      this.environment = [];
      return winner;
    } else if (this.paused) {
      return 'paused';
    }
  }

  drawTimer() {
    // TODO: Need better solution
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
    this.ctx.font = '48px Trebuchet MS';
    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = 'WHITE';
    this.ctx.strokeStyle = COLOR_PALETTE.PRIMARY;
    this.ctx.fillText(
      `${Math.round(this.time / 60)}`,
      this.dimensions.width / 2,
      LEVEL_CONSTANTS.TIMER_TEXT_HEIGHT + 10
    );
    this.ctx.strokeText(
      `${Math.round(this.time / 60)}`,
      this.dimensions.width / 2,
      LEVEL_CONSTANTS.TIMER_TEXT_HEIGHT + 10
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

  drawHealthBars() {
    // Player health container
    this.ctx.beginPath();
    this.ctx.strokeStyle = 'BLACK';
    this.ctx.moveTo(
      this.playerHpPos.x,
      this.playerHpPos.y
    );
    this.ctx.lineTo(
      this.playerHpPos.x - LEVEL_CONSTANTS.HEALTH_BAR.width,
      this.playerHpPos.y
    );
    this.ctx.lineTo(
      this.playerHpPos.x - LEVEL_CONSTANTS.HEALTH_BAR.width,
      this.playerHpPos.y + LEVEL_CONSTANTS.HEALTH_BAR.height
    );
    this.ctx.lineTo(
      this.playerHpPos.x - LEVEL_CONSTANTS.OFFSET,
      this.playerHpPos.y + LEVEL_CONSTANTS.HEALTH_BAR.height
    );
    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.stroke();

    //bot health container
    this.ctx.beginPath();
    this.ctx.strokeStyle = 'BLACK';
    this.ctx.moveTo(
      this.botHpPos.x,
      this.botHpPos.y
    );
    this.ctx.lineTo(
      this.botHpPos.x + LEVEL_CONSTANTS.HEALTH_BAR.width,
      this.botHpPos.y
    );
    this.ctx.lineTo(
      this.botHpPos.x + LEVEL_CONSTANTS.HEALTH_BAR.width,
      this.botHpPos.y + LEVEL_CONSTANTS.HEALTH_BAR.height
    );
    this.ctx.lineTo(
      this.botHpPos.x + LEVEL_CONSTANTS.OFFSET,
      this.botHpPos.y + LEVEL_CONSTANTS.HEALTH_BAR.height
    );
    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.stroke();
  }

  drawCurrentHealthBars(playerHealth, botHealth) {

    if (playerHealth <= 0) {
      return 'player2';
    } else if (botHealth <= 0) {
      return 'player1';
    };

    let currentHealth = LEVEL_CONSTANTS.HEALTH_BAR.width * playerHealth / LEVEL_CONSTANTS.MAX_HEALTH;

    // Player current health
    this.ctx.beginPath();
    this.ctx.fillStyle = 'RED';
    this.ctx.moveTo(
      this.playerHpPos.x,
      this.playerHpPos.y
    );
    this.ctx.lineTo(
      this.playerHpPos.x - currentHealth,
      this.playerHpPos.y
    );
    if (currentHealth < LEVEL_CONSTANTS.OFFSET) {
      this.ctx.lineTo(
        this.playerHpPos.x - currentHealth,
        // currentHealth = currentHealth * tan(pi/4)
        // since offset = height
        this.playerHpPos.y + currentHealth
      );
    } else {
      this.ctx.lineTo(
        this.playerHpPos.x - currentHealth,
        this.playerHpPos.y + LEVEL_CONSTANTS.HEALTH_BAR.height
      );
      this.ctx.lineTo(
        this.playerHpPos.x - LEVEL_CONSTANTS.OFFSET,
        this.playerHpPos.y + LEVEL_CONSTANTS.HEALTH_BAR.height
      );
    };
    this.ctx.closePath();
    this.ctx.fill();

    let currentBotHealth = LEVEL_CONSTANTS.HEALTH_BAR.width * botHealth / LEVEL_CONSTANTS.MAX_HEALTH;

    // Bot current health
    this.ctx.beginPath();
    this.ctx.fillStyle = 'RED';
    this.ctx.moveTo(
      this.botHpPos.x,
      this.botHpPos.y
    );
    this.ctx.lineTo(
      this.botHpPos.x + currentBotHealth,
      this.botHpPos.y
    );
    if (currentBotHealth < LEVEL_CONSTANTS.OFFSET) {
      this.ctx.lineTo(
        this.botHpPos.x + currentBotHealth,
        // currentBotHealth = currentBotHealth * tan(pi/4)
        // since offset = height
        this.botHpPos.y + currentBotHealth
      );
    } else {
      this.ctx.lineTo(
        this.botHpPos.x + currentBotHealth,
        this.botHpPos.y + LEVEL_CONSTANTS.HEALTH_BAR.height
      );
      this.ctx.lineTo(
        this.botHpPos.x + LEVEL_CONSTANTS.OFFSET,
        this.botHpPos.y + LEVEL_CONSTANTS.HEALTH_BAR.height
      );
    };
    this.ctx.closePath();
    this.ctx.fill();
  }

  drawNames() {
    let playerName = 'Player 1';
    let botName = 'Player 2';
    let playerNamePos = {
      x: this.playerHpPos.x - LEVEL_CONSTANTS.OFFSET,
      y: this.playerHpPos.y + LEVEL_CONSTANTS.TIMER_RADIUS + 4
    };
    let botNamePos = {
      x: this.botHpPos.x + LEVEL_CONSTANTS.OFFSET,
      y: this.botHpPos.y + LEVEL_CONSTANTS.TIMER_RADIUS + 4
    };

    this.ctx.font = '32px Trebuchet MS';
    this.ctx.fillStyle = 'white';
    this.ctx.lineWidth = 0.5;
    this.ctx.strokeStyle = COLOR_PALETTE.SECONDARY;
    this.ctx.textAlign = 'right';
    this.ctx.fillText(playerName, playerNamePos.x, playerNamePos.y);
    this.ctx.strokeText(playerName, playerNamePos.x, playerNamePos.y);

    this.ctx.textAlign = 'left';
    this.ctx.fillText(botName, botNamePos.x, botNamePos.y);
    this.ctx.strokeText(botName, botNamePos.x, botNamePos.y);
  }

  drawPause() {
    // this.ctx.beginPath();
    // // this.ctx.rect(this.dimensions.width - 50 - 20, 20, 50, 50);
    // this.ctx.rect(this.dimensions.width - 50 - 10, 25, 30, 40);
    // this.ctx.stroke();

    if (!this.paused) {
      this.ctx.beginPath();
      this.ctx.fillStyle = COLOR_PALETTE.QUINTERNARY;
      this.ctx.strokeStyle = COLOR_PALETTE.PRIMARY;
      
      this.ctx.rect(this.dimensions.width - 50 - 10, 25, 10, 40);
      this.ctx.fill();
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.rect(this.dimensions.width - 50 + 10, 25, 10, 40);
      this.ctx.fill();
      this.ctx.stroke();

    } else {
      this.ctx.beginPath();
      this.ctx.fillStyle = COLOR_PALETTE.QUINTERNARY;
      this.ctx.strokeStyle = COLOR_PALETTE.PRIMARY;
      this.ctx.moveTo(this.dimensions.width - 50 - 10, 25);
      this.ctx.lineTo(this.dimensions.width - 50 - 10, 65);
      this.ctx.lineTo(this.dimensions.width - 50 + 20, 45);
      this.ctx.closePath();
      this.ctx.fill();
      this.ctx.stroke();

      this.ctx.fillStyle = 'white';
      this.ctx.lineWidth = 1.5;

      this.ctx.textAlign = 'center';
      this.ctx.font = '56px Trebuchet MS';
      this.ctx.fillText(
        'Game paused',
        this.dimensions.width / 2,
        this.dimensions.height / 2 - 36
      );
      this.ctx.strokeText(
        'Game paused',
        this.dimensions.width / 2,
        this.dimensions.height / 2 - 36
      );

      this.ctx.textAlign = 'center';
      this.ctx.font = '36px Trebuchet MS';
      this.ctx.fillText(
        'Press play to continue',
        this.dimensions.width / 2,
        this.dimensions.height / 2 + 36
      );
      this.ctx.strokeText(
        'Press play to continue',
        this.dimensions.width / 2,
        this.dimensions.height / 2 + 36
      )
    };
  }

  drawBackground() {
    let background = new Image();
    background.src = 'frontend/assets/images/game-background.jpg';
    // background.onload = () => {
      this.ctx.drawImage(background, 0, 0, this.dimensions.width, this.dimensions.height);
    // }
  }

  // TODO: Probably temporary
  drawFloor() {
    this.ctx.fillStyle = 'BROWN';
    this.ctx.fillRect(
      0, 
      this.dimensions.height - 1, 
      this.dimensions.width, 
      155
    );
  }
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvYXZhdGFyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2VudHJ5LmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvbGV2ZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLFNBQVMsY0FBYztBQUN2QixTQUFTLGNBQWM7QUFDdkIsWUFBWSxhQUFhO0FBQ3pCLFNBQVMsYUFBYTtBQUN0QixHQUFHO0FBQ0g7QUFDQSxTQUFTLGNBQWM7QUFDdkIsU0FBUyxjQUFjO0FBQ3ZCLFlBQVksYUFBYTtBQUN6QixTQUFTLGFBQWE7QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN6V0E7QUFBQTtBQUEyQjs7QUFFM0I7QUFDQTtBQUNBLE1BQU0sNkNBQUs7QUFDWCxDQUFDLEU7Ozs7Ozs7Ozs7OztBQ0xEO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2xFQTtBQUFBO0FBQUE7QUFBQTtBQUE0QjtBQUNFOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLDhDQUFLO0FBQzFCLHVCQUF1QiwrQ0FBTTtBQUM3Qix1QkFBdUIsK0NBQU07QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFlBQVk7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN2V0E7QUFBQTtBQUFBO0FBQXdDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsK0JBQStCLG9EQUFXO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUywyQkFBMkI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDJCQUEyQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoiLi9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Zyb250ZW5kL2VudHJ5LmpzXCIpO1xuIiwiY29uc3QgQVZBVEFSX0NPTlNUQU5UUyA9IHtcbiAgQVZBVEFSX0RJTUVOU0lPTlM6IHtcbiAgICB3aWR0aDogMTUwLFxuICAgIGhlaWdodDogMzAwXG4gIH0sXG4gIEdSQVZJVFk6IC0xLjgsXG4gIFAxX01PVkVNRU5UOiB7XG4gICAgODc6IHsgeDogMCwgeTogLTEgfSxcbiAgICA2NTogeyB4OiAtMSwgeTogMCB9LFxuICAgIC8vIDgzOiB7IHg6IDAsIHk6IDEgfSxcbiAgICA2ODogeyB4OiAxLCB5OiAwIH0sXG4gIH0sXG4gIFAyX01PVkVNRU5UOiB7XG4gICAgMzg6IHsgeDogMCwgeTogLTEgfSxcbiAgICAzNzogeyB4OiAtMSwgeTogMCB9LFxuICAgIC8vIDQwOiB7IHg6IDAsIHk6IDEgfSxcbiAgICAzOTogeyB4OiAxLCB5OiAwIH0sXG4gIH0sXG4gIE1PVkVNRU5UX1NQRUVEOiB7XG4gICAgeDogMTAsXG4gICAgeTogMzBcbiAgfSxcbiAgTUFYX0hFQUxUSDogMjAwLFxuICBTUklURVNIRUVUOiB7XG4gICAgV0FMS0lORzoge1xuICAgICAgMToge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAyMDIsXG4gICAgICAgIHc6IDUwLFxuICAgICAgICBoOiA5OFxuICAgICAgfSxcbiAgICAgIDI6IHtcbiAgICAgICAgeDogNTAsXG4gICAgICAgIHk6IDIwMixcbiAgICAgICAgdzogNTAsXG4gICAgICAgIGg6IDk4XG4gICAgICB9LFxuICAgICAgMzoge1xuICAgICAgICB4OiAxMDAsXG4gICAgICAgIHk6IDIwMixcbiAgICAgICAgdzogNjUsXG4gICAgICAgIGg6IDk4XG4gICAgICB9LFxuICAgICAgNDoge1xuICAgICAgICB4OiAxNjUsXG4gICAgICAgIHk6IDIwMixcbiAgICAgICAgdzogNzUsXG4gICAgICAgIGg6IDk4XG4gICAgICB9LFxuICAgICAgNToge1xuICAgICAgICB4OiAyNDAsXG4gICAgICAgIHk6IDIwMixcbiAgICAgICAgdzogNjAsXG4gICAgICAgIGg6IDk4XG4gICAgICB9LFxuICAgICAgNjoge1xuICAgICAgICB4OiAzMDAsXG4gICAgICAgIHk6IDIwMyxcbiAgICAgICAgdzogNzAsXG4gICAgICAgIGg6IDk3XG4gICAgICB9LFxuICAgICAgNzoge1xuICAgICAgICB4OiAzNzAsXG4gICAgICAgIHk6IDIwMixcbiAgICAgICAgdzogODAsXG4gICAgICAgIGg6IDk4XG4gICAgICB9XG4gICAgfSxcbiAgICBJRExFOiB7XG4gICAgICAxOiB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDMwMSxcbiAgICAgICAgdzogNzUsXG4gICAgICAgIGg6IDk2XG4gICAgICB9LFxuICAgICAgMjoge1xuICAgICAgICB4OiA3NSxcbiAgICAgICAgeTogMzAxLFxuICAgICAgICB3OiA3NSxcbiAgICAgICAgaDogOTZcbiAgICAgIH0sXG4gICAgICAzOiB7XG4gICAgICAgIHg6IDE1MCxcbiAgICAgICAgeTogMzAxLFxuICAgICAgICB3OiA3NSxcbiAgICAgICAgaDogOTZcbiAgICAgIH0sXG4gICAgICA0OiB7XG4gICAgICAgIHg6IDIyNSxcbiAgICAgICAgeTogMzAxLFxuICAgICAgICB3OiA3NSxcbiAgICAgICAgaDogOTZcbiAgICAgIH0sXG4gICAgICA1OiB7XG4gICAgICAgIHg6IDMwMCxcbiAgICAgICAgeTogMzAxLFxuICAgICAgICB3OiA3NSxcbiAgICAgICAgaDogOTZcbiAgICAgIH0sXG4gICAgICA2OiB7XG4gICAgICAgIHg6IDM3NSxcbiAgICAgICAgeTogMzAxLFxuICAgICAgICB3OiA3NSxcbiAgICAgICAgaDogOTZcbiAgICAgIH1cbiAgICB9LFxuICAgIEpVTVA6IHtcbiAgICAgIDE6IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogOTUsXG4gICAgICAgIHc6IDc0LFxuICAgICAgICBoOiAxMDdcbiAgICAgIH0sXG4gICAgICAyOiB7XG4gICAgICAgIHg6IDc0LFxuICAgICAgICB5OiA5NSxcbiAgICAgICAgdzogNzQsXG4gICAgICAgIGg6IDEwN1xuICAgICAgfSxcbiAgICAgIDM6IHtcbiAgICAgICAgeDogMTQ4LFxuICAgICAgICB5OiA5NSxcbiAgICAgICAgdzogNzQsXG4gICAgICAgIGg6IDEwN1xuICAgICAgfSxcbiAgICAgIDQ6IHtcbiAgICAgICAgeDogMjIyLFxuICAgICAgICB5OiA5NSxcbiAgICAgICAgdzogNzQsXG4gICAgICAgIGg6IDEwN1xuICAgICAgfSxcbiAgICAgIDU6IHtcbiAgICAgICAgeDogMjk2LFxuICAgICAgICB5OiA5NSxcbiAgICAgICAgdzogNzQsXG4gICAgICAgIGg6IDEwN1xuICAgICAgfVxuICAgIH0sXG4gICAgQVRUQUNLOiB7XG4gICAgICAxOiB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHc6IDEwNCxcbiAgICAgICAgaDogOTVcbiAgICAgIH0sXG4gICAgICAyOiB7XG4gICAgICAgIHg6IDEwNCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgdzogMTA0LFxuICAgICAgICBoOiA5NVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdmF0YXIge1xuICBjb25zdHJ1Y3RvcihjdHgsIGRpbWVuc2lvbnMsIHBsYXllck51bSkge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnM7XG4gICAgdGhpcy5wbGF5ZXJOdW0gPSBwbGF5ZXJOdW07XG5cbiAgICBsZXQgc3RhcnRpbmdYID0gcGxheWVyTnVtID09PSAxID8gNTAgOiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLSA1MDtcbiAgICB0aGlzLnBvcyA9IHtcbiAgICAgIHg6IHN0YXJ0aW5nWCAtIEFWQVRBUl9DT05TVEFOVFMuQVZBVEFSX0RJTUVOU0lPTlMud2lkdGggLyAyLFxuICAgICAgeTogdGhpcy5kaW1lbnNpb25zLmhlaWdodCAtIEFWQVRBUl9DT05TVEFOVFMuQVZBVEFSX0RJTUVOU0lPTlMuaGVpZ2h0IC0gMVxuICAgIH07XG5cbiAgICB0aGlzLnZlbCA9IHtcbiAgICAgIHZ4OiAwLFxuICAgICAgdnk6IDBcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaGVhbHRoOiBBVkFUQVJfQ09OU1RBTlRTLk1BWF9IRUFMVEgsXG4gICAgICBiYXNpY0F0dGFja2luZzogZmFsc2UsXG4gICAgICBkYW1hZ2VEb25lOiBmYWxzZSxcbiAgICAgIGJhc2ljQXR0YWNrSGl0Ym94OiB7XG4gICAgICAgIHc6IEFWQVRBUl9DT05TVEFOVFMuQVZBVEFSX0RJTUVOU0lPTlMud2lkdGggLyAyICsgNDAsXG4gICAgICAgIGg6IDEwXG4gICAgICB9LFxuICAgICAgYmFzaWNBdHRhY2tEYW1hZ2U6IDEwLFxuICAgICAgZmFjaW5nOiBwbGF5ZXJOdW0gPT09IDEgPyAxIDogLTEsXG4gICAgICBiYXNpY0F0dGFja0tleWNvZGU6IHBsYXllck51bSA9PT0gMSA/IDc0IDogOTcsXG4gICAgICBtb3ZlbWVudDogJ2lkbGUnXG4gICAgfVxuXG4gICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmtleUNvZGVNb3ZlbWVudCA9IHRoaXMucGxheWVyTnVtID09PSAxID8gXG4gICAgICBBVkFUQVJfQ09OU1RBTlRTLlAxX01PVkVNRU5UIDogQVZBVEFSX0NPTlNUQU5UUy5QMl9NT1ZFTUVOVDtcbiAgICB0aGlzLmtleXByZXNzUE9KTyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHRoaXMua2V5Q29kZU1vdmVtZW50KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIHRoaXMua2V5cHJlc3NQT0pPW2tleV0gPSBmYWxzZTtcbiAgICB9KTtcbiAgICB0aGlzLnNwcml0ZVNoZWV0ID0gbmV3IEltYWdlKCk7XG4gICAgdGhpcy5zcHJpdGVTaGVldC5zcmMgPSAnZnJvbnRlbmQvYXNzZXRzL2ltYWdlcy9yeXUtc3ByaXRlLXNoZWV0LnBuZyc7XG5cbiAgICB0aGlzLmFuaW1hdGlvblRpbWVyID0gMDtcblxuICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJhd0F2YXRhciA9IHRoaXMuZHJhd0F2YXRhci5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW92ZUF2YXRhciA9IHRoaXMubW92ZUF2YXRhci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RvcEF2YXRhciA9IHRoaXMuc3RvcEF2YXRhci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hlY2tCb3VuZGFyeSA9IHRoaXMuY2hlY2tCb3VuZGFyeS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlUG9zaXRpb24gPSB0aGlzLnVwZGF0ZVBvc2l0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5iYXNpY0F0dGFjayA9IHRoaXMuYmFzaWNBdHRhY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmRyYXdCYXNpY0F0dGFjayA9IHRoaXMuZHJhd0Jhc2ljQXR0YWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVBdHRhY2sgPSB0aGlzLmhhbmRsZUF0dGFjay5iaW5kKHRoaXMpO1xuXG4gICAgLy9UT0RPOiBJUyBUSEVSRSBBIEJFVFRFUiBTT0xVVElPTj9cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVBdHRhY2spO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm1vdmVBdmF0YXIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5zdG9wQXZhdGFyKTtcbiAgfVxuXG4gIGFuaW1hdGUocGF1c2VkKSB7XG4gICAgdGhpcy5wYXVzZWQgPSAhIXBhdXNlZDtcbiAgICB0aGlzLmFuaW1hdGlvblRpbWVyICs9IDAuMDU7XG4gICAgaWYgKCF0aGlzLnBhdXNlZCkge1xuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICAgIH1cbiAgICBpZiAodGhpcy52ZWwudnggPT09IDAgJiYgdGhpcy52ZWwudnkgPT09IDApIHtcbiAgICAgIHRoaXMuc3RhdGUubW92ZW1lbnQgPSAnaWRsZSc7XG4gICAgfVxuICAgIGxldCBib3VuZHM7XG4gICAgaWYgKCF0aGlzLnBhdXNlZCkge1xuICAgICAgdGhpcy5kcmF3QmFzaWNBdHRhY2soKTtcbiAgICAgIGJvdW5kcyA9IHtcbiAgICAgICAgeDogdGhpcy5wb3MueCArIHRoaXMuc3RhdGUuZmFjaW5nICogdGhpcy5zdGF0ZS5iYXNpY0F0dGFja0hpdGJveC53LFxuICAgICAgICB5OiB0aGlzLnBvcy55ICsgdGhpcy5zdGF0ZS5iYXNpY0F0dGFja0hpdGJveC5oXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZHJhd0F2YXRhcigpO1xuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICB1cGRhdGVQb3NpdGlvbigpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmtleXByZXNzUE9KTykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAodGhpcy5rZXlwcmVzc1BPSk9ba2V5XSkge1xuICAgICAgICAvLyBLZXlwcmVzcyBtb3ZlbWVudFxuICAgICAgICBpZiAodGhpcy5rZXlDb2RlTW92ZW1lbnRba2V5XS54ICE9PSAwKSB7XG4gICAgICAgICAgdGhpcy52ZWwudnggPSB0aGlzLmtleUNvZGVNb3ZlbWVudFtrZXldLnhcbiAgICAgICAgICAgICogQVZBVEFSX0NPTlNUQU5UUy5NT1ZFTUVOVF9TUEVFRC54O1xuICAgICAgICAgIHRoaXMuc3RhdGUuZmFjaW5nID0gdGhpcy5rZXlDb2RlTW92ZW1lbnRba2V5XS54O1xuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLm1vdmVtZW50ICE9PSAnanVtcCcpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUubW92ZW1lbnQgPSAnbW92ZVgnO1xuICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIC8vIFByZXZlbnQgaW5maW5pdGUganVtcFxuICAgICAgICBpZiAodGhpcy5wb3MueSA9PT0gdGhpcy5kaW1lbnNpb25zLmhlaWdodCAtIDEgLSBBVkFUQVJfQ09OU1RBTlRTLkFWQVRBUl9ESU1FTlNJT05TLmhlaWdodCkge1xuICAgICAgICAgIGlmICh0aGlzLmtleUNvZGVNb3ZlbWVudFtrZXldLnkgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMudmVsLnZ5ID0gdGhpcy5rZXlDb2RlTW92ZW1lbnRba2V5XS55XG4gICAgICAgICAgICAgICogQVZBVEFSX0NPTlNUQU5UUy5NT1ZFTUVOVF9TUEVFRC55O1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5tb3ZlbWVudCA9ICdqdW1wJztcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMudmVsLnZ5IC09IEFWQVRBUl9DT05TVEFOVFMuR1JBVklUWTtcbiAgICB0aGlzLnBvcy55ICs9IHRoaXMudmVsLnZ5O1xuICAgIHRoaXMucG9zLnggKz0gdGhpcy52ZWwudng7XG4gICAgdGhpcy5jaGVja0JvdW5kYXJ5KCk7XG4gIH1cblxuICBtb3ZlQXZhdGFyKGUpIHtcbiAgICBpZiAoIXRoaXMucGF1c2VkICYmICFlLnJlcGVhdCkge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMua2V5Q29kZU1vdmVtZW50KS5pbmNsdWRlcyhlLmtleUNvZGUudG9TdHJpbmcoKSkpIHtcbiAgICAgICAgdGhpcy5rZXlwcmVzc1BPSk9bZS5rZXlDb2RlLnRvU3RyaW5nKCldID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0b3BBdmF0YXIoZSkge1xuICAgIHRoaXMudmVsLnZ4ID0gMDtcbiAgICB0aGlzLmtleXByZXNzUE9KT1tlLmtleUNvZGUudG9TdHJpbmcoKV0gPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gIH1cbiAgXG4gIGRyYXdBdmF0YXIoKSB7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5wbGF5ZXJOdW0gPT09IDEgPyAnQmx1ZScgOiAnUmVkJztcbiAgICBsZXQgY3VycmVudFNwcml0ZVNsaWNlSWR4O1xuICAgIGxldCBjdXJyZW50U3ByaXRlU2xpY2U7XG4gICAgbGV0IGF0dGFja09mZnNldCA9IDA7XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlLm1vdmVtZW50KSB7XG4gICAgICBjYXNlICdpZGxlJzpcbiAgICAgICAgY3VycmVudFNwcml0ZVNsaWNlSWR4ID0gMSArIE1hdGgucm91bmQodGhpcy5hbmltYXRpb25UaW1lciAlIChPYmplY3Qua2V5cyhBVkFUQVJfQ09OU1RBTlRTLlNSSVRFU0hFRVQuSURMRSkubGVuZ3RoIC0gMSkpO1xuICAgICAgICBjdXJyZW50U3ByaXRlU2xpY2UgPSBBVkFUQVJfQ09OU1RBTlRTLlNSSVRFU0hFRVQuSURMRVtjdXJyZW50U3ByaXRlU2xpY2VJZHhdO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21vdmVYJzpcbiAgICAgICAgY3VycmVudFNwcml0ZVNsaWNlSWR4ID0gMSArIE1hdGgucm91bmQoMiAqIHRoaXMuYW5pbWF0aW9uVGltZXIgJSAoT2JqZWN0LmtleXMoQVZBVEFSX0NPTlNUQU5UUy5TUklURVNIRUVULldBTEtJTkcpLmxlbmd0aCAtIDEpKTtcbiAgICAgICAgY3VycmVudFNwcml0ZVNsaWNlID0gQVZBVEFSX0NPTlNUQU5UUy5TUklURVNIRUVULldBTEtJTkdbY3VycmVudFNwcml0ZVNsaWNlSWR4XTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdqdW1wJzpcbiAgICAgICAgY3VycmVudFNwcml0ZVNsaWNlSWR4ID0gMSArIE1hdGgucm91bmQoMiAqIHRoaXMuYW5pbWF0aW9uVGltZXIgJSAoT2JqZWN0LmtleXMoQVZBVEFSX0NPTlNUQU5UUy5TUklURVNIRUVULkpVTVApLmxlbmd0aCAtIDEpKTtcbiAgICAgICAgY3VycmVudFNwcml0ZVNsaWNlID0gQVZBVEFSX0NPTlNUQU5UUy5TUklURVNIRUVULkpVTVBbY3VycmVudFNwcml0ZVNsaWNlSWR4XTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhdHRhY2snOlxuICAgICAgICBjdXJyZW50U3ByaXRlU2xpY2VJZHggPSAxICsgTWF0aC5yb3VuZCh0aGlzLmFuaW1hdGlvblRpbWVyICUgKE9iamVjdC5rZXlzKEFWQVRBUl9DT05TVEFOVFMuU1JJVEVTSEVFVC5BVFRBQ0spLmxlbmd0aCAtIDEpKTtcbiAgICAgICAgY3VycmVudFNwcml0ZVNsaWNlID0gQVZBVEFSX0NPTlNUQU5UUy5TUklURVNIRUVULkFUVEFDS1tjdXJyZW50U3ByaXRlU2xpY2VJZHhdO1xuICAgICAgICBhdHRhY2tPZmZzZXQgPSA1MDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICB0aGlzLmN0eC5zY2FsZSh0aGlzLnN0YXRlLmZhY2luZywgMSk7XG4gICAgbGV0IG9mZnNldCA9IDA7XG4gICAgaWYgKHRoaXMuc3RhdGUuZmFjaW5nID09PSAtMSkge1xuICAgICAgb2Zmc2V0ID0gQVZBVEFSX0NPTlNUQU5UUy5BVkFUQVJfRElNRU5TSU9OUy53aWR0aDtcbiAgICB9XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5zcHJpdGVTaGVldCxcbiAgICAgIGN1cnJlbnRTcHJpdGVTbGljZS54LFxuICAgICAgY3VycmVudFNwcml0ZVNsaWNlLnksXG4gICAgICBjdXJyZW50U3ByaXRlU2xpY2UudyxcbiAgICAgIGN1cnJlbnRTcHJpdGVTbGljZS5oLFxuICAgICAgdGhpcy5zdGF0ZS5mYWNpbmcgKiB0aGlzLnBvcy54IC0gb2Zmc2V0LFxuICAgICAgdGhpcy5wb3MueSxcbiAgICAgIEFWQVRBUl9DT05TVEFOVFMuQVZBVEFSX0RJTUVOU0lPTlMud2lkdGggKyBhdHRhY2tPZmZzZXQsXG4gICAgICBBVkFUQVJfQ09OU1RBTlRTLkFWQVRBUl9ESU1FTlNJT05TLmhlaWdodFxuICAgICk7XG4gICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgY2hlY2tCb3VuZGFyeSgpIHtcbiAgICBsZXQgbWF4T2Zmc2V0ID0gdGhpcy5wbGF5ZXJOdW0gPT09IDEgPyAwIDogQVZBVEFSX0NPTlNUQU5UUy5BVkFUQVJfRElNRU5TSU9OUy53aWR0aDtcbiAgICBsZXQgbWluT2Zmc2V0ID0gdGhpcy5wbGF5ZXJOdW0gPT09IDIgPyAwIDogQVZBVEFSX0NPTlNUQU5UUy5BVkFUQVJfRElNRU5TSU9OUy53aWR0aDtcbiAgICBpZiAodGhpcy5wb3MueCA8IDApIHtcbiAgICAgIHRoaXMucG9zLnggPSAwO1xuICAgICAgdGhpcy52ZWwudnggPSAwO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wb3MueCA+IHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIG1heE9mZnNldCAtIG1pbk9mZnNldCkge1xuICAgICAgdGhpcy5wb3MueCA9IHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIG1heE9mZnNldCAtIG1pbk9mZnNldDtcbiAgICAgIHRoaXMudmVsLnZ4ID0gMDtcbiAgICB9O1xuICAgIGlmICh0aGlzLnBvcy55ID4gdGhpcy5kaW1lbnNpb25zLmhlaWdodCAtIDEgLSBBVkFUQVJfQ09OU1RBTlRTLkFWQVRBUl9ESU1FTlNJT05TLmhlaWdodCkge1xuICAgICAgdGhpcy5wb3MueSA9IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLSAxIC0gQVZBVEFSX0NPTlNUQU5UUy5BVkFUQVJfRElNRU5TSU9OUy5oZWlnaHQ7XG4gICAgICB0aGlzLnZlbC52eSA9IDA7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBvcy55IDwgMCkge1xuICAgICAgdGhpcy5wb3MueSA9IDA7XG4gICAgfVxuICB9XG5cbiAgYmFzaWNBdHRhY2soKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmJhc2ljQXR0YWNraW5nKSB7XG4gICAgICB0aGlzLnN0YXRlLmJhc2ljQXR0YWNraW5nID0gdHJ1ZTtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zdGF0ZS5iYXNpY0F0dGFja2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0YXRlLmRhbWFnZURvbmUgPSBmYWxzZTtcbiAgICAgIH0sIDI1MCk7XG4gICAgfVxuICB9XG4gIFxuICBkcmF3QmFzaWNBdHRhY2soKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuYmFzaWNBdHRhY2tpbmcpIHtcbiAgICAgIHRoaXMuc3RhdGUubW92ZW1lbnQgPSAnYXR0YWNrJztcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlQXR0YWNrKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSB0aGlzLnN0YXRlLmJhc2ljQXR0YWNrS2V5Y29kZSkge1xuICAgICAgdGhpcy5iYXNpY0F0dGFjaygpO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCBBcmVuYSBmcm9tIFwiLi9nYW1lXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgbmV3IEFyZW5hKGNhbnZhcyk7XG59KTsiLCJjb25zdCBFTlZJUk9OTUVOVF9DT05TVEFOVFMgPSB7XG4gIEdSQVZJVFk6IC0wLjcsXG4gIEVOVklST05NRU5UX0RJTUVOU0lPTlM6IDk0LFxuICBTQUtVUkFfU1BSSVRFUzogMyxcbiAgU05PV0ZMQUtFX1NQUklURVM6IDksXG4gIEVOVklST05NRU5UX1JFU0laRTogMjVcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW52aXJvbm1lbnQge1xuICBjb25zdHJ1Y3RvcihjdHgsIGRpbWVuc2lvbnMsIHR5cGUpIHtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zO1xuICAgIHRoaXMucG9zID0ge1xuICAgICAgeDogTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogdGhpcy5kaW1lbnNpb25zLndpZHRoKSxcbiAgICAgIHk6IC05NFxuICAgIH1cblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdzYWt1cmEnOlxuICAgICAgICB0aGlzLnJhbmRTcHJpdGUgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoRU5WSVJPTk1FTlRfQ09OU1RBTlRTLlNBS1VSQV9TUFJJVEVTIC0gMSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Nub3dmbGFrZSc6XG4gICAgICAgIHRoaXMucmFuZFNwcml0ZSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChFTlZJUk9OTUVOVF9DT05TVEFOVFMuU05PV0ZMQUtFX1NQUklURVMgLSAxKSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMuZGVsdGF4ID0gTWF0aC5yYW5kb20oKSAqIDAuNSAtIDAuMjU7XG4gICAgdGhpcy5tb3ZlID0gdGhpcy5tb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmF3RW52aXJvbm1lbnQgPSB0aGlzLmRyYXdFbnZpcm9ubWVudC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYW5pbWF0ZSgpIHtcbiAgICB0aGlzLm1vdmUoKTtcbiAgICB0aGlzLmRyYXdFbnZpcm9ubWVudCgpO1xuICB9XG5cbiAgbW92ZSgpIHtcbiAgICB0aGlzLnBvcy55IC09IEVOVklST05NRU5UX0NPTlNUQU5UUy5HUkFWSVRZO1xuICAgIHRoaXMucG9zLnggKz0gdGhpcy5kZWx0YXg7XG4gIH1cblxuICBkcmF3RW52aXJvbm1lbnQoKSB7XG4gICAgbGV0IGVudmlyb25tZW50ID0gbmV3IEltYWdlKCk7XG4gICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3Nha3VyYSc6XG4gICAgICAgIGVudmlyb25tZW50LnNyYyA9ICdmcm9udGVuZC9hc3NldHMvaW1hZ2VzL3Nha3VyYS5wbmcnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Nub3dmbGFrZSc6XG4gICAgICAgIGVudmlyb25tZW50LnNyYyA9ICdmcm9udGVuZC9hc3NldHMvaW1hZ2VzL3Nub3dmbGFrZS5wbmcnO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgXG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgZW52aXJvbm1lbnQsIFxuICAgICAgRU5WSVJPTk1FTlRfQ09OU1RBTlRTLkVOVklST05NRU5UX0RJTUVOU0lPTlMgKiB0aGlzLnJhbmRTcHJpdGUsIFxuICAgICAgMCxcbiAgICAgIEVOVklST05NRU5UX0NPTlNUQU5UUy5FTlZJUk9OTUVOVF9ESU1FTlNJT05TLFxuICAgICAgRU5WSVJPTk1FTlRfQ09OU1RBTlRTLkVOVklST05NRU5UX0RJTUVOU0lPTlMsXG4gICAgICB0aGlzLnBvcy54LFxuICAgICAgdGhpcy5wb3MueSxcbiAgICAgIEVOVklST05NRU5UX0NPTlNUQU5UUy5FTlZJUk9OTUVOVF9SRVNJWkUsXG4gICAgICBFTlZJUk9OTUVOVF9DT05TVEFOVFMuRU5WSVJPTk1FTlRfUkVTSVpFLFxuICAgICk7XG4gIH1cbn0iLCJpbXBvcnQgTGV2ZWwgZnJvbSBcIi4vbGV2ZWxcIjtcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi9hdmF0YXInO1xuXG5jb25zdCBBVkFUQVJfQ09OU1RBTlRTID0ge1xuICBBVkFUQVJfRElNRU5TSU9OUzoge1xuICAgIHdpZHRoOiAxNTAsXG4gICAgaGVpZ2h0OiAzMDBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcmVuYSB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgdGhpcy5kaW1lbnNpb25zID0geyB3aWR0aDogY2FudmFzLndpZHRoLCBoZWlnaHQ6IGNhbnZhcy5oZWlnaHQgfTtcbiAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuc291bmQgPSBmYWxzZTtcbiAgICB0aGlzLmhlbHBNb2RhbCA9IGZhbHNlO1xuICAgIHRoaXMud2lubmVyID0gbnVsbDtcblxuICAgIHRoaXMuZG9jdW1lbnRPZmZzZXRYID0gKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggLSB0aGlzLmRpbWVuc2lvbnMud2lkdGgpIC8gMjtcbiAgICB0aGlzLmRvY3VtZW50T2Zmc2V0WSA9IChkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCAtIDgwIC0gdGhpcy5kaW1lbnNpb25zLmhlaWdodCkgLyAyO1xuXG4gICAgdGhpcy5wbGF5UG9zID0ge1xuICAgICAgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMiAtIDExMCxcbiAgICAgIHk6IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyICsgMjhcbiAgICB9O1xuICAgIHRoaXMucGxheURpbWVuc2lvbnMgPSB7XG4gICAgICBkeDogMjIwLFxuICAgICAgZHk6IDU2XG4gICAgfTtcblxuICAgIHRoaXMucGF1c2VQb3MgPSB7XG4gICAgICB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLSA2MCxcbiAgICAgIHk6IDI1XG4gICAgfTtcbiAgICB0aGlzLnBhdXNlRGltZW5zaW9ucyA9IHtcbiAgICAgIGR4OiAzMCxcbiAgICAgIGR5OiA0MFxuICAgIH07XG5cbiAgICB0aGlzLnNvdW5kUG9zID0ge1xuICAgICAgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC0gMTMwLFxuICAgICAgeTogMjBcbiAgICB9O1xuICAgIHRoaXMuc291bmREaW1lbnNpb25zID0ge1xuICAgICAgZHg6IDUwLFxuICAgICAgZHk6IDUwXG4gICAgfTtcblxuICAgIHRoaXMuaGVscFBvcyA9IHtcbiAgICAgIHg6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIDcwLFxuICAgICAgeTogMjBcbiAgICB9O1xuICAgIHRoaXMuaGVscERpbWVuc2lvbnMgPSB7XG4gICAgICBkeDogNTAsXG4gICAgICBkeTogNTBcbiAgICB9O1xuXG4gICAgdGhpcy5zb3VuZE9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhdWRpb1wiKTtcbiAgICB0aGlzLnNvdW5kT2JqLnNyYyA9ICdmcm9udGVuZC9hc3NldHMvYXVkaW8vdWktb3N0Lm1wMyc7XG4gICAgdGhpcy5zb3VuZE9iai5zZXRBdHRyaWJ1dGUoXCJwcmVsb2FkXCIsIFwiYXV0b1wiKTtcbiAgICB0aGlzLnNvdW5kT2JqLnNldEF0dHJpYnV0ZShcImNvbnRyb2xzXCIsIFwibm9uZVwiKTtcbiAgICB0aGlzLnNvdW5kT2JqLnNldEF0dHJpYnV0ZShcImxvb3BcIiwgXCJ0cnVlXCIpO1xuICAgIHRoaXMuc291bmRPYmouc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zb3VuZE9iaik7XG5cbiAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kID0gdGhpcy5kcmF3QmFja2dyb3VuZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJhd0hlbHAgPSB0aGlzLmRyYXdIZWxwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVQbGF5ID0gdGhpcy5oYW5kbGVQbGF5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVQYXVzZSA9IHRoaXMuaGFuZGxlUGF1c2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZU11dGUgPSB0aGlzLmhhbmRsZU11dGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUhlbHAgPSB0aGlzLmhhbmRsZUhlbHAuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUF0dGFjayA9IHRoaXMuaGFuZGxlQXR0YWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVNb2RhbCA9IHRoaXMuaGFuZGxlTW9kYWwuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucGxheSA9IHRoaXMucGxheS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVzdGFydCA9IHRoaXMucmVzdGFydC5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5yZXN0YXJ0KCk7XG4gIH1cblxuICByZXN0YXJ0KCkge1xuICAgIHRoaXMubGV2ZWwgPSBuZXcgTGV2ZWwodGhpcy5jdHgsIHRoaXMuZGltZW5zaW9ucyk7XG4gICAgdGhpcy5wbGF5ZXIxID0gbmV3IEF2YXRhcih0aGlzLmN0eCwgdGhpcy5kaW1lbnNpb25zLCAxKTtcbiAgICB0aGlzLnBsYXllcjIgPSBuZXcgQXZhdGFyKHRoaXMuY3R4LCB0aGlzLmRpbWVuc2lvbnMsIDIpO1xuICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgdGhpcy53aW5uZXIgPSBudWxsO1xuICAgIHRoaXMucGxheSgpO1xuICB9XG4gIFxuICBwbGF5KCkge1xuICAgIHRoaXMuY3R4LmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZVBsYXkpO1xuICAgIHRoaXMuYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICB9XG4gIFxuICBhbmltYXRlKCkge1xuICAgIGlmICghdGhpcy5nYW1lT3Zlcikge1xuICAgICAgdGhpcy5jdHguY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlTXV0ZSk7XG4gICAgICB0aGlzLmN0eC5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVIZWxwKTtcbiAgICAgIHRoaXMuY3R4LmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZVBhdXNlKTtcbiAgICAgIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUF0dGFjayk7XG4gICAgICAvLyBUT0RPOiBURU1QT1JBUllcbiAgICAgIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbkZyYW1lKTtcbiAgICAgICAgdGhpcy5sZXZlbC5hbmltYXRlKHRoaXMucGxheWVyMS5zdGF0ZS5oZWFsdGgsIHRoaXMucGxheWVyMi5zdGF0ZS5oZWFsdGgsIHRydWUpO1xuICAgICAgICB0aGlzLnBsYXllcjEuYW5pbWF0ZSh0cnVlKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIyLmFuaW1hdGUodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLndpbm5lciA9IHRoaXMubGV2ZWwuYW5pbWF0ZSh0aGlzLnBsYXllcjEuc3RhdGUuaGVhbHRoLCB0aGlzLnBsYXllcjIuc3RhdGUuaGVhbHRoKTtcbiAgICAgICAgbGV0IHAxQXR0YWNrSGl0Ym94ID0gdGhpcy5wbGF5ZXIxLmFuaW1hdGUoZmFsc2UpO1xuICAgICAgICBsZXQgcDJBdHRhY2tIaXRib3ggPSB0aGlzLnBsYXllcjIuYW5pbWF0ZShmYWxzZSk7XG4gICAgICAgIGlmICh0aGlzLnBsYXllcjEuc3RhdGUuYmFzaWNBdHRhY2tpbmcgJiYgIXRoaXMucGxheWVyMS5zdGF0ZS5kYW1hZ2VEb25lKSB7XG4gICAgICAgICAgdGhpcy5jaGVja0F0dGFja0NvbGxpc2lvbihwMUF0dGFja0hpdGJveCwgdGhpcy5wbGF5ZXIxLCB0aGlzLnBsYXllcjIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBsYXllcjIuc3RhdGUuYmFzaWNBdHRhY2tpbmcgJiYgIXRoaXMucGxheWVyMi5zdGF0ZS5kYW1hZ2VEb25lKSB7XG4gICAgICAgICAgdGhpcy5jaGVja0F0dGFja0NvbGxpc2lvbihwMkF0dGFja0hpdGJveCwgdGhpcy5wbGF5ZXIyLCB0aGlzLnBsYXllcjEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLndpbm5lciA9PT0gJ3RpbWVVcCcpIHtcbiAgICAgICAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChbJ3BsYXllcjEnLCAncGxheWVyMiddLmluY2x1ZGVzKHRoaXMud2lubmVyKSkge1xuICAgICAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3R4LmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZU11dGUpO1xuICAgICAgdGhpcy5jdHguY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlSGVscCk7XG4gICAgICB0aGlzLmN0eC5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVQYXVzZSk7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbkZyYW1lKTtcbiAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgLy8gRGlzcGxheSBzdGFydCBzY3JlZW5cbiAgICAgIHRoaXMuZHJhd0JhY2tncm91bmQoKTtcbiAgICB9XG4gIH1cblxuICAvLyBPTkxZIEZPUiBTVEFSVElORyBTQ1JFRU5cbiAgZHJhd0JhY2tncm91bmQoKSB7XG4gICAgdGhpcy5jdHguY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlUGxheSk7XG5cbiAgICBsZXQgYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xuICAgIGJhY2tncm91bmQuc3JjID0gJ2Zyb250ZW5kL2Fzc2V0cy9pbWFnZXMvc3RhcnQtYmFja2dyb3VuZC5qcGcnO1xuICAgIGJhY2tncm91bmQub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGJhY2tncm91bmQsIDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICBcbiAgICAgIGxldCBoZWxwID0gbmV3IEltYWdlKCk7XG4gICAgICBoZWxwLnNyYyA9ICdmcm9udGVuZC9hc3NldHMvaW1hZ2VzL2hlbHAucG5nJztcbiAgICAgIGhlbHAub25sb2FkID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaGVscCwgdGhpcy5kaW1lbnNpb25zLndpZHRoIC0gNzAsIDIwLCA1MCwgNTApO1xuICAgICAgfTtcbiAgXG4gICAgICBsZXQgbXV0ZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgdGhpcy5zb3VuZCA/IFxuICAgICAgbXV0ZS5zcmMgPSAnZnJvbnRlbmQvYXNzZXRzL2ltYWdlcy9zcGVha2VyLnBuZyc6XG4gICAgICBtdXRlLnNyYyA9ICdmcm9udGVuZC9hc3NldHMvaW1hZ2VzL211dGUucG5nJ1xuICAgICAgbXV0ZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShtdXRlLCB0aGlzLmRpbWVuc2lvbnMud2lkdGggLSAxMzAsIDIwLCA1MCwgNTApO1xuICAgICAgfTtcbiAgXG4gICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdXSElURSc7XG4gIFxuICAgICAgbGV0IGhlYWRlciA9IG5ldyBJbWFnZSgpO1xuICAgICAgaGVhZGVyLnNyYyA9ICdmcm9udGVuZC9hc3NldHMvaW1hZ2VzL2hlYWRlci13aGl0ZS5wbmcnO1xuICAgICAgaGVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgIGhlYWRlciwgXG4gICAgICAgICAgMjAsIFxuICAgICAgICAgIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyIC0gMTAwLCBcbiAgICAgICAgICB0aGlzLmRpbWVuc2lvbnMud2lkdGggLSA0MCwgXG4gICAgICAgICAgNTZcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgXG4gICAgICBzd2l0Y2ggKHRoaXMud2lubmVyKSB7XG4gICAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAgICB0aGlzLmN0eC5mb250ID0gJzU2cHggVHJlYnVjaGV0IE1TJztcbiAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcbiAgICAgICAgICAgICdQbGF5IG5vdyEnLFxuICAgICAgICAgICAgdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMixcbiAgICAgICAgICAgIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyICsgNzJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd0aW1lVXAnOlxuICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnMzZweCBUcmVidWNoZXQgTVMnO1xuICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFxuICAgICAgICAgICAgJ1RpbWUgcmFuIG91dC4uLiBoYXZlIHlvdSB0cmllZCBhdHRhY2tpbmc/JyxcbiAgICAgICAgICAgIHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsXG4gICAgICAgICAgICB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiArIDEyXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLmN0eC5mb250ID0gJzU2cHggVHJlYnVjaGV0IE1TJztcbiAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcbiAgICAgICAgICAgICdQbGF5IGFnYWluPycsXG4gICAgICAgICAgICB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLFxuICAgICAgICAgICAgdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDIgKyA3MlxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhpcy5jdHguZm9udCA9ICczNnB4IFRyZWJ1Y2hldCBNUyc7XG4gICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXG4gICAgICAgICAgICBgQ29uZ3JhdHVsYXRpb25zLCAke3RoaXMud2lubmVyfSB3b24hYCxcbiAgICAgICAgICAgIHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsXG4gICAgICAgICAgICB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiArIDhcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnNTZweCBUcmVidWNoZXQgTVMnO1xuICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFxuICAgICAgICAgICAgJ1BsYXkgYWdhaW4/JyxcbiAgICAgICAgICAgIHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsXG4gICAgICAgICAgICB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiArIDcyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICB9XG5cbiAgZHJhd0hlbHAoKSB7XG4gICAgdGhpcy5jdHguY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlTW9kYWwpO1xuXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3JnYmEoMCwgMCwgMCwgMC43KSc7XG4gICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcblxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyknO1xuICAgIHRoaXMuY3R4LmZpbGxSZWN0KDEyMCwgNjAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIDI0MCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCAtIDEyMCk7XG5cbiAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSAnbGVmdCc7XG4gICAgdGhpcy5jdHguZm9udCA9ICc1NnB4IEFyaWFsJztcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdIb3cgdG8gcGxheTonLCAyMTAsIDEyMCk7XG5cbiAgICB0aGlzLmN0eC5mb250ID0gJzI0cHggVHJlYnVjaGV0IE1TJztcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdQbGF5ZXIgMTogVyA9IEp1bXAsIEEgPSBMZWZ0LCBEID0gUmlnaHQsIEogPSBBdHRhY2snLCAyMTAsIDE1MCk7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoJ1BsYXllciAyOiBeID0gSnVtcCwgPCA9IExlZnQsID4gPSBSaWdodCwgMSAobnVtcGFkKSA9IEF0dGFjaycsIDIxMCwgMTgwKTtcbiAgICB0aGlzLmN0eC5maWxsVGV4dCgnWW91IGhhdmUgdW50aWwgdGhlIHRpbWUgcnVucyBvdXQgdG8gZGVmZWF0IHRoZSBvdGhlciBwbGF5ZXIhJywgMjEwLCAyMTApO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdNb3ZlIGVycmF0aWNhbGx5IGFuZCBqdW1wIHRvIGF2b2lkIGF0dGFja3MgYW5kIG91dHNtYXJ0IHlvdXIgb3Bwb25lbnQuJywgMjEwLCAyNDApO1xuXG4gICAgdGhpcy5jdHguZm9udCA9ICc1NnB4IEFyaWFsJztcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdDcmVkaXRzOicsIDIxMCwgMjkwKTtcblxuICAgIHRoaXMuY3R4LmZvbnQgPSAnMThweCBUcmVidWNoZXQgTVMnO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoJ1N0YXJ0aW5nIHNjcmVlbjogaHR0cDovL3d3dy5hdm9pZGluZ3RoZXB1ZGRsZS5jb20vbmV3cy8yMDE1LzEyLzIxLy4uLicsIDIxMCwgMzIwKTtcbiAgICB0aGlzLmN0eC5maWxsVGV4dCgnY29tcGxldGUtYmF0Y2gtb2YtdGVra2VuLTctZmF0ZWQtcmV0cmlidXRpb24taW1hZ2VzLWluLWhpZ2guaHRtbCcsIDIxMCwgMzQwKTtcbiAgICB0aGlzLmN0eC5maWxsVGV4dCgnU2FrdXJhIHBldGFsczogaHR0cHM6Ly93d3cuMTIzcmYuY29tL3Bob3RvXzEwOTc3NDA4MV9zdG9jay12ZWN0b3ItLi4uJywgMjEwLCAzNjApO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdzYWt1cmEtcGV0YWxzLWZhbGxpbmctZG93bi1yb21hbnRpYy1waW5rLXNpbGt5LW1lZGl1bS1mbG93ZXJzLXNwYXJzZS0uLi4nLCAyMTAsIDM4MCk7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoJ2ZseWluZy1jaGVycnktcGV0YWxzLXRvcC1ncmFkaWUuaHRtbCcsIDIxMCwgNDAwKTtcbiAgICB0aGlzLmN0eC5maWxsVGV4dCgnU25vd2ZsYWtlczogaHR0cHM6Ly93d3cuZnJlZXBpay5jb20vZnJlZS1waG90b3MtdmVjdG9ycy9jaHJpc3RtYXMuLi4nLCAyMTAsIDQyMCk7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoJyhDaHJpc3RtYXMgdmVjdG9yIGNyZWF0ZWQgYnkgZnJlZXBpayknLCAyMTAsIDQ0MCk7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoJ0FyZW5hIGJhY2tncm91bmQ6IGh0dHBzOi8vd2FsbHBhcGVyY2F2ZS5jb20vdy93cDI2MDM0ODAnLCAyMTAsIDQ2MCk7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoJ1J5dSBzcHJpdGVzaGVldDogaHR0cHM6Ly93d3cuZGV2aWFudGFydC5jb20vc2lsM250LWovYXJ0Ly4uLicsIDIxMCwgNDgwKTtcbiAgICB0aGlzLmN0eC5maWxsVGV4dCgnUnl1LVN0cmVldC1GaWdodGVyLTEtU3ByaXRlLVNoZWV0LTc2OTAxMTcxMyAoYnkgc2lsM250LWopJywgMjEwLCA1MDApO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdIZWxwIGFuZCBzb3VuZCBpY29uczogaHR0cHM6Ly93d3cuZmxhdGljb24uY29tIChtYWRlIGJ5IEZyZWVwaWspJywgMjEwLCA1MjApO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdNdXNpYzogRHJhZ29uIEJhbGwgU3VwZXIgLSBVbHRyYSBpbnN0aW5jdCB8IEluc3RydW1lbnRhbCBFcGljIFJvY2sgQ09WRVInLCAyMTAsIDU0MCk7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoJ0ZyaWVkcmljaCBIYWJldGxlciBNdXNpYycsIDIxMCwgNTYwKTtcbiAgfVxuXG4gIGhhbmRsZVBsYXkoZSkge1xuICAgIGxldCBjbGlja1BvcyA9IHtcbiAgICAgIHg6IGUucGFnZVggLSB0aGlzLmRvY3VtZW50T2Zmc2V0WCxcbiAgICAgIHk6IGUucGFnZVkgLSB0aGlzLmRvY3VtZW50T2Zmc2V0WSAtIDgwXG4gICAgfVxuICAgIGlmIChjbGlja1Bvcy54ID49IHRoaXMucGxheVBvcy54ICYmIGNsaWNrUG9zLnggPD0gdGhpcy5wbGF5UG9zLnggKyB0aGlzLnBsYXlEaW1lbnNpb25zLmR4KSB7XG4gICAgICBpZiAoY2xpY2tQb3MueSA+PSB0aGlzLnBsYXlQb3MueSAmJiBjbGlja1Bvcy55IDw9IHRoaXMucGxheVBvcy55ICsgdGhpcy5wbGF5RGltZW5zaW9ucy5keSkge1xuICAgICAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVzdGFydCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVBhdXNlKGUpIHtcbiAgICBsZXQgY2xpY2tQb3MgPSB7XG4gICAgICB4OiBlLnBhZ2VYIC0gdGhpcy5kb2N1bWVudE9mZnNldFgsXG4gICAgICB5OiBlLnBhZ2VZIC0gdGhpcy5kb2N1bWVudE9mZnNldFkgLSA4MFxuICAgIH1cbiAgICBpZiAoY2xpY2tQb3MueCA+PSB0aGlzLnBhdXNlUG9zLnggJiYgY2xpY2tQb3MueCA8PSB0aGlzLnBhdXNlUG9zLnggKyB0aGlzLnBhdXNlRGltZW5zaW9ucy5keCkge1xuICAgICAgaWYgKGNsaWNrUG9zLnkgPj0gdGhpcy5wYXVzZVBvcy55ICYmIGNsaWNrUG9zLnkgPD0gdGhpcy5wYXVzZVBvcy55ICsgdGhpcy5wYXVzZURpbWVuc2lvbnMuZHkpIHtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSAhdGhpcy5wYXVzZWQ7XG4gICAgICAgIGlmICghdGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU11dGUoZSkge1xuICAgIGxldCBjbGlja1BvcyA9IHtcbiAgICAgIHg6IGUucGFnZVggLSB0aGlzLmRvY3VtZW50T2Zmc2V0WCxcbiAgICAgIHk6IGUucGFnZVkgLSB0aGlzLmRvY3VtZW50T2Zmc2V0WSAtIDgwXG4gICAgfVxuICAgIGlmIChjbGlja1Bvcy54ID49IHRoaXMuc291bmRQb3MueCAmJiBjbGlja1Bvcy54IDw9IHRoaXMuc291bmRQb3MueCArIHRoaXMuc291bmREaW1lbnNpb25zLmR4KSB7XG4gICAgICBpZiAoY2xpY2tQb3MueSA+PSB0aGlzLnNvdW5kUG9zLnkgJiYgY2xpY2tQb3MueSA8PSB0aGlzLnNvdW5kUG9zLnkgKyB0aGlzLnNvdW5kRGltZW5zaW9ucy5keSkge1xuICAgICAgICB0aGlzLnNvdW5kID0gIXRoaXMuc291bmQ7XG4gICAgICAgIGlmICh0aGlzLnNvdW5kKSB7XG4gICAgICAgICAgdGhpcy5zb3VuZE9iai5wbGF5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zb3VuZE9iai5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhd0JhY2tncm91bmQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIGhhbmRsZUhlbHAoZSkge1xuICAgIGxldCBjbGlja1BvcyA9IHtcbiAgICAgIHg6IGUucGFnZVggLSB0aGlzLmRvY3VtZW50T2Zmc2V0WCxcbiAgICAgIHk6IGUucGFnZVkgLSB0aGlzLmRvY3VtZW50T2Zmc2V0WSAtIDgwXG4gICAgfVxuICAgIGlmIChjbGlja1Bvcy54ID49IHRoaXMuaGVscFBvcy54ICYmIGNsaWNrUG9zLnggPD0gdGhpcy5oZWxwUG9zLnggKyB0aGlzLmhlbHBEaW1lbnNpb25zLmR4KSB7XG4gICAgICBpZiAoY2xpY2tQb3MueSA+PSB0aGlzLmhlbHBQb3MueSAmJiBjbGlja1Bvcy55IDw9IHRoaXMuaGVscFBvcy55ICsgdGhpcy5oZWxwRGltZW5zaW9ucy5keSkge1xuICAgICAgICB0aGlzLmhlbHBNb2RhbCA9ICF0aGlzLmhlbHBNb2RhbDtcbiAgICAgICAgaWYgKHRoaXMuaGVscE1vZGFsKSB7XG4gICAgICAgICAgdGhpcy5kcmF3SGVscCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZHJhd0JhY2tncm91bmQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUF0dGFjayhlKSB7XG4gICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgIGNhc2UgNzQ6XG4gICAgICAgIHRoaXMucGxheWVyMS5iYXNpY0F0dGFjaygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgOTc6XG4gICAgICAgIHRoaXMucGxheWVyMi5iYXNpY0F0dGFjaygpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBoYW5kbGVNb2RhbChlKSB7XG4gICAgbGV0IGNsaWNrUG9zID0ge1xuICAgICAgeDogZS5wYWdlWCAtIHRoaXMuZG9jdW1lbnRPZmZzZXRYLFxuICAgICAgeTogZS5wYWdlWSAtIHRoaXMuZG9jdW1lbnRPZmZzZXRZIC0gODBcbiAgICB9XG4gICAgaWYgKGNsaWNrUG9zLnggPCAxMjAgfHwgY2xpY2tQb3MueCA+IHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIDEyMFxuICAgICAgfHwgY2xpY2tQb3MueSA8IDYwIHx8IGNsaWNrUG9zLnkgPiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC0gNjApIHtcbiAgICAgIHRoaXMuY3R4LmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZU1vZGFsKTtcbiAgICAgIHRoaXMuaGVscE1vZGFsID0gIXRoaXMuaGVscE1vZGFsO1xuICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tBdHRhY2tDb2xsaXNpb24oYm91bmQsIGF0dGFja2luZ1BsYXllciwgb3RoZXJQbGF5ZXIpIHtcbiAgICBsZXQgb3RoZXJQbGF5ZXJCb3VuZCA9IHtcbiAgICAgIHgxOiBvdGhlclBsYXllci5wb3MueCAtIEFWQVRBUl9DT05TVEFOVFMuQVZBVEFSX0RJTUVOU0lPTlMud2lkdGggLyAyLFxuICAgICAgeTE6IG90aGVyUGxheWVyLnBvcy55LFxuICAgICAgeDI6IG90aGVyUGxheWVyLnBvcy54ICsgQVZBVEFSX0NPTlNUQU5UUy5BVkFUQVJfRElNRU5TSU9OUy53aWR0aCAvIDIsXG4gICAgICB5Mjogb3RoZXJQbGF5ZXIucG9zLnkgKyBBVkFUQVJfQ09OU1RBTlRTLkFWQVRBUl9ESU1FTlNJT05TLmhlaWdodFxuICAgIH07XG4gICAgaWYgKGJvdW5kLnggPj0gb3RoZXJQbGF5ZXJCb3VuZC54MSAmJiBib3VuZC54IDw9IG90aGVyUGxheWVyQm91bmQueDIpIHtcbiAgICAgIGlmIChib3VuZC55ID49IG90aGVyUGxheWVyQm91bmQueTEgJiYgYm91bmQueSA8PSBvdGhlclBsYXllckJvdW5kLnkyKSB7XG4gICAgICAgIGF0dGFja2luZ1BsYXllci5zdGF0ZS5kYW1hZ2VEb25lID0gdHJ1ZTtcbiAgICAgICAgb3RoZXJQbGF5ZXIuc3RhdGUuaGVhbHRoIC09IGF0dGFja2luZ1BsYXllci5zdGF0ZS5iYXNpY0F0dGFja0RhbWFnZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59IiwiaW1wb3J0IEVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnQnO1xuXG5jb25zdCBDT0xPUl9QQUxFVFRFID0ge1xuICBQUklNQVJZOiAnIzAwMDcwQScsXG4gIFNFQ09OREFSWTogJyMyOTQ1NTInLFxuICBURVJUSUFSWTogJyM1OTc4ODQnLFxuICBRVUFURVJOQVJZOiAnIzlFQjlCMycsXG4gIFFVSU5URVJOQVJZOiAnI0FDQzRDRSdcbn07XG5cbmNvbnN0IExFVkVMX0NPTlNUQU5UUyA9IHtcbiAgTUFYX1RJTUU6IDYwICogMTIwLFxuICBUSU1FUl9URVhUX0hFSUdIVDogNzUsXG4gIFRJTUVSX1JBRElVUzogNDUsXG4gIE1BWF9IRUFMVEg6IDIwMCxcbiAgSEVBTFRIX0JBUjoge1xuICAgIHdpZHRoOiA0MDAsXG4gICAgaGVpZ2h0OiAyMFxuICB9LFxuICBPRkZTRVQ6IDIwLFxuICBFTlZJUk9OTUVOVF9QUk9CQUJJTElUWTogNDUsXG4gIEVOVklST05NRU5UUzogWydzYWt1cmEnLCAnc25vd2ZsYWtlJ11cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsIHtcbiAgY29uc3RydWN0b3IoY3R4LCBkaW1lbnNpb25zKSB7XG4gICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9ucztcbiAgICB0aGlzLnRpbWUgPSBMRVZFTF9DT05TVEFOVFMuTUFYX1RJTUU7XG4gICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICB0aGlzLnBsYXllckhwUG9zID0ge1xuICAgICAgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMiAtIExFVkVMX0NPTlNUQU5UUy5USU1FUl9SQURJVVMsXG4gICAgICB5OiBMRVZFTF9DT05TVEFOVFMuVElNRVJfUkFESVVTIC0gTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIuaGVpZ2h0ICsgNVxuICAgIH07XG5cbiAgICB0aGlzLmJvdEhwUG9zID0ge1xuICAgICAgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMiArIExFVkVMX0NPTlNUQU5UUy5USU1FUl9SQURJVVMsXG4gICAgICB5OiBMRVZFTF9DT05TVEFOVFMuVElNRVJfUkFESVVTIC0gTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIuaGVpZ2h0ICsgNVxuICAgIH07XG5cbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5lbnZpcm9ubWVudCA9IFtdO1xuXG4gICAgbGV0IGVudmlyb25tZW50SW5kZXggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoTEVWRUxfQ09OU1RBTlRTLkVOVklST05NRU5UUy5sZW5ndGggLSAxKSk7XG4gICAgdGhpcy5lbnZpcm9ubWVudFR5cGUgPSBMRVZFTF9DT05TVEFOVFMuRU5WSVJPTk1FTlRTW2Vudmlyb25tZW50SW5kZXhdO1xuXG4gICAgdGhpcy5kcmF3VGltZXJDaXJjbGUgPSB0aGlzLmRyYXdUaW1lckNpcmNsZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJhd1RpbWVyRGlzcGxheSA9IHRoaXMuZHJhd1RpbWVyRGlzcGxheS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJhd1RpbWVyVGV4dCA9IHRoaXMuZHJhd1RpbWVyVGV4dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJhd0hlYWx0aEJhcnMgPSB0aGlzLmRyYXdIZWFsdGhCYXJzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmF3TmFtZXMgPSB0aGlzLmRyYXdOYW1lcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJhd1BhdXNlID0gdGhpcy5kcmF3UGF1c2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kID0gdGhpcy5kcmF3QmFja2dyb3VuZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJhd0Zsb29yID0gdGhpcy5kcmF3Rmxvb3IuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGFuaW1hdGUocGxheWVySGVhbHRoLCBib3RIZWFsdGgsIHBhdXNlZCkge1xuICAgIGxldCB0aW1lO1xuICAgIGxldCB3aW5uZXI7XG5cbiAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKCk7XG5cbiAgICBsZXQgZW52aXJvbm1lbnRHZW5lcmF0aW9uID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogTEVWRUxfQ09OU1RBTlRTLkVOVklST05NRU5UX1BST0JBQklMSVRZKTtcblxuICAgIGlmIChlbnZpcm9ubWVudEdlbmVyYXRpb24gPT09IDEpIHtcbiAgICAgIGxldCBuZXdFbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudCh0aGlzLmN0eCwgdGhpcy5kaW1lbnNpb25zLCB0aGlzLmVudmlyb25tZW50VHlwZSk7XG4gICAgICB0aGlzLmVudmlyb25tZW50LnB1c2gobmV3RW52aXJvbm1lbnQpO1xuICAgIH1cblxuICAgIHRoaXMuZW52aXJvbm1lbnQuZm9yRWFjaCgoZW52aXJvbm1lbnQsIGlkeCkgPT4ge1xuICAgICAgZW52aXJvbm1lbnQuYW5pbWF0ZSgpO1xuICAgICAgaWYgKGVudmlyb25tZW50LnBvcy55ID4gdGhpcy5kaW1lbnNpb25zLmhlaWdodCArIDk0KSB7XG4gICAgICAgIHRoaXMuZW52aXJvbm1lbnQuc2hpZnQoKTtcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICB0aW1lID0gdGhpcy5kcmF3VGltZXIoKTtcbiAgICB0aGlzLmRyYXdIZWFsdGhCYXJzKCk7XG4gICAgd2lubmVyID0gdGhpcy5kcmF3Q3VycmVudEhlYWx0aEJhcnMocGxheWVySGVhbHRoLCBib3RIZWFsdGgpO1xuICAgIHRoaXMuZHJhd05hbWVzKCk7XG4gICAgLy8gdGhpcy5kcmF3Rmxvb3IoKTtcbiAgICBwYXVzZWQgPyB0aGlzLnBhdXNlZCA9IHRydWUgOiB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuZHJhd1BhdXNlKCk7XG4gICAgICBcbiAgICBpZiAodGltZSA9PT0gMCkge1xuICAgICAgdGhpcy5lbnZpcm9ubWVudCA9IFtdO1xuICAgICAgcmV0dXJuICd0aW1lVXAnO1xuICAgIH0gZWxzZSBpZiAod2lubmVyKSB7XG4gICAgICB0aGlzLmVudmlyb25tZW50ID0gW107XG4gICAgICByZXR1cm4gd2lubmVyO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wYXVzZWQpIHtcbiAgICAgIHJldHVybiAncGF1c2VkJztcbiAgICB9XG4gIH1cblxuICBkcmF3VGltZXIoKSB7XG4gICAgLy8gVE9ETzogTmVlZCBiZXR0ZXIgc29sdXRpb25cbiAgICB0aGlzLmRyYXdUaW1lckNpcmNsZSgpO1xuICAgIHRoaXMuZHJhd1RpbWVyRGlzcGxheSgpO1xuICAgIHRoaXMuZHJhd1RpbWVyVGV4dCgpO1xuICAgIFxuICAgIHRoaXMudGltZSA9IHRoaXMudGltZSAtIDE7XG4gICAgaWYgKHRoaXMudGltZSA9PT0gMCkge1xuICAgICAgbGV0IHJldHVyblRpbWUgPSAwO1xuICAgICAgdGhpcy50aW1lID0gTEVWRUxfQ09OU1RBTlRTLk1BWF9USU1FO1xuICAgICAgcmV0dXJuIHJldHVyblRpbWU7XG4gICAgfVxuICB9XG5cbiAgZHJhd1RpbWVyVGV4dCgpIHtcbiAgICB0aGlzLmN0eC5mb250ID0gJzQ4cHggVHJlYnVjaGV0IE1TJztcbiAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnV0hJVEUnO1xuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gQ09MT1JfUEFMRVRURS5QUklNQVJZO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KFxuICAgICAgYCR7TWF0aC5yb3VuZCh0aGlzLnRpbWUgLyA2MCl9YCxcbiAgICAgIHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsXG4gICAgICBMRVZFTF9DT05TVEFOVFMuVElNRVJfVEVYVF9IRUlHSFQgKyAxMFxuICAgICk7XG4gICAgdGhpcy5jdHguc3Ryb2tlVGV4dChcbiAgICAgIGAke01hdGgucm91bmQodGhpcy50aW1lIC8gNjApfWAsXG4gICAgICB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLFxuICAgICAgTEVWRUxfQ09OU1RBTlRTLlRJTUVSX1RFWFRfSEVJR0hUICsgMTBcbiAgICApO1xuICB9XG5cbiAgZHJhd1RpbWVyQ2lyY2xlKCkge1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IENPTE9SX1BBTEVUVEUuU0VDT05EQVJZO1xuICAgIHRoaXMuY3R4LmFyYyhcbiAgICAgIHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsXG4gICAgICBMRVZFTF9DT05TVEFOVFMuVElNRVJfVEVYVF9IRUlHSFQgLSA1LFxuICAgICAgTEVWRUxfQ09OU1RBTlRTLlRJTUVSX1JBRElVUywgMCwgMiAqIE1hdGguUElcbiAgICAgICk7XG4gICAgdGhpcy5jdHguZmlsbCgpO1xuICB9XG5cbiAgZHJhd1RpbWVyRGlzcGxheSgpIHtcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBDT0xPUl9QQUxFVFRFLlFVQVRFUk5BUlk7XG4gICAgdGhpcy5jdHguYXJjKFxuICAgICAgdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMixcbiAgICAgIExFVkVMX0NPTlNUQU5UUy5USU1FUl9URVhUX0hFSUdIVCAtIDUsXG4gICAgICBMRVZFTF9DT05TVEFOVFMuVElNRVJfUkFESVVTLFxuICAgICAgLSAwLjUgKiBNYXRoLlBJLFxuICAgICAgKExFVkVMX0NPTlNUQU5UUy5NQVhfVElNRSAtIHRoaXMudGltZSlcbiAgICAgICogMiAqIE1hdGguUEkgLyBMRVZFTF9DT05TVEFOVFMuTUFYX1RJTUVcbiAgICAgIC0gMC41ICogTWF0aC5QSVxuICAgICk7XG4gICAgdGhpcy5jdHgubGluZVRvKHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsXG4gICAgICBMRVZFTF9DT05TVEFOVFMuVElNRVJfVEVYVF9IRUlHSFQgLSA1XG4gICAgKTtcbiAgICB0aGlzLmN0eC5maWxsKCk7XG4gIH1cblxuICBkcmF3SGVhbHRoQmFycygpIHtcbiAgICAvLyBQbGF5ZXIgaGVhbHRoIGNvbnRhaW5lclxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ0JMQUNLJztcbiAgICB0aGlzLmN0eC5tb3ZlVG8oXG4gICAgICB0aGlzLnBsYXllckhwUG9zLngsXG4gICAgICB0aGlzLnBsYXllckhwUG9zLnlcbiAgICApO1xuICAgIHRoaXMuY3R4LmxpbmVUbyhcbiAgICAgIHRoaXMucGxheWVySHBQb3MueCAtIExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLndpZHRoLFxuICAgICAgdGhpcy5wbGF5ZXJIcFBvcy55XG4gICAgKTtcbiAgICB0aGlzLmN0eC5saW5lVG8oXG4gICAgICB0aGlzLnBsYXllckhwUG9zLnggLSBMRVZFTF9DT05TVEFOVFMuSEVBTFRIX0JBUi53aWR0aCxcbiAgICAgIHRoaXMucGxheWVySHBQb3MueSArIExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLmhlaWdodFxuICAgICk7XG4gICAgdGhpcy5jdHgubGluZVRvKFxuICAgICAgdGhpcy5wbGF5ZXJIcFBvcy54IC0gTEVWRUxfQ09OU1RBTlRTLk9GRlNFVCxcbiAgICAgIHRoaXMucGxheWVySHBQb3MueSArIExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLmhlaWdodFxuICAgICk7XG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgdGhpcy5jdHguZmlsbCgpO1xuICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgLy9ib3QgaGVhbHRoIGNvbnRhaW5lclxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ0JMQUNLJztcbiAgICB0aGlzLmN0eC5tb3ZlVG8oXG4gICAgICB0aGlzLmJvdEhwUG9zLngsXG4gICAgICB0aGlzLmJvdEhwUG9zLnlcbiAgICApO1xuICAgIHRoaXMuY3R4LmxpbmVUbyhcbiAgICAgIHRoaXMuYm90SHBQb3MueCArIExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLndpZHRoLFxuICAgICAgdGhpcy5ib3RIcFBvcy55XG4gICAgKTtcbiAgICB0aGlzLmN0eC5saW5lVG8oXG4gICAgICB0aGlzLmJvdEhwUG9zLnggKyBMRVZFTF9DT05TVEFOVFMuSEVBTFRIX0JBUi53aWR0aCxcbiAgICAgIHRoaXMuYm90SHBQb3MueSArIExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLmhlaWdodFxuICAgICk7XG4gICAgdGhpcy5jdHgubGluZVRvKFxuICAgICAgdGhpcy5ib3RIcFBvcy54ICsgTEVWRUxfQ09OU1RBTlRTLk9GRlNFVCxcbiAgICAgIHRoaXMuYm90SHBQb3MueSArIExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLmhlaWdodFxuICAgICk7XG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgdGhpcy5jdHguZmlsbCgpO1xuICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICB9XG5cbiAgZHJhd0N1cnJlbnRIZWFsdGhCYXJzKHBsYXllckhlYWx0aCwgYm90SGVhbHRoKSB7XG5cbiAgICBpZiAocGxheWVySGVhbHRoIDw9IDApIHtcbiAgICAgIHJldHVybiAncGxheWVyMic7XG4gICAgfSBlbHNlIGlmIChib3RIZWFsdGggPD0gMCkge1xuICAgICAgcmV0dXJuICdwbGF5ZXIxJztcbiAgICB9O1xuXG4gICAgbGV0IGN1cnJlbnRIZWFsdGggPSBMRVZFTF9DT05TVEFOVFMuSEVBTFRIX0JBUi53aWR0aCAqIHBsYXllckhlYWx0aCAvIExFVkVMX0NPTlNUQU5UUy5NQVhfSEVBTFRIO1xuXG4gICAgLy8gUGxheWVyIGN1cnJlbnQgaGVhbHRoXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ1JFRCc7XG4gICAgdGhpcy5jdHgubW92ZVRvKFxuICAgICAgdGhpcy5wbGF5ZXJIcFBvcy54LFxuICAgICAgdGhpcy5wbGF5ZXJIcFBvcy55XG4gICAgKTtcbiAgICB0aGlzLmN0eC5saW5lVG8oXG4gICAgICB0aGlzLnBsYXllckhwUG9zLnggLSBjdXJyZW50SGVhbHRoLFxuICAgICAgdGhpcy5wbGF5ZXJIcFBvcy55XG4gICAgKTtcbiAgICBpZiAoY3VycmVudEhlYWx0aCA8IExFVkVMX0NPTlNUQU5UUy5PRkZTRVQpIHtcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyhcbiAgICAgICAgdGhpcy5wbGF5ZXJIcFBvcy54IC0gY3VycmVudEhlYWx0aCxcbiAgICAgICAgLy8gY3VycmVudEhlYWx0aCA9IGN1cnJlbnRIZWFsdGggKiB0YW4ocGkvNClcbiAgICAgICAgLy8gc2luY2Ugb2Zmc2V0ID0gaGVpZ2h0XG4gICAgICAgIHRoaXMucGxheWVySHBQb3MueSArIGN1cnJlbnRIZWFsdGhcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyhcbiAgICAgICAgdGhpcy5wbGF5ZXJIcFBvcy54IC0gY3VycmVudEhlYWx0aCxcbiAgICAgICAgdGhpcy5wbGF5ZXJIcFBvcy55ICsgTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIuaGVpZ2h0XG4gICAgICApO1xuICAgICAgdGhpcy5jdHgubGluZVRvKFxuICAgICAgICB0aGlzLnBsYXllckhwUG9zLnggLSBMRVZFTF9DT05TVEFOVFMuT0ZGU0VULFxuICAgICAgICB0aGlzLnBsYXllckhwUG9zLnkgKyBMRVZFTF9DT05TVEFOVFMuSEVBTFRIX0JBUi5oZWlnaHRcbiAgICAgICk7XG4gICAgfTtcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICBsZXQgY3VycmVudEJvdEhlYWx0aCA9IExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLndpZHRoICogYm90SGVhbHRoIC8gTEVWRUxfQ09OU1RBTlRTLk1BWF9IRUFMVEg7XG5cbiAgICAvLyBCb3QgY3VycmVudCBoZWFsdGhcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnUkVEJztcbiAgICB0aGlzLmN0eC5tb3ZlVG8oXG4gICAgICB0aGlzLmJvdEhwUG9zLngsXG4gICAgICB0aGlzLmJvdEhwUG9zLnlcbiAgICApO1xuICAgIHRoaXMuY3R4LmxpbmVUbyhcbiAgICAgIHRoaXMuYm90SHBQb3MueCArIGN1cnJlbnRCb3RIZWFsdGgsXG4gICAgICB0aGlzLmJvdEhwUG9zLnlcbiAgICApO1xuICAgIGlmIChjdXJyZW50Qm90SGVhbHRoIDwgTEVWRUxfQ09OU1RBTlRTLk9GRlNFVCkge1xuICAgICAgdGhpcy5jdHgubGluZVRvKFxuICAgICAgICB0aGlzLmJvdEhwUG9zLnggKyBjdXJyZW50Qm90SGVhbHRoLFxuICAgICAgICAvLyBjdXJyZW50Qm90SGVhbHRoID0gY3VycmVudEJvdEhlYWx0aCAqIHRhbihwaS80KVxuICAgICAgICAvLyBzaW5jZSBvZmZzZXQgPSBoZWlnaHRcbiAgICAgICAgdGhpcy5ib3RIcFBvcy55ICsgY3VycmVudEJvdEhlYWx0aFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdHgubGluZVRvKFxuICAgICAgICB0aGlzLmJvdEhwUG9zLnggKyBjdXJyZW50Qm90SGVhbHRoLFxuICAgICAgICB0aGlzLmJvdEhwUG9zLnkgKyBMRVZFTF9DT05TVEFOVFMuSEVBTFRIX0JBUi5oZWlnaHRcbiAgICAgICk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8oXG4gICAgICAgIHRoaXMuYm90SHBQb3MueCArIExFVkVMX0NPTlNUQU5UUy5PRkZTRVQsXG4gICAgICAgIHRoaXMuYm90SHBQb3MueSArIExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLmhlaWdodFxuICAgICAgKTtcbiAgICB9O1xuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgfVxuXG4gIGRyYXdOYW1lcygpIHtcbiAgICBsZXQgcGxheWVyTmFtZSA9ICdQbGF5ZXIgMSc7XG4gICAgbGV0IGJvdE5hbWUgPSAnUGxheWVyIDInO1xuICAgIGxldCBwbGF5ZXJOYW1lUG9zID0ge1xuICAgICAgeDogdGhpcy5wbGF5ZXJIcFBvcy54IC0gTEVWRUxfQ09OU1RBTlRTLk9GRlNFVCxcbiAgICAgIHk6IHRoaXMucGxheWVySHBQb3MueSArIExFVkVMX0NPTlNUQU5UUy5USU1FUl9SQURJVVMgKyA0XG4gICAgfTtcbiAgICBsZXQgYm90TmFtZVBvcyA9IHtcbiAgICAgIHg6IHRoaXMuYm90SHBQb3MueCArIExFVkVMX0NPTlNUQU5UUy5PRkZTRVQsXG4gICAgICB5OiB0aGlzLmJvdEhwUG9zLnkgKyBMRVZFTF9DT05TVEFOVFMuVElNRVJfUkFESVVTICsgNFxuICAgIH07XG5cbiAgICB0aGlzLmN0eC5mb250ID0gJzMycHggVHJlYnVjaGV0IE1TJztcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDAuNTtcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IENPTE9SX1BBTEVUVEUuU0VDT05EQVJZO1xuICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9ICdyaWdodCc7XG4gICAgdGhpcy5jdHguZmlsbFRleHQocGxheWVyTmFtZSwgcGxheWVyTmFtZVBvcy54LCBwbGF5ZXJOYW1lUG9zLnkpO1xuICAgIHRoaXMuY3R4LnN0cm9rZVRleHQocGxheWVyTmFtZSwgcGxheWVyTmFtZVBvcy54LCBwbGF5ZXJOYW1lUG9zLnkpO1xuXG4gICAgdGhpcy5jdHgudGV4dEFsaWduID0gJ2xlZnQnO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KGJvdE5hbWUsIGJvdE5hbWVQb3MueCwgYm90TmFtZVBvcy55KTtcbiAgICB0aGlzLmN0eC5zdHJva2VUZXh0KGJvdE5hbWUsIGJvdE5hbWVQb3MueCwgYm90TmFtZVBvcy55KTtcbiAgfVxuXG4gIGRyYXdQYXVzZSgpIHtcbiAgICAvLyB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAvLyAvLyB0aGlzLmN0eC5yZWN0KHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIDUwIC0gMjAsIDIwLCA1MCwgNTApO1xuICAgIC8vIHRoaXMuY3R4LnJlY3QodGhpcy5kaW1lbnNpb25zLndpZHRoIC0gNTAgLSAxMCwgMjUsIDMwLCA0MCk7XG4gICAgLy8gdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICBpZiAoIXRoaXMucGF1c2VkKSB7XG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IENPTE9SX1BBTEVUVEUuUVVJTlRFUk5BUlk7XG4gICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IENPTE9SX1BBTEVUVEUuUFJJTUFSWTtcbiAgICAgIFxuICAgICAgdGhpcy5jdHgucmVjdCh0aGlzLmRpbWVuc2lvbnMud2lkdGggLSA1MCAtIDEwLCAyNSwgMTAsIDQwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMuY3R4LnJlY3QodGhpcy5kaW1lbnNpb25zLndpZHRoIC0gNTAgKyAxMCwgMjUsIDEwLCA0MCk7XG4gICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IENPTE9SX1BBTEVUVEUuUVVJTlRFUk5BUlk7XG4gICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IENPTE9SX1BBTEVUVEUuUFJJTUFSWTtcbiAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLmRpbWVuc2lvbnMud2lkdGggLSA1MCAtIDEwLCAyNSk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5kaW1lbnNpb25zLndpZHRoIC0gNTAgLSAxMCwgNjUpO1xuICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIDUwICsgMjAsIDQ1KTtcbiAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAxLjU7XG5cbiAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgICAgdGhpcy5jdHguZm9udCA9ICc1NnB4IFRyZWJ1Y2hldCBNUyc7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcbiAgICAgICAgJ0dhbWUgcGF1c2VkJyxcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMixcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDIgLSAzNlxuICAgICAgKTtcbiAgICAgIHRoaXMuY3R4LnN0cm9rZVRleHQoXG4gICAgICAgICdHYW1lIHBhdXNlZCcsXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyIC0gMzZcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgICAgdGhpcy5jdHguZm9udCA9ICczNnB4IFRyZWJ1Y2hldCBNUyc7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcbiAgICAgICAgJ1ByZXNzIHBsYXkgdG8gY29udGludWUnLFxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLFxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiArIDM2XG4gICAgICApO1xuICAgICAgdGhpcy5jdHguc3Ryb2tlVGV4dChcbiAgICAgICAgJ1ByZXNzIHBsYXkgdG8gY29udGludWUnLFxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLFxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiArIDM2XG4gICAgICApXG4gICAgfTtcbiAgfVxuXG4gIGRyYXdCYWNrZ3JvdW5kKCkge1xuICAgIGxldCBiYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XG4gICAgYmFja2dyb3VuZC5zcmMgPSAnZnJvbnRlbmQvYXNzZXRzL2ltYWdlcy9nYW1lLWJhY2tncm91bmQuanBnJztcbiAgICAvLyBiYWNrZ3JvdW5kLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCAwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgIC8vIH1cbiAgfVxuXG4gIC8vIFRPRE86IFByb2JhYmx5IHRlbXBvcmFyeVxuICBkcmF3Rmxvb3IoKSB7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ0JST1dOJztcbiAgICB0aGlzLmN0eC5maWxsUmVjdChcbiAgICAgIDAsIFxuICAgICAgdGhpcy5kaW1lbnNpb25zLmhlaWdodCAtIDEsIFxuICAgICAgdGhpcy5kaW1lbnNpb25zLndpZHRoLCBcbiAgICAgIDE1NVxuICAgICk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9