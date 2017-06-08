
function getMenuText(){
  return {
    newGame: {title: "New Game", x: 20, y: 220},
    continue: {title: "Continue", x: 30, y: 170},
    settings: {title: "Settings", x: 35, y: 120},
    exit: {title: "Exit", x: 50, y: 70}
  };

}

function getSettingsText(){
  return {
    fullScreen: {title: "FullScreen", x: 30, y: 220, values: ["No", "/", "Yes"] },
    sound: {title: "Sound", x: 260, y: 170, values: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] },
    back: {title: "Back", x: 260, y: 120}
  };
}

function getTextPositionAfterplayState(){
  return {
    texto0: {x: 980, y: 480},
    texto1: {x: 970, y: 530},
    texto2: {x: 965, y: 580},
    texto3: {x: 950, y: 630},
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
  };
}

function spaceBar() {
  return game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
}

function createCursors(){
  return game.input.keyboard.createCursorKeys();
}

function getMenuSettingsMax() {
  return 2;
}

function getMenuMainMax() {
  return 3;
}

function getMenuStart() {
  return 0;
}
