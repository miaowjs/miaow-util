var _ = require('lodash');
var fs = require('fs');
var path = require('path');

function isMain(filePath, root) {
  var searchDir = path.dirname(filePath);
  var relative = mutil.relative(root, searchDir);

  function detectMain(searchDir, mainList) {
    return !!_.find(mainList, function (main) {
      return path.join(searchDir, main) === filePath;
    });
  }

  // 逐级向上查找package.json, 并判断package.json里面的main信息是否指向这个文件地址
  do {
    var mainList = [];

    var pkgFile = path.join(searchDir, 'package.json');
    if (fs.existsSync(pkgFile)) {
      var pkg = JSON.parse(fs.readFileSync(pkgFile, {encoding: 'utf8'}));

      if (pkg.main) {
        mainList = mainList.concat(pkg.main);
      }

      if (pkg.extraMain) {
        mainList = mainList.concat(pkg.extraMain);
      }
    }

    if (detectMain(searchDir, mainList)) {
      return true;
    }

    searchDir = path.resolve(searchDir, '..');
    relative = mutil.relative(root, searchDir);
  } while (!/^\.\./.test(relative));

  return false;
}

module.exports = isMain;
