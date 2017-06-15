import Phaser from 'phaser';

class MenuBackground  {
  constructor ({ game, backgroundColor, backgroundImage, specialBackground, sprite, defaultValue}) {
    //state
    this.state = game;

    //background
    this.backgroundColor = this.setBackgroundColor(backgroundColor);
    this.backgroundImage = this.setBackgroundImage(backgroundImage);

    //specials
    this.sprite = this.setSprite(sprite);
    this.specialBackground = this.setSpecialBackground(specialBackground);

    //default
    if (defaultValue)this.default();
  }

  setBackgroundColor(backgroundColor){ this.state.stage.backgroundColor = backgroundColor }

  setBackgroundImage(newBackgroundImage){
    let backgroundImage = [];
    newBackgroundImage.map( (image, index) => {
      backgroundImage[index] = this.state.add.image(image.x, image.y, image.name );
      backgroundImage[index].width = this.width*image.width;
      backgroundImage[index].height = this.height*image.height;
    });
    return backgroundImage;
  }

  invisibleBackgroundImage(){
    const TRANSPARENT = 0;
    this.backgroundImage.map( (image) => {
      image.alpha = TRANSPARENT;
    });
  }

  setSprite(newSprite){
    let sprite = this.state.add.sprite(newSprite.x, newSprite.y, newSprite.name);
    sprite.animations.add(newSprite.animation, Phaser.Animation.generateFrameNames(newSprite.animation, newSprite.first, newSprite.last), newSprite.fps, newSprite.loop);
    sprite.animations.play(newSprite.animation);
    return sprite;
  }

  setStyleSprite(){ this.sprite.scale.set(0.3, 0.5) }

  setSpecialBackground(newSpecialBackground){
    let specialBackground = this.state.add.image(newSpecialBackground.x, newSpecialBackground.y, newSpecialBackground.name);
    specialBackground.width = this.state.width*newSpecialBackground.width;
    specialBackground.height = this.state.height*newSpecialBackground.height;
    return specialBackground;
  }

  startSpecialBackground(){
    this.specialBackground.alpha = 1;
    this.state.add.tween(this.specialBackground).to({x: -2000}, 15000).to({x: -100}, 15000).loop().start();
  }

  backgroundTween(){
    this.backgroundImage.map( (image) => {
      this.state.add.tween(image).to( { alpha: 1 }, 4000, Phaser.Easing.Circular.In, true, 11000);
    });
  }

  default(){
    this.invisibleBackgroundImage();
    this.setStyleSprite();
    this.startSpecialBackground();
    this.backgroundTween();
  }

}

export default MenuBackground;
