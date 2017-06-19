import 'pixi'
import 'p2'
import Phaser from 'phaser'

class EnemyMovement {
  constructor ({ state, enemies, movement, coordenate, timers }) {
    this.state = state;
    this.enemies = enemies;

    //config
    this.movement = movement;
    this.coordenate = Object.values(coordenate);
    this.timers = timers;

  }

  controlMovement(){
    this.enemies.children.map( (enemy) => {
      if(this.touchingDown(enemy)) {
        if(enemy.z == 0)console.log(this.isHit(enemy.z));
        if(this.isHit(enemy.z))this.enemyAttackAction(enemy.z);
        if(this.canMove(enemy.z))this.selectMovement(enemy.z);
      }
    });
  }

  canMove(index){
    return ((this.state.player.sprite.x - this.enemies.getChildAt(index).x >= -100 && this.state.player.sprite.x - this.enemies.getChildAt(index).x <= 0)
   || (this.enemies.getChildAt(index).x - this.state.player.sprite.x >= -100 && this.enemies.getChildAt(index).x - this.state.player.sprite.x <= 0)) ? false : true;
  }

  isHit(index){
    return (this.enemies.getChildAt(index).animations.currentAnim.name === 'hit_right') || (this.enemies.getChildAt(index).animations.currentAnim.name === 'hit_left' ||
    this.enemies.getChildAt(index).animations.currentAnim.name === 'die') ? false : true;
  }

  //movement
  selectMovement(index){
    const COORDENATE = this.coordenate[index].x;
    if(this.state.player.sprite.x - this.enemies.getChildAt(index).x >= -150 && this.state.player.sprite.x - this.enemies.getChildAt(index).x <= 0 )this.movement[index] = 'left';
    else if(this.enemies.getChildAt(index).x - this.state.player.sprite.x >= -150 && this.enemies.getChildAt(index).x - this.state.player.sprite.x <= 0)this.movement[index] = 'right';
    else {
      if((COORDENATE  + 50) - this.enemies.getChildAt(index).x <= 1 )this.movement[index] = 'left';
      if(this.enemies.getChildAt(index).x - (COORDENATE -50) <= 1 )this.movement[index] = 'right';
    }
    this.enemyMovement(index);
  }

  enemyMovement(index){
    if(this.movement[index] == 'right'){
      this.enemies.getChildAt(index).body.velocity.x = 30;
      this.enemies.getChildAt(index).animations.play('run_right');
    }
    else if(this.movement[index] == 'left'){
      this.enemies.getChildAt(index).body.velocity.x = -30;
      this.enemies.getChildAt(index).animations.play('run_left');
    }
   }

  //attack
  enemyAttackAction(index) {
   if(this.canAttack(index))this.secondAttack(index);
  }

  firstAttack(index){
    if(this.movement[index] == 'right')this.enemies.getChildAt(index).animations.play('attack_right_first');
    if(this.movement[index] == 'left')this.enemies.getChildAt(index).animations.play('attack_left_first');
    this.addTimeOnAttackEnemyComplete(index);
  }

  secondAttack(index){
    if(this.movement[index] == 'right')this.enemies.getChildAt(index).animations.play('attack_right_second');
    if(this.movement[index] == 'left')this.enemies.getChildAt(index).animations.play('attack_left_second');
   this.addTimeOnAttackEnemyComplete(index);
  }

  addTimeOnAttackEnemyComplete(index){
    this.enemies.getChildAt(index).animations.currentAnim.onComplete.add(this.enemyAttackTime, this);
  }

  enemyAttackTime(){
    this.timers.attack = this.state.time.now + 2000;
  }

  canAttack(index){
   return ( (this.state.player.sprite.x - this.enemies.getChildAt(index).x >= -100 && this.state.player.sprite.x - this.enemies.getChildAt(index).x <= 0)
   || (this.enemies.getChildAt(index).x - this.state.player.sprite.x >= -100 && this.enemies.getChildAt(index).x - this.state.player.sprite.x <= 0)) && this.timers.attack<= this.state.time.now
   ? true : false;
  }

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

}

export default EnemyMovement;
