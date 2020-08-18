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
        rectMode(CENTER);
        var pos = this.body.position;

        fill("black");
        strokeWeight(4);
        stroke("black");
        rect(pos.x,pos.y,this.width,this.height);
       

        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
}