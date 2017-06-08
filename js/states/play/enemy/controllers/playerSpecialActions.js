
function playerDash(play){
  if(play.timersPlayer.dash <= play.time.now)playerDashAction(play);
}

function playerDashAction(play){
  if(play.cursors.left.isDown)setSpecialAction(play, -1500, 'dash_left');
  else if(play.cursors.right.isDown)setSpecialAction(play, 1500, 'dash_right');
  else idleAction(play);
}

function addTimeOnDashComplete(play){
  play.player.animations.currentAnim.onComplete.add(dashTime, this);
}

function dashTime(){
  play.timersPlayer.dash = play.time.now + 2500;
}

function setSpecialAction(play, velocity, animation){
  play.player.body.velocity.x = velocity;
  play.player.animations.play(animation);
  addTimeOnDashComplete(play);
}
