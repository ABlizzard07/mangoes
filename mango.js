class Mango{
    constructor(x,y,diameter){
         var options = {
             isStatic: true,
             restitution: 0,
             friction: 1,
         }
         
         this.body = Bodies.circle(x,y,diameter,options);
         this.width = 40;
         this.height = 40;
         this.diameter = 150;
         
      //   this.image = loadImage("sprites/mango.png");
         this.image = loadImage("./mango.png");
         World.add(world,this.body);
         
     }
 
     display(){
        push();
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, (this.diameter -20)/3, this.height);
        console.log(this.body.position.x);
        pop();
     }
 }
 