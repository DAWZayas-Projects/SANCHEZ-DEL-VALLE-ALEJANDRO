export const SpaceBar = function (menu) {
  return menu.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
 };
export const Cursors = function (menu) {
  return menu.input.keyboard.createCursorKeys();
};
