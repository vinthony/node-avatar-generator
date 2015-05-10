var assert = require('assert')
var picture = require('../src/picture')
var colors = require('../src/color')
var utils = require('../src/utils')

describe('Picture',function(){
	describe('#ascii',function(){
		it('should save without error',function(done){
			var config = {
					width:100,
					color:colors.RED
				}
			char_code = Math.floor(Math.random()*26+65)
			picture(config).one(String.fromCharCode(char_code))
			done()
		})
	})
	describe('#汉字',function(){
		it('should save without error',function(done){
			var config = {
					width:100,
					color:colors.RED
				}
			var items = "双马尾怎么绑才显得萌"	
			picture(config).one(utils.pickone(items))
			done()
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
})