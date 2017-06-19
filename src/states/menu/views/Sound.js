export const MainThemeMenu = (state) => {
  let menuMusic = state.add.audio('MainTitle');
  menuMusic.loop = true;
  menuMusic.play();
  return menuMusic;
};

export const MainThemeGame = (state) => {
  let gameMusic = state.add.audio('InGame');
  gameMusic.loop = true;
  gameMusic.play();
  return gameMusic;
};

export const MainThemeGameOver = (state) => {
  let gameOverMusic = state.add.audio('Secret_Room');
  gameOverMusic.loop = true;
  gameOverMusic.play();
  return gameOverMusic;
};
