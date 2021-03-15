var garden, gardenImg
var cat, catImg1, catImg2, catImg3
var mouse, mouseImg1, mouseImg2, mouseImg3

function preload() {
  //load the images here
  gardenImg = loadImage("garden.png")

  catImg1 = loadAnimation("cat1.png")
  catImg2 = loadAnimation("cat2.png", 'cat3.png');
  catImg3 = loadAnimation("cat4.png");

  mouseImg1 = loadAnimation("mouse1.png")
  mouseImg2 = loadAnimation("mouse2.png", 'mouse3.png');
  mouseImg3 = loadAnimation("mouse4.png");

}

function setup() {
  createCanvas(1000, 800);
  //create tom and jerry sprites here
  garden = createSprite(500, 400)
  garden.addImage(gardenImg)

  cat = createSprite(800, 600)
  cat.addAnimation("sleeping", catImg1)
  cat.scale = 0.15;

  mouse = createSprite(200, 600)
  mouse.addAnimation("cheese", mouseImg1)
  mouse.scale = 0.1;

}

function draw() {
  background(255);
  //Write condition here to evalute if tom and jerry collide
  if (cat.x - mouse.x < (cat.width - mouse.width) / 2) {
    cat.velocityX = 0
    cat.addAnimation("winner", catImg3)
    cat.changeAnimation('winner');
    mouse.addAnimation("loser", mouseImg3);
    mouse.changeAnimation("loser");
    mouse.x = mouse.x - 30
  }



  drawSprites();
}


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    cat.velocityX = -3
    cat.addAnimation("running", catImg2);
    cat.changeAnimation("running")
    mouse.addAnimation("teasing", mouseImg2);
    mouse.changeAnimation("teasing");
  }

  //For moving and changing animation write code here


}