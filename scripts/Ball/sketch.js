var balls = [];
let table;

function preload(){
    table = loadTable("resources/art_projects.csv", 'csv', 'header');
}

function setup() {
  background(255);
  createCanvas(windowWidth, windowHeight);
  for(var i = 0; i < table.getRowCount(); i++){
    balls.push(new Ball());
  }
  textFont('monospace', 24);
  pixelDensity(2); 
}

function draw() {
  background(255);
  for (var i = 0; i < balls.length; i++) {
    highlightBall()
    balls[i].update();
    balls[i].show();
  }
}

function highlightBall() {
  for (var i = 0; i < balls.length; i++) {
    let isNearX = abs(mouseX - balls[i].x) < 70 / 2;
    let isNearY = abs(mouseY - balls[i].y) < 70 / 2;
    if (isNearX && isNearY) {
      balls[i].highlight();
      noStroke();
      fill(0);
      text(balls[i].name, 30, 40);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
