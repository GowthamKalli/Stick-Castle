class Baseclass{

    constructor(x,y,width,height,sides,radius){
        var options = {
         restituition:0.5,
         friction:0.8,
        // isStatic:false
        }

    this.body = Bodies.polygon(x,y,width,height,sides,radius,options);
    this.width = width;
    this.height = height;
    this.sides = [];
    this.radius = radius;
    
    World.add(world,this.body);
    }

    display(){
    }
 
}