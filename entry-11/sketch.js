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

  noStroke();
  push();
  translate(width * 0.2, height * 0.5);
  rotate(200.0);
  star(400, 1000, 50, 160, 6);
  pop();

  translate(0,2600);
  noStroke();
  push();
  rotate(380.0);
  star(0, -100, 300, 900, 6);
  pop();

  translate(4800,-2400);
  noStroke();
  push();
  rotate(320.0);
  star(0, -100, 400, 1000, 6);
  pop();

  scale(1)
  noStroke();
  push();
  translate(-3500,1200);
  rotate(250.0);
  star(0, -100, 30, 100, 6);
  pop();

  scale(1)
  noStroke();
  push();
  translate(-3000,2400);
  rotate(175.0);
  star(0, -100, 50, 200, 6);
  pop();

  scale(1)
  noStroke();
  push();
  translate(-3200,2000)
  rotate(300.0);
  star(0, -100, 20, 70, 6);
  pop();

  scale(1)
  noStroke();
  push();
  translate(-2500,2500)
  rotate(300.0);
  star(0, -100, 20, 70, 6);
  pop();

  scale(.4)
  noStroke();
  push();
  translate(-9700,4500)
  rotate(300.0);
  star(0, -100, 20, 70, 6);
  pop();

  scale(1)
  noStroke();
  push();
  translate(-7000,2400)
  rotate(300.0);
  star(0, -100, 20, 70, 6);
  pop();

  scale(2)
  noStroke();
  push();
  translate(400,3000)
  rotate(134.0);
  star(0, -100, 50, 200, 6);
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

