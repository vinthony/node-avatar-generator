// inner color set
curry = require('./utils').curry
d = require('./utils').double
hex = require('./utils').randomHex
pickone = require('./utils').pickone
var Traditional_colors_of_Japan = 
["F08F90","DB5A6B","FCC9B9","F2666C","F47983","C93756","FFB3A7",
"F58F84","B95754","9D2933","F7665A","97645A","C3272B","672422",
"5E2824","FA7B62","DC3023","934337","913228","351E1C","D34E36",
"A13D2D","752E23","FF7952","E68364","E35C38","B35C44","9B533F",
"60281E","4C221B","AC8181","C91F37","7B3B3A","B56C60","A24F46",
"8F1D21","BC2D29","8B352D","F8674F","AB4C3D","9D2B22","6F3028",
"F35336","CF3A24","913225","F9906F","F07F5E","FF4E20","CB6649",
"B14A30","8C4736","542D24","9F7462","592B1F","F57F4F","9F5233",
"985538","FFA26B","FF8936","FB8136","2E211B","CA6924","D57835",
"A96232","8C5939","593A27","BE7F51","B7702D","B64925","351F19",
"EC8254","EC956C","824B35","FCA474","FA9258","8F583C","AB6134",
"FFA565","C66B27","985629","6A432D","C48E69","7D4E2D","6B4423",
"F7BB7D","FFA631","CB7E1F","785E49","FAA945","BB8141","FFB94E",
"E69B3A","B0927A","7F6B5D","665343","A17917","5C4827","E2B13C",
"D3B17D","957B38","645530","FFA400","E08A1E","C57F2E","FFB95A",
"CE9F6F","FFB61E","E2BE9F","E29C45","826B58","7F5D3B","4C3D30",
"896C39","E3B130","F3C13A","AA8736","D9B611","BDA928","9C8A4D",
"473F2D","524B2A","857C55","7A942E","BCB58C","8C9E5E","52593B",
"BBA46D","534A32","8B7D3A","3B3429","5E5545","4D4B3A","8DB255",
"5B8930","454D32","8C9C76","817B69","374231","A5BA93","407A52",
"3D4035","656255","2D4436","5A6457","819C8B","3A403B","354E4B",
"6B9362","5E644F","2A603B","898A74","3D5D42","006442","224634",
"2E372E","749F8D","3A6960","2B3733","203838","757D75","2B3736",
"6A7F7A","48929B","455859","264348","1D697C","4D646C","344D56",
"4D8FAC","5D8CAE","181B26","003171","78779B","766980","89729E",
"4F4944","86ABA5","C6C2B6","006C7F","5C544E","364141","317589",
"044F67","3D4C51","252321","192236","1F4788","1B294B","191F45",
"5A4F74","614E6E","875F9A","976E9A","2B2028","A87CA0","5B3256",
"23191E","BB7796","755D5B","6D2B50","A4345D","43242A","7E2639",
"44312E","5D3F6A","3F313A","3A243B","8D608C","4F284B","763568",
"491E3C","63424B","4D3B3C","8F4155","512C31","59292C","97867C",
"4B3C39","352925","171412","27221F","393432","6E5F57","B9A193"
]
var color_iter = function(opa,str){
		return str+opa
	} 

color = curry(color_iter,"ff")

var random = function(){
	return pickone(Traditional_colors_of_Japan)
}

var set  = function(rgb){
	if(rgb.length == 3){
		rgb = d(rgb)
	}
	if(rgb.length == 7 && rgb[0] == "#") //with #
	{	
		return color(rgb)

	}else if(rgb.length == 6){
		return color("#"+rgb)
	}else{
		return color("#"+random())
	}
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
