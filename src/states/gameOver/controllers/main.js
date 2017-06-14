
function GameOvernavigate() {
  displayGameOverNavigate();
}

function displayGameOverNavigate() {
  if(gameOverState.cursors.down.isDown && gameOverState.timeMenu<gameOverState.time.now){
      gameOverState.timeMenu = gameOverState.time.now + 200;
      console.log(gameOverState.menuGameOverOption);
      downGameOverMenu();
      styleGameOverOptions();
  }
  if(gameOverState.cursors.up.isDown && gameOverState.timeMenu<gameOverState.time.now){
      gameOverState.timeMenu = gameOverState.time.now + 200;
      console.log(gameOverState.menuGameOverOption);
      upGameOverMenu();
      styleGameOverOptions();
  }
  selectorGameOverOptions();
}
