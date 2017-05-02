var menuState = {

  create: function() {
    this.selector = spaceBar();
    this.cursors = createCursors();
    this.menuOption = -1;
    this.whatMenu = '';
    this.soundLevel = '10';
    this.setFullScreen = 'No';
    this.timeMenu = this.time.now + 200;
    addMainTheme();
    addBackground();
    addFog();
    addBackgroundPnj();
    addFireball();
    addLogo();
    this.menuText = addMenu();
    this.startLabel = addStartLabel();
    this.selector.onDown.addOnce(startMenuText, this);
    BackgroundTweens();
  },

  update:function(){
    navigate();
  }

};
