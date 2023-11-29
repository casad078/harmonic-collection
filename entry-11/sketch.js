var canvas;

function setup() {
canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0,20);
canvas.style('z-index','-1');
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