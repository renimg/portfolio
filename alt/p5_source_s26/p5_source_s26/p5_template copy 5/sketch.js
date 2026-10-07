let img;
let pixelGrid = [];
let cellSize = 1; // Size of each "pixel" in the grid
let cols, rows;

function preload() {
  // Load your pixel art image
  img = loadImage('audry.png');
}

function setup() {
  createCanvas(41,41);
  img.resize(41,41); // Ensure image fits canvas
  
  cols = width / cellSize;
  rows = height / cellSize;

  // 1. Loop through the grid
  for (let i = 0; i < cols; i++) {
    pixelGrid[i] = []; // Initialize 2D array
    for (let j = 0; j < rows; j++) {
      
      // 2. Sample pixel color from the image
      let x = i * cellSize + cellSize / 2;
      let y = j * cellSize + cellSize / 2;
      let c = img.get(x, y);
      
      // 3. Store the color in the array
      pixelGrid[i][j] = c;
    }
  }
  noLoop();
}

function draw() {
  background(255);
  
  // Render the grid based on the array
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      fill(pixelGrid[i][j]);
      noStroke();
      rect(i * cellSize, j * cellSize, cellSize, cellSize);
    }
  }
  console.log(pixelGrid); // View the resulting 2D array in console
}