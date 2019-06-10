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
  attachEventListeners();
});

const attachEventListeners = () => {
  let demoIcon = document.getElementsByClassName('demo-icon-container')[0];
  let helpIcon = document.getElementsByClassName('help-icon-container')[0];
  let modalBackground = document.getElementsByClassName('modal-background')[0];
  let modalChild = document.getElementsByClassName('modal-child')[0];

  modalChild.addEventListener('mousedown', (e) => e.stopPropagation());
  modalBackground.addEventListener('mousedown', (e) => closeModal(e));
  demoIcon.addEventListener('mousedown', () => openModal('demo'));
  helpIcon.addEventListener('mousedown', () => openModal('help'));
}

const openModal = (type) => {
  console.log(type);
}

const closeModal = (e) => {
  e.currentTarget.classList.add('hidden');
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvYXZhdGFyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2VudHJ5LmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvbGV2ZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLFNBQVMsY0FBYztBQUN2QixTQUFTLGNBQWM7QUFDdkIsWUFBWSxhQUFhO0FBQ3pCLFNBQVMsYUFBYTtBQUN0QixHQUFHO0FBQ0g7QUFDQSxTQUFTLGNBQWM7QUFDdkIsU0FBUyxjQUFjO0FBQ3ZCLFlBQVksYUFBYTtBQUN6QixTQUFTLGFBQWE7QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN6V0E7QUFBQTtBQUEyQjs7QUFFM0I7QUFDQTtBQUNBLE1BQU0sNkNBQUs7QUFDWDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2xFQTtBQUFBO0FBQUE7QUFBQTtBQUE0QjtBQUNFOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLDhDQUFLO0FBQzFCLHVCQUF1QiwrQ0FBTTtBQUM3Qix1QkFBdUIsK0NBQU07QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFlBQVk7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN2V0E7QUFBQTtBQUFBO0FBQXdDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsK0JBQStCLG9EQUFXO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUywyQkFBMkI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDJCQUEyQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoiLi9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Zyb250ZW5kL2VudHJ5LmpzXCIpO1xuIiwiY29uc3QgQVZBVEFSX0NPTlNUQU5UUyA9IHtcclxuICBBVkFUQVJfRElNRU5TSU9OUzoge1xyXG4gICAgd2lkdGg6IDE1MCxcclxuICAgIGhlaWdodDogMzAwXHJcbiAgfSxcclxuICBHUkFWSVRZOiAtMS44LFxyXG4gIFAxX01PVkVNRU5UOiB7XHJcbiAgICA4NzogeyB4OiAwLCB5OiAtMSB9LFxyXG4gICAgNjU6IHsgeDogLTEsIHk6IDAgfSxcclxuICAgIC8vIDgzOiB7IHg6IDAsIHk6IDEgfSxcclxuICAgIDY4OiB7IHg6IDEsIHk6IDAgfSxcclxuICB9LFxyXG4gIFAyX01PVkVNRU5UOiB7XHJcbiAgICAzODogeyB4OiAwLCB5OiAtMSB9LFxyXG4gICAgMzc6IHsgeDogLTEsIHk6IDAgfSxcclxuICAgIC8vIDQwOiB7IHg6IDAsIHk6IDEgfSxcclxuICAgIDM5OiB7IHg6IDEsIHk6IDAgfSxcclxuICB9LFxyXG4gIE1PVkVNRU5UX1NQRUVEOiB7XHJcbiAgICB4OiAxMCxcclxuICAgIHk6IDMwXHJcbiAgfSxcclxuICBNQVhfSEVBTFRIOiAyMDAsXHJcbiAgU1JJVEVTSEVFVDoge1xyXG4gICAgV0FMS0lORzoge1xyXG4gICAgICAxOiB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAyMDIsXHJcbiAgICAgICAgdzogNTAsXHJcbiAgICAgICAgaDogOThcclxuICAgICAgfSxcclxuICAgICAgMjoge1xyXG4gICAgICAgIHg6IDUwLFxyXG4gICAgICAgIHk6IDIwMixcclxuICAgICAgICB3OiA1MCxcclxuICAgICAgICBoOiA5OFxyXG4gICAgICB9LFxyXG4gICAgICAzOiB7XHJcbiAgICAgICAgeDogMTAwLFxyXG4gICAgICAgIHk6IDIwMixcclxuICAgICAgICB3OiA2NSxcclxuICAgICAgICBoOiA5OFxyXG4gICAgICB9LFxyXG4gICAgICA0OiB7XHJcbiAgICAgICAgeDogMTY1LFxyXG4gICAgICAgIHk6IDIwMixcclxuICAgICAgICB3OiA3NSxcclxuICAgICAgICBoOiA5OFxyXG4gICAgICB9LFxyXG4gICAgICA1OiB7XHJcbiAgICAgICAgeDogMjQwLFxyXG4gICAgICAgIHk6IDIwMixcclxuICAgICAgICB3OiA2MCxcclxuICAgICAgICBoOiA5OFxyXG4gICAgICB9LFxyXG4gICAgICA2OiB7XHJcbiAgICAgICAgeDogMzAwLFxyXG4gICAgICAgIHk6IDIwMyxcclxuICAgICAgICB3OiA3MCxcclxuICAgICAgICBoOiA5N1xyXG4gICAgICB9LFxyXG4gICAgICA3OiB7XHJcbiAgICAgICAgeDogMzcwLFxyXG4gICAgICAgIHk6IDIwMixcclxuICAgICAgICB3OiA4MCxcclxuICAgICAgICBoOiA5OFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgSURMRToge1xyXG4gICAgICAxOiB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAzMDEsXHJcbiAgICAgICAgdzogNzUsXHJcbiAgICAgICAgaDogOTZcclxuICAgICAgfSxcclxuICAgICAgMjoge1xyXG4gICAgICAgIHg6IDc1LFxyXG4gICAgICAgIHk6IDMwMSxcclxuICAgICAgICB3OiA3NSxcclxuICAgICAgICBoOiA5NlxyXG4gICAgICB9LFxyXG4gICAgICAzOiB7XHJcbiAgICAgICAgeDogMTUwLFxyXG4gICAgICAgIHk6IDMwMSxcclxuICAgICAgICB3OiA3NSxcclxuICAgICAgICBoOiA5NlxyXG4gICAgICB9LFxyXG4gICAgICA0OiB7XHJcbiAgICAgICAgeDogMjI1LFxyXG4gICAgICAgIHk6IDMwMSxcclxuICAgICAgICB3OiA3NSxcclxuICAgICAgICBoOiA5NlxyXG4gICAgICB9LFxyXG4gICAgICA1OiB7XHJcbiAgICAgICAgeDogMzAwLFxyXG4gICAgICAgIHk6IDMwMSxcclxuICAgICAgICB3OiA3NSxcclxuICAgICAgICBoOiA5NlxyXG4gICAgICB9LFxyXG4gICAgICA2OiB7XHJcbiAgICAgICAgeDogMzc1LFxyXG4gICAgICAgIHk6IDMwMSxcclxuICAgICAgICB3OiA3NSxcclxuICAgICAgICBoOiA5NlxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgSlVNUDoge1xyXG4gICAgICAxOiB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiA5NSxcclxuICAgICAgICB3OiA3NCxcclxuICAgICAgICBoOiAxMDdcclxuICAgICAgfSxcclxuICAgICAgMjoge1xyXG4gICAgICAgIHg6IDc0LFxyXG4gICAgICAgIHk6IDk1LFxyXG4gICAgICAgIHc6IDc0LFxyXG4gICAgICAgIGg6IDEwN1xyXG4gICAgICB9LFxyXG4gICAgICAzOiB7XHJcbiAgICAgICAgeDogMTQ4LFxyXG4gICAgICAgIHk6IDk1LFxyXG4gICAgICAgIHc6IDc0LFxyXG4gICAgICAgIGg6IDEwN1xyXG4gICAgICB9LFxyXG4gICAgICA0OiB7XHJcbiAgICAgICAgeDogMjIyLFxyXG4gICAgICAgIHk6IDk1LFxyXG4gICAgICAgIHc6IDc0LFxyXG4gICAgICAgIGg6IDEwN1xyXG4gICAgICB9LFxyXG4gICAgICA1OiB7XHJcbiAgICAgICAgeDogMjk2LFxyXG4gICAgICAgIHk6IDk1LFxyXG4gICAgICAgIHc6IDc0LFxyXG4gICAgICAgIGg6IDEwN1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgQVRUQUNLOiB7XHJcbiAgICAgIDE6IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDAsXHJcbiAgICAgICAgdzogMTA0LFxyXG4gICAgICAgIGg6IDk1XHJcbiAgICAgIH0sXHJcbiAgICAgIDI6IHtcclxuICAgICAgICB4OiAxMDQsXHJcbiAgICAgICAgeTogMCxcclxuICAgICAgICB3OiAxMDQsXHJcbiAgICAgICAgaDogOTVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXZhdGFyIHtcclxuICBjb25zdHJ1Y3RvcihjdHgsIGRpbWVuc2lvbnMsIHBsYXllck51bSkge1xyXG4gICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zO1xyXG4gICAgdGhpcy5wbGF5ZXJOdW0gPSBwbGF5ZXJOdW07XHJcblxyXG4gICAgbGV0IHN0YXJ0aW5nWCA9IHBsYXllck51bSA9PT0gMSA/IDUwIDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC0gNTA7XHJcbiAgICB0aGlzLnBvcyA9IHtcclxuICAgICAgeDogc3RhcnRpbmdYIC0gQVZBVEFSX0NPTlNUQU5UUy5BVkFUQVJfRElNRU5TSU9OUy53aWR0aCAvIDIsXHJcbiAgICAgIHk6IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLSBBVkFUQVJfQ09OU1RBTlRTLkFWQVRBUl9ESU1FTlNJT05TLmhlaWdodCAtIDFcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy52ZWwgPSB7XHJcbiAgICAgIHZ4OiAwLFxyXG4gICAgICB2eTogMFxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGhlYWx0aDogQVZBVEFSX0NPTlNUQU5UUy5NQVhfSEVBTFRILFxyXG4gICAgICBiYXNpY0F0dGFja2luZzogZmFsc2UsXHJcbiAgICAgIGRhbWFnZURvbmU6IGZhbHNlLFxyXG4gICAgICBiYXNpY0F0dGFja0hpdGJveDoge1xyXG4gICAgICAgIHc6IEFWQVRBUl9DT05TVEFOVFMuQVZBVEFSX0RJTUVOU0lPTlMud2lkdGggLyAyICsgNDAsXHJcbiAgICAgICAgaDogMTBcclxuICAgICAgfSxcclxuICAgICAgYmFzaWNBdHRhY2tEYW1hZ2U6IDEwLFxyXG4gICAgICBmYWNpbmc6IHBsYXllck51bSA9PT0gMSA/IDEgOiAtMSxcclxuICAgICAgYmFzaWNBdHRhY2tLZXljb2RlOiBwbGF5ZXJOdW0gPT09IDEgPyA3NCA6IDk3LFxyXG4gICAgICBtb3ZlbWVudDogJ2lkbGUnXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcclxuICAgIHRoaXMua2V5Q29kZU1vdmVtZW50ID0gdGhpcy5wbGF5ZXJOdW0gPT09IDEgPyBcclxuICAgICAgQVZBVEFSX0NPTlNUQU5UUy5QMV9NT1ZFTUVOVCA6IEFWQVRBUl9DT05TVEFOVFMuUDJfTU9WRU1FTlQ7XHJcbiAgICB0aGlzLmtleXByZXNzUE9KTyA9IHt9O1xyXG4gICAgT2JqZWN0LmtleXModGhpcy5rZXlDb2RlTW92ZW1lbnQpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICB0aGlzLmtleXByZXNzUE9KT1trZXldID0gZmFsc2U7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3ByaXRlU2hlZXQgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuc3ByaXRlU2hlZXQuc3JjID0gJ2Zyb250ZW5kL2Fzc2V0cy9pbWFnZXMvcnl1LXNwcml0ZS1zaGVldC5wbmcnO1xyXG5cclxuICAgIHRoaXMuYW5pbWF0aW9uVGltZXIgPSAwO1xyXG5cclxuICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5kcmF3QXZhdGFyID0gdGhpcy5kcmF3QXZhdGFyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm1vdmVBdmF0YXIgPSB0aGlzLm1vdmVBdmF0YXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc3RvcEF2YXRhciA9IHRoaXMuc3RvcEF2YXRhci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5jaGVja0JvdW5kYXJ5ID0gdGhpcy5jaGVja0JvdW5kYXJ5LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uID0gdGhpcy51cGRhdGVQb3NpdGlvbi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5iYXNpY0F0dGFjayA9IHRoaXMuYmFzaWNBdHRhY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZHJhd0Jhc2ljQXR0YWNrID0gdGhpcy5kcmF3QmFzaWNBdHRhY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlQXR0YWNrID0gdGhpcy5oYW5kbGVBdHRhY2suYmluZCh0aGlzKTtcclxuXHJcbiAgICAvL1RPRE86IElTIFRIRVJFIEEgQkVUVEVSIFNPTFVUSU9OP1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlQXR0YWNrKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm1vdmVBdmF0YXIpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLnN0b3BBdmF0YXIpO1xyXG4gIH1cclxuXHJcbiAgYW5pbWF0ZShwYXVzZWQpIHtcclxuICAgIHRoaXMucGF1c2VkID0gISFwYXVzZWQ7XHJcbiAgICB0aGlzLmFuaW1hdGlvblRpbWVyICs9IDAuMDU7XHJcbiAgICBpZiAoIXRoaXMucGF1c2VkKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnZlbC52eCA9PT0gMCAmJiB0aGlzLnZlbC52eSA9PT0gMCkge1xyXG4gICAgICB0aGlzLnN0YXRlLm1vdmVtZW50ID0gJ2lkbGUnO1xyXG4gICAgfVxyXG4gICAgbGV0IGJvdW5kcztcclxuICAgIGlmICghdGhpcy5wYXVzZWQpIHtcclxuICAgICAgdGhpcy5kcmF3QmFzaWNBdHRhY2soKTtcclxuICAgICAgYm91bmRzID0ge1xyXG4gICAgICAgIHg6IHRoaXMucG9zLnggKyB0aGlzLnN0YXRlLmZhY2luZyAqIHRoaXMuc3RhdGUuYmFzaWNBdHRhY2tIaXRib3gudyxcclxuICAgICAgICB5OiB0aGlzLnBvcy55ICsgdGhpcy5zdGF0ZS5iYXNpY0F0dGFja0hpdGJveC5oXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuZHJhd0F2YXRhcigpO1xyXG4gICAgcmV0dXJuIGJvdW5kcztcclxuICB9XHJcblxyXG4gIHVwZGF0ZVBvc2l0aW9uKCkge1xyXG4gICAgT2JqZWN0LmtleXModGhpcy5rZXlwcmVzc1BPSk8pLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5rZXlwcmVzc1BPSk9ba2V5XSkge1xyXG4gICAgICAgIC8vIEtleXByZXNzIG1vdmVtZW50XHJcbiAgICAgICAgaWYgKHRoaXMua2V5Q29kZU1vdmVtZW50W2tleV0ueCAhPT0gMCkge1xyXG4gICAgICAgICAgdGhpcy52ZWwudnggPSB0aGlzLmtleUNvZGVNb3ZlbWVudFtrZXldLnhcclxuICAgICAgICAgICAgKiBBVkFUQVJfQ09OU1RBTlRTLk1PVkVNRU5UX1NQRUVELng7XHJcbiAgICAgICAgICB0aGlzLnN0YXRlLmZhY2luZyA9IHRoaXMua2V5Q29kZU1vdmVtZW50W2tleV0ueDtcclxuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLm1vdmVtZW50ICE9PSAnanVtcCcpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5tb3ZlbWVudCA9ICdtb3ZlWCc7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gUHJldmVudCBpbmZpbml0ZSBqdW1wXHJcbiAgICAgICAgaWYgKHRoaXMucG9zLnkgPT09IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLSAxIC0gQVZBVEFSX0NPTlNUQU5UUy5BVkFUQVJfRElNRU5TSU9OUy5oZWlnaHQpIHtcclxuICAgICAgICAgIGlmICh0aGlzLmtleUNvZGVNb3ZlbWVudFtrZXldLnkgIT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy52ZWwudnkgPSB0aGlzLmtleUNvZGVNb3ZlbWVudFtrZXldLnlcclxuICAgICAgICAgICAgICAqIEFWQVRBUl9DT05TVEFOVFMuTU9WRU1FTlRfU1BFRUQueTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5tb3ZlbWVudCA9ICdqdW1wJztcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnZlbC52eSAtPSBBVkFUQVJfQ09OU1RBTlRTLkdSQVZJVFk7XHJcbiAgICB0aGlzLnBvcy55ICs9IHRoaXMudmVsLnZ5O1xyXG4gICAgdGhpcy5wb3MueCArPSB0aGlzLnZlbC52eDtcclxuICAgIHRoaXMuY2hlY2tCb3VuZGFyeSgpO1xyXG4gIH1cclxuXHJcbiAgbW92ZUF2YXRhcihlKSB7XHJcbiAgICBpZiAoIXRoaXMucGF1c2VkICYmICFlLnJlcGVhdCkge1xyXG4gICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5rZXlDb2RlTW92ZW1lbnQpLmluY2x1ZGVzKGUua2V5Q29kZS50b1N0cmluZygpKSkge1xyXG4gICAgICAgIHRoaXMua2V5cHJlc3NQT0pPW2Uua2V5Q29kZS50b1N0cmluZygpXSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdG9wQXZhdGFyKGUpIHtcclxuICAgIHRoaXMudmVsLnZ4ID0gMDtcclxuICAgIHRoaXMua2V5cHJlc3NQT0pPW2Uua2V5Q29kZS50b1N0cmluZygpXSA9IGZhbHNlO1xyXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gIH1cclxuICBcclxuICBkcmF3QXZhdGFyKCkge1xyXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5wbGF5ZXJOdW0gPT09IDEgPyAnQmx1ZScgOiAnUmVkJztcclxuICAgIGxldCBjdXJyZW50U3ByaXRlU2xpY2VJZHg7XHJcbiAgICBsZXQgY3VycmVudFNwcml0ZVNsaWNlO1xyXG4gICAgbGV0IGF0dGFja09mZnNldCA9IDA7XHJcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUubW92ZW1lbnQpIHtcclxuICAgICAgY2FzZSAnaWRsZSc6XHJcbiAgICAgICAgY3VycmVudFNwcml0ZVNsaWNlSWR4ID0gMSArIE1hdGgucm91bmQodGhpcy5hbmltYXRpb25UaW1lciAlIChPYmplY3Qua2V5cyhBVkFUQVJfQ09OU1RBTlRTLlNSSVRFU0hFRVQuSURMRSkubGVuZ3RoIC0gMSkpO1xyXG4gICAgICAgIGN1cnJlbnRTcHJpdGVTbGljZSA9IEFWQVRBUl9DT05TVEFOVFMuU1JJVEVTSEVFVC5JRExFW2N1cnJlbnRTcHJpdGVTbGljZUlkeF07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ21vdmVYJzpcclxuICAgICAgICBjdXJyZW50U3ByaXRlU2xpY2VJZHggPSAxICsgTWF0aC5yb3VuZCgyICogdGhpcy5hbmltYXRpb25UaW1lciAlIChPYmplY3Qua2V5cyhBVkFUQVJfQ09OU1RBTlRTLlNSSVRFU0hFRVQuV0FMS0lORykubGVuZ3RoIC0gMSkpO1xyXG4gICAgICAgIGN1cnJlbnRTcHJpdGVTbGljZSA9IEFWQVRBUl9DT05TVEFOVFMuU1JJVEVTSEVFVC5XQUxLSU5HW2N1cnJlbnRTcHJpdGVTbGljZUlkeF07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2p1bXAnOlxyXG4gICAgICAgIGN1cnJlbnRTcHJpdGVTbGljZUlkeCA9IDEgKyBNYXRoLnJvdW5kKDIgKiB0aGlzLmFuaW1hdGlvblRpbWVyICUgKE9iamVjdC5rZXlzKEFWQVRBUl9DT05TVEFOVFMuU1JJVEVTSEVFVC5KVU1QKS5sZW5ndGggLSAxKSk7XHJcbiAgICAgICAgY3VycmVudFNwcml0ZVNsaWNlID0gQVZBVEFSX0NPTlNUQU5UUy5TUklURVNIRUVULkpVTVBbY3VycmVudFNwcml0ZVNsaWNlSWR4XTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnYXR0YWNrJzpcclxuICAgICAgICBjdXJyZW50U3ByaXRlU2xpY2VJZHggPSAxICsgTWF0aC5yb3VuZCh0aGlzLmFuaW1hdGlvblRpbWVyICUgKE9iamVjdC5rZXlzKEFWQVRBUl9DT05TVEFOVFMuU1JJVEVTSEVFVC5BVFRBQ0spLmxlbmd0aCAtIDEpKTtcclxuICAgICAgICBjdXJyZW50U3ByaXRlU2xpY2UgPSBBVkFUQVJfQ09OU1RBTlRTLlNSSVRFU0hFRVQuQVRUQUNLW2N1cnJlbnRTcHJpdGVTbGljZUlkeF07XHJcbiAgICAgICAgYXR0YWNrT2Zmc2V0ID0gNTA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICB0aGlzLmN0eC5zYXZlKCk7XHJcbiAgICB0aGlzLmN0eC5zY2FsZSh0aGlzLnN0YXRlLmZhY2luZywgMSk7XHJcbiAgICBsZXQgb2Zmc2V0ID0gMDtcclxuICAgIGlmICh0aGlzLnN0YXRlLmZhY2luZyA9PT0gLTEpIHtcclxuICAgICAgb2Zmc2V0ID0gQVZBVEFSX0NPTlNUQU5UUy5BVkFUQVJfRElNRU5TSU9OUy53aWR0aDtcclxuICAgIH1cclxuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgdGhpcy5zcHJpdGVTaGVldCxcclxuICAgICAgY3VycmVudFNwcml0ZVNsaWNlLngsXHJcbiAgICAgIGN1cnJlbnRTcHJpdGVTbGljZS55LFxyXG4gICAgICBjdXJyZW50U3ByaXRlU2xpY2UudyxcclxuICAgICAgY3VycmVudFNwcml0ZVNsaWNlLmgsXHJcbiAgICAgIHRoaXMuc3RhdGUuZmFjaW5nICogdGhpcy5wb3MueCAtIG9mZnNldCxcclxuICAgICAgdGhpcy5wb3MueSxcclxuICAgICAgQVZBVEFSX0NPTlNUQU5UUy5BVkFUQVJfRElNRU5TSU9OUy53aWR0aCArIGF0dGFja09mZnNldCxcclxuICAgICAgQVZBVEFSX0NPTlNUQU5UUy5BVkFUQVJfRElNRU5TSU9OUy5oZWlnaHRcclxuICAgICk7XHJcbiAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XHJcbiAgfVxyXG5cclxuICBjaGVja0JvdW5kYXJ5KCkge1xyXG4gICAgbGV0IG1heE9mZnNldCA9IHRoaXMucGxheWVyTnVtID09PSAxID8gMCA6IEFWQVRBUl9DT05TVEFOVFMuQVZBVEFSX0RJTUVOU0lPTlMud2lkdGg7XHJcbiAgICBsZXQgbWluT2Zmc2V0ID0gdGhpcy5wbGF5ZXJOdW0gPT09IDIgPyAwIDogQVZBVEFSX0NPTlNUQU5UUy5BVkFUQVJfRElNRU5TSU9OUy53aWR0aDtcclxuICAgIGlmICh0aGlzLnBvcy54IDwgMCkge1xyXG4gICAgICB0aGlzLnBvcy54ID0gMDtcclxuICAgICAgdGhpcy52ZWwudnggPSAwO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnBvcy54ID4gdGhpcy5kaW1lbnNpb25zLndpZHRoIC0gbWF4T2Zmc2V0IC0gbWluT2Zmc2V0KSB7XHJcbiAgICAgIHRoaXMucG9zLnggPSB0aGlzLmRpbWVuc2lvbnMud2lkdGggLSBtYXhPZmZzZXQgLSBtaW5PZmZzZXQ7XHJcbiAgICAgIHRoaXMudmVsLnZ4ID0gMDtcclxuICAgIH07XHJcbiAgICBpZiAodGhpcy5wb3MueSA+IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLSAxIC0gQVZBVEFSX0NPTlNUQU5UUy5BVkFUQVJfRElNRU5TSU9OUy5oZWlnaHQpIHtcclxuICAgICAgdGhpcy5wb3MueSA9IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLSAxIC0gQVZBVEFSX0NPTlNUQU5UUy5BVkFUQVJfRElNRU5TSU9OUy5oZWlnaHQ7XHJcbiAgICAgIHRoaXMudmVsLnZ5ID0gMDtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5wb3MueSA8IDApIHtcclxuICAgICAgdGhpcy5wb3MueSA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBiYXNpY0F0dGFjaygpIHtcclxuICAgIGlmICghdGhpcy5zdGF0ZS5iYXNpY0F0dGFja2luZykge1xyXG4gICAgICB0aGlzLnN0YXRlLmJhc2ljQXR0YWNraW5nID0gdHJ1ZTtcclxuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuYmFzaWNBdHRhY2tpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0YXRlLmRhbWFnZURvbmUgPSBmYWxzZTtcclxuICAgICAgfSwgMjUwKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgZHJhd0Jhc2ljQXR0YWNrKCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuYmFzaWNBdHRhY2tpbmcpIHtcclxuICAgICAgdGhpcy5zdGF0ZS5tb3ZlbWVudCA9ICdhdHRhY2snO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUF0dGFjayhlKSB7XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSB0aGlzLnN0YXRlLmJhc2ljQXR0YWNrS2V5Y29kZSkge1xyXG4gICAgICB0aGlzLmJhc2ljQXR0YWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IEFyZW5hIGZyb20gXCIuL2dhbWVcIjtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xyXG4gIG5ldyBBcmVuYShjYW52YXMpO1xyXG4gIGF0dGFjaEV2ZW50TGlzdGVuZXJzKCk7XHJcbn0pO1xyXG5cclxuY29uc3QgYXR0YWNoRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgbGV0IGRlbW9JY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVtby1pY29uLWNvbnRhaW5lcicpWzBdO1xyXG4gIGxldCBoZWxwSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlbHAtaWNvbi1jb250YWluZXInKVswXTtcclxuICBsZXQgbW9kYWxCYWNrZ3JvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW9kYWwtYmFja2dyb3VuZCcpWzBdO1xyXG4gIGxldCBtb2RhbENoaWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW9kYWwtY2hpbGQnKVswXTtcclxuXHJcbiAgbW9kYWxDaGlsZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKSk7XHJcbiAgbW9kYWxCYWNrZ3JvdW5kLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiBjbG9zZU1vZGFsKGUpKTtcclxuICBkZW1vSWNvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiBvcGVuTW9kYWwoJ2RlbW8nKSk7XHJcbiAgaGVscEljb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4gb3Blbk1vZGFsKCdoZWxwJykpO1xyXG59XHJcblxyXG5jb25zdCBvcGVuTW9kYWwgPSAodHlwZSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHR5cGUpO1xyXG59XHJcblxyXG5jb25zdCBjbG9zZU1vZGFsID0gKGUpID0+IHtcclxuICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbn0iLCJjb25zdCBFTlZJUk9OTUVOVF9DT05TVEFOVFMgPSB7XHJcbiAgR1JBVklUWTogLTAuNyxcclxuICBFTlZJUk9OTUVOVF9ESU1FTlNJT05TOiA5NCxcclxuICBTQUtVUkFfU1BSSVRFUzogMyxcclxuICBTTk9XRkxBS0VfU1BSSVRFUzogOSxcclxuICBFTlZJUk9OTUVOVF9SRVNJWkU6IDI1XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudmlyb25tZW50IHtcclxuICBjb25zdHJ1Y3RvcihjdHgsIGRpbWVuc2lvbnMsIHR5cGUpIHtcclxuICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9ucztcclxuICAgIHRoaXMucG9zID0ge1xyXG4gICAgICB4OiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiB0aGlzLmRpbWVuc2lvbnMud2lkdGgpLFxyXG4gICAgICB5OiAtOTRcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgJ3Nha3VyYSc6XHJcbiAgICAgICAgdGhpcy5yYW5kU3ByaXRlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKEVOVklST05NRU5UX0NPTlNUQU5UUy5TQUtVUkFfU1BSSVRFUyAtIDEpKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnc25vd2ZsYWtlJzpcclxuICAgICAgICB0aGlzLnJhbmRTcHJpdGUgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoRU5WSVJPTk1FTlRfQ09OU1RBTlRTLlNOT1dGTEFLRV9TUFJJVEVTIC0gMSkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGVsdGF4ID0gTWF0aC5yYW5kb20oKSAqIDAuNSAtIDAuMjU7XHJcbiAgICB0aGlzLm1vdmUgPSB0aGlzLm1vdmUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZHJhd0Vudmlyb25tZW50ID0gdGhpcy5kcmF3RW52aXJvbm1lbnQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgYW5pbWF0ZSgpIHtcclxuICAgIHRoaXMubW92ZSgpO1xyXG4gICAgdGhpcy5kcmF3RW52aXJvbm1lbnQoKTtcclxuICB9XHJcblxyXG4gIG1vdmUoKSB7XHJcbiAgICB0aGlzLnBvcy55IC09IEVOVklST05NRU5UX0NPTlNUQU5UUy5HUkFWSVRZO1xyXG4gICAgdGhpcy5wb3MueCArPSB0aGlzLmRlbHRheDtcclxuICB9XHJcblxyXG4gIGRyYXdFbnZpcm9ubWVudCgpIHtcclxuICAgIGxldCBlbnZpcm9ubWVudCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcclxuICAgICAgY2FzZSAnc2FrdXJhJzpcclxuICAgICAgICBlbnZpcm9ubWVudC5zcmMgPSAnZnJvbnRlbmQvYXNzZXRzL2ltYWdlcy9zYWt1cmEucG5nJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnc25vd2ZsYWtlJzpcclxuICAgICAgICBlbnZpcm9ubWVudC5zcmMgPSAnZnJvbnRlbmQvYXNzZXRzL2ltYWdlcy9zbm93Zmxha2UucG5nJztcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICBlbnZpcm9ubWVudCwgXHJcbiAgICAgIEVOVklST05NRU5UX0NPTlNUQU5UUy5FTlZJUk9OTUVOVF9ESU1FTlNJT05TICogdGhpcy5yYW5kU3ByaXRlLCBcclxuICAgICAgMCxcclxuICAgICAgRU5WSVJPTk1FTlRfQ09OU1RBTlRTLkVOVklST05NRU5UX0RJTUVOU0lPTlMsXHJcbiAgICAgIEVOVklST05NRU5UX0NPTlNUQU5UUy5FTlZJUk9OTUVOVF9ESU1FTlNJT05TLFxyXG4gICAgICB0aGlzLnBvcy54LFxyXG4gICAgICB0aGlzLnBvcy55LFxyXG4gICAgICBFTlZJUk9OTUVOVF9DT05TVEFOVFMuRU5WSVJPTk1FTlRfUkVTSVpFLFxyXG4gICAgICBFTlZJUk9OTUVOVF9DT05TVEFOVFMuRU5WSVJPTk1FTlRfUkVTSVpFLFxyXG4gICAgKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgTGV2ZWwgZnJvbSBcIi4vbGV2ZWxcIjtcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuL2F2YXRhcic7XHJcblxyXG5jb25zdCBBVkFUQVJfQ09OU1RBTlRTID0ge1xyXG4gIEFWQVRBUl9ESU1FTlNJT05TOiB7XHJcbiAgICB3aWR0aDogMTUwLFxyXG4gICAgaGVpZ2h0OiAzMDBcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFyZW5hIHtcclxuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcclxuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB0aGlzLmRpbWVuc2lvbnMgPSB7IHdpZHRoOiBjYW52YXMud2lkdGgsIGhlaWdodDogY2FudmFzLmhlaWdodCB9O1xyXG4gICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XHJcbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5zb3VuZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5oZWxwTW9kYWwgPSBmYWxzZTtcclxuICAgIHRoaXMud2lubmVyID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLmRvY3VtZW50T2Zmc2V0WCA9IChkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIC0gdGhpcy5kaW1lbnNpb25zLndpZHRoKSAvIDI7XHJcbiAgICB0aGlzLmRvY3VtZW50T2Zmc2V0WSA9IChkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCAtIDgwIC0gdGhpcy5kaW1lbnNpb25zLmhlaWdodCkgLyAyO1xyXG5cclxuICAgIHRoaXMucGxheVBvcyA9IHtcclxuICAgICAgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMiAtIDExMCxcclxuICAgICAgeTogdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDIgKyAyOFxyXG4gICAgfTtcclxuICAgIHRoaXMucGxheURpbWVuc2lvbnMgPSB7XHJcbiAgICAgIGR4OiAyMjAsXHJcbiAgICAgIGR5OiA1NlxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnBhdXNlUG9zID0ge1xyXG4gICAgICB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLSA2MCxcclxuICAgICAgeTogMjVcclxuICAgIH07XHJcbiAgICB0aGlzLnBhdXNlRGltZW5zaW9ucyA9IHtcclxuICAgICAgZHg6IDMwLFxyXG4gICAgICBkeTogNDBcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5zb3VuZFBvcyA9IHtcclxuICAgICAgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC0gMTMwLFxyXG4gICAgICB5OiAyMFxyXG4gICAgfTtcclxuICAgIHRoaXMuc291bmREaW1lbnNpb25zID0ge1xyXG4gICAgICBkeDogNTAsXHJcbiAgICAgIGR5OiA1MFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmhlbHBQb3MgPSB7XHJcbiAgICAgIHg6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIDcwLFxyXG4gICAgICB5OiAyMFxyXG4gICAgfTtcclxuICAgIHRoaXMuaGVscERpbWVuc2lvbnMgPSB7XHJcbiAgICAgIGR4OiA1MCxcclxuICAgICAgZHk6IDUwXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuc291bmRPYmogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXVkaW9cIik7XHJcbiAgICB0aGlzLnNvdW5kT2JqLnNyYyA9ICdmcm9udGVuZC9hc3NldHMvYXVkaW8vdWktb3N0Lm1wMyc7XHJcbiAgICB0aGlzLnNvdW5kT2JqLnNldEF0dHJpYnV0ZShcInByZWxvYWRcIiwgXCJhdXRvXCIpO1xyXG4gICAgdGhpcy5zb3VuZE9iai5zZXRBdHRyaWJ1dGUoXCJjb250cm9sc1wiLCBcIm5vbmVcIik7XHJcbiAgICB0aGlzLnNvdW5kT2JqLnNldEF0dHJpYnV0ZShcImxvb3BcIiwgXCJ0cnVlXCIpO1xyXG4gICAgdGhpcy5zb3VuZE9iai5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuc291bmRPYmopO1xyXG5cclxuICAgIHRoaXMuZHJhd0JhY2tncm91bmQgPSB0aGlzLmRyYXdCYWNrZ3JvdW5kLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmRyYXdIZWxwID0gdGhpcy5kcmF3SGVscC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVQbGF5ID0gdGhpcy5oYW5kbGVQbGF5LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZVBhdXNlID0gdGhpcy5oYW5kbGVQYXVzZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVNdXRlID0gdGhpcy5oYW5kbGVNdXRlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZUhlbHAgPSB0aGlzLmhhbmRsZUhlbHAuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlQXR0YWNrID0gdGhpcy5oYW5kbGVBdHRhY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlTW9kYWwgPSB0aGlzLmhhbmRsZU1vZGFsLmJpbmQodGhpcyk7XHJcblxyXG4gICAgdGhpcy5wbGF5ID0gdGhpcy5wbGF5LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnJlc3RhcnQgPSB0aGlzLnJlc3RhcnQuYmluZCh0aGlzKTtcclxuXHJcbiAgICB0aGlzLnJlc3RhcnQoKTtcclxuICB9XHJcblxyXG4gIHJlc3RhcnQoKSB7XHJcbiAgICB0aGlzLmxldmVsID0gbmV3IExldmVsKHRoaXMuY3R4LCB0aGlzLmRpbWVuc2lvbnMpO1xyXG4gICAgdGhpcy5wbGF5ZXIxID0gbmV3IEF2YXRhcih0aGlzLmN0eCwgdGhpcy5kaW1lbnNpb25zLCAxKTtcclxuICAgIHRoaXMucGxheWVyMiA9IG5ldyBBdmF0YXIodGhpcy5jdHgsIHRoaXMuZGltZW5zaW9ucywgMik7XHJcbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy53aW5uZXIgPSBudWxsO1xyXG4gICAgdGhpcy5wbGF5KCk7XHJcbiAgfVxyXG4gIFxyXG4gIHBsYXkoKSB7XHJcbiAgICB0aGlzLmN0eC5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVQbGF5KTtcclxuICAgIHRoaXMuYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xyXG4gIH1cclxuICBcclxuICBhbmltYXRlKCkge1xyXG4gICAgaWYgKCF0aGlzLmdhbWVPdmVyKSB7XHJcbiAgICAgIHRoaXMuY3R4LmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZU11dGUpO1xyXG4gICAgICB0aGlzLmN0eC5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVIZWxwKTtcclxuICAgICAgdGhpcy5jdHguY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlUGF1c2UpO1xyXG4gICAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVBdHRhY2spO1xyXG4gICAgICAvLyBUT0RPOiBURU1QT1JBUllcclxuICAgICAgaWYgKHRoaXMucGF1c2VkKSB7XHJcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZSk7XHJcbiAgICAgICAgdGhpcy5sZXZlbC5hbmltYXRlKHRoaXMucGxheWVyMS5zdGF0ZS5oZWFsdGgsIHRoaXMucGxheWVyMi5zdGF0ZS5oZWFsdGgsIHRydWUpO1xyXG4gICAgICAgIHRoaXMucGxheWVyMS5hbmltYXRlKHRydWUpO1xyXG4gICAgICAgIHRoaXMucGxheWVyMi5hbmltYXRlKHRydWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMud2lubmVyID0gdGhpcy5sZXZlbC5hbmltYXRlKHRoaXMucGxheWVyMS5zdGF0ZS5oZWFsdGgsIHRoaXMucGxheWVyMi5zdGF0ZS5oZWFsdGgpO1xyXG4gICAgICAgIGxldCBwMUF0dGFja0hpdGJveCA9IHRoaXMucGxheWVyMS5hbmltYXRlKGZhbHNlKTtcclxuICAgICAgICBsZXQgcDJBdHRhY2tIaXRib3ggPSB0aGlzLnBsYXllcjIuYW5pbWF0ZShmYWxzZSk7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyMS5zdGF0ZS5iYXNpY0F0dGFja2luZyAmJiAhdGhpcy5wbGF5ZXIxLnN0YXRlLmRhbWFnZURvbmUpIHtcclxuICAgICAgICAgIHRoaXMuY2hlY2tBdHRhY2tDb2xsaXNpb24ocDFBdHRhY2tIaXRib3gsIHRoaXMucGxheWVyMSwgdGhpcy5wbGF5ZXIyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyMi5zdGF0ZS5iYXNpY0F0dGFja2luZyAmJiAhdGhpcy5wbGF5ZXIyLnN0YXRlLmRhbWFnZURvbmUpIHtcclxuICAgICAgICAgIHRoaXMuY2hlY2tBdHRhY2tDb2xsaXNpb24ocDJBdHRhY2tIaXRib3gsIHRoaXMucGxheWVyMiwgdGhpcy5wbGF5ZXIxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMud2lubmVyID09PSAndGltZVVwJykge1xyXG4gICAgICAgICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChbJ3BsYXllcjEnLCAncGxheWVyMiddLmluY2x1ZGVzKHRoaXMud2lubmVyKSkge1xyXG4gICAgICAgICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY3R4LmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZU11dGUpO1xyXG4gICAgICB0aGlzLmN0eC5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVIZWxwKTtcclxuICAgICAgdGhpcy5jdHguY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlUGF1c2UpO1xyXG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbkZyYW1lKTtcclxuICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICAgIC8vIERpc3BsYXkgc3RhcnQgc2NyZWVuXHJcbiAgICAgIHRoaXMuZHJhd0JhY2tncm91bmQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIE9OTFkgRk9SIFNUQVJUSU5HIFNDUkVFTlxyXG4gIGRyYXdCYWNrZ3JvdW5kKCkge1xyXG4gICAgdGhpcy5jdHguY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlUGxheSk7XHJcblxyXG4gICAgbGV0IGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGJhY2tncm91bmQuc3JjID0gJ2Zyb250ZW5kL2Fzc2V0cy9pbWFnZXMvc3RhcnQtYmFja2dyb3VuZC5qcGcnO1xyXG4gICAgYmFja2dyb3VuZC5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCAwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xyXG4gICAgICBcclxuICAgICAgbGV0IGhlbHAgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgaGVscC5zcmMgPSAnZnJvbnRlbmQvYXNzZXRzL2ltYWdlcy9oZWxwLnBuZyc7XHJcbiAgICAgIGhlbHAub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShoZWxwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGggLSA3MCwgMjAsIDUwLCA1MCk7XHJcbiAgICAgIH07XHJcbiAgXHJcbiAgICAgIGxldCBtdXRlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgIHRoaXMuc291bmQgPyBcclxuICAgICAgbXV0ZS5zcmMgPSAnZnJvbnRlbmQvYXNzZXRzL2ltYWdlcy9zcGVha2VyLnBuZyc6XHJcbiAgICAgIG11dGUuc3JjID0gJ2Zyb250ZW5kL2Fzc2V0cy9pbWFnZXMvbXV0ZS5wbmcnXHJcbiAgICAgIG11dGUub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShtdXRlLCB0aGlzLmRpbWVuc2lvbnMud2lkdGggLSAxMzAsIDIwLCA1MCwgNTApO1xyXG4gICAgICB9O1xyXG4gIFxyXG4gICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ1dISVRFJztcclxuICBcclxuICAgICAgbGV0IGhlYWRlciA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBoZWFkZXIuc3JjID0gJ2Zyb250ZW5kL2Fzc2V0cy9pbWFnZXMvaGVhZGVyLXdoaXRlLnBuZyc7XHJcbiAgICAgIGhlYWRlci5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgICAgaGVhZGVyLCBcclxuICAgICAgICAgIDIwLCBcclxuICAgICAgICAgIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyIC0gMTAwLCBcclxuICAgICAgICAgIHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIDQwLCBcclxuICAgICAgICAgIDU2XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBzd2l0Y2ggKHRoaXMud2lubmVyKSB7XHJcbiAgICAgICAgY2FzZSBudWxsOlxyXG4gICAgICAgICAgdGhpcy5jdHguZm9udCA9ICc1NnB4IFRyZWJ1Y2hldCBNUyc7XHJcbiAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcclxuICAgICAgICAgICAgJ1BsYXkgbm93IScsXHJcbiAgICAgICAgICAgIHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyICsgNzJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd0aW1lVXAnOlxyXG4gICAgICAgICAgdGhpcy5jdHguZm9udCA9ICczNnB4IFRyZWJ1Y2hldCBNUyc7XHJcbiAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcclxuICAgICAgICAgICAgJ1RpbWUgcmFuIG91dC4uLiBoYXZlIHlvdSB0cmllZCBhdHRhY2tpbmc/JyxcclxuICAgICAgICAgICAgdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMixcclxuICAgICAgICAgICAgdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDIgKyAxMlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnNTZweCBUcmVidWNoZXQgTVMnO1xyXG4gICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXHJcbiAgICAgICAgICAgICdQbGF5IGFnYWluPycsXHJcbiAgICAgICAgICAgIHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyICsgNzJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdGhpcy5jdHguZm9udCA9ICczNnB4IFRyZWJ1Y2hldCBNUyc7XHJcbiAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcclxuICAgICAgICAgICAgYENvbmdyYXR1bGF0aW9ucywgJHt0aGlzLndpbm5lcn0gd29uIWAsXHJcbiAgICAgICAgICAgIHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyICsgOFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnNTZweCBUcmVidWNoZXQgTVMnO1xyXG4gICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXHJcbiAgICAgICAgICAgICdQbGF5IGFnYWluPycsXHJcbiAgICAgICAgICAgIHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyICsgNzJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgZHJhd0hlbHAoKSB7XHJcbiAgICB0aGlzLmN0eC5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVNb2RhbCk7XHJcblxyXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3JnYmEoMCwgMCwgMCwgMC43KSc7XHJcbiAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xyXG5cclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyknO1xyXG4gICAgdGhpcy5jdHguZmlsbFJlY3QoMTIwLCA2MCwgdGhpcy5kaW1lbnNpb25zLndpZHRoIC0gMjQwLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC0gMTIwKTtcclxuXHJcbiAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSAnbGVmdCc7XHJcbiAgICB0aGlzLmN0eC5mb250ID0gJzU2cHggQXJpYWwnO1xyXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcclxuICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdIb3cgdG8gcGxheTonLCAyMTAsIDEyMCk7XHJcblxyXG4gICAgdGhpcy5jdHguZm9udCA9ICcyNHB4IFRyZWJ1Y2hldCBNUyc7XHJcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xyXG4gICAgdGhpcy5jdHguZmlsbFRleHQoJ1BsYXllciAxOiBXID0gSnVtcCwgQSA9IExlZnQsIEQgPSBSaWdodCwgSiA9IEF0dGFjaycsIDIxMCwgMTUwKTtcclxuICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdQbGF5ZXIgMjogXiA9IEp1bXAsIDwgPSBMZWZ0LCA+ID0gUmlnaHQsIDEgKG51bXBhZCkgPSBBdHRhY2snLCAyMTAsIDE4MCk7XHJcbiAgICB0aGlzLmN0eC5maWxsVGV4dCgnWW91IGhhdmUgdW50aWwgdGhlIHRpbWUgcnVucyBvdXQgdG8gZGVmZWF0IHRoZSBvdGhlciBwbGF5ZXIhJywgMjEwLCAyMTApO1xyXG4gICAgdGhpcy5jdHguZmlsbFRleHQoJ01vdmUgZXJyYXRpY2FsbHkgYW5kIGp1bXAgdG8gYXZvaWQgYXR0YWNrcyBhbmQgb3V0c21hcnQgeW91ciBvcHBvbmVudC4nLCAyMTAsIDI0MCk7XHJcblxyXG4gICAgdGhpcy5jdHguZm9udCA9ICc1NnB4IEFyaWFsJztcclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XHJcbiAgICB0aGlzLmN0eC5maWxsVGV4dCgnQ3JlZGl0czonLCAyMTAsIDI5MCk7XHJcblxyXG4gICAgdGhpcy5jdHguZm9udCA9ICcxOHB4IFRyZWJ1Y2hldCBNUyc7XHJcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xyXG4gICAgdGhpcy5jdHguZmlsbFRleHQoJ1N0YXJ0aW5nIHNjcmVlbjogaHR0cDovL3d3dy5hdm9pZGluZ3RoZXB1ZGRsZS5jb20vbmV3cy8yMDE1LzEyLzIxLy4uLicsIDIxMCwgMzIwKTtcclxuICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdjb21wbGV0ZS1iYXRjaC1vZi10ZWtrZW4tNy1mYXRlZC1yZXRyaWJ1dGlvbi1pbWFnZXMtaW4taGlnaC5odG1sJywgMjEwLCAzNDApO1xyXG4gICAgdGhpcy5jdHguZmlsbFRleHQoJ1Nha3VyYSBwZXRhbHM6IGh0dHBzOi8vd3d3LjEyM3JmLmNvbS9waG90b18xMDk3NzQwODFfc3RvY2stdmVjdG9yLS4uLicsIDIxMCwgMzYwKTtcclxuICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdzYWt1cmEtcGV0YWxzLWZhbGxpbmctZG93bi1yb21hbnRpYy1waW5rLXNpbGt5LW1lZGl1bS1mbG93ZXJzLXNwYXJzZS0uLi4nLCAyMTAsIDM4MCk7XHJcbiAgICB0aGlzLmN0eC5maWxsVGV4dCgnZmx5aW5nLWNoZXJyeS1wZXRhbHMtdG9wLWdyYWRpZS5odG1sJywgMjEwLCA0MDApO1xyXG4gICAgdGhpcy5jdHguZmlsbFRleHQoJ1Nub3dmbGFrZXM6IGh0dHBzOi8vd3d3LmZyZWVwaWsuY29tL2ZyZWUtcGhvdG9zLXZlY3RvcnMvY2hyaXN0bWFzLi4uJywgMjEwLCA0MjApO1xyXG4gICAgdGhpcy5jdHguZmlsbFRleHQoJyhDaHJpc3RtYXMgdmVjdG9yIGNyZWF0ZWQgYnkgZnJlZXBpayknLCAyMTAsIDQ0MCk7XHJcbiAgICB0aGlzLmN0eC5maWxsVGV4dCgnQXJlbmEgYmFja2dyb3VuZDogaHR0cHM6Ly93YWxscGFwZXJjYXZlLmNvbS93L3dwMjYwMzQ4MCcsIDIxMCwgNDYwKTtcclxuICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdSeXUgc3ByaXRlc2hlZXQ6IGh0dHBzOi8vd3d3LmRldmlhbnRhcnQuY29tL3NpbDNudC1qL2FydC8uLi4nLCAyMTAsIDQ4MCk7XHJcbiAgICB0aGlzLmN0eC5maWxsVGV4dCgnUnl1LVN0cmVldC1GaWdodGVyLTEtU3ByaXRlLVNoZWV0LTc2OTAxMTcxMyAoYnkgc2lsM250LWopJywgMjEwLCA1MDApO1xyXG4gICAgdGhpcy5jdHguZmlsbFRleHQoJ0hlbHAgYW5kIHNvdW5kIGljb25zOiBodHRwczovL3d3dy5mbGF0aWNvbi5jb20gKG1hZGUgYnkgRnJlZXBpayknLCAyMTAsIDUyMCk7XHJcbiAgICB0aGlzLmN0eC5maWxsVGV4dCgnTXVzaWM6IERyYWdvbiBCYWxsIFN1cGVyIC0gVWx0cmEgaW5zdGluY3QgfCBJbnN0cnVtZW50YWwgRXBpYyBSb2NrIENPVkVSJywgMjEwLCA1NDApO1xyXG4gICAgdGhpcy5jdHguZmlsbFRleHQoJ0ZyaWVkcmljaCBIYWJldGxlciBNdXNpYycsIDIxMCwgNTYwKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVBsYXkoZSkge1xyXG4gICAgbGV0IGNsaWNrUG9zID0ge1xyXG4gICAgICB4OiBlLnBhZ2VYIC0gdGhpcy5kb2N1bWVudE9mZnNldFgsXHJcbiAgICAgIHk6IGUucGFnZVkgLSB0aGlzLmRvY3VtZW50T2Zmc2V0WSAtIDgwXHJcbiAgICB9XHJcbiAgICBpZiAoY2xpY2tQb3MueCA+PSB0aGlzLnBsYXlQb3MueCAmJiBjbGlja1Bvcy54IDw9IHRoaXMucGxheVBvcy54ICsgdGhpcy5wbGF5RGltZW5zaW9ucy5keCkge1xyXG4gICAgICBpZiAoY2xpY2tQb3MueSA+PSB0aGlzLnBsYXlQb3MueSAmJiBjbGlja1Bvcy55IDw9IHRoaXMucGxheVBvcy55ICsgdGhpcy5wbGF5RGltZW5zaW9ucy5keSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJlc3RhcnQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlUGF1c2UoZSkge1xyXG4gICAgbGV0IGNsaWNrUG9zID0ge1xyXG4gICAgICB4OiBlLnBhZ2VYIC0gdGhpcy5kb2N1bWVudE9mZnNldFgsXHJcbiAgICAgIHk6IGUucGFnZVkgLSB0aGlzLmRvY3VtZW50T2Zmc2V0WSAtIDgwXHJcbiAgICB9XHJcbiAgICBpZiAoY2xpY2tQb3MueCA+PSB0aGlzLnBhdXNlUG9zLnggJiYgY2xpY2tQb3MueCA8PSB0aGlzLnBhdXNlUG9zLnggKyB0aGlzLnBhdXNlRGltZW5zaW9ucy5keCkge1xyXG4gICAgICBpZiAoY2xpY2tQb3MueSA+PSB0aGlzLnBhdXNlUG9zLnkgJiYgY2xpY2tQb3MueSA8PSB0aGlzLnBhdXNlUG9zLnkgKyB0aGlzLnBhdXNlRGltZW5zaW9ucy5keSkge1xyXG4gICAgICAgIHRoaXMucGF1c2VkID0gIXRoaXMucGF1c2VkO1xyXG4gICAgICAgIGlmICghdGhpcy5wYXVzZWQpIHtcclxuICAgICAgICAgIHRoaXMucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlTXV0ZShlKSB7XHJcbiAgICBsZXQgY2xpY2tQb3MgPSB7XHJcbiAgICAgIHg6IGUucGFnZVggLSB0aGlzLmRvY3VtZW50T2Zmc2V0WCxcclxuICAgICAgeTogZS5wYWdlWSAtIHRoaXMuZG9jdW1lbnRPZmZzZXRZIC0gODBcclxuICAgIH1cclxuICAgIGlmIChjbGlja1Bvcy54ID49IHRoaXMuc291bmRQb3MueCAmJiBjbGlja1Bvcy54IDw9IHRoaXMuc291bmRQb3MueCArIHRoaXMuc291bmREaW1lbnNpb25zLmR4KSB7XHJcbiAgICAgIGlmIChjbGlja1Bvcy55ID49IHRoaXMuc291bmRQb3MueSAmJiBjbGlja1Bvcy55IDw9IHRoaXMuc291bmRQb3MueSArIHRoaXMuc291bmREaW1lbnNpb25zLmR5KSB7XHJcbiAgICAgICAgdGhpcy5zb3VuZCA9ICF0aGlzLnNvdW5kO1xyXG4gICAgICAgIGlmICh0aGlzLnNvdW5kKSB7XHJcbiAgICAgICAgICB0aGlzLnNvdW5kT2JqLnBsYXkoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zb3VuZE9iai5wYXVzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaGFuZGxlSGVscChlKSB7XHJcbiAgICBsZXQgY2xpY2tQb3MgPSB7XHJcbiAgICAgIHg6IGUucGFnZVggLSB0aGlzLmRvY3VtZW50T2Zmc2V0WCxcclxuICAgICAgeTogZS5wYWdlWSAtIHRoaXMuZG9jdW1lbnRPZmZzZXRZIC0gODBcclxuICAgIH1cclxuICAgIGlmIChjbGlja1Bvcy54ID49IHRoaXMuaGVscFBvcy54ICYmIGNsaWNrUG9zLnggPD0gdGhpcy5oZWxwUG9zLnggKyB0aGlzLmhlbHBEaW1lbnNpb25zLmR4KSB7XHJcbiAgICAgIGlmIChjbGlja1Bvcy55ID49IHRoaXMuaGVscFBvcy55ICYmIGNsaWNrUG9zLnkgPD0gdGhpcy5oZWxwUG9zLnkgKyB0aGlzLmhlbHBEaW1lbnNpb25zLmR5KSB7XHJcbiAgICAgICAgdGhpcy5oZWxwTW9kYWwgPSAhdGhpcy5oZWxwTW9kYWw7XHJcbiAgICAgICAgaWYgKHRoaXMuaGVscE1vZGFsKSB7XHJcbiAgICAgICAgICB0aGlzLmRyYXdIZWxwKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZHJhd0JhY2tncm91bmQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUF0dGFjayhlKSB7XHJcbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICBjYXNlIDc0OlxyXG4gICAgICAgIHRoaXMucGxheWVyMS5iYXNpY0F0dGFjaygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDk3OlxyXG4gICAgICAgIHRoaXMucGxheWVyMi5iYXNpY0F0dGFjaygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlTW9kYWwoZSkge1xyXG4gICAgbGV0IGNsaWNrUG9zID0ge1xyXG4gICAgICB4OiBlLnBhZ2VYIC0gdGhpcy5kb2N1bWVudE9mZnNldFgsXHJcbiAgICAgIHk6IGUucGFnZVkgLSB0aGlzLmRvY3VtZW50T2Zmc2V0WSAtIDgwXHJcbiAgICB9XHJcbiAgICBpZiAoY2xpY2tQb3MueCA8IDEyMCB8fCBjbGlja1Bvcy54ID4gdGhpcy5kaW1lbnNpb25zLndpZHRoIC0gMTIwXHJcbiAgICAgIHx8IGNsaWNrUG9zLnkgPCA2MCB8fCBjbGlja1Bvcy55ID4gdGhpcy5kaW1lbnNpb25zLmhlaWdodCAtIDYwKSB7XHJcbiAgICAgIHRoaXMuY3R4LmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZU1vZGFsKTtcclxuICAgICAgdGhpcy5oZWxwTW9kYWwgPSAhdGhpcy5oZWxwTW9kYWw7XHJcbiAgICAgIHRoaXMuYW5pbWF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tBdHRhY2tDb2xsaXNpb24oYm91bmQsIGF0dGFja2luZ1BsYXllciwgb3RoZXJQbGF5ZXIpIHtcclxuICAgIGxldCBvdGhlclBsYXllckJvdW5kID0ge1xyXG4gICAgICB4MTogb3RoZXJQbGF5ZXIucG9zLnggLSBBVkFUQVJfQ09OU1RBTlRTLkFWQVRBUl9ESU1FTlNJT05TLndpZHRoIC8gMixcclxuICAgICAgeTE6IG90aGVyUGxheWVyLnBvcy55LFxyXG4gICAgICB4Mjogb3RoZXJQbGF5ZXIucG9zLnggKyBBVkFUQVJfQ09OU1RBTlRTLkFWQVRBUl9ESU1FTlNJT05TLndpZHRoIC8gMixcclxuICAgICAgeTI6IG90aGVyUGxheWVyLnBvcy55ICsgQVZBVEFSX0NPTlNUQU5UUy5BVkFUQVJfRElNRU5TSU9OUy5oZWlnaHRcclxuICAgIH07XHJcbiAgICBpZiAoYm91bmQueCA+PSBvdGhlclBsYXllckJvdW5kLngxICYmIGJvdW5kLnggPD0gb3RoZXJQbGF5ZXJCb3VuZC54Mikge1xyXG4gICAgICBpZiAoYm91bmQueSA+PSBvdGhlclBsYXllckJvdW5kLnkxICYmIGJvdW5kLnkgPD0gb3RoZXJQbGF5ZXJCb3VuZC55Mikge1xyXG4gICAgICAgIGF0dGFja2luZ1BsYXllci5zdGF0ZS5kYW1hZ2VEb25lID0gdHJ1ZTtcclxuICAgICAgICBvdGhlclBsYXllci5zdGF0ZS5oZWFsdGggLT0gYXR0YWNraW5nUGxheWVyLnN0YXRlLmJhc2ljQXR0YWNrRGFtYWdlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxufSIsImltcG9ydCBFbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50JztcclxuXHJcbmNvbnN0IENPTE9SX1BBTEVUVEUgPSB7XHJcbiAgUFJJTUFSWTogJyMwMDA3MEEnLFxyXG4gIFNFQ09OREFSWTogJyMyOTQ1NTInLFxyXG4gIFRFUlRJQVJZOiAnIzU5Nzg4NCcsXHJcbiAgUVVBVEVSTkFSWTogJyM5RUI5QjMnLFxyXG4gIFFVSU5URVJOQVJZOiAnI0FDQzRDRSdcclxufTtcclxuXHJcbmNvbnN0IExFVkVMX0NPTlNUQU5UUyA9IHtcclxuICBNQVhfVElNRTogNjAgKiAxMjAsXHJcbiAgVElNRVJfVEVYVF9IRUlHSFQ6IDc1LFxyXG4gIFRJTUVSX1JBRElVUzogNDUsXHJcbiAgTUFYX0hFQUxUSDogMjAwLFxyXG4gIEhFQUxUSF9CQVI6IHtcclxuICAgIHdpZHRoOiA0MDAsXHJcbiAgICBoZWlnaHQ6IDIwXHJcbiAgfSxcclxuICBPRkZTRVQ6IDIwLFxyXG4gIEVOVklST05NRU5UX1BST0JBQklMSVRZOiA0NSxcclxuICBFTlZJUk9OTUVOVFM6IFsnc2FrdXJhJywgJ3Nub3dmbGFrZSddXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbCB7XHJcbiAgY29uc3RydWN0b3IoY3R4LCBkaW1lbnNpb25zKSB7XHJcbiAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zO1xyXG4gICAgdGhpcy50aW1lID0gTEVWRUxfQ09OU1RBTlRTLk1BWF9USU1FO1xyXG4gICAgdGhpcy5jdHggPSBjdHg7XHJcblxyXG4gICAgdGhpcy5wbGF5ZXJIcFBvcyA9IHtcclxuICAgICAgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMiAtIExFVkVMX0NPTlNUQU5UUy5USU1FUl9SQURJVVMsXHJcbiAgICAgIHk6IExFVkVMX0NPTlNUQU5UUy5USU1FUl9SQURJVVMgLSBMRVZFTF9DT05TVEFOVFMuSEVBTFRIX0JBUi5oZWlnaHQgKyA1XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuYm90SHBQb3MgPSB7XHJcbiAgICAgIHg6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIgKyBMRVZFTF9DT05TVEFOVFMuVElNRVJfUkFESVVTLFxyXG4gICAgICB5OiBMRVZFTF9DT05TVEFOVFMuVElNRVJfUkFESVVTIC0gTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIuaGVpZ2h0ICsgNVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuZW52aXJvbm1lbnQgPSBbXTtcclxuXHJcbiAgICBsZXQgZW52aXJvbm1lbnRJbmRleCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChMRVZFTF9DT05TVEFOVFMuRU5WSVJPTk1FTlRTLmxlbmd0aCAtIDEpKTtcclxuICAgIHRoaXMuZW52aXJvbm1lbnRUeXBlID0gTEVWRUxfQ09OU1RBTlRTLkVOVklST05NRU5UU1tlbnZpcm9ubWVudEluZGV4XTtcclxuXHJcbiAgICB0aGlzLmRyYXdUaW1lckNpcmNsZSA9IHRoaXMuZHJhd1RpbWVyQ2lyY2xlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmRyYXdUaW1lckRpc3BsYXkgPSB0aGlzLmRyYXdUaW1lckRpc3BsYXkuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZHJhd1RpbWVyVGV4dCA9IHRoaXMuZHJhd1RpbWVyVGV4dC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5kcmF3SGVhbHRoQmFycyA9IHRoaXMuZHJhd0hlYWx0aEJhcnMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZHJhd05hbWVzID0gdGhpcy5kcmF3TmFtZXMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZHJhd1BhdXNlID0gdGhpcy5kcmF3UGF1c2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZHJhd0JhY2tncm91bmQgPSB0aGlzLmRyYXdCYWNrZ3JvdW5kLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmRyYXdGbG9vciA9IHRoaXMuZHJhd0Zsb29yLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBhbmltYXRlKHBsYXllckhlYWx0aCwgYm90SGVhbHRoLCBwYXVzZWQpIHtcclxuICAgIGxldCB0aW1lO1xyXG4gICAgbGV0IHdpbm5lcjtcclxuXHJcbiAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKCk7XHJcblxyXG4gICAgbGV0IGVudmlyb25tZW50R2VuZXJhdGlvbiA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIExFVkVMX0NPTlNUQU5UUy5FTlZJUk9OTUVOVF9QUk9CQUJJTElUWSk7XHJcblxyXG4gICAgaWYgKGVudmlyb25tZW50R2VuZXJhdGlvbiA9PT0gMSkge1xyXG4gICAgICBsZXQgbmV3RW52aXJvbm1lbnQgPSBuZXcgRW52aXJvbm1lbnQodGhpcy5jdHgsIHRoaXMuZGltZW5zaW9ucywgdGhpcy5lbnZpcm9ubWVudFR5cGUpO1xyXG4gICAgICB0aGlzLmVudmlyb25tZW50LnB1c2gobmV3RW52aXJvbm1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZW52aXJvbm1lbnQuZm9yRWFjaCgoZW52aXJvbm1lbnQsIGlkeCkgPT4ge1xyXG4gICAgICBlbnZpcm9ubWVudC5hbmltYXRlKCk7XHJcbiAgICAgIGlmIChlbnZpcm9ubWVudC5wb3MueSA+IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgKyA5NCkge1xyXG4gICAgICAgIHRoaXMuZW52aXJvbm1lbnQuc2hpZnQoKTtcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRpbWUgPSB0aGlzLmRyYXdUaW1lcigpO1xyXG4gICAgdGhpcy5kcmF3SGVhbHRoQmFycygpO1xyXG4gICAgd2lubmVyID0gdGhpcy5kcmF3Q3VycmVudEhlYWx0aEJhcnMocGxheWVySGVhbHRoLCBib3RIZWFsdGgpO1xyXG4gICAgdGhpcy5kcmF3TmFtZXMoKTtcclxuICAgIC8vIHRoaXMuZHJhd0Zsb29yKCk7XHJcbiAgICBwYXVzZWQgPyB0aGlzLnBhdXNlZCA9IHRydWUgOiB0aGlzLnBhdXNlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5kcmF3UGF1c2UoKTtcclxuICAgICAgXHJcbiAgICBpZiAodGltZSA9PT0gMCkge1xyXG4gICAgICB0aGlzLmVudmlyb25tZW50ID0gW107XHJcbiAgICAgIHJldHVybiAndGltZVVwJztcclxuICAgIH0gZWxzZSBpZiAod2lubmVyKSB7XHJcbiAgICAgIHRoaXMuZW52aXJvbm1lbnQgPSBbXTtcclxuICAgICAgcmV0dXJuIHdpbm5lcjtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5wYXVzZWQpIHtcclxuICAgICAgcmV0dXJuICdwYXVzZWQnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhd1RpbWVyKCkge1xyXG4gICAgLy8gVE9ETzogTmVlZCBiZXR0ZXIgc29sdXRpb25cclxuICAgIHRoaXMuZHJhd1RpbWVyQ2lyY2xlKCk7XHJcbiAgICB0aGlzLmRyYXdUaW1lckRpc3BsYXkoKTtcclxuICAgIHRoaXMuZHJhd1RpbWVyVGV4dCgpO1xyXG4gICAgXHJcbiAgICB0aGlzLnRpbWUgPSB0aGlzLnRpbWUgLSAxO1xyXG4gICAgaWYgKHRoaXMudGltZSA9PT0gMCkge1xyXG4gICAgICBsZXQgcmV0dXJuVGltZSA9IDA7XHJcbiAgICAgIHRoaXMudGltZSA9IExFVkVMX0NPTlNUQU5UUy5NQVhfVElNRTtcclxuICAgICAgcmV0dXJuIHJldHVyblRpbWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmF3VGltZXJUZXh0KCkge1xyXG4gICAgdGhpcy5jdHguZm9udCA9ICc0OHB4IFRyZWJ1Y2hldCBNUyc7XHJcbiAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdXSElURSc7XHJcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IENPTE9SX1BBTEVUVEUuUFJJTUFSWTtcclxuICAgIHRoaXMuY3R4LmZpbGxUZXh0KFxyXG4gICAgICBgJHtNYXRoLnJvdW5kKHRoaXMudGltZSAvIDYwKX1gLFxyXG4gICAgICB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLFxyXG4gICAgICBMRVZFTF9DT05TVEFOVFMuVElNRVJfVEVYVF9IRUlHSFQgKyAxMFxyXG4gICAgKTtcclxuICAgIHRoaXMuY3R4LnN0cm9rZVRleHQoXHJcbiAgICAgIGAke01hdGgucm91bmQodGhpcy50aW1lIC8gNjApfWAsXHJcbiAgICAgIHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsXHJcbiAgICAgIExFVkVMX0NPTlNUQU5UUy5USU1FUl9URVhUX0hFSUdIVCArIDEwXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZHJhd1RpbWVyQ2lyY2xlKCkge1xyXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBDT0xPUl9QQUxFVFRFLlNFQ09OREFSWTtcclxuICAgIHRoaXMuY3R4LmFyYyhcclxuICAgICAgdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMixcclxuICAgICAgTEVWRUxfQ09OU1RBTlRTLlRJTUVSX1RFWFRfSEVJR0hUIC0gNSxcclxuICAgICAgTEVWRUxfQ09OU1RBTlRTLlRJTUVSX1JBRElVUywgMCwgMiAqIE1hdGguUElcclxuICAgICAgKTtcclxuICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICB9XHJcblxyXG4gIGRyYXdUaW1lckRpc3BsYXkoKSB7XHJcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IENPTE9SX1BBTEVUVEUuUVVBVEVSTkFSWTtcclxuICAgIHRoaXMuY3R4LmFyYyhcclxuICAgICAgdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMixcclxuICAgICAgTEVWRUxfQ09OU1RBTlRTLlRJTUVSX1RFWFRfSEVJR0hUIC0gNSxcclxuICAgICAgTEVWRUxfQ09OU1RBTlRTLlRJTUVSX1JBRElVUyxcclxuICAgICAgLSAwLjUgKiBNYXRoLlBJLFxyXG4gICAgICAoTEVWRUxfQ09OU1RBTlRTLk1BWF9USU1FIC0gdGhpcy50aW1lKVxyXG4gICAgICAqIDIgKiBNYXRoLlBJIC8gTEVWRUxfQ09OU1RBTlRTLk1BWF9USU1FXHJcbiAgICAgIC0gMC41ICogTWF0aC5QSVxyXG4gICAgKTtcclxuICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLFxyXG4gICAgICBMRVZFTF9DT05TVEFOVFMuVElNRVJfVEVYVF9IRUlHSFQgLSA1XHJcbiAgICApO1xyXG4gICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gIH1cclxuXHJcbiAgZHJhd0hlYWx0aEJhcnMoKSB7XHJcbiAgICAvLyBQbGF5ZXIgaGVhbHRoIGNvbnRhaW5lclxyXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICdCTEFDSyc7XHJcbiAgICB0aGlzLmN0eC5tb3ZlVG8oXHJcbiAgICAgIHRoaXMucGxheWVySHBQb3MueCxcclxuICAgICAgdGhpcy5wbGF5ZXJIcFBvcy55XHJcbiAgICApO1xyXG4gICAgdGhpcy5jdHgubGluZVRvKFxyXG4gICAgICB0aGlzLnBsYXllckhwUG9zLnggLSBMRVZFTF9DT05TVEFOVFMuSEVBTFRIX0JBUi53aWR0aCxcclxuICAgICAgdGhpcy5wbGF5ZXJIcFBvcy55XHJcbiAgICApO1xyXG4gICAgdGhpcy5jdHgubGluZVRvKFxyXG4gICAgICB0aGlzLnBsYXllckhwUG9zLnggLSBMRVZFTF9DT05TVEFOVFMuSEVBTFRIX0JBUi53aWR0aCxcclxuICAgICAgdGhpcy5wbGF5ZXJIcFBvcy55ICsgTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIuaGVpZ2h0XHJcbiAgICApO1xyXG4gICAgdGhpcy5jdHgubGluZVRvKFxyXG4gICAgICB0aGlzLnBsYXllckhwUG9zLnggLSBMRVZFTF9DT05TVEFOVFMuT0ZGU0VULFxyXG4gICAgICB0aGlzLnBsYXllckhwUG9zLnkgKyBMRVZFTF9DT05TVEFOVFMuSEVBTFRIX0JBUi5oZWlnaHRcclxuICAgICk7XHJcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG5cclxuICAgIC8vYm90IGhlYWx0aCBjb250YWluZXJcclxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnQkxBQ0snO1xyXG4gICAgdGhpcy5jdHgubW92ZVRvKFxyXG4gICAgICB0aGlzLmJvdEhwUG9zLngsXHJcbiAgICAgIHRoaXMuYm90SHBQb3MueVxyXG4gICAgKTtcclxuICAgIHRoaXMuY3R4LmxpbmVUbyhcclxuICAgICAgdGhpcy5ib3RIcFBvcy54ICsgTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIud2lkdGgsXHJcbiAgICAgIHRoaXMuYm90SHBQb3MueVxyXG4gICAgKTtcclxuICAgIHRoaXMuY3R4LmxpbmVUbyhcclxuICAgICAgdGhpcy5ib3RIcFBvcy54ICsgTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIud2lkdGgsXHJcbiAgICAgIHRoaXMuYm90SHBQb3MueSArIExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLmhlaWdodFxyXG4gICAgKTtcclxuICAgIHRoaXMuY3R4LmxpbmVUbyhcclxuICAgICAgdGhpcy5ib3RIcFBvcy54ICsgTEVWRUxfQ09OU1RBTlRTLk9GRlNFVCxcclxuICAgICAgdGhpcy5ib3RIcFBvcy55ICsgTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIuaGVpZ2h0XHJcbiAgICApO1xyXG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XHJcbiAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIGRyYXdDdXJyZW50SGVhbHRoQmFycyhwbGF5ZXJIZWFsdGgsIGJvdEhlYWx0aCkge1xyXG5cclxuICAgIGlmIChwbGF5ZXJIZWFsdGggPD0gMCkge1xyXG4gICAgICByZXR1cm4gJ3BsYXllcjInO1xyXG4gICAgfSBlbHNlIGlmIChib3RIZWFsdGggPD0gMCkge1xyXG4gICAgICByZXR1cm4gJ3BsYXllcjEnO1xyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgY3VycmVudEhlYWx0aCA9IExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLndpZHRoICogcGxheWVySGVhbHRoIC8gTEVWRUxfQ09OU1RBTlRTLk1BWF9IRUFMVEg7XHJcblxyXG4gICAgLy8gUGxheWVyIGN1cnJlbnQgaGVhbHRoXHJcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdSRUQnO1xyXG4gICAgdGhpcy5jdHgubW92ZVRvKFxyXG4gICAgICB0aGlzLnBsYXllckhwUG9zLngsXHJcbiAgICAgIHRoaXMucGxheWVySHBQb3MueVxyXG4gICAgKTtcclxuICAgIHRoaXMuY3R4LmxpbmVUbyhcclxuICAgICAgdGhpcy5wbGF5ZXJIcFBvcy54IC0gY3VycmVudEhlYWx0aCxcclxuICAgICAgdGhpcy5wbGF5ZXJIcFBvcy55XHJcbiAgICApO1xyXG4gICAgaWYgKGN1cnJlbnRIZWFsdGggPCBMRVZFTF9DT05TVEFOVFMuT0ZGU0VUKSB7XHJcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyhcclxuICAgICAgICB0aGlzLnBsYXllckhwUG9zLnggLSBjdXJyZW50SGVhbHRoLFxyXG4gICAgICAgIC8vIGN1cnJlbnRIZWFsdGggPSBjdXJyZW50SGVhbHRoICogdGFuKHBpLzQpXHJcbiAgICAgICAgLy8gc2luY2Ugb2Zmc2V0ID0gaGVpZ2h0XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJIcFBvcy55ICsgY3VycmVudEhlYWx0aFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jdHgubGluZVRvKFxyXG4gICAgICAgIHRoaXMucGxheWVySHBQb3MueCAtIGN1cnJlbnRIZWFsdGgsXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJIcFBvcy55ICsgTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIuaGVpZ2h0XHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyhcclxuICAgICAgICB0aGlzLnBsYXllckhwUG9zLnggLSBMRVZFTF9DT05TVEFOVFMuT0ZGU0VULFxyXG4gICAgICAgIHRoaXMucGxheWVySHBQb3MueSArIExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLmhlaWdodFxyXG4gICAgICApO1xyXG4gICAgfTtcclxuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgdGhpcy5jdHguZmlsbCgpO1xyXG5cclxuICAgIGxldCBjdXJyZW50Qm90SGVhbHRoID0gTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIud2lkdGggKiBib3RIZWFsdGggLyBMRVZFTF9DT05TVEFOVFMuTUFYX0hFQUxUSDtcclxuXHJcbiAgICAvLyBCb3QgY3VycmVudCBoZWFsdGhcclxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ1JFRCc7XHJcbiAgICB0aGlzLmN0eC5tb3ZlVG8oXHJcbiAgICAgIHRoaXMuYm90SHBQb3MueCxcclxuICAgICAgdGhpcy5ib3RIcFBvcy55XHJcbiAgICApO1xyXG4gICAgdGhpcy5jdHgubGluZVRvKFxyXG4gICAgICB0aGlzLmJvdEhwUG9zLnggKyBjdXJyZW50Qm90SGVhbHRoLFxyXG4gICAgICB0aGlzLmJvdEhwUG9zLnlcclxuICAgICk7XHJcbiAgICBpZiAoY3VycmVudEJvdEhlYWx0aCA8IExFVkVMX0NPTlNUQU5UUy5PRkZTRVQpIHtcclxuICAgICAgdGhpcy5jdHgubGluZVRvKFxyXG4gICAgICAgIHRoaXMuYm90SHBQb3MueCArIGN1cnJlbnRCb3RIZWFsdGgsXHJcbiAgICAgICAgLy8gY3VycmVudEJvdEhlYWx0aCA9IGN1cnJlbnRCb3RIZWFsdGggKiB0YW4ocGkvNClcclxuICAgICAgICAvLyBzaW5jZSBvZmZzZXQgPSBoZWlnaHRcclxuICAgICAgICB0aGlzLmJvdEhwUG9zLnkgKyBjdXJyZW50Qm90SGVhbHRoXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmN0eC5saW5lVG8oXHJcbiAgICAgICAgdGhpcy5ib3RIcFBvcy54ICsgY3VycmVudEJvdEhlYWx0aCxcclxuICAgICAgICB0aGlzLmJvdEhwUG9zLnkgKyBMRVZFTF9DT05TVEFOVFMuSEVBTFRIX0JBUi5oZWlnaHRcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5jdHgubGluZVRvKFxyXG4gICAgICAgIHRoaXMuYm90SHBQb3MueCArIExFVkVMX0NPTlNUQU5UUy5PRkZTRVQsXHJcbiAgICAgICAgdGhpcy5ib3RIcFBvcy55ICsgTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIuaGVpZ2h0XHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XHJcbiAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgfVxyXG5cclxuICBkcmF3TmFtZXMoKSB7XHJcbiAgICBsZXQgcGxheWVyTmFtZSA9ICdQbGF5ZXIgMSc7XHJcbiAgICBsZXQgYm90TmFtZSA9ICdQbGF5ZXIgMic7XHJcbiAgICBsZXQgcGxheWVyTmFtZVBvcyA9IHtcclxuICAgICAgeDogdGhpcy5wbGF5ZXJIcFBvcy54IC0gTEVWRUxfQ09OU1RBTlRTLk9GRlNFVCxcclxuICAgICAgeTogdGhpcy5wbGF5ZXJIcFBvcy55ICsgTEVWRUxfQ09OU1RBTlRTLlRJTUVSX1JBRElVUyArIDRcclxuICAgIH07XHJcbiAgICBsZXQgYm90TmFtZVBvcyA9IHtcclxuICAgICAgeDogdGhpcy5ib3RIcFBvcy54ICsgTEVWRUxfQ09OU1RBTlRTLk9GRlNFVCxcclxuICAgICAgeTogdGhpcy5ib3RIcFBvcy55ICsgTEVWRUxfQ09OU1RBTlRTLlRJTUVSX1JBRElVUyArIDRcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5jdHguZm9udCA9ICczMnB4IFRyZWJ1Y2hldCBNUyc7XHJcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xyXG4gICAgdGhpcy5jdHgubGluZVdpZHRoID0gMC41O1xyXG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBDT0xPUl9QQUxFVFRFLlNFQ09OREFSWTtcclxuICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9ICdyaWdodCc7XHJcbiAgICB0aGlzLmN0eC5maWxsVGV4dChwbGF5ZXJOYW1lLCBwbGF5ZXJOYW1lUG9zLngsIHBsYXllck5hbWVQb3MueSk7XHJcbiAgICB0aGlzLmN0eC5zdHJva2VUZXh0KHBsYXllck5hbWUsIHBsYXllck5hbWVQb3MueCwgcGxheWVyTmFtZVBvcy55KTtcclxuXHJcbiAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSAnbGVmdCc7XHJcbiAgICB0aGlzLmN0eC5maWxsVGV4dChib3ROYW1lLCBib3ROYW1lUG9zLngsIGJvdE5hbWVQb3MueSk7XHJcbiAgICB0aGlzLmN0eC5zdHJva2VUZXh0KGJvdE5hbWUsIGJvdE5hbWVQb3MueCwgYm90TmFtZVBvcy55KTtcclxuICB9XHJcblxyXG4gIGRyYXdQYXVzZSgpIHtcclxuICAgIC8vIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgLy8gLy8gdGhpcy5jdHgucmVjdCh0aGlzLmRpbWVuc2lvbnMud2lkdGggLSA1MCAtIDIwLCAyMCwgNTAsIDUwKTtcclxuICAgIC8vIHRoaXMuY3R4LnJlY3QodGhpcy5kaW1lbnNpb25zLndpZHRoIC0gNTAgLSAxMCwgMjUsIDMwLCA0MCk7XHJcbiAgICAvLyB0aGlzLmN0eC5zdHJva2UoKTtcclxuXHJcbiAgICBpZiAoIXRoaXMucGF1c2VkKSB7XHJcbiAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBDT0xPUl9QQUxFVFRFLlFVSU5URVJOQVJZO1xyXG4gICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IENPTE9SX1BBTEVUVEUuUFJJTUFSWTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuY3R4LnJlY3QodGhpcy5kaW1lbnNpb25zLndpZHRoIC0gNTAgLSAxMCwgMjUsIDEwLCA0MCk7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgdGhpcy5jdHgucmVjdCh0aGlzLmRpbWVuc2lvbnMud2lkdGggLSA1MCArIDEwLCAyNSwgMTAsIDQwKTtcclxuICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gQ09MT1JfUEFMRVRURS5RVUlOVEVSTkFSWTtcclxuICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBDT0xPUl9QQUxFVFRFLlBSSU1BUlk7XHJcbiAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLmRpbWVuc2lvbnMud2lkdGggLSA1MCAtIDEwLCAyNSk7XHJcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmRpbWVuc2lvbnMud2lkdGggLSA1MCAtIDEwLCA2NSk7XHJcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmRpbWVuc2lvbnMud2lkdGggLSA1MCArIDIwLCA0NSk7XHJcbiAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3doaXRlJztcclxuICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gMS41O1xyXG5cclxuICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICAgIHRoaXMuY3R4LmZvbnQgPSAnNTZweCBUcmVidWNoZXQgTVMnO1xyXG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcclxuICAgICAgICAnR2FtZSBwYXVzZWQnLFxyXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsXHJcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDIgLSAzNlxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmN0eC5zdHJva2VUZXh0KFxyXG4gICAgICAgICdHYW1lIHBhdXNlZCcsXHJcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMixcclxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiAtIDM2XHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuICAgICAgdGhpcy5jdHguZm9udCA9ICczNnB4IFRyZWJ1Y2hldCBNUyc7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFxyXG4gICAgICAgICdQcmVzcyBwbGF5IHRvIGNvbnRpbnVlJyxcclxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLFxyXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyICsgMzZcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5jdHguc3Ryb2tlVGV4dChcclxuICAgICAgICAnUHJlc3MgcGxheSB0byBjb250aW51ZScsXHJcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMixcclxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiArIDM2XHJcbiAgICAgIClcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBkcmF3QmFja2dyb3VuZCgpIHtcclxuICAgIGxldCBiYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XHJcbiAgICBiYWNrZ3JvdW5kLnNyYyA9ICdmcm9udGVuZC9hc3NldHMvaW1hZ2VzL2dhbWUtYmFja2dyb3VuZC5qcGcnO1xyXG4gICAgLy8gYmFja2dyb3VuZC5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCAwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiAgLy8gVE9ETzogUHJvYmFibHkgdGVtcG9yYXJ5XHJcbiAgZHJhd0Zsb29yKCkge1xyXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ0JST1dOJztcclxuICAgIHRoaXMuY3R4LmZpbGxSZWN0KFxyXG4gICAgICAwLCBcclxuICAgICAgdGhpcy5kaW1lbnNpb25zLmhlaWdodCAtIDEsIFxyXG4gICAgICB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIFxyXG4gICAgICAxNTVcclxuICAgICk7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==