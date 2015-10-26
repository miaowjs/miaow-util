var crypto = require('crypto');

/**
 * 获取内容的hash值
 *
 * @param {Buffer} data 内容
 * @return {String} 内容的hash值
 */
module.exports = function(data) {
  var hash = crypto.createHash('md5');

  hash.update(data);
  return hash.digest('hex');
};
