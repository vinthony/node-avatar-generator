var http = require('http')
var fs = require('fs')
var getImage = require('./getImage')

module.exports = function(){
	http.createServer(function(req,res){
		res.writeHead(200,{'content-Type':'image/jpeg'})
		console.log(req.url);
		if(req.url == "/favicon.ico")
			res.end()
		else
			getImage(decodeURIComponent(req.url),function(bf){
				res.end(bf)
			})
	}).listen(23333,'127.0.0.1');
	console.log("Server running")
}