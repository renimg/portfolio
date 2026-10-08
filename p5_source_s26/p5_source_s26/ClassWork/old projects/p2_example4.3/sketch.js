// Example 2.4.3 Adjustable Array Version
let count = 5;
let balls = [];
let loX = new Array(count);
let loY = new Array(count);
let speedX = new Array(count);
let speedY = new Array(count);
let cirSize = new Array(count);
let colorsR = new Array(count);
let colorsG = new Array(count);
let colorsB = new Array(count);

function setup() {
  createCanvas(600, 600);
  noStroke();
for (let i = 0; i < loX.length; i++) {
    loX[i] = width/2 + random(-100, 100);
    loY[i] = height/2 + random(-100, 100);
    speedX[i] = random(-3, 3);
    speedY[i] = random(-3, 3);
    cirSize[i] = random(10, 50);
    colorsR[i] = int(random(0, 255));
    colorsG[i] = int(random(0, 255));
    colorsB[i] = int(random(0, 255));
    console.log(speedX);
  }
}
function draw() {
  background(70);
  // makes a frame
  fill(250);
  //rect(40, 40, width-80, height-80);
  for (let i = 0; i < loX.length; i++) {
        let b = new Ball(loX[i],loY[i],cirSize[i],colorsR[i],colorsG[i],colorsB[i]);
     //check boundaries for all balls
     // note the '40+' and '-40' are to pull in the borders to match 
     // the background rect
noStroke();
    if (loX[i] < 40+cirSize[i]/2 || loX[i] > (width-40)-cirSize[i]/2 ) {
      speedX[i] = -speedX[i];
    }
    if (loY[i] < 40+cirSize[i]/2 || loY[i] > (height-40)-cirSize[i]/2) {
      speedY[i] = -speedY[i];
    }
    //draw all balls
    //update all positions
    loX[i] += speedX[i];
    loY[i] += speedY[i];
  } // end of loop
  text(balls.length, 10, 20);
}

  class Ball {
    constructor(x,y,r,cR,cG,cB) {
      this.loX = x;
      this.loY = y;
      this.cirSize = r;
      this.colorsR = cR;
      this.colorsG = cG;
      this.colorsB = cB;
    }
    show() {
      push();
      //translate(this.loX,this.loY);
      fill(this.colorsR, this.colorsG, this.colorsB);
      ellipse(0,0,this.cirSize,this.cirSize);
      pop();
    }
  }