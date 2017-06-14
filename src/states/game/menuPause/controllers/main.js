
 function pauseMenu(){
  if(playState.pauseMenuButton.activate.isDown)changePause();
 }

function changePause(){
  game.paused == true ? menuUnpause() : menuPause();
}

function menuPause(){
    game.paused = true;
    pauseLabel = addPauseLabel();
    menuPauseTexts = setPauseTexts();
    setAnchorAndCameraTexts(menuPauseTexts);
    playState.pauseMenuButton.activate.onDown.addOnce(changePause, this);
    playState.cursors.down.onDown.add(displayDownMenuPauseNavigate, this);
    playState.cursors.up.onDown.add(displayUpMenuPauseNavigate, this);
    playState.selector.onDown.add(selectorMenuPauseOptions, this);
}

function menuUnpause(){
  playState.pauseMenuButton.activate.onDown.remove(changePause, this);
  playState.cursors.down.onDown.remove(displayDownMenuPauseNavigate, this);
  playState.cursors.up.onDown.remove(displayUpMenuPauseNavigate, this);
  playState.selector.onDown.remove(selectorMenuPauseOptions, this);
  pauseLabel.destroy();
  menuPauseTexts.map((text) => {
    text.destroy();
  });
  game.paused = false;
}

function displayUpMenuPauseNavigate(){
  if(playState.timeMenuPause<playState.time.now){
    playState.timeMenu = playState.time.now + 200;
    moveUpPauseMenu();
    styleMenuPauseOptions();
  }
}

function displayDownMenuPauseNavigate(){
  if(playState.timeMenuPause<playState.time.now){
    playState.timeMenu = playState.time.now + 200;
    moveDownPauseMenu();
    styleMenuPauseOptions();
  }
}
