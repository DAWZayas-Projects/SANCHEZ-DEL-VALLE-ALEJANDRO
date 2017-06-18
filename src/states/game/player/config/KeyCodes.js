export const Cursors = (state) => ( state.input.keyboard.createCursorKeys() );
export const LastKey = (state) => ( Phaser.Keyboard.RIGHT );

export const Actions = (state) => ({
  jump: state.input.keyboard.addKey(Phaser.Keyboard.Z),
  attack: state.input.keyboard.addKey(Phaser.Keyboard.X),
  dash: state.input.keyboard.addKey(Phaser.Keyboard.C),
});
