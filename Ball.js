class Ball{
    constructor(x, y, diameter ) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, diameter, options);
       this.diameter = diameter;
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle)
        ellipseMode(RADIUS)
        ellipse(0, 0, this.diameter, this.diameter);
        pop();
      }
}