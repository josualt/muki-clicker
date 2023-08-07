import Cookie from "./cookie";

export default class Game extends Phaser.Scene {
    constructor () {
        super({ key: "game" });
        this.player = null;
        this.score = 0;
        this.scoreText = null;
    }

    create(){
        this.cookie = new Cookie(this, 200, 200)
        this.cookie.setInteractive()
        this.cookie.on("pointerdown", () => {
            console.log('petxi')
            this.increment()
        },this )
        this.counter = 0;
        this.counterText = this.add.bitmapText(200,100, "arcade",'0', 20).setOrigin(0.5)
    }

    update(){

    }

    increment(){
        this.counter++
        this.counterText.setText(this.counter)
    }
}
//petxi