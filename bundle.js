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
      basicAttackKeycode: playerNum === 1 ? 74 : 16,
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
  demoIcon.addEventListener('mousedown', () => openModal('demo', modalBackground));
  helpIcon.addEventListener('mousedown', () => openModal('help', modalBackground));
}

const openModal = (type, modalBackground) => {
  modalBackground.classList.remove('hidden');
  switch (type) {
    case 'demo':
      let demoDisplay = document.getElementsByClassName('demo-open')[0];
      demoDisplay.classList.remove('hidden');
      break;
    case 'help':
      let helpDisplay = document.getElementsByClassName('help-open')[0];
      helpDisplay.classList.remove('hidden');
      break;
  }
}

const closeModal = (e) => {
  e.currentTarget.classList.add('hidden');
  let demoDisplay = document.getElementsByClassName('demo-open')[0];
  demoDisplay.classList.add('hidden');
  let helpDisplay = document.getElementsByClassName('help-open')[0];
  helpDisplay.classList.add('hidden');
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
      x: this.dimensions.width - 70,
      y: 20
    };
    this.soundDimensions = {
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
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleMute = this.handleMute.bind(this);
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
      this.ctx.canvas.addEventListener('mousedown', this.handlePause);

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
  
      let mute = new Image();
      this.sound ? 
      mute.src = 'frontend/assets/images/speaker.png':
      mute.src = 'frontend/assets/images/mute.png'
      mute.onload = () => {
        this.ctx.drawImage(mute, this.dimensions.width - 70, 20, 50, 50);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvYXZhdGFyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2VudHJ5LmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvbGV2ZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLFNBQVMsY0FBYztBQUN2QixTQUFTLGNBQWM7QUFDdkIsWUFBWSxhQUFhO0FBQ3pCLFNBQVMsYUFBYTtBQUN0QixHQUFHO0FBQ0g7QUFDQSxTQUFTLGNBQWM7QUFDdkIsU0FBUyxjQUFjO0FBQ3ZCLFlBQVksYUFBYTtBQUN6QixTQUFTLGFBQWE7QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN6V0E7QUFBQTtBQUEyQjs7QUFFM0I7QUFDQTtBQUNBLE1BQU0sNkNBQUs7QUFDWDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNsRUE7QUFBQTtBQUFBO0FBQUE7QUFBNEI7QUFDRTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsOENBQUs7QUFDMUIsdUJBQXVCLCtDQUFNO0FBQzdCLHVCQUF1QiwrQ0FBTTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsWUFBWTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3RSQTtBQUFBO0FBQUE7QUFBd0M7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSwrQkFBK0Isb0RBQVc7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDJCQUEyQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsMkJBQTJCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiIuL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZnJvbnRlbmQvZW50cnkuanNcIik7XG4iLCJjb25zdCBBVkFUQVJfQ09OU1RBTlRTID0ge1xuICBBVkFUQVJfRElNRU5TSU9OUzoge1xuICAgIHdpZHRoOiAxNTAsXG4gICAgaGVpZ2h0OiAzMDBcbiAgfSxcbiAgR1JBVklUWTogLTEuOCxcbiAgUDFfTU9WRU1FTlQ6IHtcbiAgICA4NzogeyB4OiAwLCB5OiAtMSB9LFxuICAgIDY1OiB7IHg6IC0xLCB5OiAwIH0sXG4gICAgLy8gODM6IHsgeDogMCwgeTogMSB9LFxuICAgIDY4OiB7IHg6IDEsIHk6IDAgfSxcbiAgfSxcbiAgUDJfTU9WRU1FTlQ6IHtcbiAgICAzODogeyB4OiAwLCB5OiAtMSB9LFxuICAgIDM3OiB7IHg6IC0xLCB5OiAwIH0sXG4gICAgLy8gNDA6IHsgeDogMCwgeTogMSB9LFxuICAgIDM5OiB7IHg6IDEsIHk6IDAgfSxcbiAgfSxcbiAgTU9WRU1FTlRfU1BFRUQ6IHtcbiAgICB4OiAxMCxcbiAgICB5OiAzMFxuICB9LFxuICBNQVhfSEVBTFRIOiAyMDAsXG4gIFNSSVRFU0hFRVQ6IHtcbiAgICBXQUxLSU5HOiB7XG4gICAgICAxOiB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDIwMixcbiAgICAgICAgdzogNTAsXG4gICAgICAgIGg6IDk4XG4gICAgICB9LFxuICAgICAgMjoge1xuICAgICAgICB4OiA1MCxcbiAgICAgICAgeTogMjAyLFxuICAgICAgICB3OiA1MCxcbiAgICAgICAgaDogOThcbiAgICAgIH0sXG4gICAgICAzOiB7XG4gICAgICAgIHg6IDEwMCxcbiAgICAgICAgeTogMjAyLFxuICAgICAgICB3OiA2NSxcbiAgICAgICAgaDogOThcbiAgICAgIH0sXG4gICAgICA0OiB7XG4gICAgICAgIHg6IDE2NSxcbiAgICAgICAgeTogMjAyLFxuICAgICAgICB3OiA3NSxcbiAgICAgICAgaDogOThcbiAgICAgIH0sXG4gICAgICA1OiB7XG4gICAgICAgIHg6IDI0MCxcbiAgICAgICAgeTogMjAyLFxuICAgICAgICB3OiA2MCxcbiAgICAgICAgaDogOThcbiAgICAgIH0sXG4gICAgICA2OiB7XG4gICAgICAgIHg6IDMwMCxcbiAgICAgICAgeTogMjAzLFxuICAgICAgICB3OiA3MCxcbiAgICAgICAgaDogOTdcbiAgICAgIH0sXG4gICAgICA3OiB7XG4gICAgICAgIHg6IDM3MCxcbiAgICAgICAgeTogMjAyLFxuICAgICAgICB3OiA4MCxcbiAgICAgICAgaDogOThcbiAgICAgIH1cbiAgICB9LFxuICAgIElETEU6IHtcbiAgICAgIDE6IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMzAxLFxuICAgICAgICB3OiA3NSxcbiAgICAgICAgaDogOTZcbiAgICAgIH0sXG4gICAgICAyOiB7XG4gICAgICAgIHg6IDc1LFxuICAgICAgICB5OiAzMDEsXG4gICAgICAgIHc6IDc1LFxuICAgICAgICBoOiA5NlxuICAgICAgfSxcbiAgICAgIDM6IHtcbiAgICAgICAgeDogMTUwLFxuICAgICAgICB5OiAzMDEsXG4gICAgICAgIHc6IDc1LFxuICAgICAgICBoOiA5NlxuICAgICAgfSxcbiAgICAgIDQ6IHtcbiAgICAgICAgeDogMjI1LFxuICAgICAgICB5OiAzMDEsXG4gICAgICAgIHc6IDc1LFxuICAgICAgICBoOiA5NlxuICAgICAgfSxcbiAgICAgIDU6IHtcbiAgICAgICAgeDogMzAwLFxuICAgICAgICB5OiAzMDEsXG4gICAgICAgIHc6IDc1LFxuICAgICAgICBoOiA5NlxuICAgICAgfSxcbiAgICAgIDY6IHtcbiAgICAgICAgeDogMzc1LFxuICAgICAgICB5OiAzMDEsXG4gICAgICAgIHc6IDc1LFxuICAgICAgICBoOiA5NlxuICAgICAgfVxuICAgIH0sXG4gICAgSlVNUDoge1xuICAgICAgMToge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiA5NSxcbiAgICAgICAgdzogNzQsXG4gICAgICAgIGg6IDEwN1xuICAgICAgfSxcbiAgICAgIDI6IHtcbiAgICAgICAgeDogNzQsXG4gICAgICAgIHk6IDk1LFxuICAgICAgICB3OiA3NCxcbiAgICAgICAgaDogMTA3XG4gICAgICB9LFxuICAgICAgMzoge1xuICAgICAgICB4OiAxNDgsXG4gICAgICAgIHk6IDk1LFxuICAgICAgICB3OiA3NCxcbiAgICAgICAgaDogMTA3XG4gICAgICB9LFxuICAgICAgNDoge1xuICAgICAgICB4OiAyMjIsXG4gICAgICAgIHk6IDk1LFxuICAgICAgICB3OiA3NCxcbiAgICAgICAgaDogMTA3XG4gICAgICB9LFxuICAgICAgNToge1xuICAgICAgICB4OiAyOTYsXG4gICAgICAgIHk6IDk1LFxuICAgICAgICB3OiA3NCxcbiAgICAgICAgaDogMTA3XG4gICAgICB9XG4gICAgfSxcbiAgICBBVFRBQ0s6IHtcbiAgICAgIDE6IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgdzogMTA0LFxuICAgICAgICBoOiA5NVxuICAgICAgfSxcbiAgICAgIDI6IHtcbiAgICAgICAgeDogMTA0LFxuICAgICAgICB5OiAwLFxuICAgICAgICB3OiAxMDQsXG4gICAgICAgIGg6IDk1XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF2YXRhciB7XG4gIGNvbnN0cnVjdG9yKGN0eCwgZGltZW5zaW9ucywgcGxheWVyTnVtKSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9ucztcbiAgICB0aGlzLnBsYXllck51bSA9IHBsYXllck51bTtcblxuICAgIGxldCBzdGFydGluZ1ggPSBwbGF5ZXJOdW0gPT09IDEgPyA1MCA6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIDUwO1xuICAgIHRoaXMucG9zID0ge1xuICAgICAgeDogc3RhcnRpbmdYIC0gQVZBVEFSX0NPTlNUQU5UUy5BVkFUQVJfRElNRU5TSU9OUy53aWR0aCAvIDIsXG4gICAgICB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC0gQVZBVEFSX0NPTlNUQU5UUy5BVkFUQVJfRElNRU5TSU9OUy5oZWlnaHQgLSAxXG4gICAgfTtcblxuICAgIHRoaXMudmVsID0ge1xuICAgICAgdng6IDAsXG4gICAgICB2eTogMFxuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBoZWFsdGg6IEFWQVRBUl9DT05TVEFOVFMuTUFYX0hFQUxUSCxcbiAgICAgIGJhc2ljQXR0YWNraW5nOiBmYWxzZSxcbiAgICAgIGRhbWFnZURvbmU6IGZhbHNlLFxuICAgICAgYmFzaWNBdHRhY2tIaXRib3g6IHtcbiAgICAgICAgdzogQVZBVEFSX0NPTlNUQU5UUy5BVkFUQVJfRElNRU5TSU9OUy53aWR0aCAvIDIgKyA0MCxcbiAgICAgICAgaDogMTBcbiAgICAgIH0sXG4gICAgICBiYXNpY0F0dGFja0RhbWFnZTogMTAsXG4gICAgICBmYWNpbmc6IHBsYXllck51bSA9PT0gMSA/IDEgOiAtMSxcbiAgICAgIGJhc2ljQXR0YWNrS2V5Y29kZTogcGxheWVyTnVtID09PSAxID8gNzQgOiAxNixcbiAgICAgIG1vdmVtZW50OiAnaWRsZSdcbiAgICB9XG5cbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMua2V5Q29kZU1vdmVtZW50ID0gdGhpcy5wbGF5ZXJOdW0gPT09IDEgPyBcbiAgICAgIEFWQVRBUl9DT05TVEFOVFMuUDFfTU9WRU1FTlQgOiBBVkFUQVJfQ09OU1RBTlRTLlAyX01PVkVNRU5UO1xuICAgIHRoaXMua2V5cHJlc3NQT0pPID0ge307XG4gICAgT2JqZWN0LmtleXModGhpcy5rZXlDb2RlTW92ZW1lbnQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgdGhpcy5rZXlwcmVzc1BPSk9ba2V5XSA9IGZhbHNlO1xuICAgIH0pO1xuICAgIHRoaXMuc3ByaXRlU2hlZXQgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLnNwcml0ZVNoZWV0LnNyYyA9ICdmcm9udGVuZC9hc3NldHMvaW1hZ2VzL3J5dS1zcHJpdGUtc2hlZXQucG5nJztcblxuICAgIHRoaXMuYW5pbWF0aW9uVGltZXIgPSAwO1xuXG4gICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmF3QXZhdGFyID0gdGhpcy5kcmF3QXZhdGFyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb3ZlQXZhdGFyID0gdGhpcy5tb3ZlQXZhdGFyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdG9wQXZhdGFyID0gdGhpcy5zdG9wQXZhdGFyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGVja0JvdW5kYXJ5ID0gdGhpcy5jaGVja0JvdW5kYXJ5LmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbiA9IHRoaXMudXBkYXRlUG9zaXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmJhc2ljQXR0YWNrID0gdGhpcy5iYXNpY0F0dGFjay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJhd0Jhc2ljQXR0YWNrID0gdGhpcy5kcmF3QmFzaWNBdHRhY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUF0dGFjayA9IHRoaXMuaGFuZGxlQXR0YWNrLmJpbmQodGhpcyk7XG5cbiAgICAvL1RPRE86IElTIFRIRVJFIEEgQkVUVEVSIFNPTFVUSU9OP1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUF0dGFjayk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMubW92ZUF2YXRhcik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLnN0b3BBdmF0YXIpO1xuICB9XG5cbiAgYW5pbWF0ZShwYXVzZWQpIHtcbiAgICB0aGlzLnBhdXNlZCA9ICEhcGF1c2VkO1xuICAgIHRoaXMuYW5pbWF0aW9uVGltZXIgKz0gMC4wNTtcbiAgICBpZiAoIXRoaXMucGF1c2VkKSB7XG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnZlbC52eCA9PT0gMCAmJiB0aGlzLnZlbC52eSA9PT0gMCkge1xuICAgICAgdGhpcy5zdGF0ZS5tb3ZlbWVudCA9ICdpZGxlJztcbiAgICB9XG4gICAgbGV0IGJvdW5kcztcbiAgICBpZiAoIXRoaXMucGF1c2VkKSB7XG4gICAgICB0aGlzLmRyYXdCYXNpY0F0dGFjaygpO1xuICAgICAgYm91bmRzID0ge1xuICAgICAgICB4OiB0aGlzLnBvcy54ICsgdGhpcy5zdGF0ZS5mYWNpbmcgKiB0aGlzLnN0YXRlLmJhc2ljQXR0YWNrSGl0Ym94LncsXG4gICAgICAgIHk6IHRoaXMucG9zLnkgKyB0aGlzLnN0YXRlLmJhc2ljQXR0YWNrSGl0Ym94LmhcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5kcmF3QXZhdGFyKCk7XG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIHVwZGF0ZVBvc2l0aW9uKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMua2V5cHJlc3NQT0pPKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmICh0aGlzLmtleXByZXNzUE9KT1trZXldKSB7XG4gICAgICAgIC8vIEtleXByZXNzIG1vdmVtZW50XG4gICAgICAgIGlmICh0aGlzLmtleUNvZGVNb3ZlbWVudFtrZXldLnggIT09IDApIHtcbiAgICAgICAgICB0aGlzLnZlbC52eCA9IHRoaXMua2V5Q29kZU1vdmVtZW50W2tleV0ueFxuICAgICAgICAgICAgKiBBVkFUQVJfQ09OU1RBTlRTLk1PVkVNRU5UX1NQRUVELng7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5mYWNpbmcgPSB0aGlzLmtleUNvZGVNb3ZlbWVudFtrZXldLng7XG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGUubW92ZW1lbnQgIT09ICdqdW1wJykge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5tb3ZlbWVudCA9ICdtb3ZlWCc7XG4gICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gUHJldmVudCBpbmZpbml0ZSBqdW1wXG4gICAgICAgIGlmICh0aGlzLnBvcy55ID09PSB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC0gMSAtIEFWQVRBUl9DT05TVEFOVFMuQVZBVEFSX0RJTUVOU0lPTlMuaGVpZ2h0KSB7XG4gICAgICAgICAgaWYgKHRoaXMua2V5Q29kZU1vdmVtZW50W2tleV0ueSAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy52ZWwudnkgPSB0aGlzLmtleUNvZGVNb3ZlbWVudFtrZXldLnlcbiAgICAgICAgICAgICAgKiBBVkFUQVJfQ09OU1RBTlRTLk1PVkVNRU5UX1NQRUVELnk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm1vdmVtZW50ID0gJ2p1bXAnO1xuICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy52ZWwudnkgLT0gQVZBVEFSX0NPTlNUQU5UUy5HUkFWSVRZO1xuICAgIHRoaXMucG9zLnkgKz0gdGhpcy52ZWwudnk7XG4gICAgdGhpcy5wb3MueCArPSB0aGlzLnZlbC52eDtcbiAgICB0aGlzLmNoZWNrQm91bmRhcnkoKTtcbiAgfVxuXG4gIG1vdmVBdmF0YXIoZSkge1xuICAgIGlmICghdGhpcy5wYXVzZWQgJiYgIWUucmVwZWF0KSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5rZXlDb2RlTW92ZW1lbnQpLmluY2x1ZGVzKGUua2V5Q29kZS50b1N0cmluZygpKSkge1xuICAgICAgICB0aGlzLmtleXByZXNzUE9KT1tlLmtleUNvZGUudG9TdHJpbmcoKV0gPSB0cnVlO1xuICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RvcEF2YXRhcihlKSB7XG4gICAgdGhpcy52ZWwudnggPSAwO1xuICAgIHRoaXMua2V5cHJlc3NQT0pPW2Uua2V5Q29kZS50b1N0cmluZygpXSA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcbiAgfVxuICBcbiAgZHJhd0F2YXRhcigpIHtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnBsYXllck51bSA9PT0gMSA/ICdCbHVlJyA6ICdSZWQnO1xuICAgIGxldCBjdXJyZW50U3ByaXRlU2xpY2VJZHg7XG4gICAgbGV0IGN1cnJlbnRTcHJpdGVTbGljZTtcbiAgICBsZXQgYXR0YWNrT2Zmc2V0ID0gMDtcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUubW92ZW1lbnQpIHtcbiAgICAgIGNhc2UgJ2lkbGUnOlxuICAgICAgICBjdXJyZW50U3ByaXRlU2xpY2VJZHggPSAxICsgTWF0aC5yb3VuZCh0aGlzLmFuaW1hdGlvblRpbWVyICUgKE9iamVjdC5rZXlzKEFWQVRBUl9DT05TVEFOVFMuU1JJVEVTSEVFVC5JRExFKS5sZW5ndGggLSAxKSk7XG4gICAgICAgIGN1cnJlbnRTcHJpdGVTbGljZSA9IEFWQVRBUl9DT05TVEFOVFMuU1JJVEVTSEVFVC5JRExFW2N1cnJlbnRTcHJpdGVTbGljZUlkeF07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbW92ZVgnOlxuICAgICAgICBjdXJyZW50U3ByaXRlU2xpY2VJZHggPSAxICsgTWF0aC5yb3VuZCgyICogdGhpcy5hbmltYXRpb25UaW1lciAlIChPYmplY3Qua2V5cyhBVkFUQVJfQ09OU1RBTlRTLlNSSVRFU0hFRVQuV0FMS0lORykubGVuZ3RoIC0gMSkpO1xuICAgICAgICBjdXJyZW50U3ByaXRlU2xpY2UgPSBBVkFUQVJfQ09OU1RBTlRTLlNSSVRFU0hFRVQuV0FMS0lOR1tjdXJyZW50U3ByaXRlU2xpY2VJZHhdO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2p1bXAnOlxuICAgICAgICBjdXJyZW50U3ByaXRlU2xpY2VJZHggPSAxICsgTWF0aC5yb3VuZCgyICogdGhpcy5hbmltYXRpb25UaW1lciAlIChPYmplY3Qua2V5cyhBVkFUQVJfQ09OU1RBTlRTLlNSSVRFU0hFRVQuSlVNUCkubGVuZ3RoIC0gMSkpO1xuICAgICAgICBjdXJyZW50U3ByaXRlU2xpY2UgPSBBVkFUQVJfQ09OU1RBTlRTLlNSSVRFU0hFRVQuSlVNUFtjdXJyZW50U3ByaXRlU2xpY2VJZHhdO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2F0dGFjayc6XG4gICAgICAgIGN1cnJlbnRTcHJpdGVTbGljZUlkeCA9IDEgKyBNYXRoLnJvdW5kKHRoaXMuYW5pbWF0aW9uVGltZXIgJSAoT2JqZWN0LmtleXMoQVZBVEFSX0NPTlNUQU5UUy5TUklURVNIRUVULkFUVEFDSykubGVuZ3RoIC0gMSkpO1xuICAgICAgICBjdXJyZW50U3ByaXRlU2xpY2UgPSBBVkFUQVJfQ09OU1RBTlRTLlNSSVRFU0hFRVQuQVRUQUNLW2N1cnJlbnRTcHJpdGVTbGljZUlkeF07XG4gICAgICAgIGF0dGFja09mZnNldCA9IDUwO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgIHRoaXMuY3R4LnNjYWxlKHRoaXMuc3RhdGUuZmFjaW5nLCAxKTtcbiAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICBpZiAodGhpcy5zdGF0ZS5mYWNpbmcgPT09IC0xKSB7XG4gICAgICBvZmZzZXQgPSBBVkFUQVJfQ09OU1RBTlRTLkFWQVRBUl9ESU1FTlNJT05TLndpZHRoO1xuICAgIH1cbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLnNwcml0ZVNoZWV0LFxuICAgICAgY3VycmVudFNwcml0ZVNsaWNlLngsXG4gICAgICBjdXJyZW50U3ByaXRlU2xpY2UueSxcbiAgICAgIGN1cnJlbnRTcHJpdGVTbGljZS53LFxuICAgICAgY3VycmVudFNwcml0ZVNsaWNlLmgsXG4gICAgICB0aGlzLnN0YXRlLmZhY2luZyAqIHRoaXMucG9zLnggLSBvZmZzZXQsXG4gICAgICB0aGlzLnBvcy55LFxuICAgICAgQVZBVEFSX0NPTlNUQU5UUy5BVkFUQVJfRElNRU5TSU9OUy53aWR0aCArIGF0dGFja09mZnNldCxcbiAgICAgIEFWQVRBUl9DT05TVEFOVFMuQVZBVEFSX0RJTUVOU0lPTlMuaGVpZ2h0XG4gICAgKTtcbiAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBjaGVja0JvdW5kYXJ5KCkge1xuICAgIGxldCBtYXhPZmZzZXQgPSB0aGlzLnBsYXllck51bSA9PT0gMSA/IDAgOiBBVkFUQVJfQ09OU1RBTlRTLkFWQVRBUl9ESU1FTlNJT05TLndpZHRoO1xuICAgIGxldCBtaW5PZmZzZXQgPSB0aGlzLnBsYXllck51bSA9PT0gMiA/IDAgOiBBVkFUQVJfQ09OU1RBTlRTLkFWQVRBUl9ESU1FTlNJT05TLndpZHRoO1xuICAgIGlmICh0aGlzLnBvcy54IDwgMCkge1xuICAgICAgdGhpcy5wb3MueCA9IDA7XG4gICAgICB0aGlzLnZlbC52eCA9IDA7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBvcy54ID4gdGhpcy5kaW1lbnNpb25zLndpZHRoIC0gbWF4T2Zmc2V0IC0gbWluT2Zmc2V0KSB7XG4gICAgICB0aGlzLnBvcy54ID0gdGhpcy5kaW1lbnNpb25zLndpZHRoIC0gbWF4T2Zmc2V0IC0gbWluT2Zmc2V0O1xuICAgICAgdGhpcy52ZWwudnggPSAwO1xuICAgIH07XG4gICAgaWYgKHRoaXMucG9zLnkgPiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC0gMSAtIEFWQVRBUl9DT05TVEFOVFMuQVZBVEFSX0RJTUVOU0lPTlMuaGVpZ2h0KSB7XG4gICAgICB0aGlzLnBvcy55ID0gdGhpcy5kaW1lbnNpb25zLmhlaWdodCAtIDEgLSBBVkFUQVJfQ09OU1RBTlRTLkFWQVRBUl9ESU1FTlNJT05TLmhlaWdodDtcbiAgICAgIHRoaXMudmVsLnZ5ID0gMDtcbiAgICB9IGVsc2UgaWYgKHRoaXMucG9zLnkgPCAwKSB7XG4gICAgICB0aGlzLnBvcy55ID0gMDtcbiAgICB9XG4gIH1cblxuICBiYXNpY0F0dGFjaygpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuYmFzaWNBdHRhY2tpbmcpIHtcbiAgICAgIHRoaXMuc3RhdGUuYmFzaWNBdHRhY2tpbmcgPSB0cnVlO1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnN0YXRlLmJhc2ljQXR0YWNraW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RhdGUuZGFtYWdlRG9uZSA9IGZhbHNlO1xuICAgICAgfSwgMjUwKTtcbiAgICB9XG4gIH1cbiAgXG4gIGRyYXdCYXNpY0F0dGFjaygpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5iYXNpY0F0dGFja2luZykge1xuICAgICAgdGhpcy5zdGF0ZS5tb3ZlbWVudCA9ICdhdHRhY2snO1xuICAgIH07XG4gIH1cblxuICBoYW5kbGVBdHRhY2soZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IHRoaXMuc3RhdGUuYmFzaWNBdHRhY2tLZXljb2RlKSB7XG4gICAgICB0aGlzLmJhc2ljQXR0YWNrKCk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IEFyZW5hIGZyb20gXCIuL2dhbWVcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuICBuZXcgQXJlbmEoY2FudmFzKTtcbiAgYXR0YWNoRXZlbnRMaXN0ZW5lcnMoKTtcbn0pO1xuXG5jb25zdCBhdHRhY2hFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgbGV0IGRlbW9JY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVtby1pY29uLWNvbnRhaW5lcicpWzBdO1xuICBsZXQgaGVscEljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWxwLWljb24tY29udGFpbmVyJylbMF07XG4gIGxldCBtb2RhbEJhY2tncm91bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb2RhbC1iYWNrZ3JvdW5kJylbMF07XG4gIGxldCBtb2RhbENoaWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW9kYWwtY2hpbGQnKVswXTtcblxuICBtb2RhbENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpKTtcbiAgbW9kYWxCYWNrZ3JvdW5kLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiBjbG9zZU1vZGFsKGUpKTtcbiAgZGVtb0ljb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4gb3Blbk1vZGFsKCdkZW1vJywgbW9kYWxCYWNrZ3JvdW5kKSk7XG4gIGhlbHBJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IG9wZW5Nb2RhbCgnaGVscCcsIG1vZGFsQmFja2dyb3VuZCkpO1xufVxuXG5jb25zdCBvcGVuTW9kYWwgPSAodHlwZSwgbW9kYWxCYWNrZ3JvdW5kKSA9PiB7XG4gIG1vZGFsQmFja2dyb3VuZC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnZGVtbyc6XG4gICAgICBsZXQgZGVtb0Rpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZW1vLW9wZW4nKVswXTtcbiAgICAgIGRlbW9EaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnaGVscCc6XG4gICAgICBsZXQgaGVscERpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWxwLW9wZW4nKVswXTtcbiAgICAgIGhlbHBEaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuY29uc3QgY2xvc2VNb2RhbCA9IChlKSA9PiB7XG4gIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgbGV0IGRlbW9EaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVtby1vcGVuJylbMF07XG4gIGRlbW9EaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBsZXQgaGVscERpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWxwLW9wZW4nKVswXTtcbiAgaGVscERpc3BsYXkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG59IiwiY29uc3QgRU5WSVJPTk1FTlRfQ09OU1RBTlRTID0ge1xuICBHUkFWSVRZOiAtMC43LFxuICBFTlZJUk9OTUVOVF9ESU1FTlNJT05TOiA5NCxcbiAgU0FLVVJBX1NQUklURVM6IDMsXG4gIFNOT1dGTEFLRV9TUFJJVEVTOiA5LFxuICBFTlZJUk9OTUVOVF9SRVNJWkU6IDI1XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudmlyb25tZW50IHtcbiAgY29uc3RydWN0b3IoY3R4LCBkaW1lbnNpb25zLCB0eXBlKSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9ucztcbiAgICB0aGlzLnBvcyA9IHtcbiAgICAgIHg6IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHRoaXMuZGltZW5zaW9ucy53aWR0aCksXG4gICAgICB5OiAtOTRcbiAgICB9XG5cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc2FrdXJhJzpcbiAgICAgICAgdGhpcy5yYW5kU3ByaXRlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKEVOVklST05NRU5UX0NPTlNUQU5UUy5TQUtVUkFfU1BSSVRFUyAtIDEpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzbm93Zmxha2UnOlxuICAgICAgICB0aGlzLnJhbmRTcHJpdGUgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoRU5WSVJPTk1FTlRfQ09OU1RBTlRTLlNOT1dGTEFLRV9TUFJJVEVTIC0gMSkpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLmRlbHRheCA9IE1hdGgucmFuZG9tKCkgKiAwLjUgLSAwLjI1O1xuICAgIHRoaXMubW92ZSA9IHRoaXMubW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJhd0Vudmlyb25tZW50ID0gdGhpcy5kcmF3RW52aXJvbm1lbnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGFuaW1hdGUoKSB7XG4gICAgdGhpcy5tb3ZlKCk7XG4gICAgdGhpcy5kcmF3RW52aXJvbm1lbnQoKTtcbiAgfVxuXG4gIG1vdmUoKSB7XG4gICAgdGhpcy5wb3MueSAtPSBFTlZJUk9OTUVOVF9DT05TVEFOVFMuR1JBVklUWTtcbiAgICB0aGlzLnBvcy54ICs9IHRoaXMuZGVsdGF4O1xuICB9XG5cbiAgZHJhd0Vudmlyb25tZW50KCkge1xuICAgIGxldCBlbnZpcm9ubWVudCA9IG5ldyBJbWFnZSgpO1xuICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICBjYXNlICdzYWt1cmEnOlxuICAgICAgICBlbnZpcm9ubWVudC5zcmMgPSAnZnJvbnRlbmQvYXNzZXRzL2ltYWdlcy9zYWt1cmEucG5nJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzbm93Zmxha2UnOlxuICAgICAgICBlbnZpcm9ubWVudC5zcmMgPSAnZnJvbnRlbmQvYXNzZXRzL2ltYWdlcy9zbm93Zmxha2UucG5nJztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgIGVudmlyb25tZW50LCBcbiAgICAgIEVOVklST05NRU5UX0NPTlNUQU5UUy5FTlZJUk9OTUVOVF9ESU1FTlNJT05TICogdGhpcy5yYW5kU3ByaXRlLCBcbiAgICAgIDAsXG4gICAgICBFTlZJUk9OTUVOVF9DT05TVEFOVFMuRU5WSVJPTk1FTlRfRElNRU5TSU9OUyxcbiAgICAgIEVOVklST05NRU5UX0NPTlNUQU5UUy5FTlZJUk9OTUVOVF9ESU1FTlNJT05TLFxuICAgICAgdGhpcy5wb3MueCxcbiAgICAgIHRoaXMucG9zLnksXG4gICAgICBFTlZJUk9OTUVOVF9DT05TVEFOVFMuRU5WSVJPTk1FTlRfUkVTSVpFLFxuICAgICAgRU5WSVJPTk1FTlRfQ09OU1RBTlRTLkVOVklST05NRU5UX1JFU0laRSxcbiAgICApO1xuICB9XG59IiwiaW1wb3J0IExldmVsIGZyb20gXCIuL2xldmVsXCI7XG5pbXBvcnQgQXZhdGFyIGZyb20gJy4vYXZhdGFyJztcblxuY29uc3QgQVZBVEFSX0NPTlNUQU5UUyA9IHtcbiAgQVZBVEFSX0RJTUVOU0lPTlM6IHtcbiAgICB3aWR0aDogMTUwLFxuICAgIGhlaWdodDogMzAwXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJlbmEge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMuZGltZW5zaW9ucyA9IHsgd2lkdGg6IGNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0IH07XG4gICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICB0aGlzLnNvdW5kID0gZmFsc2U7XG4gICAgdGhpcy53aW5uZXIgPSBudWxsO1xuXG4gICAgdGhpcy5kb2N1bWVudE9mZnNldFggPSAoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCAtIHRoaXMuZGltZW5zaW9ucy53aWR0aCkgLyAyO1xuICAgIHRoaXMuZG9jdW1lbnRPZmZzZXRZID0gKGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0IC0gODAgLSB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KSAvIDI7XG5cbiAgICB0aGlzLnBsYXlQb3MgPSB7XG4gICAgICB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyIC0gMTEwLFxuICAgICAgeTogdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDIgKyAyOFxuICAgIH07XG4gICAgdGhpcy5wbGF5RGltZW5zaW9ucyA9IHtcbiAgICAgIGR4OiAyMjAsXG4gICAgICBkeTogNTZcbiAgICB9O1xuXG4gICAgdGhpcy5wYXVzZVBvcyA9IHtcbiAgICAgIHg6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIDYwLFxuICAgICAgeTogMjVcbiAgICB9O1xuICAgIHRoaXMucGF1c2VEaW1lbnNpb25zID0ge1xuICAgICAgZHg6IDMwLFxuICAgICAgZHk6IDQwXG4gICAgfTtcblxuICAgIHRoaXMuc291bmRQb3MgPSB7XG4gICAgICB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLSA3MCxcbiAgICAgIHk6IDIwXG4gICAgfTtcbiAgICB0aGlzLnNvdW5kRGltZW5zaW9ucyA9IHtcbiAgICAgIGR4OiA1MCxcbiAgICAgIGR5OiA1MFxuICAgIH07XG5cbiAgICB0aGlzLnNvdW5kT2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImF1ZGlvXCIpO1xuICAgIHRoaXMuc291bmRPYmouc3JjID0gJ2Zyb250ZW5kL2Fzc2V0cy9hdWRpby91aS1vc3QubXAzJztcbiAgICB0aGlzLnNvdW5kT2JqLnNldEF0dHJpYnV0ZShcInByZWxvYWRcIiwgXCJhdXRvXCIpO1xuICAgIHRoaXMuc291bmRPYmouc2V0QXR0cmlidXRlKFwiY29udHJvbHNcIiwgXCJub25lXCIpO1xuICAgIHRoaXMuc291bmRPYmouc2V0QXR0cmlidXRlKFwibG9vcFwiLCBcInRydWVcIik7XG4gICAgdGhpcy5zb3VuZE9iai5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnNvdW5kT2JqKTtcblxuICAgIHRoaXMuZHJhd0JhY2tncm91bmQgPSB0aGlzLmRyYXdCYWNrZ3JvdW5kLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVQbGF5ID0gdGhpcy5oYW5kbGVQbGF5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVQYXVzZSA9IHRoaXMuaGFuZGxlUGF1c2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZU11dGUgPSB0aGlzLmhhbmRsZU11dGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUF0dGFjayA9IHRoaXMuaGFuZGxlQXR0YWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVNb2RhbCA9IHRoaXMuaGFuZGxlTW9kYWwuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucGxheSA9IHRoaXMucGxheS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVzdGFydCA9IHRoaXMucmVzdGFydC5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5yZXN0YXJ0KCk7XG4gIH1cblxuICByZXN0YXJ0KCkge1xuICAgIHRoaXMubGV2ZWwgPSBuZXcgTGV2ZWwodGhpcy5jdHgsIHRoaXMuZGltZW5zaW9ucyk7XG4gICAgdGhpcy5wbGF5ZXIxID0gbmV3IEF2YXRhcih0aGlzLmN0eCwgdGhpcy5kaW1lbnNpb25zLCAxKTtcbiAgICB0aGlzLnBsYXllcjIgPSBuZXcgQXZhdGFyKHRoaXMuY3R4LCB0aGlzLmRpbWVuc2lvbnMsIDIpO1xuICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgdGhpcy53aW5uZXIgPSBudWxsO1xuICAgIHRoaXMucGxheSgpO1xuICB9XG4gIFxuICBwbGF5KCkge1xuICAgIHRoaXMuY3R4LmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZVBsYXkpO1xuICAgIHRoaXMuYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICB9XG4gIFxuICBhbmltYXRlKCkge1xuICAgIGlmICghdGhpcy5nYW1lT3Zlcikge1xuICAgICAgdGhpcy5jdHguY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlTXV0ZSk7XG4gICAgICB0aGlzLmN0eC5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVQYXVzZSk7XG5cbiAgICAgIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbkZyYW1lKTtcbiAgICAgICAgdGhpcy5sZXZlbC5hbmltYXRlKHRoaXMucGxheWVyMS5zdGF0ZS5oZWFsdGgsIHRoaXMucGxheWVyMi5zdGF0ZS5oZWFsdGgsIHRydWUpO1xuICAgICAgICB0aGlzLnBsYXllcjEuYW5pbWF0ZSh0cnVlKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIyLmFuaW1hdGUodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLndpbm5lciA9IHRoaXMubGV2ZWwuYW5pbWF0ZSh0aGlzLnBsYXllcjEuc3RhdGUuaGVhbHRoLCB0aGlzLnBsYXllcjIuc3RhdGUuaGVhbHRoKTtcbiAgICAgICAgbGV0IHAxQXR0YWNrSGl0Ym94ID0gdGhpcy5wbGF5ZXIxLmFuaW1hdGUoZmFsc2UpO1xuICAgICAgICBsZXQgcDJBdHRhY2tIaXRib3ggPSB0aGlzLnBsYXllcjIuYW5pbWF0ZShmYWxzZSk7XG4gICAgICAgIGlmICh0aGlzLnBsYXllcjEuc3RhdGUuYmFzaWNBdHRhY2tpbmcgJiYgIXRoaXMucGxheWVyMS5zdGF0ZS5kYW1hZ2VEb25lKSB7XG4gICAgICAgICAgdGhpcy5jaGVja0F0dGFja0NvbGxpc2lvbihwMUF0dGFja0hpdGJveCwgdGhpcy5wbGF5ZXIxLCB0aGlzLnBsYXllcjIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBsYXllcjIuc3RhdGUuYmFzaWNBdHRhY2tpbmcgJiYgIXRoaXMucGxheWVyMi5zdGF0ZS5kYW1hZ2VEb25lKSB7XG4gICAgICAgICAgdGhpcy5jaGVja0F0dGFja0NvbGxpc2lvbihwMkF0dGFja0hpdGJveCwgdGhpcy5wbGF5ZXIyLCB0aGlzLnBsYXllcjEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLndpbm5lciA9PT0gJ3RpbWVVcCcpIHtcbiAgICAgICAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChbJ3BsYXllcjEnLCAncGxheWVyMiddLmluY2x1ZGVzKHRoaXMud2lubmVyKSkge1xuICAgICAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3R4LmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZU11dGUpO1xuICAgICAgdGhpcy5jdHguY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlUGF1c2UpO1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZSk7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIC8vIERpc3BsYXkgc3RhcnQgc2NyZWVuXG4gICAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gT05MWSBGT1IgU1RBUlRJTkcgU0NSRUVOXG4gIGRyYXdCYWNrZ3JvdW5kKCkge1xuICAgIHRoaXMuY3R4LmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZVBsYXkpO1xuXG4gICAgbGV0IGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcbiAgICBiYWNrZ3JvdW5kLnNyYyA9ICdmcm9udGVuZC9hc3NldHMvaW1hZ2VzL3N0YXJ0LWJhY2tncm91bmQuanBnJztcbiAgICBiYWNrZ3JvdW5kLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCAwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuICBcbiAgICAgIGxldCBtdXRlID0gbmV3IEltYWdlKCk7XG4gICAgICB0aGlzLnNvdW5kID8gXG4gICAgICBtdXRlLnNyYyA9ICdmcm9udGVuZC9hc3NldHMvaW1hZ2VzL3NwZWFrZXIucG5nJzpcbiAgICAgIG11dGUuc3JjID0gJ2Zyb250ZW5kL2Fzc2V0cy9pbWFnZXMvbXV0ZS5wbmcnXG4gICAgICBtdXRlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKG11dGUsIHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIDcwLCAyMCwgNTAsIDUwKTtcbiAgICAgIH07XG4gIFxuICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnV0hJVEUnO1xuICBcbiAgICAgIGxldCBoZWFkZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGhlYWRlci5zcmMgPSAnZnJvbnRlbmQvYXNzZXRzL2ltYWdlcy9oZWFkZXItd2hpdGUucG5nJztcbiAgICAgIGhlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICBoZWFkZXIsIFxuICAgICAgICAgIDIwLCBcbiAgICAgICAgICB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiAtIDEwMCwgXG4gICAgICAgICAgdGhpcy5kaW1lbnNpb25zLndpZHRoIC0gNDAsIFxuICAgICAgICAgIDU2XG4gICAgICAgICk7XG4gICAgICB9XG4gIFxuICAgICAgc3dpdGNoICh0aGlzLndpbm5lcikge1xuICAgICAgICBjYXNlIG51bGw6XG4gICAgICAgICAgdGhpcy5jdHguZm9udCA9ICc1NnB4IFRyZWJ1Y2hldCBNUyc7XG4gICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXG4gICAgICAgICAgICAnUGxheSBub3chJyxcbiAgICAgICAgICAgIHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsXG4gICAgICAgICAgICB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiArIDcyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndGltZVVwJzpcbiAgICAgICAgICB0aGlzLmN0eC5mb250ID0gJzM2cHggVHJlYnVjaGV0IE1TJztcbiAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcbiAgICAgICAgICAgICdUaW1lIHJhbiBvdXQuLi4gaGF2ZSB5b3UgdHJpZWQgYXR0YWNraW5nPycsXG4gICAgICAgICAgICB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLFxuICAgICAgICAgICAgdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDIgKyAxMlxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5jdHguZm9udCA9ICc1NnB4IFRyZWJ1Y2hldCBNUyc7XG4gICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXG4gICAgICAgICAgICAnUGxheSBhZ2Fpbj8nLFxuICAgICAgICAgICAgdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMixcbiAgICAgICAgICAgIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyICsgNzJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnMzZweCBUcmVidWNoZXQgTVMnO1xuICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFxuICAgICAgICAgICAgYENvbmdyYXR1bGF0aW9ucywgJHt0aGlzLndpbm5lcn0gd29uIWAsXG4gICAgICAgICAgICB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLFxuICAgICAgICAgICAgdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDIgKyA4XG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLmN0eC5mb250ID0gJzU2cHggVHJlYnVjaGV0IE1TJztcbiAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcbiAgICAgICAgICAgICdQbGF5IGFnYWluPycsXG4gICAgICAgICAgICB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLFxuICAgICAgICAgICAgdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDIgKyA3MlxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgfVxuXG4gIGhhbmRsZVBsYXkoZSkge1xuICAgIGxldCBjbGlja1BvcyA9IHtcbiAgICAgIHg6IGUucGFnZVggLSB0aGlzLmRvY3VtZW50T2Zmc2V0WCxcbiAgICAgIHk6IGUucGFnZVkgLSB0aGlzLmRvY3VtZW50T2Zmc2V0WSAtIDgwXG4gICAgfVxuICAgIGlmIChjbGlja1Bvcy54ID49IHRoaXMucGxheVBvcy54ICYmIGNsaWNrUG9zLnggPD0gdGhpcy5wbGF5UG9zLnggKyB0aGlzLnBsYXlEaW1lbnNpb25zLmR4KSB7XG4gICAgICBpZiAoY2xpY2tQb3MueSA+PSB0aGlzLnBsYXlQb3MueSAmJiBjbGlja1Bvcy55IDw9IHRoaXMucGxheVBvcy55ICsgdGhpcy5wbGF5RGltZW5zaW9ucy5keSkge1xuICAgICAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVzdGFydCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVBhdXNlKGUpIHtcbiAgICBsZXQgY2xpY2tQb3MgPSB7XG4gICAgICB4OiBlLnBhZ2VYIC0gdGhpcy5kb2N1bWVudE9mZnNldFgsXG4gICAgICB5OiBlLnBhZ2VZIC0gdGhpcy5kb2N1bWVudE9mZnNldFkgLSA4MFxuICAgIH1cbiAgICBpZiAoY2xpY2tQb3MueCA+PSB0aGlzLnBhdXNlUG9zLnggJiYgY2xpY2tQb3MueCA8PSB0aGlzLnBhdXNlUG9zLnggKyB0aGlzLnBhdXNlRGltZW5zaW9ucy5keCkge1xuICAgICAgaWYgKGNsaWNrUG9zLnkgPj0gdGhpcy5wYXVzZVBvcy55ICYmIGNsaWNrUG9zLnkgPD0gdGhpcy5wYXVzZVBvcy55ICsgdGhpcy5wYXVzZURpbWVuc2lvbnMuZHkpIHtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSAhdGhpcy5wYXVzZWQ7XG4gICAgICAgIGlmICghdGhpcy5wYXVzZWQpIHtcbiAgICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU11dGUoZSkge1xuICAgIGxldCBjbGlja1BvcyA9IHtcbiAgICAgIHg6IGUucGFnZVggLSB0aGlzLmRvY3VtZW50T2Zmc2V0WCxcbiAgICAgIHk6IGUucGFnZVkgLSB0aGlzLmRvY3VtZW50T2Zmc2V0WSAtIDgwXG4gICAgfVxuICAgIGlmIChjbGlja1Bvcy54ID49IHRoaXMuc291bmRQb3MueCAmJiBjbGlja1Bvcy54IDw9IHRoaXMuc291bmRQb3MueCArIHRoaXMuc291bmREaW1lbnNpb25zLmR4KSB7XG4gICAgICBpZiAoY2xpY2tQb3MueSA+PSB0aGlzLnNvdW5kUG9zLnkgJiYgY2xpY2tQb3MueSA8PSB0aGlzLnNvdW5kUG9zLnkgKyB0aGlzLnNvdW5kRGltZW5zaW9ucy5keSkge1xuICAgICAgICB0aGlzLnNvdW5kID0gIXRoaXMuc291bmQ7XG4gICAgICAgIGlmICh0aGlzLnNvdW5kKSB7XG4gICAgICAgICAgdGhpcy5zb3VuZE9iai5wbGF5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zb3VuZE9iai5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhd0JhY2tncm91bmQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVBdHRhY2soZSkge1xuICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICBjYXNlIDc0OlxuICAgICAgICB0aGlzLnBsYXllcjEuYmFzaWNBdHRhY2soKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDk3OlxuICAgICAgICB0aGlzLnBsYXllcjIuYmFzaWNBdHRhY2soKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlTW9kYWwoZSkge1xuICAgIGxldCBjbGlja1BvcyA9IHtcbiAgICAgIHg6IGUucGFnZVggLSB0aGlzLmRvY3VtZW50T2Zmc2V0WCxcbiAgICAgIHk6IGUucGFnZVkgLSB0aGlzLmRvY3VtZW50T2Zmc2V0WSAtIDgwXG4gICAgfVxuICAgIGlmIChjbGlja1Bvcy54IDwgMTIwIHx8IGNsaWNrUG9zLnggPiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLSAxMjBcbiAgICAgIHx8IGNsaWNrUG9zLnkgPCA2MCB8fCBjbGlja1Bvcy55ID4gdGhpcy5kaW1lbnNpb25zLmhlaWdodCAtIDYwKSB7XG4gICAgICB0aGlzLmN0eC5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVNb2RhbCk7XG4gICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICB9XG4gIH1cblxuICBjaGVja0F0dGFja0NvbGxpc2lvbihib3VuZCwgYXR0YWNraW5nUGxheWVyLCBvdGhlclBsYXllcikge1xuICAgIGxldCBvdGhlclBsYXllckJvdW5kID0ge1xuICAgICAgeDE6IG90aGVyUGxheWVyLnBvcy54IC0gQVZBVEFSX0NPTlNUQU5UUy5BVkFUQVJfRElNRU5TSU9OUy53aWR0aCAvIDIsXG4gICAgICB5MTogb3RoZXJQbGF5ZXIucG9zLnksXG4gICAgICB4Mjogb3RoZXJQbGF5ZXIucG9zLnggKyBBVkFUQVJfQ09OU1RBTlRTLkFWQVRBUl9ESU1FTlNJT05TLndpZHRoIC8gMixcbiAgICAgIHkyOiBvdGhlclBsYXllci5wb3MueSArIEFWQVRBUl9DT05TVEFOVFMuQVZBVEFSX0RJTUVOU0lPTlMuaGVpZ2h0XG4gICAgfTtcbiAgICBpZiAoYm91bmQueCA+PSBvdGhlclBsYXllckJvdW5kLngxICYmIGJvdW5kLnggPD0gb3RoZXJQbGF5ZXJCb3VuZC54Mikge1xuICAgICAgaWYgKGJvdW5kLnkgPj0gb3RoZXJQbGF5ZXJCb3VuZC55MSAmJiBib3VuZC55IDw9IG90aGVyUGxheWVyQm91bmQueTIpIHtcbiAgICAgICAgYXR0YWNraW5nUGxheWVyLnN0YXRlLmRhbWFnZURvbmUgPSB0cnVlO1xuICAgICAgICBvdGhlclBsYXllci5zdGF0ZS5oZWFsdGggLT0gYXR0YWNraW5nUGxheWVyLnN0YXRlLmJhc2ljQXR0YWNrRGFtYWdlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0iLCJpbXBvcnQgRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5cbmNvbnN0IENPTE9SX1BBTEVUVEUgPSB7XG4gIFBSSU1BUlk6ICcjMDAwNzBBJyxcbiAgU0VDT05EQVJZOiAnIzI5NDU1MicsXG4gIFRFUlRJQVJZOiAnIzU5Nzg4NCcsXG4gIFFVQVRFUk5BUlk6ICcjOUVCOUIzJyxcbiAgUVVJTlRFUk5BUlk6ICcjQUNDNENFJ1xufTtcblxuY29uc3QgTEVWRUxfQ09OU1RBTlRTID0ge1xuICBNQVhfVElNRTogNjAgKiAxMjAsXG4gIFRJTUVSX1RFWFRfSEVJR0hUOiA3NSxcbiAgVElNRVJfUkFESVVTOiA0NSxcbiAgTUFYX0hFQUxUSDogMjAwLFxuICBIRUFMVEhfQkFSOiB7XG4gICAgd2lkdGg6IDQwMCxcbiAgICBoZWlnaHQ6IDIwXG4gIH0sXG4gIE9GRlNFVDogMjAsXG4gIEVOVklST05NRU5UX1BST0JBQklMSVRZOiA0NSxcbiAgRU5WSVJPTk1FTlRTOiBbJ3Nha3VyYScsICdzbm93Zmxha2UnXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWwge1xuICBjb25zdHJ1Y3RvcihjdHgsIGRpbWVuc2lvbnMpIHtcbiAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zO1xuICAgIHRoaXMudGltZSA9IExFVkVMX0NPTlNUQU5UUy5NQVhfVElNRTtcbiAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgIHRoaXMucGxheWVySHBQb3MgPSB7XG4gICAgICB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyIC0gTEVWRUxfQ09OU1RBTlRTLlRJTUVSX1JBRElVUyxcbiAgICAgIHk6IExFVkVMX0NPTlNUQU5UUy5USU1FUl9SQURJVVMgLSBMRVZFTF9DT05TVEFOVFMuSEVBTFRIX0JBUi5oZWlnaHQgKyA1XG4gICAgfTtcblxuICAgIHRoaXMuYm90SHBQb3MgPSB7XG4gICAgICB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyICsgTEVWRUxfQ09OU1RBTlRTLlRJTUVSX1JBRElVUyxcbiAgICAgIHk6IExFVkVMX0NPTlNUQU5UUy5USU1FUl9SQURJVVMgLSBMRVZFTF9DT05TVEFOVFMuSEVBTFRIX0JBUi5oZWlnaHQgKyA1XG4gICAgfTtcblxuICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG5cbiAgICB0aGlzLmVudmlyb25tZW50ID0gW107XG5cbiAgICBsZXQgZW52aXJvbm1lbnRJbmRleCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChMRVZFTF9DT05TVEFOVFMuRU5WSVJPTk1FTlRTLmxlbmd0aCAtIDEpKTtcbiAgICB0aGlzLmVudmlyb25tZW50VHlwZSA9IExFVkVMX0NPTlNUQU5UUy5FTlZJUk9OTUVOVFNbZW52aXJvbm1lbnRJbmRleF07XG5cbiAgICB0aGlzLmRyYXdUaW1lckNpcmNsZSA9IHRoaXMuZHJhd1RpbWVyQ2lyY2xlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmF3VGltZXJEaXNwbGF5ID0gdGhpcy5kcmF3VGltZXJEaXNwbGF5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmF3VGltZXJUZXh0ID0gdGhpcy5kcmF3VGltZXJUZXh0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmF3SGVhbHRoQmFycyA9IHRoaXMuZHJhd0hlYWx0aEJhcnMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRyYXdOYW1lcyA9IHRoaXMuZHJhd05hbWVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmF3UGF1c2UgPSB0aGlzLmRyYXdQYXVzZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJhd0JhY2tncm91bmQgPSB0aGlzLmRyYXdCYWNrZ3JvdW5kLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmF3Rmxvb3IgPSB0aGlzLmRyYXdGbG9vci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYW5pbWF0ZShwbGF5ZXJIZWFsdGgsIGJvdEhlYWx0aCwgcGF1c2VkKSB7XG4gICAgbGV0IHRpbWU7XG4gICAgbGV0IHdpbm5lcjtcblxuICAgIHRoaXMuZHJhd0JhY2tncm91bmQoKTtcblxuICAgIGxldCBlbnZpcm9ubWVudEdlbmVyYXRpb24gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBMRVZFTF9DT05TVEFOVFMuRU5WSVJPTk1FTlRfUFJPQkFCSUxJVFkpO1xuXG4gICAgaWYgKGVudmlyb25tZW50R2VuZXJhdGlvbiA9PT0gMSkge1xuICAgICAgbGV0IG5ld0Vudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KHRoaXMuY3R4LCB0aGlzLmRpbWVuc2lvbnMsIHRoaXMuZW52aXJvbm1lbnRUeXBlKTtcbiAgICAgIHRoaXMuZW52aXJvbm1lbnQucHVzaChuZXdFbnZpcm9ubWVudCk7XG4gICAgfVxuXG4gICAgdGhpcy5lbnZpcm9ubWVudC5mb3JFYWNoKChlbnZpcm9ubWVudCwgaWR4KSA9PiB7XG4gICAgICBlbnZpcm9ubWVudC5hbmltYXRlKCk7XG4gICAgICBpZiAoZW52aXJvbm1lbnQucG9zLnkgPiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0ICsgOTQpIHtcbiAgICAgICAgdGhpcy5lbnZpcm9ubWVudC5zaGlmdCgpO1xuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHRpbWUgPSB0aGlzLmRyYXdUaW1lcigpO1xuICAgIHRoaXMuZHJhd0hlYWx0aEJhcnMoKTtcbiAgICB3aW5uZXIgPSB0aGlzLmRyYXdDdXJyZW50SGVhbHRoQmFycyhwbGF5ZXJIZWFsdGgsIGJvdEhlYWx0aCk7XG4gICAgdGhpcy5kcmF3TmFtZXMoKTtcbiAgICAvLyB0aGlzLmRyYXdGbG9vcigpO1xuICAgIHBhdXNlZCA/IHRoaXMucGF1c2VkID0gdHJ1ZSA6IHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5kcmF3UGF1c2UoKTtcbiAgICAgIFxuICAgIGlmICh0aW1lID09PSAwKSB7XG4gICAgICB0aGlzLmVudmlyb25tZW50ID0gW107XG4gICAgICByZXR1cm4gJ3RpbWVVcCc7XG4gICAgfSBlbHNlIGlmICh3aW5uZXIpIHtcbiAgICAgIHRoaXMuZW52aXJvbm1lbnQgPSBbXTtcbiAgICAgIHJldHVybiB3aW5uZXI7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgcmV0dXJuICdwYXVzZWQnO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdUaW1lcigpIHtcbiAgICAvLyBUT0RPOiBOZWVkIGJldHRlciBzb2x1dGlvblxuICAgIHRoaXMuZHJhd1RpbWVyQ2lyY2xlKCk7XG4gICAgdGhpcy5kcmF3VGltZXJEaXNwbGF5KCk7XG4gICAgdGhpcy5kcmF3VGltZXJUZXh0KCk7XG4gICAgXG4gICAgdGhpcy50aW1lID0gdGhpcy50aW1lIC0gMTtcbiAgICBpZiAodGhpcy50aW1lID09PSAwKSB7XG4gICAgICBsZXQgcmV0dXJuVGltZSA9IDA7XG4gICAgICB0aGlzLnRpbWUgPSBMRVZFTF9DT05TVEFOVFMuTUFYX1RJTUU7XG4gICAgICByZXR1cm4gcmV0dXJuVGltZTtcbiAgICB9XG4gIH1cblxuICBkcmF3VGltZXJUZXh0KCkge1xuICAgIHRoaXMuY3R4LmZvbnQgPSAnNDhweCBUcmVidWNoZXQgTVMnO1xuICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdXSElURSc7XG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBDT0xPUl9QQUxFVFRFLlBSSU1BUlk7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoXG4gICAgICBgJHtNYXRoLnJvdW5kKHRoaXMudGltZSAvIDYwKX1gLFxuICAgICAgdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMixcbiAgICAgIExFVkVMX0NPTlNUQU5UUy5USU1FUl9URVhUX0hFSUdIVCArIDEwXG4gICAgKTtcbiAgICB0aGlzLmN0eC5zdHJva2VUZXh0KFxuICAgICAgYCR7TWF0aC5yb3VuZCh0aGlzLnRpbWUgLyA2MCl9YCxcbiAgICAgIHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsXG4gICAgICBMRVZFTF9DT05TVEFOVFMuVElNRVJfVEVYVF9IRUlHSFQgKyAxMFxuICAgICk7XG4gIH1cblxuICBkcmF3VGltZXJDaXJjbGUoKSB7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gQ09MT1JfUEFMRVRURS5TRUNPTkRBUlk7XG4gICAgdGhpcy5jdHguYXJjKFxuICAgICAgdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMixcbiAgICAgIExFVkVMX0NPTlNUQU5UUy5USU1FUl9URVhUX0hFSUdIVCAtIDUsXG4gICAgICBMRVZFTF9DT05TVEFOVFMuVElNRVJfUkFESVVTLCAwLCAyICogTWF0aC5QSVxuICAgICAgKTtcbiAgICB0aGlzLmN0eC5maWxsKCk7XG4gIH1cblxuICBkcmF3VGltZXJEaXNwbGF5KCkge1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IENPTE9SX1BBTEVUVEUuUVVBVEVSTkFSWTtcbiAgICB0aGlzLmN0eC5hcmMoXG4gICAgICB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLFxuICAgICAgTEVWRUxfQ09OU1RBTlRTLlRJTUVSX1RFWFRfSEVJR0hUIC0gNSxcbiAgICAgIExFVkVMX0NPTlNUQU5UUy5USU1FUl9SQURJVVMsXG4gICAgICAtIDAuNSAqIE1hdGguUEksXG4gICAgICAoTEVWRUxfQ09OU1RBTlRTLk1BWF9USU1FIC0gdGhpcy50aW1lKVxuICAgICAgKiAyICogTWF0aC5QSSAvIExFVkVMX0NPTlNUQU5UUy5NQVhfVElNRVxuICAgICAgLSAwLjUgKiBNYXRoLlBJXG4gICAgKTtcbiAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMixcbiAgICAgIExFVkVMX0NPTlNUQU5UUy5USU1FUl9URVhUX0hFSUdIVCAtIDVcbiAgICApO1xuICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgfVxuXG4gIGRyYXdIZWFsdGhCYXJzKCkge1xuICAgIC8vIFBsYXllciBoZWFsdGggY29udGFpbmVyXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnQkxBQ0snO1xuICAgIHRoaXMuY3R4Lm1vdmVUbyhcbiAgICAgIHRoaXMucGxheWVySHBQb3MueCxcbiAgICAgIHRoaXMucGxheWVySHBQb3MueVxuICAgICk7XG4gICAgdGhpcy5jdHgubGluZVRvKFxuICAgICAgdGhpcy5wbGF5ZXJIcFBvcy54IC0gTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIud2lkdGgsXG4gICAgICB0aGlzLnBsYXllckhwUG9zLnlcbiAgICApO1xuICAgIHRoaXMuY3R4LmxpbmVUbyhcbiAgICAgIHRoaXMucGxheWVySHBQb3MueCAtIExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLndpZHRoLFxuICAgICAgdGhpcy5wbGF5ZXJIcFBvcy55ICsgTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIuaGVpZ2h0XG4gICAgKTtcbiAgICB0aGlzLmN0eC5saW5lVG8oXG4gICAgICB0aGlzLnBsYXllckhwUG9zLnggLSBMRVZFTF9DT05TVEFOVFMuT0ZGU0VULFxuICAgICAgdGhpcy5wbGF5ZXJIcFBvcy55ICsgTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIuaGVpZ2h0XG4gICAgKTtcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAvL2JvdCBoZWFsdGggY29udGFpbmVyXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnQkxBQ0snO1xuICAgIHRoaXMuY3R4Lm1vdmVUbyhcbiAgICAgIHRoaXMuYm90SHBQb3MueCxcbiAgICAgIHRoaXMuYm90SHBQb3MueVxuICAgICk7XG4gICAgdGhpcy5jdHgubGluZVRvKFxuICAgICAgdGhpcy5ib3RIcFBvcy54ICsgTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIud2lkdGgsXG4gICAgICB0aGlzLmJvdEhwUG9zLnlcbiAgICApO1xuICAgIHRoaXMuY3R4LmxpbmVUbyhcbiAgICAgIHRoaXMuYm90SHBQb3MueCArIExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLndpZHRoLFxuICAgICAgdGhpcy5ib3RIcFBvcy55ICsgTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIuaGVpZ2h0XG4gICAgKTtcbiAgICB0aGlzLmN0eC5saW5lVG8oXG4gICAgICB0aGlzLmJvdEhwUG9zLnggKyBMRVZFTF9DT05TVEFOVFMuT0ZGU0VULFxuICAgICAgdGhpcy5ib3RIcFBvcy55ICsgTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIuaGVpZ2h0XG4gICAgKTtcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gIH1cblxuICBkcmF3Q3VycmVudEhlYWx0aEJhcnMocGxheWVySGVhbHRoLCBib3RIZWFsdGgpIHtcblxuICAgIGlmIChwbGF5ZXJIZWFsdGggPD0gMCkge1xuICAgICAgcmV0dXJuICdwbGF5ZXIyJztcbiAgICB9IGVsc2UgaWYgKGJvdEhlYWx0aCA8PSAwKSB7XG4gICAgICByZXR1cm4gJ3BsYXllcjEnO1xuICAgIH07XG5cbiAgICBsZXQgY3VycmVudEhlYWx0aCA9IExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLndpZHRoICogcGxheWVySGVhbHRoIC8gTEVWRUxfQ09OU1RBTlRTLk1BWF9IRUFMVEg7XG5cbiAgICAvLyBQbGF5ZXIgY3VycmVudCBoZWFsdGhcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnUkVEJztcbiAgICB0aGlzLmN0eC5tb3ZlVG8oXG4gICAgICB0aGlzLnBsYXllckhwUG9zLngsXG4gICAgICB0aGlzLnBsYXllckhwUG9zLnlcbiAgICApO1xuICAgIHRoaXMuY3R4LmxpbmVUbyhcbiAgICAgIHRoaXMucGxheWVySHBQb3MueCAtIGN1cnJlbnRIZWFsdGgsXG4gICAgICB0aGlzLnBsYXllckhwUG9zLnlcbiAgICApO1xuICAgIGlmIChjdXJyZW50SGVhbHRoIDwgTEVWRUxfQ09OU1RBTlRTLk9GRlNFVCkge1xuICAgICAgdGhpcy5jdHgubGluZVRvKFxuICAgICAgICB0aGlzLnBsYXllckhwUG9zLnggLSBjdXJyZW50SGVhbHRoLFxuICAgICAgICAvLyBjdXJyZW50SGVhbHRoID0gY3VycmVudEhlYWx0aCAqIHRhbihwaS80KVxuICAgICAgICAvLyBzaW5jZSBvZmZzZXQgPSBoZWlnaHRcbiAgICAgICAgdGhpcy5wbGF5ZXJIcFBvcy55ICsgY3VycmVudEhlYWx0aFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdHgubGluZVRvKFxuICAgICAgICB0aGlzLnBsYXllckhwUG9zLnggLSBjdXJyZW50SGVhbHRoLFxuICAgICAgICB0aGlzLnBsYXllckhwUG9zLnkgKyBMRVZFTF9DT05TVEFOVFMuSEVBTFRIX0JBUi5oZWlnaHRcbiAgICAgICk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8oXG4gICAgICAgIHRoaXMucGxheWVySHBQb3MueCAtIExFVkVMX0NPTlNUQU5UUy5PRkZTRVQsXG4gICAgICAgIHRoaXMucGxheWVySHBQb3MueSArIExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLmhlaWdodFxuICAgICAgKTtcbiAgICB9O1xuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIHRoaXMuY3R4LmZpbGwoKTtcblxuICAgIGxldCBjdXJyZW50Qm90SGVhbHRoID0gTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIud2lkdGggKiBib3RIZWFsdGggLyBMRVZFTF9DT05TVEFOVFMuTUFYX0hFQUxUSDtcblxuICAgIC8vIEJvdCBjdXJyZW50IGhlYWx0aFxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdSRUQnO1xuICAgIHRoaXMuY3R4Lm1vdmVUbyhcbiAgICAgIHRoaXMuYm90SHBQb3MueCxcbiAgICAgIHRoaXMuYm90SHBQb3MueVxuICAgICk7XG4gICAgdGhpcy5jdHgubGluZVRvKFxuICAgICAgdGhpcy5ib3RIcFBvcy54ICsgY3VycmVudEJvdEhlYWx0aCxcbiAgICAgIHRoaXMuYm90SHBQb3MueVxuICAgICk7XG4gICAgaWYgKGN1cnJlbnRCb3RIZWFsdGggPCBMRVZFTF9DT05TVEFOVFMuT0ZGU0VUKSB7XG4gICAgICB0aGlzLmN0eC5saW5lVG8oXG4gICAgICAgIHRoaXMuYm90SHBQb3MueCArIGN1cnJlbnRCb3RIZWFsdGgsXG4gICAgICAgIC8vIGN1cnJlbnRCb3RIZWFsdGggPSBjdXJyZW50Qm90SGVhbHRoICogdGFuKHBpLzQpXG4gICAgICAgIC8vIHNpbmNlIG9mZnNldCA9IGhlaWdodFxuICAgICAgICB0aGlzLmJvdEhwUG9zLnkgKyBjdXJyZW50Qm90SGVhbHRoXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN0eC5saW5lVG8oXG4gICAgICAgIHRoaXMuYm90SHBQb3MueCArIGN1cnJlbnRCb3RIZWFsdGgsXG4gICAgICAgIHRoaXMuYm90SHBQb3MueSArIExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLmhlaWdodFxuICAgICAgKTtcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyhcbiAgICAgICAgdGhpcy5ib3RIcFBvcy54ICsgTEVWRUxfQ09OU1RBTlRTLk9GRlNFVCxcbiAgICAgICAgdGhpcy5ib3RIcFBvcy55ICsgTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIuaGVpZ2h0XG4gICAgICApO1xuICAgIH07XG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgdGhpcy5jdHguZmlsbCgpO1xuICB9XG5cbiAgZHJhd05hbWVzKCkge1xuICAgIGxldCBwbGF5ZXJOYW1lID0gJ1BsYXllciAxJztcbiAgICBsZXQgYm90TmFtZSA9ICdQbGF5ZXIgMic7XG4gICAgbGV0IHBsYXllck5hbWVQb3MgPSB7XG4gICAgICB4OiB0aGlzLnBsYXllckhwUG9zLnggLSBMRVZFTF9DT05TVEFOVFMuT0ZGU0VULFxuICAgICAgeTogdGhpcy5wbGF5ZXJIcFBvcy55ICsgTEVWRUxfQ09OU1RBTlRTLlRJTUVSX1JBRElVUyArIDRcbiAgICB9O1xuICAgIGxldCBib3ROYW1lUG9zID0ge1xuICAgICAgeDogdGhpcy5ib3RIcFBvcy54ICsgTEVWRUxfQ09OU1RBTlRTLk9GRlNFVCxcbiAgICAgIHk6IHRoaXMuYm90SHBQb3MueSArIExFVkVMX0NPTlNUQU5UUy5USU1FUl9SQURJVVMgKyA0XG4gICAgfTtcblxuICAgIHRoaXMuY3R4LmZvbnQgPSAnMzJweCBUcmVidWNoZXQgTVMnO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgdGhpcy5jdHgubGluZVdpZHRoID0gMC41O1xuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gQ09MT1JfUEFMRVRURS5TRUNPTkRBUlk7XG4gICAgdGhpcy5jdHgudGV4dEFsaWduID0gJ3JpZ2h0JztcbiAgICB0aGlzLmN0eC5maWxsVGV4dChwbGF5ZXJOYW1lLCBwbGF5ZXJOYW1lUG9zLngsIHBsYXllck5hbWVQb3MueSk7XG4gICAgdGhpcy5jdHguc3Ryb2tlVGV4dChwbGF5ZXJOYW1lLCBwbGF5ZXJOYW1lUG9zLngsIHBsYXllck5hbWVQb3MueSk7XG5cbiAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSAnbGVmdCc7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoYm90TmFtZSwgYm90TmFtZVBvcy54LCBib3ROYW1lUG9zLnkpO1xuICAgIHRoaXMuY3R4LnN0cm9rZVRleHQoYm90TmFtZSwgYm90TmFtZVBvcy54LCBib3ROYW1lUG9zLnkpO1xuICB9XG5cbiAgZHJhd1BhdXNlKCkge1xuICAgIC8vIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIC8vIC8vIHRoaXMuY3R4LnJlY3QodGhpcy5kaW1lbnNpb25zLndpZHRoIC0gNTAgLSAyMCwgMjAsIDUwLCA1MCk7XG4gICAgLy8gdGhpcy5jdHgucmVjdCh0aGlzLmRpbWVuc2lvbnMud2lkdGggLSA1MCAtIDEwLCAyNSwgMzAsIDQwKTtcbiAgICAvLyB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgIGlmICghdGhpcy5wYXVzZWQpIHtcbiAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gQ09MT1JfUEFMRVRURS5RVUlOVEVSTkFSWTtcbiAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gQ09MT1JfUEFMRVRURS5QUklNQVJZO1xuICAgICAgXG4gICAgICB0aGlzLmN0eC5yZWN0KHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIDUwIC0gMTAsIDI1LCAxMCwgNDApO1xuICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG5cbiAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgdGhpcy5jdHgucmVjdCh0aGlzLmRpbWVuc2lvbnMud2lkdGggLSA1MCArIDEwLCAyNSwgMTAsIDQwKTtcbiAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gQ09MT1JfUEFMRVRURS5RVUlOVEVSTkFSWTtcbiAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gQ09MT1JfUEFMRVRURS5QUklNQVJZO1xuICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIDUwIC0gMTAsIDI1KTtcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmRpbWVuc2lvbnMud2lkdGggLSA1MCAtIDEwLCA2NSk7XG4gICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5kaW1lbnNpb25zLndpZHRoIC0gNTAgKyAyMCwgNDUpO1xuICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDEuNTtcblxuICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICB0aGlzLmN0eC5mb250ID0gJzU2cHggVHJlYnVjaGV0IE1TJztcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFxuICAgICAgICAnR2FtZSBwYXVzZWQnLFxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLFxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiAtIDM2XG4gICAgICApO1xuICAgICAgdGhpcy5jdHguc3Ryb2tlVGV4dChcbiAgICAgICAgJ0dhbWUgcGF1c2VkJyxcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMixcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDIgLSAzNlxuICAgICAgKTtcblxuICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICB0aGlzLmN0eC5mb250ID0gJzM2cHggVHJlYnVjaGV0IE1TJztcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFxuICAgICAgICAnUHJlc3MgcGxheSB0byBjb250aW51ZScsXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyICsgMzZcbiAgICAgICk7XG4gICAgICB0aGlzLmN0eC5zdHJva2VUZXh0KFxuICAgICAgICAnUHJlc3MgcGxheSB0byBjb250aW51ZScsXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyICsgMzZcbiAgICAgIClcbiAgICB9O1xuICB9XG5cbiAgZHJhd0JhY2tncm91bmQoKSB7XG4gICAgbGV0IGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcbiAgICBiYWNrZ3JvdW5kLnNyYyA9ICdmcm9udGVuZC9hc3NldHMvaW1hZ2VzL2dhbWUtYmFja2dyb3VuZC5qcGcnO1xuICAgIC8vIGJhY2tncm91bmQub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGJhY2tncm91bmQsIDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgLy8gfVxuICB9XG5cbiAgLy8gVE9ETzogUHJvYmFibHkgdGVtcG9yYXJ5XG4gIGRyYXdGbG9vcigpIHtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnQlJPV04nO1xuICAgIHRoaXMuY3R4LmZpbGxSZWN0KFxuICAgICAgMCwgXG4gICAgICB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC0gMSwgXG4gICAgICB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIFxuICAgICAgMTU1XG4gICAgKTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=