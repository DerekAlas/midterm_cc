class Shape3 {

  constructor(x, y, s) {
    this.x_ = x;
    this.y_ = y;
    this.speed = s;
  }


  display(){
    rectMode(CENTER);

    fill(25, 25, 36);

    if(frameCount > 1800 && frameCount < 1850){
      rect(this.x_ + 400, this.y_ + 400, 200, 200);
    }

    if(frameCount >= 1850){
      push();
      translate(400, 400);
      scale(shrink);
      //fill(25, 25, 36);
      rect(this.x_ , this.y_, 200, 200);
      shrink = shrink - 0.001;
      pop();
    }

  }


  move(){
      this.x_ = this.x_ + random(-1, 1);
      this.y_ = this.y_ + random(-1, 1);


    /*for(let i = 1; i < 5; i+=0.01){
      this.x_ = this.x_ + random(-i, i);
      //this.y_ = this.y_ + random(-i, i);
    }*/


  }


}
