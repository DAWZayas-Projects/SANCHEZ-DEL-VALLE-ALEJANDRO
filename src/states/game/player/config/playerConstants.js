export const Animations = () => ({
  idle_right: {name: 'idle_right', firstSprite: 1, lastSprite: 2, fps:5, loop : true},
  idle_left: {name: 'idle_left', firstSprite: 1, lastSprite: 2, fps:5, loop : true},
  run_right: {name: 'run_right', firstSprite: 1, lastSprite: 10, fps:15, loop : true},
  run_left: {name: 'run_left', firstSprite: 1, lastSprite: 10, fps:15, loop : true},
  jump_right: {name: 'jump_right', firstSprite: 1, lastSprite: 8, fps:5, loop : true},
  jump_left: {name: 'jump_left', firstSprite: 1, lastSprite: 8, fps:5, loop : true},
  dash_right: {name: 'dash_right', firstSprite: 1, lastSprite: 5, fps:10, loop : false},
  dash_left: {name: 'dash_left', firstSprite: 1, lastSprite: 5, fps:10, loop : false},
  attack_right_first: {name: 'attack_right_first', firstSprite: 1, lastSprite: 3, fps:10, loop : false},
  attack_left_first: {name: 'attack_left_first', firstSprite: 1, lastSprite: 3, fps:10, loop : false},
  attack_right_second: {name: 'attack_right_second', firstSprite: 1, lastSprite: 7, fps:10, loop : false},
  attack_left_second: {name: 'attack_left_second', firstSprite: 1, lastSprite: 7, fps:10, loop : false},
  attack_right_third: {name: 'attack_right_third', firstSprite: 1, lastSprite: 1, fps:5, loop : false},
  attack_left_third: {name: 'attack_left_third', firstSprite: 1, lastSprite: 1, fps:5, loop : false},
});

export const Timers = () => ({
  jump : 0,
  dash : 0,
  attack : 0,
  hit: 0
});

export const Sprite = () => ({name: 'player', x: 120, y: 1600 });
