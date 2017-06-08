
function collisionPlayerWithWorld(){
  playerMaterial = game.physics.p2.createMaterial('playerMaterial', playState.player.body);
  collideObject = game.physics.p2.createMaterial('collideObject', playState.collisionObject.body);
  iterationPlayerWorld = game.physics.p2.createContactMaterial(playerMaterial, collideObject);
  iterationPlayerWorld.restitution = 0;
  iterationPlayerWorld.stiffness = 1e10;
}
