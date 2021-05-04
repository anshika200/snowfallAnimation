const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bgImg,girl1Animation,girl1;
var slideAnimation,slide;
var skateAnimation,skate;
var tree1,tree2,tree3, treeImg;
var snowman ,snow1,snowGroup,snowImg,snowmanImg;
var boy ,boyImg;
var dog ,dogImg;
var snow2,snowflakeGroup,snow2Img;
var song;

function preload(){
bgImg= loadImage("snow1.jpg")
girl1Animation=loadAnimation('girl1.png','girl2.png')
girl2Animation=loadAnimation ('bye1.png','bye2.png')
slideAnimation=loadAnimation('slide1.png','slide2.png','slide3.png','slide4.png')
skateAnimation =loadAnimation ('skate3.png','skate1.png','skate3.png','skate2.png')
treeImg=loadImage("tree.png")
snowmanImg=loadImage("snowman.png")
boyImg=loadAnimation('boy1.png','boy2.png')
song=loadSound("SnowFlakeSong.mp3")
dogImg=loadImage("dog.png")
snowImg= loadImage("snow4.webp");
snow2Img= loadImage("snow5.webp");
}


function setup() {
  createCanvas(1200,730);

  engine = Engine.create();
  world = engine.world; 

  tree1=createSprite(1100,250)
  tree1.addImage(treeImg)
  tree1.scale=1.75

  girl2= createSprite(520, 384);
  girl2.addAnimation('dance',girl2Animation)
  girl2.frameDelay =6;
  girl2.scale=0.35;

  dog =createSprite(470,407)
  dog.addImage(dogImg)
  dog.scale=1

  skate=createSprite(1200, 390, 50, 50);
  skate.addAnimation('play',skateAnimation);
  skate.velocityX=-5
  skate.scale=0.5
  skate.frameDelay =11;

  snowman=createSprite(700,450)
  snowman.addImage(snowmanImg)
  snowman.scale=0.5

  girl1= createSprite(350, 480);
  girl1.addAnimation('dance',girl1Animation)
  girl1.frameDelay =5;

  boy= createSprite(880, 480);
  boy.addAnimation('dance',boyImg)
  boy.frameDelay =10;
  boy.scale=0.5

  slide=createSprite(200, 610, 50, 50);
  slide.addAnimation('play',slideAnimation);
  slide.velocityX=6

  tree4=createSprite(20,220)
  tree4.addImage(treeImg)
  tree4.scale=0.95 

  tree2=createSprite(50,220)
  tree2.addImage(treeImg)
  tree2.scale=0.75 

  tree3=createSprite(1190,280)
  tree3.addImage(treeImg)
  tree3.scale=1.95

  tree5=createSprite(100,280)
  tree5.addImage(treeImg)
  tree5.scale=0.65

  snowGroup = new Group();
  snowflakeGroup = new Group();


  song.play();
  song.setVolume(0.5);
  }


function draw() {
  background(bgImg);
  Engine.update(engine);

  if (slide.x>1455){
    slide.x=-30
  }

  if (skate.x<0){
    skate.x=1330
  }

  if (frameCount%20===0){
  snow();
       }
  if (frameCount%20===0){
  snowflake();
       }
  
  drawSprites();
}


function snow() {
  var snow1 = createSprite(Math.round(random(0,1200)),0)
  snow1.velocityY=5
  snow1.addImage(snowImg)
  snow1.lifetime = 1250;
  snow1.scale =0.1
  snowGroup.add(snow1);
}


function snowflake() {
  var snow2 = createSprite(Math.round(random(0,1200)),0)
  snow2.velocityY=5
  snow2.addImage(snow2Img)
  snow2.lifetime = 1250;
  snow2.scale =0.1
  snowflakeGroup.add(snow2);
}