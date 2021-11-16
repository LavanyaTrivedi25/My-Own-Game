class Obstacle {

    constructor(x){

        this.body = createSprite(x,500)
     // this.body.debug = true
        this.body.setCollider("rectangle", 0,100,350,950)
        var rand = random([1,2])
        switch(rand){
            case 1 : this.body.addImage(obstacle1Image);
            this.body.setCollider("rectangle", 0,150,150,500);
            this.body.scale = 0.7; break;
            case 2 : this.body.addImage(obstacle2Image);
            this.body.setCollider("rectangle", 0,100,350,950);
            this.body.scale = 0.4; break;
        }
    }
}