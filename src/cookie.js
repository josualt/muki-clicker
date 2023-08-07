
class Cookie extends Phaser.GameObjects.Sprite  {
    constructor(scene, x, y) {
      super(scene, x, y, 'cookie')
      this.setOrigin(0)
      this.scene = scene
      this.scene.add.existing(this)
      this.scene.physics.add.existing(this)
      this.body.allowGravity = false
      this.body.immovable = true
      //this.body.collideWorldBounds = true
      //this.move()
    }
    move() {
      this.scene.tweens.add({
        targets: this,
        x: { from: 800, to: -100 },
        duration: 8000,
        onComplete: () => { this.destroy() }
      })
  
  
    }
  }
  export default Cookie