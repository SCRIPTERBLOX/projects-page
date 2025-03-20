let time = 1;
const speed = 0.01;
const noiseScale = 0.01;
const zOffsetIncrement = 0.01;
let zOffset = 0;
let colorPalette = ["#2B2B2B", "#898989", "#525252"];
let cols, rows;
const tileSize = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  noStroke();
  cols = floor(width / tileSize);
  rows = floor(height / tileSize);
}

function draw() {
  background(220);

  zOffset += zOffsetIncrement;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let noiseVal = noise(x * noiseScale, y * noiseScale, zOffset);
      let colorIndex = floor(map(noiseVal, 0, 1, 0, colorPalette.length));
      fill(colorPalette[colorIndex]);
      rect(x * tileSize, y * tileSize, tileSize, tileSize);
    }
  }

  filter(BLUR, 75); // Apply blur here.  Adjust blur amount.
  time += speed;

  // Draw the Projects
  fill(255);
  rect(windowWidth/6-10, 100-10, windowWidth/6*4+20, 500+20);
  fill(0, 0, 0, 100);
  rect(windowWidth/6, 100, windowWidth/6*4, 500);

  /*fill(255, 0, 0);
  rect(windowWidth/6+windowWidth/100, 100+windowWidth/100, windowWidth/7, windowWidth/7);*/
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  cols = floor(width / tileSize);
  rows = floor(height / tileSize);
}