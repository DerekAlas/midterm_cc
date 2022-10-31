let scene1;
let scene2;
let scene3;

let stress1;

let grow;

function setup() {
  createCanvas(800, 800);
  //frameRate(100);

  scene1 = true;
  scene2 = false;
  scene3 = false;

  stress1 = new Shape1(0, 0, 0);
  stress2 = new Shape2(400, 400, 0);
  stress3 = new Shape3(0, 0, 0);

  grow = 1;

}



function draw() {

  if(scene1 == true){
    runScene1();
  }

  else if(scene2 == true){
    runScene2();
  }

  else if(scene3 == true){
    runScene3();
  }

}


function runScene1(){
  background(255);

  stroke(0);
  strokeWeight(4);

  //stress1.move();
  stress1.display(color(255));

  if(frameCount > 700){
    scene1 = false;
    scene2 = true;
  }

}





function runScene2(){
  background(0);

  noStroke();

  //stress2.display();
  //stress2.move();

//red-white flashes
  if((frameCount > 1000 && frameCount < 1010) || (frameCount > 1210 && frameCount < 1220) || // controls white flash
    (frameCount > 1420 && frameCount < 1430) || (frameCount > 1530 && frameCount < 1540) ||
    (frameCount > 1580 && frameCount < 1590) || (frameCount > 1620 && frameCount < 1630) ||
    (frameCount > 1650 && frameCount < 1660) || (frameCount > 1680 && frameCount < 1690) ||
    (frameCount > 1700 && frameCount < 1710) || (frameCount > 1720 && frameCount < 1730) ||
    (frameCount > 1740 && frameCount < 1750)){
    background(255);
  }

  if(frameCount > 1010 && frameCount < 1210){
    background(20, 0, 0);
  }

  if(frameCount > 1220 && frameCount < 1420){
    background(40, 0, 0);
  }

  if(frameCount > 1430 && frameCount < 1530){
    background(60, 0, 0);
  }

  if(frameCount > 1540 && frameCount < 1580){
    background(80, 0, 0);
  }

  if(frameCount > 1590 && frameCount < 1620){
    background(100, 0, 0);
  }

  if(frameCount > 1630 && frameCount < 1650){
    background(120, 0, 0);
  }

  if(frameCount > 1660 && frameCount < 1680){
    background(160, 0, 0);
  }

  if(frameCount > 1690 && frameCount < 1700){
    background(200, 0, 0);
  }

  if((frameCount > 1710 && frameCount < 1720) || (frameCount > 1730 && frameCount < 1740) ||
    (frameCount > 1750 && frameCount < 1760)){
    background(255, 0, 0);
  }

  stress2.display();
  stress2.move();

  if(frameCount > 1760){
    background(0);
  }

  if(frameCount > 1800){
    scene2 = false;
    scene3 = true;
  }
}


function runScene3(){
  background(0, 0, 100);

  stress3.display();



}
