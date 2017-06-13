
function getGameOverMenuText(){
  return {
    newGame: {title: "New Game", x: 20, y: 220},
    exit: {title: "Exit", x: 50, y: 70}
  };

}

function spaceBar() {
  return game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
}

function createCursors(){
  return game.input.keyboard.createCursorKeys();
}

function getMenuGameOverMax() {
  return 2;
}

function getMenuStart() {
  return 0;
}
