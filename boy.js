class Boy{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = 100;
        this.height = 200;
     //   this.image = loadImage("sprites/boy.png");
        this.image = loadImage("./boy.png");

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
        image(this.image, 250, 580, this.width, this.height);
    }
}