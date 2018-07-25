function loadDetailnews(){
	var	uploadtime=$.cookie('uploadtime');
	//alert(uploadtime);
	var	title=$.cookie('title');
	//alert(title);
	var	content=$.cookie('content');
	var	image=$.cookie('image');
	var titleTag=document.getElementById("newstitle");
	titleTag.innerHTML=title;
	var timeTag=document.getElementById("newstime");
	timeTag.innerHTML=uploadtime;
	var contentTag=document.getElementById("newscontent");
	contentTag.innerHTML=content;
	//alert(image);
	if(image!=""&&image!=" "&&image!="  "&&image!="   "){
		var imgTag=document.getElementById("newsimg");
		imgTag.setAttribute("src",image);
		
		 var im = new Image(); //新建一个图片对象
         im.src = image;//将图片的src属性赋值给新建的图片对象的src
		 var i_wdt=0;
		 im.onload = function(){         
			i_wdt= im.width;  
			if(i_wdt>800){
				var wdt=800;
				var hgt=im.height*800/(i_wdt);
				imgTag.setAttribute("width",wdt+"px");
				imgTag.setAttribute("height",hgt+"px");
				//lctft("1");
			}
		};  
		
	}
}
function lctft(obj){
	//alert(obj);
    locFooter();
    //定义positionFooter function
    $(window).scroll(locFooter).resize(locFooter);
}
function locFooter(){
	var footerHeight = 0,
    footerTop = 0,
    $footer = $(".col5");
	footerHeight = $footer.height();
    //div#footer离屏幕顶部的距离
    footerTop = ($(window).scrollTop()+$(window).height()-footerHeight)+"px";
	
	//alert($(document.documentElement).height());
	//alert($(window).height());
	//alert(footerTop);
    if ( ($(document.documentElement).height()) < $(window).height()) {	
		
		$footer.css({position: "absolute"}).stop().css({top: footerTop});
	} 
}
$(function() { 

loadDetailnews();
});
window.onload =function(){
	
	lctft("2");
}
