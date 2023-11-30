var canvas;

let stars = [];

let speed;

function setup() {
canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0,20);
canvas.style('z-index','-1');

for (let i = 0; i < 1200; i++) {
  stars[i] = new Star();
}

}

function draw() {

  scale(0.4)
  noStroke();
  push();
  translate(width * 0.2, height * 0.5);
  rotate(300.0);
  star(0, -100, 20, 70, 6);
  pop();
  
  scale(0.6)
  noStroke();
  push();
  translate(width * 0.2, height * 0.5);
  rotate(200.0);
  star(300, 300, 20, 70, 6);
  pop();
  
  scale(0.2)
  noStroke();
  push();
  translate(width * 0.2, height * 0.5);
  rotate(200.0);
  star(300, 300, 20, 70, 4);
  pop();

  scale(0.7)
  noStroke();
  push();
  translate(width * 0.2, height * 0.5);
  rotate(0.0);
  star(1200, 300, 20, 70, 4);
  pop();
  


}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}


function draw() {
  speed = map(mouseY, 0, height, 0, 30);
  background();
  translate(width / 2, height / 2);
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}


function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
  this.pz = this.z;

  this.update = function() {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }

  this.show = function() {
    fill(158,204,215);
    noStroke();

    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);

    var r = map(this.z, 0, width, 16, 0);
    ellipse(sx, sy, r, r);

    var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;

    stroke(201,55,176);
    line(px, py, sx, sy);

  }
}

