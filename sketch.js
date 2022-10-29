let scene1 = true;
let scene2 = false;
let scene3 = false;

let stress1;

function setup() {
  createCanvas(800, 800);
  frameRate(10);
  stress1 = new Shape1(400, 300, 10);
}



function draw() {

  //scene1.function(runScene1);

  if(scene1 == true){
    runScene1();
  }


else if(scene2 == true){
    runScene2();
  }

  if(scene3 == true){
    runScene3();
  }

}


function runScene1(){
  background(0);

  stroke(255);
  strokeWeight(4);

  //stress1.move();
  stress1.display(color(255));


  if(frameCount == 10){
    scene1 == false;

  }


}


function runScene2(){
  background(255);
}


function runScene3(){

}
