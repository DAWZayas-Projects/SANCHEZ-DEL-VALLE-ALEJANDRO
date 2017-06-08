
function getMenuPauseText(){
  return {
    resume: {title: "Resume", x: 20, y: 130},
    save: {title: "Save", x: 30, y: 100},
    exit: {title: "Exit", x: 50, y: 80}
  };
}

function getMenuPauseMax() {
  return 2;
}

function getMenuStart() {
  return 0;
}


function getPauseMenuActions(){
  return {
    activate: game.input.keyboard.addKey(Phaser.Keyboard.TAB),
  };
}

function spaceBar() {
  return game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
}
