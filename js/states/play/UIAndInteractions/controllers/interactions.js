
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
  hitScanPlayer(body1, body2);
  hitScanEnemy(body1, body2)
}

function addTimeOnHitEnemyComplete(body){
body.sprite.animations.currentAnim.onComplete.add(hitEnemyTime, this);
}

function hitScanPlayer(body1, body2){
  if(isPlayerAttackRight()){
    body1.sprite.key === 'enemy' ? hitEnemyRight(body1) : hitEnemyRight(body2);
  }
  if(isPlayerAttackLeft()){
    body1.sprite.key === 'enemy' ? hitEnemyLeft(body1) : hitEnemyLeft(body2);
  }
}

function hitScanEnemy(body1, body2){
  if(!(isPlayerAttackRight() || isPlayerAttackLeft())){
    hitPlayer();
  }
}

function hitPlayer(){
  if(playState.timersPlayer.hit <= playState.time.now && playState.timersPlayer.attack <= playState.time.now && playState.timersEnemy.attack <= playState.time.now ){
    if(playState.hpPlayer != 1){
      playState.hpPlayer--;
      HpDown(playState.hpPlayer);
      playState.timersPlayer.hit = playState.time.now + 1500;
    }else{
      game.state.start('gameOver');
    }
  }
}

function whatAnimationEnemy(body){
  playState.enemies.children.map((enemy, index) => {
    if(enemy === body)theEnemy = index;
  });
  return theEnemy
}

function addHitEnemyTime(body){
  index = whatAnimationEnemy(body);
  playState.hpEnemies[index]--;
  playState.timersEnemy.hit = playState.time.now + 600;
}

function addKillEnemyTime(body){
  index = whatAnimationEnemy(body);
  playState.hpEnemies[index]--;
  playState.enemies.children[index].kill();
  playState.enemies.children[index].destroy();
  playState.timersEnemy.hit = playState.time.now + 600;
}

function hitEnemyRight(body){
  if(playState.timersEnemy.hit <= playState.time.now){
    index = whatAnimationEnemy(body.sprite);
    if(playState.hpEnemies[index] != 1){
      body.sprite.animations.play('hit_right');
      addTimeOnHitEnemyComplete(body);
    }else{
      body.sprite.animations.play('die');
      addTimeOnKillEnemyComplete(body);
    }
  }
}

function hitEnemyLeft(body){
  if(playState.timersEnemy.hit <= playState.time.now){
    index =   whatAnimationEnemy(body.sprite);
    if(playState.hpEnemies[index] != 1){
      body.sprite.animations.play('hit_left');
      addTimeOnHitEnemyComplete(body);
    }else{
      body.sprite.animations.play('die');
      addTimeOnKillEnemyComplete(body);

    }
  }
}

function addTimeOnKillEnemyComplete(body){
  body.sprite.animations.currentAnim.onComplete.add(addKillEnemyTime, this);
}

function addTimeOnHitEnemyComplete(body){
  body.sprite.animations.currentAnim.onComplete.add(addHitEnemyTime, this);
}

function isPlayerAttackRight(){
  return playState.player.animations.currentAnim.name === 'attack_right_first' || playState.player.animations.currentAnim.name === 'attack_right_second' ||
  playState.player.animations.currentAnim.name === 'attack_right_third' ? true : false;
}

function isPlayerAttackLeft(){
  return playState.player.animations.currentAnim.name === 'attack_left_first' || playState.player.animations.currentAnim.name === 'attack_left_second' ||
  playState.player.animations.currentAnim.name === 'attack_left_third' ? true : false;
}
