function setup() {
  createCanvas(500,500);
  background(20);
  fill(255);
  let origin = createVector(width/2, height/2);
}

function draw() {
let origin = createVector(width/2, height/2);
translate (origin.x, origin.y); 
ellipse(0,0, 50, 50);
}
