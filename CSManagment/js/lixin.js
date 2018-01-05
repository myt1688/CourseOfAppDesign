var urlroot="http://www.huiwaizhi.com/json/lixin/";
function myxhr(fun,url,postdata){
	if (arguments.length==2) {
		console.log(url);
	}
	if (arguments.length==3) {
		console.log(url);
		console.log(postdata);
	}
	var s = '';
	if (window.plus) {
		var xhr = new plus.net.XMLHttpRequest();
		//console.log("plus XMLHttpRequest");
		//mui.toast("plus XMLHttpRequest")
	} else {
		var xhr = new XMLHttpRequest();
		//console.log("web XMLHttpRequest");
		//mui.toast("web XMLHttpRequest")
	};
	xhr.onreadystatechange = function () {
	    switch ( xhr.readyState ) {
	        case 0:
	            console.log( "xhr请求已初始化" );
	        break;
	        case 1:
	            console.log( "xhr请求已打开" );
	        break;
	        case 2:
	            console.log( "xhr请求已发送" );
	        break;
	        case 3:
	            console.log( "xhr请求已响应");
	            break;
	        case 4:
	            if ( xhr.status == 200 ) {
	                fun(xhr.responseText);
	            } else {
	                console.log( "xhr请求失败："+xhr.readyState );
	            }
	            break;
	        default :
	            break;
	    }
	}
	if (arguments.length==2) {
		xhr.open("GET", url);
		xhr.send();
	}
	if (arguments.length==3) {
		xhr.open("POST", url);
		xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		xhr.send(postdata);
	}
}
function LogByJsonStr(JsonStr){
	console.log(JsonStr)
}

Date.prototype.pattern=function(fmt) {         
    var o = {         
    "M+" : this.getMonth()+1, //月份         
    "d+" : this.getDate(), //日         
    "h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时         
    "H+" : this.getHours(), //小时         
    "n+" : this.getMinutes(), //分         
    "s+" : this.getSeconds(), //秒         
    "q+" : Math.floor((this.getMonth()+3)/3), //季度         
    "S" : this.getMilliseconds() //毫秒         
    };         
    var week = {         
    "0" : "\u65e5",         
    "1" : "\u4e00",         
    "2" : "\u4e8c",         
    "3" : "\u4e09",         
    "4" : "\u56db",         
    "5" : "\u4e94",         
    "6" : "\u516d"        
    };         
    if(/(y+)/.test(fmt)){         
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));         
    }         
    if(/(E+)/.test(fmt)){         
        fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "\u661f\u671f" : "\u5468") : "")+week[this.getDay()+""]);         
    }         
    if(/(S+)/.test(fmt)){     
        fmt=fmt.replace(RegExp.$1, ("000"+ this.getMilliseconds()).slice(-3));         
    }         
    for(var k in o){         
        if(new RegExp("("+ k +")").test(fmt)){         
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));         
        }         
    }         
    return fmt;         
}       

function guid(){
	var date = new Date(); 
	var num = Math.random()*9000 + 1000;
	num = parseInt(num);
	return date.pattern('yyyyMMddHHnnssS')+(""+num).slice(-3);
}
