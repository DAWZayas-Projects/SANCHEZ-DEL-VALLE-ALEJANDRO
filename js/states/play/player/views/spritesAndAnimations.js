
function addPlayer() {
  player = addSpritePlayer();
  addPhysicsPlayer(player);
  addAnimationsPlayer(player);
  console.log(player);
  return player;
}

function addSpritePlayer(){
  player = game.add.sprite(300, 300, 'player');
  player.scale.set(0.5, 0.5);
  return player;
}

function  addAnimationsPlayer(player){
  Object.values(getPlayerAnimations()).map( (animation) => {
    player.animations.add(animation.name, Phaser.Animation.generateFrameNames(animation.name, animation.firstSprite, animation.lastSprite), animation.fps, animation.loop);
  });
}
