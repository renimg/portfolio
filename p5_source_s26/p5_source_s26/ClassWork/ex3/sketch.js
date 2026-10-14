/// Example 2.3.1  Wrap Around vector movement code
let speedx, speedy, lox, loy, angle;
let speedx2,speedy2, lox2, loy2;
let easing;
let speedfwd, speedside;
let dampedlox, dampedloy,dampedlox2, dampedloy2;
let dampedlox3, dampedloy3, dampedlox4, dampedloy4;
let currentKey = '';
let previousKey = '';
let storedKey = '';
let btnP1_prev, btnP1_next;
let btnP2_prev, btnP2_next;
let p1hat = 0;
let p2hat = 0;
let toggle = false;
let hit = false;

function setup() {
    background(0);
    createCanvas(700, 700);
    angleMode(DEGREES);
    // making a random negative or positive value
    speedx = 0;
    speedy = 0;
    speedx2 = 0;
    speedy2 = 0;
    speedfwd = 0.055;
    speedside = 0.055;
    lox = 600;
    loy = 600;
    lox2 = 100;
    loy2 = 600;
    dampedlox = lox;
    dampedloy = loy;
    dampedlox2 = lox2;
    dampedloy2 = loy2;
    dampedlox3 = lox;
    dampedloy3 = loy;
    dampedlox4 = lox2;
    dampedloy4 = loy2;
    easing = 0.15;
    angle = 0;

btnP1_prev = createButton('◀');
    btnP1_prev.style('color', 'white');
    btnP1_prev.style('background-color', 'transparent');
    btnP1_prev.style('border', 'none');
    btnP1_prev.style('padding', '5px 10px');
    btnP1_prev.style('font-size', '24px');
    btnP1_prev.style('cursor', 'pointer');
    btnP1_prev.position(825, 200);
btnP1_next = createButton('▶');
    btnP1_next.style('color', 'white');
    btnP1_next.style('background-color', 'transparent');
    btnP1_next.style('border', 'none');
    btnP1_next.style('padding', '5px 10px');
    btnP1_next.style('font-size', '24px');
    btnP1_next.style('cursor', 'pointer');
    btnP1_next.position(915, 200);
btnP2_prev = createButton('◀');
    btnP2_prev.style('color', 'white');
    btnP2_prev.style('background-color', 'transparent');
    btnP2_prev.style('border', 'none');
    btnP2_prev.style('padding', '5px 10px');
    btnP2_prev.style('font-size', '24px');
    btnP2_prev.style('cursor', 'pointer');
    btnP2_prev.position(825, 600);
btnP2_next = createButton('▶');
    btnP2_next.style('color', 'white');
    btnP2_next.style('background-color', 'transparent');
    btnP2_next.style('border', 'none');
    btnP2_next.style('padding', '5px 10px');
    btnP2_next.style('font-size', '24px');
    btnP2_next.style('cursor', 'pointer');
    btnP2_next.position(915, 600);
btnP1_prev.mouseClicked(decreaseP1Hat);
btnP1_next.mouseClicked(increaseP1Hat);
btnP2_prev.mouseClicked(decreaseP2Hat);
btnP2_next.mouseClicked(increaseP2Hat);
}

function draw() {
    background(0);
    let d = dist(p1.x,p1.y,p2.x,p2.y);
    if (d < p1.x + p2.x + p1.y +p2.y)
        {
            text("they are intersecting.", 20, 150)
        }
    if (toggle) {
        Speedometer();
        text("Current: " + currentKey, 10, 60);
        text("Previous: " + previousKey, 10, 80);
    }

    p1(lox, loy);
    p2(lox2, loy2);
    newHatP1();
    newHatP2();
    hit = collideCircleCircle(lox, loy, 80, lox2, loy2, 80);
    stroke(hit ? color('red') : 0);
    print('colliding?', hit);
if (lox < 0) {
        lox = width;
    }
    if (lox > width) {
        lox = 0;
    }
    if (loy < 0) {
        loy = height;
    }
    if (loy > height) {
        loy = 0;
    }if (lox2 < 0) {
        lox2 = width;
    }
    if (lox2 > width) {
        lox2 = 0;
    }
    if (loy2 < 0) {
        loy2 = height;
    }
    if (loy2 > height) {
        loy2 = 0;
    }
    if (hit)
    {
        speedx2 = 5*-speedx2;
        speedy2 = 5*-speedy2;
        speedx = 5*-speedx;
        speedy = 5*-speedy;
        speedx2 = -speedx;
        speedy2 = -speedy;
    }
}

function p1(lox, loy) {
    stroke(0);
    MovementKeysP1();
    dampedlox = lerp(dampedlox, lox, easing);
    dampedloy = lerp(dampedloy, loy, easing);
    dampedlox3 = lerp (dampedlox3, dampedlox, easing);
    dampedloy3 = lerp (dampedloy3, dampedloy, easing);
    push();
    translate(dampedlox3, dampedloy3);
    rotate(angle);
    fill(40, 80, 40);
    arc(58, 0, 80, 80, 45, -45, QUARTER_PI + PI, PIE);
    beginClip({invert: true});
    rectMode(CENTER);
    rect(0, -30, 80, 5);
    rect(0, -20, 80, 5);
    rect(0, -10, 80, 5);
    rect(0, 0, 80, 5);
    rect(0, 10, 80, 5);
    rect(0, 20, 80, 5);
    rect(0, 30, 80, 5);
    rect(-30, 0, 5, 80);
    rect(-20, 0, 5, 80);
    rect(-10, 0, 5, 80);
    rect(0, 0, 5, 80);
    rect(10, 0, 5, 80);
    rect(20, 0, 5, 80);
    rect(30, 0, 5, 80);
    endClip();
    fill(40, 80, 40);
    ellipse(0, 0, 80, 80);
    pop();
    push();
    translate(dampedlox, dampedloy);
    beginClip({invert: true});
    rectMode(CENTER);
    rect(0, -30, 80, 5);
    rect(0, -20, 80, 5);
    rect(0, -10, 80, 5);
    rect(0, 0, 80, 5);
    rect(0, 10, 80, 5);
    rect(0, 20, 80, 5);
    rect(0, 30, 80, 5);
    rect(-30, 0, 5, 80);
    rect(-20, 0, 5, 80);
    rect(-10, 0, 5, 80);
    rect(0, 0, 5, 80);
    rect(10, 0, 5, 80);
    rect(20, 0, 5, 80);
    rect(30, 0, 5, 80);
    endClip();
    fill(60, 120, 60);
    ellipse(0, 0, 80, 80);
    pop();
    push();
    translate(lox, loy);
    fill(80, 160, 80);
    ellipse(0, 0, 80, 80);
    fill(255, 255, 255);
    ellipse(20, -10, 20 , 10);
    ellipse(-20, -10, 20, 10);
    fill (255, 255, 0);
    ellipse(20, -10, 10 , 10);
    ellipse(-20, -10, 10, 10);
    rectMode(CENTER);
    fill(0);
    rect(0, 15, 35, 15, 0, 0, 10, 10);
    fill(255);
    rect(15, 15, 4, 12, 10,10,10,10);
    rect(5, 15, 4, 12, 10,10,10,10);
    rect(-5, 15, 4, 12, 10,10,10,10);
    rect(-15, 15, 4, 12, 10,10,10,10);
    pop();
}

function p2(lox2, loy2) {
    MovementKeysP2();
    dampedlox2 = lerp(dampedlox2, lox2, easing);
    dampedloy2 = lerp(dampedloy2, loy2, easing);
    dampedlox4 = lerp (dampedlox4, dampedlox2, easing);
    dampedloy4 = lerp (dampedloy4, dampedloy2, easing) 
    push();
    translate(dampedlox4, dampedloy4);
    beginClip({invert: true});
    rectMode(CENTER);
    rect(0, -30, 80, 5);
    rect(0, -20, 80, 5);
    rect(0, -10, 80, 5);
    rect(0, 0, 80, 5);
    rect(0, 10, 80, 5);
    rect(0, 20, 80, 5);
    rect(0, 30, 80, 5);
    rect(-30, 0, 5, 80);
    rect(-20, 0, 5, 80);
    rect(-10, 0, 5, 80);
    rect(0, 0, 5, 80);
    rect(10, 0, 5, 80);
    rect(20, 0, 5, 80);
    rect(30, 0, 5, 80);
    endClip();
    fill(80, 40, 40);
    ellipse(0, 0, 80, 80);
    pop();
    push();
    translate(dampedlox2, dampedloy2);
    beginClip({invert: true});
    rectMode(CENTER);
    rect(0, -30, 80, 5);
    rect(0, -20, 80, 5);
    rect(0, -10, 80, 5);
    rect(0, 0, 80, 5);
    rect(0, 10, 80, 5);
    rect(0, 20, 80, 5);
    rect(0, 30, 80, 5);
    rect(-30, 0, 5, 80);
    rect(-20, 0, 5, 80);
    rect(-10, 0, 5, 80);
    rect(0, 0, 5, 80);
    rect(10, 0, 5, 80);
    rect(20, 0, 5, 80);
    rect(30, 0, 5, 80);
    endClip();
    fill(120, 60, 60);
   ellipse(0, 0, 80, 80);
    pop();
    push();
    translate(lox2, loy2);
    fill(200, 80, 80);
    ellipse(0, 0, 80, 80);
    fill(255, 255, 255);
    ellipse(20, -10, 20 , 10);
    ellipse(-20, -10, 20, 10);
    fill (255, 255, 0);
    ellipse(20, -10, 10 , 10);
    ellipse(-20, -10, 10, 10);
    rectMode(CENTER);
    fill(0);
    rect(0, 15, 35, 15, 0, 0, 10, 10);
    fill(255);
    rect(15, 15, 4, 12, 10,10,10,10);
    rect(5, 15, 4, 12, 10,10,10,10);
    rect(-5, 15, 4, 12, 10,10,10,10);
    rect(-15, 15, 4, 12, 10,10,10,10);
    pop();
}

function MovementKeysP1() {
  let DeltaX = (speedx * speedfwd) * deltaTime;
  let DeltaY = (speedy * speedside) * deltaTime;
    speedx = DeltaX;
    speedy = DeltaY;
    lox += speedx;
    loy += speedy;

    if (angle == abs(360))
    {      angle = 0;
    }
    if (keyIsDown(LEFT_ARROW)) {
        speedx--;
        angle += -10;
        if (angle <= 0) {
          angle = 0;
        }
    }
    if (keyIsDown(RIGHT_ARROW)) {
        speedx++;
        angle += 10;
        if (angle >= 180) {
          angle = 180;
        }
    }
    if (keyIsDown(UP_ARROW)) {
        speedy--;
        angle += -10;
        if (angle <= 90) {
          angle = 90;
        }
    }
    if (keyIsDown(DOWN_ARROW)) {
        speedy++;
        angle += 10;
        if (angle >= 270) {
          angle = 270;
        }
    }
    if (speedx > 10) {
      speedx = 10;
    }
    if (speedx < -10) {
      speedx = -10;
    }
    if (speedy > 10) {
      speedy = 10;
    }
    if (speedy < -10) {
      speedy = -10;
    }
  }

  function MovementKeysP2() {
    
  let DeltaX2 = (speedx2 * speedfwd) * deltaTime;
  let DeltaY2 = (speedy2 * speedside) * deltaTime;
    speedx2 = DeltaX2;
    speedy2 = DeltaY2;
    lox2 += speedx2;
    loy2 += speedy2;
        if (keyIsDown(65) || keyIsDown(97)) {
        speedx2--;
    }
    if (keyIsDown(68) || keyIsDown(100)) {
        speedx2++;
    }
    if (keyIsDown(87) || keyIsDown(119)) {
        speedy2--;
    }
    if (keyIsDown(83) || keyIsDown(115)) {
        speedy2++;
    }
    if (speedx2 > 10) {
      speedx2 = 10;
    }
    if (speedx2 < -10) {
      speedx2 = -10;
    }
    if (speedy2 > 10) {
      speedy2 = 10;
    }
    if (speedy2 < -10) {
      speedy2 = -10;
    }
  }


function Speedometer() {
  let speed = sqrt(speedx * speedx + speedy * speedy);
  let speed2 = sqrt(speedx2 * speedx2 + speedy2 * speedy2);
  fill(255);
  text("Speed: " + speed.toFixed(2), 10, 20);
  text("Speed2: " + speed2.toFixed(2), 10, 40);
}

function keyPressed() {
  if (key == 'T' || key == 't') {
    toggle = !toggle;
  }
  // Store the current key as the previous one before it changes
   if (keyIsDown(UP_ARROW)) {
    currentKey = 'ArrowUp';
  } else if (keyIsDown(DOWN_ARROW)) {
    currentKey = 'ArrowDown';
  } else if (keyIsDown(LEFT_ARROW)) {
    currentKey = 'ArrowLeft';
  } else if (keyIsDown(RIGHT_ARROW)) {
    currentKey = 'ArrowRight';
  } if (keyIsDown(UP_ARROW) && keyIsDown(LEFT_ARROW)) {
    currentKey = 'ArrowUpLeft';
  } else if (keyIsDown(UP_ARROW) && keyIsDown(RIGHT_ARROW)) {
    currentKey = 'ArrowUpRight';
  } else if (keyIsDown(DOWN_ARROW) && keyIsDown(LEFT_ARROW)) {
    currentKey = 'ArrowDownLeft';
  } else if (keyIsDown(DOWN_ARROW) && keyIsDown(RIGHT_ARROW)) {
    currentKey = 'ArrowDownRight';
  }
  previousKey = storedKey;
  storedKey = currentKey;
}

function newHatP1() {
    switch (p1hat) {
        case 0:
            text("P1 Hat: None", 10, 100);
        break;
        case 1:
            text("P1 Hat: Top Hat", 10, 100);
            push();
            translate(lox, loy);
            TopHat();
            pop();
        break;
        case 2:
            text("P1 Hat: Collar", 10, 100);
            push();
            translate(lox, loy);
            Collar();
            pop();
        break;
    }
}

function increaseP1Hat() {
    p1hat++;
    newHatP1();
            if (p1hat > 2){
            p1hat = 0;
        }
}

function decreaseP1Hat() {
    p1hat--;
    newHatP1();
        if (p1hat < 0){
            p1hat = 2;
        }
}

function newHatP2() {
    switch (p2hat) {
        case 0:
            text("P2 Hat: None", 10, 100);
        break;
        case 1:
            text("P2 Hat: Top Hat", 10, 100);
            push();
            translate(lox2, loy2);
            TopHat();
            pop();
        break;
        case 2:
            text("P2 Hat: Collar", 10, 100);
            push();
            translate(lox2, loy2);
            Collar();
            pop();
        break;
    }
}

function increaseP2Hat() {
    p2hat++;
    newHatP2();
        if (p2hat == 2){
            p2hat = 0;
        }
}

function decreaseP2Hat() {
    p2hat--;
    newHatP2();
        if (p2hat < 0){
            p2hat = 2;
        }
}

function TopHat()
{
    noStroke();
    rectMode(CENTER);
    fill(0);
    rect(0,-35, 50, 10);
    rect(0,-60,35,50);
    fill(64);
    rect(0,-35, 50, 10);
    rect(0,-60,35,50);
    fill(192,32,32);
    rect(0,-45,35,10);
}

function Collar()
{
                rectMode(CENTER);
            fill(92)
            rect(-15, 35, 30, 20, 10, 10, 10, 10);
            rect(15, 35, 30, 20, 10, 10, 10, 10);
            fill(255,192,0)
            circle(0, 35, 30);
}