if (window.XMLHttpRequest)
{// code for IE7+, Firefox, Chrome, Opera, Safari
	xmlhttp=new XMLHttpRequest();
}
else
{// code for IE6, IE5
	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.open("GET","./xmlfiles/newsList.xml",false);
xmlhttp.send();
var xmlFileList=xmlhttp.responseXML;
var nodes2=xmlFileList.getElementsByTagName('news');
function initNews(){	
	var parent=document.getElementById('NList');
	//alert(document.getElementById('ChangeMyInfor'));
	for (var j = 0; j < nodes2.length; j++) {
		var resource = nodes2[j];
		var uploadtime = resource.getElementsByTagName('time')[0].firstChild.nodeValue;
		var title = resource.getElementsByTagName('title')[0].firstChild.nodeValue;
		var content = resource.getElementsByTagName('text')[0].firstChild.nodeValue;
		//var li = document.createElement("li");
		//var table = document.createElement("table");
		var tr = document.createElement("tr");
		
		var td1 = document.createElement("td");
		var td2 = document.createElement("td");
		var td3 = document.createElement("td");
		
		td1.setAttribute("style", "width:15px");
		var img = document.createElement("img");
		img.setAttribute("width", "width:15px");
		img.setAttribute("src", "images/newstag.png");
		td1.appendChild(img);
		
		var a_tag=document.createElement("a");
		a_tag.innerHTML=title;
		a_tag.setAttribute("onclick","newsPage(this);return false;");
		a_tag.setAttribute("href","#");
		a_tag.setAttribute("id",j+"");
		td2.appendChild(a_tag);	
		
		td3.innerHTML="["+uploadtime+"]";
		
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		
		parent.appendChild(tr);
	}
}
window.onload =function(){
	initNews();
}
function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
 
    if(arr=document.cookie.match(reg))
 
        return (arr[2]);
    else
        return null;
}

//删除cookies
function delCookie(name)
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null)
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}

function newsPage(obj){
	var id=obj.id;
	var index=parseInt(id);
	var resource = nodes2[index];
	//alert(resource.childNodes.length);
	var uploadtime = resource.getElementsByTagName('time')[0].firstChild.nodeValue;
	var title = resource.getElementsByTagName('title')[0].firstChild.nodeValue;
	var content = resource.getElementsByTagName('text')[0].firstChild.nodeValue;
	var image = resource.getElementsByTagName('image')[0].firstChild.nodeValue;
	delCookie("uploadtime");
	delCookie("title");
	delCookie("content");
	delCookie("image");
	$.cookie('uploadtime',uploadtime,{expires:7,path:'/'});
	$.cookie('title',title,{expires:7,path:'/'});
	$.cookie('content',content,{expires:7,path:'/'});
	$.cookie('image',image,{expires:7,path:'/'});
	window.location.href="./sinclabnews.html";
}