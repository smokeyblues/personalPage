var queRadians = 0;
var timer = 0;

function setup() {
  var dryEraseBoard = createCanvas(windowWidth, 300);
  dryEraseBoard.parent('dryEraseBoard');
  background(250);
}

function draw() {
  background(250, 250, 250);
  // text(timer/100, 150, 250);
  translate(200, 0);
  rotate(PI/2.5);
    noFill();
    strokeWeight(3);
  arc(150, 150, 100, 100, radians(270), radians(queRadians));
  textSize(32);
  queRadians+=5;
  timer+=5;
  if (queRadians > 269) {
    queRadians = 269;
  }
  if (queRadians == 269) {
    line(150, 74, 150, 220)
  }
  if (timer > 500) {
    line(75, 150, 220, 150);
  }

}
