World.frameRate = 60;
var speed = 4.3;
var gravity = 0.4;
var jumpForce = 7;
var touchingGround = false;
var lol = createSprite(40, 300, 20, 20);
lol.setAnimation("player1");
lol.scale = 0.7;
var potion = createSprite(980, 260, 60, 20);
potion.setAnimation("potion");
potion.scale = 0.15;
var enemy = createSprite(2450, -520);
enemy.setAnimation("Enemy"); 
enemy.scale = 0.2;
var enemy2 = createSprite(2250, -720);
enemy2.setAnimation("Enemy"); 
enemy2.scale = 0.2;
var enemy3 = createSprite(2650, -620);
enemy3.setAnimation("Enemy");
enemy3.scale = 0.2;

var enemyDirection = 1;
var enemy3Direction = 1;
var text2 = createSprite(45, 300);
text2.setAnimation("pixil-frame-0__1_-removebg-preview.png_1");
var text3 = createSprite(580, 280);
text3.setAnimation("pixil-frame-0__3_-removebg-preview.png_1");
var text4 = createSprite(980, 240);
text4.setAnimation("power-up text");
var text5 = createSprite(2500, -600);
text5.setAnimation("enemies_text");

var walls = createGroup();
walls.add(createSprite(40, 370, 150, 20));
walls.add(createSprite(200, 370, 60, 20));
walls.add(createSprite(360, 360, 60, 20));
walls.add(createSprite(500, 340, 60, 20));
walls.add(createSprite(640, 320, 60, 20));
walls.add(createSprite(800, 300, 220, 20));
walls.add(createSprite(800, 220, 220, 20));
walls.add(createSprite(960, 300, 60, 20));
walls.add(createSprite(960, 220, 60, 20));
walls.add(createSprite(1040, 320, 60, 20));
walls.add(createSprite(1200, 160, 60, 20));
walls.add(createSprite(1370, 0, 60, 20));
walls.add(createSprite(1600, -160, 60, 20));
walls.add(createSprite(2000, -320, 300, 20));
walls.add(createSprite(2450, -480, 400, 20));
walls.add(createSprite(2750, -600, 60, 20));
function draw() {
  background("lightgray");
  playerGravity();
  checkGround();
  playerMovement();
  playerCollision();
  powerUPS();
  enemy_collision();
 camera.on();
  camera.x = lol.x;
  camera.y = lol.y;
  camera.zoom = 1;
  if (jumpForce == 12 || lol.y>950) {
    camera.zoom = 0.8;
  }
  
  drawSprites();
}
function powerUPS() {
  if (lol.isTouching(potion)) {
    
    potion.y = 10000;
    lol.y = 250;
    speed = 7;
    jumpForce = 12;
  }
}


function playerMovement() {
  if (keyDown("right") || keyDown("d")) {
    lol.setAnimation("player1");
    lol.x += speed;
  }
  if (keyDown("left") || keyDown("a")) {
    lol.setAnimation("player2");
  lol.x -= speed;
  }
  if (keyDown("up") || keyDown("w")) {
    lol.setAnimation("player1_copy_1");
    if (touchingGround)
    lol.velocityY = -jumpForce;
  }

  }

function playerGravity() {
  lol. velocityY += gravity;
}
function enemy_collision() {
  enemy.x = enemy.x + (2 * enemyDirection);

if (enemy.x > 2700) {
  enemyDirection = -1; 
}

if (enemy.x < 2200) {
  enemyDirection = 1;  
}
 enemy3.x = enemy3.x + 2 * enemy3Direction;

if (enemy3.x > 2700) {
  enemy3Direction = -1;
}

if (enemy3.x < 2200) {
  enemy3Direction = 1;  
}
  enemy2.x = enemy2.x + 2.3 * enemyDirection;

if (enemy2.x > 2700) {
  enemyDirection = -1.6;
  enemy.setAnimation("Enemy2");
}

if (enemy2.x < 2200) {
  enemyDirection = 1.3;
  enemy.setAnimation("Enemy");
}
  if (lol.collide(enemy)) {
        lol.x = 40;
    lol.y = 300;
    potion.y = 260;
    speed = 4.3;
    jumpForce = 7;
    lol.setVelocity(0, 0);
  }
  if (lol.collide(enemy2)) {
        lol.x = 40;
    lol.y = 300;
    potion.y = 260;
    speed = 4.3;
    jumpForce = 7;
    lol.setVelocity(0, 0);
  }
  if (lol.collide(enemy3)) {
        lol.x = 40;
    lol.y = 300;
    potion.y = 260;
    speed = 4.3;
    jumpForce = 7;
    lol.setVelocity(0, 0);
  }

}


function playerCollision() {
  lol.collide(walls);
  if (lol.y > 400) {
    lol.x = 40;
    lol.y = 300;
    potion.y = 260;
    speed = 4.3;
    jumpForce = 7;
    lol.setVelocity(0, 0);
  }
}

function checkGround() {
  lol.y += 0.5;
  touchingGround = lol.isTouching(walls);
  lol.y -= 0.5;
}
