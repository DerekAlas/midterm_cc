class Shape3 {

  constructor(x, y, s) {
    this.x_ = x;
    this.y_ = y;
    this.speed = s;
  }


  display(color){
    rectMode(CENTER);

    fill(25, 25, 36);
    rect(this.x_, this.y_, 200, 200);

/*
    push();
    translate(400, 400);
    //scale(grow);
    fill(25, 25, 36);
    rect(this.x_, this.y_, this.x_ + 20, this.y_ + 20);
    //grow = grow + 0.01;
    pop();
*/

  }





}
