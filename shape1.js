class Shape1 {

  constructor(x, y, s) {
    this.x_ = x;
    this.y_ = y;
    this.speed = s;
  }


  display(color){

    //fill(color);

    //spikey shape
    beginShape();
    vertex(this.x_, this.y_);
    vertex(this.x_ - 20, this.y_ + 30);
    vertex(this.x_ - 35, this.y_ + 10);
    vertex(this.x_ - 25, this.y_ + 50);
    vertex(this.x_ - 60, this.y_ + 55);
    vertex(this.x_ - 25, this.y_ + 65);
    vertex(this.x_ - 30, this.y_ + 100);
    vertex(this.x_ - 20, this.y_ + 85);
    vertex(this.x_ - 10, this.y_ + 105);
    vertex(this.x_ + 5,  this.y_ + 80);
    vertex(this.x_ + 30, this.y_ + 90);
    vertex(this.x_ + 20, this.y_ + 70);
    vertex(this.x_ + 45, this.y_ + 60);
    vertex(this.x_ + 30, this.y_ + 55);
    vertex(this.x_ + 60, this.y_ + 40);
    vertex(this.x_ + 20, this.y_ + 45);
    endShape(CLOSE);
  }





}
