class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.catapult1=loadImage("sling1.png");
        this.catapult2=loadImage("sling2.png");
        this.rubberBand=loadImage("sling3.png");
        
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.catapult1,200,20);
        image(this.catapult2,170,20);
       
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
           
            stroke(48,22,8);
            if(pointA.x<220){
                strokeWeight(8);
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y-50);
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-50);
                image(this.rubberBand,pointA.x-30,pointA.y-10,20,20);
                
            }
            else{
                strokeWeight(4);
                line(pointA.x+20, pointA.y, pointB.x-10, pointB.y-50);
                line(pointA.x+20, pointA.y, pointB.x+30, pointB.y-50);
                image(this.rubberBand,pointA.x+23,pointA.y-10,20,20);
               
            }
        }
    }
    
}
