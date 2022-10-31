class Shape2 {

  constructor(x, y, s) {
    this.x_ = x;
    this.y_ = y;
    this.speed = s;
  }


  display(){
    triangle(this.x_ - 20, this.y_ + 50, this.x_, this.y_, this.x_ + 20, this.y_ + 50);

  }


  move(){
    this.x_ = this.x_ + random(-100, 100);
    this.y_ = this.y_ + random(-100, 100);

    if (this.x_ >= width){
      this.x_ = random(1, 800);
    }

    if (this.x_ <= 0){
      this.x_ = random(1, 800);
    }

    if (this.y_ >= height){
      this.y_ = random(1, 800);
    }

    if (this.y_ <= 0){
      this.y_ = random(1, 800);
    }


  }


}
