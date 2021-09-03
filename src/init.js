import Phaser from 'phaser'
import Bootloader from './bootloader.js'
import Game from './game.js'


const config = {
  width: 800,
  height: 500,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  autoRound: false,
  parent: 'contenedor',
  physics: {
    default: 'arcade',
    debug: true
  },
  scene: [
    Bootloader,
    Game,
  ]
}

new Phaser.Game(config)