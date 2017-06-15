export const MENU_MAIN_MAX = 1;
export const MENU_SETTINGS_MAX = 1;
export const MENU_START = 1;
export const MENU_OPTION = -1;
export const WHAT_MENU = 'main';
export const SOUND_LEVEL = '10';
export const FULLSCREEN = 'no';
export const STARTLABEL = { text: "Press space to start", x: 600, y: 620 };
export const TIME = function (menu) {
  return menu.time.now + 200;
 };

export const MainText = () => ({
  newGame: {title: "New Game", x: 980, y: 480},
  settings: {title: "Settings", x: 965, y: 540}
});

export const SettingsText = () => ({
  fullScreen: {title: "FullScreen", x: 970, y: 480, values: ["No", "/", "Yes"] },
  sound: {title: "Sound", x: 942, y: 530, values: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] },
  back: {title: "Back", x: 942, y: 580}
});

export const SettingTextOptions = () => ({
  value1 : {title: "No", x: 1060, y: 480},
  value2 : {title: "/", x: 1092, y: 480},
  value3 : {title: "Yes", x: 1124, y: 480},
  value4 : {title: "0", x: 1060, y: 530},
  value5 : {title: "1", x: 1092, y: 530},
  value6 : {title: "2", x: 1124, y: 530},
  value7 : {title: "3", x: 1156, y: 530},
  value8 : {title: "4", x: 1188, y: 530},
  value9 : {title: "5", x: 1220, y: 530},
  value10 : {title: "6", x: 1252, y: 530},
  value11 : {title: "7", x: 1284, y: 530},
  value12 : {title: "8", x: 1316, y: 530},
  value13 : {title: "9", x: 1379, y: 530},
  value14 : {title: "10", x: 1474, y: 530}
});
