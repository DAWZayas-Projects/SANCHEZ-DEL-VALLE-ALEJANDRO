import Phaser from 'phaser';

class Player {
  constructor ({ state, sprite, animation }) {
    this.state = state;

    //sprite
    this.sprite = this.setsprite(sprite);
    this.scalePlayer();
    this.addAnimations(animation);

    //physics
    this.addPhysics();
    this.camera();

  }

  setsprite(sprite){ return this.state.add.sprite(sprite.x, sprite.y, sprite.name) }

  scalePlayer(){ this.sprite.scale.set(0.5) }

  addAnimations(animations){
    Object.values(animations).map( (animation) => {
      this.sprite.animations.add(animation.name, Phaser.Animation.generateFrameNames(animation.name, animation.firstSprite, animation.lastSprite), animation.fps, animation.loop);
    });
  }

  addPhysics(){
    this.state.physics.p2.enable(this.sprite, true);
    this.sprite.body.setCircle(40,0,0);
    this.sprite.body.fixedRotation=true;
  }

  camera(){ this.state.camera.follow(this.sprite) }

}

export default Player;
