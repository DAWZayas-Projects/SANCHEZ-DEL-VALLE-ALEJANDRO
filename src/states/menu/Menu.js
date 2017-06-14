import Phaser from 'phaser';
import { MENU_OPTION, SOUND_LEVEL, FULLSCREEN, TIME, WHAT_MENU } from './config/MenuConstants';
import { SpaceBar, Cursors } from './config/KeyCodes';
import { MainThemeMenu } from './views/Sound';
import AddBackground from './views/ImagesAndSprites';
import { BackgroundTweens } from './views/ImagesAndSprites';
import MenuTexts from './views/Texts';
import { StartLabel, StartMenuText } from './views/Texts';
import Navigate from './controllers/Main'
import { RestoreText } from './controllers/Main';

class Menu extends Phaser.State {
  init () {
    //config
    let timeMenu = TIME;
    let menuOption = MENU_OPTION;
    let whatMenu = WHAT_MENU;
    let soundLevel = SOUND_LEVEL;
    let fullScreen = FULLSCREEN;
  }

  preload () {}

  create () {
    const self = this;
    //keycodes
    this.selector = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    this.cursors = Cursors;

    //background
    AddBackground;

    //texts
    this.menuText = MenuTexts;
    this.startLabel = StartLabel;
    this.selector.onDown.addOnce(StartMenuText, self);

    //animation de Background
    BackgroundTweens;

    //if came from Game
    RestoreText;

    //update
    this.update = Navigate;

  }

}

export default Menu;
