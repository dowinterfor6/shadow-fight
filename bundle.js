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
    this.ctx.fillText('Credits:', 210, 340);

    this.ctx.font = '24px Trebuchet MS';
    this.ctx.fillStyle = 'black';
    this.ctx.fillText('Starting screen: http://www.avoidingthepuddle.com/news/2015/12/21/...', 210, 370);
    this.ctx.fillText('complete-batch-of-tekken-7-fated-retribution-images-in-high.html', 210, 400);
    this.ctx.fillText('Sakura petals: https://www.123rf.com/photo_109774081_stock-vector-...', 210, 430);
    this.ctx.fillText('sakura-petals-falling-down-romantic-pink-silky-medium-flowers-sparse-...', 210, 460);
    this.ctx.fillText('flying-cherry-petals-top-gradie.html', 210, 490);
    this.ctx.fillText('Snowflakes: https://www.freepik.com/free-photos-vectors/christmas...', 210, 520);
    this.ctx.fillText('(Christmas vector created by freepik)', 210, 550);
    this.ctx.fillText('Arena background: https://wallpapercave.com/w/wp2603480', 210, 580);
    this.ctx.fillText('Ryu spritesheet: https://www.deviantart.com/sil3nt-j/art/...', 210, 610);
    this.ctx.fillText('Ryu-Street-Fighter-1-Sprite-Sheet-769011713 (by sil3nt-j)', 210, 640);
    this.ctx.fillText('Help and sound icons: https://www.flaticon.com (made by Freepik)', 210, 670);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvYXZhdGFyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2VudHJ5LmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvbGV2ZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLFNBQVMsY0FBYztBQUN2QixTQUFTLGNBQWM7QUFDdkIsWUFBWSxhQUFhO0FBQ3pCLFNBQVMsYUFBYTtBQUN0QixHQUFHO0FBQ0g7QUFDQSxTQUFTLGNBQWM7QUFDdkIsU0FBUyxjQUFjO0FBQ3ZCLFlBQVksYUFBYTtBQUN6QixTQUFTLGFBQWE7QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN6V0E7QUFBQTtBQUEyQjs7QUFFM0I7QUFDQTtBQUNBLE1BQU0sNkNBQUs7QUFDWCxDQUFDLEU7Ozs7Ozs7Ozs7OztBQ0xEO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2xFQTtBQUFBO0FBQUE7QUFBQTtBQUE0QjtBQUNFOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLDhDQUFLO0FBQzFCLHVCQUF1QiwrQ0FBTTtBQUM3Qix1QkFBdUIsK0NBQU07QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFlBQVk7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3JXQTtBQUFBO0FBQUE7QUFBd0M7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSwrQkFBK0Isb0RBQVc7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDJCQUEyQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsMkJBQTJCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiIuL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZnJvbnRlbmQvZW50cnkuanNcIik7XG4iLCJjb25zdCBBVkFUQVJfQ09OU1RBTlRTID0ge1xuICBBVkFUQVJfRElNRU5TSU9OUzoge1xuICAgIHdpZHRoOiAxNTAsXG4gICAgaGVpZ2h0OiAzMDBcbiAgfSxcbiAgR1JBVklUWTogLTEuOCxcbiAgUDFfTU9WRU1FTlQ6IHtcbiAgICA4NzogeyB4OiAwLCB5OiAtMSB9LFxuICAgIDY1OiB7IHg6IC0xLCB5OiAwIH0sXG4gICAgLy8gODM6IHsgeDogMCwgeTogMSB9LFxuICAgIDY4OiB7IHg6IDEsIHk6IDAgfSxcbiAgfSxcbiAgUDJfTU9WRU1FTlQ6IHtcbiAgICAzODogeyB4OiAwLCB5OiAtMSB9LFxuICAgIDM3OiB7IHg6IC0xLCB5OiAwIH0sXG4gICAgLy8gNDA6IHsgeDogMCwgeTogMSB9LFxuICAgIDM5OiB7IHg6IDEsIHk6IDAgfSxcbiAgfSxcbiAgTU9WRU1FTlRfU1BFRUQ6IHtcbiAgICB4OiAxMCxcbiAgICB5OiAzMFxuICB9LFxuICBNQVhfSEVBTFRIOiAyMDAsXG4gIFNSSVRFU0hFRVQ6IHtcbiAgICBXQUxLSU5HOiB7XG4gICAgICAxOiB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDIwMixcbiAgICAgICAgdzogNTAsXG4gICAgICAgIGg6IDk4XG4gICAgICB9LFxuICAgICAgMjoge1xuICAgICAgICB4OiA1MCxcbiAgICAgICAgeTogMjAyLFxuICAgICAgICB3OiA1MCxcbiAgICAgICAgaDogOThcbiAgICAgIH0sXG4gICAgICAzOiB7XG4gICAgICAgIHg6IDEwMCxcbiAgICAgICAgeTogMjAyLFxuICAgICAgICB3OiA2NSxcbiAgICAgICAgaDogOThcbiAgICAgIH0sXG4gICAgICA0OiB7XG4gICAgICAgIHg6IDE2NSxcbiAgICAgICAgeTogMjAyLFxuICAgICAgICB3OiA3NSxcbiAgICAgICAgaDogOThcbiAgICAgIH0sXG4gICAgICA1OiB7XG4gICAgICAgIHg6IDI0MCxcbiAgICAgICAgeTogMjAyLFxuICAgICAgICB3OiA2MCxcbiAgICAgICAgaDogOThcbiAgICAgIH0sXG4gICAgICA2OiB7XG4gICAgICAgIHg6IDMwMCxcbiAgICAgICAgeTogMjAzLFxuICAgICAgICB3OiA3MCxcbiAgICAgICAgaDogOTdcbiAgICAgIH0sXG4gICAgICA3OiB7XG4gICAgICAgIHg6IDM3MCxcbiAgICAgICAgeTogMjAyLFxuICAgICAgICB3OiA4MCxcbiAgICAgICAgaDogOThcbiAgICAgIH1cbiAgICB9LFxuICAgIElETEU6IHtcbiAgICAgIDE6IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMzAxLFxuICAgICAgICB3OiA3NSxcbiAgICAgICAgaDogOTZcbiAgICAgIH0sXG4gICAgICAyOiB7XG4gICAgICAgIHg6IDc1LFxuICAgICAgICB5OiAzMDEsXG4gICAgICAgIHc6IDc1LFxuICAgICAgICBoOiA5NlxuICAgICAgfSxcbiAgICAgIDM6IHtcbiAgICAgICAgeDogMTUwLFxuICAgICAgICB5OiAzMDEsXG4gICAgICAgIHc6IDc1LFxuICAgICAgICBoOiA5NlxuICAgICAgfSxcbiAgICAgIDQ6IHtcbiAgICAgICAgeDogMjI1LFxuICAgICAgICB5OiAzMDEsXG4gICAgICAgIHc6IDc1LFxuICAgICAgICBoOiA5NlxuICAgICAgfSxcbiAgICAgIDU6IHtcbiAgICAgICAgeDogMzAwLFxuICAgICAgICB5OiAzMDEsXG4gICAgICAgIHc6IDc1LFxuICAgICAgICBoOiA5NlxuICAgICAgfSxcbiAgICAgIDY6IHtcbiAgICAgICAgeDogMzc1LFxuICAgICAgICB5OiAzMDEsXG4gICAgICAgIHc6IDc1LFxuICAgICAgICBoOiA5NlxuICAgICAgfVxuICAgIH0sXG4gICAgSlVNUDoge1xuICAgICAgMToge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiA5NSxcbiAgICAgICAgdzogNzQsXG4gICAgICAgIGg6IDEwN1xuICAgICAgfSxcbiAgICAgIDI6IHtcbiAgICAgICAgeDogNzQsXG4gICAgICAgIHk6IDk1LFxuICAgICAgICB3OiA3NCxcbiAgICAgICAgaDogMTA3XG4gICAgICB9LFxuICAgICAgMzoge1xuICAgICAgICB4OiAxNDgsXG4gICAgICAgIHk6IDk1LFxuICAgICAgICB3OiA3NCxcbiAgICAgICAgaDogMTA3XG4gICAgICB9LFxuICAgICAgNDoge1xuICAgICAgICB4OiAyMjIsXG4gICAgICAgIHk6IDk1LFxuICAgICAgICB3OiA3NCxcbiAgICAgICAgaDogMTA3XG4gICAgICB9LFxuICAgICAgNToge1xuICAgICAgICB4OiAyOTYsXG4gICAgICAgIHk6IDk1LFxuICAgICAgICB3OiA3NCxcbiAgICAgICAgaDogMTA3XG4gICAgICB9XG4gICAgfSxcbiAgICBBVFRBQ0s6IHtcbiAgICAgIDE6IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgdzogMTA0LFxuICAgICAgICBoOiA5NVxuICAgICAgfSxcbiAgICAgIDI6IHtcbiAgICAgICAgeDogMTA0LFxuICAgICAgICB5OiAwLFxuICAgICAgICB3OiAxMDQsXG4gICAgICAgIGg6IDk1XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF2YXRhciB7XG4gIGNvbnN0cnVjdG9yKGN0eCwgZGltZW5zaW9ucywgcGxheWVyTnVtKSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9ucztcbiAgICB0aGlzLnBsYXllck51bSA9IHBsYXllck51bTtcblxuICAgIGxldCBzdGFydGluZ1ggPSBwbGF5ZXJOdW0gPT09IDEgPyA1MCA6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIDUwO1xuICAgIHRoaXMucG9zID0ge1xuICAgICAgeDogc3RhcnRpbmdYIC0gQVZBVEFSX0NPTlNUQU5UUy5BVkFUQVJfRElNRU5TSU9OUy53aWR0aCAvIDIsXG4gICAgICB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC0gQVZBVEFSX0NPTlNUQU5UUy5BVkFUQVJfRElNRU5TSU9OUy5oZWlnaHQgLSAxNTBcbiAgICB9O1xuXG4gICAgdGhpcy52ZWwgPSB7XG4gICAgICB2eDogMCxcbiAgICAgIHZ5OiAwXG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhlYWx0aDogQVZBVEFSX0NPTlNUQU5UUy5NQVhfSEVBTFRILFxuICAgICAgYmFzaWNBdHRhY2tpbmc6IGZhbHNlLFxuICAgICAgZGFtYWdlRG9uZTogZmFsc2UsXG4gICAgICBiYXNpY0F0dGFja0hpdGJveDoge1xuICAgICAgICB3OiBBVkFUQVJfQ09OU1RBTlRTLkFWQVRBUl9ESU1FTlNJT05TLndpZHRoIC8gMiArIDQwLFxuICAgICAgICBoOiAxMFxuICAgICAgfSxcbiAgICAgIGJhc2ljQXR0YWNrRGFtYWdlOiAxMCxcbiAgICAgIGZhY2luZzogcGxheWVyTnVtID09PSAxID8gMSA6IC0xLFxuICAgICAgYmFzaWNBdHRhY2tLZXljb2RlOiBwbGF5ZXJOdW0gPT09IDEgPyA3NCA6IDk3LFxuICAgICAgbW92ZW1lbnQ6ICdpZGxlJ1xuICAgIH1cblxuICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5rZXlDb2RlTW92ZW1lbnQgPSB0aGlzLnBsYXllck51bSA9PT0gMSA/IFxuICAgICAgQVZBVEFSX0NPTlNUQU5UUy5QMV9NT1ZFTUVOVCA6IEFWQVRBUl9DT05TVEFOVFMuUDJfTU9WRU1FTlQ7XG4gICAgdGhpcy5rZXlwcmVzc1BPSk8gPSB7fTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmtleUNvZGVNb3ZlbWVudCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICB0aGlzLmtleXByZXNzUE9KT1trZXldID0gZmFsc2U7XG4gICAgfSk7XG4gICAgdGhpcy5zcHJpdGVTaGVldCA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuc3ByaXRlU2hlZXQuc3JjID0gJ2Zyb250ZW5kL2Fzc2V0cy9pbWFnZXMvcnl1LXNwcml0ZS1zaGVldC5wbmcnO1xuXG4gICAgdGhpcy5hbmltYXRpb25UaW1lciA9IDA7XG5cbiAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRyYXdBdmF0YXIgPSB0aGlzLmRyYXdBdmF0YXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vdmVBdmF0YXIgPSB0aGlzLm1vdmVBdmF0YXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0b3BBdmF0YXIgPSB0aGlzLnN0b3BBdmF0YXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoZWNrQm91bmRhcnkgPSB0aGlzLmNoZWNrQm91bmRhcnkuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uID0gdGhpcy51cGRhdGVQb3NpdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYmFzaWNBdHRhY2sgPSB0aGlzLmJhc2ljQXR0YWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmF3QmFzaWNBdHRhY2sgPSB0aGlzLmRyYXdCYXNpY0F0dGFjay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQXR0YWNrID0gdGhpcy5oYW5kbGVBdHRhY2suYmluZCh0aGlzKTtcblxuICAgIC8vVE9ETzogSVMgVEhFUkUgQSBCRVRURVIgU09MVVRJT04/XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlQXR0YWNrKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5tb3ZlQXZhdGFyKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuc3RvcEF2YXRhcik7XG4gIH1cblxuICBhbmltYXRlKHBhdXNlZCkge1xuICAgIHRoaXMucGF1c2VkID0gISFwYXVzZWQ7XG4gICAgdGhpcy5hbmltYXRpb25UaW1lciArPSAwLjA1O1xuICAgIGlmICghdGhpcy5wYXVzZWQpIHtcbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcbiAgICB9XG4gICAgaWYgKHRoaXMudmVsLnZ4ID09PSAwICYmIHRoaXMudmVsLnZ5ID09PSAwKSB7XG4gICAgICB0aGlzLnN0YXRlLm1vdmVtZW50ID0gJ2lkbGUnO1xuICAgIH1cbiAgICBsZXQgYm91bmRzO1xuICAgIGlmICghdGhpcy5wYXVzZWQpIHtcbiAgICAgIHRoaXMuZHJhd0Jhc2ljQXR0YWNrKCk7XG4gICAgICBib3VuZHMgPSB7XG4gICAgICAgIHg6IHRoaXMucG9zLnggKyB0aGlzLnN0YXRlLmZhY2luZyAqIHRoaXMuc3RhdGUuYmFzaWNBdHRhY2tIaXRib3gudyxcbiAgICAgICAgeTogdGhpcy5wb3MueSArIHRoaXMuc3RhdGUuYmFzaWNBdHRhY2tIaXRib3guaFxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmRyYXdBdmF0YXIoKTtcbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgdXBkYXRlUG9zaXRpb24oKSB7XG4gICAgT2JqZWN0LmtleXModGhpcy5rZXlwcmVzc1BPSk8pLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKHRoaXMua2V5cHJlc3NQT0pPW2tleV0pIHtcbiAgICAgICAgLy8gS2V5cHJlc3MgbW92ZW1lbnRcbiAgICAgICAgaWYgKHRoaXMua2V5Q29kZU1vdmVtZW50W2tleV0ueCAhPT0gMCkge1xuICAgICAgICAgIHRoaXMudmVsLnZ4ID0gdGhpcy5rZXlDb2RlTW92ZW1lbnRba2V5XS54XG4gICAgICAgICAgICAqIEFWQVRBUl9DT05TVEFOVFMuTU9WRU1FTlRfU1BFRUQueDtcbiAgICAgICAgICB0aGlzLnN0YXRlLmZhY2luZyA9IHRoaXMua2V5Q29kZU1vdmVtZW50W2tleV0ueDtcbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5tb3ZlbWVudCAhPT0gJ2p1bXAnKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm1vdmVtZW50ID0gJ21vdmVYJztcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICAvLyBQcmV2ZW50IGluZmluaXRlIGp1bXBcbiAgICAgICAgaWYgKHRoaXMucG9zLnkgPT09IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLSAxNTUgLSBBVkFUQVJfQ09OU1RBTlRTLkFWQVRBUl9ESU1FTlNJT05TLmhlaWdodCkge1xuICAgICAgICAgIGlmICh0aGlzLmtleUNvZGVNb3ZlbWVudFtrZXldLnkgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMudmVsLnZ5ID0gdGhpcy5rZXlDb2RlTW92ZW1lbnRba2V5XS55XG4gICAgICAgICAgICAgICogQVZBVEFSX0NPTlNUQU5UUy5NT1ZFTUVOVF9TUEVFRC55O1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5tb3ZlbWVudCA9ICdqdW1wJztcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMudmVsLnZ5IC09IEFWQVRBUl9DT05TVEFOVFMuR1JBVklUWTtcbiAgICB0aGlzLnBvcy55ICs9IHRoaXMudmVsLnZ5O1xuICAgIHRoaXMucG9zLnggKz0gdGhpcy52ZWwudng7XG4gICAgdGhpcy5jaGVja0JvdW5kYXJ5KCk7XG4gIH1cblxuICBtb3ZlQXZhdGFyKGUpIHtcbiAgICBpZiAoIXRoaXMucGF1c2VkICYmICFlLnJlcGVhdCkge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMua2V5Q29kZU1vdmVtZW50KS5pbmNsdWRlcyhlLmtleUNvZGUudG9TdHJpbmcoKSkpIHtcbiAgICAgICAgdGhpcy5rZXlwcmVzc1BPSk9bZS5rZXlDb2RlLnRvU3RyaW5nKCldID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0b3BBdmF0YXIoZSkge1xuICAgIHRoaXMudmVsLnZ4ID0gMDtcbiAgICB0aGlzLmtleXByZXNzUE9KT1tlLmtleUNvZGUudG9TdHJpbmcoKV0gPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gIH1cbiAgXG4gIGRyYXdBdmF0YXIoKSB7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5wbGF5ZXJOdW0gPT09IDEgPyAnQmx1ZScgOiAnUmVkJztcbiAgICBsZXQgY3VycmVudFNwcml0ZVNsaWNlSWR4O1xuICAgIGxldCBjdXJyZW50U3ByaXRlU2xpY2U7XG4gICAgbGV0IGF0dGFja09mZnNldCA9IDA7XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlLm1vdmVtZW50KSB7XG4gICAgICBjYXNlICdpZGxlJzpcbiAgICAgICAgY3VycmVudFNwcml0ZVNsaWNlSWR4ID0gMSArIE1hdGgucm91bmQodGhpcy5hbmltYXRpb25UaW1lciAlIChPYmplY3Qua2V5cyhBVkFUQVJfQ09OU1RBTlRTLlNSSVRFU0hFRVQuSURMRSkubGVuZ3RoIC0gMSkpO1xuICAgICAgICBjdXJyZW50U3ByaXRlU2xpY2UgPSBBVkFUQVJfQ09OU1RBTlRTLlNSSVRFU0hFRVQuSURMRVtjdXJyZW50U3ByaXRlU2xpY2VJZHhdO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21vdmVYJzpcbiAgICAgICAgY3VycmVudFNwcml0ZVNsaWNlSWR4ID0gMSArIE1hdGgucm91bmQoMiAqIHRoaXMuYW5pbWF0aW9uVGltZXIgJSAoT2JqZWN0LmtleXMoQVZBVEFSX0NPTlNUQU5UUy5TUklURVNIRUVULldBTEtJTkcpLmxlbmd0aCAtIDEpKTtcbiAgICAgICAgY3VycmVudFNwcml0ZVNsaWNlID0gQVZBVEFSX0NPTlNUQU5UUy5TUklURVNIRUVULldBTEtJTkdbY3VycmVudFNwcml0ZVNsaWNlSWR4XTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdqdW1wJzpcbiAgICAgICAgY3VycmVudFNwcml0ZVNsaWNlSWR4ID0gMSArIE1hdGgucm91bmQoMiAqIHRoaXMuYW5pbWF0aW9uVGltZXIgJSAoT2JqZWN0LmtleXMoQVZBVEFSX0NPTlNUQU5UUy5TUklURVNIRUVULkpVTVApLmxlbmd0aCAtIDEpKTtcbiAgICAgICAgY3VycmVudFNwcml0ZVNsaWNlID0gQVZBVEFSX0NPTlNUQU5UUy5TUklURVNIRUVULkpVTVBbY3VycmVudFNwcml0ZVNsaWNlSWR4XTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhdHRhY2snOlxuICAgICAgICBjdXJyZW50U3ByaXRlU2xpY2VJZHggPSAxICsgTWF0aC5yb3VuZCh0aGlzLmFuaW1hdGlvblRpbWVyICUgKE9iamVjdC5rZXlzKEFWQVRBUl9DT05TVEFOVFMuU1JJVEVTSEVFVC5BVFRBQ0spLmxlbmd0aCAtIDEpKTtcbiAgICAgICAgY3VycmVudFNwcml0ZVNsaWNlID0gQVZBVEFSX0NPTlNUQU5UUy5TUklURVNIRUVULkFUVEFDS1tjdXJyZW50U3ByaXRlU2xpY2VJZHhdO1xuICAgICAgICBhdHRhY2tPZmZzZXQgPSA1MDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICB0aGlzLmN0eC5zY2FsZSh0aGlzLnN0YXRlLmZhY2luZywgMSk7XG4gICAgbGV0IG9mZnNldCA9IDA7XG4gICAgaWYgKHRoaXMuc3RhdGUuZmFjaW5nID09PSAtMSkge1xuICAgICAgb2Zmc2V0ID0gQVZBVEFSX0NPTlNUQU5UUy5BVkFUQVJfRElNRU5TSU9OUy53aWR0aDtcbiAgICB9XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgdGhpcy5zcHJpdGVTaGVldCxcbiAgICAgIGN1cnJlbnRTcHJpdGVTbGljZS54LFxuICAgICAgY3VycmVudFNwcml0ZVNsaWNlLnksXG4gICAgICBjdXJyZW50U3ByaXRlU2xpY2UudyxcbiAgICAgIGN1cnJlbnRTcHJpdGVTbGljZS5oLFxuICAgICAgdGhpcy5zdGF0ZS5mYWNpbmcgKiB0aGlzLnBvcy54IC0gb2Zmc2V0LFxuICAgICAgdGhpcy5wb3MueSxcbiAgICAgIEFWQVRBUl9DT05TVEFOVFMuQVZBVEFSX0RJTUVOU0lPTlMud2lkdGggKyBhdHRhY2tPZmZzZXQsXG4gICAgICBBVkFUQVJfQ09OU1RBTlRTLkFWQVRBUl9ESU1FTlNJT05TLmhlaWdodFxuICAgICk7XG4gICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgY2hlY2tCb3VuZGFyeSgpIHtcbiAgICBsZXQgbWF4T2Zmc2V0ID0gdGhpcy5wbGF5ZXJOdW0gPT09IDEgPyAwIDogQVZBVEFSX0NPTlNUQU5UUy5BVkFUQVJfRElNRU5TSU9OUy53aWR0aDtcbiAgICBsZXQgbWluT2Zmc2V0ID0gdGhpcy5wbGF5ZXJOdW0gPT09IDIgPyAwIDogQVZBVEFSX0NPTlNUQU5UUy5BVkFUQVJfRElNRU5TSU9OUy53aWR0aDtcbiAgICBpZiAodGhpcy5wb3MueCA8IDApIHtcbiAgICAgIHRoaXMucG9zLnggPSAwO1xuICAgICAgdGhpcy52ZWwudnggPSAwO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wb3MueCA+IHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIG1heE9mZnNldCAtIG1pbk9mZnNldCkge1xuICAgICAgdGhpcy5wb3MueCA9IHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIG1heE9mZnNldCAtIG1pbk9mZnNldDtcbiAgICAgIHRoaXMudmVsLnZ4ID0gMDtcbiAgICB9O1xuICAgIGlmICh0aGlzLnBvcy55ID4gdGhpcy5kaW1lbnNpb25zLmhlaWdodCAtIDE1NSAtIEFWQVRBUl9DT05TVEFOVFMuQVZBVEFSX0RJTUVOU0lPTlMuaGVpZ2h0KSB7XG4gICAgICB0aGlzLnBvcy55ID0gdGhpcy5kaW1lbnNpb25zLmhlaWdodCAtIDE1NSAtIEFWQVRBUl9DT05TVEFOVFMuQVZBVEFSX0RJTUVOU0lPTlMuaGVpZ2h0O1xuICAgICAgdGhpcy52ZWwudnkgPSAwO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wb3MueSA8IDApIHtcbiAgICAgIHRoaXMucG9zLnkgPSAwO1xuICAgIH1cbiAgfVxuXG4gIGJhc2ljQXR0YWNrKCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5iYXNpY0F0dGFja2luZykge1xuICAgICAgdGhpcy5zdGF0ZS5iYXNpY0F0dGFja2luZyA9IHRydWU7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdGUuYmFzaWNBdHRhY2tpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdGF0ZS5kYW1hZ2VEb25lID0gZmFsc2U7XG4gICAgICB9LCAyNTApO1xuICAgIH1cbiAgfVxuICBcbiAgZHJhd0Jhc2ljQXR0YWNrKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmJhc2ljQXR0YWNraW5nKSB7XG4gICAgICB0aGlzLnN0YXRlLm1vdmVtZW50ID0gJ2F0dGFjayc7XG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUF0dGFjayhlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gdGhpcy5zdGF0ZS5iYXNpY0F0dGFja0tleWNvZGUpIHtcbiAgICAgIHRoaXMuYmFzaWNBdHRhY2soKTtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgQXJlbmEgZnJvbSBcIi4vZ2FtZVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gIG5ldyBBcmVuYShjYW52YXMpO1xufSk7IiwiY29uc3QgRU5WSVJPTk1FTlRfQ09OU1RBTlRTID0ge1xuICBHUkFWSVRZOiAtMC43LFxuICBFTlZJUk9OTUVOVF9ESU1FTlNJT05TOiA5NCxcbiAgU0FLVVJBX1NQUklURVM6IDMsXG4gIFNOT1dGTEFLRV9TUFJJVEVTOiA5LFxuICBFTlZJUk9OTUVOVF9SRVNJWkU6IDI1XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudmlyb25tZW50IHtcbiAgY29uc3RydWN0b3IoY3R4LCBkaW1lbnNpb25zLCB0eXBlKSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9ucztcbiAgICB0aGlzLnBvcyA9IHtcbiAgICAgIHg6IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHRoaXMuZGltZW5zaW9ucy53aWR0aCksXG4gICAgICB5OiAtOTRcbiAgICB9XG5cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc2FrdXJhJzpcbiAgICAgICAgdGhpcy5yYW5kU3ByaXRlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKEVOVklST05NRU5UX0NPTlNUQU5UUy5TQUtVUkFfU1BSSVRFUyAtIDEpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzbm93Zmxha2UnOlxuICAgICAgICB0aGlzLnJhbmRTcHJpdGUgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoRU5WSVJPTk1FTlRfQ09OU1RBTlRTLlNOT1dGTEFLRV9TUFJJVEVTIC0gMSkpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLmRlbHRheCA9IE1hdGgucmFuZG9tKCkgKiAwLjUgLSAwLjI1O1xuICAgIHRoaXMubW92ZSA9IHRoaXMubW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJhd0Vudmlyb25tZW50ID0gdGhpcy5kcmF3RW52aXJvbm1lbnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGFuaW1hdGUoKSB7XG4gICAgdGhpcy5tb3ZlKCk7XG4gICAgdGhpcy5kcmF3RW52aXJvbm1lbnQoKTtcbiAgfVxuXG4gIG1vdmUoKSB7XG4gICAgdGhpcy5wb3MueSAtPSBFTlZJUk9OTUVOVF9DT05TVEFOVFMuR1JBVklUWTtcbiAgICB0aGlzLnBvcy54ICs9IHRoaXMuZGVsdGF4O1xuICB9XG5cbiAgZHJhd0Vudmlyb25tZW50KCkge1xuICAgIGxldCBlbnZpcm9ubWVudCA9IG5ldyBJbWFnZSgpO1xuICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICBjYXNlICdzYWt1cmEnOlxuICAgICAgICBlbnZpcm9ubWVudC5zcmMgPSAnZnJvbnRlbmQvYXNzZXRzL2ltYWdlcy9zYWt1cmEucG5nJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzbm93Zmxha2UnOlxuICAgICAgICBlbnZpcm9ubWVudC5zcmMgPSAnZnJvbnRlbmQvYXNzZXRzL2ltYWdlcy9zbm93Zmxha2UucG5nJztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgIGVudmlyb25tZW50LCBcbiAgICAgIEVOVklST05NRU5UX0NPTlNUQU5UUy5FTlZJUk9OTUVOVF9ESU1FTlNJT05TICogdGhpcy5yYW5kU3ByaXRlLCBcbiAgICAgIDAsXG4gICAgICBFTlZJUk9OTUVOVF9DT05TVEFOVFMuRU5WSVJPTk1FTlRfRElNRU5TSU9OUyxcbiAgICAgIEVOVklST05NRU5UX0NPTlNUQU5UUy5FTlZJUk9OTUVOVF9ESU1FTlNJT05TLFxuICAgICAgdGhpcy5wb3MueCxcbiAgICAgIHRoaXMucG9zLnksXG4gICAgICBFTlZJUk9OTUVOVF9DT05TVEFOVFMuRU5WSVJPTk1FTlRfUkVTSVpFLFxuICAgICAgRU5WSVJPTk1FTlRfQ09OU1RBTlRTLkVOVklST05NRU5UX1JFU0laRSxcbiAgICApO1xuICB9XG59IiwiaW1wb3J0IExldmVsIGZyb20gXCIuL2xldmVsXCI7XG5pbXBvcnQgQXZhdGFyIGZyb20gJy4vYXZhdGFyJztcblxuY29uc3QgQVZBVEFSX0NPTlNUQU5UUyA9IHtcbiAgQVZBVEFSX0RJTUVOU0lPTlM6IHtcbiAgICB3aWR0aDogMTUwLFxuICAgIGhlaWdodDogMzAwXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJlbmEge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMuZGltZW5zaW9ucyA9IHsgd2lkdGg6IGNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0IH07XG4gICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICB0aGlzLnNvdW5kID0gZmFsc2U7XG4gICAgdGhpcy5oZWxwTW9kYWwgPSBmYWxzZTtcbiAgICB0aGlzLndpbm5lciA9IG51bGw7XG5cbiAgICB0aGlzLmRvY3VtZW50T2Zmc2V0WCA9IChkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIC0gdGhpcy5kaW1lbnNpb25zLndpZHRoKSAvIDI7XG4gICAgdGhpcy5kb2N1bWVudE9mZnNldFkgPSAoZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQgLSA4MCAtIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpIC8gMjtcblxuICAgIHRoaXMucGxheVBvcyA9IHtcbiAgICAgIHg6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIgLSAxMTAsXG4gICAgICB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiArIDI4XG4gICAgfTtcbiAgICB0aGlzLnBsYXlEaW1lbnNpb25zID0ge1xuICAgICAgZHg6IDIyMCxcbiAgICAgIGR5OiA1NlxuICAgIH07XG5cbiAgICB0aGlzLnBhdXNlUG9zID0ge1xuICAgICAgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC0gNjAsXG4gICAgICB5OiAyNVxuICAgIH07XG4gICAgdGhpcy5wYXVzZURpbWVuc2lvbnMgPSB7XG4gICAgICBkeDogMzAsXG4gICAgICBkeTogNDBcbiAgICB9O1xuXG4gICAgdGhpcy5zb3VuZFBvcyA9IHtcbiAgICAgIHg6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIDEzMCxcbiAgICAgIHk6IDIwXG4gICAgfTtcbiAgICB0aGlzLnNvdW5kRGltZW5zaW9ucyA9IHtcbiAgICAgIGR4OiA1MCxcbiAgICAgIGR5OiA1MFxuICAgIH07XG5cbiAgICB0aGlzLmhlbHBQb3MgPSB7XG4gICAgICB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLSA3MCxcbiAgICAgIHk6IDIwXG4gICAgfTtcbiAgICB0aGlzLmhlbHBEaW1lbnNpb25zID0ge1xuICAgICAgZHg6IDUwLFxuICAgICAgZHk6IDUwXG4gICAgfTtcblxuICAgIHRoaXMuc291bmRPYmogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXVkaW9cIik7XG4gICAgdGhpcy5zb3VuZE9iai5zcmMgPSAnZnJvbnRlbmQvYXNzZXRzL2F1ZGlvL3VpLW9zdC5tcDMnO1xuICAgIHRoaXMuc291bmRPYmouc2V0QXR0cmlidXRlKFwicHJlbG9hZFwiLCBcImF1dG9cIik7XG4gICAgdGhpcy5zb3VuZE9iai5zZXRBdHRyaWJ1dGUoXCJjb250cm9sc1wiLCBcIm5vbmVcIik7XG4gICAgdGhpcy5zb3VuZE9iai5zZXRBdHRyaWJ1dGUoXCJsb29wXCIsIFwidHJ1ZVwiKTtcbiAgICB0aGlzLnNvdW5kT2JqLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuc291bmRPYmopO1xuXG4gICAgdGhpcy5kcmF3QmFja2dyb3VuZCA9IHRoaXMuZHJhd0JhY2tncm91bmQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRyYXdIZWxwID0gdGhpcy5kcmF3SGVscC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlUGxheSA9IHRoaXMuaGFuZGxlUGxheS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlUGF1c2UgPSB0aGlzLmhhbmRsZVBhdXNlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVNdXRlID0gdGhpcy5oYW5kbGVNdXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVIZWxwID0gdGhpcy5oYW5kbGVIZWxwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVBdHRhY2sgPSB0aGlzLmhhbmRsZUF0dGFjay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlTW9kYWwgPSB0aGlzLmhhbmRsZU1vZGFsLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnBsYXkgPSB0aGlzLnBsYXkuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlc3RhcnQgPSB0aGlzLnJlc3RhcnQuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucmVzdGFydCgpO1xuICB9XG5cbiAgcmVzdGFydCgpIHtcbiAgICB0aGlzLmxldmVsID0gbmV3IExldmVsKHRoaXMuY3R4LCB0aGlzLmRpbWVuc2lvbnMpO1xuICAgIHRoaXMucGxheWVyMSA9IG5ldyBBdmF0YXIodGhpcy5jdHgsIHRoaXMuZGltZW5zaW9ucywgMSk7XG4gICAgdGhpcy5wbGF5ZXIyID0gbmV3IEF2YXRhcih0aGlzLmN0eCwgdGhpcy5kaW1lbnNpb25zLCAyKTtcbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMud2lubmVyID0gbnVsbDtcbiAgICB0aGlzLnBsYXkoKTtcbiAgfVxuICBcbiAgcGxheSgpIHtcbiAgICB0aGlzLmN0eC5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVQbGF5KTtcbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgfVxuICBcbiAgYW5pbWF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuZ2FtZU92ZXIpIHtcbiAgICAgIHRoaXMuY3R4LmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZU11dGUpO1xuICAgICAgdGhpcy5jdHguY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlSGVscCk7XG4gICAgICB0aGlzLmN0eC5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVQYXVzZSk7XG4gICAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVBdHRhY2spO1xuICAgICAgLy8gVE9ETzogVEVNUE9SQVJZXG4gICAgICBpZiAodGhpcy5wYXVzZWQpIHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZSk7XG4gICAgICAgIHRoaXMubGV2ZWwuYW5pbWF0ZSh0aGlzLnBsYXllcjEuc3RhdGUuaGVhbHRoLCB0aGlzLnBsYXllcjIuc3RhdGUuaGVhbHRoLCB0cnVlKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIxLmFuaW1hdGUodHJ1ZSk7XG4gICAgICAgIHRoaXMucGxheWVyMi5hbmltYXRlKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy53aW5uZXIgPSB0aGlzLmxldmVsLmFuaW1hdGUodGhpcy5wbGF5ZXIxLnN0YXRlLmhlYWx0aCwgdGhpcy5wbGF5ZXIyLnN0YXRlLmhlYWx0aCk7XG4gICAgICAgIGxldCBwMUF0dGFja0hpdGJveCA9IHRoaXMucGxheWVyMS5hbmltYXRlKGZhbHNlKTtcbiAgICAgICAgbGV0IHAyQXR0YWNrSGl0Ym94ID0gdGhpcy5wbGF5ZXIyLmFuaW1hdGUoZmFsc2UpO1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXIxLnN0YXRlLmJhc2ljQXR0YWNraW5nICYmICF0aGlzLnBsYXllcjEuc3RhdGUuZGFtYWdlRG9uZSkge1xuICAgICAgICAgIHRoaXMuY2hlY2tBdHRhY2tDb2xsaXNpb24ocDFBdHRhY2tIaXRib3gsIHRoaXMucGxheWVyMSwgdGhpcy5wbGF5ZXIyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wbGF5ZXIyLnN0YXRlLmJhc2ljQXR0YWNraW5nICYmICF0aGlzLnBsYXllcjIuc3RhdGUuZGFtYWdlRG9uZSkge1xuICAgICAgICAgIHRoaXMuY2hlY2tBdHRhY2tDb2xsaXNpb24ocDJBdHRhY2tIaXRib3gsIHRoaXMucGxheWVyMiwgdGhpcy5wbGF5ZXIxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy53aW5uZXIgPT09ICd0aW1lVXAnKSB7XG4gICAgICAgICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoWydwbGF5ZXIxJywgJ3BsYXllcjInXS5pbmNsdWRlcyh0aGlzLndpbm5lcikpIHtcbiAgICAgICAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN0eC5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVNdXRlKTtcbiAgICAgIHRoaXMuY3R4LmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZUhlbHApO1xuICAgICAgdGhpcy5jdHguY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlUGF1c2UpO1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZSk7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIC8vIERpc3BsYXkgc3RhcnQgc2NyZWVuXG4gICAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gT05MWSBGT1IgU1RBUlRJTkcgU0NSRUVOXG4gIGRyYXdCYWNrZ3JvdW5kKCkge1xuICAgIHRoaXMuY3R4LmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZVBsYXkpO1xuXG4gICAgbGV0IGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcbiAgICBiYWNrZ3JvdW5kLnNyYyA9ICdmcm9udGVuZC9hc3NldHMvaW1hZ2VzL3N0YXJ0LWJhY2tncm91bmQuanBnJztcbiAgICBiYWNrZ3JvdW5kLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCAwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgICAgXG4gICAgICBsZXQgaGVscCA9IG5ldyBJbWFnZSgpO1xuICAgICAgaGVscC5zcmMgPSAnZnJvbnRlbmQvYXNzZXRzL2ltYWdlcy9oZWxwLnBuZyc7XG4gICAgICBoZWxwLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGhlbHAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIDcwLCAyMCwgNTAsIDUwKTtcbiAgICAgIH07XG4gIFxuICAgICAgbGV0IG11dGUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIHRoaXMuc291bmQgPyBcbiAgICAgIG11dGUuc3JjID0gJ2Zyb250ZW5kL2Fzc2V0cy9pbWFnZXMvc3BlYWtlci5wbmcnOlxuICAgICAgbXV0ZS5zcmMgPSAnZnJvbnRlbmQvYXNzZXRzL2ltYWdlcy9tdXRlLnBuZydcbiAgICAgIG11dGUub25sb2FkID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UobXV0ZSwgdGhpcy5kaW1lbnNpb25zLndpZHRoIC0gMTMwLCAyMCwgNTAsIDUwKTtcbiAgICAgIH07XG4gIFxuICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnV0hJVEUnO1xuICBcbiAgICAgIGxldCBoZWFkZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGhlYWRlci5zcmMgPSAnZnJvbnRlbmQvYXNzZXRzL2ltYWdlcy9oZWFkZXItd2hpdGUucG5nJztcbiAgICAgIGhlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICBoZWFkZXIsIFxuICAgICAgICAgIDIwLCBcbiAgICAgICAgICB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiAtIDEwMCwgXG4gICAgICAgICAgdGhpcy5kaW1lbnNpb25zLndpZHRoIC0gNDAsIFxuICAgICAgICAgIDU2XG4gICAgICAgICk7XG4gICAgICB9XG4gIFxuICAgICAgc3dpdGNoICh0aGlzLndpbm5lcikge1xuICAgICAgICBjYXNlIG51bGw6XG4gICAgICAgICAgdGhpcy5jdHguZm9udCA9ICc1NnB4IFRyZWJ1Y2hldCBNUyc7XG4gICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXG4gICAgICAgICAgICAnUGxheSBub3chJyxcbiAgICAgICAgICAgIHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsXG4gICAgICAgICAgICB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiArIDcyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndGltZVVwJzpcbiAgICAgICAgICB0aGlzLmN0eC5mb250ID0gJzM2cHggVHJlYnVjaGV0IE1TJztcbiAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcbiAgICAgICAgICAgICdUaW1lIHJhbiBvdXQuLi4gaGF2ZSB5b3UgdHJpZWQgYXR0YWNraW5nPycsXG4gICAgICAgICAgICB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLFxuICAgICAgICAgICAgdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDIgKyAxMlxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5jdHguZm9udCA9ICc1NnB4IFRyZWJ1Y2hldCBNUyc7XG4gICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXG4gICAgICAgICAgICAnUGxheSBhZ2Fpbj8nLFxuICAgICAgICAgICAgdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMixcbiAgICAgICAgICAgIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyICsgNzJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnMzZweCBUcmVidWNoZXQgTVMnO1xuICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFxuICAgICAgICAgICAgYENvbmdyYXR1bGF0aW9ucywgJHt0aGlzLndpbm5lcn0gd29uIWAsXG4gICAgICAgICAgICB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLFxuICAgICAgICAgICAgdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDIgKyA4XG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLmN0eC5mb250ID0gJzU2cHggVHJlYnVjaGV0IE1TJztcbiAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcbiAgICAgICAgICAgICdQbGF5IGFnYWluPycsXG4gICAgICAgICAgICB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLFxuICAgICAgICAgICAgdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDIgKyA3MlxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgfVxuXG4gIGRyYXdIZWxwKCkge1xuICAgIHRoaXMuY3R4LmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZU1vZGFsKTtcblxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsIDAsIDAsIDAuNyknO1xuICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG5cbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpJztcbiAgICB0aGlzLmN0eC5maWxsUmVjdCgxMjAsIDYwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGggLSAyNDAsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLSAxMjApO1xuXG4gICAgdGhpcy5jdHgudGV4dEFsaWduID0gJ2xlZnQnO1xuICAgIHRoaXMuY3R4LmZvbnQgPSAnNTZweCBBcmlhbCc7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICB0aGlzLmN0eC5maWxsVGV4dCgnSG93IHRvIHBsYXk6JywgMjEwLCAxMjApO1xuXG4gICAgdGhpcy5jdHguZm9udCA9ICcyNHB4IFRyZWJ1Y2hldCBNUyc7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICB0aGlzLmN0eC5maWxsVGV4dCgnUGxheWVyIDE6IFcgPSBKdW1wLCBBID0gTGVmdCwgRCA9IFJpZ2h0LCBKID0gQXR0YWNrJywgMjEwLCAxNTApO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdQbGF5ZXIgMjogXiA9IEp1bXAsIDwgPSBMZWZ0LCA+ID0gUmlnaHQsIDEgKG51bXBhZCkgPSBBdHRhY2snLCAyMTAsIDE4MCk7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoJ1lvdSBoYXZlIHVudGlsIHRoZSB0aW1lIHJ1bnMgb3V0IHRvIGRlZmVhdCB0aGUgb3RoZXIgcGxheWVyIScsIDIxMCwgMjEwKTtcbiAgICB0aGlzLmN0eC5maWxsVGV4dCgnTW92ZSBlcnJhdGljYWxseSBhbmQganVtcCB0byBhdm9pZCBhdHRhY2tzIGFuZCBvdXRzbWFydCB5b3VyIG9wcG9uZW50LicsIDIxMCwgMjQwKTtcblxuICAgIHRoaXMuY3R4LmZvbnQgPSAnNTZweCBBcmlhbCc7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICB0aGlzLmN0eC5maWxsVGV4dCgnQ3JlZGl0czonLCAyMTAsIDM0MCk7XG5cbiAgICB0aGlzLmN0eC5mb250ID0gJzI0cHggVHJlYnVjaGV0IE1TJztcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdTdGFydGluZyBzY3JlZW46IGh0dHA6Ly93d3cuYXZvaWRpbmd0aGVwdWRkbGUuY29tL25ld3MvMjAxNS8xMi8yMS8uLi4nLCAyMTAsIDM3MCk7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoJ2NvbXBsZXRlLWJhdGNoLW9mLXRla2tlbi03LWZhdGVkLXJldHJpYnV0aW9uLWltYWdlcy1pbi1oaWdoLmh0bWwnLCAyMTAsIDQwMCk7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoJ1Nha3VyYSBwZXRhbHM6IGh0dHBzOi8vd3d3LjEyM3JmLmNvbS9waG90b18xMDk3NzQwODFfc3RvY2stdmVjdG9yLS4uLicsIDIxMCwgNDMwKTtcbiAgICB0aGlzLmN0eC5maWxsVGV4dCgnc2FrdXJhLXBldGFscy1mYWxsaW5nLWRvd24tcm9tYW50aWMtcGluay1zaWxreS1tZWRpdW0tZmxvd2Vycy1zcGFyc2UtLi4uJywgMjEwLCA0NjApO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdmbHlpbmctY2hlcnJ5LXBldGFscy10b3AtZ3JhZGllLmh0bWwnLCAyMTAsIDQ5MCk7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoJ1Nub3dmbGFrZXM6IGh0dHBzOi8vd3d3LmZyZWVwaWsuY29tL2ZyZWUtcGhvdG9zLXZlY3RvcnMvY2hyaXN0bWFzLi4uJywgMjEwLCA1MjApO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KCcoQ2hyaXN0bWFzIHZlY3RvciBjcmVhdGVkIGJ5IGZyZWVwaWspJywgMjEwLCA1NTApO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdBcmVuYSBiYWNrZ3JvdW5kOiBodHRwczovL3dhbGxwYXBlcmNhdmUuY29tL3cvd3AyNjAzNDgwJywgMjEwLCA1ODApO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdSeXUgc3ByaXRlc2hlZXQ6IGh0dHBzOi8vd3d3LmRldmlhbnRhcnQuY29tL3NpbDNudC1qL2FydC8uLi4nLCAyMTAsIDYxMCk7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoJ1J5dS1TdHJlZXQtRmlnaHRlci0xLVNwcml0ZS1TaGVldC03NjkwMTE3MTMgKGJ5IHNpbDNudC1qKScsIDIxMCwgNjQwKTtcbiAgICB0aGlzLmN0eC5maWxsVGV4dCgnSGVscCBhbmQgc291bmQgaWNvbnM6IGh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbSAobWFkZSBieSBGcmVlcGlrKScsIDIxMCwgNjcwKTtcbiAgfVxuXG4gIGhhbmRsZVBsYXkoZSkge1xuICAgIGxldCBjbGlja1BvcyA9IHtcbiAgICAgIHg6IGUucGFnZVggLSB0aGlzLmRvY3VtZW50T2Zmc2V0WCxcbiAgICAgIHk6IGUucGFnZVkgLSB0aGlzLmRvY3VtZW50T2Zmc2V0WSAtIDgwXG4gICAgfVxuICAgIGlmIChjbGlja1Bvcy54ID49IHRoaXMucGxheVBvcy54ICYmIGNsaWNrUG9zLnggPD0gdGhpcy5wbGF5UG9zLnggKyB0aGlzLnBsYXlEaW1lbnNpb25zLmR4KSB7XG4gICAgICBpZiAoY2xpY2tQb3MueSA+PSB0aGlzLnBsYXlQb3MueSAmJiBjbGlja1Bvcy55IDw9IHRoaXMucGxheVBvcy55ICsgdGhpcy5wbGF5RGltZW5zaW9ucy5keSkge1xuICAgICAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVzdGFydCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVBhdXNlKGUpIHtcbiAgICBsZXQgY2xpY2tQb3MgPSB7XG4gICAgICB4OiBlLnBhZ2VYIC0gdGhpcy5kb2N1bWVudE9mZnNldFgsXG4gICAgICB5OiBlLnBhZ2VZIC0gdGhpcy5kb2N1bWVudE9mZnNldFkgLSA4MFxuICAgIH1cbiAgICBpZiAoY2xpY2tQb3MueCA+PSB0aGlzLnBhdXNlUG9zLnggJiYgY2xpY2tQb3MueCA8PSB0aGlzLnBhdXNlUG9zLnggKyB0aGlzLnBhdXNlRGltZW5zaW9ucy5keCkge1xuICAgICAgaWYgKGNsaWNrUG9zLnkgPj0gdGhpcy5wYXVzZVBvcy55ICYmIGNsaWNrUG9zLnkgPD0gdGhpcy5wYXVzZVBvcy55ICsgdGhpcy5wYXVzZURpbWVuc2lvbnMuZHkpIHtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSAhdGhpcy5wYXVzZWQ7XG4gICAgICAgIGlmICghdGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU11dGUoZSkge1xuICAgIGxldCBjbGlja1BvcyA9IHtcbiAgICAgIHg6IGUucGFnZVggLSB0aGlzLmRvY3VtZW50T2Zmc2V0WCxcbiAgICAgIHk6IGUucGFnZVkgLSB0aGlzLmRvY3VtZW50T2Zmc2V0WSAtIDgwXG4gICAgfVxuICAgIGlmIChjbGlja1Bvcy54ID49IHRoaXMuc291bmRQb3MueCAmJiBjbGlja1Bvcy54IDw9IHRoaXMuc291bmRQb3MueCArIHRoaXMuc291bmREaW1lbnNpb25zLmR4KSB7XG4gICAgICBpZiAoY2xpY2tQb3MueSA+PSB0aGlzLnNvdW5kUG9zLnkgJiYgY2xpY2tQb3MueSA8PSB0aGlzLnNvdW5kUG9zLnkgKyB0aGlzLnNvdW5kRGltZW5zaW9ucy5keSkge1xuICAgICAgICB0aGlzLnNvdW5kID0gIXRoaXMuc291bmQ7XG4gICAgICAgIGlmICh0aGlzLnNvdW5kKSB7XG4gICAgICAgICAgdGhpcy5zb3VuZE9iai5wbGF5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zb3VuZE9iai5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhd0JhY2tncm91bmQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIGhhbmRsZUhlbHAoZSkge1xuICAgIGxldCBjbGlja1BvcyA9IHtcbiAgICAgIHg6IGUucGFnZVggLSB0aGlzLmRvY3VtZW50T2Zmc2V0WCxcbiAgICAgIHk6IGUucGFnZVkgLSB0aGlzLmRvY3VtZW50T2Zmc2V0WSAtIDgwXG4gICAgfVxuICAgIGlmIChjbGlja1Bvcy54ID49IHRoaXMuaGVscFBvcy54ICYmIGNsaWNrUG9zLnggPD0gdGhpcy5oZWxwUG9zLnggKyB0aGlzLmhlbHBEaW1lbnNpb25zLmR4KSB7XG4gICAgICBpZiAoY2xpY2tQb3MueSA+PSB0aGlzLmhlbHBQb3MueSAmJiBjbGlja1Bvcy55IDw9IHRoaXMuaGVscFBvcy55ICsgdGhpcy5oZWxwRGltZW5zaW9ucy5keSkge1xuICAgICAgICB0aGlzLmhlbHBNb2RhbCA9ICF0aGlzLmhlbHBNb2RhbDtcbiAgICAgICAgaWYgKHRoaXMuaGVscE1vZGFsKSB7XG4gICAgICAgICAgdGhpcy5kcmF3SGVscCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZHJhd0JhY2tncm91bmQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUF0dGFjayhlKSB7XG4gICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgIGNhc2UgNzQ6XG4gICAgICAgIHRoaXMucGxheWVyMS5iYXNpY0F0dGFjaygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgOTc6XG4gICAgICAgIHRoaXMucGxheWVyMi5iYXNpY0F0dGFjaygpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBoYW5kbGVNb2RhbChlKSB7XG4gICAgbGV0IGNsaWNrUG9zID0ge1xuICAgICAgeDogZS5wYWdlWCAtIHRoaXMuZG9jdW1lbnRPZmZzZXRYLFxuICAgICAgeTogZS5wYWdlWSAtIHRoaXMuZG9jdW1lbnRPZmZzZXRZIC0gODBcbiAgICB9XG4gICAgaWYgKGNsaWNrUG9zLnggPCAxMjAgfHwgY2xpY2tQb3MueCA+IHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIDEyMFxuICAgICAgfHwgY2xpY2tQb3MueSA8IDYwIHx8IGNsaWNrUG9zLnkgPiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC0gNjApIHtcbiAgICAgIHRoaXMuY3R4LmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZU1vZGFsKTtcbiAgICAgIHRoaXMuaGVscE1vZGFsID0gIXRoaXMuaGVscE1vZGFsO1xuICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tBdHRhY2tDb2xsaXNpb24oYm91bmQsIGF0dGFja2luZ1BsYXllciwgb3RoZXJQbGF5ZXIpIHtcbiAgICBsZXQgb3RoZXJQbGF5ZXJCb3VuZCA9IHtcbiAgICAgIHgxOiBvdGhlclBsYXllci5wb3MueCAtIEFWQVRBUl9DT05TVEFOVFMuQVZBVEFSX0RJTUVOU0lPTlMud2lkdGggLyAyLFxuICAgICAgeTE6IG90aGVyUGxheWVyLnBvcy55LFxuICAgICAgeDI6IG90aGVyUGxheWVyLnBvcy54ICsgQVZBVEFSX0NPTlNUQU5UUy5BVkFUQVJfRElNRU5TSU9OUy53aWR0aCAvIDIsXG4gICAgICB5Mjogb3RoZXJQbGF5ZXIucG9zLnkgKyBBVkFUQVJfQ09OU1RBTlRTLkFWQVRBUl9ESU1FTlNJT05TLmhlaWdodFxuICAgIH07XG4gICAgaWYgKGJvdW5kLnggPj0gb3RoZXJQbGF5ZXJCb3VuZC54MSAmJiBib3VuZC54IDw9IG90aGVyUGxheWVyQm91bmQueDIpIHtcbiAgICAgIGlmIChib3VuZC55ID49IG90aGVyUGxheWVyQm91bmQueTEgJiYgYm91bmQueSA8PSBvdGhlclBsYXllckJvdW5kLnkyKSB7XG4gICAgICAgIGF0dGFja2luZ1BsYXllci5zdGF0ZS5kYW1hZ2VEb25lID0gdHJ1ZTtcbiAgICAgICAgb3RoZXJQbGF5ZXIuc3RhdGUuaGVhbHRoIC09IGF0dGFja2luZ1BsYXllci5zdGF0ZS5iYXNpY0F0dGFja0RhbWFnZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59IiwiaW1wb3J0IEVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnQnO1xuXG5jb25zdCBDT0xPUl9QQUxFVFRFID0ge1xuICBQUklNQVJZOiAnIzAwMDcwQScsXG4gIFNFQ09OREFSWTogJyMyOTQ1NTInLFxuICBURVJUSUFSWTogJyM1OTc4ODQnLFxuICBRVUFURVJOQVJZOiAnIzlFQjlCMycsXG4gIFFVSU5URVJOQVJZOiAnI0FDQzRDRSdcbn07XG5cbmNvbnN0IExFVkVMX0NPTlNUQU5UUyA9IHtcbiAgTUFYX1RJTUU6IDYwICogMTIwLFxuICBUSU1FUl9URVhUX0hFSUdIVDogNzUsXG4gIFRJTUVSX1JBRElVUzogNDUsXG4gIE1BWF9IRUFMVEg6IDIwMCxcbiAgSEVBTFRIX0JBUjoge1xuICAgIHdpZHRoOiA0MDAsXG4gICAgaGVpZ2h0OiAyMFxuICB9LFxuICBPRkZTRVQ6IDIwLFxuICBFTlZJUk9OTUVOVF9QUk9CQUJJTElUWTogNDUsXG4gIEVOVklST05NRU5UUzogWydzYWt1cmEnLCAnc25vd2ZsYWtlJ11cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsIHtcbiAgY29uc3RydWN0b3IoY3R4LCBkaW1lbnNpb25zKSB7XG4gICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9ucztcbiAgICB0aGlzLnRpbWUgPSBMRVZFTF9DT05TVEFOVFMuTUFYX1RJTUU7XG4gICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICB0aGlzLnBsYXllckhwUG9zID0ge1xuICAgICAgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMiAtIExFVkVMX0NPTlNUQU5UUy5USU1FUl9SQURJVVMsXG4gICAgICB5OiBMRVZFTF9DT05TVEFOVFMuVElNRVJfUkFESVVTIC0gTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIuaGVpZ2h0ICsgNVxuICAgIH07XG5cbiAgICB0aGlzLmJvdEhwUG9zID0ge1xuICAgICAgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMiArIExFVkVMX0NPTlNUQU5UUy5USU1FUl9SQURJVVMsXG4gICAgICB5OiBMRVZFTF9DT05TVEFOVFMuVElNRVJfUkFESVVTIC0gTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIuaGVpZ2h0ICsgNVxuICAgIH07XG5cbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5lbnZpcm9ubWVudCA9IFtdO1xuXG4gICAgbGV0IGVudmlyb25tZW50SW5kZXggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoTEVWRUxfQ09OU1RBTlRTLkVOVklST05NRU5UUy5sZW5ndGggLSAxKSk7XG4gICAgdGhpcy5lbnZpcm9ubWVudFR5cGUgPSBMRVZFTF9DT05TVEFOVFMuRU5WSVJPTk1FTlRTW2Vudmlyb25tZW50SW5kZXhdO1xuXG4gICAgdGhpcy5kcmF3VGltZXJDaXJjbGUgPSB0aGlzLmRyYXdUaW1lckNpcmNsZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJhd1RpbWVyRGlzcGxheSA9IHRoaXMuZHJhd1RpbWVyRGlzcGxheS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJhd1RpbWVyVGV4dCA9IHRoaXMuZHJhd1RpbWVyVGV4dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJhd0hlYWx0aEJhcnMgPSB0aGlzLmRyYXdIZWFsdGhCYXJzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmF3TmFtZXMgPSB0aGlzLmRyYXdOYW1lcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJhd1BhdXNlID0gdGhpcy5kcmF3UGF1c2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kID0gdGhpcy5kcmF3QmFja2dyb3VuZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJhd0Zsb29yID0gdGhpcy5kcmF3Rmxvb3IuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGFuaW1hdGUocGxheWVySGVhbHRoLCBib3RIZWFsdGgsIHBhdXNlZCkge1xuICAgIGxldCB0aW1lO1xuICAgIGxldCB3aW5uZXI7XG5cbiAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKCk7XG5cbiAgICBsZXQgZW52aXJvbm1lbnRHZW5lcmF0aW9uID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogTEVWRUxfQ09OU1RBTlRTLkVOVklST05NRU5UX1BST0JBQklMSVRZKTtcblxuICAgIGlmIChlbnZpcm9ubWVudEdlbmVyYXRpb24gPT09IDEpIHtcbiAgICAgIGxldCBuZXdFbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudCh0aGlzLmN0eCwgdGhpcy5kaW1lbnNpb25zLCB0aGlzLmVudmlyb25tZW50VHlwZSk7XG4gICAgICB0aGlzLmVudmlyb25tZW50LnB1c2gobmV3RW52aXJvbm1lbnQpO1xuICAgIH1cblxuICAgIHRoaXMuZW52aXJvbm1lbnQuZm9yRWFjaCgoZW52aXJvbm1lbnQsIGlkeCkgPT4ge1xuICAgICAgZW52aXJvbm1lbnQuYW5pbWF0ZSgpO1xuICAgICAgaWYgKGVudmlyb25tZW50LnBvcy55ID4gdGhpcy5kaW1lbnNpb25zLmhlaWdodCArIDk0KSB7XG4gICAgICAgIHRoaXMuZW52aXJvbm1lbnQuc2hpZnQoKTtcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICB0aW1lID0gdGhpcy5kcmF3VGltZXIoKTtcbiAgICB0aGlzLmRyYXdIZWFsdGhCYXJzKCk7XG4gICAgd2lubmVyID0gdGhpcy5kcmF3Q3VycmVudEhlYWx0aEJhcnMocGxheWVySGVhbHRoLCBib3RIZWFsdGgpO1xuICAgIHRoaXMuZHJhd05hbWVzKCk7XG4gICAgLy8gdGhpcy5kcmF3Rmxvb3IoKTtcbiAgICBwYXVzZWQgPyB0aGlzLnBhdXNlZCA9IHRydWUgOiB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuZHJhd1BhdXNlKCk7XG4gICAgICBcbiAgICBpZiAodGltZSA9PT0gMCkge1xuICAgICAgdGhpcy5lbnZpcm9ubWVudCA9IFtdO1xuICAgICAgcmV0dXJuICd0aW1lVXAnO1xuICAgIH0gZWxzZSBpZiAod2lubmVyKSB7XG4gICAgICB0aGlzLmVudmlyb25tZW50ID0gW107XG4gICAgICByZXR1cm4gd2lubmVyO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wYXVzZWQpIHtcbiAgICAgIHJldHVybiAncGF1c2VkJztcbiAgICB9XG4gIH1cblxuICBkcmF3VGltZXIoKSB7XG4gICAgLy8gVE9ETzogTmVlZCBiZXR0ZXIgc29sdXRpb25cbiAgICB0aGlzLmRyYXdUaW1lckNpcmNsZSgpO1xuICAgIHRoaXMuZHJhd1RpbWVyRGlzcGxheSgpO1xuICAgIHRoaXMuZHJhd1RpbWVyVGV4dCgpO1xuICAgIFxuICAgIHRoaXMudGltZSA9IHRoaXMudGltZSAtIDE7XG4gICAgaWYgKHRoaXMudGltZSA9PT0gMCkge1xuICAgICAgbGV0IHJldHVyblRpbWUgPSAwO1xuICAgICAgdGhpcy50aW1lID0gTEVWRUxfQ09OU1RBTlRTLk1BWF9USU1FO1xuICAgICAgcmV0dXJuIHJldHVyblRpbWU7XG4gICAgfVxuICB9XG5cbiAgZHJhd1RpbWVyVGV4dCgpIHtcbiAgICB0aGlzLmN0eC5mb250ID0gJzQ4cHggVHJlYnVjaGV0IE1TJztcbiAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnV0hJVEUnO1xuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gQ09MT1JfUEFMRVRURS5QUklNQVJZO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KFxuICAgICAgYCR7TWF0aC5yb3VuZCh0aGlzLnRpbWUgLyA2MCl9YCxcbiAgICAgIHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsXG4gICAgICBMRVZFTF9DT05TVEFOVFMuVElNRVJfVEVYVF9IRUlHSFQgKyAxMFxuICAgICk7XG4gICAgdGhpcy5jdHguc3Ryb2tlVGV4dChcbiAgICAgIGAke01hdGgucm91bmQodGhpcy50aW1lIC8gNjApfWAsXG4gICAgICB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLFxuICAgICAgTEVWRUxfQ09OU1RBTlRTLlRJTUVSX1RFWFRfSEVJR0hUICsgMTBcbiAgICApO1xuICB9XG5cbiAgZHJhd1RpbWVyQ2lyY2xlKCkge1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IENPTE9SX1BBTEVUVEUuU0VDT05EQVJZO1xuICAgIHRoaXMuY3R4LmFyYyhcbiAgICAgIHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsXG4gICAgICBMRVZFTF9DT05TVEFOVFMuVElNRVJfVEVYVF9IRUlHSFQgLSA1LFxuICAgICAgTEVWRUxfQ09OU1RBTlRTLlRJTUVSX1JBRElVUywgMCwgMiAqIE1hdGguUElcbiAgICAgICk7XG4gICAgdGhpcy5jdHguZmlsbCgpO1xuICB9XG5cbiAgZHJhd1RpbWVyRGlzcGxheSgpIHtcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBDT0xPUl9QQUxFVFRFLlFVQVRFUk5BUlk7XG4gICAgdGhpcy5jdHguYXJjKFxuICAgICAgdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMixcbiAgICAgIExFVkVMX0NPTlNUQU5UUy5USU1FUl9URVhUX0hFSUdIVCAtIDUsXG4gICAgICBMRVZFTF9DT05TVEFOVFMuVElNRVJfUkFESVVTLFxuICAgICAgLSAwLjUgKiBNYXRoLlBJLFxuICAgICAgKExFVkVMX0NPTlNUQU5UUy5NQVhfVElNRSAtIHRoaXMudGltZSlcbiAgICAgICogMiAqIE1hdGguUEkgLyBMRVZFTF9DT05TVEFOVFMuTUFYX1RJTUVcbiAgICAgIC0gMC41ICogTWF0aC5QSVxuICAgICk7XG4gICAgdGhpcy5jdHgubGluZVRvKHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsXG4gICAgICBMRVZFTF9DT05TVEFOVFMuVElNRVJfVEVYVF9IRUlHSFQgLSA1XG4gICAgKTtcbiAgICB0aGlzLmN0eC5maWxsKCk7XG4gIH1cblxuICBkcmF3SGVhbHRoQmFycygpIHtcbiAgICAvLyBQbGF5ZXIgaGVhbHRoIGNvbnRhaW5lclxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ0JMQUNLJztcbiAgICB0aGlzLmN0eC5tb3ZlVG8oXG4gICAgICB0aGlzLnBsYXllckhwUG9zLngsXG4gICAgICB0aGlzLnBsYXllckhwUG9zLnlcbiAgICApO1xuICAgIHRoaXMuY3R4LmxpbmVUbyhcbiAgICAgIHRoaXMucGxheWVySHBQb3MueCAtIExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLndpZHRoLFxuICAgICAgdGhpcy5wbGF5ZXJIcFBvcy55XG4gICAgKTtcbiAgICB0aGlzLmN0eC5saW5lVG8oXG4gICAgICB0aGlzLnBsYXllckhwUG9zLnggLSBMRVZFTF9DT05TVEFOVFMuSEVBTFRIX0JBUi53aWR0aCxcbiAgICAgIHRoaXMucGxheWVySHBQb3MueSArIExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLmhlaWdodFxuICAgICk7XG4gICAgdGhpcy5jdHgubGluZVRvKFxuICAgICAgdGhpcy5wbGF5ZXJIcFBvcy54IC0gTEVWRUxfQ09OU1RBTlRTLk9GRlNFVCxcbiAgICAgIHRoaXMucGxheWVySHBQb3MueSArIExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLmhlaWdodFxuICAgICk7XG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgdGhpcy5jdHguZmlsbCgpO1xuICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgLy9ib3QgaGVhbHRoIGNvbnRhaW5lclxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ0JMQUNLJztcbiAgICB0aGlzLmN0eC5tb3ZlVG8oXG4gICAgICB0aGlzLmJvdEhwUG9zLngsXG4gICAgICB0aGlzLmJvdEhwUG9zLnlcbiAgICApO1xuICAgIHRoaXMuY3R4LmxpbmVUbyhcbiAgICAgIHRoaXMuYm90SHBQb3MueCArIExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLndpZHRoLFxuICAgICAgdGhpcy5ib3RIcFBvcy55XG4gICAgKTtcbiAgICB0aGlzLmN0eC5saW5lVG8oXG4gICAgICB0aGlzLmJvdEhwUG9zLnggKyBMRVZFTF9DT05TVEFOVFMuSEVBTFRIX0JBUi53aWR0aCxcbiAgICAgIHRoaXMuYm90SHBQb3MueSArIExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLmhlaWdodFxuICAgICk7XG4gICAgdGhpcy5jdHgubGluZVRvKFxuICAgICAgdGhpcy5ib3RIcFBvcy54ICsgTEVWRUxfQ09OU1RBTlRTLk9GRlNFVCxcbiAgICAgIHRoaXMuYm90SHBQb3MueSArIExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLmhlaWdodFxuICAgICk7XG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgdGhpcy5jdHguZmlsbCgpO1xuICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICB9XG5cbiAgZHJhd0N1cnJlbnRIZWFsdGhCYXJzKHBsYXllckhlYWx0aCwgYm90SGVhbHRoKSB7XG5cbiAgICBpZiAocGxheWVySGVhbHRoIDw9IDApIHtcbiAgICAgIHJldHVybiAncGxheWVyMic7XG4gICAgfSBlbHNlIGlmIChib3RIZWFsdGggPD0gMCkge1xuICAgICAgcmV0dXJuICdwbGF5ZXIxJztcbiAgICB9O1xuXG4gICAgbGV0IGN1cnJlbnRIZWFsdGggPSBMRVZFTF9DT05TVEFOVFMuSEVBTFRIX0JBUi53aWR0aCAqIHBsYXllckhlYWx0aCAvIExFVkVMX0NPTlNUQU5UUy5NQVhfSEVBTFRIO1xuXG4gICAgLy8gUGxheWVyIGN1cnJlbnQgaGVhbHRoXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ1JFRCc7XG4gICAgdGhpcy5jdHgubW92ZVRvKFxuICAgICAgdGhpcy5wbGF5ZXJIcFBvcy54LFxuICAgICAgdGhpcy5wbGF5ZXJIcFBvcy55XG4gICAgKTtcbiAgICB0aGlzLmN0eC5saW5lVG8oXG4gICAgICB0aGlzLnBsYXllckhwUG9zLnggLSBjdXJyZW50SGVhbHRoLFxuICAgICAgdGhpcy5wbGF5ZXJIcFBvcy55XG4gICAgKTtcbiAgICBpZiAoY3VycmVudEhlYWx0aCA8IExFVkVMX0NPTlNUQU5UUy5PRkZTRVQpIHtcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyhcbiAgICAgICAgdGhpcy5wbGF5ZXJIcFBvcy54IC0gY3VycmVudEhlYWx0aCxcbiAgICAgICAgLy8gY3VycmVudEhlYWx0aCA9IGN1cnJlbnRIZWFsdGggKiB0YW4ocGkvNClcbiAgICAgICAgLy8gc2luY2Ugb2Zmc2V0ID0gaGVpZ2h0XG4gICAgICAgIHRoaXMucGxheWVySHBQb3MueSArIGN1cnJlbnRIZWFsdGhcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyhcbiAgICAgICAgdGhpcy5wbGF5ZXJIcFBvcy54IC0gY3VycmVudEhlYWx0aCxcbiAgICAgICAgdGhpcy5wbGF5ZXJIcFBvcy55ICsgTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIuaGVpZ2h0XG4gICAgICApO1xuICAgICAgdGhpcy5jdHgubGluZVRvKFxuICAgICAgICB0aGlzLnBsYXllckhwUG9zLnggLSBMRVZFTF9DT05TVEFOVFMuT0ZGU0VULFxuICAgICAgICB0aGlzLnBsYXllckhwUG9zLnkgKyBMRVZFTF9DT05TVEFOVFMuSEVBTFRIX0JBUi5oZWlnaHRcbiAgICAgICk7XG4gICAgfTtcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICBsZXQgY3VycmVudEJvdEhlYWx0aCA9IExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLndpZHRoICogYm90SGVhbHRoIC8gTEVWRUxfQ09OU1RBTlRTLk1BWF9IRUFMVEg7XG5cbiAgICAvLyBCb3QgY3VycmVudCBoZWFsdGhcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnUkVEJztcbiAgICB0aGlzLmN0eC5tb3ZlVG8oXG4gICAgICB0aGlzLmJvdEhwUG9zLngsXG4gICAgICB0aGlzLmJvdEhwUG9zLnlcbiAgICApO1xuICAgIHRoaXMuY3R4LmxpbmVUbyhcbiAgICAgIHRoaXMuYm90SHBQb3MueCArIGN1cnJlbnRCb3RIZWFsdGgsXG4gICAgICB0aGlzLmJvdEhwUG9zLnlcbiAgICApO1xuICAgIGlmIChjdXJyZW50Qm90SGVhbHRoIDwgTEVWRUxfQ09OU1RBTlRTLk9GRlNFVCkge1xuICAgICAgdGhpcy5jdHgubGluZVRvKFxuICAgICAgICB0aGlzLmJvdEhwUG9zLnggKyBjdXJyZW50Qm90SGVhbHRoLFxuICAgICAgICAvLyBjdXJyZW50Qm90SGVhbHRoID0gY3VycmVudEJvdEhlYWx0aCAqIHRhbihwaS80KVxuICAgICAgICAvLyBzaW5jZSBvZmZzZXQgPSBoZWlnaHRcbiAgICAgICAgdGhpcy5ib3RIcFBvcy55ICsgY3VycmVudEJvdEhlYWx0aFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdHgubGluZVRvKFxuICAgICAgICB0aGlzLmJvdEhwUG9zLnggKyBjdXJyZW50Qm90SGVhbHRoLFxuICAgICAgICB0aGlzLmJvdEhwUG9zLnkgKyBMRVZFTF9DT05TVEFOVFMuSEVBTFRIX0JBUi5oZWlnaHRcbiAgICAgICk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8oXG4gICAgICAgIHRoaXMuYm90SHBQb3MueCArIExFVkVMX0NPTlNUQU5UUy5PRkZTRVQsXG4gICAgICAgIHRoaXMuYm90SHBQb3MueSArIExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLmhlaWdodFxuICAgICAgKTtcbiAgICB9O1xuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgfVxuXG4gIGRyYXdOYW1lcygpIHtcbiAgICBsZXQgcGxheWVyTmFtZSA9ICdQbGF5ZXIgMSc7XG4gICAgbGV0IGJvdE5hbWUgPSAnUGxheWVyIDInO1xuICAgIGxldCBwbGF5ZXJOYW1lUG9zID0ge1xuICAgICAgeDogdGhpcy5wbGF5ZXJIcFBvcy54IC0gTEVWRUxfQ09OU1RBTlRTLk9GRlNFVCxcbiAgICAgIHk6IHRoaXMucGxheWVySHBQb3MueSArIExFVkVMX0NPTlNUQU5UUy5USU1FUl9SQURJVVMgKyA0XG4gICAgfTtcbiAgICBsZXQgYm90TmFtZVBvcyA9IHtcbiAgICAgIHg6IHRoaXMuYm90SHBQb3MueCArIExFVkVMX0NPTlNUQU5UUy5PRkZTRVQsXG4gICAgICB5OiB0aGlzLmJvdEhwUG9zLnkgKyBMRVZFTF9DT05TVEFOVFMuVElNRVJfUkFESVVTICsgNFxuICAgIH07XG5cbiAgICB0aGlzLmN0eC5mb250ID0gJzMycHggVHJlYnVjaGV0IE1TJztcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDAuNTtcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IENPTE9SX1BBTEVUVEUuU0VDT05EQVJZO1xuICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9ICdyaWdodCc7XG4gICAgdGhpcy5jdHguZmlsbFRleHQocGxheWVyTmFtZSwgcGxheWVyTmFtZVBvcy54LCBwbGF5ZXJOYW1lUG9zLnkpO1xuICAgIHRoaXMuY3R4LnN0cm9rZVRleHQocGxheWVyTmFtZSwgcGxheWVyTmFtZVBvcy54LCBwbGF5ZXJOYW1lUG9zLnkpO1xuXG4gICAgdGhpcy5jdHgudGV4dEFsaWduID0gJ2xlZnQnO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KGJvdE5hbWUsIGJvdE5hbWVQb3MueCwgYm90TmFtZVBvcy55KTtcbiAgICB0aGlzLmN0eC5zdHJva2VUZXh0KGJvdE5hbWUsIGJvdE5hbWVQb3MueCwgYm90TmFtZVBvcy55KTtcbiAgfVxuXG4gIGRyYXdQYXVzZSgpIHtcbiAgICAvLyB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAvLyAvLyB0aGlzLmN0eC5yZWN0KHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIDUwIC0gMjAsIDIwLCA1MCwgNTApO1xuICAgIC8vIHRoaXMuY3R4LnJlY3QodGhpcy5kaW1lbnNpb25zLndpZHRoIC0gNTAgLSAxMCwgMjUsIDMwLCA0MCk7XG4gICAgLy8gdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICBpZiAoIXRoaXMucGF1c2VkKSB7XG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IENPTE9SX1BBTEVUVEUuUVVJTlRFUk5BUlk7XG4gICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IENPTE9SX1BBTEVUVEUuUFJJTUFSWTtcbiAgICAgIFxuICAgICAgdGhpcy5jdHgucmVjdCh0aGlzLmRpbWVuc2lvbnMud2lkdGggLSA1MCAtIDEwLCAyNSwgMTAsIDQwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMuY3R4LnJlY3QodGhpcy5kaW1lbnNpb25zLndpZHRoIC0gNTAgKyAxMCwgMjUsIDEwLCA0MCk7XG4gICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IENPTE9SX1BBTEVUVEUuUVVJTlRFUk5BUlk7XG4gICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IENPTE9SX1BBTEVUVEUuUFJJTUFSWTtcbiAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLmRpbWVuc2lvbnMud2lkdGggLSA1MCAtIDEwLCAyNSk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5kaW1lbnNpb25zLndpZHRoIC0gNTAgLSAxMCwgNjUpO1xuICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIDUwICsgMjAsIDQ1KTtcbiAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAxLjU7XG5cbiAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgICAgdGhpcy5jdHguZm9udCA9ICc1NnB4IFRyZWJ1Y2hldCBNUyc7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcbiAgICAgICAgJ0dhbWUgcGF1c2VkJyxcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMixcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDIgLSAzNlxuICAgICAgKTtcbiAgICAgIHRoaXMuY3R4LnN0cm9rZVRleHQoXG4gICAgICAgICdHYW1lIHBhdXNlZCcsXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyIC0gMzZcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgICAgdGhpcy5jdHguZm9udCA9ICczNnB4IFRyZWJ1Y2hldCBNUyc7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcbiAgICAgICAgJ1ByZXNzIHBsYXkgdG8gY29udGludWUnLFxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLFxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiArIDM2XG4gICAgICApO1xuICAgICAgdGhpcy5jdHguc3Ryb2tlVGV4dChcbiAgICAgICAgJ1ByZXNzIHBsYXkgdG8gY29udGludWUnLFxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLFxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiArIDM2XG4gICAgICApXG4gICAgfTtcbiAgfVxuXG4gIGRyYXdCYWNrZ3JvdW5kKCkge1xuICAgIGxldCBiYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XG4gICAgYmFja2dyb3VuZC5zcmMgPSAnZnJvbnRlbmQvYXNzZXRzL2ltYWdlcy9nYW1lLWJhY2tncm91bmQuanBnJztcbiAgICAvLyBiYWNrZ3JvdW5kLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCAwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgIC8vIH1cbiAgfVxuXG4gIC8vIFRPRE86IFByb2JhYmx5IHRlbXBvcmFyeVxuICBkcmF3Rmxvb3IoKSB7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ0JST1dOJztcbiAgICB0aGlzLmN0eC5maWxsUmVjdChcbiAgICAgIDAsIFxuICAgICAgdGhpcy5kaW1lbnNpb25zLmhlaWdodCAtIDE1NSwgXG4gICAgICB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIFxuICAgICAgMTU1XG4gICAgKTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=