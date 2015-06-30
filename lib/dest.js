// 来自 https://github.com/wearefractal/vinyl-fs/blob/master/lib/dest/writeContents/index.js
var fs = require('fs-extra');
var iconv = require('iconv-lite');
var path = require('path');

function dest(filePath, contents, encoding, cb) {
  fs.ensureDirSync(path.dirname(filePath));

  if (!/utf[\-]?8/i.test(encoding)) {
    contents = iconv.encode(contents.toString(), encoding);
  }

  fs.writeFile(filePath, contents, cb);
}

module.exports = dest;
