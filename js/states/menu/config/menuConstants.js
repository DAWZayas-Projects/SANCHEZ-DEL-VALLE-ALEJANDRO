
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
    fullScreen: {title: "FullScreen", x: 100, y: 220, values: ["No", "/", "Yes"] },
    sound: {title: "Sound", x: 100, y: 170, values: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] },
    back: {title: "Back", x: 60, y: 120}
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
