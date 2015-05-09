// inner color set
curry = require('./utils').curry

color_iter = function(opa,str){
		return str+opa
	} 

color = curry(color_iter,"ff")

module.exports = {
	YELLOW : color("#f1fa8c"),
	RED : color("#ff5555"),
	PURPLE : color("#bd93f9"),
	PINK : color('#ff79c6'),
	ORANGE : color('#ffb86c'),
	GREEN : color('#50fa7b'),
	CYAN : color('#8be9fd'),
	WHITE : "#ffffff"
}
