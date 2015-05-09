
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

