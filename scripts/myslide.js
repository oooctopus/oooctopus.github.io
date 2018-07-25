
function focusBox(o){
	if(!o) return;
	var w=630, $o=$('#'+o),i=0,l=0;arr= [],t= null,
		$infoLi = $o.find('.banner_pic li'), len= $infoLi.length,
		$ul=$o.find('.banner_pic>ul');
	$ul.append($ul.html()).css({'width':len*w, 'left': 0});
	$infoLi.eq(0).addClass('current');
	//add banner_pages element
	
	$o.children('a.btn_prev').click(function(){
		i = $infoLi.index($o.find('.banner_pic li.current'));
		(i==0)? i=(len-1):i--;
		l = parseInt($ul.css('left')) + w;
		addCurrent(i,l);
		return false;
	})
	$o.children('a.btn_next').click(function(){
		i = $infoLi.index($o.find('.banner_pic li.current'));
		(i==len-1)? i=(0):i++;
		l = parseInt($ul.css('left')) - w;
		addCurrent(i,l);
		return false;
	})
	//auto focus
	t = setInterval(init,8000);
	$o.hover(function(){
		clearInterval(t);
	}, function(){
		t = setInterval(init,8000);
	});
	function init(){
		$o.children('a.btn_next').trigger('click');
	}
	//add focus
	function addCurrent(i,l){
		if($ul.is(':animated')) return;
		$ul.animate({'left':l},500,function(){
			$infoLi.not($infoLi.eq(i).addClass('current')).removeClass('current');
			if(l== -len*w){
				$ul.css({'left': 0});
			}else if(l== w){
				$ul.css({'left': (1-len)*w});
			}
		});
	}
}

$(function(){
	focusBox('kakaFocus');
})