
function addBackground(){
  game.stage.backgroundColor = "#0b0116";
}

function addFog () {
  fog = game.add.image(0, -1500, 'fog');
  fog.height = game.height*4;
  fog.alpha = 1;
  game.add.tween(fog).to({x: -2000}, 15000).to({x: -100}, 15000).loop().start();
}

 function dieFog() {
  game.tweens.removeAll();
  game.add.tween(fog).to({alpha: 0}, 2500, Phaser.Easing.Linear.None, true);
  fog.destroy();
}

function addGameOverFireball(){
  fireball = game.add.sprite(292, 295, 'darkFireball');
  fireball.scale.set(0.3, 0.5);
  fireball.animations.add('fire', Phaser.Animation.generateFrameNames('fire', 1, 17), 30, true);
  fireball.animations.play('fire');
}
