
function playerattackAction(play) {
	if(play.timersPlayer.attack <= play.time.now && touchingDown(play.player)){
		simpleAttack(play);
	}else if(play.cursors.down.isDown && play.timersPlayer.attack <= play.time.now && !touchingDown(play.player)){
    downAttack(play);
	}else if(play.timersPlayer.attack <= play.time.now && !touchingDown(play.player)){
    airAttack(play);
	}
}


function simpleAttack(play){
  if(play.lastKey == Phaser.Keyboard.RIGHT)setAttack(play, 'attack_right_first');
  if(play.lastKey == Phaser.Keyboard.LEFT)setAttack(play, 'attack_left_first');
  addTimeOnAttackComplete(play);
}

function airAttack(play){
  if(play.lastKey == Phaser.Keyboard.RIGHT)setAttack(play, 'attack_right_second');
  if(play.lastKey == Phaser.Keyboard.LEFT)setAttack(play, 'attack_left_second');
}

function downAttack(){
  if(play.lastKey == Phaser.Keyboard.RIGHT)setAttack(play, 'attack_right_third');
  if(play.lastKey == Phaser.Keyboard.LEFT)setAttack(play, 'attack_left_third');
  player.body.velocity.y = 800;
}

function setAttack(play, animation){
  play.player.animations.play(animation);
}

function addTimeOnAttackComplete(play){
  play.player.animations.currentAnim.onComplete.add(attackTime, this);
}

function attackTime(){
  play.timersPlayer.attack = play.time.now + 200;
}
