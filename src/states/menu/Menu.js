import Phaser from 'phaser';
import { SOUND_LEVEL, FULLSCREEN, TIME, STARTLABEL, MainText, SettingsText, SettingTextOptions, BackgroundImages, FireBall, Fog } from './config/MenuConstants';
//import { SpaceBar, Cursors } from './config/KeyCodes';
import { MainThemeMenu } from './views/Sound';
import MenuBackground from './views/ImagesAndSprites';
import MenuText from './views/Texts';
import Navigate from './controllers/Main'

class Menu extends Phaser.State {
  init () {
    //config
    let timeMenu = TIME;
  //  let menuOption = MENU_OPTION;
    let soundLevel = SOUND_LEVEL;
    let fullScreen = FULLSCREEN;
  }

  preload () {}

  create () {
    //keycodes
    //this.selector = SpaceBar;
    //this.cursors = Cursors;

    //background
    this.background = new MenuBackground({
      game: this,
      backgroundColor: "#0b0116",
      backgroundImage: BackgroundImages(),
      specialBackground: Fog,
      sprite: FireBall,
      defaultValue: true
    });

    console.log(this.background.specialBackground);
    //texts
    const Texts = [ MainText(), SettingsText(), SettingTextOptions()];
    this.menuText = new  MenuText({
      game: this,
      label: STARTLABEL,
      texts: Texts,
      style: { font: '24px Trade Winds', fill: '#ffffff' },
      defaultValue: true
    });
    //this.selector.onDown.addOnce(StartMenuText, self);
    //animation de Background
    //BackgroundTweens;

    //update
    this.update = Navigate;

  }

}

export default Menu;
