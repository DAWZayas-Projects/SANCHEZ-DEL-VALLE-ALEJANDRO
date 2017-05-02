var bootState = {
  
  preload: function () {
    // game.load.image('progressBar', 'assets/progressBar.png');
  },
  create: function() {
   game.physics.startSystem(Phaser.Physics.P2JS);
   game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
   this.scale.pageAlignHorizontally = true;
   this.scale.pageAlignVertically = true;
   this.scale.updateLayout();
   game.state.start('load');
  },

};
