class Square4{
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':0.2,
            'density':8.0
            
    
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 30;
        this.height = 30;

        World.add(world, this.body);

    }
     display(){
        var pos=this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke('purple');
        strokeWeight(5);
        fill("orange");
        rect(0, 0, this.width, this.height);
        pop();
    }
    };