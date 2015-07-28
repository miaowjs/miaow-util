var path = require('path');

module.exports = function (from, to) {
  return path.relative(from, to).split(path.sep).join('/');
};
