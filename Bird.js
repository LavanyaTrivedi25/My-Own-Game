class Bird {

    constructor(){

        this.body = createSprite(200,300)
        this.body.addAnimation("fly", birdImage)
        this.body.scale = 2
     // this.body.debug = true
        this.body.setCollider("rectangle", 0,0,20,10)

    }
}