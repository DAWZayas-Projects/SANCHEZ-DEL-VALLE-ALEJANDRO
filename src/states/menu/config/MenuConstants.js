export const MENU_MAIN_MAX = 1;
export const MENU_SETTINGS_MAX = 1;
export const MENU_START = 1;
export const MENU_OPTION = -1;
export const WHAT_MENU = 'main';
export const SOUND_LEVEL = '10';
export const FULLSCREEN = 'no';
export const TIME = function () { return this.time.now + 200 };

export const MenuText = () => ({
  newGame: {title: "New Game", x: 20, y: 220},
  settings: {title: "Settings", x: 35, y: 160}
});

export const SettingsText = () => ({
  fullScreen: {title: "FullScreen", x: 30, y: 220, values: ["No", "/", "Yes"] },
  sound: {title: "Sound", x: 260, y: 170, values: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] },
  back: {title: "Back", x: 260, y: 120}
});

export const PositionAfterPlay = () => ({
  texto0: {x: 980, y: 480},
  texto2: {x: 965, y: 540},
  texto4: {x: 970, y: 480},
  texto5: {x: 942, y: 530},
  texto6: {x: 942, y: 580},
  texto7: {x: 1060, y: 480},
  texto8: {x: 1092, y: 480},
  texto9: {x: 1124, y: 480},
  texto10: {x: 1060, y: 530},
  texto11: {x: 1092, y: 530},
  texto12: {x: 1124, y: 530},
  texto13: {x: 1156, y: 530},
  texto14: {x: 1188, y: 530},
  texto15: {x: 1220, y: 530},
  texto16: {x: 1252, y: 530},
  texto17: {x: 1284, y: 530},
  texto18: {x: 1316, y: 530},
  texto19: {x: 1379, y: 530},
  texto20: {x: 1474, y: 530}
});
