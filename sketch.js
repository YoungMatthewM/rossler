var tail = 500;

function setup() { 
  var canvas = createCanvas(620, 620, WEBGL);
  dp = new DblPen();
  pts = [];
  for(i=0;i<tail;i++){ //prepopulate pts array
    pts.push(createVector(10*dp.x,10*dp.y,10*dp.z));
  }
} 

function draw() { 
  background(100);
  rotateZ(atan(1/sqrt(2)));
  rotateX(QUARTER_PI);
  dp.update();
  pts.shift();
  pts.push(createVector(10*dp.x,10*dp.y,10*dp.z));
  strokeWeight(2);
  colorMode(HSB,tail,100,100);
  noFill();
  //beginShape();
  for(i=0; i<tail; i++){
    stroke(i,100,100);
    push();
	translate(pts[i].x,pts[i].y,pts[i].z);
	sphere(1,4,4);
	pop();
  }
  //endShape();
  //dp.display();
  
		
}