
function setup() {
  createCanvas(600,600);
  background(20);
  fill(255);
  background(127);
  noStroke();
  for (let i=0; i < height; i+=20) {
    fill(20,255,0);
    rect(0, i, width, 10);
    fill(255);
    rect(i, 0, 10, height);
  }
}

function draw() {
noStroke();

let ofx=width/2;
let ofy=height/2;
let objscale;

if (width <= height) 
{
objscale = ofx;
}
else 
{
objscale = ofy;
}

if(width > 600 && height > 600)
{
  scale(.5);
}

noStroke();
background(0);
fill(90,81,84);
//   triangle(175,300,190,130,270,180);
//   triangle(425,300,390,130,330,180);

triangle(ofx-125, ofy, ofx-110, ofy-170, ofx-30, ofy-120)
triangle(ofx+125, ofy, ofx+110, ofy-170, ofx+30, ofy-120)

fill(237,163,196);
//   triangle(195,300,205,160,270,200);
//   triangle(405,300,380,150,330,200);

triangle(ofx-105,ofy,ofx-95,ofy-140,ofx-30,ofy-100);
triangle(ofx+105,ofy,ofx+95,ofy-140,ofx+30,ofy-100);

fill(90,81,84);
  circle(ofx,ofy,250); //head
rectMode(CENTER);
fill(237,163,196);
fill(0);
  ellipse(ofx-35,ofy+40,100,60); //mouth
  ellipse(ofx,ofy+40,100,60); //mouth
fill(90,81,84);
  ellipse(ofx-35,ofy+35,100,60); //mouth
  ellipse(ofx,ofy+35,100,60); //mouth
fill(84,64,77);
  circle(ofx-70,ofy-10,80);
  circle(ofx+25,ofy-10,80); //eyebags
fill(255);
 // circle(230,280,80);
  circle(ofx-70,ofy-20,80); //eyes
 // circle(325,280,80); //eyes
 circle(ofx+25,ofy-20,80);
fill(54,89,63);
  ellipse(ofx-70,ofy-20,40,80);
  ellipse(ofx+25,ofy-20,40,80); //dark iris
fill(66,115,79);
  ellipse(ofx-70,ofy-20,30,70);
  ellipse(ofx+25,ofy-20,30,70); //dark iris
fill(255);
  //ellipse(230,280,20,60);
  //ellipse(325,280,20,60); //white of eyes
  ellipse(ofx-70,ofy-20,20,60);
  ellipse(ofx+25,ofy-20,20,60); //white of eyes

fill(237,163,196);
//ellipse(275,330,50,20); //nose
ellipse(ofx-25,ofy+30,50,20); //nose
//fill(255);
//circle(175,300,2)
//circle(190,130,2)
//circle(270,180,2)

//circle(425,300,2)
//circle(390,130,2)
//circle(330,180,2)

//circle(195,300,2)
//circle(205,160,2)
//circle(270,200,2)

//circle(405,300,2)
//circle(375,160,2)
//circle(330,200,2)
}
