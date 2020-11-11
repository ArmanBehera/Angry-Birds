class Pig{
    constructor(x, y, angle){
        var options = {
            restitution : 0.5,
            friction : 0.3,
            density : 1.0
        }

        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        Matter.Body.setAngle(this.body, angle);
        World.add(world,this.body.angle);

    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);

        rectMode(CENTER);
        fill("red");
        rect(0, 0,this.width,this.height);

        pop();
    }
}