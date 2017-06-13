
function addPhysicsPlayer(player){
  game.physics.p2.enable(player, true);
  player.body.setCircle(40,0,0);
  player.body.fixedRotation=true;
}
