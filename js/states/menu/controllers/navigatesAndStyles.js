
function downMainMenu(menu) {
  downMenu(menu, getMenuMainMax())
}

function upMainMenu(menu) {
  upMenu(menu, getMenuMainMax())
}

function downSettingsMenu(menu) {
  downMenu(menu, getMenuSettingsMax())
}

function upSettingsMenu(menu) {
  upMenu(menu, getMenuSettingsMax())
}

function downMenu(menu, maxLength) {
  menu.menuOption >= maxLength ? menu.menuOption = getMenuStart() : menu.menuOption ++;
}

function upMenu(menu, maxLength) {
  menu.menuOption <= getMenuStart() ? menu.menuOption = maxLength : menu.menuOption --;
}

function selectTheText(menu, filter){
  menu.menuText.filter((text) => {
    if(text.text == filter) filterText = text;
  });
  return filterText;
}

function styleMainOptions(menu) {
  changeMenuTextColor(getMenuText(), menu);
}

function styleSettingsOptions(menu){
  changeMenuTextColor(getSettingsText(), menu);
}

function changeMenuTextColor(textOrigin, menu){
  Object.values(textOrigin).map( (text, index) =>{
    selectTheText(menu, text.title).fill = toggleSelected(menu, index);
  });
}

function toggleSelected(menu, index) {
  const SELECTED = '#93051b';
  const UNSELECTED = '#ffffff';
  return menu.menuOption == index ? SELECTED : UNSELECTED;
}

function selectorMainOptions(menu) {
  if(menu.selector.isDown){
    if(menu.menuOption == 0){
      startPlayState();
    }else if(isMenuOption(menu, 1)){
      settingsOption(menu);
    }
    menu.timeMenu = menu.time.now + 200;
  }
}

function  selectorSettingsOptions(menu) {
   if(menu.selector.isDown){
     if(isMenuOption(menu, 0)){
       FullScreenOption(menu);
     }else if(isMenuOption(menu, 1)){
       soundOption(menu);
     }else if(isMenuOption(menu, 2)){
       MainMenu(menu);
     }
     menu.timeMenu = menu.time.now + 200;
   }
 }

function isMenuOption(menu, option) {
  return menu.menuOption == option && menu.timeMenu < menu.time.now;
}

function styleSettingsValues(selected){
  const SELECTED = '#93051b';
  const UNSELECTED = '#ffffff';
  return selected ? SELECTED : UNSELECTED;
}
