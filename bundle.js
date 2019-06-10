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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvYXZhdGFyLmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2VudHJ5LmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL2Zyb250ZW5kL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvbGV2ZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLFNBQVMsY0FBYztBQUN2QixTQUFTLGNBQWM7QUFDdkIsWUFBWSxhQUFhO0FBQ3pCLFNBQVMsYUFBYTtBQUN0QixHQUFHO0FBQ0g7QUFDQSxTQUFTLGNBQWM7QUFDdkIsU0FBUyxjQUFjO0FBQ3ZCLFlBQVksYUFBYTtBQUN6QixTQUFTLGFBQWE7QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN6V0E7QUFBQTtBQUEyQjs7QUFFM0I7QUFDQTtBQUNBLE1BQU0sNkNBQUs7QUFDWDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNsRUE7QUFBQTtBQUFBO0FBQUE7QUFBNEI7QUFDRTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQiw4Q0FBSztBQUMxQix1QkFBdUIsK0NBQU07QUFDN0IsdUJBQXVCLCtDQUFNO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxZQUFZO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDdldBO0FBQUE7QUFBQTtBQUF3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLCtCQUErQixvREFBVztBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsMkJBQTJCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUywyQkFBMkI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6Ii4vYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9mcm9udGVuZC9lbnRyeS5qc1wiKTtcbiIsImNvbnN0IEFWQVRBUl9DT05TVEFOVFMgPSB7XHJcbiAgQVZBVEFSX0RJTUVOU0lPTlM6IHtcclxuICAgIHdpZHRoOiAxNTAsXHJcbiAgICBoZWlnaHQ6IDMwMFxyXG4gIH0sXHJcbiAgR1JBVklUWTogLTEuOCxcclxuICBQMV9NT1ZFTUVOVDoge1xyXG4gICAgODc6IHsgeDogMCwgeTogLTEgfSxcclxuICAgIDY1OiB7IHg6IC0xLCB5OiAwIH0sXHJcbiAgICAvLyA4MzogeyB4OiAwLCB5OiAxIH0sXHJcbiAgICA2ODogeyB4OiAxLCB5OiAwIH0sXHJcbiAgfSxcclxuICBQMl9NT1ZFTUVOVDoge1xyXG4gICAgMzg6IHsgeDogMCwgeTogLTEgfSxcclxuICAgIDM3OiB7IHg6IC0xLCB5OiAwIH0sXHJcbiAgICAvLyA0MDogeyB4OiAwLCB5OiAxIH0sXHJcbiAgICAzOTogeyB4OiAxLCB5OiAwIH0sXHJcbiAgfSxcclxuICBNT1ZFTUVOVF9TUEVFRDoge1xyXG4gICAgeDogMTAsXHJcbiAgICB5OiAzMFxyXG4gIH0sXHJcbiAgTUFYX0hFQUxUSDogMjAwLFxyXG4gIFNSSVRFU0hFRVQ6IHtcclxuICAgIFdBTEtJTkc6IHtcclxuICAgICAgMToge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMjAyLFxyXG4gICAgICAgIHc6IDUwLFxyXG4gICAgICAgIGg6IDk4XHJcbiAgICAgIH0sXHJcbiAgICAgIDI6IHtcclxuICAgICAgICB4OiA1MCxcclxuICAgICAgICB5OiAyMDIsXHJcbiAgICAgICAgdzogNTAsXHJcbiAgICAgICAgaDogOThcclxuICAgICAgfSxcclxuICAgICAgMzoge1xyXG4gICAgICAgIHg6IDEwMCxcclxuICAgICAgICB5OiAyMDIsXHJcbiAgICAgICAgdzogNjUsXHJcbiAgICAgICAgaDogOThcclxuICAgICAgfSxcclxuICAgICAgNDoge1xyXG4gICAgICAgIHg6IDE2NSxcclxuICAgICAgICB5OiAyMDIsXHJcbiAgICAgICAgdzogNzUsXHJcbiAgICAgICAgaDogOThcclxuICAgICAgfSxcclxuICAgICAgNToge1xyXG4gICAgICAgIHg6IDI0MCxcclxuICAgICAgICB5OiAyMDIsXHJcbiAgICAgICAgdzogNjAsXHJcbiAgICAgICAgaDogOThcclxuICAgICAgfSxcclxuICAgICAgNjoge1xyXG4gICAgICAgIHg6IDMwMCxcclxuICAgICAgICB5OiAyMDMsXHJcbiAgICAgICAgdzogNzAsXHJcbiAgICAgICAgaDogOTdcclxuICAgICAgfSxcclxuICAgICAgNzoge1xyXG4gICAgICAgIHg6IDM3MCxcclxuICAgICAgICB5OiAyMDIsXHJcbiAgICAgICAgdzogODAsXHJcbiAgICAgICAgaDogOThcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIElETEU6IHtcclxuICAgICAgMToge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMzAxLFxyXG4gICAgICAgIHc6IDc1LFxyXG4gICAgICAgIGg6IDk2XHJcbiAgICAgIH0sXHJcbiAgICAgIDI6IHtcclxuICAgICAgICB4OiA3NSxcclxuICAgICAgICB5OiAzMDEsXHJcbiAgICAgICAgdzogNzUsXHJcbiAgICAgICAgaDogOTZcclxuICAgICAgfSxcclxuICAgICAgMzoge1xyXG4gICAgICAgIHg6IDE1MCxcclxuICAgICAgICB5OiAzMDEsXHJcbiAgICAgICAgdzogNzUsXHJcbiAgICAgICAgaDogOTZcclxuICAgICAgfSxcclxuICAgICAgNDoge1xyXG4gICAgICAgIHg6IDIyNSxcclxuICAgICAgICB5OiAzMDEsXHJcbiAgICAgICAgdzogNzUsXHJcbiAgICAgICAgaDogOTZcclxuICAgICAgfSxcclxuICAgICAgNToge1xyXG4gICAgICAgIHg6IDMwMCxcclxuICAgICAgICB5OiAzMDEsXHJcbiAgICAgICAgdzogNzUsXHJcbiAgICAgICAgaDogOTZcclxuICAgICAgfSxcclxuICAgICAgNjoge1xyXG4gICAgICAgIHg6IDM3NSxcclxuICAgICAgICB5OiAzMDEsXHJcbiAgICAgICAgdzogNzUsXHJcbiAgICAgICAgaDogOTZcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIEpVTVA6IHtcclxuICAgICAgMToge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogOTUsXHJcbiAgICAgICAgdzogNzQsXHJcbiAgICAgICAgaDogMTA3XHJcbiAgICAgIH0sXHJcbiAgICAgIDI6IHtcclxuICAgICAgICB4OiA3NCxcclxuICAgICAgICB5OiA5NSxcclxuICAgICAgICB3OiA3NCxcclxuICAgICAgICBoOiAxMDdcclxuICAgICAgfSxcclxuICAgICAgMzoge1xyXG4gICAgICAgIHg6IDE0OCxcclxuICAgICAgICB5OiA5NSxcclxuICAgICAgICB3OiA3NCxcclxuICAgICAgICBoOiAxMDdcclxuICAgICAgfSxcclxuICAgICAgNDoge1xyXG4gICAgICAgIHg6IDIyMixcclxuICAgICAgICB5OiA5NSxcclxuICAgICAgICB3OiA3NCxcclxuICAgICAgICBoOiAxMDdcclxuICAgICAgfSxcclxuICAgICAgNToge1xyXG4gICAgICAgIHg6IDI5NixcclxuICAgICAgICB5OiA5NSxcclxuICAgICAgICB3OiA3NCxcclxuICAgICAgICBoOiAxMDdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIEFUVEFDSzoge1xyXG4gICAgICAxOiB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwLFxyXG4gICAgICAgIHc6IDEwNCxcclxuICAgICAgICBoOiA5NVxyXG4gICAgICB9LFxyXG4gICAgICAyOiB7XHJcbiAgICAgICAgeDogMTA0LFxyXG4gICAgICAgIHk6IDAsXHJcbiAgICAgICAgdzogMTA0LFxyXG4gICAgICAgIGg6IDk1XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF2YXRhciB7XHJcbiAgY29uc3RydWN0b3IoY3R4LCBkaW1lbnNpb25zLCBwbGF5ZXJOdW0pIHtcclxuICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9ucztcclxuICAgIHRoaXMucGxheWVyTnVtID0gcGxheWVyTnVtO1xyXG5cclxuICAgIGxldCBzdGFydGluZ1ggPSBwbGF5ZXJOdW0gPT09IDEgPyA1MCA6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIDUwO1xyXG4gICAgdGhpcy5wb3MgPSB7XHJcbiAgICAgIHg6IHN0YXJ0aW5nWCAtIEFWQVRBUl9DT05TVEFOVFMuQVZBVEFSX0RJTUVOU0lPTlMud2lkdGggLyAyLFxyXG4gICAgICB5OiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC0gQVZBVEFSX0NPTlNUQU5UUy5BVkFUQVJfRElNRU5TSU9OUy5oZWlnaHQgLSAxXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMudmVsID0ge1xyXG4gICAgICB2eDogMCxcclxuICAgICAgdnk6IDBcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBoZWFsdGg6IEFWQVRBUl9DT05TVEFOVFMuTUFYX0hFQUxUSCxcclxuICAgICAgYmFzaWNBdHRhY2tpbmc6IGZhbHNlLFxyXG4gICAgICBkYW1hZ2VEb25lOiBmYWxzZSxcclxuICAgICAgYmFzaWNBdHRhY2tIaXRib3g6IHtcclxuICAgICAgICB3OiBBVkFUQVJfQ09OU1RBTlRTLkFWQVRBUl9ESU1FTlNJT05TLndpZHRoIC8gMiArIDQwLFxyXG4gICAgICAgIGg6IDEwXHJcbiAgICAgIH0sXHJcbiAgICAgIGJhc2ljQXR0YWNrRGFtYWdlOiAxMCxcclxuICAgICAgZmFjaW5nOiBwbGF5ZXJOdW0gPT09IDEgPyAxIDogLTEsXHJcbiAgICAgIGJhc2ljQXR0YWNrS2V5Y29kZTogcGxheWVyTnVtID09PSAxID8gNzQgOiA5NyxcclxuICAgICAgbW92ZW1lbnQ6ICdpZGxlJ1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLmtleUNvZGVNb3ZlbWVudCA9IHRoaXMucGxheWVyTnVtID09PSAxID8gXHJcbiAgICAgIEFWQVRBUl9DT05TVEFOVFMuUDFfTU9WRU1FTlQgOiBBVkFUQVJfQ09OU1RBTlRTLlAyX01PVkVNRU5UO1xyXG4gICAgdGhpcy5rZXlwcmVzc1BPSk8gPSB7fTtcclxuICAgIE9iamVjdC5rZXlzKHRoaXMua2V5Q29kZU1vdmVtZW50KS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgdGhpcy5rZXlwcmVzc1BPSk9ba2V5XSA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNwcml0ZVNoZWV0ID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLnNwcml0ZVNoZWV0LnNyYyA9ICdmcm9udGVuZC9hc3NldHMvaW1hZ2VzL3J5dS1zcHJpdGUtc2hlZXQucG5nJztcclxuXHJcbiAgICB0aGlzLmFuaW1hdGlvblRpbWVyID0gMDtcclxuXHJcbiAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZHJhd0F2YXRhciA9IHRoaXMuZHJhd0F2YXRhci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5tb3ZlQXZhdGFyID0gdGhpcy5tb3ZlQXZhdGFyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnN0b3BBdmF0YXIgPSB0aGlzLnN0b3BBdmF0YXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuY2hlY2tCb3VuZGFyeSA9IHRoaXMuY2hlY2tCb3VuZGFyeS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbiA9IHRoaXMudXBkYXRlUG9zaXRpb24uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuYmFzaWNBdHRhY2sgPSB0aGlzLmJhc2ljQXR0YWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmRyYXdCYXNpY0F0dGFjayA9IHRoaXMuZHJhd0Jhc2ljQXR0YWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZUF0dGFjayA9IHRoaXMuaGFuZGxlQXR0YWNrLmJpbmQodGhpcyk7XHJcblxyXG4gICAgLy9UT0RPOiBJUyBUSEVSRSBBIEJFVFRFUiBTT0xVVElPTj9cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUF0dGFjayk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5tb3ZlQXZhdGFyKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5zdG9wQXZhdGFyKTtcclxuICB9XHJcblxyXG4gIGFuaW1hdGUocGF1c2VkKSB7XHJcbiAgICB0aGlzLnBhdXNlZCA9ICEhcGF1c2VkO1xyXG4gICAgdGhpcy5hbmltYXRpb25UaW1lciArPSAwLjA1O1xyXG4gICAgaWYgKCF0aGlzLnBhdXNlZCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy52ZWwudnggPT09IDAgJiYgdGhpcy52ZWwudnkgPT09IDApIHtcclxuICAgICAgdGhpcy5zdGF0ZS5tb3ZlbWVudCA9ICdpZGxlJztcclxuICAgIH1cclxuICAgIGxldCBib3VuZHM7XHJcbiAgICBpZiAoIXRoaXMucGF1c2VkKSB7XHJcbiAgICAgIHRoaXMuZHJhd0Jhc2ljQXR0YWNrKCk7XHJcbiAgICAgIGJvdW5kcyA9IHtcclxuICAgICAgICB4OiB0aGlzLnBvcy54ICsgdGhpcy5zdGF0ZS5mYWNpbmcgKiB0aGlzLnN0YXRlLmJhc2ljQXR0YWNrSGl0Ym94LncsXHJcbiAgICAgICAgeTogdGhpcy5wb3MueSArIHRoaXMuc3RhdGUuYmFzaWNBdHRhY2tIaXRib3guaFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmRyYXdBdmF0YXIoKTtcclxuICAgIHJldHVybiBib3VuZHM7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQb3NpdGlvbigpIHtcclxuICAgIE9iamVjdC5rZXlzKHRoaXMua2V5cHJlc3NQT0pPKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgaWYgKHRoaXMua2V5cHJlc3NQT0pPW2tleV0pIHtcclxuICAgICAgICAvLyBLZXlwcmVzcyBtb3ZlbWVudFxyXG4gICAgICAgIGlmICh0aGlzLmtleUNvZGVNb3ZlbWVudFtrZXldLnggIT09IDApIHtcclxuICAgICAgICAgIHRoaXMudmVsLnZ4ID0gdGhpcy5rZXlDb2RlTW92ZW1lbnRba2V5XS54XHJcbiAgICAgICAgICAgICogQVZBVEFSX0NPTlNUQU5UUy5NT1ZFTUVOVF9TUEVFRC54O1xyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5mYWNpbmcgPSB0aGlzLmtleUNvZGVNb3ZlbWVudFtrZXldLng7XHJcbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5tb3ZlbWVudCAhPT0gJ2p1bXAnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUubW92ZW1lbnQgPSAnbW92ZVgnO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIFByZXZlbnQgaW5maW5pdGUganVtcFxyXG4gICAgICAgIGlmICh0aGlzLnBvcy55ID09PSB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC0gMSAtIEFWQVRBUl9DT05TVEFOVFMuQVZBVEFSX0RJTUVOU0lPTlMuaGVpZ2h0KSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5rZXlDb2RlTW92ZW1lbnRba2V5XS55ICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVsLnZ5ID0gdGhpcy5rZXlDb2RlTW92ZW1lbnRba2V5XS55XHJcbiAgICAgICAgICAgICAgKiBBVkFUQVJfQ09OU1RBTlRTLk1PVkVNRU5UX1NQRUVELnk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUubW92ZW1lbnQgPSAnanVtcCc7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy52ZWwudnkgLT0gQVZBVEFSX0NPTlNUQU5UUy5HUkFWSVRZO1xyXG4gICAgdGhpcy5wb3MueSArPSB0aGlzLnZlbC52eTtcclxuICAgIHRoaXMucG9zLnggKz0gdGhpcy52ZWwudng7XHJcbiAgICB0aGlzLmNoZWNrQm91bmRhcnkoKTtcclxuICB9XHJcblxyXG4gIG1vdmVBdmF0YXIoZSkge1xyXG4gICAgaWYgKCF0aGlzLnBhdXNlZCAmJiAhZS5yZXBlYXQpIHtcclxuICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMua2V5Q29kZU1vdmVtZW50KS5pbmNsdWRlcyhlLmtleUNvZGUudG9TdHJpbmcoKSkpIHtcclxuICAgICAgICB0aGlzLmtleXByZXNzUE9KT1tlLmtleUNvZGUudG9TdHJpbmcoKV0gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RvcEF2YXRhcihlKSB7XHJcbiAgICB0aGlzLnZlbC52eCA9IDA7XHJcbiAgICB0aGlzLmtleXByZXNzUE9KT1tlLmtleUNvZGUudG9TdHJpbmcoKV0gPSBmYWxzZTtcclxuICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcclxuICB9XHJcbiAgXHJcbiAgZHJhd0F2YXRhcigpIHtcclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMucGxheWVyTnVtID09PSAxID8gJ0JsdWUnIDogJ1JlZCc7XHJcbiAgICBsZXQgY3VycmVudFNwcml0ZVNsaWNlSWR4O1xyXG4gICAgbGV0IGN1cnJlbnRTcHJpdGVTbGljZTtcclxuICAgIGxldCBhdHRhY2tPZmZzZXQgPSAwO1xyXG4gICAgc3dpdGNoICh0aGlzLnN0YXRlLm1vdmVtZW50KSB7XHJcbiAgICAgIGNhc2UgJ2lkbGUnOlxyXG4gICAgICAgIGN1cnJlbnRTcHJpdGVTbGljZUlkeCA9IDEgKyBNYXRoLnJvdW5kKHRoaXMuYW5pbWF0aW9uVGltZXIgJSAoT2JqZWN0LmtleXMoQVZBVEFSX0NPTlNUQU5UUy5TUklURVNIRUVULklETEUpLmxlbmd0aCAtIDEpKTtcclxuICAgICAgICBjdXJyZW50U3ByaXRlU2xpY2UgPSBBVkFUQVJfQ09OU1RBTlRTLlNSSVRFU0hFRVQuSURMRVtjdXJyZW50U3ByaXRlU2xpY2VJZHhdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdtb3ZlWCc6XHJcbiAgICAgICAgY3VycmVudFNwcml0ZVNsaWNlSWR4ID0gMSArIE1hdGgucm91bmQoMiAqIHRoaXMuYW5pbWF0aW9uVGltZXIgJSAoT2JqZWN0LmtleXMoQVZBVEFSX0NPTlNUQU5UUy5TUklURVNIRUVULldBTEtJTkcpLmxlbmd0aCAtIDEpKTtcclxuICAgICAgICBjdXJyZW50U3ByaXRlU2xpY2UgPSBBVkFUQVJfQ09OU1RBTlRTLlNSSVRFU0hFRVQuV0FMS0lOR1tjdXJyZW50U3ByaXRlU2xpY2VJZHhdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdqdW1wJzpcclxuICAgICAgICBjdXJyZW50U3ByaXRlU2xpY2VJZHggPSAxICsgTWF0aC5yb3VuZCgyICogdGhpcy5hbmltYXRpb25UaW1lciAlIChPYmplY3Qua2V5cyhBVkFUQVJfQ09OU1RBTlRTLlNSSVRFU0hFRVQuSlVNUCkubGVuZ3RoIC0gMSkpO1xyXG4gICAgICAgIGN1cnJlbnRTcHJpdGVTbGljZSA9IEFWQVRBUl9DT05TVEFOVFMuU1JJVEVTSEVFVC5KVU1QW2N1cnJlbnRTcHJpdGVTbGljZUlkeF07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2F0dGFjayc6XHJcbiAgICAgICAgY3VycmVudFNwcml0ZVNsaWNlSWR4ID0gMSArIE1hdGgucm91bmQodGhpcy5hbmltYXRpb25UaW1lciAlIChPYmplY3Qua2V5cyhBVkFUQVJfQ09OU1RBTlRTLlNSSVRFU0hFRVQuQVRUQUNLKS5sZW5ndGggLSAxKSk7XHJcbiAgICAgICAgY3VycmVudFNwcml0ZVNsaWNlID0gQVZBVEFSX0NPTlNUQU5UUy5TUklURVNIRUVULkFUVEFDS1tjdXJyZW50U3ByaXRlU2xpY2VJZHhdO1xyXG4gICAgICAgIGF0dGFja09mZnNldCA9IDUwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jdHguc2F2ZSgpO1xyXG4gICAgdGhpcy5jdHguc2NhbGUodGhpcy5zdGF0ZS5mYWNpbmcsIDEpO1xyXG4gICAgbGV0IG9mZnNldCA9IDA7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5mYWNpbmcgPT09IC0xKSB7XHJcbiAgICAgIG9mZnNldCA9IEFWQVRBUl9DT05TVEFOVFMuQVZBVEFSX0RJTUVOU0lPTlMud2lkdGg7XHJcbiAgICB9XHJcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgIHRoaXMuc3ByaXRlU2hlZXQsXHJcbiAgICAgIGN1cnJlbnRTcHJpdGVTbGljZS54LFxyXG4gICAgICBjdXJyZW50U3ByaXRlU2xpY2UueSxcclxuICAgICAgY3VycmVudFNwcml0ZVNsaWNlLncsXHJcbiAgICAgIGN1cnJlbnRTcHJpdGVTbGljZS5oLFxyXG4gICAgICB0aGlzLnN0YXRlLmZhY2luZyAqIHRoaXMucG9zLnggLSBvZmZzZXQsXHJcbiAgICAgIHRoaXMucG9zLnksXHJcbiAgICAgIEFWQVRBUl9DT05TVEFOVFMuQVZBVEFSX0RJTUVOU0lPTlMud2lkdGggKyBhdHRhY2tPZmZzZXQsXHJcbiAgICAgIEFWQVRBUl9DT05TVEFOVFMuQVZBVEFSX0RJTUVOU0lPTlMuaGVpZ2h0XHJcbiAgICApO1xyXG4gICAgdGhpcy5jdHgucmVzdG9yZSgpO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tCb3VuZGFyeSgpIHtcclxuICAgIGxldCBtYXhPZmZzZXQgPSB0aGlzLnBsYXllck51bSA9PT0gMSA/IDAgOiBBVkFUQVJfQ09OU1RBTlRTLkFWQVRBUl9ESU1FTlNJT05TLndpZHRoO1xyXG4gICAgbGV0IG1pbk9mZnNldCA9IHRoaXMucGxheWVyTnVtID09PSAyID8gMCA6IEFWQVRBUl9DT05TVEFOVFMuQVZBVEFSX0RJTUVOU0lPTlMud2lkdGg7XHJcbiAgICBpZiAodGhpcy5wb3MueCA8IDApIHtcclxuICAgICAgdGhpcy5wb3MueCA9IDA7XHJcbiAgICAgIHRoaXMudmVsLnZ4ID0gMDtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5wb3MueCA+IHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIG1heE9mZnNldCAtIG1pbk9mZnNldCkge1xyXG4gICAgICB0aGlzLnBvcy54ID0gdGhpcy5kaW1lbnNpb25zLndpZHRoIC0gbWF4T2Zmc2V0IC0gbWluT2Zmc2V0O1xyXG4gICAgICB0aGlzLnZlbC52eCA9IDA7XHJcbiAgICB9O1xyXG4gICAgaWYgKHRoaXMucG9zLnkgPiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC0gMSAtIEFWQVRBUl9DT05TVEFOVFMuQVZBVEFSX0RJTUVOU0lPTlMuaGVpZ2h0KSB7XHJcbiAgICAgIHRoaXMucG9zLnkgPSB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC0gMSAtIEFWQVRBUl9DT05TVEFOVFMuQVZBVEFSX0RJTUVOU0lPTlMuaGVpZ2h0O1xyXG4gICAgICB0aGlzLnZlbC52eSA9IDA7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMucG9zLnkgPCAwKSB7XHJcbiAgICAgIHRoaXMucG9zLnkgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYmFzaWNBdHRhY2soKSB7XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUuYmFzaWNBdHRhY2tpbmcpIHtcclxuICAgICAgdGhpcy5zdGF0ZS5iYXNpY0F0dGFja2luZyA9IHRydWU7XHJcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLnN0YXRlLmJhc2ljQXR0YWNraW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5kYW1hZ2VEb25lID0gZmFsc2U7XHJcbiAgICAgIH0sIDI1MCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGRyYXdCYXNpY0F0dGFjaygpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmJhc2ljQXR0YWNraW5nKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUubW92ZW1lbnQgPSAnYXR0YWNrJztcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBdHRhY2soZSkge1xyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gdGhpcy5zdGF0ZS5iYXNpY0F0dGFja0tleWNvZGUpIHtcclxuICAgICAgdGhpcy5iYXNpY0F0dGFjaygpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCBBcmVuYSBmcm9tIFwiLi9nYW1lXCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcclxuICBuZXcgQXJlbmEoY2FudmFzKTtcclxuICBhdHRhY2hFdmVudExpc3RlbmVycygpO1xyXG59KTtcclxuXHJcbmNvbnN0IGF0dGFjaEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gIGxldCBkZW1vSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RlbW8taWNvbi1jb250YWluZXInKVswXTtcclxuICBsZXQgaGVscEljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWxwLWljb24tY29udGFpbmVyJylbMF07XHJcbiAgbGV0IG1vZGFsQmFja2dyb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21vZGFsLWJhY2tncm91bmQnKVswXTtcclxuICBsZXQgbW9kYWxDaGlsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21vZGFsLWNoaWxkJylbMF07XHJcblxyXG4gIG1vZGFsQ2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCkpO1xyXG4gIG1vZGFsQmFja2dyb3VuZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4gY2xvc2VNb2RhbChlKSk7XHJcbiAgZGVtb0ljb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4gb3Blbk1vZGFsKCdkZW1vJywgbW9kYWxCYWNrZ3JvdW5kKSk7XHJcbiAgaGVscEljb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4gb3Blbk1vZGFsKCdoZWxwJywgbW9kYWxCYWNrZ3JvdW5kKSk7XHJcbn1cclxuXHJcbmNvbnN0IG9wZW5Nb2RhbCA9ICh0eXBlLCBtb2RhbEJhY2tncm91bmQpID0+IHtcclxuICBtb2RhbEJhY2tncm91bmQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICBjYXNlICdkZW1vJzpcclxuICAgICAgbGV0IGRlbW9EaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVtby1vcGVuJylbMF07XHJcbiAgICAgIGRlbW9EaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ2hlbHAnOlxyXG4gICAgICBsZXQgaGVscERpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWxwLW9wZW4nKVswXTtcclxuICAgICAgaGVscERpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgY2xvc2VNb2RhbCA9IChlKSA9PiB7XHJcbiAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIGxldCBkZW1vRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RlbW8tb3BlbicpWzBdO1xyXG4gIGRlbW9EaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIGxldCBoZWxwRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlbHAtb3BlbicpWzBdO1xyXG4gIGhlbHBEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG59IiwiY29uc3QgRU5WSVJPTk1FTlRfQ09OU1RBTlRTID0ge1xyXG4gIEdSQVZJVFk6IC0wLjcsXHJcbiAgRU5WSVJPTk1FTlRfRElNRU5TSU9OUzogOTQsXHJcbiAgU0FLVVJBX1NQUklURVM6IDMsXHJcbiAgU05PV0ZMQUtFX1NQUklURVM6IDksXHJcbiAgRU5WSVJPTk1FTlRfUkVTSVpFOiAyNVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnZpcm9ubWVudCB7XHJcbiAgY29uc3RydWN0b3IoY3R4LCBkaW1lbnNpb25zLCB0eXBlKSB7XHJcbiAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnM7XHJcbiAgICB0aGlzLnBvcyA9IHtcclxuICAgICAgeDogTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogdGhpcy5kaW1lbnNpb25zLndpZHRoKSxcclxuICAgICAgeTogLTk0XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlICdzYWt1cmEnOlxyXG4gICAgICAgIHRoaXMucmFuZFNwcml0ZSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChFTlZJUk9OTUVOVF9DT05TVEFOVFMuU0FLVVJBX1NQUklURVMgLSAxKSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3Nub3dmbGFrZSc6XHJcbiAgICAgICAgdGhpcy5yYW5kU3ByaXRlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKEVOVklST05NRU5UX0NPTlNUQU5UUy5TTk9XRkxBS0VfU1BSSVRFUyAtIDEpKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRlbHRheCA9IE1hdGgucmFuZG9tKCkgKiAwLjUgLSAwLjI1O1xyXG4gICAgdGhpcy5tb3ZlID0gdGhpcy5tb3ZlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmRyYXdFbnZpcm9ubWVudCA9IHRoaXMuZHJhd0Vudmlyb25tZW50LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGFuaW1hdGUoKSB7XHJcbiAgICB0aGlzLm1vdmUoKTtcclxuICAgIHRoaXMuZHJhd0Vudmlyb25tZW50KCk7XHJcbiAgfVxyXG5cclxuICBtb3ZlKCkge1xyXG4gICAgdGhpcy5wb3MueSAtPSBFTlZJUk9OTUVOVF9DT05TVEFOVFMuR1JBVklUWTtcclxuICAgIHRoaXMucG9zLnggKz0gdGhpcy5kZWx0YXg7XHJcbiAgfVxyXG5cclxuICBkcmF3RW52aXJvbm1lbnQoKSB7XHJcbiAgICBsZXQgZW52aXJvbm1lbnQgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XHJcbiAgICAgIGNhc2UgJ3Nha3VyYSc6XHJcbiAgICAgICAgZW52aXJvbm1lbnQuc3JjID0gJ2Zyb250ZW5kL2Fzc2V0cy9pbWFnZXMvc2FrdXJhLnBuZyc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3Nub3dmbGFrZSc6XHJcbiAgICAgICAgZW52aXJvbm1lbnQuc3JjID0gJ2Zyb250ZW5kL2Fzc2V0cy9pbWFnZXMvc25vd2ZsYWtlLnBuZyc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgZW52aXJvbm1lbnQsIFxyXG4gICAgICBFTlZJUk9OTUVOVF9DT05TVEFOVFMuRU5WSVJPTk1FTlRfRElNRU5TSU9OUyAqIHRoaXMucmFuZFNwcml0ZSwgXHJcbiAgICAgIDAsXHJcbiAgICAgIEVOVklST05NRU5UX0NPTlNUQU5UUy5FTlZJUk9OTUVOVF9ESU1FTlNJT05TLFxyXG4gICAgICBFTlZJUk9OTUVOVF9DT05TVEFOVFMuRU5WSVJPTk1FTlRfRElNRU5TSU9OUyxcclxuICAgICAgdGhpcy5wb3MueCxcclxuICAgICAgdGhpcy5wb3MueSxcclxuICAgICAgRU5WSVJPTk1FTlRfQ09OU1RBTlRTLkVOVklST05NRU5UX1JFU0laRSxcclxuICAgICAgRU5WSVJPTk1FTlRfQ09OU1RBTlRTLkVOVklST05NRU5UX1JFU0laRSxcclxuICAgICk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IExldmVsIGZyb20gXCIuL2xldmVsXCI7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi9hdmF0YXInO1xyXG5cclxuY29uc3QgQVZBVEFSX0NPTlNUQU5UUyA9IHtcclxuICBBVkFUQVJfRElNRU5TSU9OUzoge1xyXG4gICAgd2lkdGg6IDE1MCxcclxuICAgIGhlaWdodDogMzAwXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcmVuYSB7XHJcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XHJcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgdGhpcy5kaW1lbnNpb25zID0geyB3aWR0aDogY2FudmFzLndpZHRoLCBoZWlnaHQ6IGNhbnZhcy5oZWlnaHQgfTtcclxuICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuc291bmQgPSBmYWxzZTtcclxuICAgIHRoaXMuaGVscE1vZGFsID0gZmFsc2U7XHJcbiAgICB0aGlzLndpbm5lciA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5kb2N1bWVudE9mZnNldFggPSAoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCAtIHRoaXMuZGltZW5zaW9ucy53aWR0aCkgLyAyO1xyXG4gICAgdGhpcy5kb2N1bWVudE9mZnNldFkgPSAoZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQgLSA4MCAtIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpIC8gMjtcclxuXHJcbiAgICB0aGlzLnBsYXlQb3MgPSB7XHJcbiAgICAgIHg6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIgLSAxMTAsXHJcbiAgICAgIHk6IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyICsgMjhcclxuICAgIH07XHJcbiAgICB0aGlzLnBsYXlEaW1lbnNpb25zID0ge1xyXG4gICAgICBkeDogMjIwLFxyXG4gICAgICBkeTogNTZcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5wYXVzZVBvcyA9IHtcclxuICAgICAgeDogdGhpcy5kaW1lbnNpb25zLndpZHRoIC0gNjAsXHJcbiAgICAgIHk6IDI1XHJcbiAgICB9O1xyXG4gICAgdGhpcy5wYXVzZURpbWVuc2lvbnMgPSB7XHJcbiAgICAgIGR4OiAzMCxcclxuICAgICAgZHk6IDQwXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuc291bmRQb3MgPSB7XHJcbiAgICAgIHg6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIDEzMCxcclxuICAgICAgeTogMjBcclxuICAgIH07XHJcbiAgICB0aGlzLnNvdW5kRGltZW5zaW9ucyA9IHtcclxuICAgICAgZHg6IDUwLFxyXG4gICAgICBkeTogNTBcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5oZWxwUG9zID0ge1xyXG4gICAgICB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLSA3MCxcclxuICAgICAgeTogMjBcclxuICAgIH07XHJcbiAgICB0aGlzLmhlbHBEaW1lbnNpb25zID0ge1xyXG4gICAgICBkeDogNTAsXHJcbiAgICAgIGR5OiA1MFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnNvdW5kT2JqID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImF1ZGlvXCIpO1xyXG4gICAgdGhpcy5zb3VuZE9iai5zcmMgPSAnZnJvbnRlbmQvYXNzZXRzL2F1ZGlvL3VpLW9zdC5tcDMnO1xyXG4gICAgdGhpcy5zb3VuZE9iai5zZXRBdHRyaWJ1dGUoXCJwcmVsb2FkXCIsIFwiYXV0b1wiKTtcclxuICAgIHRoaXMuc291bmRPYmouc2V0QXR0cmlidXRlKFwiY29udHJvbHNcIiwgXCJub25lXCIpO1xyXG4gICAgdGhpcy5zb3VuZE9iai5zZXRBdHRyaWJ1dGUoXCJsb29wXCIsIFwidHJ1ZVwiKTtcclxuICAgIHRoaXMuc291bmRPYmouc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnNvdW5kT2JqKTtcclxuXHJcbiAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kID0gdGhpcy5kcmF3QmFja2dyb3VuZC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5kcmF3SGVscCA9IHRoaXMuZHJhd0hlbHAuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlUGxheSA9IHRoaXMuaGFuZGxlUGxheS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVQYXVzZSA9IHRoaXMuaGFuZGxlUGF1c2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlTXV0ZSA9IHRoaXMuaGFuZGxlTXV0ZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVIZWxwID0gdGhpcy5oYW5kbGVIZWxwLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZUF0dGFjayA9IHRoaXMuaGFuZGxlQXR0YWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZU1vZGFsID0gdGhpcy5oYW5kbGVNb2RhbC5iaW5kKHRoaXMpO1xyXG5cclxuICAgIHRoaXMucGxheSA9IHRoaXMucGxheS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5yZXN0YXJ0ID0gdGhpcy5yZXN0YXJ0LmJpbmQodGhpcyk7XHJcblxyXG4gICAgdGhpcy5yZXN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICByZXN0YXJ0KCkge1xyXG4gICAgdGhpcy5sZXZlbCA9IG5ldyBMZXZlbCh0aGlzLmN0eCwgdGhpcy5kaW1lbnNpb25zKTtcclxuICAgIHRoaXMucGxheWVyMSA9IG5ldyBBdmF0YXIodGhpcy5jdHgsIHRoaXMuZGltZW5zaW9ucywgMSk7XHJcbiAgICB0aGlzLnBsYXllcjIgPSBuZXcgQXZhdGFyKHRoaXMuY3R4LCB0aGlzLmRpbWVuc2lvbnMsIDIpO1xyXG4gICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcclxuICAgIHRoaXMud2lubmVyID0gbnVsbDtcclxuICAgIHRoaXMucGxheSgpO1xyXG4gIH1cclxuICBcclxuICBwbGF5KCkge1xyXG4gICAgdGhpcy5jdHguY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlUGxheSk7XHJcbiAgICB0aGlzLmFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcclxuICB9XHJcbiAgXHJcbiAgYW5pbWF0ZSgpIHtcclxuICAgIGlmICghdGhpcy5nYW1lT3Zlcikge1xyXG4gICAgICB0aGlzLmN0eC5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVNdXRlKTtcclxuICAgICAgdGhpcy5jdHguY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlSGVscCk7XHJcbiAgICAgIHRoaXMuY3R4LmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZVBhdXNlKTtcclxuICAgICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlQXR0YWNrKTtcclxuICAgICAgLy8gVE9ETzogVEVNUE9SQVJZXHJcbiAgICAgIGlmICh0aGlzLnBhdXNlZCkge1xyXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uRnJhbWUpO1xyXG4gICAgICAgIHRoaXMubGV2ZWwuYW5pbWF0ZSh0aGlzLnBsYXllcjEuc3RhdGUuaGVhbHRoLCB0aGlzLnBsYXllcjIuc3RhdGUuaGVhbHRoLCB0cnVlKTtcclxuICAgICAgICB0aGlzLnBsYXllcjEuYW5pbWF0ZSh0cnVlKTtcclxuICAgICAgICB0aGlzLnBsYXllcjIuYW5pbWF0ZSh0cnVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLndpbm5lciA9IHRoaXMubGV2ZWwuYW5pbWF0ZSh0aGlzLnBsYXllcjEuc3RhdGUuaGVhbHRoLCB0aGlzLnBsYXllcjIuc3RhdGUuaGVhbHRoKTtcclxuICAgICAgICBsZXQgcDFBdHRhY2tIaXRib3ggPSB0aGlzLnBsYXllcjEuYW5pbWF0ZShmYWxzZSk7XHJcbiAgICAgICAgbGV0IHAyQXR0YWNrSGl0Ym94ID0gdGhpcy5wbGF5ZXIyLmFuaW1hdGUoZmFsc2UpO1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXllcjEuc3RhdGUuYmFzaWNBdHRhY2tpbmcgJiYgIXRoaXMucGxheWVyMS5zdGF0ZS5kYW1hZ2VEb25lKSB7XHJcbiAgICAgICAgICB0aGlzLmNoZWNrQXR0YWNrQ29sbGlzaW9uKHAxQXR0YWNrSGl0Ym94LCB0aGlzLnBsYXllcjEsIHRoaXMucGxheWVyMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBsYXllcjIuc3RhdGUuYmFzaWNBdHRhY2tpbmcgJiYgIXRoaXMucGxheWVyMi5zdGF0ZS5kYW1hZ2VEb25lKSB7XHJcbiAgICAgICAgICB0aGlzLmNoZWNrQXR0YWNrQ29sbGlzaW9uKHAyQXR0YWNrSGl0Ym94LCB0aGlzLnBsYXllcjIsIHRoaXMucGxheWVyMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLndpbm5lciA9PT0gJ3RpbWVVcCcpIHtcclxuICAgICAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoWydwbGF5ZXIxJywgJ3BsYXllcjInXS5pbmNsdWRlcyh0aGlzLndpbm5lcikpIHtcclxuICAgICAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmN0eC5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVNdXRlKTtcclxuICAgICAgdGhpcy5jdHguY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlSGVscCk7XHJcbiAgICAgIHRoaXMuY3R4LmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZVBhdXNlKTtcclxuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZSk7XHJcbiAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAvLyBEaXNwbGF5IHN0YXJ0IHNjcmVlblxyXG4gICAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBPTkxZIEZPUiBTVEFSVElORyBTQ1JFRU5cclxuICBkcmF3QmFja2dyb3VuZCgpIHtcclxuICAgIHRoaXMuY3R4LmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZVBsYXkpO1xyXG5cclxuICAgIGxldCBiYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XHJcbiAgICBiYWNrZ3JvdW5kLnNyYyA9ICdmcm9udGVuZC9hc3NldHMvaW1hZ2VzL3N0YXJ0LWJhY2tncm91bmQuanBnJztcclxuICAgIGJhY2tncm91bmQub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwgMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcclxuICAgICAgXHJcbiAgICAgIGxldCBoZWxwID0gbmV3IEltYWdlKCk7XHJcbiAgICAgIGhlbHAuc3JjID0gJ2Zyb250ZW5kL2Fzc2V0cy9pbWFnZXMvaGVscC5wbmcnO1xyXG4gICAgICBoZWxwLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaGVscCwgdGhpcy5kaW1lbnNpb25zLndpZHRoIC0gNzAsIDIwLCA1MCwgNTApO1xyXG4gICAgICB9O1xyXG4gIFxyXG4gICAgICBsZXQgbXV0ZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICB0aGlzLnNvdW5kID8gXHJcbiAgICAgIG11dGUuc3JjID0gJ2Zyb250ZW5kL2Fzc2V0cy9pbWFnZXMvc3BlYWtlci5wbmcnOlxyXG4gICAgICBtdXRlLnNyYyA9ICdmcm9udGVuZC9hc3NldHMvaW1hZ2VzL211dGUucG5nJ1xyXG4gICAgICBtdXRlLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UobXV0ZSwgdGhpcy5kaW1lbnNpb25zLndpZHRoIC0gMTMwLCAyMCwgNTAsIDUwKTtcclxuICAgICAgfTtcclxuICBcclxuICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdXSElURSc7XHJcbiAgXHJcbiAgICAgIGxldCBoZWFkZXIgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgaGVhZGVyLnNyYyA9ICdmcm9udGVuZC9hc3NldHMvaW1hZ2VzL2hlYWRlci13aGl0ZS5wbmcnO1xyXG4gICAgICBoZWFkZXIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICAgIGhlYWRlciwgXHJcbiAgICAgICAgICAyMCwgXHJcbiAgICAgICAgICB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiAtIDEwMCwgXHJcbiAgICAgICAgICB0aGlzLmRpbWVuc2lvbnMud2lkdGggLSA0MCwgXHJcbiAgICAgICAgICA1NlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgc3dpdGNoICh0aGlzLndpbm5lcikge1xyXG4gICAgICAgIGNhc2UgbnVsbDpcclxuICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnNTZweCBUcmVidWNoZXQgTVMnO1xyXG4gICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXHJcbiAgICAgICAgICAgICdQbGF5IG5vdyEnLFxyXG4gICAgICAgICAgICB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLFxyXG4gICAgICAgICAgICB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiArIDcyXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAndGltZVVwJzpcclxuICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnMzZweCBUcmVidWNoZXQgTVMnO1xyXG4gICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXHJcbiAgICAgICAgICAgICdUaW1lIHJhbiBvdXQuLi4gaGF2ZSB5b3UgdHJpZWQgYXR0YWNraW5nPycsXHJcbiAgICAgICAgICAgIHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyICsgMTJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0aGlzLmN0eC5mb250ID0gJzU2cHggVHJlYnVjaGV0IE1TJztcclxuICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFxyXG4gICAgICAgICAgICAnUGxheSBhZ2Fpbj8nLFxyXG4gICAgICAgICAgICB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLFxyXG4gICAgICAgICAgICB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiArIDcyXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnMzZweCBUcmVidWNoZXQgTVMnO1xyXG4gICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXHJcbiAgICAgICAgICAgIGBDb25ncmF0dWxhdGlvbnMsICR7dGhpcy53aW5uZXJ9IHdvbiFgLFxyXG4gICAgICAgICAgICB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLFxyXG4gICAgICAgICAgICB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiArIDhcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0aGlzLmN0eC5mb250ID0gJzU2cHggVHJlYnVjaGV0IE1TJztcclxuICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFxyXG4gICAgICAgICAgICAnUGxheSBhZ2Fpbj8nLFxyXG4gICAgICAgICAgICB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLFxyXG4gICAgICAgICAgICB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiArIDcyXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICB9XHJcblxyXG4gIGRyYXdIZWxwKCkge1xyXG4gICAgdGhpcy5jdHguY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlTW9kYWwpO1xyXG5cclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsIDAsIDAsIDAuNyknO1xyXG4gICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcclxuXHJcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpJztcclxuICAgIHRoaXMuY3R4LmZpbGxSZWN0KDEyMCwgNjAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIDI0MCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCAtIDEyMCk7XHJcblxyXG4gICAgdGhpcy5jdHgudGV4dEFsaWduID0gJ2xlZnQnO1xyXG4gICAgdGhpcy5jdHguZm9udCA9ICc1NnB4IEFyaWFsJztcclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XHJcbiAgICB0aGlzLmN0eC5maWxsVGV4dCgnSG93IHRvIHBsYXk6JywgMjEwLCAxMjApO1xyXG5cclxuICAgIHRoaXMuY3R4LmZvbnQgPSAnMjRweCBUcmVidWNoZXQgTVMnO1xyXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcclxuICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdQbGF5ZXIgMTogVyA9IEp1bXAsIEEgPSBMZWZ0LCBEID0gUmlnaHQsIEogPSBBdHRhY2snLCAyMTAsIDE1MCk7XHJcbiAgICB0aGlzLmN0eC5maWxsVGV4dCgnUGxheWVyIDI6IF4gPSBKdW1wLCA8ID0gTGVmdCwgPiA9IFJpZ2h0LCAxIChudW1wYWQpID0gQXR0YWNrJywgMjEwLCAxODApO1xyXG4gICAgdGhpcy5jdHguZmlsbFRleHQoJ1lvdSBoYXZlIHVudGlsIHRoZSB0aW1lIHJ1bnMgb3V0IHRvIGRlZmVhdCB0aGUgb3RoZXIgcGxheWVyIScsIDIxMCwgMjEwKTtcclxuICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdNb3ZlIGVycmF0aWNhbGx5IGFuZCBqdW1wIHRvIGF2b2lkIGF0dGFja3MgYW5kIG91dHNtYXJ0IHlvdXIgb3Bwb25lbnQuJywgMjEwLCAyNDApO1xyXG5cclxuICAgIHRoaXMuY3R4LmZvbnQgPSAnNTZweCBBcmlhbCc7XHJcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xyXG4gICAgdGhpcy5jdHguZmlsbFRleHQoJ0NyZWRpdHM6JywgMjEwLCAyOTApO1xyXG5cclxuICAgIHRoaXMuY3R4LmZvbnQgPSAnMThweCBUcmVidWNoZXQgTVMnO1xyXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcclxuICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdTdGFydGluZyBzY3JlZW46IGh0dHA6Ly93d3cuYXZvaWRpbmd0aGVwdWRkbGUuY29tL25ld3MvMjAxNS8xMi8yMS8uLi4nLCAyMTAsIDMyMCk7XHJcbiAgICB0aGlzLmN0eC5maWxsVGV4dCgnY29tcGxldGUtYmF0Y2gtb2YtdGVra2VuLTctZmF0ZWQtcmV0cmlidXRpb24taW1hZ2VzLWluLWhpZ2guaHRtbCcsIDIxMCwgMzQwKTtcclxuICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdTYWt1cmEgcGV0YWxzOiBodHRwczovL3d3dy4xMjNyZi5jb20vcGhvdG9fMTA5Nzc0MDgxX3N0b2NrLXZlY3Rvci0uLi4nLCAyMTAsIDM2MCk7XHJcbiAgICB0aGlzLmN0eC5maWxsVGV4dCgnc2FrdXJhLXBldGFscy1mYWxsaW5nLWRvd24tcm9tYW50aWMtcGluay1zaWxreS1tZWRpdW0tZmxvd2Vycy1zcGFyc2UtLi4uJywgMjEwLCAzODApO1xyXG4gICAgdGhpcy5jdHguZmlsbFRleHQoJ2ZseWluZy1jaGVycnktcGV0YWxzLXRvcC1ncmFkaWUuaHRtbCcsIDIxMCwgNDAwKTtcclxuICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdTbm93Zmxha2VzOiBodHRwczovL3d3dy5mcmVlcGlrLmNvbS9mcmVlLXBob3Rvcy12ZWN0b3JzL2NocmlzdG1hcy4uLicsIDIxMCwgNDIwKTtcclxuICAgIHRoaXMuY3R4LmZpbGxUZXh0KCcoQ2hyaXN0bWFzIHZlY3RvciBjcmVhdGVkIGJ5IGZyZWVwaWspJywgMjEwLCA0NDApO1xyXG4gICAgdGhpcy5jdHguZmlsbFRleHQoJ0FyZW5hIGJhY2tncm91bmQ6IGh0dHBzOi8vd2FsbHBhcGVyY2F2ZS5jb20vdy93cDI2MDM0ODAnLCAyMTAsIDQ2MCk7XHJcbiAgICB0aGlzLmN0eC5maWxsVGV4dCgnUnl1IHNwcml0ZXNoZWV0OiBodHRwczovL3d3dy5kZXZpYW50YXJ0LmNvbS9zaWwzbnQtai9hcnQvLi4uJywgMjEwLCA0ODApO1xyXG4gICAgdGhpcy5jdHguZmlsbFRleHQoJ1J5dS1TdHJlZXQtRmlnaHRlci0xLVNwcml0ZS1TaGVldC03NjkwMTE3MTMgKGJ5IHNpbDNudC1qKScsIDIxMCwgNTAwKTtcclxuICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdIZWxwIGFuZCBzb3VuZCBpY29uczogaHR0cHM6Ly93d3cuZmxhdGljb24uY29tIChtYWRlIGJ5IEZyZWVwaWspJywgMjEwLCA1MjApO1xyXG4gICAgdGhpcy5jdHguZmlsbFRleHQoJ011c2ljOiBEcmFnb24gQmFsbCBTdXBlciAtIFVsdHJhIGluc3RpbmN0IHwgSW5zdHJ1bWVudGFsIEVwaWMgUm9jayBDT1ZFUicsIDIxMCwgNTQwKTtcclxuICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdGcmllZHJpY2ggSGFiZXRsZXIgTXVzaWMnLCAyMTAsIDU2MCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQbGF5KGUpIHtcclxuICAgIGxldCBjbGlja1BvcyA9IHtcclxuICAgICAgeDogZS5wYWdlWCAtIHRoaXMuZG9jdW1lbnRPZmZzZXRYLFxyXG4gICAgICB5OiBlLnBhZ2VZIC0gdGhpcy5kb2N1bWVudE9mZnNldFkgLSA4MFxyXG4gICAgfVxyXG4gICAgaWYgKGNsaWNrUG9zLnggPj0gdGhpcy5wbGF5UG9zLnggJiYgY2xpY2tQb3MueCA8PSB0aGlzLnBsYXlQb3MueCArIHRoaXMucGxheURpbWVuc2lvbnMuZHgpIHtcclxuICAgICAgaWYgKGNsaWNrUG9zLnkgPj0gdGhpcy5wbGF5UG9zLnkgJiYgY2xpY2tQb3MueSA8PSB0aGlzLnBsYXlQb3MueSArIHRoaXMucGxheURpbWVuc2lvbnMuZHkpIHtcclxuICAgICAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZVBhdXNlKGUpIHtcclxuICAgIGxldCBjbGlja1BvcyA9IHtcclxuICAgICAgeDogZS5wYWdlWCAtIHRoaXMuZG9jdW1lbnRPZmZzZXRYLFxyXG4gICAgICB5OiBlLnBhZ2VZIC0gdGhpcy5kb2N1bWVudE9mZnNldFkgLSA4MFxyXG4gICAgfVxyXG4gICAgaWYgKGNsaWNrUG9zLnggPj0gdGhpcy5wYXVzZVBvcy54ICYmIGNsaWNrUG9zLnggPD0gdGhpcy5wYXVzZVBvcy54ICsgdGhpcy5wYXVzZURpbWVuc2lvbnMuZHgpIHtcclxuICAgICAgaWYgKGNsaWNrUG9zLnkgPj0gdGhpcy5wYXVzZVBvcy55ICYmIGNsaWNrUG9zLnkgPD0gdGhpcy5wYXVzZVBvcy55ICsgdGhpcy5wYXVzZURpbWVuc2lvbnMuZHkpIHtcclxuICAgICAgICB0aGlzLnBhdXNlZCA9ICF0aGlzLnBhdXNlZDtcclxuICAgICAgICBpZiAoIXRoaXMucGF1c2VkKSB7XHJcbiAgICAgICAgICB0aGlzLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZU11dGUoZSkge1xyXG4gICAgbGV0IGNsaWNrUG9zID0ge1xyXG4gICAgICB4OiBlLnBhZ2VYIC0gdGhpcy5kb2N1bWVudE9mZnNldFgsXHJcbiAgICAgIHk6IGUucGFnZVkgLSB0aGlzLmRvY3VtZW50T2Zmc2V0WSAtIDgwXHJcbiAgICB9XHJcbiAgICBpZiAoY2xpY2tQb3MueCA+PSB0aGlzLnNvdW5kUG9zLnggJiYgY2xpY2tQb3MueCA8PSB0aGlzLnNvdW5kUG9zLnggKyB0aGlzLnNvdW5kRGltZW5zaW9ucy5keCkge1xyXG4gICAgICBpZiAoY2xpY2tQb3MueSA+PSB0aGlzLnNvdW5kUG9zLnkgJiYgY2xpY2tQb3MueSA8PSB0aGlzLnNvdW5kUG9zLnkgKyB0aGlzLnNvdW5kRGltZW5zaW9ucy5keSkge1xyXG4gICAgICAgIHRoaXMuc291bmQgPSAhdGhpcy5zb3VuZDtcclxuICAgICAgICBpZiAodGhpcy5zb3VuZCkge1xyXG4gICAgICAgICAgdGhpcy5zb3VuZE9iai5wbGF5KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc291bmRPYmoucGF1c2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGhhbmRsZUhlbHAoZSkge1xyXG4gICAgbGV0IGNsaWNrUG9zID0ge1xyXG4gICAgICB4OiBlLnBhZ2VYIC0gdGhpcy5kb2N1bWVudE9mZnNldFgsXHJcbiAgICAgIHk6IGUucGFnZVkgLSB0aGlzLmRvY3VtZW50T2Zmc2V0WSAtIDgwXHJcbiAgICB9XHJcbiAgICBpZiAoY2xpY2tQb3MueCA+PSB0aGlzLmhlbHBQb3MueCAmJiBjbGlja1Bvcy54IDw9IHRoaXMuaGVscFBvcy54ICsgdGhpcy5oZWxwRGltZW5zaW9ucy5keCkge1xyXG4gICAgICBpZiAoY2xpY2tQb3MueSA+PSB0aGlzLmhlbHBQb3MueSAmJiBjbGlja1Bvcy55IDw9IHRoaXMuaGVscFBvcy55ICsgdGhpcy5oZWxwRGltZW5zaW9ucy5keSkge1xyXG4gICAgICAgIHRoaXMuaGVscE1vZGFsID0gIXRoaXMuaGVscE1vZGFsO1xyXG4gICAgICAgIGlmICh0aGlzLmhlbHBNb2RhbCkge1xyXG4gICAgICAgICAgdGhpcy5kcmF3SGVscCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBdHRhY2soZSkge1xyXG4gICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgY2FzZSA3NDpcclxuICAgICAgICB0aGlzLnBsYXllcjEuYmFzaWNBdHRhY2soKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSA5NzpcclxuICAgICAgICB0aGlzLnBsYXllcjIuYmFzaWNBdHRhY2soKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZU1vZGFsKGUpIHtcclxuICAgIGxldCBjbGlja1BvcyA9IHtcclxuICAgICAgeDogZS5wYWdlWCAtIHRoaXMuZG9jdW1lbnRPZmZzZXRYLFxyXG4gICAgICB5OiBlLnBhZ2VZIC0gdGhpcy5kb2N1bWVudE9mZnNldFkgLSA4MFxyXG4gICAgfVxyXG4gICAgaWYgKGNsaWNrUG9zLnggPCAxMjAgfHwgY2xpY2tQb3MueCA+IHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIDEyMFxyXG4gICAgICB8fCBjbGlja1Bvcy55IDwgNjAgfHwgY2xpY2tQb3MueSA+IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLSA2MCkge1xyXG4gICAgICB0aGlzLmN0eC5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVNb2RhbCk7XHJcbiAgICAgIHRoaXMuaGVscE1vZGFsID0gIXRoaXMuaGVscE1vZGFsO1xyXG4gICAgICB0aGlzLmFuaW1hdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrQXR0YWNrQ29sbGlzaW9uKGJvdW5kLCBhdHRhY2tpbmdQbGF5ZXIsIG90aGVyUGxheWVyKSB7XHJcbiAgICBsZXQgb3RoZXJQbGF5ZXJCb3VuZCA9IHtcclxuICAgICAgeDE6IG90aGVyUGxheWVyLnBvcy54IC0gQVZBVEFSX0NPTlNUQU5UUy5BVkFUQVJfRElNRU5TSU9OUy53aWR0aCAvIDIsXHJcbiAgICAgIHkxOiBvdGhlclBsYXllci5wb3MueSxcclxuICAgICAgeDI6IG90aGVyUGxheWVyLnBvcy54ICsgQVZBVEFSX0NPTlNUQU5UUy5BVkFUQVJfRElNRU5TSU9OUy53aWR0aCAvIDIsXHJcbiAgICAgIHkyOiBvdGhlclBsYXllci5wb3MueSArIEFWQVRBUl9DT05TVEFOVFMuQVZBVEFSX0RJTUVOU0lPTlMuaGVpZ2h0XHJcbiAgICB9O1xyXG4gICAgaWYgKGJvdW5kLnggPj0gb3RoZXJQbGF5ZXJCb3VuZC54MSAmJiBib3VuZC54IDw9IG90aGVyUGxheWVyQm91bmQueDIpIHtcclxuICAgICAgaWYgKGJvdW5kLnkgPj0gb3RoZXJQbGF5ZXJCb3VuZC55MSAmJiBib3VuZC55IDw9IG90aGVyUGxheWVyQm91bmQueTIpIHtcclxuICAgICAgICBhdHRhY2tpbmdQbGF5ZXIuc3RhdGUuZGFtYWdlRG9uZSA9IHRydWU7XHJcbiAgICAgICAgb3RoZXJQbGF5ZXIuc3RhdGUuaGVhbHRoIC09IGF0dGFja2luZ1BsYXllci5zdGF0ZS5iYXNpY0F0dGFja0RhbWFnZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbn0iLCJpbXBvcnQgRW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XHJcblxyXG5jb25zdCBDT0xPUl9QQUxFVFRFID0ge1xyXG4gIFBSSU1BUlk6ICcjMDAwNzBBJyxcclxuICBTRUNPTkRBUlk6ICcjMjk0NTUyJyxcclxuICBURVJUSUFSWTogJyM1OTc4ODQnLFxyXG4gIFFVQVRFUk5BUlk6ICcjOUVCOUIzJyxcclxuICBRVUlOVEVSTkFSWTogJyNBQ0M0Q0UnXHJcbn07XHJcblxyXG5jb25zdCBMRVZFTF9DT05TVEFOVFMgPSB7XHJcbiAgTUFYX1RJTUU6IDYwICogMTIwLFxyXG4gIFRJTUVSX1RFWFRfSEVJR0hUOiA3NSxcclxuICBUSU1FUl9SQURJVVM6IDQ1LFxyXG4gIE1BWF9IRUFMVEg6IDIwMCxcclxuICBIRUFMVEhfQkFSOiB7XHJcbiAgICB3aWR0aDogNDAwLFxyXG4gICAgaGVpZ2h0OiAyMFxyXG4gIH0sXHJcbiAgT0ZGU0VUOiAyMCxcclxuICBFTlZJUk9OTUVOVF9QUk9CQUJJTElUWTogNDUsXHJcbiAgRU5WSVJPTk1FTlRTOiBbJ3Nha3VyYScsICdzbm93Zmxha2UnXVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWwge1xyXG4gIGNvbnN0cnVjdG9yKGN0eCwgZGltZW5zaW9ucykge1xyXG4gICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9ucztcclxuICAgIHRoaXMudGltZSA9IExFVkVMX0NPTlNUQU5UUy5NQVhfVElNRTtcclxuICAgIHRoaXMuY3R4ID0gY3R4O1xyXG5cclxuICAgIHRoaXMucGxheWVySHBQb3MgPSB7XHJcbiAgICAgIHg6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIgLSBMRVZFTF9DT05TVEFOVFMuVElNRVJfUkFESVVTLFxyXG4gICAgICB5OiBMRVZFTF9DT05TVEFOVFMuVElNRVJfUkFESVVTIC0gTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIuaGVpZ2h0ICsgNVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmJvdEhwUG9zID0ge1xyXG4gICAgICB4OiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyICsgTEVWRUxfQ09OU1RBTlRTLlRJTUVSX1JBRElVUyxcclxuICAgICAgeTogTEVWRUxfQ09OU1RBTlRTLlRJTUVSX1JBRElVUyAtIExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLmhlaWdodCArIDVcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmVudmlyb25tZW50ID0gW107XHJcblxyXG4gICAgbGV0IGVudmlyb25tZW50SW5kZXggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoTEVWRUxfQ09OU1RBTlRTLkVOVklST05NRU5UUy5sZW5ndGggLSAxKSk7XHJcbiAgICB0aGlzLmVudmlyb25tZW50VHlwZSA9IExFVkVMX0NPTlNUQU5UUy5FTlZJUk9OTUVOVFNbZW52aXJvbm1lbnRJbmRleF07XHJcblxyXG4gICAgdGhpcy5kcmF3VGltZXJDaXJjbGUgPSB0aGlzLmRyYXdUaW1lckNpcmNsZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5kcmF3VGltZXJEaXNwbGF5ID0gdGhpcy5kcmF3VGltZXJEaXNwbGF5LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmRyYXdUaW1lclRleHQgPSB0aGlzLmRyYXdUaW1lclRleHQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZHJhd0hlYWx0aEJhcnMgPSB0aGlzLmRyYXdIZWFsdGhCYXJzLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmRyYXdOYW1lcyA9IHRoaXMuZHJhd05hbWVzLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmRyYXdQYXVzZSA9IHRoaXMuZHJhd1BhdXNlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kID0gdGhpcy5kcmF3QmFja2dyb3VuZC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5kcmF3Rmxvb3IgPSB0aGlzLmRyYXdGbG9vci5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgYW5pbWF0ZShwbGF5ZXJIZWFsdGgsIGJvdEhlYWx0aCwgcGF1c2VkKSB7XHJcbiAgICBsZXQgdGltZTtcclxuICAgIGxldCB3aW5uZXI7XHJcblxyXG4gICAgdGhpcy5kcmF3QmFja2dyb3VuZCgpO1xyXG5cclxuICAgIGxldCBlbnZpcm9ubWVudEdlbmVyYXRpb24gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBMRVZFTF9DT05TVEFOVFMuRU5WSVJPTk1FTlRfUFJPQkFCSUxJVFkpO1xyXG5cclxuICAgIGlmIChlbnZpcm9ubWVudEdlbmVyYXRpb24gPT09IDEpIHtcclxuICAgICAgbGV0IG5ld0Vudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KHRoaXMuY3R4LCB0aGlzLmRpbWVuc2lvbnMsIHRoaXMuZW52aXJvbm1lbnRUeXBlKTtcclxuICAgICAgdGhpcy5lbnZpcm9ubWVudC5wdXNoKG5ld0Vudmlyb25tZW50KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVudmlyb25tZW50LmZvckVhY2goKGVudmlyb25tZW50LCBpZHgpID0+IHtcclxuICAgICAgZW52aXJvbm1lbnQuYW5pbWF0ZSgpO1xyXG4gICAgICBpZiAoZW52aXJvbm1lbnQucG9zLnkgPiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0ICsgOTQpIHtcclxuICAgICAgICB0aGlzLmVudmlyb25tZW50LnNoaWZ0KCk7XHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aW1lID0gdGhpcy5kcmF3VGltZXIoKTtcclxuICAgIHRoaXMuZHJhd0hlYWx0aEJhcnMoKTtcclxuICAgIHdpbm5lciA9IHRoaXMuZHJhd0N1cnJlbnRIZWFsdGhCYXJzKHBsYXllckhlYWx0aCwgYm90SGVhbHRoKTtcclxuICAgIHRoaXMuZHJhd05hbWVzKCk7XHJcbiAgICAvLyB0aGlzLmRyYXdGbG9vcigpO1xyXG4gICAgcGF1c2VkID8gdGhpcy5wYXVzZWQgPSB0cnVlIDogdGhpcy5wYXVzZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuZHJhd1BhdXNlKCk7XHJcbiAgICAgIFxyXG4gICAgaWYgKHRpbWUgPT09IDApIHtcclxuICAgICAgdGhpcy5lbnZpcm9ubWVudCA9IFtdO1xyXG4gICAgICByZXR1cm4gJ3RpbWVVcCc7XHJcbiAgICB9IGVsc2UgaWYgKHdpbm5lcikge1xyXG4gICAgICB0aGlzLmVudmlyb25tZW50ID0gW107XHJcbiAgICAgIHJldHVybiB3aW5uZXI7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMucGF1c2VkKSB7XHJcbiAgICAgIHJldHVybiAncGF1c2VkJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXdUaW1lcigpIHtcclxuICAgIC8vIFRPRE86IE5lZWQgYmV0dGVyIHNvbHV0aW9uXHJcbiAgICB0aGlzLmRyYXdUaW1lckNpcmNsZSgpO1xyXG4gICAgdGhpcy5kcmF3VGltZXJEaXNwbGF5KCk7XHJcbiAgICB0aGlzLmRyYXdUaW1lclRleHQoKTtcclxuICAgIFxyXG4gICAgdGhpcy50aW1lID0gdGhpcy50aW1lIC0gMTtcclxuICAgIGlmICh0aGlzLnRpbWUgPT09IDApIHtcclxuICAgICAgbGV0IHJldHVyblRpbWUgPSAwO1xyXG4gICAgICB0aGlzLnRpbWUgPSBMRVZFTF9DT05TVEFOVFMuTUFYX1RJTUU7XHJcbiAgICAgIHJldHVybiByZXR1cm5UaW1lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhd1RpbWVyVGV4dCgpIHtcclxuICAgIHRoaXMuY3R4LmZvbnQgPSAnNDhweCBUcmVidWNoZXQgTVMnO1xyXG4gICAgdGhpcy5jdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnV0hJVEUnO1xyXG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBDT0xPUl9QQUxFVFRFLlBSSU1BUlk7XHJcbiAgICB0aGlzLmN0eC5maWxsVGV4dChcclxuICAgICAgYCR7TWF0aC5yb3VuZCh0aGlzLnRpbWUgLyA2MCl9YCxcclxuICAgICAgdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMixcclxuICAgICAgTEVWRUxfQ09OU1RBTlRTLlRJTUVSX1RFWFRfSEVJR0hUICsgMTBcclxuICAgICk7XHJcbiAgICB0aGlzLmN0eC5zdHJva2VUZXh0KFxyXG4gICAgICBgJHtNYXRoLnJvdW5kKHRoaXMudGltZSAvIDYwKX1gLFxyXG4gICAgICB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLFxyXG4gICAgICBMRVZFTF9DT05TVEFOVFMuVElNRVJfVEVYVF9IRUlHSFQgKyAxMFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGRyYXdUaW1lckNpcmNsZSgpIHtcclxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gQ09MT1JfUEFMRVRURS5TRUNPTkRBUlk7XHJcbiAgICB0aGlzLmN0eC5hcmMoXHJcbiAgICAgIHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsXHJcbiAgICAgIExFVkVMX0NPTlNUQU5UUy5USU1FUl9URVhUX0hFSUdIVCAtIDUsXHJcbiAgICAgIExFVkVMX0NPTlNUQU5UUy5USU1FUl9SQURJVVMsIDAsIDIgKiBNYXRoLlBJXHJcbiAgICAgICk7XHJcbiAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgfVxyXG5cclxuICBkcmF3VGltZXJEaXNwbGF5KCkge1xyXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBDT0xPUl9QQUxFVFRFLlFVQVRFUk5BUlk7XHJcbiAgICB0aGlzLmN0eC5hcmMoXHJcbiAgICAgIHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsXHJcbiAgICAgIExFVkVMX0NPTlNUQU5UUy5USU1FUl9URVhUX0hFSUdIVCAtIDUsXHJcbiAgICAgIExFVkVMX0NPTlNUQU5UUy5USU1FUl9SQURJVVMsXHJcbiAgICAgIC0gMC41ICogTWF0aC5QSSxcclxuICAgICAgKExFVkVMX0NPTlNUQU5UUy5NQVhfVElNRSAtIHRoaXMudGltZSlcclxuICAgICAgKiAyICogTWF0aC5QSSAvIExFVkVMX0NPTlNUQU5UUy5NQVhfVElNRVxyXG4gICAgICAtIDAuNSAqIE1hdGguUElcclxuICAgICk7XHJcbiAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMixcclxuICAgICAgTEVWRUxfQ09OU1RBTlRTLlRJTUVSX1RFWFRfSEVJR0hUIC0gNVxyXG4gICAgKTtcclxuICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICB9XHJcblxyXG4gIGRyYXdIZWFsdGhCYXJzKCkge1xyXG4gICAgLy8gUGxheWVyIGhlYWx0aCBjb250YWluZXJcclxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnQkxBQ0snO1xyXG4gICAgdGhpcy5jdHgubW92ZVRvKFxyXG4gICAgICB0aGlzLnBsYXllckhwUG9zLngsXHJcbiAgICAgIHRoaXMucGxheWVySHBQb3MueVxyXG4gICAgKTtcclxuICAgIHRoaXMuY3R4LmxpbmVUbyhcclxuICAgICAgdGhpcy5wbGF5ZXJIcFBvcy54IC0gTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIud2lkdGgsXHJcbiAgICAgIHRoaXMucGxheWVySHBQb3MueVxyXG4gICAgKTtcclxuICAgIHRoaXMuY3R4LmxpbmVUbyhcclxuICAgICAgdGhpcy5wbGF5ZXJIcFBvcy54IC0gTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIud2lkdGgsXHJcbiAgICAgIHRoaXMucGxheWVySHBQb3MueSArIExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLmhlaWdodFxyXG4gICAgKTtcclxuICAgIHRoaXMuY3R4LmxpbmVUbyhcclxuICAgICAgdGhpcy5wbGF5ZXJIcFBvcy54IC0gTEVWRUxfQ09OU1RBTlRTLk9GRlNFVCxcclxuICAgICAgdGhpcy5wbGF5ZXJIcFBvcy55ICsgTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIuaGVpZ2h0XHJcbiAgICApO1xyXG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XHJcbiAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAvL2JvdCBoZWFsdGggY29udGFpbmVyXHJcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ0JMQUNLJztcclxuICAgIHRoaXMuY3R4Lm1vdmVUbyhcclxuICAgICAgdGhpcy5ib3RIcFBvcy54LFxyXG4gICAgICB0aGlzLmJvdEhwUG9zLnlcclxuICAgICk7XHJcbiAgICB0aGlzLmN0eC5saW5lVG8oXHJcbiAgICAgIHRoaXMuYm90SHBQb3MueCArIExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLndpZHRoLFxyXG4gICAgICB0aGlzLmJvdEhwUG9zLnlcclxuICAgICk7XHJcbiAgICB0aGlzLmN0eC5saW5lVG8oXHJcbiAgICAgIHRoaXMuYm90SHBQb3MueCArIExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLndpZHRoLFxyXG4gICAgICB0aGlzLmJvdEhwUG9zLnkgKyBMRVZFTF9DT05TVEFOVFMuSEVBTFRIX0JBUi5oZWlnaHRcclxuICAgICk7XHJcbiAgICB0aGlzLmN0eC5saW5lVG8oXHJcbiAgICAgIHRoaXMuYm90SHBQb3MueCArIExFVkVMX0NPTlNUQU5UUy5PRkZTRVQsXHJcbiAgICAgIHRoaXMuYm90SHBQb3MueSArIExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLmhlaWdodFxyXG4gICAgKTtcclxuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcbiAgfVxyXG5cclxuICBkcmF3Q3VycmVudEhlYWx0aEJhcnMocGxheWVySGVhbHRoLCBib3RIZWFsdGgpIHtcclxuXHJcbiAgICBpZiAocGxheWVySGVhbHRoIDw9IDApIHtcclxuICAgICAgcmV0dXJuICdwbGF5ZXIyJztcclxuICAgIH0gZWxzZSBpZiAoYm90SGVhbHRoIDw9IDApIHtcclxuICAgICAgcmV0dXJuICdwbGF5ZXIxJztcclxuICAgIH07XHJcblxyXG4gICAgbGV0IGN1cnJlbnRIZWFsdGggPSBMRVZFTF9DT05TVEFOVFMuSEVBTFRIX0JBUi53aWR0aCAqIHBsYXllckhlYWx0aCAvIExFVkVMX0NPTlNUQU5UUy5NQVhfSEVBTFRIO1xyXG5cclxuICAgIC8vIFBsYXllciBjdXJyZW50IGhlYWx0aFxyXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnUkVEJztcclxuICAgIHRoaXMuY3R4Lm1vdmVUbyhcclxuICAgICAgdGhpcy5wbGF5ZXJIcFBvcy54LFxyXG4gICAgICB0aGlzLnBsYXllckhwUG9zLnlcclxuICAgICk7XHJcbiAgICB0aGlzLmN0eC5saW5lVG8oXHJcbiAgICAgIHRoaXMucGxheWVySHBQb3MueCAtIGN1cnJlbnRIZWFsdGgsXHJcbiAgICAgIHRoaXMucGxheWVySHBQb3MueVxyXG4gICAgKTtcclxuICAgIGlmIChjdXJyZW50SGVhbHRoIDwgTEVWRUxfQ09OU1RBTlRTLk9GRlNFVCkge1xyXG4gICAgICB0aGlzLmN0eC5saW5lVG8oXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJIcFBvcy54IC0gY3VycmVudEhlYWx0aCxcclxuICAgICAgICAvLyBjdXJyZW50SGVhbHRoID0gY3VycmVudEhlYWx0aCAqIHRhbihwaS80KVxyXG4gICAgICAgIC8vIHNpbmNlIG9mZnNldCA9IGhlaWdodFxyXG4gICAgICAgIHRoaXMucGxheWVySHBQb3MueSArIGN1cnJlbnRIZWFsdGhcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyhcclxuICAgICAgICB0aGlzLnBsYXllckhwUG9zLnggLSBjdXJyZW50SGVhbHRoLFxyXG4gICAgICAgIHRoaXMucGxheWVySHBQb3MueSArIExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLmhlaWdodFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmN0eC5saW5lVG8oXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJIcFBvcy54IC0gTEVWRUxfQ09OU1RBTlRTLk9GRlNFVCxcclxuICAgICAgICB0aGlzLnBsYXllckhwUG9zLnkgKyBMRVZFTF9DT05TVEFOVFMuSEVBTFRIX0JBUi5oZWlnaHRcclxuICAgICAgKTtcclxuICAgIH07XHJcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuXHJcbiAgICBsZXQgY3VycmVudEJvdEhlYWx0aCA9IExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLndpZHRoICogYm90SGVhbHRoIC8gTEVWRUxfQ09OU1RBTlRTLk1BWF9IRUFMVEg7XHJcblxyXG4gICAgLy8gQm90IGN1cnJlbnQgaGVhbHRoXHJcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdSRUQnO1xyXG4gICAgdGhpcy5jdHgubW92ZVRvKFxyXG4gICAgICB0aGlzLmJvdEhwUG9zLngsXHJcbiAgICAgIHRoaXMuYm90SHBQb3MueVxyXG4gICAgKTtcclxuICAgIHRoaXMuY3R4LmxpbmVUbyhcclxuICAgICAgdGhpcy5ib3RIcFBvcy54ICsgY3VycmVudEJvdEhlYWx0aCxcclxuICAgICAgdGhpcy5ib3RIcFBvcy55XHJcbiAgICApO1xyXG4gICAgaWYgKGN1cnJlbnRCb3RIZWFsdGggPCBMRVZFTF9DT05TVEFOVFMuT0ZGU0VUKSB7XHJcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyhcclxuICAgICAgICB0aGlzLmJvdEhwUG9zLnggKyBjdXJyZW50Qm90SGVhbHRoLFxyXG4gICAgICAgIC8vIGN1cnJlbnRCb3RIZWFsdGggPSBjdXJyZW50Qm90SGVhbHRoICogdGFuKHBpLzQpXHJcbiAgICAgICAgLy8gc2luY2Ugb2Zmc2V0ID0gaGVpZ2h0XHJcbiAgICAgICAgdGhpcy5ib3RIcFBvcy55ICsgY3VycmVudEJvdEhlYWx0aFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jdHgubGluZVRvKFxyXG4gICAgICAgIHRoaXMuYm90SHBQb3MueCArIGN1cnJlbnRCb3RIZWFsdGgsXHJcbiAgICAgICAgdGhpcy5ib3RIcFBvcy55ICsgTEVWRUxfQ09OU1RBTlRTLkhFQUxUSF9CQVIuaGVpZ2h0XHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyhcclxuICAgICAgICB0aGlzLmJvdEhwUG9zLnggKyBMRVZFTF9DT05TVEFOVFMuT0ZGU0VULFxyXG4gICAgICAgIHRoaXMuYm90SHBQb3MueSArIExFVkVMX0NPTlNUQU5UUy5IRUFMVEhfQkFSLmhlaWdodFxyXG4gICAgICApO1xyXG4gICAgfTtcclxuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gIH1cclxuXHJcbiAgZHJhd05hbWVzKCkge1xyXG4gICAgbGV0IHBsYXllck5hbWUgPSAnUGxheWVyIDEnO1xyXG4gICAgbGV0IGJvdE5hbWUgPSAnUGxheWVyIDInO1xyXG4gICAgbGV0IHBsYXllck5hbWVQb3MgPSB7XHJcbiAgICAgIHg6IHRoaXMucGxheWVySHBQb3MueCAtIExFVkVMX0NPTlNUQU5UUy5PRkZTRVQsXHJcbiAgICAgIHk6IHRoaXMucGxheWVySHBQb3MueSArIExFVkVMX0NPTlNUQU5UUy5USU1FUl9SQURJVVMgKyA0XHJcbiAgICB9O1xyXG4gICAgbGV0IGJvdE5hbWVQb3MgPSB7XHJcbiAgICAgIHg6IHRoaXMuYm90SHBQb3MueCArIExFVkVMX0NPTlNUQU5UUy5PRkZTRVQsXHJcbiAgICAgIHk6IHRoaXMuYm90SHBQb3MueSArIExFVkVMX0NPTlNUQU5UUy5USU1FUl9SQURJVVMgKyA0XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuY3R4LmZvbnQgPSAnMzJweCBUcmVidWNoZXQgTVMnO1xyXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3doaXRlJztcclxuICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDAuNTtcclxuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gQ09MT1JfUEFMRVRURS5TRUNPTkRBUlk7XHJcbiAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSAncmlnaHQnO1xyXG4gICAgdGhpcy5jdHguZmlsbFRleHQocGxheWVyTmFtZSwgcGxheWVyTmFtZVBvcy54LCBwbGF5ZXJOYW1lUG9zLnkpO1xyXG4gICAgdGhpcy5jdHguc3Ryb2tlVGV4dChwbGF5ZXJOYW1lLCBwbGF5ZXJOYW1lUG9zLngsIHBsYXllck5hbWVQb3MueSk7XHJcblxyXG4gICAgdGhpcy5jdHgudGV4dEFsaWduID0gJ2xlZnQnO1xyXG4gICAgdGhpcy5jdHguZmlsbFRleHQoYm90TmFtZSwgYm90TmFtZVBvcy54LCBib3ROYW1lUG9zLnkpO1xyXG4gICAgdGhpcy5jdHguc3Ryb2tlVGV4dChib3ROYW1lLCBib3ROYW1lUG9zLngsIGJvdE5hbWVQb3MueSk7XHJcbiAgfVxyXG5cclxuICBkcmF3UGF1c2UoKSB7XHJcbiAgICAvLyB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgIC8vIC8vIHRoaXMuY3R4LnJlY3QodGhpcy5kaW1lbnNpb25zLndpZHRoIC0gNTAgLSAyMCwgMjAsIDUwLCA1MCk7XHJcbiAgICAvLyB0aGlzLmN0eC5yZWN0KHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIDUwIC0gMTAsIDI1LCAzMCwgNDApO1xyXG4gICAgLy8gdGhpcy5jdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgaWYgKCF0aGlzLnBhdXNlZCkge1xyXG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gQ09MT1JfUEFMRVRURS5RVUlOVEVSTkFSWTtcclxuICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBDT0xPUl9QQUxFVFRFLlBSSU1BUlk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmN0eC5yZWN0KHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIDUwIC0gMTAsIDI1LCAxMCwgNDApO1xyXG4gICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIHRoaXMuY3R4LnJlY3QodGhpcy5kaW1lbnNpb25zLndpZHRoIC0gNTAgKyAxMCwgMjUsIDEwLCA0MCk7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IENPTE9SX1BBTEVUVEUuUVVJTlRFUk5BUlk7XHJcbiAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gQ09MT1JfUEFMRVRURS5QUklNQVJZO1xyXG4gICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy5kaW1lbnNpb25zLndpZHRoIC0gNTAgLSAxMCwgMjUpO1xyXG4gICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5kaW1lbnNpb25zLndpZHRoIC0gNTAgLSAxMCwgNjUpO1xyXG4gICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5kaW1lbnNpb25zLndpZHRoIC0gNTAgKyAyMCwgNDUpO1xyXG4gICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XHJcbiAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDEuNTtcclxuXHJcbiAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgICB0aGlzLmN0eC5mb250ID0gJzU2cHggVHJlYnVjaGV0IE1TJztcclxuICAgICAgdGhpcy5jdHguZmlsbFRleHQoXHJcbiAgICAgICAgJ0dhbWUgcGF1c2VkJyxcclxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyLFxyXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyIC0gMzZcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5jdHguc3Ryb2tlVGV4dChcclxuICAgICAgICAnR2FtZSBwYXVzZWQnLFxyXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsXHJcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDIgLSAzNlxyXG4gICAgICApO1xyXG5cclxuICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICAgIHRoaXMuY3R4LmZvbnQgPSAnMzZweCBUcmVidWNoZXQgTVMnO1xyXG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcclxuICAgICAgICAnUHJlc3MgcGxheSB0byBjb250aW51ZScsXHJcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMixcclxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMiArIDM2XHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuY3R4LnN0cm9rZVRleHQoXHJcbiAgICAgICAgJ1ByZXNzIHBsYXkgdG8gY29udGludWUnLFxyXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucy53aWR0aCAvIDIsXHJcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zLmhlaWdodCAvIDIgKyAzNlxyXG4gICAgICApXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZHJhd0JhY2tncm91bmQoKSB7XHJcbiAgICBsZXQgYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgYmFja2dyb3VuZC5zcmMgPSAnZnJvbnRlbmQvYXNzZXRzL2ltYWdlcy9nYW1lLWJhY2tncm91bmQuanBnJztcclxuICAgIC8vIGJhY2tncm91bmQub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwgMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIC8vIFRPRE86IFByb2JhYmx5IHRlbXBvcmFyeVxyXG4gIGRyYXdGbG9vcigpIHtcclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdCUk9XTic7XHJcbiAgICB0aGlzLmN0eC5maWxsUmVjdChcclxuICAgICAgMCwgXHJcbiAgICAgIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLSAxLCBcclxuICAgICAgdGhpcy5kaW1lbnNpb25zLndpZHRoLCBcclxuICAgICAgMTU1XHJcbiAgICApO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=