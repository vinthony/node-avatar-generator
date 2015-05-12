// comic:http://www.bilibili.com/video/bgm_calendar.html
var comicUrl = require('./utils').comicUrl
var pickone = require('./utils').pickone
var request = require('request')
var http = require('http')
// var process = require('process')
var zlib = require('zlib');
var fs = require('fs')

var getNetImage = function(cb){
	var config = {
		host:"www.bilibili.com",
		keepAlive:true,
		keepAliveMsecs:2000,
		path:comicUrl(),
		headers:{
			"connection":"keep-alive",
			"Vary":"Accept-Encoding",	
			"X-Requested-With":"XMLHttpRequest",
			"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36",
			"Referer":"http://www.bilibili.com/video/bgm_calendar.html",
			"Accept":"application/json, text/javascript, */*; q=0.01",
		}
	}
	req = http.request(config,function(res){
		var buffer = [];
		var gunzip = zlib.createGunzip();            
        res.pipe(gunzip);
		gunzip.on('data', function(data) {
            buffer.push(data.toString())
        }).on("end", function() {
        	var u = pickone(JSON.parse(buffer.join("")))
        	if(u !== 0){
            	cb(null,u)
        	}else{
        		cb("not a url")
        	}
        }).on("error", function(e) {
            cb(e);
        })
		
	})
	req.end()
}

var getfile = function(callback){
	getNetImage(function(e,u){
		if(e){
			console.log("retry this command");
		} 
		request(u.cover).pipe(fs.createWriteStream(u.spid+".png"))
		console.log(process.cwd()+"/"+u.spid+".png"+"\t\t[生成]");
		typeof callback == "function" && callback()
	})
}
getfile()