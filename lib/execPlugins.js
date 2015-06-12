var _ = require('lodash');
var async = require('async');

/**
 * 顺序执行插件
 *
 * @param {Object} context 插件执行的上下文
 * @param {Array|Function|String} plugins 插件，可以是函数也可以是模块名
 * @param {Function} cb 回调函数
 */
module.exports = function (context, plugins, cb) {
  var util = require('./index');

  async.eachSeries(
    _.isArray(plugins) ? plugins : [plugins],
    function (plugin, cb) {
      var option = {};

      if (_.isPlainObject(plugin)) {
        option = plugin.option;
        plugin = plugin.plugin;
      }

      if (_.isFunction(plugin)) {
        plugin.call(context, option, util, cb);
      } else {
        require(plugin).call(context, option, util, cb);
      }
    }.bind(this),
    cb
  );
};
