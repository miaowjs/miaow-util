var _ = require('lodash');
var path = require('path');
var resolve = require('resolve');

/**
 * 查找模块
 */
module.exports = function (id, basedir, options) {
  var idList = [];

  // 如果路径是相对路径, 并且没有以./或../开头和有扩展名的, 就自动补上./
  // 因为前端代码中的相对路径引用很多不以./或../开头
  // foo.js -> ./foo.js
  if (!path.isAbsolute(id) && !/^\.\.?\//.test(id) && path.extname(id).length) {
    idList.push('./' + id);
  }

  idList.push(id);

  // 添加扩展名的fallback
  var extensions = options.extensions;
  if (path.extname(id).length === 0) {
    _.each(extensions, function (extension) {
      idList.push(id + extension);
    });
  }

  // 添加别名的fallback
  var extensionAlias = options.extensionAlias;
  _.each(idList, function (id) {
    var extension = path.extname(id);
    var alias = extensionAlias[extension];

    if (extension && alias) {
      alias = _.isArray(alias) ? alias : [alias];

      _.each(_.uniq(alias), function (item) {
        idList.push(id.replace(new RegExp(extension + '$'), item));
      });
    }
  });

  var res;
  _.each(idList, function (id) {
    try {
      res = resolve.sync(id, {
        basedir: basedir,
        extensions: [],
        moduleDirectory: options.moduleDirectory
      });
      return false;
    } catch (err) {
    }
  });

  if (res) {
    return res;
  } else {
    throw new Error(id + '未被查找到!');
  }
};
