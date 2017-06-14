import { PositionAfterPlay } from '../config/MenuConstants';
import { DownMainMenu, UpMainMenu, DownSettingMenu, UpSettingMenu } from './NavigatesAndStyles';
import { StyleMainOptions, StyleSettingsOptions, SelectorMainOptions, SelectorSettingsOptions } from './NavigatesAndStyles';


const Navigate = function () {
  if(this.whatMenu === 'main'){
    DisplayMainNavigate;
  }else if(this.whatMenu === 'settings'){
    DisplaySettingsNavigate;
  }
};

const DisplayMainNavigate = function () {
  if(this.cursors.down.isDown && this.timeMenu<this.time.now){
      this.timeMenu = this.time.now + 200;
      DownMainMenu;
      StyleMainOptions;
  }
  if(this.cursors.up.isDown && this.timeMenu<this.time.now){
      this.timeMenu = this.time.now + 200;
      UpMainMenu;
      StyleMainOptions;
  }
  SelectorMainOptions;
};

const DisplaySettingsNavigate = function () {
  if(this.cursors.down.isDown && this.timeMenu<this.time.now){
      this.timeMenu = this.time.now + 200;
      DownSettingsMenu;
      StyleSettingsOptions;
  }
  if(this.cursors.up.isDown && this.timeMenu<this.time.now){
      this.timeMenu = this.time.now + 200;
      UpSettingsMenu;
      StyleSettingsOptions;
  }
  SelectorSettingsOptions;
};

export const RestoreText = function () {
  // en el if va Game.player
  if(false){
    let iterator = 0;
    this.menuText.map((text) => {
      text.x = Object.values(PositionAfterPlay)[iterator].x;
      text.y = Object.values(PositionAfterPlay)[iterator].y;
      iterator++;
    });
    this.startLabel.x = 600;
    this.startLabel.y = 620;
  }
};

export default Navigate;
