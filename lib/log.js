//https://github.com/gulpjs/gulp-util/blob/master/lib/log.js
var chalk = require('chalk');
var dateformat = require('dateformat');

/**
 * 打印日志
 */
module.exports = function () {
  var time = '[' + chalk.grey(dateformat(new Date(), 'HH:MM:ss')) + ']';
  process.stdout.write(time + ' ');
  console.log.apply(console, arguments);
  return this;
};
