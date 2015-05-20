var colors = require('./color')
var picture = require('./picture')
var fonts = require('./font')
var comic = require('./fetch').comic
hex = require('./utils').randomHex
var fs = require('fs')
module.exports = function(path,cb){
	if(path===null) path={type:"comic"}
	if(typeof path != "object" ){ // from server
		v = path.substr(1)
		if(v[v.length] == '/')
			v = v.substr(0,v.length-1)
		vs = v.split('/')
		if(vs[0] == "comic"){
			configs = {
				type:"comic",
				width:vs[1]||100
			}
		}else{
			var width = vs[0]||100
			var text = vs[1]||hex()[0]
			configs = {
				type:"default",
				width:width,
				text:text,
				color:vs[2]||colors.random(),
				font:fonts.get(vs[3],width)||fonts.getfromtext(text,width)
			}
		}
	}else{ //from options
		configs = path
		if(!configs.path){
			configs.width=100
		}
	} 

	if(configs.type=="comic"){
		comic(configs.width,function(content){
			cb(content)
		})
	}else{
		picture(configs).one(function(content){
			cb(content)
		})
	}

}