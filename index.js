var colors = require('./color')
var picture = require('./picture')
var config = {
	width:100,
	color:colors.RED
}

for (x = 0 ; x < 2<<7 ; x ++) {
	if(new RegExp(/\w/).test(String.fromCharCode(x))){
		picture(config).one(String.fromCharCode(x))
	}
};
