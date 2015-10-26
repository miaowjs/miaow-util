var path = require('path');

module.exports = function (from, to) {
  return path.relative(from, to).replace(/\\/g, '/');
};
