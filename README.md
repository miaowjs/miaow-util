# miaow-util

> Miaow的工具集合

## 使用说明

```javascript
var mutil = require('miaow-util');

mutil.log('发生了一些事情', '耗费了:', mutil.colors.red('30毫秒'));

mutil.hash(new Buffer('你好'));

mutil.getDataURI('~/foo.png');

```

### colors

[chalk](https://github.com/sindresorhus/chalk) 的实例引用

### getDataURI(filePath)

获取文件的 [data-uri](http://en.wikipedia.org/wiki/Data_URI_scheme)

### hash(data)

获取数据的 `md5`

### console

包含了`log`、`warn`和`error`三个打印日志的方法

### duration(time)

返回毫秒单位的时间差语义字符串
