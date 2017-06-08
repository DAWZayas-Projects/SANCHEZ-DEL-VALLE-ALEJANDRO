
function enemyAttackAction(index) {
	if(canAttack(index))firstAttack(index);
}

function firstAttack(index){
  if(playState.movementEnemy[index] == 'right')playState.enemies.getChildAt(index).animations.play('attack_right_first');
  if(playState.movementEnemy[index] == 'left')playState.enemies.getChildAt(index).animations.play('attack_left_first');
  addTimeOnAttackEnemyComplete(play);
}

function secondAttack(index){
  if(playState.movementEnemy[index] == 'right')playState.enemies.getChildAt(index).animations.play('attack_right_second');
  if(playState.movementEnemy[index] == 'left')playState.enemies.getChildAt(index).animations.play('attack_left_second');
	addTimeOnAttackEnemyComplete(play);
}

function addTimeOnAttackEnemyComplete(){
  //playState.player.animations.currentAnim.onComplete.add(attackTime, this);
}

function attackTime(){
  play.timersPlayer.attack = play.time.now + 200;
}

function canAttack(index){
	return ( (playState.player.x - playState.enemies.getChildAt(index).x >= -100 && playState.player.x - playState.enemies.getChildAt(index).x <= 0)
	|| (playState.enemies.getChildAt(index).x - playState.player.x >= -100 && playState.enemies.getChildAt(index).x - playState.player.x <= 0)) ? true : false;
}

function selectAttack(index){
	Math.round(Math.random()) == 1 ? firstAttack(index) : secondAttack(index);
}
