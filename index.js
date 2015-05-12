//module.exports 
image = require('./lib/getImage')
var fs = require('fs')

image(['comic'],function(buffer){
	fs.writeFile('f.png',buffer)
})
//enter 

//avatar server


//avatar one
