$(function(){
	$('#lanPos').css('top',$('.hover').offset().top-$('#leftDaoHang').offset().top);
	$('#leftDaoHang ul li').hover(function(){
		$('#lanPos').css('top',$(this).offset().top-$('#leftDaoHang').offset().top);
	},function(){
		$('#lanPos').css('top',$('.hover').offset().top-$('#leftDaoHang').offset().top);
	})
		
	$('#leftDaoHang ul li').click(function(){
		for(var i=0;i<$('#leftDaoHang ul li').size();i++){
			if(this==$('#leftDaoHang ul li').get(i)){
				$('#leftDaoHang ul li').eq(i).children('a').addClass('hover');
			}else{
				$('#leftDaoHang ul li').eq(i).children('a').removeClass('hover');
			}
		}
		if(this==$('#leftDaoHang ul li').get(0)){
			$('#LihuiArrange').css('display','table');
			$('#LihuiFiles').css('display','none');
			$('#meetingRs').css('display','none');
			//alert($(document.documentElement).height());
			//alert($(window).height());
			positionFooter1();
				//定义positionFooter function
			$(window).scroll(positionFooter1).resize(positionFooter1);
		}
		else if(this==$('#leftDaoHang ul li').get(1)){
			$('#LihuiArrange').css('display','none');
			$('#LihuiFiles').css('display','table');
			$('#meetingRs').css('display','none');						
			positionFooter1();
			//定义positionFooter function
			$(window).scroll(positionFooter1).resize(positionFooter1);						
		}
		else if(this==$('#leftDaoHang ul li').get(2)){
			$('#LihuiArrange').css('display','none');
			$('#LihuiFiles').css('display','none');
			$('#meetingRs').css('display','table');						
			positionFooter1();
			//定义positionFooter function
			$(window).scroll(positionFooter1).resize(positionFooter1);						
		}
	})		
				
})
function positionFooter1() {
	//取到div#footer高度
	var footerHeight = 0,
	footerTop = 0,
	footerTop2=0,
	$footer = $(".col5");
	footerHeight = $footer.height();
	//div#footer离屏幕顶部的距离
	//alert("222222");
	footerTop = ($(window).scrollTop()+$(window).height()-footerHeight)+"px";
	footerTop2=$(document.documentElement).height()+10+"px";
	if ( ($(document.documentElement).height()+footerHeight) < $(window).height()) {						
		$footer.css({position: "absolute"}).stop().css({top: footerTop});
	} 
	else{
		$footer.css({position: "absolute"}).stop().css({top: footerTop2});
	}
}