



function setup() {
  createCanvas(600,600);
  background(20);
  fill(255);
}

function draw() {
noStroke();
background(0);
fill(90,81,84);
  triangle(175,300,190,130,270,180);
  triangle(425,300,390,130,330,180);
fill(237,163,196);
  triangle(195,300,205,160,270,200);
  triangle(405,300,380,150,330,200);
fill(90,81,84);
  circle(width/2,height/2,250); //head
rectMode(CENTER);
fill(237,163,196);
  rect(280,365,35,50,0,0,20,20);
fill(0);
  ellipse(265,340,100,60); //mouth
  ellipse(300,340,100,60); //mouth
fill(90,81,84);
  ellipse(265,335,100,60); //mouth
  ellipse(300,335,100,60); //mouth
fill(84,64,77);
  circle(230,290,80);
  circle(325,290,80); //eyebags
fill(255);
  circle(230,280,80);
  circle(325,280,80); //eyes
fill(54,89,63);
  ellipse(230,280,40,80);
  ellipse(325,280,40,80); //dark iris
fill(66,115,79);
  ellipse(230,280,30,70);
  ellipse(325,280,30,70); //dark iris
fill(255);
  ellipse(230,280,20,60);
  ellipse(325,280,20,60); //dark iris
fill(237,163,196);
  ellipse(275,330,50,20); //nose
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
