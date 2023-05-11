var bg, bgImg,butterfly,butterflyImg;

function preload(){
  bgImg = loadImage('tree.gif');
  butterflyImg = loadImage('butterfly.png');
}

function setup(){
 createCanvas(700,700);

 //bg
 bg = createSprite(200,200);
 bg.addImage('nature', bgImg);
 bg.scale = 0.5;

 //butterfly
 butterfly = createSprite(500,100);
 butterfly.addImage('butterfly', butterflyImg);
 butterfly.scale = 0.6;
 
}

function draw(){
  background('black');
  drawSprites();
}