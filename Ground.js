class Ground {
    constructor(x,y,width,height){
        var groundOp = {
            isStatic: true
        }
        
        this.body = Bodies.rectangle(x,y,width,height,groundOp);

        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        rectMode(CENTER);

        strokeWeight(5);
        stroke("orange");
        fill("red");

        rect(pos.x,pos.y,this.width,this.height);
    }
}