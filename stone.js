class Stone{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = 55;
        this.height = 55;
     //   this.image = loadImage("sprites/stone.png");
        this.image = loadImage("./stone.png");

        World.add(world,this.body);
        World.add(world,this.image);
       
    }
    display(){
        push();
        rectMode(CENTER);
        var pos = this.body.position;
        translate(pos.x,pos.y);

        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}