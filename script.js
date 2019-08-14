var colorIndex = 0;
function changeBackgroundColor(){
	if(colorIndex == 0){
		colorIndex = 1;
	    document.bgColor = "#000000";
	    document.getElementById("time").style.color = "#ffffff";
	    document.getElementById("date").style.color = "#ffffff";
	}
	else if(colorIndex == 1){
		colorIndex = 0;
	    document.bgColor = "#ffffff";
	    document.getElementById("time").style.color = "#000000";
	    document.getElementById("date").style.color = "#000000";
	}
	else{
		colorIndex = 0;
	} 
}

function fontS(){
    //  获取 html 元素.获取 html 的宽
    var hW = document.documentElement.offsetWidth;
    // 给的 html 设置字体大小	
    document.getElementById("time").style.fontSize = hW / 3.6 + "px";
    document.getElementById("date").style.fontSize = hW / 20 + "px";
}
fontS();
window.onresize = function(){fontS();time();} // 当窗口大小改变时执行函数 

function time(){
	var vWeek,vWeek_s,vDay;
	vWeek = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
	var date = new Date();
	year = date.getFullYear();
	month = date.getMonth() + 1;
	day = date.getDate();
	vWeek_s = date.getDay();
	document.getElementById("time").innerHTML = date.toTimeString().substring(0,8);
	document.getElementById("date").innerHTML = year + "年" + month + "月" + day + "日" + vWeek[vWeek_s];
};
time();
setInterval("time()",1000);
