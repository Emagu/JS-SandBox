function Model(ModelObject,name,type,x,y,z){
    this.mesh = ModelObject;
    this.mesh.Model = new Object();
    this.mesh.Model.Name = name;//模型編號 
    this.mesh.Model.Type = type;//模型類型(於網頁中陣列編號)
    this.mesh.Model.X = x;//模型寬度
    this.mesh.Model.Y = y;//模型高度
    this.mesh.Model.Z = z;//模型長度*/
    this.addToScene = function(Pos){
        if(Pos.y<(this.mesh.Model.Y/2)) Pos.y = (this.mesh.Model.Y/2);
        this.mesh.position.copy(Pos);
        this.mesh.traverse( function( node ) {
			if( node.material ) {
		        node.material.opacity = 1;
		        node.material.transparent = true;
		    }
		} );
    };
}