var sound;
function preload() {
   sound = loadSound("Thoughts.wav")
}

function setup() {
  createCanvas(1500, 857);
  angleMode(DEGREES);
  sound.loop();
}
function draw() {
  background(0);
  translate(750, 428.5);
  rotate(-90);

  let hr = hour();
  let min = minute();
  let secs = second();
  
  strokeWeight(10);
  noFill();
  stroke(255, 0, 140);
  let secondAngle = map(secs, 0, 60, 0, 360);
  //arc(0, 0, 757, 757, 0, secondAngle); 

  stroke(64, 0, 255);
  let minuteAngle = map(min, 0, 60, 0, 360);
  ////arc(0, 0, 720, 720, 0, minuteAngle);

  stroke(0, 179, 255);
  let hrAngle = map(hr % 12, 0, 12, 0, 360);
  //arc(0, 0, 680, 680, 0, hrAngle);
  push();
  strokeWeight(6)
  rotate(secondAngle);
  stroke(255, 0, 140);
  line(0, 0, 280, 0);
  pop();

  push();
  rotate(minuteAngle);
  strokeWeight(12)
  stroke(174, 255, 0);
  line(0, 0, 300, 0);
  pop();

  push();
  rotate(hrAngle);
  strokeWeight(12)
  stroke(0, 179, 255);
  line(0, 0, 200, 0);
  pop();

  stroke(255);
  strokeWeight(15);
  point(0, 0);

  fill(255)
  noStroke();
  text(hr+':'+min+':'+secs, 0, 300);
}