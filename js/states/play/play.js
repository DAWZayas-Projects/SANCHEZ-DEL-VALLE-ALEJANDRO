
var playState = {

  create: function() {
    this.actions = getPlayerActions();
    this.timersPlayer = getTimersPlayer();
    this.timersEnemy = getTimersEnemy();
    this.pauseMenuButton = getPauseMenuActions();
    this.hpPlayer = getHpPlayer();
    this.hpEnemies = getHpEnemies();
    this.selector = spaceBar();
    this.timeMenuPause = this.time.now + 200;
    this.menuPauseOption = -1;
    this.cursors = createCursors();
    this.lastKey = getLastKey();
    this.movementEnemy = getMovementEnemy();
    this.world = createWorld();
    addGravity();
    this.player = addPlayer();
    this.collisionObject = addCollision();
    collisionPlayerWithWorld()
    this.enemies = addEnemies();
    this.hp = addHp();
    camera();
    manualCollideAndOverlap();

  },

  update: function() {
    pauseMenu();
    stopPlayer();
    playerMovements();
    setLastKey();
    controlPlayer();
    controlEnemy();
  }

};
