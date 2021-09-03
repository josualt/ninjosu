
class Game extends Phaser.Scene {
  constructor (key) {
    super({ key: "game" })
  }

  preload () {
  }

  create () {
    console.log("game started")
    this.score = 0
    this.width = this.sys.game.config.width
    this.height = this.sys.game.config.height
    this.center_width = this.width / 2
    this.center_height = this.height / 2
  }
  
  update(){
    
  }
}

export default Game
