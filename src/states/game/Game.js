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

import MenuText from '../menu/views/Texts';
import { MainThemeGame } from '../menu/views/Sound';
import PauseNavigate from './menuPause/controllers/Main'
import { TIME, MENU_START, MENU_OPTION, MENU_LEVEL, STARTLABEL, PauseText } from './menuPause/config/MenuPauseConstants'
import { Activate, SpaceBar } from './menuPause/config/MenuPauseKeyCodes'

import UserInterface from './UIAndInteractions/views/UserInterface';
import Interaction from './UIAndInteractions/controllers/Interactions';
import { Hearts, HpPlayer, HpEnemies } from './UIAndInteractions/config/UIConstants';

class Game extends Phaser.State {
  init () {}
  preload () {}

  create () {
    //Keycodes
    this.cursors = Cursors(this);
    this.selector = SpaceBar(this);
    this.activate = Activate(this);

    //sound
    this.sound = MainThemeGame(this);

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

  //menuPause
    this.menuPause = new  MenuText({
      state: this,
      label: STARTLABEL,
      texts: PauseText(),
      style: { font: '24px Trade Winds', fill: '#ffffff' },
      selected: '#93051b',
      unselected: '#ffffff',
      defaultValue: false
    });
    this.menuPause.setPauseStyle();

    this.navigate = new PauseNavigate({
      state: this,
      start: MENU_START,
      option: MENU_OPTION,
      menuLevel: MENU_LEVEL,
      levels: this.menuPause.levels,
      delay: TIME
    });

    //UI And Interactions
    this.userInterface = new UserInterface({
      state: this,
      hearts: Hearts(),
    });

    this.interaction = new Interaction({
      state: this,
      player: this.player.sprite,
      enemies: this.enemies.enemies,
      hpEnemies: HpEnemies(),
      hpPlayer: HpPlayer,
    });

  }

  update () {
    //menuPause
    this.navigate.pauseMenu();

    //player
    this.playerMovement.stopPlayer();
    this.playerMovement.playerMovements();
    this.playerMovement.setLastKey();
    this.playerMovement.controlPlayer();

    //enemy
    this.enemyMovement.controlMovement();

    //die or not
    this.interaction.playerInWorld();
  }

}

export default Game;
