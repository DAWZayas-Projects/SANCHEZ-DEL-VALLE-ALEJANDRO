import Phaser from 'phaser';
import { STARTLABEL, MENU_START, MENU_OPTION, MENU_LEVEL, TIME,  GameOverText } from './config/GameOverConstants';
import { MainThemeGameOver } from '../menu/views/Sound';
import KeyCodes from './config/KeyCodes';
import MenuText from '../menu/views/Texts';
import GameOverNavigate from './controllers/Main'

class GameOver extends Phaser.State {
  init () {}
  preload () {}

  create () {
    //keycodes
    this.keyCodes = new KeyCodes(this);

    //sound
    this.sound = MainThemeGameOver(this);
    //background
    this.stage.backgroundColor = '#000000'

    //texts
    this.gameOverText = new  MenuText({
      state: this,
      label: STARTLABEL,
      texts: GameOverText(),
      style: { font: '24px Trade Winds', fill: '#ffffff' },
      selected: '#93051b',
      unselected: '#ffffff',
      defaultValue: false
    });
    this.gameOverText.setGameOverStyle();

    //navigate
    this.navigate = new GameOverNavigate({
      state: this,
      start: MENU_START,
      option: MENU_OPTION,
      menuLevel: MENU_LEVEL,
      levels: this.gameOverText.levels,
      delay: TIME
    });

  }

  update() { this.navigate.navigate() }

}

export default GameOver;
