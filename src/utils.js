
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

exports.pickone = function(arr){
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