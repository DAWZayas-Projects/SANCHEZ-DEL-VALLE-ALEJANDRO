import Phaser from 'phaser';
import { StyleSettingsValues } from './NavigatesAndStyles';

export const StartPlayState =  function() {
  console.log('aqui empieza el juego');
  //this.state.start('play');
}

export const SettingsOption = function (){
  this.whatMenu = 'settings';
  this.menuText.map( (text) =>{
    if(text.text != "FullScreen" && text.text != "Sound" && text.text != "Back") this.add.tween(text).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
    else this.add.tween(text).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
  });
};

export const MainMenu = function (){
  this.whatMenu = 'main';
  this.menuText.map( (text) =>{
    if(text.text == "New Game" || text.text == "Continue" || text.text == "Settings" || text.text == "Exit" ) this.add.tween(text).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
    else this.add.tween(text).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
  });
};

const StartFullScreenOn = function () {
  this.fullScreen = "Yes"
  this.scale.startFullScreen();
  FullScreenOption;
};

const StartFullScreenOff = function () {
  this.fullScreen = "No"
  this.scale.stopFullScreen();
  FullScreenOption;
};

const ToggleSoundUp = function () {
  if(this.soundLevel < 10) {
    this.soundLevel++;
    this.sound.volume += 0.1;
  }
  SoundOption;
};

const ToggleSoundDown = function () {
   if(this.soundLevel > 0) {
     this.soundLevel --;
     this.sound.volume -=0.1;
   }
   SoundOption;
};


const FullScreenOption =  function (){
 this.menuText.map( (text) =>{
     if(text.text == "Yes" || text.text == "/" || text.text == "No"){
       text.alpha = 1;
       if(text.text == this.fullScreen)text.fill = StyleSettingsValues(true);
       else text.fill = StyleSettingsValues(false);
     }
     if(text.text == this.soundLevel){
       text.alpha = 0;
     }
   });
 this.cursors.right.onDown.remove(ToggleSoundUp, this);
 this.cursors.left.onDown.remove(ToggleSoundDown, this);
 this.cursors.right.onDown.addOnce(StartfullScreenOn, this);
 this.cursors.left.onDown.addOnce(StartfullScreenOff, this);
};


const SoundOption = function (){
  this.menuText.map( (text, index) =>{
     if(text.text == "Yes" || text.text == "/" || text.text == "No") text.alpha = 0;
     if(text.text == this.soundLevel){
       text.alpha = 1;
       text.x = 1050;
     }else if (text.text === this.soundLevel+1 || text.text === this.soundLevel-1)text.alpha = 0;
   });
 this.cursors.right.onDown.remove(StartfullScreenOn, this);
 this.cursors.left.onDown.remove(StartfullScreenOff, this);
 this.cursors.right.onDown.add(ToggleSoundUp, this);
 this.cursors.left.onDown.add(ToggleSoundDown, this);
};

export { FullScreenOption, SoundOption };
