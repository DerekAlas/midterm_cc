let scene1;
let scene2;
let scene3;

/*let stress1;
let stress2;
let stress3;
let stress4;
let stress11;*/

let grow;
let grow_;
let shrink;
let opacity;

function setup() {
  createCanvas(800, 800);
  //frameRate(100);

  scene1 = true;
  scene2 = false;
  scene3 = false;

  stress1 = new Shape1(0, 0, 0);
  stress2 = new Shape2(400, 400, 0);
  stress3 = new Shape2(400, 400, 0);
  stress4 = new Shape2(400, 400, 0);
  stress5 = new Shape2(400, 400, 0);
  stress6 = new Shape2(400, 400, 0);
  stress7 = new Shape2(400, 400, 0);
  stress8 = new Shape2(400, 400, 0);
  stress9 = new Shape2(400, 400, 0);
  stress10 = new Shape2(400, 400, 0);
  stress11 = new Shape3(0, 0, 0);
  stress12 = new Shape4(0, 0, 0);

  grow = 1;
  grow_ = 1;
  shrink = 1;
  opacity = 0;

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

  stress1.move();
  stress1.display(color(255));

  if(frameCount > 450){
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

  if(frameCount > 1010){
    stress3.display();
    stress3.move();
  }

  if(frameCount > 1220){
    stress4.display();
    stress4.move();
  }

  if(frameCount > 1430){
    stress5.display();
    stress5.move();
  }

  if(frameCount > 1540){
    stress6.display();
    stress6.move();
  }

  if(frameCount > 1590){
    stress7.display();
    stress7.move();
  }

  if(frameCount > 1630){
    stress8.display();
    stress8.move();
  }

  if(frameCount > 1660){
    stress9.display();
    stress9.move();
  }

  if(frameCount > 1690){
    stress10.display();
    stress10.move();
  }

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

  if((frameCount > 2600 && frameCount < 2610) || (frameCount > 2700 && frameCount < 2730) ||
    (frameCount > 2750 && frameCount < 2755) || (frameCount > 2760 && frameCount < 2765) ||
    (frameCount > 2780 && frameCount < 2790) || (frameCount > 2805 && frameCount < 2820) ||
    (frameCount > 2840 && frameCount < 2850) || (frameCount > 2855 && frameCount < 2880) ||
    (frameCount > 2900 && frameCount < 2910) || (frameCount > 2920 && frameCount < 2950) ||
    (frameCount > 2975 && frameCount < 2990) || (frameCount > 3000 && frameCount < 3010) ||
    (frameCount > 3020 && frameCount < 3030) || (frameCount > 3040 && frameCount < 3050) ||
    (frameCount > 3060 && frameCount < 3070) || (frameCount > 3080 && frameCount < 3090) ||
    (frameCount > 3100 && frameCount < 3110) || (frameCount > 3120 && frameCount < 3130) ||
    (frameCount > 3150 && frameCount < 3160) || (frameCount > 3170 && frameCount < 3180) ||
    (frameCount > 3190 && frameCount < 3200) || (frameCount > 3210 && frameCount < 3220) ||
    (frameCount > 3230 && frameCount < 3240) || (frameCount > 3250)){
        background(255, 0, 0);
      }

  noStroke();
  //strokeWeight(1);

  stress11.display();
  stress11.move();



  //if(frameCount > 1800){
    stroke(255, opacity);
    strokeWeight(4);

    stress12.move();
    stress12.display();

  //}


}
