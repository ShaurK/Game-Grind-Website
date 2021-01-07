var ghostguy, tower, ghosti, toweri, door, doori
var gamestate = 1;

function preload() {
  ghostguyi = loadImage("ghost-standing.png");
  doori = loadImage("door.png");
  toweri = loadImage("tower.png");

}

function setup() {
  createCanvas(500, 500)
  tower = createSprite(250, 250);
  tower.addImage("toweri", toweri);
  tower.scale = 0.65
  tower.velocityY = 5;
  ghostguy = createSprite(250, 250);
  ghostguy.addImage("ghosti", ghostguyi);
  ghostguy.scale = 0.3
  doorGroup = new Group();


}

function draw() {
  if (gamestate === 1) {
    if (ghostguy.y > 450) {
      gamestate = 0
    }
    if (tower.y > 400) {
      tower.y = tower.width / 2
    }

    if (keyDown("space")) {
      ghostguy.velocityY = -7;

    }
    if (keyDown("left") && ghostguy.x > 140) {
      ghostguy.x = ghostguy.x - 20
    }

    if (keyDown("right") && ghostguy.x < 360) {
      ghostguy.x = ghostguy.x + 20
    }
    ghostguy.velocityY = ghostguy.velocityY + 0.8

    if(ghostguy.isTouching(doorGroup)){
       gamestate = 0;
       }
    
    
    

    spawnDoors();
    drawSprites();
  } else if (gamestate === 0) {
    background("black")
    textSize(24);
text ("R.I.P", 225,250)
    



  }
}

function spawnDoors() {
  if (frameCount % 120 === 0) {
    door = createSprite(Math.round(random(200, 350)), -50, 10, 10);
    door.velocityY = 7;
    door.addImage("doori", doori)
    doorGroup.add(door)
    door.setLifetime = 500
  }




}