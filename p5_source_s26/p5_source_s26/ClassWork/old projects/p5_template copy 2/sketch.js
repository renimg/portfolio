let currentKey = '';
let previousKey = '';
let storedKey = '';
let toggle = false;

function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(220);
  textSize(16);
  if (toggle) {
  text("Current: " + currentKey, 10, 50);
  text("Previous: " + previousKey, 10, 80);
  }
}

function keyPressed() {
  if (key == 'T' || key == 't') {
    toggle = !toggle;
  }
  // Store the current key as the previous one before it changes
   if (keyIsDown(UP_ARROW)) {
    currentKey = 'ArrowUp';
  } else if (keyIsDown(DOWN_ARROW)) {
    currentKey = 'ArrowDown';
  } else if (keyIsDown(LEFT_ARROW)) {
    currentKey = 'ArrowLeft';
  } else if (keyIsDown(RIGHT_ARROW)) {
    currentKey = 'ArrowRight';
  } if (keyIsDown(UP_ARROW) && keyIsDown(LEFT_ARROW)) {
    currentKey = 'ArrowUpLeft';
  } else if (keyIsDown(UP_ARROW) && keyIsDown(RIGHT_ARROW)) {
    currentKey = 'ArrowUpRight';
  } else if (keyIsDown(DOWN_ARROW) && keyIsDown(LEFT_ARROW)) {
    currentKey = 'ArrowDownLeft';
  } else if (keyIsDown(DOWN_ARROW) && keyIsDown(RIGHT_ARROW)) {
    currentKey = 'ArrowDownRight';
  }
  previousKey = storedKey;
  storedKey = currentKey;
}