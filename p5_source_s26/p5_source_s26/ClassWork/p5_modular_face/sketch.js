

function setup() {
  createCanvas(600,600);
  background(20);
  fill(255);
}

function draw() {
let ofx=width/2;
let ofy=height/2;
let objscale;

if (width <= height) 
{
objscale = width/2;
} else {
objscale = width/4;
}

//face start
noStroke();
fill(90,81,84);
 ellipse(ofx, ofy, objscale/2, objscale/2);

 fill(255);
circle(175,300,2);
circle(190,130,2);
circle(270,180,2);

circle(425,300,2);
circle(390,130,2);
circle(330,180,2);

circle(195,300,2);
circle(205,160,2);
circle(270,200,2);

circle(405,300,2);
circle(375,160,2);
circle(330,200,2);

fill(255,128,255)
circle(ofx,ofy,2)
}
