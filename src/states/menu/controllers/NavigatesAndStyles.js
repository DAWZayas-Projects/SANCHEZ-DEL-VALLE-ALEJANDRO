import { MENU_MAIN_MAX, MENU_SETTINGS_MAX, MENU_START, MenuText, SettingsText} from '../config/MenuConstants';
import { FullScreenOption, SoundOption, MainMenu, StartPlayState, SettingsOption } from './Options';

export const DownMainMenu = function () { DownMenu(MENU_MAIN_MAX) };
export const UpMainMenu = function () { UpMenu(MENU_MAIN_MAX) };
export const DownSettingsMenu = function () { DownMenu(MENU_SETTINGS_MAX) };
export const UpSettingsMenu = function () { UpMenu(MENU_SETTINGS_MAX) };

const DownMenu = function (maxLength) { this.menuOption >= maxLength ? this.menuOption = MENU_START : this.menuOption ++; };
const UpMenu = function (maxLength) { this.menuOption >= maxLength ? this.menuOption = MENU_START : this.menuOption ++; };

export const StyleMainOptions= function () { ChangeMenuTextColor(MenuText)};
export const StyleSettingsOptions= function () { ChangeMenuTextColor(SettingsText)};

const ChangeMenuTextColor = function (textOrigin){
  Object.values(textOrigin).map( (text, index) =>{
    selectTheText(text.title).fill = ToggleSelected(index);
  });
};

const selectTheText = function (filter) {
  this.menuText.filter((text) => {
    if(text.text == filter) filterText = text;
  });
  return filterText;
};

const toggleSelected = function (index) {
  const SELECTED = '#93051b';
  const UNSELECTED = '#ffffff';
  return this.menuOption === index ? SELECTED : UNSELECTED;
};

export const SelectorMainOptions = function () {
  if(this.selector.isDown){
    if(IsMenuOption(0)){
      StartPlayState;
    }else if(IsMenuOption(1)){
      SettingsOption;
    }
    this.timeMenu = this.time.now + 200;
  }
};

export const SelectorSettingsOptions =  function () {
   if(this.selector.isDown){
     if(IsMenuOption(0)){
       FullScreenOption;
     }else if(IsMenuOption(1)){
       SoundOption;
     }else if(IsMenuOption(2)){
       MainMenu;
     }
     this.timeMenu = this.time.now + 200;
   }
};

const IsMenuOption = function (option) { return this.menuOption === option && this.timeMenu < this.time.now };

export const StyleSettingsValues = function (selected){
  const SELECTED = '#93051b';
  const UNSELECTED = '#ffffff';
  return selected ? SELECTED : UNSELECTED;
}
