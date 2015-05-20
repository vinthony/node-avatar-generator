var assert = require('assert')
var picture = require('../lib/picture')
var colors = require('../lib/color')
var utils = require('../lib/utils')
var font = require('../lib/font')
var image = require('../index').image
var fs = require('fs')
var exec = require('child_process').exec
base = path.normalize(process.cwd()+path.sep+"fonts"+path.sep)
describe('RemoveTestData',function(){
	it('should no  error',function(done){
		exec('rm *.png',function(err){
			if(err) console.error(err);
			done()
		})
	})
})
describe('Picture',function(){
	describe('#ascii',function(){
		it('should save without error',function(done){
			var config = {
					width:100,
					color:colors.RED
				}
			char_code = Math.floor(Math.random()*26+65)
			config.text = String.fromCharCode(char_code)
			config.font = font.getfromtext(config.text,config.width)
			picture(config).one(function(buffer){
				fs.writeFile(config.text+".png",buffer,null,function(){
					done()
				})
			})
		})
	})
	describe('#汉字',function(){
		it('should save without error',function(done){
			var config = {
					width:100,
					color:colors.RED
				}
			var items = "双马尾怎么绑才显得萌"	
			config.text = utils.pickone(items)
			config.font = font.getfromtext(config.text,config.width)
			picture(config).one(function(buffer){
				fs.writeFile(config.text+".png",buffer,null,function(){
					done()
				})
			})
		})
	})
})

describe('Utils',function(){
	describe('#curry',function(){
		it('should return a function',function(done){
			assert.equal("function",typeof utils.curry(utils.foo,10))
			done()
		})
		it('should doing curry process',function(){
			assert.equal(utils.curry(utils.foo,10)(2),utils.foo(10,2))
		})
	})
	describe('#double',function(){
		it('should return double of the string',function(){
			assert.equal(utils.double("123"),"112233");
			assert.equal(utils.double("abc"),"aabbcc");
		})
	})
	describe('#randomHex',function(){
		it('should return a random of the string',function(){
			assert.equal(parseInt(utils.randomHex(),16)<=256,true)
			assert.equal(parseInt(utils.randomHex(),16)>=0,true)
		})
	})
})
describe('Image',function(){
	describe('#main',function(){
		it('should save without error',function(done){
			var option = {
				type:"comic",
				width:100
			}
			image(option,function(buffer){
				fs.writeFile("x--1.png",buffer,function(err){
					done()
				})
			})
		})
		it('[0 config]should save without error',function(done){
			var option = {
				type:"comic",
				width:100
			}
			image(null,function(buffer){
				fs.writeFile("x--2.png",buffer,function(err){
					done()
				})
			})
		})

	})
	describe('#main-url',function(){
		it('[4 option] should save without error',function(done){
			image("/100/玩/333/kx",function(buffer){
				fs.writeFile("x-4.png",buffer,function(err){
					done()
				})
			})
		})
		it('[3 option] should save without error',function(done){
			image("/100/str/fca",function(buffer){
				fs.writeFile("x-3.png",buffer,function(err){
					done()
				})
			})
		})
		it('[2 option] should save without error',function(done){
			image("/100/str",function(buffer){
				fs.writeFile("x-2.png",buffer,function(err){
					done()
				})
			})
		})
		it('[1 option]should save without error',function(done){
			image("/100",function(buffer){
				fs.writeFile("x-1.png",buffer,function(err){
					done()
				})
			})
		})
	})
})
describe('Font',function(){
	describe('init',function(){
		it('should return right font name',function(){
			assert.equal(font.get("lihei",100).file,base+"LiHei Pro.ttf")
		})
		it('should return right font name',function(){
			assert.equal(font.getfromtext("ffff",100).file,base+"DIN.otf")
		})
	})	
	describe('usage',function(){
		it('should save without error',function(done){
			var config = {
					width:100,
					color:colors.RED
				}
			for(var x = 65;x<=90;x++){
				config.text = String.fromCharCode(x)
				config.font = font.get("din",config.width)
				picture(config).one(function(buffer){
					fs.writeFileSync(config.text+".png",buffer)
				})	
			}	
			done()
		})
	})
})
