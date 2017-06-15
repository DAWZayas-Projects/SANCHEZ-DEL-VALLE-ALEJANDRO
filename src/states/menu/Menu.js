import Phaser from 'phaser';
import { MENU_OPTION, SOUND_LEVEL, FULLSCREEN, TIME, WHAT_MENU, STARTLABEL, MainText, SettingsText, SettingTextOptions } from './config/MenuConstants';
//import { SpaceBar, Cursors } from './config/KeyCodes';
import { MainThemeMenu } from './views/Sound';
import AddBackground from './views/ImagesAndSprites';
import { BackgroundTweens } from './views/ImagesAndSprites';
import MenuText from './views/Texts';
import Navigate from './controllers/Main'

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
    //keycodes
    //this.selector = SpaceBar;
    //this.cursors = Cursors;
    //background
    //AddBackground;

    //texts
    const Texts = [ MainText(), SettingsText(), SettingTextOptions()];
    this.menuText = new  MenuText({
      game: this,
      label: STARTLABEL,
      texts: Texts,
      style: { font: '24px Trade Winds', fill: '#ffffff' }
    });
    this.menuText.addAdditionalStyleLabel();
    this.menuText.setAdditionalStyle();
    //this.selector.onDown.addOnce(StartMenuText, self);
    //animation de Background
    //BackgroundTweens;

    //update
    this.update = Navigate;

  }

}

export default Menu;
