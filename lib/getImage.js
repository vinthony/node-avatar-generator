var colors = require('./color')
var picture = require('./picture')
var comic = require('./fetch').comic
hex = require('./utils').randomHex
var fs = require('fs')
module.exports = function(path,cb){
	if(path===null) path=['comic']
		
	if(typeof path != "object" ){
		v = path.substr(1)
		if(v[v.length] == '/')
			v = v.substr(0,v.length-1)
		configs = v.split('/')
	}else{
		configs = path
	} // config 
	
	/*
		/:width/:str/:color
		/:width/:str
		/:width
	*/
	if(configs[0]=="comic"){
		width = 120
		if(configs[1]) width = configs[1]
		comic(width,function(content){
			cb(content)
		})
	}else{
		pic_config = {
			width:configs[0]||100,
			mode:"server"
		}
		if(configs.length == 3){
			pic_config.text = configs[1]
			pic_config.color = colors.set(configs[2])
		}else if(configs.length == 2){
			pic_config.text = configs[1]
			pic_config.color = colors.random()
		}else if(configs.length == 1){
			pic_config.text = hex()[0]
			pic_config.color = colors.random()
		}
		picture(pic_config).one(function(content){
			cb(content)
		})
	}

}