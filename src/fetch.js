// comic:http://www.bilibili.com/video/bgm_calendar.html
//
var request = require('request')
var comicUrl = require('./utils').comicUrl
var cheerio = require('cheerio')
var encoding = require('encoding')
var BufferHelper = require('bufferhelper')
var bufferHelper = new BufferHelper()

var getNetImage = function(){
	var config = {url:comicUrl(),json:true,encoding: 'utf-8',headers:{connection:"keep-alive"}}
	request(config,function(err,response,body){
		// console.log(err)
		// console.log(response)
		console.log(body)
		
	})
}
getNetImage()