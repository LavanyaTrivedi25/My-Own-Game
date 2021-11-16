var newX = 500
var gameState = "play"

function preload(){
birdImage = loadAnimation("bird1.png", "bird2.png", "bird3.png", "bird4.png", "bird5.png", "bird6.png", "bird7.png")
obstacle1Image = loadImage("building 1.png")
obstacle2Image = loadImage("building 2.png")
aeroplaneImg = loadImage("aeroplane.png")
aeroplane2Img = loadImage("aeroplane2.png")
treeImg = loadImage("tree.png")


}

function setup() {
  createCanvas(displayWidth, displayHeight);

obstacleGroup = new Group()
aeroplaneGroup = new Group()

  for(var i = 0; i < 25; i++){
    obstacles = new Obstacle(newX)
    obstacleGroup.add(obstacles.body)
    newX += 500
  }

  tree = new Tree(newX)
  bird = new Bird()
  
}

function draw() {
  background("black");  
console.log(gameState)
bird.body.velocityY += 0.5

bird.body.collide(obstacleGroup)

bird.body.collide(aeroplaneGroup, end)

camera.position.x = bird.body.x + 200

  

  if( gameState === "play"){

    if(keyDown (RIGHT_ARROW)){
      bird.body.x += 10
    }
  
    if(keyDown (LEFT_ARROW)){
      bird.body.x -= 10
    }
  
    if(keyDown("space")){
      bird.body.velocityY = -12
    }
  
    if(frameCount % 200 === 0){
      aeroplane = new Aeroplane(bird.body.x + 1000)
    aeroplaneGroup.add(aeroplane.body)

    }
  }

if(bird.body.y < 0 || bird.body.y > height){
  gameState = "end"
}

if(gameState === "win"){

  bird.body.pause()
  textSize(35)
  fill("white")
  text("Congratulation! You reached your home.", bird.body.x, height/2)
  aeroplaneGroup.destroyEach()
  bird.body.velocityY = 0
  bird.body.velocityX = 0

}

  if(gameState === "end"){

bird.body.pause()
textSize(35)
fill("white")
text("Game Over", bird.body.x, height/2)
aeroplaneGroup.destroyEach()
bird.body.velocityY = 0
bird.body.velocityX = 0

  }

  if(bird.body.isTouching(tree.body)){

gameState = "win"

  }

  drawSprites();
}

function end(aeroplane,bird){

gameState = "end"

}




