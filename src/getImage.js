var colors = require('./color')
var picture = require('./picture')
hex = require('./utils').randomHex
var fs = require('fs')
module.exports = function(path,cb){
	v = path.substr(1)
	if(v[v.length] == '/')
		v = v.substr(0,v.length-1)
	configs = v.split('/')
	/*
		/:width/:str/:color
		/:width/:str
		/:width
	*/
	pic_config = {
		width:configs[0],
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
	}
	picture(pic_config).one(function(content){
		cb(content)
	})
}