class Aeroplane {

    constructor(x){

        this.body = createSprite(x,random([100,200,300,400]))
        // this.body.debug = true
        this.body.setCollider("rectangle", 0,100,350,950)
        this.body.velocityX = -5
        var rand = random([1,2])
        switch(rand){
            case 1 : this.body.addImage(aeroplaneImg);
            this.body.setCollider("rectangle", 0,0,300,50);
            this.body.scale = 0.5; break;
            case 2 : this.body.addImage(aeroplane2Img);
            this.body.setCollider("rectangle", 0,0,1500,300);
            this.body.scale = 0.1; break;
        }
    }
}
