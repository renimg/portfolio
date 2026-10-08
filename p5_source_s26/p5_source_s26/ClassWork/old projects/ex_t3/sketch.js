// setup runs ( almost) first, runs once
function setup() {
// this define canvas size, (width,height)
createCanvas(500,500);
// color of background (greyscale)  0-255 
// where 0 is black and 255 is wh
background(120);
// can you tell when its saved?
// put setup code here
}

// runs second and runs over ... and over... and over......
function draw() {
  background(120);
  stroke(0);

  let ran = random(10); // 0-100
  //let ran = mouseX; // 0-100
  let ran2 = random(10); // 0-500
  let leftix = 60;
  let leftiy = 60;
  let rightix = 200;
  let rightiy = 60;
// let ran = 50; // 0-100
// let ran2 = 50; // 0-500
// (greyscale)  = black
fill(90);
// lox, loy, width, height   [ parameters or arguments]
// default drawing is center out.
//head
ellipse(240,250,270,400);
// overloading is all about different parameters
//  to create different behavior
 // r,g,b
 // left
 //left outer eye
fill(0,0,255);
ellipse(leftix + ran +100,leftiy+ 100,ran +70,100);
// grey, a
//left sclera
fill(255,190);
ellipse(leftix +ran2 +100,leftiy + 100,50,ran +50);
 // r,g,b,a
 //left eyeball
fill(0,255,0,100);
ellipse(leftix +ran +100,leftiy + 100,20,ran2 +20);
// right
//right outer eye 
fill(0,0,255);
 ellipse(rightix+ ran +100,rightiy + 100,ran +70,100);
// grey, a
//right sclera
fill(255,190);
ellipse(rightix + ran2 +100,rightiy +100,50,ran +50);
 // r,g,b,a
 //right eyeball
fill(0,255,0,100);
ellipse(rightix + ran +100,rightiy + 100,20,ran2 +20);
  // r,g,b,a
  fill("orange");
  // x, y, w, h, c
  // draws by default from the top-left
//mouth
rect(200,350,90,50,20);
fill(50,100,0);
// x, y, w, h, c1,c2,c3,c4
//nose
rect(200,250,90,50,15,20,40,50);

//scar
stroke(255,50,0);
 //x1,y1,x2,y2
 line(130, 220, 160, 325);
   /*
 */
}