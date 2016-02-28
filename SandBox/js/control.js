function Control(){
	//載體
	this.a = document.createElement( 'div' );
	this.a.style.position = 'absolute';
	this.a.style.top = "0px";
	this.a.style.width = "250px";
	this.a.style.height = "320px";
	this.a.style.backgroundColor = "#DDDCDC";
	this.a.style.textAlign = 'center';
	this.a.id = "Control";
	this.a.style.display = "none";
	//功能按鈕
		//標題
		var worktitle = document.createElement("P");
		worktitle.appendChild(document.createTextNode("------物件控制台------"));
		//載體
		var work = document.createElement( 'div' );
		work.style.width = "100%";
		work.style.height = "20px";
		//刪除
		this.b = document.createElement("button");
		this.b.style.width = '40%';
		this.b.appendChild(document.createTextNode("刪除物件"));
		//關閉
		this.c = document.createElement("button");
		this.c.style.width = '40%';
		this.c.appendChild(document.createTextNode("取消選取"));
		//串接
		work.appendChild(this.b);
		work.appendChild(this.c);
	//物件修改
		//標題
		var edittitle = document.createElement("P");
		edittitle.appendChild(document.createTextNode("----物件修改----"));
		//載體
		var edit = document.createElement( 'div' );
		edit.style.width = "100%";
		edit.style.height = "90px";
		//座標修改
			//標籤載體
			var Pos = document.createElement( 'div' );
			Pos.style.width = "100%";
			Pos.style.height = "40px";
			Pos.style.top = "2.5px";
			//左半部
			var PosL = document.createElement( 'div' );
			PosL.style.width = "50%";
			PosL.style.height = "100%";
			PosL.style.position = 'absolute';
			//右半部
			var PosR = document.createElement( 'div' );
			PosR.style.width = "50%";
			PosR.style.height = "100%";
			PosR.style.left = "50%";
			PosR.style.position = 'absolute';
			//X軸標籤
			var XLabel = document.createElement("P");
			XLabel.appendChild(document.createTextNode("X軸:"));
			this.PosX = document.createElement("INPUT");
			this.PosX.setAttribute("type", "number");
			this.PosX.setAttribute("max", "475");
			this.PosX.setAttribute("min", "-475");
			this.PosX.setAttribute("step", "10");
			this.PosX.style.width = "50px";
			XLabel.appendChild(this.PosX);
			//Y軸標籤
			var YLabel = document.createElement("P");
			YLabel.appendChild(document.createTextNode("Y軸:"));
			this.PosY = document.createElement("INPUT");
			this.PosY.setAttribute("type", "number");
			this.PosY.setAttribute("max", "475");
			this.PosY.setAttribute("min", "25");
			this.PosY.setAttribute("step", "10");
			this.PosY.style.width = "50px";
			YLabel.appendChild(this.PosY);
			//Z軸標籤
			var ZLabel = document.createElement("P");
			ZLabel.appendChild(document.createTextNode("Z軸:"));
			this.PosZ = document.createElement("INPUT");
			this.PosZ.setAttribute("type", "number");
			this.PosZ.setAttribute("max", "475");
			this.PosZ.setAttribute("min", "-475");
			this.PosZ.setAttribute("step", "10");
			this.PosZ.style.width = "50px";
			ZLabel.appendChild(this.PosZ);
			//R軸標籤
			var RLabel = document.createElement("P");
			RLabel.appendChild(document.createTextNode("旋轉:"));
			this.PosR = document.createElement("INPUT");
			this.PosR.setAttribute("type", "number");
			this.PosR.setAttribute("max", "360");
			this.PosR.setAttribute("min", "0");
			this.PosR.setAttribute("step", "1");
			this.PosR.style.width = "50px";
			RLabel.appendChild(this.PosR);
			//牆體調整
			//長
			var XCLabel = document.createElement("P");
			XCLabel.appendChild(document.createTextNode("長:"));
			this.PosXC = document.createElement("INPUT");
			this.PosXC.setAttribute("type", "number");
			this.PosXC.setAttribute("max", "500");
			this.PosXC.setAttribute("min", "20");
			this.PosXC.setAttribute("step", "10");
			this.PosXC.style.width = "50px";
			XCLabel.appendChild(this.PosXC);
			//高
			var YCLabel = document.createElement("P");
			YCLabel.appendChild(document.createTextNode("高:"));
			this.PosYC = document.createElement("INPUT");
			this.PosYC.setAttribute("type", "number");
			this.PosYC.setAttribute("max", "100");
			this.PosYC.setAttribute("min", "20");
			this.PosYC.setAttribute("step", "5");
			this.PosYC.style.width = "50px";
			YCLabel.appendChild(this.PosYC);
			//寬
			var ZCLabel = document.createElement("P");
			ZCLabel.appendChild(document.createTextNode("寬:"));
			this.PosZC = document.createElement("INPUT");
			this.PosZC.setAttribute("type", "number");
			this.PosZC.setAttribute("max", "500");
			this.PosZC.setAttribute("min", "10");
			this.PosZC.setAttribute("step", "10");
			this.PosZC.style.width = "50px";
			ZCLabel.appendChild(this.PosZC);
			//串接
			PosL.appendChild(XLabel);
			PosL.appendChild(YLabel);
			PosR.appendChild(ZLabel);
			PosR.appendChild(RLabel);
			Pos.appendChild(PosL);
			Pos.appendChild(PosR);
		edit.appendChild(Pos);
	//串接
		this.a.appendChild(worktitle);
		this.a.appendChild(work);
		this.a.appendChild(edittitle);
		this.a.appendChild(edit);
		this.SelectWall = function(){
			PosL.appendChild(XCLabel);
			PosL.appendChild(YCLabel);
			PosR.appendChild(ZCLabel);
		};
}