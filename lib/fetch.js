// comic:http://www.bilibili.com/video/bgm_calendar.html
var comicUrl = require('./utils').comicUrl
var pickone = require('./utils').pickone
var request = require('request')
var gm = require('gm').subClass({imageMagick:true})
var http = require('http')
// var process = require('process')
var zlib = require('zlib');
var fs = require('fs')

var getbuffer = function(config,success,fail){
	http.request(config,function(res){
		var buffer = [];
		var gunzip = zlib.createGunzip();            
        res.pipe(gunzip);
		gunzip.on('data', function(data) {
            buffer.push(data.toString())
        }).on("end", function() {
        	success(buffer.join(""))
        }).on("error", function(e) {
           console.error(e);
        })
	}).end()
}

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
	getbuffer(config,function(buffer){
		j = JSON.parse(buffer)
		if(j.length > 0 ){
			cb(null,pickone(j))
		}else{
			cb("err")
		}
	},function(err){
		console.error(err);
	})
}

var getfile = function(width,callback){
	getNetImage(function(e,u){
		if(e){
			console.log("retry this command");
		} 
		if(!u) callback()
		gm(u.cover)
		.resize(width)
		.toBuffer('PNG',function(err,buffer){
			typeof callback == "function" && callback(buffer)
		})		
	})	
}
exports.comic = getfile