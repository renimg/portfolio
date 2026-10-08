


let rand = 0;
let gridName = "Gary";
function setup() {
  createCanvas(400, 400);
  background(0, 50, 100);
  noStroke();
}
function draw() {
  for (let i = 0; i < 400; i += 20) {
    for (let j = 0; j < 400; j += 20) {
      rand = random(255);
      fill(rand);
      rect( i+5, j+5, 10, 10 );
      //console.log(gridName + ", now has a fill value of " + rand);
    }
  }
}
