// Global Variables


// Setup code goes here
function setup() {
  createCanvas(800, 600);
  ellipseMode(CENTER);
  curveDetail(15);
}

function draw(){
  background(250, 233, 224);
  drawHair();
  drawNeck();
  drawFace();
  drawEyes();
  drawEyebrows();
  drawNose();
  drawMouth();

}

function mousePressed(){
  //mouseX = x coordinate of the mouse
  //mouseY = y coordinate of the mouse
  print("mouse pressed at x: " + mouseX + " y:" + mouseY);
}

function drawMouth() {
  let p1 = { x: 294 , y: 433 };
  let p2 = { x: 319 , y: 440 };
  let p3 = { x: 340 , y: 441 };
  let p4 = { x: 362 , y: 438 };
  stroke(131, 64, 52)
  strokeWeight(4);
  curve(p1.x, p1.y, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
  curve(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
  curve(p2.x, p2.y, p3.x, p3.y, p4.x, p4.y, p4.x, p4.y);
}

function drawNose() {
  stroke(255, 193, 180);
  strokeWeight(3);
  line(338, 373, 338, 396);
}

function drawEyebrows() {
  // Curve Left Brows
  let p1 = { x: 214, y: 255 };
  let p2 = { x: 318, y: 263 };
  let p3 = { x: 248, y: 248 };
  let p4 = { x: 330, y: 269 };
  noFill();
  noStroke();
  curve(p1.x, p1.y, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
  stroke(82, 66, 36);
  strokeWeight(5);
  curve(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
  noStroke();
  curve(p2.x, p2.y, p3.x, p3.y, p4.x, p4.y, p4.x, p4.y);

  //Curve Right Brows
  let p5 = { x: 364 , y: 280 };
  let p6 = { x: 379 , y: 270 };
  let p7 = { x: 414 , y: 260 };
  let p8 = { x: 440 , y: 258 };
  noFill();
  noStroke();
  curve(p5.x, p5.y, p5.x, p5.y, p6.x, p6.y, p7.x, p7.y);
  stroke(82, 66, 36);
  strokeWeight(5);
  curve(p5.x, p5.y, p6.x, p6.y, p7.x, p7.y, p8.x, p8.y);
  noStroke();
  curve(p6.x, p6.y, p7.x, p7.y, p8.x, p8.y, p8.x, p8.y);
}

function drawEyes() {
  // Right Eye
  strokeWeight(5);
  stroke(121, 59, 50);
  ellipse(267, 307, 100, 50);
  stroke(248, 220, 208);
  fill(255, 229, 229);
  ellipse(267, 311, 100, 50);
  noStroke();
  fill(79,56,18);
  circle(264, 309, 50);
  fill(37, 37, 46);
  circle(263, 309,30);
  fill(255,255,255);
  square(279, 299, 5, 20);

  // Left Eye
  strokeWeight(5);
  stroke(121, 59, 50);
  ellipse(403, 307, 100, 50);
  stroke(248, 220, 208);
  fill(255, 229, 229);
  ellipse(403, 311, 100, 50);
  noStroke();
  fill(79,56,18);
  circle(397, 309, 50);
  fill(37, 37, 46);
  circle(396, 309,30);
  fill(255,255,255);
  square(412 , 299, 5, 20);
}

function drawFace() {
  //Left CurveVertex
  let p1 = { x: 319, y: 515 };
  let p2 = { x: 418, y: 449 };
  let p3 = { x: 463, y :328};
  let p4 = { x: 426, y: 190 };
  let p5 = { x: 342, y: 127 };
  let p6 = { x: 247, y: 184 };
  let p7 = { x: 205, y: 270 };
  let p8 = { x: 209, y: 383 };
  let p9 = { x : 252, y : 461 };
  let p10 = { x : 263, y : 472 };

  fill(250, 233, 224);
  stroke(82, 66, 36);
  beginShape();
  curveVertex(p1.x, p1.y);
  curveVertex(p1.x, p1.y);
  curveVertex(p2.x, p2.y);
  curveVertex(p3.x, p3.y);
  curveVertex(p4.x, p4.y);
  curveVertex(p5.x, p5.y);
  curveVertex(p6.x, p6.y);
  curveVertex(p7.x, p7.y);
  curveVertex(p8.x, p8.y);
  curveVertex(p9.x, p9.y);
  curveVertex(p1.x, p1.y);
  curveVertex(p1.x, p1.y);
  endShape();

  fill(82, 54, 5);
  stroke(82, 54, 5)
  strokeWeight(15);

  triangle(332, 130, 202, 275, 237, 149);
  triangle(358, 131, 456, 289, 436, 176);
  let l1 = { x: 341, y: 128 };
  let l2 = { x: 306, y: 178 };
  let l3 = { x: 244, y: 247 };
  let l4 = { x: 205, y: 276 };
  noFill();
  curve(l1.x, l1.y, l1.x, l1.y, l2.x, l2.y, l3.x, l3.y);
  curve(l1.x, l1.y, l2.x, l2.y, l3.x, l3.y, l4.x, l4.y);
  curve(l2.x, l2.y, l3.x, l3.y, l4.x, l4.y, l4.x, l4.y);

  let l5 = { x: 352 , y: 133 };
  let l6 = { x: 399 , y: 221 };
  let l7 = { x: 422 , y: 259 };
  let l8 = { x: 456 , y: 289 };
  noFill();
  curve(l5.x, l5.y, l5.x, l5.y, l6.x, l6.y, l7.x, l7.y);
  curve(l5.x, l5.y, l6.x, l6.y, l7.x, l7.y, l8.x, l8.y);
  curve(l6.x, l6.y, l7.x, l7.y, l8.x, l8.y, l8.x, l8.y);


}

function drawNeck() {
  noStroke();
  fill(250, 233, 224);
  quad(287, 493, 299, 531, 333, 531, 345, 498);
  rect(189, 532, 800, 300)
}

function drawHair() {
  noStroke();
  fill(82, 54, 5);
  ellipse(321, 323, 370, 600);



}
