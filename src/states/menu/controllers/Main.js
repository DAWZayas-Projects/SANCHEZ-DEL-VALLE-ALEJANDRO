class Navigate {
  constructor ({ state, start, option, menuLevel, levels, delay }) {
    this.state = state;

    //config
    this.start = start;
    this.option = option;
    this.levels = levels
    this.level = menuLevel;
    this.time = this.setDelay(delay);
    this.delay = delay;

    //settings
    this.fullScreen = "no";
    this.sound = 10;
  }

  setDelay(delay){ return this.state.time.now + delay }

  navigate(){
    if(this.state.keyCodes.cursors.down.isDown && this.time<this.state.time.now){
        this.time = this.setDelay(this.delay);
        this.downMenu();
        this.styleOptions();
    }
    if(this.state.keyCodes.cursors.up.isDown && this.time<this.state.time.now){
        this.time = this.setDelay(this.delay);
        this.upMenu();
        this.styleOptions();
    }
    this.selectorOptions();
  }

  downMenu(){ this.option >= this.levels["level"+this.level]-1 ? this.option = this.start : this.option++ }

  upMenu(){ this.option <= this.start ? this.option = this.levels["level"+this.level]-1 : this.option-- }

  styleOptions(){
    let levelLength = this.takeIndex();
    this.state.menuText.texts.map((text, index) =>{
      index === levelLength  ? this.state.menuText.toggleSelected(index) : this.state.menuText.toggleUnselected(index);
    });
  }

  takeIndex(){
    let iterator = this.level-1;
    let index = this.option;
    while ( iterator >= 0 ){
      index += this.levels['level'+iterator];
      iterator--;
    }
    return index;
  }

  selectorOptions(){
    if (this.state.keyCodes.selector.isDown && this.time<this.state.time.now){
      this.whatOption();
      this.time = this.setDelay(this.delay);
    }
  }

  whatOption(){
    if ( this.level === 0 && this.option === 0 )this.startGame();
    else if ( this.level === 0 && this.option === 1 )this.openSettings();
    else if ( this.level === 1 && this.option === 0 )this.fullScreenOption();
    else if ( this.level === 1 && this.option === 1 )this.soundOption();
    else if ( this.level === 1 && this.option === 2 )this.openMainMenu();
  }

  startGame(){
    this.state.state.start('Game');
  }

  openSettings(){
    this.level++;
    this.option = this.start;
    let levelLength = this.takeIndex();
    this.state.menuText.showLevel('level'+this.level, false, levelLength);
  }

  openMainMenu(){
    this.level--;
    this.option = this.start;
    let levelLength = this.takeIndex();
    this.state.menuText.showLevel('level'+this.level, false, levelLength);
  }

  fullScreenOption(){
    this.state.menuText.texts.map( (text, index) =>{
        if(text.text == "Yes" || text.text == "/" || text.text == "No"){
          text.alpha = 1;
          text.text === this.fullScreen ? this.state.menuText.toggleSelected(index) : this.state.menuText.toggleUnselected(index);
        }
        if(text.text == this.sound){
          text.alpha = 0;
        }
      });
      this.state.keyCodes.cursors.right.onDown.remove(this.toggleSoundUp, this);
      this.state.keyCodes.cursors.left.onDown.remove(this.toggleSoundDown, this);
      this.state.keyCodes.cursors.right.onDown.addOnce(this.startfullScreenOn, this);
      this.state.keyCodes.cursors.left.onDown.addOnce(this.startfullScreenOff, this);
  }

  soundOption(){
    this.state.menuText.texts.map( (text, index) =>{
       if(text.text == "Yes" || text.text == "/" || text.text == "No") text.alpha = 0;
       if(text.text == this.sound){
         text.alpha = 1;
         text.x = 1050;
       }else if (text.text == this.sound+1 || text.text == this.sound-1)text.alpha = 0;
     });
     this.state.keyCodes.cursors.right.onDown.remove(this.startfullScreenOn, this);
     this.state.keyCodes.cursors.left.onDown.remove(this.startfullScreenOff, this);
     this.state.keyCodes.cursors.right.onDown.add(this.toggleSoundUp, this);
     this.state.keyCodes.cursors.left.onDown.add(this.toggleSoundDown, this);
  }

  startfullScreenOn(){
    this.fullScreen = "Yes"
    this.state.scale.startFullScreen();
    this.fullScreenOption();
  }

  startfullScreenOff(){
    this.fullScreen = "No"
    this.state.scale.stopFullScreen();
    this.fullScreenOption();
  }

  toggleSoundUp(){
    if(this.sound < 10) {
      this.sound++;
      this.state.sound.volume += 0.1;
    }
    this.soundOption();
  }

  toggleSoundDown(){
    if(this.sound > 0) {
      this.sound --;
      this.state.sound.volume -=0.1;
    }
    this.soundOption();
  }

}

export default Navigate;
