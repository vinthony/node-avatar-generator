# node-avatar-generator
a random avatar generator base on node and gm

[![Code Climate](https://codeclimate.com/repos/5554e6936956800eb5000239/badges/e3327bf288ba42329f3f/gpa.svg)](https://codeclimate.com/repos/5554e6936956800eb5000239/feed)

[![NPM](https://nodei.co/npm/node-avatar-generator.png)](https://nodei.co/npm/node-avatar-generator/)

## default avatar generator
![sss](http://vinthony.u.qiniudn.com/avatar.png)

## comic avatar generator 
![sss](http://vinthony.u.qiniudn.com/comic.png)

## getting start
make sure you have install `imagemagick`

```
brew install imagemagick
```

then in your project

```
npm install node-avatar-generator --save

```
the first arguments is config

```javascript
var image = require('node-avatar-generator').image
var fs = require('fs')
var option = {
	type:"comic", //可选值 comic,default
	width:100, //可选值 integer
	color:eb002a, //rgb
	font:kx //kx,lihei,bariol,din
}
//return a buffer
image(option,function(buffer){
	fs.writeFile('file.png',buffer)	
})
```
## server mode

run a server of this tool

url中`:config`表示此参数可以省略

```javascript
	var image_server = require('node-avatar-generator').server
	image_server()
```

```
	http://localhost:9527/:width/:str/:bgcolor/:font
```

```
	http://localhost:9527/comic/:width
```

## cli mode [todo]

```javascript
	[command] one
```

## usage server mode [todo]

```
	npm install -g [command]
	[command] server
```

## test

```
	mocha test
```

## 字体

- 中文字体可选：

	* 丽黑体
	* 康熙字典体

- 英文字体可选：

	* Bariol
	* DIN Pro

> 如有侵权立删

## comic来源

所random的所有动漫头像来自于[bilibili](http://www.bilibili.com/video/bgm_calendar.html),如有侵权立删


## log

- 2015年05月12日[1.0.5] 增加comic选项
- 2015年05月14日[1.0.6] 优化显示的图片位置，优化font类
- 2015年05月15日[1.0.7] 更改随机颜色的颜色值为[日本传统色](http://zh.wikipedia.org/wiki/%E6%97%A5%E6%9C%AC%E4%BC%A0%E7%BB%9F%E8%89%B2%E7%B3%BB)
- 2015年05月20日[1.0.8] 去掉全局模式的[todo]，更改入口函数的使用方式

##类似项目

[Material-Design-Avatars](https://github.com/lincanbin/Material-Design-Avatars)

## 致谢

字体排版设计[@虐猫狂魔王这样](http://weibo.com/u/1938141191)

## LICENSE

The MIT License (MIT)

Copyright (c) 2015 Shadow Cun <[vinthony@gmail.com](vinthony@gmail.com)>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

