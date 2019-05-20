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
      y: this.dimensions.height - AVATAR_CONSTANTS.AVATAR_DIMENSIONS.height - 150
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
        if (this.pos.y === this.dimensions.height - 155 - AVATAR_CONSTANTS.AVATAR_DIMENSIONS.height) {
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
    if (this.pos.y > this.dimensions.height - 155 - AVATAR_CONSTANTS.AVATAR_DIMENSIONS.height) {
      this.pos.y = this.dimensions.height - 155 - AVATAR_CONSTANTS.AVATAR_DIMENSIONS.height;
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
      this.dimensions.height - 155, 
      this.dimensions.width, 
      155
    );
  }
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvYXZhdGFyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2VudHJ5LmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvbGV2ZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLFNBQVMsY0FBYztBQUN2QixTQUFTLGNBQWM7QUFDdkIsWUFBWSxhQUFhO0FBQ3pCLFNBQVMsYUFBYTtBQUN0QixHQUFHO0FBQ0g7QUFDQSxTQUFTLGNBQWM7QUFDdkIsU0FBUyxjQUFjO0FBQ3ZCLFlBQVksYUFBYTtBQUN6QixTQUFTLGFBQWE7QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN6V0E7QUFBQTtBQUEyQjs7QUFFM0I7QUFDQTtBQUNBLE1BQU0sNkNBQUs7QUFDWCxDQUFDLEU7Ozs7Ozs7Ozs7OztBQ0xEO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2xFQTtBQUFBO0FBQUE7QUFBQTtBQUE0QjtBQUNFOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLDhDQUFLO0FBQzFCLHVCQUF1QiwrQ0FBTTtBQUM3Qix1QkFBdUIsK0NBQU07QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFlBQVk7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN2V0E7QUFBQTtBQUFBO0FBQXdDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsK0JBQStCLG9EQUFXO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUywyQkFBMkI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDJCQUEyQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoiLi9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Zyb250ZW5kL2VudHJ5LmpzXCIpO1xuIiwiY29uc3QgQVZBVEFSX0NPTlNUQU5UUyA9IHtcbiAgQVZBVEFSX0RJTUVOU0lPTlM6IHtcbiAgICB3aWR0aDogMTUwLFxuICAgIGhlaWdodDogMzAwXG4gIH0sXG4gIEdSQVZJVFk6IC0xLjgsXG4gIFAxX01PVkVNRU5UOiB7XG4gICAgODc6IHsgeDogMCwgeTogLTEgfSxcbiAgICA2NTogeyB4OiAtMSwgeTogMCB9LFxuICAgIC8vIDgzOiB7IHg6IDAsIHk6IDEgfSxcbiAgICA2ODogeyB4OiAxLCB5OiAwIH0sXG4gIH0sXG4gIFAyX01PVkVNRU5UOiB7XG4gICAgMzg6IHsgeDogMCwgeTogLTEgfSxcbiAgICAzNzogeyB4OiAtMSwgeTogMCB9LFxuICAgIC8vIDQwOiB7IHg6IDAsIHk6IDEgfSxcbiAgICAzOTogeyB4OiAxLCB5OiAwIH0sXG4gIH0sXG4gIE1PVkVNRU5UX1NQRUVEOiB7XG4gICAgeDogMTAsXG4gICAgeTogMzBcbiAgfSxcbiAgTUFYX0hFQUxUSDogMjAwLFxuICBTUklURVNIRUVUOiB7XG4gICAgV0FMS0lORzoge1xuICAgICAgMToge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAyMDIsXG4gICAgICAgIHc6IDUwLFxuICAgICAgICBoOiA5OFxuICAgICAgfSxcbiAgICAgIDI6IHtcbiAgICAgICAgeDogNTAsXG4gICAgICAgIHk6IDIwMixcbiAgICAgICAgdzogNTAsXG4gICAgICAgIGg6IDk4XG4gICAgICB9LFxuICAgICAgMzoge1xuICAgICAgICB4OiAxMDAsXG4gICAgICAgIHk6IDIwMixcbiAgICAgICAgdzogNjUsXG4gICAgICAgIGg6IDk4XG4gICAgICB9LFxuICAgICAgNDoge1xuICAgICAgICB4OiAxNjUsXG4gICAgICAgIHk6IDIwMixcbiAgICAgICAgdzogNzUsXG4gICAgICAgIGg6IDk4XG4gICAgICB9LFxuICAgICAgNToge1xuICAgICAgICB4OiAyNDAsXG4gICAgICAgIHk6IDIwMixcbiAgICAgICAgdzogNjAsXG4gICAgICAgIGg6IDk4XG4gICAgICB9LFxuICAgICAgNjoge1xuICAgICAgICB4OiAzMDAsXG4gICAgICAgIHk6IDIwMyxcbiAgICAgICAgdzogNzAsXG4gICAgICAgIGg6IDk3XG4gICAgICB9LFxuICAgICAgNzoge1xuICAgICAgICB4OiAzNzAsXG4gICAgICAgIHk6IDIwMixcbiAgICAgICAgdzogODAsXG4gICAgICAgIGg6IDk4XG4gICAgICB9XG4gICAgfSxcbiAgICBJRExFOiB7XG4gICAgICAxOiB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDMwMSxcbiAgICAgICAgdzogNzUsXG4gICAgICAgIGg6IDk2XG4gICAgICB9LFxuICAgICAgMjoge1xuICAgICAgICB4OiA3NSxcbiAgICAgICAgeTogMzAxLFxuICAgICAgICB3OiA3NSxcbiAgICAgICAgaDogOTZcbiAgICAgIH0sXG4gICAgICAzOiB7XG4gICAgICAgIHg6IDE1MCxcbiAgICAgICAgeTogMzAxLFxuICAgICAgICB3OiA3NSxcbiAgICAgICAgaDogOTZcbiAgICAgIH0sXG4gICAgICA0OiB7XG4gICAgICAgIHg6IDIyNSxcbiAgICAgICAgeTogMzAxLFxuICAgICAgICB3OiA3NSxcbiAgICAgICAgaDogOTZcbiAgICAgIH0sXG4gICAgICA1OiB7XG4gICAgICAgIHg6IDMwMCxcbiAgICAgICAgeTogMzAxLFxuICAgICAgICB3OiA3NSxcbiAgICAgICAgaDogOTZcbiAgICAgIH0sXG4gICAgICA2OiB7XG4gICAgICAgIHg6IDM3NSxcbiAgICAgICAgeTogMzAxLFxuICAgICAgICB3OiA3NSxcbiAgICAgICAgaDogOTZcbiAgICAgIH1cbiAgICB9LFxuICAgIEpVTVA6IHtcbiAgICAgIDE6IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogOTUsXG4gICAgICAgIHc6IDc0LFxuICAgICAgICBoOiAxMDdcbiAgICAgIH0sXG4gICAgICAyOiB7XG4gICAgICAgIHg6IDc0LFxuICAgICAgICB5OiA5NSxcbiAgICAgICAgdzogNzQsXG4gICAgICAgIGg6IDEwN1xuICAgICAgfSxcbiAgICAgIDM6IHtcbiAgICAgICAgeDogMTQ4LFxuICAgICAgICB5OiA5NSxcbiAgICAgICAgdzogNzQsXG4gICAgICAgIGg6IDEwN1xuICAgICAgfSxcbiAgICAgIDQ6IHtcbiAgICAgICAgeDogMjIyLFxuICAgICAgICB5OiA5NSxcbiAgICAgICAgdzogNzQsXG4gICAgICAgIGg6IDEwN1xuICAgICAgfSxcbiAgICAgIDU6IHtcbiAgICAgICAgeDogMjk2LFxuICAgICAgICB5OiA5NSxcbiAgICAgICAgdzogNzQsXG4gICAgICAgIGg6IDEwN1xuICAgICAgfVxuICAgIH0sXG4gICAgQVRUQUNLOiB7XG4gICAgICAxOiB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHc6IDEwNCxcbiAgICAgICAgaDogOTVcbiAgICAgIH0sXG4gICAgICAyOiB7XG4gICAgICAgIHg6IDEwNCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgdzogMTA0LFxuICAgICAgICBoOiA5NVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdmF0YXIge1xuICBjb25zdHJ1Y3RvcihjdHgsIGRpbWVuc2lvbnMsIHBsYXllck51bSkge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnM7XG4gICAgdGhpcy5wbGF5ZXJOdW0gPSBwbGF5ZXJOdW07XG5cbiAgICBsZXQgc3RhcnRpbmdYID0gcGxheWVyTnVtID09PSAxID8gNTAgOiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLSA1MDtcbiAgICB0aGlzLnBvcyA9IHtcbiAgICAgIHg6IHN0YXJ0aW5nWCAtIEFWQVRBUl9DT05TVEFOVFMuQVZBVEFSX0RJTUVOU0lPTlMud2lkdGggLyAyLFxuICAgICAgeTogdGhpcy5kaW1lbnNpb25zLmhlaWdodCAtIEFWQVRBUl9DT05TVEFOVFMuQVZBVEFSX0RJTUVOU0lPTlMuaGVpZ2h0IC0gMTUwXG4gICAgfTtcblxuICAgIHRoaXMudmVsID0ge1xuICAgICAgdng6IDAsXG4gICAgICB2eTogMFxuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBoZWFsdGg6IEFWQVRBUl9DT05TVEFOVFMuTUFYX0hFQUxUSCxcbiAgICAgIGJhc2ljQXR0YWNraW5nOiBmYWxzZSxcbiAgICAgIGRhbWFnZURvbmU6IGZhbHNlLFxuICAgICAgYmFzaWNBdHRhY2tIaXRib3g6IHtcbiAgICAgICAgdzogQVZBVEFSX0NPTlNUQU5UUy5BVkFUQVJfRElNRU5TSU9OUy53aWR0aCAvIDIgKyA0MCxcbiAgICAgICAgaDogMTBcbiAgICAgIH0sXG4gICAgICBiYXNpY0F0dGFja0RhbWFnZTogMTAsXG4gICAgICBmYWNpbmc6IHBsYXllck51bSA9PT0gMSA/IDEgOiAtMSxcbiAgICAgIGJhc2ljQXR0YWNrS2V5Y29kZTogcGxheWVyTnVtID09PSAxID8gNzQgOiA5NyxcbiAgICAgIG1vdmVtZW50OiAnaWRsZSdcbiAgICB9XG5cbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMua2V5Q29kZU1vdmVtZW50ID0gdGhpcy5wbGF5ZXJOdW0gPT09IDEgPyBcbiAgICAgIEFWQVRBUl9DT05TVEFOVFMuUDFfTU9WRU1FTlQgOiBBVkFUQVJfQ09OU1RBTlRTLlAyX01PVkVNRU5UO1xuICAgIHRoaXMua2V5cHJlc3NQT0pPID0ge307XG4gICAgT2JqZWN0LmtleXModGhpcy5rZXlDb2RlTW92ZW1lbnQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgdGhpcy5rZXlwcmVzc1BPSk9ba2V5XSA9IGZhbHNlO1xuICAgIH0pO1xuICAgIHRoaXMuc3ByaXRlU2hlZXQgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnNwcml0ZVNoZWV0LnNyYyA9ICdmcm9udGVuZC9hc3NldHMvaW1hZ2VzL3J5dS1zcHJpdGUtc2hlZXQucG5nJztcblxuICAgIHRoaXMuYW5pbWF0aW9uVGltZXIgPSAwO1xuXG4gICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmF3QXZhdGFyID0gdGhpcy5kcmF3QXZhdGFyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb3ZlQXZhdGFyID0gdGhpcy5tb3ZlQXZhdGFyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdG9wQXZhdGFyID0gdGhpcy5zdG9wQXZhdGFyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGVja0JvdW5kYXJ5ID0gdGhpcy5jaGVja0JvdW5kYXJ5LmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbiA9IHRoaXMudXBkYXRlUG9zaXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmJhc2ljQXR0YWNrID0gdGhpcy5iYXNpY0F0dGFjay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJhd0Jhc2ljQXR0YWNrID0gdGhpcy5kcmF3QmFzaWNBdHRhY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUF0dGFjayA9IHRoaXMuaGFuZGxlQXR0YWNrLmJpbmQodGhpcyk7XG5cbiAgICAvL1RPRE86IElTIFRIRVJFIEEgQkVUVEVSIFNPTFVUSU9OP1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUF0dGFjayk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMubW92ZUF2YXRhcik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLnN0b3BBdmF0YXIpO1xuICB9XG5cbiAgYW5pbWF0ZShwYXVzZWQpIHtcbiAgICB0aGlzLnBhdXNlZCA9ICEhcGF1c2VkO1xuICAgIHRoaXMuYW5pbWF0aW9uVGltZXIgKz0gMC4wNTtcbiAgICBpZiAoIXRoaXMucGF1c2VkKSB7XG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnZlbC52eCA9PT0gMCAmJiB0aGlzLnZlbC52eSA9PT0gMCkge1xuICAgICAgdGhpcy5zdGF0ZS5tb3ZlbWVudCA9ICdpZGxlJztcbiAgICB9XG4gICAgbGV0IGJvdW5kcztcbiAgICBpZiAoIXRoaXMucGF1c2VkKSB7XG4gICAgICB0aGlzLmRyYXdCYXNpY0F0dGFjaygpO1xuICAgICAgYm91bmRzID0ge1xuICAgICAgICB4OiB0aGlzLnBvcy54ICsgdGhpcy5zdGF0ZS5mYWNpbmcgKiB0aGlzLnN0YXRlLmJhc2ljQXR0YWNrSGl0Ym94LncsXG4gICAgICAgIHk6IHRoaXMucG9zLnkgKyB0aGlzLnN0YXRlLmJhc2ljQXR0YWNrSGl0Ym94LmhcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5kcmF3QXZhdGFyKCk7XG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIHVwZGF0ZVBvc2l0aW9uKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMua2V5cHJlc3NQT0pPKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmICh0aGlzLmtleXByZXNzUE9KT1trZXldKSB7XG4gICAgICAgIC8vIEtleXByZXNzIG1vdmVtZW50XG4gICAgICAgIGlmICh0aGlzLmtleUNvZGVNb3ZlbWVudFtrZXldLnggIT09IDApIHtcbiAgICAgICAgICB0aGlzLnZlbC52eCA9IHRoaXMua2V5Q29kZU1vdmVtZW50W2tleV0ueFxuICAgICAgICAgICAgKiBBVkFUQVJfQ09OU1RBTlRTLk1PVkVNRU5UX1NQRUVELng7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5mYWNpbmcgPSB0aGlzLmtleUNvZGVNb3ZlbWVudFtrZXldLng7XG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGUubW92ZW1lbnQgIT09ICdqdW1wJykge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5tb3ZlbWVudCA9ICdtb3ZlWCc7XG4gICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gUHJldmVudCBpbmZpbml0ZSBqdW1wXG4gICAgICAgIGlmICh0aGlzLnBvcy55ID09PSB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC0gMTU1IC0gQVZBVEFSX0NPTlNUQU5UUy5BVkFUQVJfRElNRU5TSU9OUy5oZWlnaHQpIHtcbiAgICAgICAgICBpZiAodGhpcy5rZXlDb2RlTW92ZW1lbnRba2V5XS55ICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnZlbC52eSA9IHRoaXMua2V5Q29kZU1vdmVtZW50W2tleV0ueVxuICAgICAgICAgICAgICAqIEFWQVRBUl9DT05TVEFOVFMuTU9WRU1FTlRfU1BFRUQueTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUubW92ZW1lbnQgPSAnanVtcCc7XG4gICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnZlbC52eSAtPSBBVkFUQVJfQ09OU1RBTlRTLkdSQVZJVFk7XG4gICAgdGhpcy5wb3MueSArPSB0aGlzLnZlbC52eTtcbiAgICB0aGlzLnBvcy54ICs9IHRoaXMudmVsLnZ4O1xuICAgIHRoaXMuY2hlY2tCb3VuZGFyeSgpO1xuICB9XG5cbiAgbW92ZUF2YXRhcihlKSB7XG4gICAgaWYgKCF0aGlzLnBhdXNlZCAmJiAhZS5yZXBlYXQpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmtleUNvZGVNb3ZlbWVudCkuaW5jbHVkZXMoZS5rZXlDb2RlLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgIHRoaXMua2V5cHJlc3NQT0pPW2Uua2V5Q29kZS50b1N0cmluZygpXSA9IHRydWU7XG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdG9wQXZhdGFyKGUpIHtcbiAgICB0aGlzLnZlbC52eCA9IDA7XG4gICAgdGhpcy5rZXlwcmVzc1BPSk9bZS5rZXlDb2RlLnRvU3RyaW5nKCldID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICB9XG4gIFxuICBkcmF3QXZhdGFyKCkge1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMucGxheWVyTnVtID09PSAxID8gJ0JsdWUnIDogJ1JlZCc7XG4gICAgbGV0IGN1cnJlbnRTcHJpdGVTbGljZUlkeDtcbiAgICBsZXQgY3VycmVudFNwcml0ZVNsaWNlO1xuICAgIGxldCBhdHRhY2tPZmZzZXQgPSAwO1xuICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5tb3ZlbWVudCkge1xuICAgICAgY2FzZSAnaWRsZSc6XG4gICAgICAgIGN1cnJlbnRTcHJpdGVTbGljZUlkeCA9IDEgKyBNYXRoLnJvdW5kKHRoaXMuYW5pbWF0aW9uVGltZXIgJSAoT2JqZWN0LmtleXMoQVZBVEFSX0NPTlNUQU5UUy5TUklURVNIRUVULklETEUpLmxlbmd0aCAtIDEpKTtcbiAgICAgICAgY3VycmVudFNwcml0ZVNsaWNlID0gQVZBVEFSX0NPTlNUQU5UUy5TUklURVNIRUVULklETEVbY3VycmVudFNwcml0ZVNsaWNlSWR4XTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtb3ZlWCc6XG4gICAgICAgIGN1cnJlbnRTcHJpdGVTbGljZUlkeCA9IDEgKyBNYXRoLnJvdW5kKDIgKiB0aGlzLmFuaW1hdGlvblRpbWVyICUgKE9iamVjdC5rZXlzKEFWQVRBUl9DT05TVEFOVFMuU1JJVEVTSEVFVC5XQUxLSU5HKS5sZW5ndGggLSAxKSk7XG4gICAgICAgIGN1cnJlbnRTcHJpdGVTbGljZSA9IEFWQVRBUl9DT05TVEFOVFMuU1JJVEVTSEVFVC5XQUxLSU5HW2N1cnJlbnRTcHJpdGVTbGljZUlkeF07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnanVtcCc6XG4gICAgICAgIGN1cnJlbnRTcHJpdGVTbGljZUlkeCA9IDEgKyBNYXRoLnJvdW5kKDIgKiB0aGlzLmFuaW1hdGlvblRpbWVyICUgKE9iamVjdC5rZXlzKEFWQVRBUl9DT05TVEFOVFMuU1JJVEVTSEVFVC5KVU1QKS5sZW5ndGggLSAxKSk7XG4gICAgICAgIGN1cnJlbnRTcHJpdGVTbGljZSA9IEFWQVRBUl9DT05TVEFOVFMuU1JJVEVTSEVFVC5KVU1QW2N1cnJlbnRTcHJpdGVTbGljZUlkeF07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgICAgY3VycmVudFNwcml0ZVNsaWNlSWR4ID0gMSArIE1hdGgucm91bmQodGhpcy5hbmltYXRpb25UaW1lciAlIChPYmplY3Qua2V5cyhBVkFUQVJfQ09OU1RBTlRTLlNSSVRFU0hFRVQuQVRUQUNLKS5sZW5ndGggLSAxKSk7XG4gICAgICAgIGN1cnJlbnRTcHJpdGVTbGljZSA9IEFWQVRBUl9DT05TVEFOVFMuU1JJVEVTSEVFVC5BVFRBQ0tbY3VycmVudFNwcml0ZVNsaWNlSWR4XTtcbiAgICAgICAgYXR0YWNrT2Zmc2V0ID0gNTA7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLmN0eC5zYXZlKCk7XG4gICAgdGhpcy5jdHguc2NhbGUodGhpcy5zdGF0ZS5mYWNpbmcsIDEpO1xuICAgIGxldCBvZmZzZXQgPSAwO1xuICAgIGlmICh0aGlzLnN0YXRlLmZhY2luZyA9PT0gLTEpIHtcbiAgICAgIG9mZnNldCA9IEFWQVRBUl9DT05TVEFOVFMuQVZBVEFSX0RJTUVOU0lPTlMud2lkdGg7XG4gICAgfVxuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgIHRoaXMuc3ByaXRlU2hlZXQsXG4gICAgICBjdXJyZW50U3ByaXRlU2xpY2UueCxcbiAgICAgIGN1cnJlbnRTcHJpdGVTbGljZS55LFxuICAgICAgY3VycmVudFNwcml0ZVNsaWNlLncsXG4gICAgICBjdXJyZW50U3ByaXRlU2xpY2UuaCxcbiAgICAgIHRoaXMuc3RhdGUuZmFjaW5nICogdGhpcy5wb3MueCAtIG9mZnNldCxcbiAgICAgIHRoaXMucG9zLnksXG4gICAgICBBVkFUQVJfQ09OU1RBTlRTLkFWQVRBUl9ESU1FTlNJT05TLndpZHRoICsgYXR0YWNrT2Zmc2V0LFxuICAgICAgQVZBVEFSX0NPTlNUQU5UUy5BVkFUQVJfRElNRU5TSU9OUy5oZWlnaHRcbiAgICApO1xuICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIGNoZWNrQm91bmRhcnkoKSB7XG4gICAgbGV0IG1heE9mZnNldCA9IHRoaXMucGxheWVyTnVtID09PSAxID8gMCA6IEFWQVRBUl9DT05TVEFOVFMuQVZBVEFSX0RJTUVOU0lPTlMud2lkdGg7XG4gICAgbGV0IG1pbk9mZnNldCA9IHRoaXMucGxheWVyTnVtID09PSAyID8gMCA6IEFWQVRBUl9DT05TVEFOVFMuQVZBVEFSX0RJTUVOU0lPTlMud2lkdGg7XG4gICAgaWYgKHRoaXMucG9zLnggPCAwKSB7XG4gICAgICB0aGlzLnBvcy54ID0gMDtcbiAgICAgIHRoaXMudmVsLnZ4ID0gMDtcbiAgICB9IGVsc2UgaWYgKHRoaXMucG9zLnggPiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLSBtYXhPZmZzZXQgLSBtaW5PZmZzZXQpIHtcbiAgICAgIHRoaXMucG9zLnggPSB0aGlzLmRpbWVuc2lvbnMud2lkdGggLSBtYXhPZmZzZXQgLSBtaW5PZmZzZXQ7XG4gICAgICB0aGlzLnZlbC52eCA9IDA7XG4gICAgfTtcbiAgICBpZiAodGhpcy5wb3MueSA+IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLSAxNTUgLSBBVkFUQVJfQ09OU1RBTlRTLkFWQVRBUl9ESU1FTlNJT05TLmhlaWdodCkge1xuICAgICAgdGhpcy5wb3MueSA9IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLSAxNTUgLSBBVkFUQVJfQ09OU1RBTlRTLkFWQVRBUl9ESU1FTlNJT05TLmhlaWdodDtcbiAgICAgIHRoaXMudmVsLnZ5ID0gMDtcbiAgICB9IGVsc2UgaWYgKHRoaXMucG9zLnkgPCAwKSB7XG4gICAgICB0aGlzLnBvcy55ID0gMDtcbiAgICB9XG4gIH1cblxuICBiYXNpY0F0dGFjaygpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuYmFzaWNBdHRhY2tpbmcpIHtcbiAgICAgIHRoaXMuc3RhdGUuYmFzaWNBdHRhY2tpbmcgPSB0cnVlO1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnN0YXRlLmJhc2ljQXR0YWNraW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RhdGUuZGFtYWdlRG9uZSA9IGZhbHNlO1xuICAgICAgfSwgMjUwKTtcbiAgICB9XG4gIH1cbiAgXG4gIGRyYXdCYXNpY0F0dGFjaygpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5iYXNpY0F0dGFja2luZykge1xuICAgICAgdGhpcy5zdGF0ZS5tb3ZlbWVudCA9ICdhdHRhY2snO1xuICAgIH07XG4gIH1cblxuICBoYW5kbGVBdHRhY2soZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IHRoaXMuc3RhdGUuYmFzaWNBdHRhY2tLZXljb2RlKSB7XG4gICAgICB0aGlzLmJhc2ljQXR0YWNrKCk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IEFyZW5hIGZyb20gXCIuL2dhbWVcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuICBuZXcgQXJlbmEoY2FudmFzKTtcbn0pOyIsImNvbnN0IEVOVklST05NRU5UX0NPTlNUQU5UUyA9IHtcbiAgR1JBVklUWTogLTAuNyxcbiAgRU5WSVJPTk1FTlRfRElNRU5TSU9OUzogOTQsXG4gIFNBS1VSQV9TUFJJVEVTOiAzLFxuICBTTk9XRkxBS0VfU1BSSVRFUzogOSxcbiAgRU5WSVJPTk1FTlRfUkVTSVpFOiAyNVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnZpcm9ubWVudCB7XG4gIGNvbnN0cnVjdG9yKGN0eCwgZGltZW5zaW9ucywgdHlwZSkge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnM7XG4gICAgdGhpcy5wb3MgPSB7XG4gICAgICB4OiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiB0aGlzLmRpbWVuc2lvbnMud2lkdGgpLFxuICAgICAgeTogLTk0XG4gICAgfVxuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3Nha3VyYSc6XG4gICAgICAgIHRoaXMucmFuZFNwcml0ZSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChFTlZJUk9OTUVOVF9DT05TVEFOVFMuU0FLVVJBX1NQUklURVMgLSAxKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc25vd2ZsYWtlJzpcbiAgICAgICAgdGhpcy5yYW5kU3ByaXRlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKEVOVklST05NRU5UX0NPTlNUQU5UUy5TTk9XRkxBS0VfU1BSSVRFUyAtIDEpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy5kZWx0YXggPSBNYXRoLnJhbmRvbSgpICogMC41IC0gMC4yNTtcbiAgICB0aGlzLm1vdmUgPSB0aGlzLm1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRyYXdFbnZpcm9ubWVudCA9IHRoaXMuZHJhd0Vudmlyb25tZW50LmJpbmQodGhpcyk7XG4gICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gIH1cblxuICBhbmltYXRlKCkge1xuICAgIHRoaXMubW92ZSgpO1xuICAgIHRoaXMuZHJhd0Vudmlyb25tZW50KCk7XG4gIH1cblxuICBtb3ZlKCkge1xuICAgIHRoaXMucG9zLnkgLT0gRU5WSVJPTk1FTlRfQ09OU1RBTlRTLkdSQVZJVFk7XG4gICAgdGhpcy5wb3MueCArPSB0aGlzLmRlbHRheDtcbiAgfVxuXG4gIGRyYXdFbnZpcm9ubWVudCgpIHtcbiAgICBsZXQgZW52aXJvbm1lbnQgPSBuZXcgSW1hZ2UoKTtcbiAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgY2FzZSAnc2FrdXJhJzpcbiAgICAgICAgZW52aXJvbm1lbnQuc3JjID0gJ2Zyb250ZW5kL2Fzc2V0cy9pbWFnZXMvc2FrdXJhLnBuZyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc25vd2ZsYWtlJzpcbiAgICAgICAgZW52aXJvbm1lbnQuc3JjID0gJ2Zyb250ZW5kL2Fzc2V0cy9pbWFnZXMvc25vd2ZsYWtlLnBuZyc7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICBlbnZpcm9ubWVudCwgXG4gICAgICBFTlZJUk9OTUVOVF9DT05TVEFOVFMuRU5WSVJPTk1FTlRfRElNRU5TSU9OUyAqIHRoaXMucmFuZFNwcml0ZSwgXG4gICAgICAwLFxuICAgICAgRU5WSVJPTk1FTlRfQ09OU1RBTlRTLkVOVklST05NRU5UX0RJTUVOU0lPTlMsXG4gICAgICBFTlZJUk9OTUVOVF9DT05TVEFOVFMuRU5WSVJPTk1FTlRfRElNRU5TSU9OUyxcbiAgICAgIHRoaXMucG9zLngsXG4gICAgICB0aGlzLnBvcy55LFxuICAgICAgRU5WSVJPTk1FTlRfQ09OU1RBTlRTLkVOVklST05NRU5UX1JFU0laRSxcbiAgICAgIEVOVklST05NRU5UX0NPTlNUQU5UUy5FTlZJUk9OTUVOVF9SRVNJWkUsXG4gICAgKTtcbiAgfVxufSIsImltcG9ydCBMZXZlbCBmcm9tIFwiLi9sZXZlbFwiO1xuaW1wb3J0IEF2YXRhciBmcm9tICcuL2F2YXRhcic7XG5cbmNvbnN0IEFWQVRBUl9DT05TVEFOVFMgPSB7XG4gIEFWQVRBUl9ESU1FTlNJT05TOiB7XG4gICAgd2lkdGg6IDE1MCxcbiAgICBoZWlnaHQ6IDMwMFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFyZW5hIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLmRpbWVuc2lvbnMgPSB7IHdpZHRoOiBjYW52YXMud2lkdGgsIGhlaWdodDogY2FudmFzLmhlaWdodCB9O1xuICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5zb3VuZCA9IGZhbHNlO1xuICAgIHRoaXMuaGVscE1vZGFsID0gZmFsc2U7XG4gICAgdGhpcy53aW5uZXIgPSBudWxsO1xuXG4gICAgdGhpcy5kb2N1bWVudE9mZnNldFggPSAoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCAtIHRoaXMuZGltZW5zaW9ucy53aWR0aCkgLyAyO1xuICAgIHRoaXMuZG9jdW1lbnRPZmZzZXRZID0gKGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0IC0gODAgLSB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KSAvIDI7XG5cbiAgICB0aGlzLnBsYXlQb3MgPSB7XG4gICAgICB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyIC0gMTEwLFxuICAgICAgeTogdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDIgKyAyOFxuICAgIH07XG4gICAgdGhpcy5wbGF5RGltZW5zaW9ucyA9IHtcbiAgICAgIGR4OiAyMjAsXG4gICAgICBkeTogNTZcbiAgICB9O1xuXG4gICAgdGhpcy5wYXVzZVBvcyA9IHtcbiAgICAgIHg6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIDYwLFxuICAgICAgeTogMjVcbiAgICB9O1xuICAgIHRoaXMucGF1c2VEaW1lbnNpb25zID0ge1xuICAgICAgZHg6IDMwLFxuICAgICAgZHk6IDQwXG4gICAgfTtcblxuICAgIHRoaXMuc291bmRQb3MgPSB7XG4gICAgICB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLSAxMzAsXG4gICAgICB5OiAyMFxuICAgIH07XG4gICAgdGhpcy5zb3VuZERpbWVuc2lvbnMgPSB7XG4gICAgICBkeDogNTAsXG4gICAgICBkeTogNTBcbiAgICB9O1xuXG4gICAgdGhpcy5oZWxwUG9zID0ge1xuICAgICAgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC0gNzAsXG4gICAgICB5OiAyMFxuICAgIH07XG4gICAgdGhpcy5oZWxwRGltZW5zaW9ucyA9IHtcbiAgICAgIGR4OiA1MCxcbiAgICAgIGR5OiA1MFxuICAgIH07XG5cbiAgICB0aGlzLnNvdW5kT2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImF1ZGlvXCIpO1xuICAgIHRoaXMuc291bmRPYmouc3JjID0gJ2Zyb250ZW5kL2Fzc2V0cy9hdWRpby91aS1vc3QubXAzJztcbiAgICB0aGlzLnNvdW5kT2JqLnNldEF0dHJpYnV0ZShcInByZWxvYWRcIiwgXCJhdXRvXCIpO1xuICAgIHRoaXMuc291bmRPYmouc2V0QXR0cmlidXRlKFwiY29udHJvbHNcIiwgXCJub25lXCIpO1xuICAgIHRoaXMuc291bmRPYmouc2V0QXR0cmlidXRlKFwibG9vcFwiLCBcInRydWVcIik7XG4gICAgdGhpcy5zb3VuZE9iai5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnNvdW5kT2JqKTtcblxuICAgIHRoaXMuZHJhd0JhY2tncm91bmQgPSB0aGlzLmRyYXdCYWNrZ3JvdW5kLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmF3SGVscCA9IHRoaXMuZHJhd0hlbHAuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVBsYXkgPSB0aGlzLmhhbmRsZVBsYXkuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVBhdXNlID0gdGhpcy5oYW5kbGVQYXVzZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlTXV0ZSA9IHRoaXMuaGFuZGxlTXV0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlSGVscCA9IHRoaXMuaGFuZGxlSGVscC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQXR0YWNrID0gdGhpcy5oYW5kbGVBdHRhY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZU1vZGFsID0gdGhpcy5oYW5kbGVNb2RhbC5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5wbGF5ID0gdGhpcy5wbGF5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZXN0YXJ0ID0gdGhpcy5yZXN0YXJ0LmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnJlc3RhcnQoKTtcbiAgfVxuXG4gIHJlc3RhcnQoKSB7XG4gICAgdGhpcy5sZXZlbCA9IG5ldyBMZXZlbCh0aGlzLmN0eCwgdGhpcy5kaW1lbnNpb25zKTtcbiAgICB0aGlzLnBsYXllcjEgPSBuZXcgQXZhdGFyKHRoaXMuY3R4LCB0aGlzLmRpbWVuc2lvbnMsIDEpO1xuICAgIHRoaXMucGxheWVyMiA9IG5ldyBBdmF0YXIodGhpcy5jdHgsIHRoaXMuZGltZW5zaW9ucywgMik7XG4gICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICB0aGlzLndpbm5lciA9IG51bGw7XG4gICAgdGhpcy5wbGF5KCk7XG4gIH1cbiAgXG4gIHBsYXkoKSB7XG4gICAgdGhpcy5jdHguY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlUGxheSk7XG4gICAgdGhpcy5hbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gIH1cbiAgXG4gIGFuaW1hdGUoKSB7XG4gICAgaWYgKCF0aGlzLmdhbWVPdmVyKSB7XG4gICAgICB0aGlzLmN0eC5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVNdXRlKTtcbiAgICAgIHRoaXMuY3R4LmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZUhlbHApO1xuICAgICAgdGhpcy5jdHguY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlUGF1c2UpO1xuICAgICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlQXR0YWNrKTtcbiAgICAgIC8vIFRPRE86IFRFTVBPUkFSWVxuICAgICAgaWYgKHRoaXMucGF1c2VkKSB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uRnJhbWUpO1xuICAgICAgICB0aGlzLmxldmVsLmFuaW1hdGUodGhpcy5wbGF5ZXIxLnN0YXRlLmhlYWx0aCwgdGhpcy5wbGF5ZXIyLnN0YXRlLmhlYWx0aCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMucGxheWVyMS5hbmltYXRlKHRydWUpO1xuICAgICAgICB0aGlzLnBsYXllcjIuYW5pbWF0ZSh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMud2lubmVyID0gdGhpcy5sZXZlbC5hbmltYXRlKHRoaXMucGxheWVyMS5zdGF0ZS5oZWFsdGgsIHRoaXMucGxheWVyMi5zdGF0ZS5oZWFsdGgpO1xuICAgICAgICBsZXQgcDFBdHRhY2tIaXRib3ggPSB0aGlzLnBsYXllcjEuYW5pbWF0ZShmYWxzZSk7XG4gICAgICAgIGxldCBwMkF0dGFja0hpdGJveCA9IHRoaXMucGxheWVyMi5hbmltYXRlKGZhbHNlKTtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyMS5zdGF0ZS5iYXNpY0F0dGFja2luZyAmJiAhdGhpcy5wbGF5ZXIxLnN0YXRlLmRhbWFnZURvbmUpIHtcbiAgICAgICAgICB0aGlzLmNoZWNrQXR0YWNrQ29sbGlzaW9uKHAxQXR0YWNrSGl0Ym94LCB0aGlzLnBsYXllcjEsIHRoaXMucGxheWVyMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGxheWVyMi5zdGF0ZS5iYXNpY0F0dGFja2luZyAmJiAhdGhpcy5wbGF5ZXIyLnN0YXRlLmRhbWFnZURvbmUpIHtcbiAgICAgICAgICB0aGlzLmNoZWNrQXR0YWNrQ29sbGlzaW9uKHAyQXR0YWNrSGl0Ym94LCB0aGlzLnBsYXllcjIsIHRoaXMucGxheWVyMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMud2lubmVyID09PSAndGltZVVwJykge1xuICAgICAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKFsncGxheWVyMScsICdwbGF5ZXIyJ10uaW5jbHVkZXModGhpcy53aW5uZXIpKSB7XG4gICAgICAgICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdHguY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlTXV0ZSk7XG4gICAgICB0aGlzLmN0eC5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVIZWxwKTtcbiAgICAgIHRoaXMuY3R4LmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZVBhdXNlKTtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uRnJhbWUpO1xuICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAvLyBEaXNwbGF5IHN0YXJ0IHNjcmVlblxuICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZCgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIE9OTFkgRk9SIFNUQVJUSU5HIFNDUkVFTlxuICBkcmF3QmFja2dyb3VuZCgpIHtcbiAgICB0aGlzLmN0eC5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVQbGF5KTtcblxuICAgIGxldCBiYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XG4gICAgYmFja2dyb3VuZC5zcmMgPSAnZnJvbnRlbmQvYXNzZXRzL2ltYWdlcy9zdGFydC1iYWNrZ3JvdW5kLmpwZyc7XG4gICAgYmFja2dyb3VuZC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwgMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICAgIFxuICAgICAgbGV0IGhlbHAgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGhlbHAuc3JjID0gJ2Zyb250ZW5kL2Fzc2V0cy9pbWFnZXMvaGVscC5wbmcnO1xuICAgICAgaGVscC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShoZWxwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGggLSA3MCwgMjAsIDUwLCA1MCk7XG4gICAgICB9O1xuICBcbiAgICAgIGxldCBtdXRlID0gbmV3IEltYWdlKCk7XG4gICAgICB0aGlzLnNvdW5kID8gXG4gICAgICBtdXRlLnNyYyA9ICdmcm9udGVuZC9hc3NldHMvaW1hZ2VzL3NwZWFrZXIucG5nJzpcbiAgICAgIG11dGUuc3JjID0gJ2Zyb250ZW5kL2Fzc2V0cy9pbWFnZXMvbXV0ZS5wbmcnXG4gICAgICBtdXRlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKG11dGUsIHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIDEzMCwgMjAsIDUwLCA1MCk7XG4gICAgICB9O1xuICBcbiAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ1dISVRFJztcbiAgXG4gICAgICBsZXQgaGVhZGVyID0gbmV3IEltYWdlKCk7XG4gICAgICBoZWFkZXIuc3JjID0gJ2Zyb250ZW5kL2Fzc2V0cy9pbWFnZXMvaGVhZGVyLXdoaXRlLnBuZyc7XG4gICAgICBoZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgaGVhZGVyLCBcbiAgICAgICAgICAyMCwgXG4gICAgICAgICAgdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDIgLSAxMDAsIFxuICAgICAgICAgIHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIDQwLCBcbiAgICAgICAgICA1NlxuICAgICAgICApO1xuICAgICAgfVxuICBcbiAgICAgIHN3aXRjaCAodGhpcy53aW5uZXIpIHtcbiAgICAgICAgY2FzZSBudWxsOlxuICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnNTZweCBUcmVidWNoZXQgTVMnO1xuICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFxuICAgICAgICAgICAgJ1BsYXkgbm93IScsXG4gICAgICAgICAgICB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLFxuICAgICAgICAgICAgdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDIgKyA3MlxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3RpbWVVcCc6XG4gICAgICAgICAgdGhpcy5jdHguZm9udCA9ICczNnB4IFRyZWJ1Y2hldCBNUyc7XG4gICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXG4gICAgICAgICAgICAnVGltZSByYW4gb3V0Li4uIGhhdmUgeW91IHRyaWVkIGF0dGFja2luZz8nLFxuICAgICAgICAgICAgdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMixcbiAgICAgICAgICAgIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyICsgMTJcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnNTZweCBUcmVidWNoZXQgTVMnO1xuICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFxuICAgICAgICAgICAgJ1BsYXkgYWdhaW4/JyxcbiAgICAgICAgICAgIHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsXG4gICAgICAgICAgICB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiArIDcyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aGlzLmN0eC5mb250ID0gJzM2cHggVHJlYnVjaGV0IE1TJztcbiAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcbiAgICAgICAgICAgIGBDb25ncmF0dWxhdGlvbnMsICR7dGhpcy53aW5uZXJ9IHdvbiFgLFxuICAgICAgICAgICAgdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMixcbiAgICAgICAgICAgIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyICsgOFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5jdHguZm9udCA9ICc1NnB4IFRyZWJ1Y2hldCBNUyc7XG4gICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXG4gICAgICAgICAgICAnUGxheSBhZ2Fpbj8nLFxuICAgICAgICAgICAgdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMixcbiAgICAgICAgICAgIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyICsgNzJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH07XG4gICAgXG4gIH1cblxuICBkcmF3SGVscCgpIHtcbiAgICB0aGlzLmN0eC5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVNb2RhbCk7XG5cbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAwLjcpJztcbiAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSc7XG4gICAgdGhpcy5jdHguZmlsbFJlY3QoMTIwLCA2MCwgdGhpcy5kaW1lbnNpb25zLndpZHRoIC0gMjQwLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC0gMTIwKTtcblxuICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9ICdsZWZ0JztcbiAgICB0aGlzLmN0eC5mb250ID0gJzU2cHggQXJpYWwnO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoJ0hvdyB0byBwbGF5OicsIDIxMCwgMTIwKTtcblxuICAgIHRoaXMuY3R4LmZvbnQgPSAnMjRweCBUcmVidWNoZXQgTVMnO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoJ1BsYXllciAxOiBXID0gSnVtcCwgQSA9IExlZnQsIEQgPSBSaWdodCwgSiA9IEF0dGFjaycsIDIxMCwgMTUwKTtcbiAgICB0aGlzLmN0eC5maWxsVGV4dCgnUGxheWVyIDI6IF4gPSBKdW1wLCA8ID0gTGVmdCwgPiA9IFJpZ2h0LCAxIChudW1wYWQpID0gQXR0YWNrJywgMjEwLCAxODApO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdZb3UgaGF2ZSB1bnRpbCB0aGUgdGltZSBydW5zIG91dCB0byBkZWZlYXQgdGhlIG90aGVyIHBsYXllciEnLCAyMTAsIDIxMCk7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoJ01vdmUgZXJyYXRpY2FsbHkgYW5kIGp1bXAgdG8gYXZvaWQgYXR0YWNrcyBhbmQgb3V0c21hcnQgeW91ciBvcHBvbmVudC4nLCAyMTAsIDI0MCk7XG5cbiAgICB0aGlzLmN0eC5mb250ID0gJzU2cHggQXJpYWwnO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoJ0NyZWRpdHM6JywgMjEwLCAyOTApO1xuXG4gICAgdGhpcy5jdHguZm9udCA9ICcxOHB4IFRyZWJ1Y2hldCBNUyc7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICB0aGlzLmN0eC5maWxsVGV4dCgnU3RhcnRpbmcgc2NyZWVuOiBodHRwOi8vd3d3LmF2b2lkaW5ndGhlcHVkZGxlLmNvbS9uZXdzLzIwMTUvMTIvMjEvLi4uJywgMjEwLCAzMjApO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdjb21wbGV0ZS1iYXRjaC1vZi10ZWtrZW4tNy1mYXRlZC1yZXRyaWJ1dGlvbi1pbWFnZXMtaW4taGlnaC5odG1sJywgMjEwLCAzNDApO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdTYWt1cmEgcGV0YWxzOiBodHRwczovL3d3dy4xMjNyZi5jb20vcGhvdG9fMTA5Nzc0MDgxX3N0b2NrLXZlY3Rvci0uLi4nLCAyMTAsIDM2MCk7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoJ3Nha3VyYS1wZXRhbHMtZmFsbGluZy1kb3duLXJvbWFudGljLXBpbmstc2lsa3ktbWVkaXVtLWZsb3dlcnMtc3BhcnNlLS4uLicsIDIxMCwgMzgwKTtcbiAgICB0aGlzLmN0eC5maWxsVGV4dCgnZmx5aW5nLWNoZXJyeS1wZXRhbHMtdG9wLWdyYWRpZS5odG1sJywgMjEwLCA0MDApO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdTbm93Zmxha2VzOiBodHRwczovL3d3dy5mcmVlcGlrLmNvbS9mcmVlLXBob3Rvcy12ZWN0b3JzL2NocmlzdG1hcy4uLicsIDIxMCwgNDIwKTtcbiAgICB0aGlzLmN0eC5maWxsVGV4dCgnKENocmlzdG1hcyB2ZWN0b3IgY3JlYXRlZCBieSBmcmVlcGlrKScsIDIxMCwgNDQwKTtcbiAgICB0aGlzLmN0eC5maWxsVGV4dCgnQXJlbmEgYmFja2dyb3VuZDogaHR0cHM6Ly93YWxscGFwZXJjYXZlLmNvbS93L3dwMjYwMzQ4MCcsIDIxMCwgNDYwKTtcbiAgICB0aGlzLmN0eC5maWxsVGV4dCgnUnl1IHNwcml0ZXNoZWV0OiBodHRwczovL3d3dy5kZXZpYW50YXJ0LmNvbS9zaWwzbnQtai9hcnQvLi4uJywgMjEwLCA0ODApO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdSeXUtU3RyZWV0LUZpZ2h0ZXItMS1TcHJpdGUtU2hlZXQtNzY5MDExNzEzIChieSBzaWwzbnQtaiknLCAyMTAsIDUwMCk7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoJ0hlbHAgYW5kIHNvdW5kIGljb25zOiBodHRwczovL3d3dy5mbGF0aWNvbi5jb20gKG1hZGUgYnkgRnJlZXBpayknLCAyMTAsIDUyMCk7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoJ011c2ljOiBEcmFnb24gQmFsbCBTdXBlciAtIFVsdHJhIGluc3RpbmN0IHwgSW5zdHJ1bWVudGFsIEVwaWMgUm9jayBDT1ZFUicsIDIxMCwgNTQwKTtcbiAgICB0aGlzLmN0eC5maWxsVGV4dCgnRnJpZWRyaWNoIEhhYmV0bGVyIE11c2ljJywgMjEwLCA1NjApO1xuICB9XG5cbiAgaGFuZGxlUGxheShlKSB7XG4gICAgbGV0IGNsaWNrUG9zID0ge1xuICAgICAgeDogZS5wYWdlWCAtIHRoaXMuZG9jdW1lbnRPZmZzZXRYLFxuICAgICAgeTogZS5wYWdlWSAtIHRoaXMuZG9jdW1lbnRPZmZzZXRZIC0gODBcbiAgICB9XG4gICAgaWYgKGNsaWNrUG9zLnggPj0gdGhpcy5wbGF5UG9zLnggJiYgY2xpY2tQb3MueCA8PSB0aGlzLnBsYXlQb3MueCArIHRoaXMucGxheURpbWVuc2lvbnMuZHgpIHtcbiAgICAgIGlmIChjbGlja1Bvcy55ID49IHRoaXMucGxheVBvcy55ICYmIGNsaWNrUG9zLnkgPD0gdGhpcy5wbGF5UG9zLnkgKyB0aGlzLnBsYXlEaW1lbnNpb25zLmR5KSB7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUGF1c2UoZSkge1xuICAgIGxldCBjbGlja1BvcyA9IHtcbiAgICAgIHg6IGUucGFnZVggLSB0aGlzLmRvY3VtZW50T2Zmc2V0WCxcbiAgICAgIHk6IGUucGFnZVkgLSB0aGlzLmRvY3VtZW50T2Zmc2V0WSAtIDgwXG4gICAgfVxuICAgIGlmIChjbGlja1Bvcy54ID49IHRoaXMucGF1c2VQb3MueCAmJiBjbGlja1Bvcy54IDw9IHRoaXMucGF1c2VQb3MueCArIHRoaXMucGF1c2VEaW1lbnNpb25zLmR4KSB7XG4gICAgICBpZiAoY2xpY2tQb3MueSA+PSB0aGlzLnBhdXNlUG9zLnkgJiYgY2xpY2tQb3MueSA8PSB0aGlzLnBhdXNlUG9zLnkgKyB0aGlzLnBhdXNlRGltZW5zaW9ucy5keSkge1xuICAgICAgICB0aGlzLnBhdXNlZCA9ICF0aGlzLnBhdXNlZDtcbiAgICAgICAgaWYgKCF0aGlzLnBhdXNlZCkge1xuICAgICAgICAgIHRoaXMucGxheSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlTXV0ZShlKSB7XG4gICAgbGV0IGNsaWNrUG9zID0ge1xuICAgICAgeDogZS5wYWdlWCAtIHRoaXMuZG9jdW1lbnRPZmZzZXRYLFxuICAgICAgeTogZS5wYWdlWSAtIHRoaXMuZG9jdW1lbnRPZmZzZXRZIC0gODBcbiAgICB9XG4gICAgaWYgKGNsaWNrUG9zLnggPj0gdGhpcy5zb3VuZFBvcy54ICYmIGNsaWNrUG9zLnggPD0gdGhpcy5zb3VuZFBvcy54ICsgdGhpcy5zb3VuZERpbWVuc2lvbnMuZHgpIHtcbiAgICAgIGlmIChjbGlja1Bvcy55ID49IHRoaXMuc291bmRQb3MueSAmJiBjbGlja1Bvcy55IDw9IHRoaXMuc291bmRQb3MueSArIHRoaXMuc291bmREaW1lbnNpb25zLmR5KSB7XG4gICAgICAgIHRoaXMuc291bmQgPSAhdGhpcy5zb3VuZDtcbiAgICAgICAgaWYgKHRoaXMuc291bmQpIHtcbiAgICAgICAgICB0aGlzLnNvdW5kT2JqLnBsYXkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNvdW5kT2JqLnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgaGFuZGxlSGVscChlKSB7XG4gICAgbGV0IGNsaWNrUG9zID0ge1xuICAgICAgeDogZS5wYWdlWCAtIHRoaXMuZG9jdW1lbnRPZmZzZXRYLFxuICAgICAgeTogZS5wYWdlWSAtIHRoaXMuZG9jdW1lbnRPZmZzZXRZIC0gODBcbiAgICB9XG4gICAgaWYgKGNsaWNrUG9zLnggPj0gdGhpcy5oZWxwUG9zLnggJiYgY2xpY2tQb3MueCA8PSB0aGlzLmhlbHBQb3MueCArIHRoaXMuaGVscERpbWVuc2lvbnMuZHgpIHtcbiAgICAgIGlmIChjbGlja1Bvcy55ID49IHRoaXMuaGVscFBvcy55ICYmIGNsaWNrUG9zLnkgPD0gdGhpcy5oZWxwUG9zLnkgKyB0aGlzLmhlbHBEaW1lbnNpb25zLmR5KSB7XG4gICAgICAgIHRoaXMuaGVscE1vZGFsID0gIXRoaXMuaGVscE1vZGFsO1xuICAgICAgICBpZiAodGhpcy5oZWxwTW9kYWwpIHtcbiAgICAgICAgICB0aGlzLmRyYXdIZWxwKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQXR0YWNrKGUpIHtcbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgY2FzZSA3NDpcbiAgICAgICAgdGhpcy5wbGF5ZXIxLmJhc2ljQXR0YWNrKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA5NzpcbiAgICAgICAgdGhpcy5wbGF5ZXIyLmJhc2ljQXR0YWNrKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU1vZGFsKGUpIHtcbiAgICBsZXQgY2xpY2tQb3MgPSB7XG4gICAgICB4OiBlLnBhZ2VYIC0gdGhpcy5kb2N1bWVudE9mZnNldFgsXG4gICAgICB5OiBlLnBhZ2VZIC0gdGhpcy5kb2N1bWVudE9mZnNldFkgLSA4MFxuICAgIH1cbiAgICBpZiAoY2xpY2tQb3MueCA8IDEyMCB8fCBjbGlja1Bvcy54ID4gdGhpcy5kaW1lbnNpb25zLndpZHRoIC0gMTIwXG4gICAgICB8fCBjbGlja1Bvcy55IDwgNjAgfHwgY2xpY2tQb3MueSA+IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLSA2MCkge1xuICAgICAgdGhpcy5jdHguY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlTW9kYWwpO1xuICAgICAgdGhpcy5oZWxwTW9kYWwgPSAhdGhpcy5oZWxwTW9kYWw7XG4gICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICB9XG4gIH1cblxuICBjaGVja0F0dGFja0NvbGxpc2lvbihib3VuZCwgYXR0YWNraW5nUGxheWVyLCBvdGhlclBsYXllcikge1xuICAgIGxldCBvdGhlclBsYXllckJvdW5kID0ge1xuICAgICAgeDE6IG90aGVyUGxheWVyLnBvcy54IC0gQVZBVEFSX0NPTlNUQU5UUy5BVkFUQVJfRElNRU5TSU9OUy53aWR0aCAvIDIsXG4gICAgICB5MTogb3RoZXJQbGF5ZXIucG9zLnksXG4gICAgICB4Mjogb3RoZXJQbGF5ZXIucG9zLnggKyBBVkFUQVJfQ09OU1RBTlRTLkFWQVRBUl9ESU1FTlNJT05TLndpZHRoIC8gMixcbiAgICAgIHkyOiBvdGhlclBsYXllci5wb3MueSArIEFWQVRBUl9DT05TVEFOVFMuQVZBVEFSX0RJTUVOU0lPTlMuaGVpZ2h0XG4gICAgfTtcbiAgICBpZiAoYm91bmQueCA+PSBvdGhlclBsYXllckJvdW5kLngxICYmIGJvdW5kLnggPD0gb3RoZXJQbGF5ZXJCb3VuZC54Mikge1xuICAgICAgaWYgKGJvdW5kLnkgPj0gb3RoZXJQbGF5ZXJCb3VuZC55MSAmJiBib3VuZC55IDw9IG90aGVyUGxheWVyQm91bmQueTIpIHtcbiAgICAgICAgYXR0YWNraW5nUGxheWVyLnN0YXRlLmRhbWFnZURvbmUgPSB0cnVlO1xuICAgICAgICBvdGhlclBsYXllci5zdGF0ZS5oZWFsdGggLT0gYXR0YWNraW5nUGxheWVyLnN0YXRlLmJhc2ljQXR0YWNrRGFtYWdlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0iLCJpbXBvcnQgRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5cbmNvbnN0IENPTE9SX1BBTEVUVEUgPSB7XG4gIFBSSU1BUlk6ICcjMDAwNzBBJyxcbiAgU0VDT05EQVJZOiAnIzI5NDU1MicsXG4gIFRFUlRJQVJZOiAnIzU5Nzg4NCcsXG4gIFFVQVRFUk5BUlk6ICcjOUVCOUIzJyxcbiAgUVVJTlRFUk5BUlk6ICcjQUNDNENFJ1xufTtcblxuY29uc3QgTEVWRUxfQ09OU1RBTlRTID0ge1xuICBNQVhfVElNRTogNjAgKiAxMjAsXG4gIFRJTUVSX1RFWFRfSEVJR0hUOiA3NSxcbiAgVElNRVJfUkFESVVTOiA0NSxcbiAgTUFYX0hFQUxUSDogMjAwLFxuICBIRUFMVEhfQkFSOiB7XG4gICAgd2lkdGg6IDQwMCxcbiAgICBoZWlnaHQ6IDIwXG4gIH0sXG4gIE9GRlNFVDogMjAsXG4gIEVOVklST05NRU5UX1BST0JBQklMSVRZOiA0NSxcbiAgRU5WSVJPTk1FTlRTOiBbJ3Nha3VyYScsICdzbm93Zmxha2UnXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWwge1xuICBjb25zdHJ1Y3RvcihjdHgsIGRpbWVuc2lvbnMpIHtcbiAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zO1xuICAgIHRoaXMudGltZSA9IExFVkVMX0NPTlNUQU5UUy5NQVhfVElNRTtcbiAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgIHRoaXMucGxheWVySHBQb3MgPSB7XG4gICAgICB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyIC0gTEVWRUxfQ09OU1RBTlRTLlRJTUVSX1JBRElVUyxcbiAgICAgIHk6IExFVkVMX0NPTlNUQU5UUy5USU1FUl9SQURJVVMgLSBMRVZFTF9DT05TVEFOVFMuSEVBTFRIX0JBUi5oZWlnaHQgKyA1XG4gICAgfTtcblxuICAgIHRoaXMuYm90SHBQb3MgPSB7XG4gICAgICB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyICsgTEVWRUxfQ09OU1RBTlRTLlRJTUVSX1JBRElVUyxcbiAgICAgIHk6IExFVkVMX0NPTlNUQU5UUy5USU1FUl9SQURJVVMgLSBMRVZFTF9DT05TVEFOVFMuSEVBTFRIX0JBUi5oZWlnaHQgKyA1XG4gICAgfTtcblxuICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG5cbiAgICB0aGlzLmVudmlyb25tZW50ID0gW107XG5cbiAgICBsZXQgZW52aXJvbm1lbnRJbmRleCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChMRVZFTF9DT05TVEFOVFMuRU5WSVJPTk1FTlRTLmxlbmd0aCAtIDEpKTtcbiAgICB0aGlzLmVudmlyb25tZW50VHlwZSA9IExFVkVMX0NPTlNUQU5UUy5FTlZJUk9OTUVOVFNbZW52aXJvbm1lbnRJbmRleF07XG5cbiAgICB0aGlzLmRyYXdUaW1lckNpcmNsZSA9IHRoaXMuZHJhd1RpbWVyQ2lyY2xlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmF3VGltZXJEaXNwbGF5ID0gdGhpcy5kcmF3VGltZXJEaXNwbGF5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmF3VGltZXJUZXh0ID0gdGhpcy5kcmF3VGltZXJUZXh0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmF3SGVhbHRoQmFycyA9IHRoaXMuZHJhd0hlYWx0aEJhcnMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRyYXdOYW1lcyA9IHRoaXMuZHJhd05hbWVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmF3UGF1c2UgPSB0aGlzLmRyYXdQYXVzZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJhd0JhY2tncm91bmQgPSB0aGlzLmRyYXdCYWNrZ3JvdW5kLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmF3Rmxvb3IgPSB0aGlzLmRyYXdGbG9vci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYW5pbWF0ZShwbGF5ZXJIZWFsdGgsIGJvdEhlYWx0aCwgcGF1c2VkKSB7XG4gICAgbGV0IHRpbWU7XG4gICAgbGV0IHdpbm5lcjtcblxuICAgIHRoaXMuZHJhd0JhY2tncm91bmQoKTtcblxuICAgIGxldCBlbnZpcm9ubWVudEdlbmVyYXRpb24gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBMRVZFTF9DT05TVEFOVFMuRU5WSVJPTk1FTlRfUFJPQkFCSUxJVFkpO1xuXG4gICAgaWYgKGVudmlyb25tZW50R2VuZXJhdGlvbiA9PT0gMSkge1xuICAgICAgbGV0IG5ld0Vudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KHRoaXMuY3R4LCB0aGlzLmRpbWVuc2lvbnMsIHRoaXMuZW52aXJvbm1lbnRUeXBlKTtcbiAgICAgIHRoaXMuZW52aXJvbm1lbnQucHVzaChuZXdFbnZpcm9ubWVudCk7XG4gICAgfVxuXG4gICAgdGhpcy5lbnZpcm9ubWVudC5mb3JFYWNoKChlbnZpcm9ubWVudCwgaWR4KSA9PiB7XG4gICAgICBlbnZpcm9ubWVudC5hbmltYXRlKCk7XG4gICAgICBpZiAoZW52aXJvbm1lbnQucG9zLnkgPiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0ICsgOTQpIHtcbiAgICAgICAgdGhpcy5lbnZpcm9ubWVudC5zaGlmdCgpO1xuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHRpbWUgPSB0aGlzLmRyYXdUaW1lcigpO1xuICAgIHRoaXMuZHJhd0hlYWx0aEJhcnMoKTtcbiAgICB3aW5uZXIgPSB0aGlzLmRyYXdDdXJyZW50SGVhbHRoQmFycyhwbGF5ZXJIZWFsdGgsIGJvdEhlYWx0aCk7XG4gICAgdGhpcy5kcmF3TmFtZXMoKTtcbiAgICAvLyB0aGlzLmRyYXdGbG9vcigpO1xuICAgIHBhdXNlZCA/IHRoaXMucGF1c2VkID0gdHJ1ZSA6IHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5kcmF3UGF1c2UoKTtcbiAgICAgIFxuICAgIGlmICh0aW1lID09PSAwKSB7XG4gICAgICB0aGlzLmVudmlyb25tZW50ID0gW107XG4gICAgICByZXR1cm4gJ3RpbWVVcCc7XG4gICAgfSBlbHNlIGlmICh3aW5uZXIpIHtcbiAgICAgIHRoaXMuZW52aXJvbm1lbnQgPSBbXTtcbiAgICAgIHJldHVybiB3aW5uZXI7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgcmV0dXJuICdwYXVzZWQnO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdUaW1lcigpIHtcbiAgICAvLyBUT0RPOiBOZWVkIGJldHRlciBzb2x1dGlvblxuICAgIHRoaXMuZHJhd1RpbWVyQ2lyY2xlKCk7XG4gICAgdGhpcy5kcmF3VGltZXJEaXNwbGF5KCk7XG4gICAgdGhpcy5kcmF3VGltZXJUZXh0KCk7XG4gICAgXG4gICAgdGhpcy50aW1lID0gdGhpcy50aW1lIC0gMTtcbiAgICBpZiAodGhpcy50aW1lID09PSAwKSB7XG4gICAgICBsZXQgcmV0dXJuVGltZSA9IDA7XG4gICAgICB0aGlzLnRpbWUgPSBMRVZFTF9DT05TVEFOVFMuTUFYX1RJTUU7XG4gICAgICByZXR1cm4gcmV0dXJuVGltZTtcbiAgICB9XG4gIH1cblxuICBkcmF3VGltZXJUZXh0KCkge1xuICAgIHRoaXMuY3R4LmZvbnQgPSAnNDhweCBUcmVidWNoZXQgTVMnO1xuICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdXSElURSc7XG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBDT0xPUl9QQUxFVFRFLlBSSU1BUlk7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoXG4gICAgICBgJHtNYXRoLnJvdW5kKHRoaXMudGltZSAvIDYwKX1gLFxuICAgICAgdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMixcbiAgICAgIExFVkVMX0NPTlNUQU5UUy5USU1FUl9URVhUX0hFSUdIVCArIDEwXG4gICAgKTtcbiAgICB0aGlzLmN0eC5zdHJva2VUZXh0KFxuICAgICAgYCR7TWF0aC5yb3VuZCh0aGlzLnRpbWUgLyA2MCl9YCxcbiAgICAgIHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsXG4gICAgICBMRVZFTF9DT05TVEFOVFMuVElNRVJfVEVYVF9IRUlHSFQgKyAxMFxuICAgICk7XG4gIH1cblxuICBkcmF3VGltZXJDaXJjbGUoKSB7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gQ09MT1JfUEFMRVRURS5TRUNPTkRBUlk7XG4gICAgdGhpcy5jdHguYXJjKFxuICAgICAgdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMixcbiAgICAgIExFVkVMX0NPTlNUQU5UUy5USU1FUl9URVhUX0hFSUdIVCAtIDUsXG4gICAgICBMRVZFTF9DT05TVEFOVFMuVElNRVJfUkFESVVTLCAwLCAyICogTWF0aC5QSVxuICAgICAgKTtcbiAgICB0aGlzLmN0eC5maWxsKCk7XG4gIH1cblxuICBkcmF3VGltZXJEaXNwbGF5KCkge1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IENPTE9SX1BBTEVUVEUuUVVBVEVSTkFSWTtcbiAgICB0aGlzLmN0eC5hcmMoXG4gICAgICB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLFxuICAgICAgTEVWRUxfQ09OU1RBTlRTLlRJTUVSX1RFWFRfSEVJR0hUIC0gNSxcbiAgICAgIExFVkVMX0NPTlNUQU5UUy5USU1FUl9SQURJVVMsXG4gICAgICAtIDAuNSAqIE1hdGguUEksXG4gICAgICAoTEVWRUxfQ09OU1RBTlRTLk1BWF9USU1FIC0gdGhpcy50aW1lKVxuICAgICAgKiAyICogTWF0aC5QSSAvIExFVkVMX0NPTlNUQU5UUy5NQVhfVElNRVxuICAgICAgLSAwLjUgKiBNYXRoLlBJXG4gICAgKTtcbiAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMixcbiAgICAgIExFVkVMX0NPTlNUQU5UUy5USU1FUl9URVhUX0hFSUdIVCAtIDVcbiAgICApO1xuICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgfVxuXG4gIGRyYXdIZWFsdGhCYXJzKCkge1xuICAgIC8vIFBsYXllciBoZWFsdGggY29udGFpbmVyXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnQkxBQ0snO1xuICAgIHRoaXMuY3R4Lm1vdmVUbyhcbiAgICAgIHRoaXMucGxheWVySHBQb3MueCxcbiAgICAgIHRoaXMucGxheWVySHBQb3MueVxuICAgICk7XG4gICAgdGhpcy5jdHgubGluZVRvKFxuICAgICAgdGhpcy5wbGF5ZXJIcFBvcy54IC0gTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIud2lkdGgsXG4gICAgICB0aGlzLnBsYXllckhwUG9zLnlcbiAgICApO1xuICAgIHRoaXMuY3R4LmxpbmVUbyhcbiAgICAgIHRoaXMucGxheWVySHBQb3MueCAtIExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLndpZHRoLFxuICAgICAgdGhpcy5wbGF5ZXJIcFBvcy55ICsgTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIuaGVpZ2h0XG4gICAgKTtcbiAgICB0aGlzLmN0eC5saW5lVG8oXG4gICAgICB0aGlzLnBsYXllckhwUG9zLnggLSBMRVZFTF9DT05TVEFOVFMuT0ZGU0VULFxuICAgICAgdGhpcy5wbGF5ZXJIcFBvcy55ICsgTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIuaGVpZ2h0XG4gICAgKTtcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAvL2JvdCBoZWFsdGggY29udGFpbmVyXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnQkxBQ0snO1xuICAgIHRoaXMuY3R4Lm1vdmVUbyhcbiAgICAgIHRoaXMuYm90SHBQb3MueCxcbiAgICAgIHRoaXMuYm90SHBQb3MueVxuICAgICk7XG4gICAgdGhpcy5jdHgubGluZVRvKFxuICAgICAgdGhpcy5ib3RIcFBvcy54ICsgTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIud2lkdGgsXG4gICAgICB0aGlzLmJvdEhwUG9zLnlcbiAgICApO1xuICAgIHRoaXMuY3R4LmxpbmVUbyhcbiAgICAgIHRoaXMuYm90SHBQb3MueCArIExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLndpZHRoLFxuICAgICAgdGhpcy5ib3RIcFBvcy55ICsgTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIuaGVpZ2h0XG4gICAgKTtcbiAgICB0aGlzLmN0eC5saW5lVG8oXG4gICAgICB0aGlzLmJvdEhwUG9zLnggKyBMRVZFTF9DT05TVEFOVFMuT0ZGU0VULFxuICAgICAgdGhpcy5ib3RIcFBvcy55ICsgTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIuaGVpZ2h0XG4gICAgKTtcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gIH1cblxuICBkcmF3Q3VycmVudEhlYWx0aEJhcnMocGxheWVySGVhbHRoLCBib3RIZWFsdGgpIHtcblxuICAgIGlmIChwbGF5ZXJIZWFsdGggPD0gMCkge1xuICAgICAgcmV0dXJuICdwbGF5ZXIyJztcbiAgICB9IGVsc2UgaWYgKGJvdEhlYWx0aCA8PSAwKSB7XG4gICAgICByZXR1cm4gJ3BsYXllcjEnO1xuICAgIH07XG5cbiAgICBsZXQgY3VycmVudEhlYWx0aCA9IExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLndpZHRoICogcGxheWVySGVhbHRoIC8gTEVWRUxfQ09OU1RBTlRTLk1BWF9IRUFMVEg7XG5cbiAgICAvLyBQbGF5ZXIgY3VycmVudCBoZWFsdGhcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnUkVEJztcbiAgICB0aGlzLmN0eC5tb3ZlVG8oXG4gICAgICB0aGlzLnBsYXllckhwUG9zLngsXG4gICAgICB0aGlzLnBsYXllckhwUG9zLnlcbiAgICApO1xuICAgIHRoaXMuY3R4LmxpbmVUbyhcbiAgICAgIHRoaXMucGxheWVySHBQb3MueCAtIGN1cnJlbnRIZWFsdGgsXG4gICAgICB0aGlzLnBsYXllckhwUG9zLnlcbiAgICApO1xuICAgIGlmIChjdXJyZW50SGVhbHRoIDwgTEVWRUxfQ09OU1RBTlRTLk9GRlNFVCkge1xuICAgICAgdGhpcy5jdHgubGluZVRvKFxuICAgICAgICB0aGlzLnBsYXllckhwUG9zLnggLSBjdXJyZW50SGVhbHRoLFxuICAgICAgICAvLyBjdXJyZW50SGVhbHRoID0gY3VycmVudEhlYWx0aCAqIHRhbihwaS80KVxuICAgICAgICAvLyBzaW5jZSBvZmZzZXQgPSBoZWlnaHRcbiAgICAgICAgdGhpcy5wbGF5ZXJIcFBvcy55ICsgY3VycmVudEhlYWx0aFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdHgubGluZVRvKFxuICAgICAgICB0aGlzLnBsYXllckhwUG9zLnggLSBjdXJyZW50SGVhbHRoLFxuICAgICAgICB0aGlzLnBsYXllckhwUG9zLnkgKyBMRVZFTF9DT05TVEFOVFMuSEVBTFRIX0JBUi5oZWlnaHRcbiAgICAgICk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8oXG4gICAgICAgIHRoaXMucGxheWVySHBQb3MueCAtIExFVkVMX0NPTlNUQU5UUy5PRkZTRVQsXG4gICAgICAgIHRoaXMucGxheWVySHBQb3MueSArIExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLmhlaWdodFxuICAgICAgKTtcbiAgICB9O1xuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgIGxldCBjdXJyZW50Qm90SGVhbHRoID0gTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIud2lkdGggKiBib3RIZWFsdGggLyBMRVZFTF9DT05TVEFOVFMuTUFYX0hFQUxUSDtcblxuICAgIC8vIEJvdCBjdXJyZW50IGhlYWx0aFxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdSRUQnO1xuICAgIHRoaXMuY3R4Lm1vdmVUbyhcbiAgICAgIHRoaXMuYm90SHBQb3MueCxcbiAgICAgIHRoaXMuYm90SHBQb3MueVxuICAgICk7XG4gICAgdGhpcy5jdHgubGluZVRvKFxuICAgICAgdGhpcy5ib3RIcFBvcy54ICsgY3VycmVudEJvdEhlYWx0aCxcbiAgICAgIHRoaXMuYm90SHBQb3MueVxuICAgICk7XG4gICAgaWYgKGN1cnJlbnRCb3RIZWFsdGggPCBMRVZFTF9DT05TVEFOVFMuT0ZGU0VUKSB7XG4gICAgICB0aGlzLmN0eC5saW5lVG8oXG4gICAgICAgIHRoaXMuYm90SHBQb3MueCArIGN1cnJlbnRCb3RIZWFsdGgsXG4gICAgICAgIC8vIGN1cnJlbnRCb3RIZWFsdGggPSBjdXJyZW50Qm90SGVhbHRoICogdGFuKHBpLzQpXG4gICAgICAgIC8vIHNpbmNlIG9mZnNldCA9IGhlaWdodFxuICAgICAgICB0aGlzLmJvdEhwUG9zLnkgKyBjdXJyZW50Qm90SGVhbHRoXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN0eC5saW5lVG8oXG4gICAgICAgIHRoaXMuYm90SHBQb3MueCArIGN1cnJlbnRCb3RIZWFsdGgsXG4gICAgICAgIHRoaXMuYm90SHBQb3MueSArIExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLmhlaWdodFxuICAgICAgKTtcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyhcbiAgICAgICAgdGhpcy5ib3RIcFBvcy54ICsgTEVWRUxfQ09OU1RBTlRTLk9GRlNFVCxcbiAgICAgICAgdGhpcy5ib3RIcFBvcy55ICsgTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIuaGVpZ2h0XG4gICAgICApO1xuICAgIH07XG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgdGhpcy5jdHguZmlsbCgpO1xuICB9XG5cbiAgZHJhd05hbWVzKCkge1xuICAgIGxldCBwbGF5ZXJOYW1lID0gJ1BsYXllciAxJztcbiAgICBsZXQgYm90TmFtZSA9ICdQbGF5ZXIgMic7XG4gICAgbGV0IHBsYXllck5hbWVQb3MgPSB7XG4gICAgICB4OiB0aGlzLnBsYXllckhwUG9zLnggLSBMRVZFTF9DT05TVEFOVFMuT0ZGU0VULFxuICAgICAgeTogdGhpcy5wbGF5ZXJIcFBvcy55ICsgTEVWRUxfQ09OU1RBTlRTLlRJTUVSX1JBRElVUyArIDRcbiAgICB9O1xuICAgIGxldCBib3ROYW1lUG9zID0ge1xuICAgICAgeDogdGhpcy5ib3RIcFBvcy54ICsgTEVWRUxfQ09OU1RBTlRTLk9GRlNFVCxcbiAgICAgIHk6IHRoaXMuYm90SHBQb3MueSArIExFVkVMX0NPTlNUQU5UUy5USU1FUl9SQURJVVMgKyA0XG4gICAgfTtcblxuICAgIHRoaXMuY3R4LmZvbnQgPSAnMzJweCBUcmVidWNoZXQgTVMnO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgdGhpcy5jdHgubGluZVdpZHRoID0gMC41O1xuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gQ09MT1JfUEFMRVRURS5TRUNPTkRBUlk7XG4gICAgdGhpcy5jdHgudGV4dEFsaWduID0gJ3JpZ2h0JztcbiAgICB0aGlzLmN0eC5maWxsVGV4dChwbGF5ZXJOYW1lLCBwbGF5ZXJOYW1lUG9zLngsIHBsYXllck5hbWVQb3MueSk7XG4gICAgdGhpcy5jdHguc3Ryb2tlVGV4dChwbGF5ZXJOYW1lLCBwbGF5ZXJOYW1lUG9zLngsIHBsYXllck5hbWVQb3MueSk7XG5cbiAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSAnbGVmdCc7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoYm90TmFtZSwgYm90TmFtZVBvcy54LCBib3ROYW1lUG9zLnkpO1xuICAgIHRoaXMuY3R4LnN0cm9rZVRleHQoYm90TmFtZSwgYm90TmFtZVBvcy54LCBib3ROYW1lUG9zLnkpO1xuICB9XG5cbiAgZHJhd1BhdXNlKCkge1xuICAgIC8vIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIC8vIC8vIHRoaXMuY3R4LnJlY3QodGhpcy5kaW1lbnNpb25zLndpZHRoIC0gNTAgLSAyMCwgMjAsIDUwLCA1MCk7XG4gICAgLy8gdGhpcy5jdHgucmVjdCh0aGlzLmRpbWVuc2lvbnMud2lkdGggLSA1MCAtIDEwLCAyNSwgMzAsIDQwKTtcbiAgICAvLyB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgIGlmICghdGhpcy5wYXVzZWQpIHtcbiAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gQ09MT1JfUEFMRVRURS5RVUlOVEVSTkFSWTtcbiAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gQ09MT1JfUEFMRVRURS5QUklNQVJZO1xuICAgICAgXG4gICAgICB0aGlzLmN0eC5yZWN0KHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIDUwIC0gMTAsIDI1LCAxMCwgNDApO1xuICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgdGhpcy5jdHgucmVjdCh0aGlzLmRpbWVuc2lvbnMud2lkdGggLSA1MCArIDEwLCAyNSwgMTAsIDQwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gQ09MT1JfUEFMRVRURS5RVUlOVEVSTkFSWTtcbiAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gQ09MT1JfUEFMRVRURS5QUklNQVJZO1xuICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIDUwIC0gMTAsIDI1KTtcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmRpbWVuc2lvbnMud2lkdGggLSA1MCAtIDEwLCA2NSk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5kaW1lbnNpb25zLndpZHRoIC0gNTAgKyAyMCwgNDUpO1xuICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDEuNTtcblxuICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICB0aGlzLmN0eC5mb250ID0gJzU2cHggVHJlYnVjaGV0IE1TJztcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFxuICAgICAgICAnR2FtZSBwYXVzZWQnLFxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLFxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiAtIDM2XG4gICAgICApO1xuICAgICAgdGhpcy5jdHguc3Ryb2tlVGV4dChcbiAgICAgICAgJ0dhbWUgcGF1c2VkJyxcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMixcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDIgLSAzNlxuICAgICAgKTtcblxuICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICB0aGlzLmN0eC5mb250ID0gJzM2cHggVHJlYnVjaGV0IE1TJztcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFxuICAgICAgICAnUHJlc3MgcGxheSB0byBjb250aW51ZScsXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyICsgMzZcbiAgICAgICk7XG4gICAgICB0aGlzLmN0eC5zdHJva2VUZXh0KFxuICAgICAgICAnUHJlc3MgcGxheSB0byBjb250aW51ZScsXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyICsgMzZcbiAgICAgIClcbiAgICB9O1xuICB9XG5cbiAgZHJhd0JhY2tncm91bmQoKSB7XG4gICAgbGV0IGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcbiAgICBiYWNrZ3JvdW5kLnNyYyA9ICdmcm9udGVuZC9hc3NldHMvaW1hZ2VzL2dhbWUtYmFja2dyb3VuZC5qcGcnO1xuICAgIC8vIGJhY2tncm91bmQub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGJhY2tncm91bmQsIDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgLy8gfVxuICB9XG5cbiAgLy8gVE9ETzogUHJvYmFibHkgdGVtcG9yYXJ5XG4gIGRyYXdGbG9vcigpIHtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnQlJPV04nO1xuICAgIHRoaXMuY3R4LmZpbGxSZWN0KFxuICAgICAgMCwgXG4gICAgICB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC0gMTU1LCBcbiAgICAgIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgXG4gICAgICAxNTVcbiAgICApO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==