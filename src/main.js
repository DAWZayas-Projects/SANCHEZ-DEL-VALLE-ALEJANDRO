import 'pixi'
import 'p2'
import Phaser from 'phaser'

import BootState from './states/boot/Boot'
import LoadState from './states/load/Load'
import MenuState from './states/menu/Menu'
import GameState from './states/game/Game'
//import GameOverState from './states/gameOver/GameOver'

import config from './config'

class Game extends Phaser.Game {
  constructor () {
    const docElement = document.documentElement
    const width = docElement.clientWidth > config.gameWidth ? config.gameWidth : docElement.clientWidth
    const height = docElement.clientHeight > config.gameHeight ? config.gameHeight : docElement.clientHeight

    super(width, height, Phaser.CANVAS, 'content', null)

    this.state.add('Boot', BootState, false)
    this.state.add('Load', LoadState, false)
    this.state.add('Menu', MenuState, false)
    this.state.add('Game', GameState, false)
  //  this.state.add('GameOver', gameOverState, false)

    this.state.start('Boot')
  }
}

window.game = new Game()
