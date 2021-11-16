class Tree {

    constructor(x){

        this.body = createSprite(x,300)
        this.body.addImage(treeImg)
        this.body.scale = 0.7
     // this.body.debug = true
        this.body.setCollider("rectangle", 0,0,200,500)

    }
}