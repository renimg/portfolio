//Example 2.4.2
// Simple Array Version with vector movement code

let speedXlist = [0.0, 0.0];
let speedYlist = [0.0, 0.0];
let loXlist = [0.0, 0.0];
let loYlist = [0.0, 0.0];

function setup() {

    background(0);
    createCanvas(500, 500);

    loXlist[0] = width/2;
    loYlist[0] = height/2;
    loXlist[1] = width/2;
    loYlist[1] = height/2;

    speedXlist[0] = random(-5,5);
    speedXlist[1] = random(-5,5);
    speedYlist[0] = random(-5,5);
    speedYlist[1] = random(-5,5);

}

function draw() {
    background(0);
    // First one (item 0)
    if ((loXlist[0]< 0)||(loXlist[0] > width)) {
    speedXlist[0] = -speedXlist[0];
    }
    if ((loYlist[0]< 0) || (loYlist[0] > height)) {
        speedYlist[0] = -speedYlist[0];
    }
    // Second one (item 1)
    if ((loXlist[1]< 0)||(loXlist[1] > width)) {
    speedXlist[1] = -speedXlist[1];
    }
    if ((loYlist[1]< 0) || (loYlist[1] > height)) {
    speedYlist[1] = -speedYlist[1];
    }

    // update the position of the ball and print to screen

    loXlist[0] += speedXlist[0];
    loYlist[0] += speedYlist[0];
    fill(255);
    ellipse(loXlist[0], loYlist[0], 20, 20);

    loXlist[1] += speedXlist[1];
    loYlist[1] += speedYlist[1];
    fill(190);
    ellipse(loXlist[1], loYlist[1], 28, 28);
}