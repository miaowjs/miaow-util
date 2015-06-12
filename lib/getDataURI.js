var fs = require('fs');
var mime = require('mime');

/**
 * 获取文件的data-uri
 *
 * @param {String} filePath 文件路径
 * @return {String} 文件的data-uri
 */
module.exports = function (filePath) {
  var ret = 'data:';
  ret += mime.lookup(filePath);
  ret += ';base64,';
  ret += fs.readFileSync(filePath).toString('base64');
  return ret;
};
