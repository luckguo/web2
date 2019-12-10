/*
* @Author: 16284
* @Date:   2019-12-10 15:23:13
* @Last Modified by:   16284
* @Last Modified time: 2019-12-10 15:56:57
*/
	var bo = document.getElementById("bo");
	var ull = document.getElementById("ull").children;
	var pans = document.getElementById("pans");
	var left = document.getElementById("left");
	var right = document.getElementById("right");
	var ge = 1;
	var time = setInterval(next,3000);
	var tag = false;
	function next(){
		if(tag){
			return;
		}
		tag = true;
		ge++;
		ullmove();
		animate(pans,{left:-1200*ge}, function(){
			if(ge == 6){
				pans.style.left = '-1200px';
				ge = 1;
			}
			tag = false;
		});
	}
	function prev(){
		if(tag){
			return;
		}
		tag = true;
		ge--;
		ullmove();
		animate(pans,{left:-1200*ge},function(){
			if(ge == 0){
				pans.style.left = '-6000px';
				ge = 5;
			}
			tag = false;
		});
	}
	bo.onmouseover = function(){
		animate(left,{opacity:50});
		animate(right,{opacity:50});
		clearInterval(time);
	}
	bo.onmouseout = function(){
		animate(left,{opacity:0});
		animate(right,{opacity:0});
		time = setInterval(next,3000);
	}

	right.onclick = next;
	left.onclick = prev;

	for(var i=0;i<ull.length;i++){
		ull[i].ge = i;
		ull[i].onclick = function(){
			ge = this.ge +1;
			ullmove();
			animate(pans,{left:-1200*ge});
		}
	}
	
	function ullmove(){
		for(var i = 0;i < ull.length;i++){
			ull[i].className = "";
		}
		if(ge > 5){
			ull[0].className = "action";
		}
		else if(ge <= 0){
			ull[4].className = "action";
		}
		else{
			ull[ge-1].className = "action";
		}
	}

	var labaaa = document.getElementById("labaaa");
	document.body.onload = function(){
		var time1 = setInterval(function(){
			var now = parseInt(getStyle(labaaa,"right"));
			labaaa.style.right = now + 1 + "px";
			if(now == 1020){
				labaaa.style.right = -150 + "px";
				now = 0;
			}
		},20);
	}