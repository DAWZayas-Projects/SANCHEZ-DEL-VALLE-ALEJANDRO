class PauseNavigate {
  constructor ({ state, start, option, menuLevel, levels, delay }) {
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

  pauseMenu(){ if(this.state.activate.isDown && this.time<this.state.time.now)this.changePause() }

 changePause(){ game.paused == true ? this.menuUnpause() : this.menuPause() }

 menuPause(){
   this.time = this.state.time.now + 200;
   game.paused = true;
   this.state.menuPause.visible();
   this.state.activate.onDown.addOnce(this.changePause, this);
   this.state.cursors.down.onDown.add(this.displayDownMenuPauseNavigate, this);
   this.state.cursors.up.onDown.add(this.displayUpMenuPauseNavigate, this);
   this.state.selector.onDown.add(this.selectorOptions, this);
 }

 menuUnpause(){
   this.time = this.state.time.now + 200;
   this.state.activate.onDown.remove(this.changePause, this);
   this.state.cursors.down.onDown.remove(this.displayDownMenuPauseNavigate, this);
   this.state.cursors.up.onDown.remove(this.displayUpMenuPauseNavigate, this);
   this.state.selector.onDown.remove(this.selectorOptions, this);
   this.state.menuPause.invisible();
   game.paused = false;
 }

 displayUpMenuPauseNavigate(){
   if(this.time<this.state.time.now){
     this.time = this.state.time.now + 200;
     this.upMenu();
     this.styleOptions();
   }
 }

 displayDownMenuPauseNavigate(){
   if(this.time<this.state.time.now){
     this.time = this.state.time.now + 200;
     this.downMenu();
     this.styleOptions();
   }
 }

 downMenu(){ this.option >= this.levels["level"+this.level]-1 ? this.option = this.start : this.option++ }

 upMenu(){ this.option <= this.start ? this.option = this.levels["level"+this.level]-1 : this.option-- }

 styleOptions(){
   let levelLength = this.takeIndex();
   this.state.menuPause.texts.map((text, index) =>{
     index === levelLength  ? this.state.menuPause.toggleSelected(index) : this.state.menuPause.toggleUnselected(index);
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
   if (this.state.selector.isDown && this.time<this.state.time.now){
     this.whatOption();
     this.time = this.setDelay(this.delay);
   }
 }

 whatOption(){
   if ( this.level === 0 && this.option === 0 )this.menuUnpause();
   else if ( this.level === 0 && this.option === 1 )this.unPauseAndstartMenuState();
 }

 unPauseAndstartMenuState() {
   this.menuUnpause();
   this.state.state.start('Menu');
 }

}

export default PauseNavigate;
