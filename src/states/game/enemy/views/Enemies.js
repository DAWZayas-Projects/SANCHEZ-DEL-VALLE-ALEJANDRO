import Phaser from 'phaser';

class Enemies {
  constructor ({ state, enemies, animation }) {
    this.state = state;

    //group
    this.enemies = this.setGroup(enemies, animation);

  }

  setGroup(newEnemies, animation){
    let enemies = this.state.add.group();
    Object.values(newEnemies).map( (enemyValues) => {
       let enemy = enemies.create(enemyValues.x, enemyValues.y, 'enemy');
       this.setAnimation(enemy, animation);
       this.addPhysics(enemy);
    });
    return enemies;
  }

  setAnimation(enemy, animations){
    Object.values(animations).map( (animation) => {
      enemy.animations.add(animation.name, Phaser.Animation.generateFrameNames(animation.name, animation.firstSprite, animation.lastSprite), animation.fps, animation.loop);
    });
  }

  addPhysics(enemy){
    enemy.enableBody = true;
    this.state.physics.p2.enable(enemy, false);
    enemy.body.setRectangle(40, 50);
  }

}

export default Enemies;
