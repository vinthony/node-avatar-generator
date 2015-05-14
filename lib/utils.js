
// curry 
exports.curry = function(func,arg){
	return function(){
		var args = [arg]
		var ii = arguments.length
		for (var i = 0; i < ii ; i++) {
			args.push(arguments[i])
		};
		return func.apply(this,args)
	}
}

//pickone

var pickone = function(arr){
	if(arr.length == 0)
		return 0
	if(arr.length == 1)
		return arr[0]
	len = arr.length
	ran = Math.floor(Math.random()*len)
	return arr[ran]
}

exports.foo = function(a,b){
	return a+b
}
exports.double = function(str){
	re = ""
	for (var i = 0;i <str.length;i++) {
		re += str[i]+str[i]
	};
	return re
}
exports.randomHex = function(){
	m = String(Math.floor(Math.random()*256).toString(16))
	if(m.length == 1)
		return "0"+m
	else
		return m
}
var arandom = function(a,b){
	return Math.floor(Math.random()*(b-a)+a)
}

exports.comicUrl = function(){
	year  = arandom(2000,2015)
	month = pickone([1,4,7,10])
	return "/index/bangumi/"+String(year)+"-"+String(month)+".json"
}
exports.random = arandom
exports.pickone = pickone
