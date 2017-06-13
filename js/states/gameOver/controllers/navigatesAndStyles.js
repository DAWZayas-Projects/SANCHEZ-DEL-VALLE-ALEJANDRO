
function downGameOverMenu() {
  downGameOver(getMenuGameOverMax())
}

function upGameOverMenu() {
  upGameOver(getMenuGameOverMax())
}

function downGameOver(maxLength) {
  gameOverState.menuGameOverOption >= maxLength ? gameOverState.menuGameOverOption = getMenuStart() : gameOverState.menuGameOverOption ++;
}

function upGameOver(maxLength) {
  gameOverState.menuGameOverOption <= getMenuStart() ? gameOverState.menuGameOverOption = maxLength : gameOverState.menuGameOverOption --;
}

function selectTheGameOverText(filter){
  gameOverState.menuGameOverText.filter((text) => {
    if(text.text == filter) filterText = text;
  });
  return filterText;
}

function styleGameOverOptions() {
  changeMenuGameOverTextColor(getGameOverMenuText());
}

function changeMenuGameOverTextColor(textOrigin){
  Object.values(textOrigin).map( (text, index) =>{
    selectTheGameOverText(text.title).fill = toggleGameOverSelected(index);
  });
}

function toggleGameOverSelected(index) {
  const SELECTED = '#93051b';
  const UNSELECTED = '#ffffff';
  return gameOverState.menuGameOverOption == index ? SELECTED : UNSELECTED;
}

function selectorGameOverOptions() {
  if(gameOverState.selector.isDown){
    if(gameOverState.menuGameOverOption == 0){
      startPlayState();
    }else if(isMenuGameOverOption(1)){
      startMenuState();
    }
    gameOverState.timeMenu = gameOverState.time.now + 200;
  }
}

function isMenuGameOverOption(option) {
  return gameOverState.menuGameOverOption == option && gameOverState.timeMenu < gameOverState.time.now;
}
