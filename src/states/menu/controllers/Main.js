class Navigate {
  constructor ({ state, start, option, options, menuLevel, levels, delay }) {
    this.state = state;

    //config
    this.start = start;
    this.option = option;
    this.levels = levels
    this.level = menuLevel;
    this.time = this.setDelay(delay);
    this.delay = delay;
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
    else if ( this.level === 0 && this.option === 1 )this.OpenSettings();
  }

  cheater(){}

  startGame(){
    console.log('aqui empieza el juego');
    //this.state.start('play');
  }

  OpenSettings(){
    this.level++;
    this.option = this.start;
    let levelLength = this.takeIndex();
    this.state.menuText.showLevel('level'+this.level, false, levelLength);
  }


}

export default Navigate;
