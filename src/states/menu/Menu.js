import Phaser from 'phaser';
import { SOUND_LEVEL, FULLSCREEN, TIME, STARTLABEL, MENU_START, MENU_OPTION, MENU_LEVEL, Options,
   MainText, SettingsText, SettingTextOptions, BackgroundImages, FireBall, Fog } from './config/MenuConstants';
import KeyCodes from './config/KeyCodes';
import { MainThemeMenu } from './views/Sound';
import MenuBackground from './views/ImagesAndSprites';
import MenuText from './views/Texts';
import Navigate from './controllers/Main'

class Menu extends Phaser.State {
  init () {
    //config
    let soundLevel = SOUND_LEVEL;
    let fullScreen = FULLSCREEN;
  }

  preload () {}

  create () {
    //keycodes
    this.keyCodes = new KeyCodes(this);

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
      options: Options(),
      menuLevel: MENU_LEVEL,
      levels: this.menuText.levels,
      delay: TIME
    });

  }

  update() { this.navigate.navigate() }

}

export default Menu;
