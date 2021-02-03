var cat, catImage, catFirstImg, catLastImg;
var rat, ratImage, ratFirstImg, ratLastImg;
var bg, bgImage;
var OVER = 0;
var MOVING = 1;
var STILL = 2;
var position = STILL;


function preload() {
  catImage = loadAnimation("cat2.png", "cat3.png");
  catFirstImg = loadImage("cat1.png");
  catLastImg = loadImage("cat4.png");

  ratImage = loadAnimation("mouse2.png", "mouse3.png");
  ratFirstImg = loadImage("mouse1.png");
  ratLastImg = loadImage("mouse4.png");
  bgImage = loadImage("garden.png");
}

function setup() {
  createCanvas(700, 500);

  bg = createSprite(350, 250, 100, 300);
  bg.addImage(bgImage);
  bg.scale = 0.8;

  cat = createSprite(600, 430, 20, 20);
  cat.addImage(catFirstImg);
  cat.scale = 0.1;

  rat = createSprite(150, 430, 20, 20);
  rat.addImage(ratFirstImg);
  rat.scale = 0.1;
}

function draw() {

  background("black");
  if (keyDown("space") && position === STILL) {
    cat.addAnimation("cat_moving", catImage)
    cat.changeAnimation("cat_moving");

    rat.addAnimation("rat_moving", ratImage)
    rat.changeAnimation("rat_moving");
    position = MOVING;
    
    cat.addAnimation("cat_moving", catImage)
    cat.changeAnimation("cat_moving");
  }


  pressed();

  drawSprites();
  stroke("black");
  fill("black");
  textSize(20);
  text("Firstly press space key and then the left arrow key.",150,50);

}

function pressed() {

  if (keyDown("left") && position === MOVING) {
    cat.velocityX = -5;
  }
      
  if(cat.x-rat.x<(cat.width-rat.width)/2){ 
    
    position = OVER;
    
    cat.addAnimation("cat_stop", catLastImg);
    cat.changeAnimation("cat_stop");
 
    rat.addAnimation("stop", ratLastImg); 
    rat.changeAnimation("stop");
  }
  if(position === OVER){
    //cat.velocity= 0;
    cat.x= rat.x+60;
  }

}