//惰性载入函数重写createXHR（）
function createXHR(){
	if (typeof XMLHttpRequest != "undefined") {
		createXHR = function () {
			return new XMLHttpRequest();//IE5以上版本直接创建XHR对象
		};		
	} else if (typeof ActiveXObject != "undefined") {
		createXHR = function () {
			if (typeof arguments.callee.activeXString != "string") {
				var versions = ["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"];
				var i;
				var len =versions.length;
				for (i = 0; i < len; i++) {
					try{
						new ActiveXObject(versions[i]);
						arguments.callee.activeXString = versions[i];
						break;
					} catch(ex){
						//跳过
					}
				}
			}
			return  new ActiveXObject (arguments.callee.activeXString);
		};		
	} else{
		createXHR = function () {
			throw new Error ("No XHR object available.");
		};		
	}
}