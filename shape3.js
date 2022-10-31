class Shape3 {

  constructor(x, y, s) {
    this.x_ = x;
    this.y_ = y;
    this.speed = s;
  }


  display(color){
    fill(25, 25, 36);
    rectMode(CENTER);

    push();
    translate(400, 400);
    scale(grow);
    rect(this.x_, this.y_, 200, 200);
    grow = grow * 1.1;
    pop();


  }





}
