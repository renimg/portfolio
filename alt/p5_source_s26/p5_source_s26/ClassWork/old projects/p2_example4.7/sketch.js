
///////////////////////////// OOP Krazy Karz Example
//

let names = ["Steve","Boris","Cat","Henry","Jason", "Sven","Natasha","Todd","Willi", "IT","dave"];
let karz;


function setup() {
  createCanvas(1200,800);
  background(180);
  // birthing a new instance

  karz = new Array(30); // Create

  for (let i = 0;  i < karz.length;i++) {
      karz[i] = new Kar(names[int(random(names.length))],random(5));
  }

}

function draw() {
  fill(180,20);
  rect(0,0,width,height);
  for (let i = 0;i < karz.length;i++) {
      karz[i].move();
      karz[i].wiggle(random(3));
      karz[i].update();
  }
}
