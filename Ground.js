class Ground{
    constructor(x,y){
      
        var ground_options = {
            isStatic : true
        }
        
        this.body = Bodies.rectangle(x,y,400,20,ground_options)
        this.width = 400
        this.height = 20
        World.add(world,this.body);
        
    }

    display(){
        rectMode(CENTER);
        fill("brown");  
        rect(this.body.position.x, this.body.position.y, this.width, this.height)
    
    }

    

}