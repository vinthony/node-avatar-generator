path = require('path')
base = path.normalize(process.cwd()+path.sep+"fonts"+path.sep)
util = require('util')

var Font = function(size){
	this.fontsize  = size *0.8
	this.offset = {
		x : Number.parseInt(size/2-this.fontsize/4-size*0.05),
		y : Number.parseInt(size/2+this.fontsize/2-size*0.1)
	}
	this.file = base+"LiHei Pro.ttf"
}
function EnFont(size){
	Font.call(this,size)
	this.file = base+"Bariol.otf"
}
function CnFont(size){
	Font.call(this,size)
	this.fontsize = size*0.618
	this.offset = {
		x: Number.parseInt(size/2-this.fontsize/2),
		y: Number.parseInt(size/2+this.fontsize/2-size*0.08)
	}
}

util.inherits(EnFont, Font);
util.inherits(CnFont, Font);

var lihei = function(size){
	CnFont.call(this,size)
}
var bariol = function(size){
	EnFont.call(this,size)
}
var din = function(size){
	EnFont.call(this,size)
	this.file = base+"DIN.otf"
}
var kx = function(size){
	CnFont.call(this,size)
	this.file = base+"kx.otf"
}
util.inherits(bariol, EnFont);
util.inherits(din, EnFont);

util.inherits(lihei, CnFont);
util.inherits(kx, CnFont);


var getfromtext = function(text,width){
	if(text.charCodeAt(0)<128) // ascii
	{	
		return new din(width)
	}else{ // 其他字符
		return new lihei(width)
	}	 
}
var get = function(f,width){
	if(f == null)
		return null
	switch(f.toUpperCase()){
		case 'LIHEI':
			return new lihei(width)
		case 'KX':
			console.log('kx')
			return new kx(width)
		case 'BARIOL':
			return new bariol(width)
		case 'DIN':
			return new din(width)
		default:
			return null	
	}
}

exports.lihei = lihei 
exports.din = din 
exports.kx = kx
exports.bariol = bariol
exports.get = get
exports.getfromtext = getfromtext
