import Phaser from 'phaser';
import  { SettingsText, MenuText } from '../config/MenuConstants';
import { Fog, DestroyFog } from '../views/ImagesAndSprites';

const Menu = function () {
  DestroyFog;
  menuTexts = SetTexts;
  Fog;
  AnchorAndAlpha(menuTexts);
  this.whatMenu = 'main';
  return menuTexts;
};

export const StartMenuText = function () { AddTweenToTexts };

const SetTexts = function () {
  const HALF_CENTER = this.world.centerX / 2;
  const STYLES = { font: '24px Trade Winds', fill: '#ffffff' };
  let menuTextArray = [];
  Object.values(MenuText).map( (text, index) => {
    menuTextArray[index] = this.add.text(this.world.right - HALF_CENTER - text.x, this.world.height - text.y, text.title, STYLES);
  });
  let settingsTextArray = [];
  let settingsValuesTextArray = [];
  Object.values(SettingsText).map((text, index) => {
    if(text.title != "Back")text.values.map((value, index) => {
      settingsValuesTextArray[settingsValuesTextArray.length] = this.add.text(this.world.right - HALF_CENTER + 60 + 32*index, this.world.height - text.y, value, STYLES);
    });
    settingsTextArray[index] = this.add.text(this.world.right - HALF_CENTER - text.x, this.world.height - text.y, text.title, STYLES);
  });
  let settingsTextArrayfull = settingsTextArray.concat(settingsValuesTextArray);
  return menuTextArray.concat(settingsTextArrayfull);
};

const AnchorAndAlpha = function (textArray) {
  const TRANSPARENT = 0;
  textArray.map((text) => {
    this.world.bringToTop(text);
    text.anchor.setTo(0.5, 0.5);
    text.alpha = TRANSPARENT;
  });
};

const TweenToTexts = function () {
  this.menuText.map((text) => {
   if(text.text == "New Game" || text.text == "Continue" || text.text == "Settings" || text.text == "Exit") this.add.tween(text).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
 });
   this.startLabel.destroy();
};


export const StartLabel = function () {
  const TEXT = 'press space to start';
  let startLabel = this.add.text(this.world.centerX, this.world.height - 80, TEXT, { font: '30px Trade Winds', fill: '#ffffff' });
  startLabel.anchor.setTo(0.5, 0.5);
  this.add.tween(startLabel).to({angle: -2}, 500).to({angle: 2}, 500).loop().start();
  return startLabel;
}

export default Menu;
