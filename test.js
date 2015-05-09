var curry = require('./utils').curry
var colors = require('./color')
var example = function(x,y,z,m,n){
	return x+y+z+m+n
}
var func = curry(example,"10")

console.log(func("2"))
console.log(colors.Yellow)