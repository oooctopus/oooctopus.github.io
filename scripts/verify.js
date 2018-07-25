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
			//alert("44444");
			//alert(xmlFile);
			window.location.href = xmlFile;
            xmlDoc.load(xmlFile);
			//alert("555555");
        }		
        return xmlDoc;
    }
        // 首先对xml对象进行判断
    var  checkXMLDocObj = function (xmlFile) {
        var xmlDoc = loadXML(xmlFile);
        if (xmlDoc == null) {
           // alert('您的浏览器不支持xml文件读取,于是本页面禁止您的操作,推荐使用IE5.0以上可以解决此问题!');
            window.location.href = '../student.html';

        }
        return xmlDoc;
    }
	
	function submitClick(){
		var user = document.getElementById('user');
		var password = document.getElementById('password');
		var isValidate=false;
		if (!user.value.match(/^\S{2,20}$/)) {
			user.className = 'userRed';
			user.focus();
			return;
		}else {
			user.className = 'text';
			isValidate=true;
		}
		if (password.value.length<3 || password.value.length>20) {
			password.className = 'userRed';
			password.focus();
			var con = document.getElementById('con');
			con.innerHTML = '<font color="red">帐号或密码错误！</font>';
			return;
		} else {
			password.className = 'text';
			isValidate=true;
		}
		var isRight=0;

		//alert("222222");
		
		if (isValidate) {
		
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
			xmlDoc=xmlhttp.responseXML; 
			
			//alert("333333");
			$(document).ready(function (){
				var nodes=xmlDoc.getElementsByTagName('user');
				//alert(nodes.length);
				for (var j = 0; j < nodes.length; j++) {
					var resource = nodes[j];
					var pid = resource.getElementsByTagName('pid')[0].firstChild.nodeValue;
					var pwd = resource.getElementsByTagName('pwd')[0].firstChild.nodeValue;
					if(user.value==pid&&password.value==pwd){
						isRight=1;
						break;
					}
					  
				}
			});
		
			var con = document.getElementById('con');
			if (isRight) {
				$.cookie('username',user.value, {expires:7,path:'/'});
				$.cookie('password',password.value, {expires:7,path:'/'});
				con.innerHTML = '<font color="green">登录成功，跳转中...</font>';
				window.location.href = './meeting.html';
			} else {
				con.innerHTML = '<font color="red">帐号或密码错误！</font>';
			}
		}			
	}
	function reClick(){
		user.value="";
		password.value="";	
	}