
function controlPlayer(){
  play = playState;
  if(play.actions.dash.isDown && play.timersPlayer.dash <= play.time.now)playerDashAction(play);
  else if(play.actions.attack.isDown)playerattackAction(play);
  else playerMovementAction(play);

}

function playerMovementAction(play){
  touchingDown(play.player) ? playerMovementsOnFloor(play) : playerMovementsOverhead(play);
}

function playerMovements(){
  play = playState;
  if(play.cursors.left.isDown) play.player.body.velocity.x = -600;
  else if (play.cursors.right.isDown) play.player.body.velocity.x = 600;
	else play.player.body.velocity.x = 0;
  jumpMovement(play);
}

function  jumpMovement(play){
  if( play.actions.jump.isDown && touchingDown(play.player) && play.timersPlayer.jump <= play.time.now){
    jump(play);
  }
}

function jump(play){
  play.player.body.velocity.y = -1000;
  play.timersPlayer.jump = play.time.now + 50;
}

function setLastKey() {
  if(game.input.keyboard.lastKey && (game.input.keyboard.lastKey.keyCode == Phaser.Keyboard.LEFT || game.input.keyboard.lastKey.keyCode == Phaser.Keyboard.RIGHT)) {
    playState.lastKey = game.input.keyboard.lastKey.keyCode;
  }
}

function stopPlayer(){
  playState.player.body.velocity.x = 0;
}

//pendiente de ser tocado
function touchingDown(someone) {
    yAxis = p2.vec2.fromValues(0, 1);
    result = false;
    for ( i = 0; i < game.physics.p2.world.narrowphase.contactEquations.length; i++) {
         c = game.physics.p2.world.narrowphase.contactEquations[i];  // cycles through all the contactEquations until it finds our "someone"
        if (c.bodyA === someone.body.data || c.bodyB === someone.body.data)        {
            d = p2.vec2.dot(c.normalA, yAxis); // Normal dot Y-axis
            if (c.bodyA === someone.body.data) d *= -1;
            if (d > 0.5) result = true;
        }
    } return result;
}
