loadXML = function(xmlFile){
        var xmlDoc=null;
        //判断浏览器的类型
        //支持IE浏览器
        if(!window.DOMParser && window.ActiveXObject){
            var xmlDomVersions = ['MSXML.2.DOMDocument.6.0','MSXML.2.DOMDocument.3.0','Microsoft.XMLDOM'];
            for(var i=0;i<xmlDomVersions.length;i++){
                try{
                    xmlDoc = new ActiveXObject(xmlDomVersions[i]);
                    break;
                }catch(e){
                }
            }
        }
        //支持Mozilla浏览器
        else if(document.implementation && document.implementation.createDocument){
            try{
                xmlDoc = document.implementation.createDocument('','',null);
            }catch(e){
            }
        }
        else{
            return null;
        }

        if(xmlDoc!=null){
            xmlDoc.async = false;
            xmlDoc.load(xmlFile);
        }
        return xmlDoc;
    }
        // 首先对xml对象进行判断
    var  checkXMLDocObj = function (xmlFile) {
        var xmlDoc = loadXML(xmlFile);
        if (xmlDoc == null) {
            //alert('您的浏览器不支持xml文件读取,于是本页面禁止您的操作,推荐使用IE5.0以上可以解决此问题!');
            window.location.href = '../student.html';

        }
        return xmlDoc;
    }
var cookie_username = $.cookie('username');
var cookie_password = $.cookie('password');
if((!cookie_username)||(!cookie_password)){
	alert("点击确定返回登录...");
	window.location.href = './student.html';
}
var isRight=0;
//var xmlDoc = checkXMLDocObj('data.xml');//读取到xml文件中的数据

if (window.XMLHttpRequest)
{// code for IE7+, Firefox, Chrome, Opera, Safari
	xmlhttp=new XMLHttpRequest();
}
else
{// code for IE6, IE5
	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttp.open("GET","./xmlfiles/data.xml",false);
xmlhttp.send();
var xmlDoc=xmlhttp.responseXML; 
//alert("2222");
var classify="";
var nodes=xmlDoc.getElementsByTagName('user');
for (var j = 0; j < nodes.length; j++) {
	var resource = nodes[j];
	var pid = resource.getElementsByTagName('pid')[0].firstChild.nodeValue;
	var pwd = resource.getElementsByTagName('pwd')[0].firstChild.nodeValue;
	//alert(pid);
	//alert(pwd);
	if(cookie_username==pid&&cookie_password==pwd){
		isRight=1;
		classify=resource.getElementsByTagName('classify')[0].firstChild.nodeValue;
		break;
	}				  
}
if (isRight==0) {
	alert("点击确定返回登录...");
	window.location.href = './student.html';
}

function initFiles(){
	xmlhttp.open("GET","./xmlfiles/fileList.xml",false);
	xmlhttp.send();
	var xmlFileList=xmlhttp.responseXML;
	var nodes2=xmlFileList.getElementsByTagName('file');
	//alert("3333");
	//alert(nodes2.length);
	var parent=document.getElementById('LihuiFiles');
	//alert(document.getElementById('ChangeMyInfor'));
	for (var j = 0; j < nodes2.length; j++) {
		var resource = nodes2[j];
		//alert("5");
		var uploadtime = resource.getElementsByTagName('uploadtime')[0].firstChild.nodeValue;
		var filename = resource.getElementsByTagName('filename')[0].firstChild.nodeValue;
		var filepath = resource.getElementsByTagName('filepath')[0].firstChild.nodeValue;
		var pname = resource.getElementsByTagName('pname')[0].firstChild.nodeValue;
		var tr = document.createElement("tr");
		var td1 = document.createElement("td");
		var td2 = document.createElement("td");
		var td3 = document.createElement("td");
		var text1=document.createElement("a");
		var text11=document.createTextNode(filename);			
		text1.setAttribute("href", filepath);
		text1.innerHTML =filename;
		var text2=document.createTextNode(pname);	
		var text3=document.createTextNode(uploadtime);
		td1.appendChild(text1);
		td1.setAttribute("class", "row");
		td2.appendChild(text2);
		td2.setAttribute("class", "row");
		td3.appendChild(text3);
		td3.setAttribute("class", "row");
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		parent.appendChild(tr);
	}
}
function initLihui(){
	xmlhttp.open("GET","./xmlfiles/LiHui.xml",false);
	xmlhttp.send();
	var xmlFileList=xmlhttp.responseXML;
	var nodes2=xmlFileList.getElementsByTagName('lihui');
	//alert(nodes2.length);
	var parent=document.getElementById('LihuiArrange');
	//alert(document.getElementById('ChangeMyInfor'));
	for (var j = 0; j < nodes2.length; j++) {
		var resource = nodes2[j];
		var lihuitime = resource.getElementsByTagName('time')[0].firstChild.nodeValue;
		var network = resource.getElementsByTagName('network')[0].firstChild.nodeValue;
		var wireless = resource.getElementsByTagName('wireless')[0].firstChild.nodeValue;
		var tr = document.createElement("tr");
		var td1 = document.createElement("td");
		var td2 = document.createElement("td");
		var td3 = document.createElement("td");
		//alert(1);
		var text1=document.createTextNode(lihuitime);	
		var text2=document.createTextNode(wireless);	
		var text3=document.createTextNode(network);
		td1.appendChild(text1);
		td1.setAttribute("class", "row");
		td2.appendChild(text2);
		td2.setAttribute("class", "row");
		td3.appendChild(text3);
		td3.setAttribute("class", "row");
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		parent.appendChild(tr);
		//alert(2);
	}
}
	function positionFooter() {
		//取到div#footer高度
		var footerHeight = 0,
		footerTop = 0,
		$footer = $(".col5");
		footerHeight = $footer.height();
		//div#footer离屏幕顶部的距离
		footerTop = ($(window).scrollTop()+$(window).height()-footerHeight)+"px";
		//alert($(document.documentElement).height());
		//alert(footerHeight);
		//alert($(window).height());
		//alert("111");
		 if ( ($(document.documentElement).height()+footerHeight) < $(window).height()) {	
			
			$footer.css({position: "absolute"}).stop().css({top: footerTop});
		}
	}
	
	function initMeetingRs(){
		xmlhttp.open("GET","./xmlfiles/LiHuiRs.xml",false);
		xmlhttp.send();
		var xmlFileList=xmlhttp.responseXML;
		var nodes2=xmlFileList.getElementsByTagName('lihui');
		//alert(nodes2.length);
		var parent=document.getElementById('meetingRs');
		//alert(document.getElementById('ChangeMyInfor'));
		for (var j = 0; j < nodes2.length; j++) {
			var resource = nodes2[j];
			var lihuitime = resource.getElementsByTagName('time')[0].firstChild.nodeValue;
			var network = resource.getElementsByTagName('network')[0].firstChild.nodeValue;
			var wireless = resource.getElementsByTagName('wireless')[0].firstChild.nodeValue;
			var tr = document.createElement("tr");
			var td1 = document.createElement("td");
			var td2 = document.createElement("td");
			var td3 = document.createElement("td");
			//alert(1);
			var text1=document.createTextNode(lihuitime);	
			var text2=document.createTextNode(wireless);	
			var text3=document.createTextNode(network);
			td1.appendChild(text1);
			td1.setAttribute("class", "row");
			td2.appendChild(text2);
			td2.setAttribute("class", "row");
			td3.appendChild(text3);
			td3.setAttribute("class", "row");
			tr.appendChild(td1);
			tr.appendChild(td2);
			tr.appendChild(td3);
			parent.appendChild(tr);
			//alert(2);
		}
	
	}
	
	
function locatefooter(){

	positionFooter();
	//定义positionFooter function

	$(window).scroll(positionFooter).resize(positionFooter);
			
}
$(function() { 
	if(classify!="teacher"){
		var mtRs=document.getElementById('meetingRs');//
		var shMtRs=document.getElementById('showRs');
		mtRs.style.display='none';
		shMtRs.style.display='none';
	}
});

window.onload =function(){
	initFiles();
	initLihui();
	if(classify=="teacher"){
		initMeetingRs();
	}
	locatefooter();
}