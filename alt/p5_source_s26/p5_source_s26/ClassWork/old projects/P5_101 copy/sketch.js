//let strokeHue = 0;
let s1;
function setup() {
  createCanvas(720, 400);
  frameRate(30)
  // Remove the bezier stroke fills and establish a new
  // stroke weight. Change the color mode to HSB.
  noFill();
  strokeWeight(2);
  colorMode(HSB);
  s1 = new jsBezier(10, 30, 0, 410, 20, 440, 300, 240, 300, 0.0, 0.0, 0, 20, 200);
}

function draw() {
  describe(
    'Ten rainbow-colored lines in a bezier curve formation. The top anchors of the curves move with the cursor as it hovers over the black canvas.'
  );

  background(5);

  // Create 10 bezier lines with anchor points moving
  // with the X coordinate of the cursor.
    //stroke(strokeHue, 50, 60);
    s1.calcCurve();
    //bezier(mouseX - i / 2, 0 + i, 410, 20, 440, 300, 240 - i / 16, 300 + i / 8);
}

class jsBezier {
  strokeColor;
  strokehue;
  x1; 
  y1;
  x2;
  y2;
  x3;
  y3;
  x4;
  y4;
  xsin;
  xcos;
  speed;

  constructor(xs,x1,y1,x2,y2,x3,y3,x4,y4,sin,cos,spd,lc, a) {
    this.xspacing = xs;
    this.strokehue = 20;
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
    this.x4 = x4;
    this.y4 = y4;
    this.sin = sin;
    this.cos = cos;
    this.speed = spd;
    this.linecount = lc*10;
    this.a = a;

    if (this.strokehue > 360) {
      this.strokehue = 0;
    }
  }

  calcCurve() {
    angleMode(RADIANS);
    colorMode(HSB);

    this.speed += 0.02;

    let x = this.speed;
    for(let i = 10; i < this.linecount; i += 10) {
      this.strokehue = i + 10;
      stroke(this.strokehue, 50, 60);
      this.speed += sin(x) * this.a
      bezier(this.x1 - i / 2, this.y1 + i, this.x2, this.y2, this.x3, this.y3, this.x4 - i / 16, this.y4 + i / 8);
      this.x1 += this.speed;
      this.x4 += this.speed;
      //x += this.xspacing;
    }
  }
}