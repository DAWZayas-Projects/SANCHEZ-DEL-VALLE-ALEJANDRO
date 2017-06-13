
function enemyAttackAction(index) {
	if(canAttack(index))secondAttack(index);
}

function firstAttack(index){
  if(playState.movementEnemy[index] == 'right')playState.enemies.getChildAt(index).animations.play('attack_right_first');
  if(playState.movementEnemy[index] == 'left')playState.enemies.getChildAt(index).animations.play('attack_left_first');
  addTimeOnAttackEnemyComplete(index);
}

function secondAttack(index){
  if(playState.movementEnemy[index] == 'right')playState.enemies.getChildAt(index).animations.play('attack_right_second');
  if(playState.movementEnemy[index] == 'left')playState.enemies.getChildAt(index).animations.play('attack_left_second');
	addTimeOnAttackEnemyComplete(index);
}

function addTimeOnAttackEnemyComplete(index){
  playState.enemies.getChildAt(index).animations.currentAnim.onComplete.add(enemyAttackTime, this);
}

function enemyAttackTime(){
  playState.timersEnemy.attack = play.time.now + 2000;
}

function canAttack(index){
	return ( (playState.player.x - playState.enemies.getChildAt(index).x >= -100 && playState.player.x - playState.enemies.getChildAt(index).x <= 0)
	|| (playState.enemies.getChildAt(index).x - playState.player.x >= -100 && playState.enemies.getChildAt(index).x - playState.player.x <= 0)) && playState.timersEnemy.attack<= play.time.now
	? true : false;
}
