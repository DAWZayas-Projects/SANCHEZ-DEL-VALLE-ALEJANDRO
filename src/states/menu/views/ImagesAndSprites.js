import Phaser from 'phaser';

const BACKGROUND = function () { return this.stage.backgroundColor = "#0b0116" };

const BackgroundPnj = function () {
  let backgroundPnj = this.add.image(-450, -175, 'pnjBackground');
  backgroundPnj.height = this.height*1.5;
  backgroundPnj.width = this.width*1.15;
  backgroundPnj.alpha = 0;
};

const Logo = function () {
  let logo = this.add.sprite(100, 25, 'logo');
  logo.height = this.height;
  logo.width = this.width;
  logo.alpha = 0;
};

export const Fog = function () {
  let fog = this.add.image(0, -1500, 'fog');
  fog.height = this.height*4;
  fog.alpha = 1;
  this.add.tween(fog).to({x: -2000}, 15000).to({x: -100}, 15000).loop().start();
};

export const DestroyFog = function () {
  this.tweens.removeAll();
  this.add.tween(fog).to({alpha: 0}, 2500, Phaser.Easing.Linear.None, true);
  fog.destroy();
};

const FireBall = function () {
  let fireball = this.add.sprite(292, 295, 'darkFireball');
  fireball.scale.set(0.3, 0.5);
  fireball.animations.add('fire', Phaser.Animation.generateFrameNames('fire', 1, 17), 30, true);
  fireball.animations.play('fire');
};

export const BackgroundTweens = function () {
  this.add.tween(backgroundPnj).to( { alpha: 1 }, 4000, Phaser.Easing.Circular.In, true, 11000);
  this.add.tween(logo).to( { alpha: 1 }, 4000, Phaser.Easing.Linear.None, true, 12000);
};

const AddBackground = function () {
  BACKGROUND;
  BackgroundPnj;
  Logo;
  Fog;
  FireBall;
};

export default AddBackground;
