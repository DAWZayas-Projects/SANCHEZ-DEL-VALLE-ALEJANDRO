
var playState = {

  create: function() {
    this.actions = getPlayerActions();
    this.timersPlayer = getTimersPlayer();
    this.cursors = createCursors();
    this.lastKey = getLastKey();
    this.world = createWorld();
    addGravity();
    this.player = addPlayer();
    camera();
  },

  update: function() {
    stopPlayer();
    playerMovements();
    setLastKey();
    controlPlayer();
  }

};
