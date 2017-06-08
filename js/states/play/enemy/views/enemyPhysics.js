
function addPhysicsEnemy(enemy){
  enemy.enableBody = true;
  game.physics.p2.enable(enemy, true);
  enemy.overlap(playState.player, enemy);
  enemy.body.setRectangle(40, 50);
  player.body.fixedRotation=true;
}

function manualCollideAndOverlap(){
  game.physics.p2.setPostBroadphaseCallback(checkOverlap, this);
}

function checkOverlap(body1, body2) {
  if(body1.sprite && body2.sprite){
    if((body1.sprite.key === 'player' && body2.sprite.key === 'enemy') || (body2.sprite.key === 'player' && body1.sprite.key === 'enemy') ){
      hitScan(body1, body2);
      return false;
    }
  }
  return true;
}

function hitScan(body1, body2){
  if(playState.player.animations.currentAnim.name === 'attack_right_first'){
    body1.sprite.key === 'enemy' ? body1.sprite.animations.play('hit_right') : body2.sprite.animations.play('hit_right');
    addTimeOnHitEnemyComplete(body1);
  }
  if( playState.player.animations.currentAnim.name === 'attack_left_first'){
    body1.sprite.key === 'enemy' ? body1.sprite.animations.play('hit_left') : body2.sprite.animations.play('hit_left');
    addTimeOnHitEnemyComplete(body1);
  }
}

function addTimeOnHitEnemyComplete(body){
body.sprite.animations.currentAnim.onComplete.add(hitEnemyTime, this);
}

function hitEnemyTime(){
  play.timersEnemy.hit = play.time.now + 200;
}
