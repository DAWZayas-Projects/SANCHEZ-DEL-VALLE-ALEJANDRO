
function addEnemies() {
  enemies = addSpriteEnemies();
  return enemies;
}

function addSpriteEnemies(){
  enemies = game.add.group();
  addEnemy(enemies);
  return enemies;
}

function  addAnimationsEnemy(enemy){
  Object.values(getEnemyAnimations()).map( (animation) => {
    enemy.animations.add(animation.name, Phaser.Animation.generateFrameNames(animation.name, animation.firstSprite, animation.lastSprite), animation.fps, animation.loop);
  });
}

function addEnemy(enemies){
  Object.values(getAllEnemies()).map( (enemyValues) => {
     enemy = enemies.create(enemyValues.x, enemyValues.y, 'enemy');
     addPhysicsEnemy(enemy);
     addAnimationsEnemy(enemy);
  });
}
