
function addPhysicsEnemy(enemy){
  enemy.enableBody = true;
  game.physics.p2.enable(enemy, true);
  enemy.overlap(playState.player, enemy);
  enemy.body.setRectangle(40, 50);
  player.body.fixedRotation=true;
}
