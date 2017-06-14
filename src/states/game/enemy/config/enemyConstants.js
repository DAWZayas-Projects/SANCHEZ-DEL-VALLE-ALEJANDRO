
function getEnemyAnimations(){
  return {
    run_right: {name: 'run_right', firstSprite: 1, lastSprite: 29, fps:15, loop : true},
    run_left: {name: 'run_left', firstSprite: 1, lastSprite: 29, fps:15, loop : true},
    attack_right_first: {name: 'attack_right_first', firstSprite: 1, lastSprite: 26, fps:29, loop : false},
    attack_left_first: {name: 'attack_left_first', firstSprite: 1, lastSprite: 26, fps:29, loop : false},
    attack_right_second: {name: 'attack_right_second', firstSprite: 1, lastSprite: 22, fps:20, loop : false},
    attack_left_second: {name: 'attack_left_second', firstSprite: 1, lastSprite: 22, fps:20, loop : false},
    hit_right: {name: 'hit_right', firstSprite: 1, lastSprite: 13, fps:30, loop : false},
    hit_left: {name: 'hit_left', firstSprite: 1, lastSprite: 13, fps:30, loop : false},
    die: {name: 'die', firstSprite: 1, lastSprite: 32, fps:15, loop : false},

  };
}

function getTimersEnemy(){
  return {
    attack : 0,
    hit : 0
  };
}

function getAllEnemies(){
  return {
    enemy1: {x: 1065, y: 1980},
    enemy2: {x: 4287, y: 1250},
    enemy3: {x: 4713, y: 1243},
    enemy4: {x: 5396, y: 1233},
    enemy5: {x: 7168, y: 1208}
  };
}

function getMovementEnemy(){
  return ['right', 'right', 'right', 'right', 'right'];
}
