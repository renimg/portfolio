let objscale;
let ofx;
let ofy;

let value = 0;
let togglestats = false;
let toggleBackground = false;


function setup() {
  createCanvas(600,600);
  fill(255);
frameRate(30);
}

function draw() {

   resizeCanvas(800,800);
    if (toggleBackground == true) {
       for (let i = 0; i < width; i += 60) {
    for (let j = 0; j <= height; j += 10) {
      rand = random(128,64,255);
      fill(128+rand,0+rand,128+rand,128);
      rect( i+5, j+5, 60, 20,0,0,60,60);
    }
  }
}

ofx = 0;
ofy = 0;

if (width <= height) 
{
objscale = width/2;
} else {
objscale = height/2;
}
  
stroke(0);
strokeWeight(objscale/24);
fill(0,0,0);
 triangle(objscale/2+ofx,objscale+ofy,objscale/2+ofx,objscale/3+ofy,objscale+ofx,objscale/2+ofy);
 triangle(objscale*1.5+ofx,objscale+ofy,objscale*1.5+ofx,objscale/3+ofy,objscale+ofx,objscale/2+ofy);
fill(0,0,0);
  circle(objscale+ofx,objscale+ofy,objscale); //head
noStroke();

fill(90,81,84);
 triangle(objscale/2+ofx,objscale+ofy,objscale/2+ofx,objscale/3+ofy,objscale+ofx,objscale/2+ofy);
 triangle(objscale*1.5+ofx,objscale+ofy,objscale*1.5+ofx,objscale/3+ofy,objscale+ofx,objscale/2+ofy);
fill(237,163,196);
 triangle(objscale/1.6667+ofx,objscale+ofy,objscale/1.6667+ofx,objscale/2.3077+ofy,objscale+ofx,objscale/1.6667+ofy);
 triangle(objscale*1.4+ofx,objscale+ofy,objscale*1.4+ofx,objscale/2.3077+ofy,objscale+ofx,objscale/1.6667+ofy);
fill(90,81,84);
  circle(objscale+ofx,objscale+ofy,objscale); //head
rectMode(CENTER);
fill(237,163,196);
  rect(objscale*.9333+ofx,objscale*1.2167+ofy,objscale*0.1167,objscale*0.1667,0,0,objscale*0.0667,objscale*0.0667);

let animY= (objscale*1.3)*sin(frameCount*0.05)+(objscale*1.2167)*2;
let y=objscale*1.2167;
y=lerp(y,animY,0.05);

if ( mouseIsPressed == true)
  {
  if ( mouseX > objscale *0.84+ofx && mouseX <= objscale *1.008+ofx)
    {
    if ( mouseY > objscale*1.065+ofy && mouseY <= objscale *1.135+ofy)
      {
      fill(237,163,196);
      rect(objscale*.9333+ofx,y+ofy,objscale*0.1167,objscale*0.2,0,0,objscale*0.0667,objscale*0.0667);
      }
    }
  }
// mouse pressed test ends
fill(90,81,84);
  ellipse(objscale*0.8833+ofx,objscale*1.1167+ofy,objscale/3,objscale/5); //mouth
  ellipse(objscale+ofx,objscale*1.1167+ofy,objscale/3,objscale/5); //mouth
noFill();
  strokeWeight(objscale/48);
  stroke(0);
  curve(objscale*0.9333+ofx,objscale+ofy, objscale*0.9333+ofx,objscale*1.2+ofy, objscale*0.7166+ofx,objscale*1.1667+ofy, objscale*0.7166+ofx,objscale*0.6667+ofy)
  curve(objscale*0.9333+ofx,objscale+ofy, objscale*0.9333+ofx,objscale*1.2+ofy, objscale*1.1667+ofx,objscale*1.1667+ofy, objscale*1.1667+ofx,objscale*0.6667+ofy)
  strokeWeight(0);
  
fill(84,64,77);
  circle(objscale*0.7667+ofx,objscale*0.9667+ofy,objscale/3.75);
  circle(objscale*1.083+ofx,objscale*0.9667+ofy,objscale/3.75); //eyebags
fill(255);
beginClip();
push();
circle(objscale*0.7667+ofx,objscale*0.9333+ofy,objscale/3.75);
circle(objscale*1.083+ofx,objscale*0.9333+ofy,objscale/3.75); //eyes
endClip();
fill(255);
circle(objscale*0.7667+ofx,objscale*0.9333+ofy,objscale/3.75);
circle(objscale*1.083+ofx,objscale*0.9333+ofy,objscale/3.75); //eyes
  if (mouseIsPressed == true) 
  {
    fill(54,89,63);
 ellipse(objscale*0.7667+random(objscale/70)+ofx,objscale*0.9333+ofy,objscale/7.5,objscale/3.75);
 ellipse(objscale*1.083+random(objscale/70)+ofx,objscale*0.9333+ofy,objscale/7.5,objscale/3.75); //dark iris
fill(66,115,79);
  ellipse(objscale*0.7667+random(objscale/70)+ofx,objscale*0.9333+ofy,objscale/10,objscale/4.2857);
  ellipse(objscale*1.083+random(objscale/70)+ofx,objscale*0.9333+ofy,objscale/10,objscale/4.2857); //dark iris
fill(255);
 ellipse(objscale*0.7667+random(objscale/70)+ofx,objscale*0.9333+ofy,objscale/15,objscale/5);
 ellipse(objscale*1.083+random(objscale/70)+ofx,objscale*0.9333+ofy,objscale/15,objscale/5); //dark iris
  }
   else
  {
    fill(54,89,63);
 ellipse(objscale*0.7667+ofx,objscale*0.9333+ofy,objscale/7.5,objscale/3.75);
 ellipse(objscale*1.083+ofx,objscale*0.9333+ofy,objscale/7.5,objscale/3.75); //dark iris
fill(66,115,79);
  ellipse(objscale*0.7667+ofx,objscale*0.9333+ofy,objscale/10,objscale/4.2857);
  ellipse(objscale*1.083+ofx,objscale*0.9333+ofy,objscale/10,objscale/4.2857); //dark iris
fill(255);
 ellipse(objscale*0.7667+ofx,objscale*0.9333+ofy,objscale/15,objscale/5);
 ellipse(objscale*1.083+ofx,objscale*0.9333+ofy,objscale/15,objscale/5); //dark iris
  }
 pop();
fill(237,163,196);
  ellipse(objscale*0.9167+ofx,objscale*1.1+ofy,objscale/6,objscale/15); //nose

fill(255,128,255);

// circle(280,360,2)
// circle(215,335,2)

//circle(280,340,2)
//circle(215,315,2)

//circle(280,360,2)
//circle(350,335,2)

//circle(280,340,2)
//circle(350,315,2)

  textSize(24);
  fill(255);
  stroke(0);
  strokeWeight(4);


let x = Math.trunc(mouseX);
let y2 = Math.trunc(mouseY);

if (togglestats == true) {
  text("x: " + x, 10, 30);
  text("y: " + y2, 10, 60);

  text("width: " + windowWidth, 10, 90);
  text("height: " + windowHeight, 10, 120);
}
}

function mouseClicked() 
{
  if (togglestats == true) {
  console.log("mouse was clicked at x: " + Math.trunc(mouseX) + " and y: " + Math.trunc(mouseY))
  }
}

function keyPressed()
{
  if (key == 't' || key == 'T') {
    if (value == 0) {
      togglestats = true;
      value = 1;
    } else {
      togglestats = false;
      value = 0;
    }
  }
  if (key == 'b' || key == 'B') {
    if (toggleBackground == false) {
      toggleBackground = true;
    } else {
      toggleBackground = false;
    }
  }
}