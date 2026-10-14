/// Example 2.3.1  Wrap Around vector movement code
let jorMyPlayer
let p1hat = 0;
let toggleblink = false;

let lvl = 10;
let count = lvl;
let lX = new Array(count);
let lY = new Array(count);
let sX = new Array(count);
let sY = new Array(count);
let cirSize = new Array(count);
let colorsR = new Array(count);
let colorsG = new Array(count);
let colorsB = new Array(count);
let lerpX = new Array(count);
let lerpY = new Array(count);
let lerpX2 = new Array(count);
let lerpY2 = new Array(count);

let rotspeed;
let randeye = new Array(count);
let randmouth = new Array(count);

function setup() {
    background(0);
    createCanvas(700, 700);
    angleMode(DEGREES);
  for (let i=0; i < lX.length; i++) {
    lX[i] = random(width*.9);
    lY[i] = random(height*.9);
    lerpX[i] = lX[i];
    lerpY[i] = lY[i];
    lerpX2[i] = lX[i];
    lerpY2[i] = lY[i];
    sX[i] = random(-3, 3);
    sY[i] = random(-3, 3);
    cirSize[i] = random(.5, 1.5);
    colorsR[i] = int(random(0, 255));
    colorsG[i] = int(random(0, 255));
    colorsB[i] = int(random(0, 255));
    console.log(sX);
    randeye[i] = int(random(0, 4));
    randmouth[i] = int(random(0, 4));
  }
}

function draw() {
    background(0);
    collectables();
}

function collectables() {
      for (let i = 0; i < lX.length; i++) {
      jorMyPlayer = new jPlayer(lX[i],lY[i],sX[i],sY[i],lerpX[i],lerpY[i],lerpX2[i],lerpY2[i],cirSize[i],colorsR[i],colorsG[i] ,colorsB[i],rotspeed,randeye[i],randmouth[i]);
      lerpX[i] = lerp(lerpX[i], lX[i], 0.15);
      lerpY[i] = lerp(lerpY[i], lY[i], 0.15);
      lerpX2[i] = lerp (lerpX2[i], lerpX[i], 0.15);
      lerpY2[i] = lerp (lerpY2[i], lerpY[i], 0.15);
      rotspeed= sqrt(lX[i] * lX[i] + lY[i] * lY[i]);
    if (lX[i] < cirSize[i]/2 || lX[i] > (width)-cirSize[i]/2 ) {
      sX[i] = -sX[i];
    }
    if (lY[i] < cirSize[i]/2 || lY[i] > (height)-cirSize[i]/2) {
      sY[i] = -sY[i];
    }
    push();
    jorMyPlayer.move();
    jorMyPlayer.playerbase();
    pop();
          if(mouseIsPressed)
    {
      lX[i] += (mouseX - lX[i]) * 0.05;
      lY[i] += (mouseY - lY[i]) * 0.05;
      sX[i] = (mouseX - lX[i]) * 0.05;
      sY[i] = (mouseY - lY[i]) * 0.05;
      if (keyIsDown(18))
      {
        lX[i] -= (mouseX - lX[i]) * 0.1;
        lY[i] -= (mouseY - lY[i]) * 0.1;
        sX[i] = -(mouseX - lX[i]) * 0.1;
        sY[i] = -(mouseY - lY[i]) * 0.1;
      }
    } else {
      lX[i] += sX[i];
      lY[i] += sY[i];
    }
  }
}
class jPlayer{
  constructor(posX,posY,spX,spY,lerpX,lerpY,lerpX2,lerpY2,sc,colR,colG,colB,rotSpeed,randeye,randmouth)
  {
    this.posX = posX;
    this.posY = posY;
    this.spX = spX
    this.spY = spY
    this.lerpX = lerpX
    this.lerpY = lerpY
    this.lerpX2 = lerpX2
    this.lerpY2 = lerpY2
    this.sc = sc;
    this.colR = colR
    this.colG = colG
    this.colB = colB
    this.rotSpeed = rotSpeed
    this.randeye = randeye
    this.randmouth = randmouth
  }

  move()
{
  this.lerpX = lerp(this.lerpX, this.posX, 0.15);
  this.lerpY = lerp(this.lerpY, this.posY, 0.15);
  this.lerpX2 = lerp (this.lerpX2, this.lerpX, 0.15);
  this.lerpY2 = lerp (this.lerpY2, this.lerpY, 0.15);
  this.rotspeed= sqrt(this.posX * this.posX + this.posY * this.posY);

    if (this.posX < (this.sc/2) || (this.posX) > (width)-this.sc/2 ) {
      this.spX = -this.spX;
    }
    if (this.posY < (this.sc/2) || this.posY > (height)-this.sc/2) {
      this.spY = -this.spY;
    }
  }

  playerbase()
  {
    push();
    translate(this.lerpX2, this.lerpY2);
    scale(this.sc);
    rotate(this.rotSpeed);
    fill(this.colR*.2, this.colG*.2, this.colB*.2);
    beginClip({invert: true});
    rotate(this.rotSpeed);
    rectMode(CENTER);
    this.bodysegment();
    endClip();
    fill(this.colR*.2, this.colG*.2, this.colB*.2);
    ellipse(0, 0, 80, 80);
    pop();
    push();
    translate(this.lerpX, this.lerpY);
    scale(this.sc);
    rotate(this.rotSpeed);
    beginClip({invert: true});
    this.bodysegment();
    endClip();
    fill(this.colR*.5, this.colG*.5, this.colB*.5);
    ellipse(0, 0, 80, 80);
    pop();
    push();
    translate(this.posX, this.posY);
    scale(this.sc);
    //hit = collideCircleCircle(this.posX, this.posY, 80, this.posX, this.posY, this.sc);
    rotate(this.rotSpeed);
    fill(this.colR, this.colG, this.colB);
    ellipse(0, 0, 80, 80);
    this.randjorEyes();
    this.randjorMouth();
    pop();
  }

  bodysegment()
  {
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
  }

  jorEyes()
  {
    fill(255, 255, 255);
  ellipse(20, -10, 20 , 10);
  ellipse(-20, -10, 20, 10);
  fill (this.colR*10, this.colG*10, this.colB*10);
  ellipse(20, -10, 10 , 10);
  ellipse(-20, -10, 10, 10);
  }

    jorEyesclosed()
  {
  fill(this.colR, this.colG, this.colB);
  ellipse(20, -10, 20 , 10);
  ellipse(-20, -10, 20, 10);
  }

  jorEyes2()
  {
  fill(255, 255, 255);
  ellipse(20, -10, 20 , 20);
  ellipse(-20, -10, 20, 20);
  fill (this.colR*10, this.colG*10, this.colB*10);
  ellipse(20, -10, 5 , 20);
  ellipse(-20, -10, 5, 20);
  }

    jorEyesclosed2()
  {
 fill(this.colR, this.colG, this.colB);
  ellipse(20, -10, 20 , 20);
  ellipse(-20, -10, 20, 20);
  }
  
  jorMouth()
  {
    rectMode(CENTER);
    fill(0);
    rect(0, 15, 35, 15, 0, 0, 10, 10);
    fill(255);
    rect(15, 15, 4, 12, 10,10,10,10);
    rect(5, 15, 4, 12, 10,10,10,10);
    rect(-5, 15, 4, 12, 10,10,10,10);
    rect(-15, 15, 4, 12, 10,10,10,10);
  }
  jorMouth2()
  {
    rectMode(CENTER);
    fill(0);
    //rect(0, 15, 35, 15, 0, 0, 30, 30);
    fill(255);
    rect(0, 20, 35, 5);
  }

  randjorEyes()
  {
    if (this.randeye < 2) {
      this.jorEyes();
      if (toggleblink) {
        this.jorEyesclosed();
      }
    } else {
      this.jorEyes2();
      if (toggleblink) {
        this.jorEyesclosed2();
      }
    }
  }

  randjorMouth()
  {
    if (this.randmouth < 2) {
      this.jorMouth();
    } else {
      this.jorMouth2();
    }
  }
}

function keyPressed()
{
  if (keyCode === 66) { // 'B' key
    toggleblink = !toggleblink;
  }
}