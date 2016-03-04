function Control(){
	//載體
	this.a = document.createElement( 'div' );
	this.a.style.position = 'absolute';
	this.a.style.top = "0px";
	this.a.style.width = "80%";
	this.a.style.height = "100px";
	this.a.style.backgroundColor = "#DDDCDC";
	this.a.style.textAlign = 'center';
	this.a.id = "Control";
	this.a.style.display = "none";
	//功能按鈕
		//載體
		var work = document.createElement( 'div' );
		work.appendChild(document.createTextNode("----物件控制台----"));
		work.style.width = "23%";
		work.style.height = "60px";
		work.style.left = "1%";
		work.style.position = 'absolute';
		//刪除
		this.b = document.createElement("button");
		this.b.appendChild(document.createTextNode("刪除物件"));
		//關閉
		this.c = document.createElement("button");
		this.c.appendChild(document.createTextNode("取消選取"));
		//鏡像
		this.d = document.createElement("button");
		this.d.appendChild(document.createTextNode("鏡像模型"));
		//串接
		work.appendChild(this.b);
		work.appendChild(this.c);
		work.appendChild(this.d);
	//物件修改
		//載體
		var edit = document.createElement( 'div' );
		edit.appendChild(document.createTextNode("----物件座標----"));
		edit.style.width = "23%";
		edit.style.height = "60px";
		edit.style.left = "24%";
		edit.style.position = 'absolute';
		//座標修改
			//X軸標籤
			var XLabel = document.createElement("P");
			XLabel.appendChild(document.createTextNode("X軸:"));
			this.PosX = document.createElement("INPUT");
			this.PosX.setAttribute("type", "number");
			this.PosX.setAttribute("max", "475");
			this.PosX.setAttribute("min", "-475");
			this.PosX.setAttribute("step", "10");
			XLabel.style.height = "23%";
			XLabel.appendChild(this.PosX);
			//Y軸標籤
			var YLabel = document.createElement("P");
			YLabel.appendChild(document.createTextNode("Y軸:"));
			this.PosY = document.createElement("INPUT");
			this.PosY.setAttribute("type", "number");
			this.PosY.setAttribute("max", "475");
			this.PosY.setAttribute("min", "25");
			this.PosY.setAttribute("step", "10");
			YLabel.style.height = "23%";
			YLabel.appendChild(this.PosY);
			//Z軸標籤
			var ZLabel = document.createElement("P");
			ZLabel.appendChild(document.createTextNode("Z軸:"));
			this.PosZ = document.createElement("INPUT");
			this.PosZ.setAttribute("type", "number");
			this.PosZ.setAttribute("max", "475");
			this.PosZ.setAttribute("min", "-475");
			this.PosZ.setAttribute("step", "10");
			ZLabel.style.height = "23%";
			ZLabel.appendChild(this.PosZ);
			//R軸標籤
			var RLabel = document.createElement("P");
			RLabel.appendChild(document.createTextNode("旋轉:"));
			this.PosR = document.createElement("INPUT");
			this.PosR.setAttribute("type", "number");
			this.PosR.setAttribute("max", "360");
			this.PosR.setAttribute("min", "0");
			this.PosR.setAttribute("step", "1");
			RLabel.style.height = "23%";
			RLabel.appendChild(this.PosR);
			//串接
			edit.appendChild(XLabel);
			edit.appendChild(YLabel);
			edit.appendChild(ZLabel);
			edit.appendChild(RLabel);
		//載體
		var Skin = document.createElement( 'div' );
		Skin.appendChild(document.createTextNode("----物件塗裝----"));
		Skin.style.width = "23%";
		Skin.style.height = "60px";
		Skin.style.left = "49%";
		Skin.style.position = 'absolute';
			//純色
			var SingleColor = document.createElement("P");
			SingleColor.appendChild(document.createTextNode("純色:"));
			this.ColorCombo = document.createElement("select");
			SingleColor.appendChild(this.ColorCombo);
			//貼圖
			var TexColor = document.createElement("P");
			TexColor.appendChild(document.createTextNode("貼圖:"));
			this.TexCombo = document.createElement("select");
			TexColor.appendChild(this.TexCombo);
			//連接
		Skin.appendChild(SingleColor);
		Skin.appendChild(TexColor);
		//載體
		var editC = document.createElement( 'div' );
		editC.appendChild(document.createTextNode("----物件修改----"));
		editC.style.width = "23%";
		editC.style.height = "60px";
		editC.style.left = "74%";
		editC.style.position = 'absolute';
		//座標修改
			//牆體調整
			//長
			var XCLabel = document.createElement("P");
			XCLabel.appendChild(document.createTextNode("長:"));
			this.PosXC = document.createElement("INPUT");
			this.PosXC.setAttribute("type", "number");
			this.PosXC.setAttribute("max", "500");
			this.PosXC.setAttribute("min", "20");
			this.PosXC.setAttribute("step", "10");
			XCLabel.appendChild(this.PosXC);
			//高
			var YCLabel = document.createElement("P");
			YCLabel.appendChild(document.createTextNode("高:"));
			this.PosYC = document.createElement("INPUT");
			this.PosYC.setAttribute("type", "number");
			this.PosYC.setAttribute("max", "100");
			this.PosYC.setAttribute("min", "20");
			this.PosYC.setAttribute("step", "5");
			YCLabel.appendChild(this.PosYC);
			//寬
			var ZCLabel = document.createElement("P");
			ZCLabel.appendChild(document.createTextNode("寬:"));
			this.PosZC = document.createElement("INPUT");
			this.PosZC.setAttribute("type", "number");
			this.PosZC.setAttribute("max", "500");
			this.PosZC.setAttribute("min", "10");
			this.PosZC.setAttribute("step", "10");
			ZCLabel.appendChild(this.PosZC);
			//串接
		editC.appendChild(XCLabel);
		editC.appendChild(YCLabel);
		editC.appendChild(ZCLabel);
	//串接
		this.a.appendChild(work);
		this.a.appendChild(edit);
		this.a.appendChild(Skin);
		this.a.appendChild(editC);
		this.Select = function(Model,TexArray){
			if(Model.Type == 0){
				editC.style.display = "";
				this.PosXC.value = Model.X;
				this.PosYC.value = Model.Y;
				this.PosZC.value = Model.Z;
			}else{
				editC.style.display = "none";
			}
			while (this.TexCombo.firstChild) {
			    this.TexCombo.removeChild(this.TexCombo.firstChild);
			}
			while (this.ColorCombo.firstChild) {
			    this.ColorCombo.removeChild(this.ColorCombo.firstChild);
			}
			for(var i=0;i<TexArray.length;i++){
				if(TexArray[i][4]==1){
					var ComboSelect = document.createElement("option");
					ComboSelect.setAttribute("value",TexArray[i][2]);
					ComboSelect.appendChild(document.createTextNode(TexArray[i][3]));
					this.TexCombo.appendChild(ComboSelect);
					if(i==0) this.ColorCombo.setAttribute("disabled","true");
				}else {
					var ComboSelect = document.createElement("option");
					ComboSelect.setAttribute("value",TexArray[i][2]);
					ComboSelect.appendChild(document.createTextNode(TexArray[i][3]));
					this.ColorCombo.appendChild(ComboSelect);
					if(i==0) this.ColorCombo.setAttribute("disabled","true");
				}
			}
		};
		this.NotSelect = function(){
			editC.style.display = "none";
		};
}