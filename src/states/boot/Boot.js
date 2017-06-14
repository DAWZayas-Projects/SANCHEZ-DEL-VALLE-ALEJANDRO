import Phaser from 'phaser'
import WebFont from 'webfontloader'

class Boot extends Phaser.State {
  init () {
    this.fontsReady = false
    this.fontsLoaded = this.fontsLoaded.bind(this)
  }

  preload () {
    this.physics.startSystem(Phaser.Physics.P2JS);
    this.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    this.scale.updateLayout();

    WebFont.load({
      google: {
        families: ['Trade Winds']
      },
      active: this.fontsLoaded
    })

    let text = this.add.text(this.world.centerX, this.world.centerY, 'loading fonts', { font: '30px Trade Winds', fill: '#ffffff', align: 'center' })
    text.anchor.setTo(0.5, 0.5)

  }

  render () {
    if (this.fontsReady) {
      this.state.start('Load')
    }
  }

  fontsLoaded () {
    this.fontsReady = true
  }
}

export default Boot;
