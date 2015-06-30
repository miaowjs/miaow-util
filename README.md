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

### dest(filePath, contents, encoding, cb)

将`Buffer`类型的内容以指定的编码格式生成到指定的路径下(如果路径不存在,就逐级创建)

### execPlugins(context, plugins, cb)

顺序执行查件序列，插件可以是模块名也可以是函数，如果需要传递参数给查件，请以 `[{plugin: plugin, option: option}]` 的方式传递插件序列

### getDataURI(filePath)

获取文件的 [data-uri](http://en.wikipedia.org/wiki/Data_URI_scheme)

### hash(data)

获取数据的 `md5`

### log(info...)

在控制台中打印出信息，并在信息前统一追加时间

### PluginError(pluginName, message[, options])

参考 [gulp-util](https://github.com/gulpjs/gulp-util#new-pluginerrorpluginname-message-options)
