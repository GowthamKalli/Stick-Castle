class Triangle {

    constructor(x,y,sides,radius,angle1){
      var options = {
       angle:angle1,
       restitution:0.8
      }

      this.body = Bodies.polygon(x,y,sides,radius,options);
      this.sides = [];
      this.radius = radius;

      World.add(world,this.body);
    }
    display(){
      var vertices = this.body.vertices;
      fill(240);
      triangle(vertices[0].x,vertices[0].y,vertices[1].x,vertices[1].y,vertices[2].x,vertices[2].y);

    }


} 