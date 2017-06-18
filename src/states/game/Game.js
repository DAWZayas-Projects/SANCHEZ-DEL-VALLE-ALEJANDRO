import Phaser from 'phaser';

import World from './world/view/World';
import { TILEMAP, COLLISION, Tileset, Layers } from './world/config/WorldConstants';

import Player from './player/views/Player';
import PlayerMovement from './player/controllers/PlayerMovement';
import { Animations, Timers, Sprite } from './player/config/PlayerConstants';
import { Cursors, LastKey, Actions } from './player/config/Keycodes';

import Enemies from './enemy/views/Enemies';
import EnemyMovement from './enemy/controllers/EnemyMovement';
import { EnemyAnimations, EnemyTimers, Movement, Coordenate } from './enemy/config/EnemyConstants';


class Game extends Phaser.State {
  init () {}
  preload () {}

  create () {
    //Keycodes
    this.cursors = Cursors(this);

    //world
    this.world = new World({
      state: this,
      tilemap: TILEMAP,
      tileset: Tileset(),
      layers: Layers(),
      collision: COLLISION
    });

    //player
    this.player = new Player({
      state: this,
      sprite: Sprite(),
      animation: Animations()
    });

    this.playerMovement = new PlayerMovement({
      state: this,
      player: this.player.sprite,
      actions: Actions(this),
      timers: Timers(),
      lastKey: LastKey(this)
    });

    //enemies
    this.enemies = new Enemies({
      state: this,
      enemies: Coordenate(),
      animation: EnemyAnimations()
    });

    this.enemyMovement = new EnemyMovement({
      state: this,
      enemies: this.enemies.enemies,
      movement: Movement(),
      coordenate: Coordenate(),
      timers: EnemyTimers()
    });

/*
    this.pauseMenuButton = getPauseMenuActions();
    this.hpPlayer = getHpPlayer();
    this.hpEnemies = getHpEnemies();
    this.selector = spaceBar();
    this.timeMenuPause = this.time.now + 200;
    this.menuPauseOption = -1;


    this.collisionObject = addCollision();
    collisionPlayerWithWorld()

    this.hp = addHp();
    manualCollideAndOverlap();
*/
  }

  update () {
    //menuPause
    //pauseMenu();

    //player
    this.playerMovement.stopPlayer();
    this.playerMovement.playerMovements();
    this.playerMovement.setLastKey();
    this.playerMovement.controlPlayer();

    //enemy
    this.enemyMovement.controlMovement();
  }

}

export default Game;
