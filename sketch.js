var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  groundImage = loadImage("ground2.png")
}

function setup() {
  createCanvas(555, 555);
  
  trex = createSprite(30,500,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(0,500,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -10;
  
  invisibleGround = createSprite(0,510,400,10);
  invisibleGround.visible = false;
  
  edges = createEdgeSprites()
}

function draw() {
  background("white");
  
  if(keyDown("space") && trex.y >= 475) {
    trex.velocityY = -10
  }
  
  if(keyDown("UP_ARROW") && trex.y >= 475) {
    trex.velocityY = -10
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  drawSprites();
}