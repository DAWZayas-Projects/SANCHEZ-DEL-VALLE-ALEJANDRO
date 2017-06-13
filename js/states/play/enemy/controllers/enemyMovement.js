
function controlEnemy(){
  play = playState;
  touchingDownEnemies(play);
}

function touchingDownEnemies(play){
  play.enemies.children.map( (enemy) => {
    if(touchingDown(enemy)) {
    if(isHit(enemy.z))enemyAttackAction(enemy.z);
      if(canMove(enemy.z))selectMovementEnemy(enemy.z);
    }
  });
}

function selectMovementEnemy(index){
  const COORDENATE = Object.values(getAllEnemies())[index].x;
  if(playState.player.x - playState.enemies.getChildAt(index).x >= -150 && playState.player.x - playState.enemies.getChildAt(index).x <= 0 )playState.movementEnemy[index] = 'left';
  else if(playState.enemies.getChildAt(index).x - playState.player.x >= -150 && playState.enemies.getChildAt(index).x - playState.player.x <= 0)playState.movementEnemy[index] = 'right';
  else {
    if((COORDENATE  + 50) - playState.enemies.getChildAt(index).x <= 1 )playState.movementEnemy[index] = 'left';
    if(playState.enemies.getChildAt(index).x - (COORDENATE -50) <= 1 )playState.movementEnemy[index] = 'right';
  }
  enemyMovement(index);
}

function enemyMovement(index){
  if(playState.movementEnemy[index] == 'right'){
    playState.enemies.getChildAt(index).body.velocity.x = 30;
    playState.enemies.getChildAt(index).animations.play('run_right');
  }
  else if(playState.movementEnemy[index] == 'left'){
    playState.enemies.getChildAt(index).body.velocity.x = -30;
    playState.enemies.getChildAt(index).animations.play('run_left');
  }
 }

 function canMove(index){
   return ((playState.player.x - playState.enemies.getChildAt(index).x >= -100 && playState.player.x - playState.enemies.getChildAt(index).x <= 0)
 	|| (playState.enemies.getChildAt(index).x - playState.player.x >= -100 && playState.enemies.getChildAt(index).x - playState.player.x <= 0)) ? false : true;
 }

 function isHit(index){
 return (playState.enemies.getChildAt(index).animations.currentAnim.name === 'hit_right') || (playState.enemies.getChildAt(index).animations.currentAnim.name === 'hit_left' ||
  playState.enemies.getChildAt(index).animations.currentAnim.name === 'die') ? false : true;
 }
