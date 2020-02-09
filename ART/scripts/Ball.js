class Ball {

  constructor(category, name, url){
    // Offset along the perlin path
    this.xoff1 = random(0, 1000);
    this.xoff2 = random(10000, 100000);
    this.x = random(0, windowWidth);
    this.y = random(0, windowHeight);
    this.history = [];
    this.category = category;
    this.name = name;
    this.url = url;
    this.isHighlighted = false;
  }

  update() {
    this.xoff1 += 0.002;
    this.xoff2 += 0.002;

    this.x = map(noise(this.xoff1), 0, 1, 0, windowWidth);
    this.y = map(noise(this.xoff2), 0, 1, 0, windowHeight);

    var v = createVector(this.x, this.y);
    this.history.push(v);
    if (this.history.length > 15) {
      this.history.splice(0, 1);
    }
  }

  show() {
    var len = this.history.length;
    noStroke();

    beginShape();

    for (var i = 0; i < len; i++) {
      var pos = this.history[i];
      var d = map(i, 0, len, 10, 30);
      var fillint = map(i, 0, len, 0, 60);
      fill(0, fillint);
      ellipse(pos.x, pos.y, d);
    }
    endShape();
  }
}
