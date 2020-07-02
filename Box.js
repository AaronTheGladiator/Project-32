class Box{
  constructor(x, y, width, height) {
      var options = {
          'friction':0.5,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visiblity = 225;
      World.add(world, this.body);
    }

    display(){
      if(this.body.speed<5) {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill(0,0,255);
        rect(0, 0, this.width, this.height);
        pop();
      } else {
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity-5;
        pop();
      }
    }

    score() {
      if(this.Visiblity<0 && this.Visiblity>-1005) {
        score++
      }
    }
  }
