class Ninja extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, name){
        super(scene, x, y, name)
        scene.add.existing(this)
        this.cursor = this.scene.input.keyboard.createCursorKeys();
        this.spaceBar = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update(){
        if(this.cursor.up.isDown){
            this.y--;
            console.log(this.y)
        }
    }

}
export default Ninja;