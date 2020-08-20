class Tree{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = 350;
        this.height = 350;
     //   this.image = loadImage("sprites/tree.png");
        this.image = loadImage("./tree.png");

        World.add(world,this.body);
        World.add(world,this.image);
       
    }
    display(){
        rectMode(CENTER);
        var pos = this.body.position;

        fill("black");
        strokeWeight(4);
        stroke("black");
        rect(pos.x,pos.y,this.width,this.height);
       

        imageMode(CENTER);
        image(this.image, 900, 500, this.width, this.height);
    }
}