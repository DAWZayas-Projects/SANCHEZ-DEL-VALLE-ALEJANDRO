import Phaser from 'phaser';
import { STARTLABEL, MENU_START, MENU_OPTION, MENU_LEVEL, TIME, Options, MainText, SettingsText, SettingTextOptions, BackgroundImages, FireBall, Fog } from './config/MenuConstants';
import { MainThemeMenu } from './views/Sound';
import KeyCodes from './config/KeyCodes';
import MenuBackground from './views/ImagesAndSprites';
import MenuText from './views/Texts';
import Navigate from './controllers/Main'

class Menu extends Phaser.State {
  init () {}
  preload () {}

  create () {
    //keycodes
    this.keyCodes = new KeyCodes(this);

    //sound
    this.sound = MainThemeMenu(this);

    //background
    this.background = new MenuBackground({
      state: this,
      backgroundColor: "#0b0116",
      backgroundImage: BackgroundImages(),
      specialBackground: Fog,
      sprite: FireBall,
      defaultValue: true
    });

    //texts
    const Texts = [ MainText(), SettingsText(), SettingTextOptions()];
    this.menuText = new  MenuText({
      state: this,
      label: STARTLABEL,
      texts: Texts,
      style: { font: '24px Trade Winds', fill: '#ffffff' },
      selected: '#93051b',
      unselected: '#ffffff',
      defaultValue: true
    });

    this.keyCodes.selector.onDown.addOnce(this.menuText.callBackMenuText, this.menuText);

    //navigate
    this.navigate = new Navigate({
      state: this,
      start: MENU_START,
      option: MENU_OPTION,
      menuLevel: MENU_LEVEL,
      levels: this.menuText.levels,
      delay: TIME
    });

  }

  update() { this.navigate.navigate() }

}

export default Menu;
