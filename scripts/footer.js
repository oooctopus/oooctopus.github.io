
function lctft(){
  
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
window.onload =function(){
	lctft();
}