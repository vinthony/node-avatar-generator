var fs = require('fs')
var gm = require('gm').subClass({imageMagick:true})
var font = require('./font')
var colors = require('./color')
var path = require('path')

module.exports = function(cf){
	var width = cf.width
	var color = colors.set(cf.color)
	var text = cf.text
	var mode = cf.mode
	var font = cf.font
	var one = function(cb){
			//找到最小的正方形
			var words = text.split("")[0]
			var image = gm(width,width,color)
				.fill(colors.WHITE)
				.font(font.file)
				.fontSize(font.fontsize)
				.drawText(font.offset.x,font.offset.y,words)
				image.toBuffer('PNG',function(err,buffer){
					if(err) console.log(err)
					cb(buffer)	
				})
		}

	return {
		one:one
	}
}