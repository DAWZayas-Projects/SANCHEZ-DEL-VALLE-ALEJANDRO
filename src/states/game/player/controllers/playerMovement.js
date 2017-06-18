import 'pixi'
import 'p2'
import Phaser from 'phaser'

class PlayerMovement {
  constructor ({ state, player, actions, timers, lastKey }) {
    this.state = state;
    this.player = player;

    //config
    this.actions = actions;
    this.timers = timers;
    this.lastKey  = lastKey

  }

  playerMovements(){
    if(this.state.cursors.left.isDown) this.player.body.velocity.x = -600;
    else if (this.state.cursors.right.isDown) this.player.body.velocity.x = 600;
  	else this.player.body.velocity.x = 0;
    this.jumpMovement();
  }

  jumpMovement(){ if( this.actions.jump.isDown && this.touchingDown(this.player) && this.timers.jump <= this.state.time.now )this.jump() }

  jump(){
    this.player.body.velocity.y = -1000;
    this.timers.jump = this.state.time.now + 50;
  }

  controlPlayer(){
    if(this.actions.dash.isDown && this.timers.dash <= this.state.time.now)this.playerDashAction();
    else if(this.actions.attack.isDown)this.playerattackAction();
    else this.playerMovementAction();
  }



  playerMovementAction(){ this.touchingDown(this.player) ? this.playerMovementsOnFloor() : this.playerMovementsOverhead() }

  setLastKey() {
    if(this.state.input.keyboard.lastKey && (this.state.input.keyboard.lastKey.keyCode == Phaser.Keyboard.LEFT || this.state.input.keyboard.lastKey.keyCode == Phaser.Keyboard.RIGHT)) {
      this.lastKey = this.state.input.keyboard.lastKey.keyCode;
    }
  }

  stopPlayer(){ this.player.body.velocity.x = 0 }

  touchingDown(someone) {
      let yAxis = p2.vec2.fromValues(0, 1);
      let result = false;
      for (let i = 0; i < this.state.physics.p2.world.narrowphase.contactEquations.length; i++) {
           let c = this.state.physics.p2.world.narrowphase.contactEquations[i];  // cycles through all the contactEquations until it finds our "someone"
          if (c.bodyA === someone.body.data || c.bodyB === someone.body.data){
              let d = p2.vec2.dot(c.normalA, yAxis); // Normal dot Y-axis
              if (c.bodyA === someone.body.data) d *= -1;
              if (d > 0.5) result = true;
          }
     } return result;
   }

   //movement
   playerMovementsOnFloor(){
     if(this.state.cursors.left.isDown)this.player.animations.play('run_left');
     else if(this.state.cursors.right.isDown) this.player.animations.play('run_right');
   	 else this.idleAction();
   }

   playerMovementsOverhead(){
   	if (this.state.cursors.left.isDown)this.player.animations.play('jump_left');
   	else if (this.state.cursors.right.isDown)this.player.animations.play('jump_right');
   	else{
      if(this.lastKey == Phaser.Keyboard.RIGHT)this.player.animations.play('jump_right');
     	if(this.lastKey == Phaser.Keyboard.LEFT)this.player.animations.play('jump_left');
   	}
   }

   idleAction(){
     if (this.player.body.velocity.x == 0 && this.touchingDown(this.player)){
       if(this.lastKey == Phaser.Keyboard.RIGHT) this.player.animations.play('idle_right');
       if(this.lastKey == Phaser.Keyboard.LEFT) this.player.animations.play('idle_left');
     }
   }

  //dash
  playerDashAction(){
    if(this.state.cursors.left.isDown)this.setSpecialAction(-1500, 'dash_left');
    else if(this.state.cursors.right.isDown)this.setSpecialAction(1500, 'dash_right');
    else this.idleAction();
  }

  setSpecialAction(velocity, animation){
    this.player.body.velocity.x = velocity;
    this.player.animations.play(animation);
    this.addTimeOnDashComplete();
  }

  addTimeOnDashComplete(){ this.player.animations.currentAnim.onComplete.add(this.dashTime, this) }

  dashTime(){ this.timers.dash = this.state.time.now + 2500 }

  //attack
  playerattackAction() {
  	if(this.timers.attack <= this.state.time.now && this.touchingDown(this.player)){
  		this.simpleAttack();
  	}else if(this.state.cursors.down.isDown && this.timers.attack <= this.state.time.now && !this.touchingDown(this.player)){
      this.downAttack();
  	}else if(this.timers.attack <= this.state.time.now && !this.touchingDown(this.player)){
      this.airAttack();
  	}
  }

  simpleAttack(){
    if(this.lastKey == Phaser.Keyboard.RIGHT)this.setAttack('attack_right_first');
    if(this.lastKey == Phaser.Keyboard.LEFT)this.setAttack('attack_left_first');
    this.addTimeOnAttackComplete();
  }

  airAttack(){
    if(this.lastKey == Phaser.Keyboard.RIGHT)this.setAttack('attack_right_second');
    if(this.lastKey == Phaser.Keyboard.LEFT)this.setAttack('attack_left_second');
  }

  downAttack(){
    if(this.lastKey == Phaser.Keyboard.RIGHT)this.setAttack('attack_right_third');
    if(this.lastKey == Phaser.Keyboard.LEFT)this.setAttack('attack_left_third');
    this.player.body.velocity.y = 800;
  }

  setAttack(animation){ this.player.animations.play(animation) }

  addTimeOnAttackComplete(){ this.player.animations.currentAnim.onComplete.add(this.attackTime, this) }

  attackTime(){ this.timers.attack = this.state.time.now + 200 }

}

export default PlayerMovement;
