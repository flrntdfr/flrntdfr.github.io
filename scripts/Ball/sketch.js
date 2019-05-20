let balls = [];
let table;
let nav;
let nameOfSelected;
let categories;

function preload() {
  table = loadTable("resources/art_projects.csv", 'csv', 'header');
}

function setup() {
  background(255);
  textFont('monospace', 24);
  createCanvas(windowWidth, windowHeight);
  pixelDensity(2);
  cursor(CROSS);

  // Prepare dom elements on the page
  rectMode(CENTER);
  nav = createElement('nav', 'FILTER');
  nameOfSelected = createP();
  categories = removeDuplicates(table.getColumn('category'));
  nameOfSelected.position(width/2, 30); //TODO: Use CSS
  let ul = createElement('ul');
  nav.child(ul);

  // Populate the navigation filter
  for (let i = 0; i < categories.length; i++) {
    let li = createElement('li', categories[i]);
    ul.child(li);
  }

  // Populate the canvas with balls
  for (var i = 0; i < table.getRowCount(); i++) {
    let category = table.getString(i, 'category');
    let name = table.getString(i, 'name');
    let url = table.getString(i, 'url');
    balls.push(new Ball(category, name, url));
  }
}

function draw() {
  background(255);
  nameOfSelected.html(''); // Nothing selected
  for (var i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].show();
    balls[i].isHighlighted = false;
    highlightBall()
  }
}

function highlightBall() {
  for (var i = 0; i < balls.length; i++) {
    let isNearX = abs(mouseX - balls[i].x) < 70 / 2;
    let isNearY = abs(mouseY - balls[i].y) < 70 / 2;
    if (isNearX && isNearY) {
      stroke(0);
      strokeWeight(1);
      noFill();
      ellipse(balls[i].x, balls[i].y, 70);
      balls[i].isHighlighted = true; //TODO: switch back to false
      nameOfSelected.html(balls[i].name);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  for (let ball in balls) {
    if (ball.isHighlighted) {
      ball.openURL();
    }
  }
}

function removeDuplicates(array) {
  let uniqueArray = array.filter(
    function(elem, index, self) {
      return index == self.indexOf(elem);
    });
  return uniqueArray;
}
