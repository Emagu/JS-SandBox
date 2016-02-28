function Menu(){
	//載體
	this.a = document.createElement('div');
	this.a.style.left = "0.5%";
	this.a.style.top = "0.5%";
	this.a.style.height = "80%";
	this.a.style.width = "2%";
	this.a.style.position = 'absolute';
	this.a.style.overflow = 'auto';
	this.a.id = "menubody";
	this.a.style.backgroundColor = "#DCDCDC";
	
	//開啟按鈕
	this.b = document.createElement('div');
	this.b.style.left = "0.5%";
	this.b.style.top = "81.5%";
	this.b.style.height = "17%";
	this.b.style.width = "2%";
	this.b.style.position = 'absolute';
	this.b.id = "menubodyButton";
	this.b.innerHTML = "點<br>我<br>展<br>開<br>!";
	this.b.style.cursor = "pointer";
	this.b.style.backgroundColor = "#DDDCDC";
	
	//方法
	this.OpenList = function(container){//作業區
		this.b.innerHTML = "點<br>我<br>隱<br>藏<br>!";
		this.a.style.width = "20%";
		this.b.style.width = "20%";
		container.style.left = this.a.style.width;
		container.style.width = (100 - parseInt(this.a.style.width.replace('%',''))) + "%";
	}
	this.CloseList = function(container){
		this.b.innerHTML = "點<br>我<br>展<br>開<br>!";
		while (this.a.firstChild) {
			this.a.removeChild(this.a.firstChild);
		}
		this.a.style.width = "2%";
		this.b.style.width = "2%";
		container.style.left = this.a.style.width;
		container.style.width = (100 - parseInt(this.a.style.width.replace('%',''))) + "%";
	}
}
function MenuType(Name,i){
	var Div = document.createElement('div');
		Div.style.width = "95%";
		Div.style.left = "1%";
		Div.style.top = (6*i+1)+"%";
		Div.style.height = "5%";
		Div.style.position = 'absolute';
		Div.id = "menudiv_"+i;
		Div.innerHTML=Name;
		Div.style.backgroundColor = "#FFFCDC";
		Div.style.cursor = "pointer";
		return Div;
}
function MenuTypeScroll(i){
	var DivScroll = document.createElement('div');
		DivScroll.style.width = "95%";
		DivScroll.style.left = "1%";
		DivScroll.style.top = (6*i+6)+"%";
		DivScroll.style.height = "0px";
		DivScroll.style.position = 'absolute';
		DivScroll.id = "menudivScroll_"+i;
		DivScroll.style.backgroundColor = "#FFFCDC";
		return DivScroll;
}
function MenuItem(i,ItemCount,icon){
	var Item = document.createElement('div');
	Item.style.width = "98%";
	Item.style.left = "1%";
	Item.style.height = ((100/ItemCount)-4)+"%";
	Item.style.top = (((100/ItemCount)-2)*i+1)+"%";
	Item.style.position = 'absolute';
	Item.style.backgroundImage = "url('model/icon/"+icon+".png')";
	Item.style.backgroundRepeat = "no-repeat";
	Item.style.backgroundSize = "100% 100%";
	Item.id = "menuItem_"+i;
	return Item;
}