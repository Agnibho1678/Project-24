class box{

    constructor( x, y, width, height ){

        var options = {

            isStatic : true,

        }

        this.body = Bodies.rectangle(x, y, 20, 100, options);
        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        
        push();
        translate(pos.x, pos.y);
        rotate(angle);

        strokeWeight(3);
        fill("white");
        rect(0, 0, 20, 100);
        pop();
    }
}