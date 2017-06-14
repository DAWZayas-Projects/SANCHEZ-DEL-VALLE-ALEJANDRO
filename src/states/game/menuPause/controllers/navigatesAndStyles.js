
function moveDownPauseMenu() {
  downPauseMenu(getMenuPauseMax())
}

function moveUpPauseMenu() {
  upPauseMenu(getMenuPauseMax())
}

function downPauseMenu(maxLength) {
  playState.menuPauseOption >= maxLength ? playState.menuPauseOption = getMenuStart() : playState.menuPauseOption ++;
}

function upPauseMenu(maxLength) {
  playState.menuPauseOption <= getMenuStart() ? playState.menuPauseOption = maxLength : playState.menuPauseOption --;
}

function selectTheTextPause(filter){
  menuPauseTexts.filter((text) => {
    if(text.text == filter) filterText = text;
  });
  return filterText;
}

function styleMenuPauseOptions() {
  changeMenuPauseTextColor(getMenuPauseText());
}

function changeMenuPauseTextColor(textOrigin){
  Object.values(textOrigin).map( (text, index) =>{
    selectTheTextPause(text.title).fill = toggleSelectedPause(index);
  });
}

function toggleSelectedPause(index) {
  const SELECTED = '#93051b';
  const UNSELECTED = '#ffffff';
  return playState.menuPauseOption == index ? SELECTED : UNSELECTED;
}

function selectorMenuPauseOptions() {
    if(playState.menuPauseOption == 0){
      menuUnpause();
    }else if(isMenuPauseOption(1)){
      unPauseAndstartMenuState();
    }
    playState.timeMenuPause = playState.time.now + 200;
}

function isMenuPauseOption(option) {
  return playState.menuPauseOption == option && playState.timeMenuPause < playState.time.now;
}
