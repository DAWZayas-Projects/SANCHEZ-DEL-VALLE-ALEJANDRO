import 'pixi'
import 'p2'
import Phaser from 'phaser'

class Interaction {
  constructor ({ state, player, enemies, hpEnemies, hpPlayer  }) {
    this.state = state;
    this.player = player;
    this.enemies = enemies;

    //config
    this.hpEnemies = hpEnemies;
    this.hpPlayer = hpPlayer;

    this.manualCollideAndOverlap();

  }

  manualCollideAndOverlap(){ this.state.physics.p2.setPostBroadphaseCallback(this.checkOverlap, this) }

  checkOverlap(body1, body2) {
    if(body1.sprite && body2.sprite){
      if((body1.sprite.key === 'player' && body2.sprite.key === 'enemy') || (body2.sprite.key === 'player' && body1.sprite.key === 'enemy') ){
        this.hitScan(body1, body2);
        return false;
      }
    }
    else if(!body1.sprite){
      if (this.isWorld(body1)) {  return true }
    }
    else if(!body2.sprite){
      if (this.isWorld(body2)) { return true }
    }
    return false;
  }


  isWorld(body){
      let world = false;
    this.state.world.collision.map((collision) => {
      if(collision === body)world = true;
    });
    return world
  }

  hitScan(body1, body2){
    this.hitScanPlayer(body1, body2);
    this.hitScanEnemy(body1, body2)
  }

  hitScanPlayer(body1, body2){
    if(this.isPlayerAttackRight()){
      body1.sprite.key === 'enemy' ? this.hitEnemyRight(body1) : this.hitEnemyRight(body2);
    }
    if(this.isPlayerAttackLeft()){
      body1.sprite.key === 'enemy' ? this.hitEnemyLeft(body1) : this.hitEnemyLeft(body2);
    }
  }

  hitScanEnemy(body1, body2){
    if(!(this.isPlayerAttackRight() || this.isPlayerAttackLeft())){
      this.hitPlayer();
    }
  }

  isPlayerAttackRight(){
    return this.player.animations.currentAnim.name === 'attack_right_first' || this.player.animations.currentAnim.name === 'attack_right_second' ||
    this.player.animations.currentAnim.name === 'attack_right_third' ? true : false;
  }

  isPlayerAttackLeft(){
    return this.player.animations.currentAnim.name === 'attack_left_first' || this.player.animations.currentAnim.name === 'attack_left_second' ||
    this.player.animations.currentAnim.name === 'attack_left_third' ? true : false;
  }

  hitEnemyRight(body){
    if(this.state.enemyMovement.timers.hit <= this.state.time.now){
      let index = this.whatAnimationEnemy(body.sprite);
      if(this.hpEnemies[index] != 1){
        body.sprite.animations.play('hit_right');
        this.addTimeOnHitEnemyComplete(body);
      }else{
        body.sprite.animations.play('die');
        this.addTimeOnKillEnemyComplete(body);
      }
    }
  }

  hitEnemyLeft(body){
    if(this.state.enemyMovement.timers.hit <= this.state.time.now){
      let index = this.whatAnimationEnemy(body.sprite);
      if(this.hpEnemies[index] != 1){
        body.sprite.animations.play('hit_left');
        this.addTimeOnHitEnemyComplete(body);
      }else{
        body.sprite.animations.play('die');
        this.addTimeOnKillEnemyComplete(body);
      }
    }
  }

  hitPlayer(){
    if(this.state.playerMovement.timers.hit <= this.state.time.now && this.state.playerMovement.timers.attack <= this.state.time.now && this.state.enemyMovement.timers.attack <= this.state.time.now ){
      if(this.hpPlayer != 1){
        this.hpPlayer--;
        this.HpDown(this.hpPlayer);
        this.state.playerMovement.timers.hit = this.state.time.now + 1500;
      }else{
        this.state.state.start('GameOver');
      }
    }
  }

  playerInWorld(){
    if (!this.state.player.sprite.inWorld) { this.state.state.start('GameOver') }
  }

  whatAnimationEnemy(body){
      let theEnemy = '';
    this.enemies.children.map((enemy, index) => {
      if(enemy === body)theEnemy = index;
    });
    return theEnemy
  }

  addHitEnemyTime(body){
    let index = this.whatAnimationEnemy(body);
    this.hpEnemies[index]--;
    this.state.enemyMovement.timers.hit = this.state.time.now + 600;
  }

  addKillEnemyTime(body){
    let index = this.whatAnimationEnemy(body);
    this.hpEnemies[index]--;
    this.enemies.children[index].kill();
    this.enemies.children[index].destroy();
    this.state.enemyMovement.timers.hit = this.state.time.now + 600;
  }

  addTimeOnKillEnemyComplete(body){ body.sprite.animations.currentAnim.onComplete.add(this.addKillEnemyTime, this) }

  addTimeOnHitEnemyComplete(body){ body.sprite.animations.currentAnim.onComplete.add(this.addHitEnemyTime, this) }

  HpDown(index){ this.state.userInterface.hpDown(index) }


}

export default Interaction;
