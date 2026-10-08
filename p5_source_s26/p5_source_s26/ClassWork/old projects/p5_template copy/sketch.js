/// setup runs ( almost) first, runs once
function setup() {
 // this define canvas size, (width,height)
 createCanvas(512,512);
 // color of background (greyscale)  0-255  
 // where 0 is black and 255 is wh
 background(128);
// can you tell when its saved?
// put setup code here
}

function draw() {
 // put drawing code here
 background(0);
 fill(paletteLerp([
    [color(127,0,255),0],
    ['red', 0.001],
    ['orange', 0.2858],
    ['yellow', 0.4287],
    ['green', 0.5716],
    ['blue', 0.7145],
    [color(75, 0, 130), 0.8574],
    [color(127,0,255), 0.999],
    ['red', 1]
  ], millis() / 14400 % 1));
 rect(200,100,100,200,20);
 fill(255);
 ellipse(random(-2,2)+220,150,20,20);
 ellipse(random(-2,2)+260,150,20,20);
 ellipse(240,220,50,20);
 // optional
 //ellipse(240,230,100 * mouseX/width,100 * mouseY/height);
}
