var _ = require('lodash');
var async = require('async');
var chalk = require('chalk');

var duration = require('./duration');
var PluginError = require('./PluginError');

/**
 * 顺序执行插件
 *
 * @param {Object} context 插件执行的上下文
 * @param {Array|Function|String} plugins 插件，可以是函数也可以是模块名
 * @param {Object} [options] 配置参数
 * @param {Number} [options.timeout] 任务执行的超时时间
 * @param {Function} cb 回调函数
 */
module.exports = function (context, plugins, options, cb) {
  if (_.isFunction(options)) {
    cb = options;
    options = {};
  }

  options = options || {};

  async.eachSeries(
    _.isArray(plugins) ? plugins : [plugins],
    function (plugin, cb) {
      var option = {};
      var completed;

      if (_.isPlainObject(plugin)) {
        option = plugin.option;
        plugin = plugin.plugin;
      }

      try {
        plugin.call(context, option, complete);
      } catch (err) {
        complete(err);
      }

      if (options.timeout) {
        setTimeout(
          complete.bind(
            complete,
            '任务执行超过限时: ' + duration(options.timeout) + '!'
          ),
          options.timeout
        );
      }

      function complete (err) {
        if (completed) {
          return;
        }

        completed = true;

        if (err && !(err.plugin)) {
          err = new PluginError(plugin.toString(), err, {
            showStack: true
          });
        }

        return cb(err);
      }
    },
    cb
  );
};
