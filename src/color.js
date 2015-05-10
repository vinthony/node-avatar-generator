// inner color set
curry = require('./utils').curry
d = require('./utils').double
hex = require('./utils').randomHex

var color_iter = function(opa,str){
		return str+opa
	} 

color = curry(color_iter,"ff")

var set  = function(rgb){
	if(rgb.length == 3){
		rgb = d(rgb)
	}
	return color("#"+rgb)
}

var random = function(){
	return color("#"+hex()+hex()+hex())
}
module.exports = {
	YELLOW : color("#f1fa8c"),
	RED : color("#ff5555"),
	PURPLE : color("#bd93f9"),
	PINK : color('#ff79c6'),
	ORANGE : color('#ffb86c'),
	GREEN : color('#50fa7b'),
	CYAN : color('#8be9fd'),
	WHITE : "#ffffff",
	set:set,
	random:random
}
