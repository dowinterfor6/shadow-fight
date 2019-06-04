# Shadow fight
## Background and Overview
Shadow fight is an action game where the player is matched up against an AI and must defeat them by whittling down their health. Inspired by numerous fighting games, the fundamental game logic will be extremely similar to the more popular and well known games.

Users will take control of an avatar with basic movement, jump and crouch, and have the ability to attack the enemy. The model hitbox will change depending on the avatar position, as well as if they are crouching, and whenever an attack lands (simple collision won't count), damage is done. The AI will perform random movement/attacks, but may implement algorithmic combos.

## Features
Given the time constraint, only the basic features have been implemented. A re/starting screen has been implemented with controls to un/mute the background soundtrack, and a modal help display to show controls and credits. Upon clicking, the user starts the game with two avatars facing off against each other with a time limit of 120 seconds to beat each other, otherwise the game will time out and result in a draw. 

![start](https://github.com/dowinterfor6/shadow-fight/blob/master/docs/images/starting_page.png)

The actual gameplay is limited to punching only, and both sprites are sourced from Deviantart as Ryu. Controls are for 2 players, locally, on a full sized keyboard with a numpad. Jumping, idle, walking, and attacking have unique animations.

![game](https://github.com/dowinterfor6/shadow-fight/blob/master/docs/gifs/gameplay.gif)

## Design: Functionality & MVPs
Shadow Fight will have basic MVPs that must be met:
* User's avatar can move back and forth, and can jump/crouch
* Avatar can basic attack and deal damage
* Charge up attack causes CC (Crowd control)
* Sprite will decrease hitbox on crouch
* Basic AI will be implemented to 'fight back'
* Randomized background

In addition, some QoL or extra features:
* Variety of avatars to choose from, with different moves
* Allow for chain CC combos
* Changing keybinds
* Timer
* Finishing moves

## Timer Circle (Moving "slice")
```Javascript
// frontend/level.js
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
```
A deceptively simple feature, I wanted to manually implement a timer circle that represented the remaining time via proportion of a full circle (think, slices of pizza being taken away every few seconds). Without referring to libraries, the current design utilized some math to figure out where the lines should be drawn in order for the display to function correctly. Initially, the interpretation of the arc was understood differently, creating a segment of the circle instead of an actual arc, however things became much simpler when the ctx.arc was being used properly. Alongside the health bars with angled ends, these two methods proved to be the most challenging, not because of the sheer difficulty of the mathematics, nor the complexity of the coding language, but rather the implementation of both.

## Avatar state
```Javascript
// frontend/avatar.js
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
```
Taking inspiration from React/Redux, implementing a POJO representing the general state of an avatar instance proved to be helpful as there were too many separate instance variables to keep track of. This is set as an initialization, similar to the initial state being set in React components. Keypresses are recorded and placed in another POJO to be carried out and displayed as soon as possible, as well as to prevent overlap in multiple keypresses of the same key. Another important feature is the "facing" variable, which is set based on which player the avatar instance represents, e.g. Player 1 always faces right, and starts on the left, while Player 2 always faces left, and starts on the right.

## Wireframes
The game itself should take up most of the screen, with a basic menu screen as an introduction, with links to my Github and LinkedIn in a separate section. Upon starting, the game should bring you into a screen typical of most fighting games, a basic 2D 'arena' with health bars displayed at the top, and a timer (potentially). The game should be able to be paused mid fight and continued whenever. 

![wireframe](https://github.com/dowinterfor6/shadow-fight/blob/master/docs/images/Screenshot_20190515_162146.png)

## Architecture and Technologies
Basic technologies used in the project will be:
* Vanilla JS for overall coding and game logic
* HTML5 Canvas for DOM manipulation and rendering
* Webpack for script bundling
* Web Audio API for sprite associated sound effects (if time permits)

Custom technologies in the form of scrips will include:
* Arena.js
  * This will handle the background of the game, potentially an animated background setting 
* Status.js
  * This will handle the health bars, timers, and pause menu
* Avatar.js
  * This will handle an instance of the player avatar, as well as the AI avatar
* Audio.js
  * this will handle the audio effects from actions, and/or background music
  
## Implementation timeline
### Day 0.5:
* Flesh out README and proposal
* Complete prepare file structure, brainstorm ideas
### Day 1:
* Implement page structure
* Set up Node modules and webpack
* Create a starting screen
### Day 2: 
* Implement basic movement for player avatar
* Add a basic background 
* Add basic health bars and timer
* Add static enemy AI
### Day 3:
* Implement attacking and dealing damage (reducing health)
* Fully style sprite animations and background
### Day 4:
* Implement second attack that causes CC
* Implement CC-ed status to allow for combo chaining
### Day 5:
* Implement basic AI
* Fix bugs
* Finish styling
### Bonus:
* Implement complicated AI
* Implement different avatars with different attacks
* Implement mana bar for CC attack (May be basic MVP instead)
