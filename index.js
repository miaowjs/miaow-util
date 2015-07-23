module.exports = {
  colors: require('chalk'),
  dest: require('./lib/dest'),
  execPlugins: require('./lib/execPlugins'),
  getDataURI: require('./lib/getDataURI'),
  hash: require('./lib/hash'),
  log: require('./lib/log'),
  plugin: require('./lib/plugin'),
  PluginError: require('./lib/PluginError'),
  resolve: require('./lib/resolve')
};
