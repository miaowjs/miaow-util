var chalk = require('chalk');
var dateformat = require('dateformat');

function time() {
  return '[' + chalk.grey(dateformat(new Date(), 'HH:MM:ss')) + ']';
}

module.exports = {
  log: function(message) {
    process.stdout.write(time() + ' ' + message + '\n');
  },

  warn: function(message) {
    process.stdout.write(time() + ' ' + chalk.yellow(message) + '\n');
  },

  error: function(error) {
    process.stderr.write(time() + ' ' + chalk.red(error.toString()) + '\n');
  }
};
