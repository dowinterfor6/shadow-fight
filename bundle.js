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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvYXZhdGFyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2VudHJ5LmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvbGV2ZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLFNBQVMsY0FBYztBQUN2QixTQUFTLGNBQWM7QUFDdkIsWUFBWSxhQUFhO0FBQ3pCLFNBQVMsYUFBYTtBQUN0QixHQUFHO0FBQ0g7QUFDQSxTQUFTLGNBQWM7QUFDdkIsU0FBUyxjQUFjO0FBQ3ZCLFlBQVksYUFBYTtBQUN6QixTQUFTLGFBQWE7QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN6V0E7QUFBQTtBQUEyQjs7QUFFM0I7QUFDQTtBQUNBLE1BQU0sNkNBQUs7QUFDWDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNsRUE7QUFBQTtBQUFBO0FBQUE7QUFBNEI7QUFDRTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsOENBQUs7QUFDMUIsdUJBQXVCLCtDQUFNO0FBQzdCLHVCQUF1QiwrQ0FBTTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsWUFBWTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3RSQTtBQUFBO0FBQUE7QUFBd0M7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSwrQkFBK0Isb0RBQVc7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDJCQUEyQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsMkJBQTJCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiIuL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZnJvbnRlbmQvZW50cnkuanNcIik7XG4iLCJjb25zdCBBVkFUQVJfQ09OU1RBTlRTID0ge1xyXG4gIEFWQVRBUl9ESU1FTlNJT05TOiB7XHJcbiAgICB3aWR0aDogMTUwLFxyXG4gICAgaGVpZ2h0OiAzMDBcclxuICB9LFxyXG4gIEdSQVZJVFk6IC0xLjgsXHJcbiAgUDFfTU9WRU1FTlQ6IHtcclxuICAgIDg3OiB7IHg6IDAsIHk6IC0xIH0sXHJcbiAgICA2NTogeyB4OiAtMSwgeTogMCB9LFxyXG4gICAgLy8gODM6IHsgeDogMCwgeTogMSB9LFxyXG4gICAgNjg6IHsgeDogMSwgeTogMCB9LFxyXG4gIH0sXHJcbiAgUDJfTU9WRU1FTlQ6IHtcclxuICAgIDM4OiB7IHg6IDAsIHk6IC0xIH0sXHJcbiAgICAzNzogeyB4OiAtMSwgeTogMCB9LFxyXG4gICAgLy8gNDA6IHsgeDogMCwgeTogMSB9LFxyXG4gICAgMzk6IHsgeDogMSwgeTogMCB9LFxyXG4gIH0sXHJcbiAgTU9WRU1FTlRfU1BFRUQ6IHtcclxuICAgIHg6IDEwLFxyXG4gICAgeTogMzBcclxuICB9LFxyXG4gIE1BWF9IRUFMVEg6IDIwMCxcclxuICBTUklURVNIRUVUOiB7XHJcbiAgICBXQUxLSU5HOiB7XHJcbiAgICAgIDE6IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDIwMixcclxuICAgICAgICB3OiA1MCxcclxuICAgICAgICBoOiA5OFxyXG4gICAgICB9LFxyXG4gICAgICAyOiB7XHJcbiAgICAgICAgeDogNTAsXHJcbiAgICAgICAgeTogMjAyLFxyXG4gICAgICAgIHc6IDUwLFxyXG4gICAgICAgIGg6IDk4XHJcbiAgICAgIH0sXHJcbiAgICAgIDM6IHtcclxuICAgICAgICB4OiAxMDAsXHJcbiAgICAgICAgeTogMjAyLFxyXG4gICAgICAgIHc6IDY1LFxyXG4gICAgICAgIGg6IDk4XHJcbiAgICAgIH0sXHJcbiAgICAgIDQ6IHtcclxuICAgICAgICB4OiAxNjUsXHJcbiAgICAgICAgeTogMjAyLFxyXG4gICAgICAgIHc6IDc1LFxyXG4gICAgICAgIGg6IDk4XHJcbiAgICAgIH0sXHJcbiAgICAgIDU6IHtcclxuICAgICAgICB4OiAyNDAsXHJcbiAgICAgICAgeTogMjAyLFxyXG4gICAgICAgIHc6IDYwLFxyXG4gICAgICAgIGg6IDk4XHJcbiAgICAgIH0sXHJcbiAgICAgIDY6IHtcclxuICAgICAgICB4OiAzMDAsXHJcbiAgICAgICAgeTogMjAzLFxyXG4gICAgICAgIHc6IDcwLFxyXG4gICAgICAgIGg6IDk3XHJcbiAgICAgIH0sXHJcbiAgICAgIDc6IHtcclxuICAgICAgICB4OiAzNzAsXHJcbiAgICAgICAgeTogMjAyLFxyXG4gICAgICAgIHc6IDgwLFxyXG4gICAgICAgIGg6IDk4XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBJRExFOiB7XHJcbiAgICAgIDE6IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDMwMSxcclxuICAgICAgICB3OiA3NSxcclxuICAgICAgICBoOiA5NlxyXG4gICAgICB9LFxyXG4gICAgICAyOiB7XHJcbiAgICAgICAgeDogNzUsXHJcbiAgICAgICAgeTogMzAxLFxyXG4gICAgICAgIHc6IDc1LFxyXG4gICAgICAgIGg6IDk2XHJcbiAgICAgIH0sXHJcbiAgICAgIDM6IHtcclxuICAgICAgICB4OiAxNTAsXHJcbiAgICAgICAgeTogMzAxLFxyXG4gICAgICAgIHc6IDc1LFxyXG4gICAgICAgIGg6IDk2XHJcbiAgICAgIH0sXHJcbiAgICAgIDQ6IHtcclxuICAgICAgICB4OiAyMjUsXHJcbiAgICAgICAgeTogMzAxLFxyXG4gICAgICAgIHc6IDc1LFxyXG4gICAgICAgIGg6IDk2XHJcbiAgICAgIH0sXHJcbiAgICAgIDU6IHtcclxuICAgICAgICB4OiAzMDAsXHJcbiAgICAgICAgeTogMzAxLFxyXG4gICAgICAgIHc6IDc1LFxyXG4gICAgICAgIGg6IDk2XHJcbiAgICAgIH0sXHJcbiAgICAgIDY6IHtcclxuICAgICAgICB4OiAzNzUsXHJcbiAgICAgICAgeTogMzAxLFxyXG4gICAgICAgIHc6IDc1LFxyXG4gICAgICAgIGg6IDk2XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBKVU1QOiB7XHJcbiAgICAgIDE6IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDk1LFxyXG4gICAgICAgIHc6IDc0LFxyXG4gICAgICAgIGg6IDEwN1xyXG4gICAgICB9LFxyXG4gICAgICAyOiB7XHJcbiAgICAgICAgeDogNzQsXHJcbiAgICAgICAgeTogOTUsXHJcbiAgICAgICAgdzogNzQsXHJcbiAgICAgICAgaDogMTA3XHJcbiAgICAgIH0sXHJcbiAgICAgIDM6IHtcclxuICAgICAgICB4OiAxNDgsXHJcbiAgICAgICAgeTogOTUsXHJcbiAgICAgICAgdzogNzQsXHJcbiAgICAgICAgaDogMTA3XHJcbiAgICAgIH0sXHJcbiAgICAgIDQ6IHtcclxuICAgICAgICB4OiAyMjIsXHJcbiAgICAgICAgeTogOTUsXHJcbiAgICAgICAgdzogNzQsXHJcbiAgICAgICAgaDogMTA3XHJcbiAgICAgIH0sXHJcbiAgICAgIDU6IHtcclxuICAgICAgICB4OiAyOTYsXHJcbiAgICAgICAgeTogOTUsXHJcbiAgICAgICAgdzogNzQsXHJcbiAgICAgICAgaDogMTA3XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBBVFRBQ0s6IHtcclxuICAgICAgMToge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMCxcclxuICAgICAgICB3OiAxMDQsXHJcbiAgICAgICAgaDogOTVcclxuICAgICAgfSxcclxuICAgICAgMjoge1xyXG4gICAgICAgIHg6IDEwNCxcclxuICAgICAgICB5OiAwLFxyXG4gICAgICAgIHc6IDEwNCxcclxuICAgICAgICBoOiA5NVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdmF0YXIge1xyXG4gIGNvbnN0cnVjdG9yKGN0eCwgZGltZW5zaW9ucywgcGxheWVyTnVtKSB7XHJcbiAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnM7XHJcbiAgICB0aGlzLnBsYXllck51bSA9IHBsYXllck51bTtcclxuXHJcbiAgICBsZXQgc3RhcnRpbmdYID0gcGxheWVyTnVtID09PSAxID8gNTAgOiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLSA1MDtcclxuICAgIHRoaXMucG9zID0ge1xyXG4gICAgICB4OiBzdGFydGluZ1ggLSBBVkFUQVJfQ09OU1RBTlRTLkFWQVRBUl9ESU1FTlNJT05TLndpZHRoIC8gMixcclxuICAgICAgeTogdGhpcy5kaW1lbnNpb25zLmhlaWdodCAtIEFWQVRBUl9DT05TVEFOVFMuQVZBVEFSX0RJTUVOU0lPTlMuaGVpZ2h0IC0gMVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnZlbCA9IHtcclxuICAgICAgdng6IDAsXHJcbiAgICAgIHZ5OiAwXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaGVhbHRoOiBBVkFUQVJfQ09OU1RBTlRTLk1BWF9IRUFMVEgsXHJcbiAgICAgIGJhc2ljQXR0YWNraW5nOiBmYWxzZSxcclxuICAgICAgZGFtYWdlRG9uZTogZmFsc2UsXHJcbiAgICAgIGJhc2ljQXR0YWNrSGl0Ym94OiB7XHJcbiAgICAgICAgdzogQVZBVEFSX0NPTlNUQU5UUy5BVkFUQVJfRElNRU5TSU9OUy53aWR0aCAvIDIgKyA0MCxcclxuICAgICAgICBoOiAxMFxyXG4gICAgICB9LFxyXG4gICAgICBiYXNpY0F0dGFja0RhbWFnZTogMTAsXHJcbiAgICAgIGZhY2luZzogcGxheWVyTnVtID09PSAxID8gMSA6IC0xLFxyXG4gICAgICBiYXNpY0F0dGFja0tleWNvZGU6IHBsYXllck51bSA9PT0gMSA/IDc0IDogOTcsXHJcbiAgICAgIG1vdmVtZW50OiAnaWRsZSdcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5rZXlDb2RlTW92ZW1lbnQgPSB0aGlzLnBsYXllck51bSA9PT0gMSA/IFxyXG4gICAgICBBVkFUQVJfQ09OU1RBTlRTLlAxX01PVkVNRU5UIDogQVZBVEFSX0NPTlNUQU5UUy5QMl9NT1ZFTUVOVDtcclxuICAgIHRoaXMua2V5cHJlc3NQT0pPID0ge307XHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLmtleUNvZGVNb3ZlbWVudCkuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgIHRoaXMua2V5cHJlc3NQT0pPW2tleV0gPSBmYWxzZTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zcHJpdGVTaGVldCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5zcHJpdGVTaGVldC5zcmMgPSAnZnJvbnRlbmQvYXNzZXRzL2ltYWdlcy9yeXUtc3ByaXRlLXNoZWV0LnBuZyc7XHJcblxyXG4gICAgdGhpcy5hbmltYXRpb25UaW1lciA9IDA7XHJcblxyXG4gICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmRyYXdBdmF0YXIgPSB0aGlzLmRyYXdBdmF0YXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMubW92ZUF2YXRhciA9IHRoaXMubW92ZUF2YXRhci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zdG9wQXZhdGFyID0gdGhpcy5zdG9wQXZhdGFyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmNoZWNrQm91bmRhcnkgPSB0aGlzLmNoZWNrQm91bmRhcnkuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudXBkYXRlUG9zaXRpb24gPSB0aGlzLnVwZGF0ZVBvc2l0aW9uLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmJhc2ljQXR0YWNrID0gdGhpcy5iYXNpY0F0dGFjay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5kcmF3QmFzaWNBdHRhY2sgPSB0aGlzLmRyYXdCYXNpY0F0dGFjay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVBdHRhY2sgPSB0aGlzLmhhbmRsZUF0dGFjay5iaW5kKHRoaXMpO1xyXG5cclxuICAgIC8vVE9ETzogSVMgVEhFUkUgQSBCRVRURVIgU09MVVRJT04/XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVBdHRhY2spO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMubW92ZUF2YXRhcik7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuc3RvcEF2YXRhcik7XHJcbiAgfVxyXG5cclxuICBhbmltYXRlKHBhdXNlZCkge1xyXG4gICAgdGhpcy5wYXVzZWQgPSAhIXBhdXNlZDtcclxuICAgIHRoaXMuYW5pbWF0aW9uVGltZXIgKz0gMC4wNTtcclxuICAgIGlmICghdGhpcy5wYXVzZWQpIHtcclxuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudmVsLnZ4ID09PSAwICYmIHRoaXMudmVsLnZ5ID09PSAwKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUubW92ZW1lbnQgPSAnaWRsZSc7XHJcbiAgICB9XHJcbiAgICBsZXQgYm91bmRzO1xyXG4gICAgaWYgKCF0aGlzLnBhdXNlZCkge1xyXG4gICAgICB0aGlzLmRyYXdCYXNpY0F0dGFjaygpO1xyXG4gICAgICBib3VuZHMgPSB7XHJcbiAgICAgICAgeDogdGhpcy5wb3MueCArIHRoaXMuc3RhdGUuZmFjaW5nICogdGhpcy5zdGF0ZS5iYXNpY0F0dGFja0hpdGJveC53LFxyXG4gICAgICAgIHk6IHRoaXMucG9zLnkgKyB0aGlzLnN0YXRlLmJhc2ljQXR0YWNrSGl0Ym94LmhcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5kcmF3QXZhdGFyKCk7XHJcbiAgICByZXR1cm4gYm91bmRzO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUG9zaXRpb24oKSB7XHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLmtleXByZXNzUE9KTykuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmtleXByZXNzUE9KT1trZXldKSB7XHJcbiAgICAgICAgLy8gS2V5cHJlc3MgbW92ZW1lbnRcclxuICAgICAgICBpZiAodGhpcy5rZXlDb2RlTW92ZW1lbnRba2V5XS54ICE9PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLnZlbC52eCA9IHRoaXMua2V5Q29kZU1vdmVtZW50W2tleV0ueFxyXG4gICAgICAgICAgICAqIEFWQVRBUl9DT05TVEFOVFMuTU9WRU1FTlRfU1BFRUQueDtcclxuICAgICAgICAgIHRoaXMuc3RhdGUuZmFjaW5nID0gdGhpcy5rZXlDb2RlTW92ZW1lbnRba2V5XS54O1xyXG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGUubW92ZW1lbnQgIT09ICdqdW1wJykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLm1vdmVtZW50ID0gJ21vdmVYJztcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBQcmV2ZW50IGluZmluaXRlIGp1bXBcclxuICAgICAgICBpZiAodGhpcy5wb3MueSA9PT0gdGhpcy5kaW1lbnNpb25zLmhlaWdodCAtIDEgLSBBVkFUQVJfQ09OU1RBTlRTLkFWQVRBUl9ESU1FTlNJT05TLmhlaWdodCkge1xyXG4gICAgICAgICAgaWYgKHRoaXMua2V5Q29kZU1vdmVtZW50W2tleV0ueSAhPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnZlbC52eSA9IHRoaXMua2V5Q29kZU1vdmVtZW50W2tleV0ueVxyXG4gICAgICAgICAgICAgICogQVZBVEFSX0NPTlNUQU5UUy5NT1ZFTUVOVF9TUEVFRC55O1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLm1vdmVtZW50ID0gJ2p1bXAnO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMudmVsLnZ5IC09IEFWQVRBUl9DT05TVEFOVFMuR1JBVklUWTtcclxuICAgIHRoaXMucG9zLnkgKz0gdGhpcy52ZWwudnk7XHJcbiAgICB0aGlzLnBvcy54ICs9IHRoaXMudmVsLnZ4O1xyXG4gICAgdGhpcy5jaGVja0JvdW5kYXJ5KCk7XHJcbiAgfVxyXG5cclxuICBtb3ZlQXZhdGFyKGUpIHtcclxuICAgIGlmICghdGhpcy5wYXVzZWQgJiYgIWUucmVwZWF0KSB7XHJcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmtleUNvZGVNb3ZlbWVudCkuaW5jbHVkZXMoZS5rZXlDb2RlLnRvU3RyaW5nKCkpKSB7XHJcbiAgICAgICAgdGhpcy5rZXlwcmVzc1BPSk9bZS5rZXlDb2RlLnRvU3RyaW5nKCldID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0b3BBdmF0YXIoZSkge1xyXG4gICAgdGhpcy52ZWwudnggPSAwO1xyXG4gICAgdGhpcy5rZXlwcmVzc1BPSk9bZS5rZXlDb2RlLnRvU3RyaW5nKCldID0gZmFsc2U7XHJcbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgfVxyXG4gIFxyXG4gIGRyYXdBdmF0YXIoKSB7XHJcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnBsYXllck51bSA9PT0gMSA/ICdCbHVlJyA6ICdSZWQnO1xyXG4gICAgbGV0IGN1cnJlbnRTcHJpdGVTbGljZUlkeDtcclxuICAgIGxldCBjdXJyZW50U3ByaXRlU2xpY2U7XHJcbiAgICBsZXQgYXR0YWNrT2Zmc2V0ID0gMDtcclxuICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5tb3ZlbWVudCkge1xyXG4gICAgICBjYXNlICdpZGxlJzpcclxuICAgICAgICBjdXJyZW50U3ByaXRlU2xpY2VJZHggPSAxICsgTWF0aC5yb3VuZCh0aGlzLmFuaW1hdGlvblRpbWVyICUgKE9iamVjdC5rZXlzKEFWQVRBUl9DT05TVEFOVFMuU1JJVEVTSEVFVC5JRExFKS5sZW5ndGggLSAxKSk7XHJcbiAgICAgICAgY3VycmVudFNwcml0ZVNsaWNlID0gQVZBVEFSX0NPTlNUQU5UUy5TUklURVNIRUVULklETEVbY3VycmVudFNwcml0ZVNsaWNlSWR4XTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnbW92ZVgnOlxyXG4gICAgICAgIGN1cnJlbnRTcHJpdGVTbGljZUlkeCA9IDEgKyBNYXRoLnJvdW5kKDIgKiB0aGlzLmFuaW1hdGlvblRpbWVyICUgKE9iamVjdC5rZXlzKEFWQVRBUl9DT05TVEFOVFMuU1JJVEVTSEVFVC5XQUxLSU5HKS5sZW5ndGggLSAxKSk7XHJcbiAgICAgICAgY3VycmVudFNwcml0ZVNsaWNlID0gQVZBVEFSX0NPTlNUQU5UUy5TUklURVNIRUVULldBTEtJTkdbY3VycmVudFNwcml0ZVNsaWNlSWR4XTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnanVtcCc6XHJcbiAgICAgICAgY3VycmVudFNwcml0ZVNsaWNlSWR4ID0gMSArIE1hdGgucm91bmQoMiAqIHRoaXMuYW5pbWF0aW9uVGltZXIgJSAoT2JqZWN0LmtleXMoQVZBVEFSX0NPTlNUQU5UUy5TUklURVNIRUVULkpVTVApLmxlbmd0aCAtIDEpKTtcclxuICAgICAgICBjdXJyZW50U3ByaXRlU2xpY2UgPSBBVkFUQVJfQ09OU1RBTlRTLlNSSVRFU0hFRVQuSlVNUFtjdXJyZW50U3ByaXRlU2xpY2VJZHhdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdhdHRhY2snOlxyXG4gICAgICAgIGN1cnJlbnRTcHJpdGVTbGljZUlkeCA9IDEgKyBNYXRoLnJvdW5kKHRoaXMuYW5pbWF0aW9uVGltZXIgJSAoT2JqZWN0LmtleXMoQVZBVEFSX0NPTlNUQU5UUy5TUklURVNIRUVULkFUVEFDSykubGVuZ3RoIC0gMSkpO1xyXG4gICAgICAgIGN1cnJlbnRTcHJpdGVTbGljZSA9IEFWQVRBUl9DT05TVEFOVFMuU1JJVEVTSEVFVC5BVFRBQ0tbY3VycmVudFNwcml0ZVNsaWNlSWR4XTtcclxuICAgICAgICBhdHRhY2tPZmZzZXQgPSA1MDtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHRoaXMuY3R4LnNhdmUoKTtcclxuICAgIHRoaXMuY3R4LnNjYWxlKHRoaXMuc3RhdGUuZmFjaW5nLCAxKTtcclxuICAgIGxldCBvZmZzZXQgPSAwO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuZmFjaW5nID09PSAtMSkge1xyXG4gICAgICBvZmZzZXQgPSBBVkFUQVJfQ09OU1RBTlRTLkFWQVRBUl9ESU1FTlNJT05TLndpZHRoO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICB0aGlzLnNwcml0ZVNoZWV0LFxyXG4gICAgICBjdXJyZW50U3ByaXRlU2xpY2UueCxcclxuICAgICAgY3VycmVudFNwcml0ZVNsaWNlLnksXHJcbiAgICAgIGN1cnJlbnRTcHJpdGVTbGljZS53LFxyXG4gICAgICBjdXJyZW50U3ByaXRlU2xpY2UuaCxcclxuICAgICAgdGhpcy5zdGF0ZS5mYWNpbmcgKiB0aGlzLnBvcy54IC0gb2Zmc2V0LFxyXG4gICAgICB0aGlzLnBvcy55LFxyXG4gICAgICBBVkFUQVJfQ09OU1RBTlRTLkFWQVRBUl9ESU1FTlNJT05TLndpZHRoICsgYXR0YWNrT2Zmc2V0LFxyXG4gICAgICBBVkFUQVJfQ09OU1RBTlRTLkFWQVRBUl9ESU1FTlNJT05TLmhlaWdodFxyXG4gICAgKTtcclxuICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcclxuICB9XHJcblxyXG4gIGNoZWNrQm91bmRhcnkoKSB7XHJcbiAgICBsZXQgbWF4T2Zmc2V0ID0gdGhpcy5wbGF5ZXJOdW0gPT09IDEgPyAwIDogQVZBVEFSX0NPTlNUQU5UUy5BVkFUQVJfRElNRU5TSU9OUy53aWR0aDtcclxuICAgIGxldCBtaW5PZmZzZXQgPSB0aGlzLnBsYXllck51bSA9PT0gMiA/IDAgOiBBVkFUQVJfQ09OU1RBTlRTLkFWQVRBUl9ESU1FTlNJT05TLndpZHRoO1xyXG4gICAgaWYgKHRoaXMucG9zLnggPCAwKSB7XHJcbiAgICAgIHRoaXMucG9zLnggPSAwO1xyXG4gICAgICB0aGlzLnZlbC52eCA9IDA7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMucG9zLnggPiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLSBtYXhPZmZzZXQgLSBtaW5PZmZzZXQpIHtcclxuICAgICAgdGhpcy5wb3MueCA9IHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIG1heE9mZnNldCAtIG1pbk9mZnNldDtcclxuICAgICAgdGhpcy52ZWwudnggPSAwO1xyXG4gICAgfTtcclxuICAgIGlmICh0aGlzLnBvcy55ID4gdGhpcy5kaW1lbnNpb25zLmhlaWdodCAtIDEgLSBBVkFUQVJfQ09OU1RBTlRTLkFWQVRBUl9ESU1FTlNJT05TLmhlaWdodCkge1xyXG4gICAgICB0aGlzLnBvcy55ID0gdGhpcy5kaW1lbnNpb25zLmhlaWdodCAtIDEgLSBBVkFUQVJfQ09OU1RBTlRTLkFWQVRBUl9ESU1FTlNJT05TLmhlaWdodDtcclxuICAgICAgdGhpcy52ZWwudnkgPSAwO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnBvcy55IDwgMCkge1xyXG4gICAgICB0aGlzLnBvcy55ID0gMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJhc2ljQXR0YWNrKCkge1xyXG4gICAgaWYgKCF0aGlzLnN0YXRlLmJhc2ljQXR0YWNraW5nKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUuYmFzaWNBdHRhY2tpbmcgPSB0cnVlO1xyXG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5iYXNpY0F0dGFja2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3RhdGUuZGFtYWdlRG9uZSA9IGZhbHNlO1xyXG4gICAgICB9LCAyNTApO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBkcmF3QmFzaWNBdHRhY2soKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5iYXNpY0F0dGFja2luZykge1xyXG4gICAgICB0aGlzLnN0YXRlLm1vdmVtZW50ID0gJ2F0dGFjayc7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQXR0YWNrKGUpIHtcclxuICAgIGlmIChlLmtleUNvZGUgPT09IHRoaXMuc3RhdGUuYmFzaWNBdHRhY2tLZXljb2RlKSB7XHJcbiAgICAgIHRoaXMuYmFzaWNBdHRhY2soKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQgQXJlbmEgZnJvbSBcIi4vZ2FtZVwiO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XHJcbiAgbmV3IEFyZW5hKGNhbnZhcyk7XHJcbiAgYXR0YWNoRXZlbnRMaXN0ZW5lcnMoKTtcclxufSk7XHJcblxyXG5jb25zdCBhdHRhY2hFdmVudExpc3RlbmVycyA9ICgpID0+IHtcclxuICBsZXQgZGVtb0ljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZW1vLWljb24tY29udGFpbmVyJylbMF07XHJcbiAgbGV0IGhlbHBJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVscC1pY29uLWNvbnRhaW5lcicpWzBdO1xyXG4gIGxldCBtb2RhbEJhY2tncm91bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb2RhbC1iYWNrZ3JvdW5kJylbMF07XHJcbiAgbGV0IG1vZGFsQ2hpbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb2RhbC1jaGlsZCcpWzBdO1xyXG5cclxuICBtb2RhbENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpKTtcclxuICBtb2RhbEJhY2tncm91bmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IGNsb3NlTW9kYWwoZSkpO1xyXG4gIGRlbW9JY29uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IG9wZW5Nb2RhbCgnZGVtbycsIG1vZGFsQmFja2dyb3VuZCkpO1xyXG4gIGhlbHBJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IG9wZW5Nb2RhbCgnaGVscCcsIG1vZGFsQmFja2dyb3VuZCkpO1xyXG59XHJcblxyXG5jb25zdCBvcGVuTW9kYWwgPSAodHlwZSwgbW9kYWxCYWNrZ3JvdW5kKSA9PiB7XHJcbiAgbW9kYWxCYWNrZ3JvdW5kLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSAnZGVtbyc6XHJcbiAgICAgIGxldCBkZW1vRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RlbW8tb3BlbicpWzBdO1xyXG4gICAgICBkZW1vRGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICdoZWxwJzpcclxuICAgICAgbGV0IGhlbHBEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVscC1vcGVuJylbMF07XHJcbiAgICAgIGhlbHBEaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICBicmVhaztcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGNsb3NlTW9kYWwgPSAoZSkgPT4ge1xyXG4gIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICBsZXQgZGVtb0Rpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZW1vLW9wZW4nKVswXTtcclxuICBkZW1vRGlzcGxheS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICBsZXQgaGVscERpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWxwLW9wZW4nKVswXTtcclxuICBoZWxwRGlzcGxheS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxufSIsImNvbnN0IEVOVklST05NRU5UX0NPTlNUQU5UUyA9IHtcclxuICBHUkFWSVRZOiAtMC43LFxyXG4gIEVOVklST05NRU5UX0RJTUVOU0lPTlM6IDk0LFxyXG4gIFNBS1VSQV9TUFJJVEVTOiAzLFxyXG4gIFNOT1dGTEFLRV9TUFJJVEVTOiA5LFxyXG4gIEVOVklST05NRU5UX1JFU0laRTogMjVcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW52aXJvbm1lbnQge1xyXG4gIGNvbnN0cnVjdG9yKGN0eCwgZGltZW5zaW9ucywgdHlwZSkge1xyXG4gICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zO1xyXG4gICAgdGhpcy5wb3MgPSB7XHJcbiAgICAgIHg6IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHRoaXMuZGltZW5zaW9ucy53aWR0aCksXHJcbiAgICAgIHk6IC05NFxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSAnc2FrdXJhJzpcclxuICAgICAgICB0aGlzLnJhbmRTcHJpdGUgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoRU5WSVJPTk1FTlRfQ09OU1RBTlRTLlNBS1VSQV9TUFJJVEVTIC0gMSkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdzbm93Zmxha2UnOlxyXG4gICAgICAgIHRoaXMucmFuZFNwcml0ZSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChFTlZJUk9OTUVOVF9DT05TVEFOVFMuU05PV0ZMQUtFX1NQUklURVMgLSAxKSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kZWx0YXggPSBNYXRoLnJhbmRvbSgpICogMC41IC0gMC4yNTtcclxuICAgIHRoaXMubW92ZSA9IHRoaXMubW92ZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5kcmF3RW52aXJvbm1lbnQgPSB0aGlzLmRyYXdFbnZpcm9ubWVudC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBhbmltYXRlKCkge1xyXG4gICAgdGhpcy5tb3ZlKCk7XHJcbiAgICB0aGlzLmRyYXdFbnZpcm9ubWVudCgpO1xyXG4gIH1cclxuXHJcbiAgbW92ZSgpIHtcclxuICAgIHRoaXMucG9zLnkgLT0gRU5WSVJPTk1FTlRfQ09OU1RBTlRTLkdSQVZJVFk7XHJcbiAgICB0aGlzLnBvcy54ICs9IHRoaXMuZGVsdGF4O1xyXG4gIH1cclxuXHJcbiAgZHJhd0Vudmlyb25tZW50KCkge1xyXG4gICAgbGV0IGVudmlyb25tZW50ID0gbmV3IEltYWdlKCk7XHJcbiAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xyXG4gICAgICBjYXNlICdzYWt1cmEnOlxyXG4gICAgICAgIGVudmlyb25tZW50LnNyYyA9ICdmcm9udGVuZC9hc3NldHMvaW1hZ2VzL3Nha3VyYS5wbmcnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdzbm93Zmxha2UnOlxyXG4gICAgICAgIGVudmlyb25tZW50LnNyYyA9ICdmcm9udGVuZC9hc3NldHMvaW1hZ2VzL3Nub3dmbGFrZS5wbmcnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgIGVudmlyb25tZW50LCBcclxuICAgICAgRU5WSVJPTk1FTlRfQ09OU1RBTlRTLkVOVklST05NRU5UX0RJTUVOU0lPTlMgKiB0aGlzLnJhbmRTcHJpdGUsIFxyXG4gICAgICAwLFxyXG4gICAgICBFTlZJUk9OTUVOVF9DT05TVEFOVFMuRU5WSVJPTk1FTlRfRElNRU5TSU9OUyxcclxuICAgICAgRU5WSVJPTk1FTlRfQ09OU1RBTlRTLkVOVklST05NRU5UX0RJTUVOU0lPTlMsXHJcbiAgICAgIHRoaXMucG9zLngsXHJcbiAgICAgIHRoaXMucG9zLnksXHJcbiAgICAgIEVOVklST05NRU5UX0NPTlNUQU5UUy5FTlZJUk9OTUVOVF9SRVNJWkUsXHJcbiAgICAgIEVOVklST05NRU5UX0NPTlNUQU5UUy5FTlZJUk9OTUVOVF9SRVNJWkUsXHJcbiAgICApO1xyXG4gIH1cclxufSIsImltcG9ydCBMZXZlbCBmcm9tIFwiLi9sZXZlbFwiO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJy4vYXZhdGFyJztcclxuXHJcbmNvbnN0IEFWQVRBUl9DT05TVEFOVFMgPSB7XHJcbiAgQVZBVEFSX0RJTUVOU0lPTlM6IHtcclxuICAgIHdpZHRoOiAxNTAsXHJcbiAgICBoZWlnaHQ6IDMwMFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJlbmEge1xyXG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xyXG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIHRoaXMuZGltZW5zaW9ucyA9IHsgd2lkdGg6IGNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0IH07XHJcbiAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcclxuICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLnNvdW5kID0gZmFsc2U7XHJcbiAgICB0aGlzLndpbm5lciA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5kb2N1bWVudE9mZnNldFggPSAoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCAtIHRoaXMuZGltZW5zaW9ucy53aWR0aCkgLyAyO1xyXG4gICAgdGhpcy5kb2N1bWVudE9mZnNldFkgPSAoZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQgLSA4MCAtIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpIC8gMjtcclxuXHJcbiAgICB0aGlzLnBsYXlQb3MgPSB7XHJcbiAgICAgIHg6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIgLSAxMTAsXHJcbiAgICAgIHk6IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyICsgMjhcclxuICAgIH07XHJcbiAgICB0aGlzLnBsYXlEaW1lbnNpb25zID0ge1xyXG4gICAgICBkeDogMjIwLFxyXG4gICAgICBkeTogNTZcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5wYXVzZVBvcyA9IHtcclxuICAgICAgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC0gNjAsXHJcbiAgICAgIHk6IDI1XHJcbiAgICB9O1xyXG4gICAgdGhpcy5wYXVzZURpbWVuc2lvbnMgPSB7XHJcbiAgICAgIGR4OiAzMCxcclxuICAgICAgZHk6IDQwXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuc291bmRQb3MgPSB7XHJcbiAgICAgIHg6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIDcwLFxyXG4gICAgICB5OiAyMFxyXG4gICAgfTtcclxuICAgIHRoaXMuc291bmREaW1lbnNpb25zID0ge1xyXG4gICAgICBkeDogNTAsXHJcbiAgICAgIGR5OiA1MFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnNvdW5kT2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImF1ZGlvXCIpO1xyXG4gICAgdGhpcy5zb3VuZE9iai5zcmMgPSAnZnJvbnRlbmQvYXNzZXRzL2F1ZGlvL3VpLW9zdC5tcDMnO1xyXG4gICAgdGhpcy5zb3VuZE9iai5zZXRBdHRyaWJ1dGUoXCJwcmVsb2FkXCIsIFwiYXV0b1wiKTtcclxuICAgIHRoaXMuc291bmRPYmouc2V0QXR0cmlidXRlKFwiY29udHJvbHNcIiwgXCJub25lXCIpO1xyXG4gICAgdGhpcy5zb3VuZE9iai5zZXRBdHRyaWJ1dGUoXCJsb29wXCIsIFwidHJ1ZVwiKTtcclxuICAgIHRoaXMuc291bmRPYmouc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnNvdW5kT2JqKTtcclxuXHJcbiAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kID0gdGhpcy5kcmF3QmFja2dyb3VuZC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVQbGF5ID0gdGhpcy5oYW5kbGVQbGF5LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZVBhdXNlID0gdGhpcy5oYW5kbGVQYXVzZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVNdXRlID0gdGhpcy5oYW5kbGVNdXRlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZUF0dGFjayA9IHRoaXMuaGFuZGxlQXR0YWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZU1vZGFsID0gdGhpcy5oYW5kbGVNb2RhbC5iaW5kKHRoaXMpO1xyXG5cclxuICAgIHRoaXMucGxheSA9IHRoaXMucGxheS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5yZXN0YXJ0ID0gdGhpcy5yZXN0YXJ0LmJpbmQodGhpcyk7XHJcblxyXG4gICAgdGhpcy5yZXN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICByZXN0YXJ0KCkge1xyXG4gICAgdGhpcy5sZXZlbCA9IG5ldyBMZXZlbCh0aGlzLmN0eCwgdGhpcy5kaW1lbnNpb25zKTtcclxuICAgIHRoaXMucGxheWVyMSA9IG5ldyBBdmF0YXIodGhpcy5jdHgsIHRoaXMuZGltZW5zaW9ucywgMSk7XHJcbiAgICB0aGlzLnBsYXllcjIgPSBuZXcgQXZhdGFyKHRoaXMuY3R4LCB0aGlzLmRpbWVuc2lvbnMsIDIpO1xyXG4gICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcclxuICAgIHRoaXMud2lubmVyID0gbnVsbDtcclxuICAgIHRoaXMucGxheSgpO1xyXG4gIH1cclxuICBcclxuICBwbGF5KCkge1xyXG4gICAgdGhpcy5jdHguY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlUGxheSk7XHJcbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcclxuICB9XHJcbiAgXHJcbiAgYW5pbWF0ZSgpIHtcclxuICAgIGlmICghdGhpcy5nYW1lT3Zlcikge1xyXG4gICAgICB0aGlzLmN0eC5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVNdXRlKTtcclxuICAgICAgdGhpcy5jdHguY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlUGF1c2UpO1xyXG5cclxuICAgICAgaWYgKHRoaXMucGF1c2VkKSB7XHJcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZSk7XHJcbiAgICAgICAgdGhpcy5sZXZlbC5hbmltYXRlKHRoaXMucGxheWVyMS5zdGF0ZS5oZWFsdGgsIHRoaXMucGxheWVyMi5zdGF0ZS5oZWFsdGgsIHRydWUpO1xyXG4gICAgICAgIHRoaXMucGxheWVyMS5hbmltYXRlKHRydWUpO1xyXG4gICAgICAgIHRoaXMucGxheWVyMi5hbmltYXRlKHRydWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMud2lubmVyID0gdGhpcy5sZXZlbC5hbmltYXRlKHRoaXMucGxheWVyMS5zdGF0ZS5oZWFsdGgsIHRoaXMucGxheWVyMi5zdGF0ZS5oZWFsdGgpO1xyXG4gICAgICAgIGxldCBwMUF0dGFja0hpdGJveCA9IHRoaXMucGxheWVyMS5hbmltYXRlKGZhbHNlKTtcclxuICAgICAgICBsZXQgcDJBdHRhY2tIaXRib3ggPSB0aGlzLnBsYXllcjIuYW5pbWF0ZShmYWxzZSk7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyMS5zdGF0ZS5iYXNpY0F0dGFja2luZyAmJiAhdGhpcy5wbGF5ZXIxLnN0YXRlLmRhbWFnZURvbmUpIHtcclxuICAgICAgICAgIHRoaXMuY2hlY2tBdHRhY2tDb2xsaXNpb24ocDFBdHRhY2tIaXRib3gsIHRoaXMucGxheWVyMSwgdGhpcy5wbGF5ZXIyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyMi5zdGF0ZS5iYXNpY0F0dGFja2luZyAmJiAhdGhpcy5wbGF5ZXIyLnN0YXRlLmRhbWFnZURvbmUpIHtcclxuICAgICAgICAgIHRoaXMuY2hlY2tBdHRhY2tDb2xsaXNpb24ocDJBdHRhY2tIaXRib3gsIHRoaXMucGxheWVyMiwgdGhpcy5wbGF5ZXIxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMud2lubmVyID09PSAndGltZVVwJykge1xyXG4gICAgICAgICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChbJ3BsYXllcjEnLCAncGxheWVyMiddLmluY2x1ZGVzKHRoaXMud2lubmVyKSkge1xyXG4gICAgICAgICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY3R4LmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZU11dGUpO1xyXG4gICAgICB0aGlzLmN0eC5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVQYXVzZSk7XHJcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uRnJhbWUpO1xyXG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgICAgLy8gRGlzcGxheSBzdGFydCBzY3JlZW5cclxuICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gT05MWSBGT1IgU1RBUlRJTkcgU0NSRUVOXHJcbiAgZHJhd0JhY2tncm91bmQoKSB7XHJcbiAgICB0aGlzLmN0eC5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVQbGF5KTtcclxuXHJcbiAgICBsZXQgYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgYmFja2dyb3VuZC5zcmMgPSAnZnJvbnRlbmQvYXNzZXRzL2ltYWdlcy9zdGFydC1iYWNrZ3JvdW5kLmpwZyc7XHJcbiAgICBiYWNrZ3JvdW5kLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGJhY2tncm91bmQsIDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XHJcbiAgXHJcbiAgICAgIGxldCBtdXRlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgIHRoaXMuc291bmQgPyBcclxuICAgICAgbXV0ZS5zcmMgPSAnZnJvbnRlbmQvYXNzZXRzL2ltYWdlcy9zcGVha2VyLnBuZyc6XHJcbiAgICAgIG11dGUuc3JjID0gJ2Zyb250ZW5kL2Fzc2V0cy9pbWFnZXMvbXV0ZS5wbmcnXHJcbiAgICAgIG11dGUub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShtdXRlLCB0aGlzLmRpbWVuc2lvbnMud2lkdGggLSA3MCwgMjAsIDUwLCA1MCk7XHJcbiAgICAgIH07XHJcbiAgXHJcbiAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnV0hJVEUnO1xyXG4gIFxyXG4gICAgICBsZXQgaGVhZGVyID0gbmV3IEltYWdlKCk7XHJcbiAgICAgIGhlYWRlci5zcmMgPSAnZnJvbnRlbmQvYXNzZXRzL2ltYWdlcy9oZWFkZXItd2hpdGUucG5nJztcclxuICAgICAgaGVhZGVyLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICBoZWFkZXIsIFxyXG4gICAgICAgICAgMjAsIFxyXG4gICAgICAgICAgdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDIgLSAxMDAsIFxyXG4gICAgICAgICAgdGhpcy5kaW1lbnNpb25zLndpZHRoIC0gNDAsIFxyXG4gICAgICAgICAgNTZcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIHN3aXRjaCAodGhpcy53aW5uZXIpIHtcclxuICAgICAgICBjYXNlIG51bGw6XHJcbiAgICAgICAgICB0aGlzLmN0eC5mb250ID0gJzU2cHggVHJlYnVjaGV0IE1TJztcclxuICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFxyXG4gICAgICAgICAgICAnUGxheSBub3chJyxcclxuICAgICAgICAgICAgdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMixcclxuICAgICAgICAgICAgdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDIgKyA3MlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3RpbWVVcCc6XHJcbiAgICAgICAgICB0aGlzLmN0eC5mb250ID0gJzM2cHggVHJlYnVjaGV0IE1TJztcclxuICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFxyXG4gICAgICAgICAgICAnVGltZSByYW4gb3V0Li4uIGhhdmUgeW91IHRyaWVkIGF0dGFja2luZz8nLFxyXG4gICAgICAgICAgICB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLFxyXG4gICAgICAgICAgICB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiArIDEyXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdGhpcy5jdHguZm9udCA9ICc1NnB4IFRyZWJ1Y2hldCBNUyc7XHJcbiAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcclxuICAgICAgICAgICAgJ1BsYXkgYWdhaW4/JyxcclxuICAgICAgICAgICAgdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMixcclxuICAgICAgICAgICAgdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDIgKyA3MlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICB0aGlzLmN0eC5mb250ID0gJzM2cHggVHJlYnVjaGV0IE1TJztcclxuICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFxyXG4gICAgICAgICAgICBgQ29uZ3JhdHVsYXRpb25zLCAke3RoaXMud2lubmVyfSB3b24hYCxcclxuICAgICAgICAgICAgdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMixcclxuICAgICAgICAgICAgdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDIgKyA4XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdGhpcy5jdHguZm9udCA9ICc1NnB4IFRyZWJ1Y2hldCBNUyc7XHJcbiAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcclxuICAgICAgICAgICAgJ1BsYXkgYWdhaW4/JyxcclxuICAgICAgICAgICAgdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMixcclxuICAgICAgICAgICAgdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDIgKyA3MlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBoYW5kbGVQbGF5KGUpIHtcclxuICAgIGxldCBjbGlja1BvcyA9IHtcclxuICAgICAgeDogZS5wYWdlWCAtIHRoaXMuZG9jdW1lbnRPZmZzZXRYLFxyXG4gICAgICB5OiBlLnBhZ2VZIC0gdGhpcy5kb2N1bWVudE9mZnNldFkgLSA4MFxyXG4gICAgfVxyXG4gICAgaWYgKGNsaWNrUG9zLnggPj0gdGhpcy5wbGF5UG9zLnggJiYgY2xpY2tQb3MueCA8PSB0aGlzLnBsYXlQb3MueCArIHRoaXMucGxheURpbWVuc2lvbnMuZHgpIHtcclxuICAgICAgaWYgKGNsaWNrUG9zLnkgPj0gdGhpcy5wbGF5UG9zLnkgJiYgY2xpY2tQb3MueSA8PSB0aGlzLnBsYXlQb3MueSArIHRoaXMucGxheURpbWVuc2lvbnMuZHkpIHtcclxuICAgICAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZVBhdXNlKGUpIHtcclxuICAgIGxldCBjbGlja1BvcyA9IHtcclxuICAgICAgeDogZS5wYWdlWCAtIHRoaXMuZG9jdW1lbnRPZmZzZXRYLFxyXG4gICAgICB5OiBlLnBhZ2VZIC0gdGhpcy5kb2N1bWVudE9mZnNldFkgLSA4MFxyXG4gICAgfVxyXG4gICAgaWYgKGNsaWNrUG9zLnggPj0gdGhpcy5wYXVzZVBvcy54ICYmIGNsaWNrUG9zLnggPD0gdGhpcy5wYXVzZVBvcy54ICsgdGhpcy5wYXVzZURpbWVuc2lvbnMuZHgpIHtcclxuICAgICAgaWYgKGNsaWNrUG9zLnkgPj0gdGhpcy5wYXVzZVBvcy55ICYmIGNsaWNrUG9zLnkgPD0gdGhpcy5wYXVzZVBvcy55ICsgdGhpcy5wYXVzZURpbWVuc2lvbnMuZHkpIHtcclxuICAgICAgICB0aGlzLnBhdXNlZCA9ICF0aGlzLnBhdXNlZDtcclxuICAgICAgICBpZiAoIXRoaXMucGF1c2VkKSB7XHJcbiAgICAgICAgICB0aGlzLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZU11dGUoZSkge1xyXG4gICAgbGV0IGNsaWNrUG9zID0ge1xyXG4gICAgICB4OiBlLnBhZ2VYIC0gdGhpcy5kb2N1bWVudE9mZnNldFgsXHJcbiAgICAgIHk6IGUucGFnZVkgLSB0aGlzLmRvY3VtZW50T2Zmc2V0WSAtIDgwXHJcbiAgICB9XHJcbiAgICBpZiAoY2xpY2tQb3MueCA+PSB0aGlzLnNvdW5kUG9zLnggJiYgY2xpY2tQb3MueCA8PSB0aGlzLnNvdW5kUG9zLnggKyB0aGlzLnNvdW5kRGltZW5zaW9ucy5keCkge1xyXG4gICAgICBpZiAoY2xpY2tQb3MueSA+PSB0aGlzLnNvdW5kUG9zLnkgJiYgY2xpY2tQb3MueSA8PSB0aGlzLnNvdW5kUG9zLnkgKyB0aGlzLnNvdW5kRGltZW5zaW9ucy5keSkge1xyXG4gICAgICAgIHRoaXMuc291bmQgPSAhdGhpcy5zb3VuZDtcclxuICAgICAgICBpZiAodGhpcy5zb3VuZCkge1xyXG4gICAgICAgICAgdGhpcy5zb3VuZE9iai5wbGF5KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc291bmRPYmoucGF1c2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBdHRhY2soZSkge1xyXG4gICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgY2FzZSA3NDpcclxuICAgICAgICB0aGlzLnBsYXllcjEuYmFzaWNBdHRhY2soKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSA5NzpcclxuICAgICAgICB0aGlzLnBsYXllcjIuYmFzaWNBdHRhY2soKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZU1vZGFsKGUpIHtcclxuICAgIGxldCBjbGlja1BvcyA9IHtcclxuICAgICAgeDogZS5wYWdlWCAtIHRoaXMuZG9jdW1lbnRPZmZzZXRYLFxyXG4gICAgICB5OiBlLnBhZ2VZIC0gdGhpcy5kb2N1bWVudE9mZnNldFkgLSA4MFxyXG4gICAgfVxyXG4gICAgaWYgKGNsaWNrUG9zLnggPCAxMjAgfHwgY2xpY2tQb3MueCA+IHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIDEyMFxyXG4gICAgICB8fCBjbGlja1Bvcy55IDwgNjAgfHwgY2xpY2tQb3MueSA+IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLSA2MCkge1xyXG4gICAgICB0aGlzLmN0eC5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVNb2RhbCk7XHJcbiAgICAgIHRoaXMuYW5pbWF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tBdHRhY2tDb2xsaXNpb24oYm91bmQsIGF0dGFja2luZ1BsYXllciwgb3RoZXJQbGF5ZXIpIHtcclxuICAgIGxldCBvdGhlclBsYXllckJvdW5kID0ge1xyXG4gICAgICB4MTogb3RoZXJQbGF5ZXIucG9zLnggLSBBVkFUQVJfQ09OU1RBTlRTLkFWQVRBUl9ESU1FTlNJT05TLndpZHRoIC8gMixcclxuICAgICAgeTE6IG90aGVyUGxheWVyLnBvcy55LFxyXG4gICAgICB4Mjogb3RoZXJQbGF5ZXIucG9zLnggKyBBVkFUQVJfQ09OU1RBTlRTLkFWQVRBUl9ESU1FTlNJT05TLndpZHRoIC8gMixcclxuICAgICAgeTI6IG90aGVyUGxheWVyLnBvcy55ICsgQVZBVEFSX0NPTlNUQU5UUy5BVkFUQVJfRElNRU5TSU9OUy5oZWlnaHRcclxuICAgIH07XHJcbiAgICBpZiAoYm91bmQueCA+PSBvdGhlclBsYXllckJvdW5kLngxICYmIGJvdW5kLnggPD0gb3RoZXJQbGF5ZXJCb3VuZC54Mikge1xyXG4gICAgICBpZiAoYm91bmQueSA+PSBvdGhlclBsYXllckJvdW5kLnkxICYmIGJvdW5kLnkgPD0gb3RoZXJQbGF5ZXJCb3VuZC55Mikge1xyXG4gICAgICAgIGF0dGFja2luZ1BsYXllci5zdGF0ZS5kYW1hZ2VEb25lID0gdHJ1ZTtcclxuICAgICAgICBvdGhlclBsYXllci5zdGF0ZS5oZWFsdGggLT0gYXR0YWNraW5nUGxheWVyLnN0YXRlLmJhc2ljQXR0YWNrRGFtYWdlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxufSIsImltcG9ydCBFbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50JztcclxuXHJcbmNvbnN0IENPTE9SX1BBTEVUVEUgPSB7XHJcbiAgUFJJTUFSWTogJyMwMDA3MEEnLFxyXG4gIFNFQ09OREFSWTogJyMyOTQ1NTInLFxyXG4gIFRFUlRJQVJZOiAnIzU5Nzg4NCcsXHJcbiAgUVVBVEVSTkFSWTogJyM5RUI5QjMnLFxyXG4gIFFVSU5URVJOQVJZOiAnI0FDQzRDRSdcclxufTtcclxuXHJcbmNvbnN0IExFVkVMX0NPTlNUQU5UUyA9IHtcclxuICBNQVhfVElNRTogNjAgKiAxMjAsXHJcbiAgVElNRVJfVEVYVF9IRUlHSFQ6IDc1LFxyXG4gIFRJTUVSX1JBRElVUzogNDUsXHJcbiAgTUFYX0hFQUxUSDogMjAwLFxyXG4gIEhFQUxUSF9CQVI6IHtcclxuICAgIHdpZHRoOiA0MDAsXHJcbiAgICBoZWlnaHQ6IDIwXHJcbiAgfSxcclxuICBPRkZTRVQ6IDIwLFxyXG4gIEVOVklST05NRU5UX1BST0JBQklMSVRZOiA0NSxcclxuICBFTlZJUk9OTUVOVFM6IFsnc2FrdXJhJywgJ3Nub3dmbGFrZSddXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbCB7XHJcbiAgY29uc3RydWN0b3IoY3R4LCBkaW1lbnNpb25zKSB7XHJcbiAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zO1xyXG4gICAgdGhpcy50aW1lID0gTEVWRUxfQ09OU1RBTlRTLk1BWF9USU1FO1xyXG4gICAgdGhpcy5jdHggPSBjdHg7XHJcblxyXG4gICAgdGhpcy5wbGF5ZXJIcFBvcyA9IHtcclxuICAgICAgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMiAtIExFVkVMX0NPTlNUQU5UUy5USU1FUl9SQURJVVMsXHJcbiAgICAgIHk6IExFVkVMX0NPTlNUQU5UUy5USU1FUl9SQURJVVMgLSBMRVZFTF9DT05TVEFOVFMuSEVBTFRIX0JBUi5oZWlnaHQgKyA1XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuYm90SHBQb3MgPSB7XHJcbiAgICAgIHg6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIgKyBMRVZFTF9DT05TVEFOVFMuVElNRVJfUkFESVVTLFxyXG4gICAgICB5OiBMRVZFTF9DT05TVEFOVFMuVElNRVJfUkFESVVTIC0gTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIuaGVpZ2h0ICsgNVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuZW52aXJvbm1lbnQgPSBbXTtcclxuXHJcbiAgICBsZXQgZW52aXJvbm1lbnRJbmRleCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChMRVZFTF9DT05TVEFOVFMuRU5WSVJPTk1FTlRTLmxlbmd0aCAtIDEpKTtcclxuICAgIHRoaXMuZW52aXJvbm1lbnRUeXBlID0gTEVWRUxfQ09OU1RBTlRTLkVOVklST05NRU5UU1tlbnZpcm9ubWVudEluZGV4XTtcclxuXHJcbiAgICB0aGlzLmRyYXdUaW1lckNpcmNsZSA9IHRoaXMuZHJhd1RpbWVyQ2lyY2xlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmRyYXdUaW1lckRpc3BsYXkgPSB0aGlzLmRyYXdUaW1lckRpc3BsYXkuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZHJhd1RpbWVyVGV4dCA9IHRoaXMuZHJhd1RpbWVyVGV4dC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5kcmF3SGVhbHRoQmFycyA9IHRoaXMuZHJhd0hlYWx0aEJhcnMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZHJhd05hbWVzID0gdGhpcy5kcmF3TmFtZXMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZHJhd1BhdXNlID0gdGhpcy5kcmF3UGF1c2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZHJhd0JhY2tncm91bmQgPSB0aGlzLmRyYXdCYWNrZ3JvdW5kLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmRyYXdGbG9vciA9IHRoaXMuZHJhd0Zsb29yLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBhbmltYXRlKHBsYXllckhlYWx0aCwgYm90SGVhbHRoLCBwYXVzZWQpIHtcclxuICAgIGxldCB0aW1lO1xyXG4gICAgbGV0IHdpbm5lcjtcclxuXHJcbiAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKCk7XHJcblxyXG4gICAgbGV0IGVudmlyb25tZW50R2VuZXJhdGlvbiA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIExFVkVMX0NPTlNUQU5UUy5FTlZJUk9OTUVOVF9QUk9CQUJJTElUWSk7XHJcblxyXG4gICAgaWYgKGVudmlyb25tZW50R2VuZXJhdGlvbiA9PT0gMSkge1xyXG4gICAgICBsZXQgbmV3RW52aXJvbm1lbnQgPSBuZXcgRW52aXJvbm1lbnQodGhpcy5jdHgsIHRoaXMuZGltZW5zaW9ucywgdGhpcy5lbnZpcm9ubWVudFR5cGUpO1xyXG4gICAgICB0aGlzLmVudmlyb25tZW50LnB1c2gobmV3RW52aXJvbm1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZW52aXJvbm1lbnQuZm9yRWFjaCgoZW52aXJvbm1lbnQsIGlkeCkgPT4ge1xyXG4gICAgICBlbnZpcm9ubWVudC5hbmltYXRlKCk7XHJcbiAgICAgIGlmIChlbnZpcm9ubWVudC5wb3MueSA+IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgKyA5NCkge1xyXG4gICAgICAgIHRoaXMuZW52aXJvbm1lbnQuc2hpZnQoKTtcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRpbWUgPSB0aGlzLmRyYXdUaW1lcigpO1xyXG4gICAgdGhpcy5kcmF3SGVhbHRoQmFycygpO1xyXG4gICAgd2lubmVyID0gdGhpcy5kcmF3Q3VycmVudEhlYWx0aEJhcnMocGxheWVySGVhbHRoLCBib3RIZWFsdGgpO1xyXG4gICAgdGhpcy5kcmF3TmFtZXMoKTtcclxuICAgIC8vIHRoaXMuZHJhd0Zsb29yKCk7XHJcbiAgICBwYXVzZWQgPyB0aGlzLnBhdXNlZCA9IHRydWUgOiB0aGlzLnBhdXNlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5kcmF3UGF1c2UoKTtcclxuICAgICAgXHJcbiAgICBpZiAodGltZSA9PT0gMCkge1xyXG4gICAgICB0aGlzLmVudmlyb25tZW50ID0gW107XHJcbiAgICAgIHJldHVybiAndGltZVVwJztcclxuICAgIH0gZWxzZSBpZiAod2lubmVyKSB7XHJcbiAgICAgIHRoaXMuZW52aXJvbm1lbnQgPSBbXTtcclxuICAgICAgcmV0dXJuIHdpbm5lcjtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5wYXVzZWQpIHtcclxuICAgICAgcmV0dXJuICdwYXVzZWQnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhd1RpbWVyKCkge1xyXG4gICAgLy8gVE9ETzogTmVlZCBiZXR0ZXIgc29sdXRpb25cclxuICAgIHRoaXMuZHJhd1RpbWVyQ2lyY2xlKCk7XHJcbiAgICB0aGlzLmRyYXdUaW1lckRpc3BsYXkoKTtcclxuICAgIHRoaXMuZHJhd1RpbWVyVGV4dCgpO1xyXG4gICAgXHJcbiAgICB0aGlzLnRpbWUgPSB0aGlzLnRpbWUgLSAxO1xyXG4gICAgaWYgKHRoaXMudGltZSA9PT0gMCkge1xyXG4gICAgICBsZXQgcmV0dXJuVGltZSA9IDA7XHJcbiAgICAgIHRoaXMudGltZSA9IExFVkVMX0NPTlNUQU5UUy5NQVhfVElNRTtcclxuICAgICAgcmV0dXJuIHJldHVyblRpbWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmF3VGltZXJUZXh0KCkge1xyXG4gICAgdGhpcy5jdHguZm9udCA9ICc0OHB4IFRyZWJ1Y2hldCBNUyc7XHJcbiAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdXSElURSc7XHJcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IENPTE9SX1BBTEVUVEUuUFJJTUFSWTtcclxuICAgIHRoaXMuY3R4LmZpbGxUZXh0KFxyXG4gICAgICBgJHtNYXRoLnJvdW5kKHRoaXMudGltZSAvIDYwKX1gLFxyXG4gICAgICB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLFxyXG4gICAgICBMRVZFTF9DT05TVEFOVFMuVElNRVJfVEVYVF9IRUlHSFQgKyAxMFxyXG4gICAgKTtcclxuICAgIHRoaXMuY3R4LnN0cm9rZVRleHQoXHJcbiAgICAgIGAke01hdGgucm91bmQodGhpcy50aW1lIC8gNjApfWAsXHJcbiAgICAgIHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsXHJcbiAgICAgIExFVkVMX0NPTlNUQU5UUy5USU1FUl9URVhUX0hFSUdIVCArIDEwXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZHJhd1RpbWVyQ2lyY2xlKCkge1xyXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBDT0xPUl9QQUxFVFRFLlNFQ09OREFSWTtcclxuICAgIHRoaXMuY3R4LmFyYyhcclxuICAgICAgdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMixcclxuICAgICAgTEVWRUxfQ09OU1RBTlRTLlRJTUVSX1RFWFRfSEVJR0hUIC0gNSxcclxuICAgICAgTEVWRUxfQ09OU1RBTlRTLlRJTUVSX1JBRElVUywgMCwgMiAqIE1hdGguUElcclxuICAgICAgKTtcclxuICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICB9XHJcblxyXG4gIGRyYXdUaW1lckRpc3BsYXkoKSB7XHJcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IENPTE9SX1BBTEVUVEUuUVVBVEVSTkFSWTtcclxuICAgIHRoaXMuY3R4LmFyYyhcclxuICAgICAgdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMixcclxuICAgICAgTEVWRUxfQ09OU1RBTlRTLlRJTUVSX1RFWFRfSEVJR0hUIC0gNSxcclxuICAgICAgTEVWRUxfQ09OU1RBTlRTLlRJTUVSX1JBRElVUyxcclxuICAgICAgLSAwLjUgKiBNYXRoLlBJLFxyXG4gICAgICAoTEVWRUxfQ09OU1RBTlRTLk1BWF9USU1FIC0gdGhpcy50aW1lKVxyXG4gICAgICAqIDIgKiBNYXRoLlBJIC8gTEVWRUxfQ09OU1RBTlRTLk1BWF9USU1FXHJcbiAgICAgIC0gMC41ICogTWF0aC5QSVxyXG4gICAgKTtcclxuICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLFxyXG4gICAgICBMRVZFTF9DT05TVEFOVFMuVElNRVJfVEVYVF9IRUlHSFQgLSA1XHJcbiAgICApO1xyXG4gICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gIH1cclxuXHJcbiAgZHJhd0hlYWx0aEJhcnMoKSB7XHJcbiAgICAvLyBQbGF5ZXIgaGVhbHRoIGNvbnRhaW5lclxyXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICdCTEFDSyc7XHJcbiAgICB0aGlzLmN0eC5tb3ZlVG8oXHJcbiAgICAgIHRoaXMucGxheWVySHBQb3MueCxcclxuICAgICAgdGhpcy5wbGF5ZXJIcFBvcy55XHJcbiAgICApO1xyXG4gICAgdGhpcy5jdHgubGluZVRvKFxyXG4gICAgICB0aGlzLnBsYXllckhwUG9zLnggLSBMRVZFTF9DT05TVEFOVFMuSEVBTFRIX0JBUi53aWR0aCxcclxuICAgICAgdGhpcy5wbGF5ZXJIcFBvcy55XHJcbiAgICApO1xyXG4gICAgdGhpcy5jdHgubGluZVRvKFxyXG4gICAgICB0aGlzLnBsYXllckhwUG9zLnggLSBMRVZFTF9DT05TVEFOVFMuSEVBTFRIX0JBUi53aWR0aCxcclxuICAgICAgdGhpcy5wbGF5ZXJIcFBvcy55ICsgTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIuaGVpZ2h0XHJcbiAgICApO1xyXG4gICAgdGhpcy5jdHgubGluZVRvKFxyXG4gICAgICB0aGlzLnBsYXllckhwUG9zLnggLSBMRVZFTF9DT05TVEFOVFMuT0ZGU0VULFxyXG4gICAgICB0aGlzLnBsYXllckhwUG9zLnkgKyBMRVZFTF9DT05TVEFOVFMuSEVBTFRIX0JBUi5oZWlnaHRcclxuICAgICk7XHJcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG5cclxuICAgIC8vYm90IGhlYWx0aCBjb250YWluZXJcclxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnQkxBQ0snO1xyXG4gICAgdGhpcy5jdHgubW92ZVRvKFxyXG4gICAgICB0aGlzLmJvdEhwUG9zLngsXHJcbiAgICAgIHRoaXMuYm90SHBQb3MueVxyXG4gICAgKTtcclxuICAgIHRoaXMuY3R4LmxpbmVUbyhcclxuICAgICAgdGhpcy5ib3RIcFBvcy54ICsgTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIud2lkdGgsXHJcbiAgICAgIHRoaXMuYm90SHBQb3MueVxyXG4gICAgKTtcclxuICAgIHRoaXMuY3R4LmxpbmVUbyhcclxuICAgICAgdGhpcy5ib3RIcFBvcy54ICsgTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIud2lkdGgsXHJcbiAgICAgIHRoaXMuYm90SHBQb3MueSArIExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLmhlaWdodFxyXG4gICAgKTtcclxuICAgIHRoaXMuY3R4LmxpbmVUbyhcclxuICAgICAgdGhpcy5ib3RIcFBvcy54ICsgTEVWRUxfQ09OU1RBTlRTLk9GRlNFVCxcclxuICAgICAgdGhpcy5ib3RIcFBvcy55ICsgTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIuaGVpZ2h0XHJcbiAgICApO1xyXG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XHJcbiAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIGRyYXdDdXJyZW50SGVhbHRoQmFycyhwbGF5ZXJIZWFsdGgsIGJvdEhlYWx0aCkge1xyXG5cclxuICAgIGlmIChwbGF5ZXJIZWFsdGggPD0gMCkge1xyXG4gICAgICByZXR1cm4gJ3BsYXllcjInO1xyXG4gICAgfSBlbHNlIGlmIChib3RIZWFsdGggPD0gMCkge1xyXG4gICAgICByZXR1cm4gJ3BsYXllcjEnO1xyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgY3VycmVudEhlYWx0aCA9IExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLndpZHRoICogcGxheWVySGVhbHRoIC8gTEVWRUxfQ09OU1RBTlRTLk1BWF9IRUFMVEg7XHJcblxyXG4gICAgLy8gUGxheWVyIGN1cnJlbnQgaGVhbHRoXHJcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdSRUQnO1xyXG4gICAgdGhpcy5jdHgubW92ZVRvKFxyXG4gICAgICB0aGlzLnBsYXllckhwUG9zLngsXHJcbiAgICAgIHRoaXMucGxheWVySHBQb3MueVxyXG4gICAgKTtcclxuICAgIHRoaXMuY3R4LmxpbmVUbyhcclxuICAgICAgdGhpcy5wbGF5ZXJIcFBvcy54IC0gY3VycmVudEhlYWx0aCxcclxuICAgICAgdGhpcy5wbGF5ZXJIcFBvcy55XHJcbiAgICApO1xyXG4gICAgaWYgKGN1cnJlbnRIZWFsdGggPCBMRVZFTF9DT05TVEFOVFMuT0ZGU0VUKSB7XHJcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyhcclxuICAgICAgICB0aGlzLnBsYXllckhwUG9zLnggLSBjdXJyZW50SGVhbHRoLFxyXG4gICAgICAgIC8vIGN1cnJlbnRIZWFsdGggPSBjdXJyZW50SGVhbHRoICogdGFuKHBpLzQpXHJcbiAgICAgICAgLy8gc2luY2Ugb2Zmc2V0ID0gaGVpZ2h0XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJIcFBvcy55ICsgY3VycmVudEhlYWx0aFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jdHgubGluZVRvKFxyXG4gICAgICAgIHRoaXMucGxheWVySHBQb3MueCAtIGN1cnJlbnRIZWFsdGgsXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJIcFBvcy55ICsgTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIuaGVpZ2h0XHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyhcclxuICAgICAgICB0aGlzLnBsYXllckhwUG9zLnggLSBMRVZFTF9DT05TVEFOVFMuT0ZGU0VULFxyXG4gICAgICAgIHRoaXMucGxheWVySHBQb3MueSArIExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLmhlaWdodFxyXG4gICAgICApO1xyXG4gICAgfTtcclxuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgdGhpcy5jdHguZmlsbCgpO1xyXG5cclxuICAgIGxldCBjdXJyZW50Qm90SGVhbHRoID0gTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIud2lkdGggKiBib3RIZWFsdGggLyBMRVZFTF9DT05TVEFOVFMuTUFYX0hFQUxUSDtcclxuXHJcbiAgICAvLyBCb3QgY3VycmVudCBoZWFsdGhcclxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ1JFRCc7XHJcbiAgICB0aGlzLmN0eC5tb3ZlVG8oXHJcbiAgICAgIHRoaXMuYm90SHBQb3MueCxcclxuICAgICAgdGhpcy5ib3RIcFBvcy55XHJcbiAgICApO1xyXG4gICAgdGhpcy5jdHgubGluZVRvKFxyXG4gICAgICB0aGlzLmJvdEhwUG9zLnggKyBjdXJyZW50Qm90SGVhbHRoLFxyXG4gICAgICB0aGlzLmJvdEhwUG9zLnlcclxuICAgICk7XHJcbiAgICBpZiAoY3VycmVudEJvdEhlYWx0aCA8IExFVkVMX0NPTlNUQU5UUy5PRkZTRVQpIHtcclxuICAgICAgdGhpcy5jdHgubGluZVRvKFxyXG4gICAgICAgIHRoaXMuYm90SHBQb3MueCArIGN1cnJlbnRCb3RIZWFsdGgsXHJcbiAgICAgICAgLy8gY3VycmVudEJvdEhlYWx0aCA9IGN1cnJlbnRCb3RIZWFsdGggKiB0YW4ocGkvNClcclxuICAgICAgICAvLyBzaW5jZSBvZmZzZXQgPSBoZWlnaHRcclxuICAgICAgICB0aGlzLmJvdEhwUG9zLnkgKyBjdXJyZW50Qm90SGVhbHRoXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmN0eC5saW5lVG8oXHJcbiAgICAgICAgdGhpcy5ib3RIcFBvcy54ICsgY3VycmVudEJvdEhlYWx0aCxcclxuICAgICAgICB0aGlzLmJvdEhwUG9zLnkgKyBMRVZFTF9DT05TVEFOVFMuSEVBTFRIX0JBUi5oZWlnaHRcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5jdHgubGluZVRvKFxyXG4gICAgICAgIHRoaXMuYm90SHBQb3MueCArIExFVkVMX0NPTlNUQU5UUy5PRkZTRVQsXHJcbiAgICAgICAgdGhpcy5ib3RIcFBvcy55ICsgTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIuaGVpZ2h0XHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XHJcbiAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgfVxyXG5cclxuICBkcmF3TmFtZXMoKSB7XHJcbiAgICBsZXQgcGxheWVyTmFtZSA9ICdQbGF5ZXIgMSc7XHJcbiAgICBsZXQgYm90TmFtZSA9ICdQbGF5ZXIgMic7XHJcbiAgICBsZXQgcGxheWVyTmFtZVBvcyA9IHtcclxuICAgICAgeDogdGhpcy5wbGF5ZXJIcFBvcy54IC0gTEVWRUxfQ09OU1RBTlRTLk9GRlNFVCxcclxuICAgICAgeTogdGhpcy5wbGF5ZXJIcFBvcy55ICsgTEVWRUxfQ09OU1RBTlRTLlRJTUVSX1JBRElVUyArIDRcclxuICAgIH07XHJcbiAgICBsZXQgYm90TmFtZVBvcyA9IHtcclxuICAgICAgeDogdGhpcy5ib3RIcFBvcy54ICsgTEVWRUxfQ09OU1RBTlRTLk9GRlNFVCxcclxuICAgICAgeTogdGhpcy5ib3RIcFBvcy55ICsgTEVWRUxfQ09OU1RBTlRTLlRJTUVSX1JBRElVUyArIDRcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5jdHguZm9udCA9ICczMnB4IFRyZWJ1Y2hldCBNUyc7XHJcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xyXG4gICAgdGhpcy5jdHgubGluZVdpZHRoID0gMC41O1xyXG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBDT0xPUl9QQUxFVFRFLlNFQ09OREFSWTtcclxuICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9ICdyaWdodCc7XHJcbiAgICB0aGlzLmN0eC5maWxsVGV4dChwbGF5ZXJOYW1lLCBwbGF5ZXJOYW1lUG9zLngsIHBsYXllck5hbWVQb3MueSk7XHJcbiAgICB0aGlzLmN0eC5zdHJva2VUZXh0KHBsYXllck5hbWUsIHBsYXllck5hbWVQb3MueCwgcGxheWVyTmFtZVBvcy55KTtcclxuXHJcbiAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSAnbGVmdCc7XHJcbiAgICB0aGlzLmN0eC5maWxsVGV4dChib3ROYW1lLCBib3ROYW1lUG9zLngsIGJvdE5hbWVQb3MueSk7XHJcbiAgICB0aGlzLmN0eC5zdHJva2VUZXh0KGJvdE5hbWUsIGJvdE5hbWVQb3MueCwgYm90TmFtZVBvcy55KTtcclxuICB9XHJcblxyXG4gIGRyYXdQYXVzZSgpIHtcclxuICAgIC8vIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgLy8gLy8gdGhpcy5jdHgucmVjdCh0aGlzLmRpbWVuc2lvbnMud2lkdGggLSA1MCAtIDIwLCAyMCwgNTAsIDUwKTtcclxuICAgIC8vIHRoaXMuY3R4LnJlY3QodGhpcy5kaW1lbnNpb25zLndpZHRoIC0gNTAgLSAxMCwgMjUsIDMwLCA0MCk7XHJcbiAgICAvLyB0aGlzLmN0eC5zdHJva2UoKTtcclxuXHJcbiAgICBpZiAoIXRoaXMucGF1c2VkKSB7XHJcbiAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBDT0xPUl9QQUxFVFRFLlFVSU5URVJOQVJZO1xyXG4gICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IENPTE9SX1BBTEVUVEUuUFJJTUFSWTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuY3R4LnJlY3QodGhpcy5kaW1lbnNpb25zLndpZHRoIC0gNTAgLSAxMCwgMjUsIDEwLCA0MCk7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgdGhpcy5jdHgucmVjdCh0aGlzLmRpbWVuc2lvbnMud2lkdGggLSA1MCArIDEwLCAyNSwgMTAsIDQwKTtcclxuICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gQ09MT1JfUEFMRVRURS5RVUlOVEVSTkFSWTtcclxuICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBDT0xPUl9QQUxFVFRFLlBSSU1BUlk7XHJcbiAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLmRpbWVuc2lvbnMud2lkdGggLSA1MCAtIDEwLCAyNSk7XHJcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmRpbWVuc2lvbnMud2lkdGggLSA1MCAtIDEwLCA2NSk7XHJcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLmRpbWVuc2lvbnMud2lkdGggLSA1MCArIDIwLCA0NSk7XHJcbiAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3doaXRlJztcclxuICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gMS41O1xyXG5cclxuICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICAgIHRoaXMuY3R4LmZvbnQgPSAnNTZweCBUcmVidWNoZXQgTVMnO1xyXG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcclxuICAgICAgICAnR2FtZSBwYXVzZWQnLFxyXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsXHJcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDIgLSAzNlxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmN0eC5zdHJva2VUZXh0KFxyXG4gICAgICAgICdHYW1lIHBhdXNlZCcsXHJcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMixcclxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiAtIDM2XHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuICAgICAgdGhpcy5jdHguZm9udCA9ICczNnB4IFRyZWJ1Y2hldCBNUyc7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFxyXG4gICAgICAgICdQcmVzcyBwbGF5IHRvIGNvbnRpbnVlJyxcclxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLFxyXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyICsgMzZcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5jdHguc3Ryb2tlVGV4dChcclxuICAgICAgICAnUHJlc3MgcGxheSB0byBjb250aW51ZScsXHJcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMixcclxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiArIDM2XHJcbiAgICAgIClcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBkcmF3QmFja2dyb3VuZCgpIHtcclxuICAgIGxldCBiYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XHJcbiAgICBiYWNrZ3JvdW5kLnNyYyA9ICdmcm9udGVuZC9hc3NldHMvaW1hZ2VzL2dhbWUtYmFja2dyb3VuZC5qcGcnO1xyXG4gICAgLy8gYmFja2dyb3VuZC5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCAwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiAgLy8gVE9ETzogUHJvYmFibHkgdGVtcG9yYXJ5XHJcbiAgZHJhd0Zsb29yKCkge1xyXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ0JST1dOJztcclxuICAgIHRoaXMuY3R4LmZpbGxSZWN0KFxyXG4gICAgICAwLCBcclxuICAgICAgdGhpcy5kaW1lbnNpb25zLmhlaWdodCAtIDEsIFxyXG4gICAgICB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIFxyXG4gICAgICAxNTVcclxuICAgICk7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==