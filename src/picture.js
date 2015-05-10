var fs = require('fs')
var gm = require('gm').subClass({imageMagick:true})
var font = require('./font')
var colors = require('./color')
var process = require('process')
var path = require('path')

module.exports = function(cf){
	console.log(cf);
	var width = cf.width
	var color = cf.color
	var text = cf.text
	var one = function(cb){
			//找到最小的正方形
			if(text.charCodeAt(0)<128) // ascii
			{	
				var h = new font.helvetica(width)
			}else{ // 其他字符
				var h = new font.lihei(width)
			}
			var words = text.split("")[0]
			gm(width,width,color)
				.fill(colors.WHITE)
				.font(h.file)
				.fontSize(width)
				.drawText(h.offset.x,h.offset.y,words)
				.write(path.normalize("../data/"+words+".png"),function(err){
					if(err) console.log(err)
						console.log("a photo generator in :" + process.cwd()+"/data/"+words+".png");
					cb(fs.readFileSync(path.normalize("../data/"+words+".png")))
				})
		}

	return {
		one:one
	}
}