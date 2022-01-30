var astro, astroImg;
var bgn, bgnImg;
var alien, alienImg;
var star1 ,star1Img ;
var star2, star2Img ;
var starsGroup;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score = 0;


function preload(){
    bgnImg = loadImage("bgnew.png");
    astroImg = loadImage("astro.png");
    star1Img = loadImage("star1.png");
    star2Img = loadImage("star2.png");
    alienImg = loadImage("alien.png");
}

function setup() {
 createCanvas(2000,600);

 astro = createSprite(100,230);
 astro.addImage(astroImg);
 astro.scale = 0.01;

 starsGroup = createGroup();

}

function draw() {
  background("black")
fill("white");
textSize(60);
text("Score:" +score, 1000, 100);
  if(gameState === PLAY){
    if (keyIsDown(UP_ARROW)) {
      astro.y = astro.y-2;
   }
   if (keyIsDown(DOWN_ARROW)) {
     astro.y = astro.y+2;
     
  }
    
    if(astro.isTouching(starsGroup)){
      score = score+10;
    
        for(var i=0; i<starsGroup.length; i++){
          starsGroup[i].destroy();
        }
     

    }

  
     

  }


    

  else if(gameState === END){

    if(astro.isTouching(alienGroup)){
     starsGroup.velocityX = 0;
     
    alien.destroy();
   
        
 }
       
  
      }
    
  spawnStars();
  spawnAlien()
 drawSprites();
  }

function spawnStars() {
  
   if (frameCount % 60 === 0) {
    star1 = createSprite(2000,random(20, 700));
    star1.addImage(star1Img);
    star1.velocityX = -4;
    star1.scale = 0.010;
  
    star1.lifetime = 2000;
    starsGroup.add(star1)
   
   }
   
   if(frameCount % 80 === 0){
    star2 = createSprite(2000,Math.round(random(0,325)));
    star2.addImage(star2Img);
    star2.velocityX = -4;
    star2.scale = 0.020;
    star2.lifetime = 2000;
    starsGroup.add(star2)
   }
   
  }

  function spawnAlien() {
   
     if (frameCount % 60 === 0) {
      alien = createSprite(2000, Math.round(random(20,700)))
      alien.addImage(alienImg)
      alien.velocityX = -5;
      alien.scale = 0.010;

      alien.lifetime = 2000;
      alienGroup.add(alien)
     }

}



     
     
     