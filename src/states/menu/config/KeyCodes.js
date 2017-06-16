import Phaser from 'phaser';

class KeyCodes {
  constructor (state) {
    this.state = state;

    //KeyCodes
    this.selector = this.spaceBar();
    this.cursors = this.cursors();
  }

  spaceBar(){ return this.state.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR) }
  cursors(){ return this.state.input.keyboard.createCursorKeys() }
}

export default KeyCodes;
