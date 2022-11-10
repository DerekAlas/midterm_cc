class Shape4 {

  constructor(x, y, s) {
    this.x_ = x;
    this.y_ = y;
    this.speed = s;
  }



  display(){

    if(frameCount >= 2100){
      opacity = opacity + 0.5;
    }

    fill(100, opacity);
    translate(400, 200);

//spikey shape
    if(frameCount < 2500 && frameCount > 2100){
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

//spikey shape growing
    if(frameCount >= 2500){
      push();
        //translate(400, 200);
        scale(grow_);
        //fill(100, 100, 100);
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
        grow_ = grow_ * 1.003;
      pop();
    }

  }

    move(){
      if(frameCount < 2500 && frameCount > 2300){
        this.x_ = this.x_ + random(-0.5, 0.5);
        this.y_ = this.y_ + random(-0.5, 0.5);
      }

      if(frameCount >= 2500){
        this.x_ = 0;
        this.y_ = 0;
      }
    }


  }
