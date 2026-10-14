let symmetry = 6;
let angle = 360 / symmetry;
let hue = 0;
let saturation = 150;
let brightness = 100;
let lox, loy, speedx, speedy;
let lox2, loy2, speedx2, speedy2;


function setup() {
  describe(
    `Dark grey canvas that reflects the lines drawn within it in ${symmetry} sections.`
  );
  createCanvas(800,800);
  angleMode(DEGREES);
  background(50);
  lox = random(width/2);
  loy = random(height/2);
  speedx = random(-5, 5);
  speedy = random(-5, 5);
  lox2 = random(width/2);
  loy2 = random(height/2);
  speedx2 = random(-5, 5);
  speedy2 = random(-5, 5);
}

function draw() {
  // Move the 0,0 coordinates of the canvas to the center, instead of in
  // the top left corner.
  if (lox < 0) {
        lox = width;
    }
    if (lox > width) {
        lox = 0;
    }
    if (loy < 0) {
        loy = height;
    }
    if (loy > height) {
        loy = 0;
    }
    if (lox2 < 0) {
        lox2 = width;
    }
    if (lox2 > width) {
        lox2 = 0;
    }
    if (loy2 < 0) {
        loy2 = height;
    }
    if (loy2 > height) {
        loy2 = 0;
    }
  translate(width / 2, height / 2);
  // If the cursor is within the limits of the canvas...
    // Translate the current position and the previous position of the
    // cursor to the new coordinates set with the translate() function above.
    let lineStartX = lox
    let lineStartY = loy
    let lineEndX = lox2
    let lineEndY = loy2
    lox += speedx;
    loy += speedy;
    lox2 += speedx2;
    loy2 += speedy2;

    // And, if the mouse is pressed while in the canvas...
          hue++;
          saturation++;
          brightness++;
    if (hue > 360) {
    hue = 0;
} if (saturation > 360){
   saturation = 150;
} if (brightness > 360){
    brightness = 100;
} else{
    hue++;
    saturation++;
    brightness++;
}
      // For every reflective section the canvas is split into, draw the cursor's
      // coordinates while pressed...
      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        colorMode(HSL,360);
        stroke(hue,saturation,brightness);
        strokeWeight(random(1,10));
        line(lineStartX, lineStartY, lineEndX, lineEndY);

        // ... and reflect the line within the symmetry sections as well.
        push();
        scale(1, -1);
        line(lineStartX, lineStartY, lineEndX, lineEndY);
        pop();
      }
}