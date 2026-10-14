// grid
let blocks = Array(256);
let bsz = 25;

function setup() {
  createCanvas(406, 400);
  background(0);
  colorMode(HSB);
  noStroke();
  let gridCount = 0;
  for (let i = 0; i < 16; i++ ) {
    for (let j = 0; j < 16; j++ ) {
      blocks[gridCount] = new Block(i*bsz, j*bsz);
      blocks[gridCount].seed(gridCount);
      gridCount++;
    }
  }
}


function draw() {
  background(0);
  push();
  translate(5,5);
  for (let i = 0; i < blocks.length; i++ ) {
    blocks[i].display();
    blocks[i].update();
  }
  pop();

}

function mousePressed() {
  for (let i = 0; i < blocks.length; i++ ) {
    blocks[i].seed(i);

  }
}





class Block {
  value;
  ch;
  c;
  posX;
  posY;

  //Constructor
  constructor(tposX, tposY) {
    //println("new Block is made " );
    this.posX = tposX;
    this.posY = tposY;
    //seed();
  }

  seed(s) {
    this.value = s;
    this.c = color(this.value, 255, 255);
    this.ch = random(3);
    console.log(this.ch);
  }

   display() {
    noStroke();
    fill(this.c);
    rect(this.posX, this.posY, 20, 20);
  }

  update() {
 
    if ((this.value < 0) || (this.value > 254)) {
      this.ch = -this.ch;
    }
    this.value += this.ch;
    this.c = color(this.value, 255, 255);
  }
}
