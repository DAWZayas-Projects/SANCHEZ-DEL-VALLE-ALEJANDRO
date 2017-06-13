var gameOverState = {

  create: function() {
    this.selector = spaceBar();
    this.cursors = createCursors();
    this.menuGameOverOption = -1;
    this.timeMenu = this.time.now + 200;
    addMainTheme();
    this.menuGameOverText = addGameOverMenu();
  },

  update:function(){
    GameOvernavigate();
  }

};
