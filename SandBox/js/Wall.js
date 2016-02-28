function Wall(geometry,material,name,type,x,y,z,tex){
    this.mesh = new THREE.Mesh( geometry, material );/*global THREE*/
    this.mesh.overdraw = true;
    this.mesh.Model = new Object();
    this.mesh.Model.Name = name;//模型編號
    this.mesh.Model.Type = type;//模型類型(於網頁中陣列編號)
    this.mesh.Model.X = x;//模型寬度
    this.mesh.Model.Y = y;//模型高度
    this.mesh.Model.Z = z;//模型長度
    this.mesh.Model.Tex = tex;//模型材質
 
    this.addToScene = function(Pos){
        if(Pos.y<(this.mesh.Model.Y/2)) Pos.y = (this.mesh.Model.Y/2);
        this.mesh.position.copy(Pos);
        this.mesh.material.opacity = 1;
    };
}