
function playerMovementsOnFloor(play){
  if(play.cursors.left.isDown) play.player.animations.play('run_left');
  else if(play.cursors.right.isDown) play.player.animations.play('run_right');
	else idleAction(play);
}

function playerMovementsOverhead(play){
	if (play.cursors.left.isDown) play.player.animations.play('jump_left');
	else if (play.cursors.right.isDown) play.player.animations.play('jump_right');
	else{
    if(play.lastKey == Phaser.Keyboard.RIGHT)play.player.animations.play('jump_right');
  	if(play.lastKey == Phaser.Keyboard.LEFT)play.player.animations.play('jump_left');
	}
}

function idleAction(play){
  if (play.player.body.velocity.x == 0 && touchingDown(play.player)){
    if(play.lastKey == Phaser.Keyboard.RIGHT) play.player.animations.play('idle_right');
    if(play.lastKey == Phaser.Keyboard.LEFT) play.player.animations.play('idle_left');
  }
}
