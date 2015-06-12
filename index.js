module.exports = {
  colors: require('chalk'),
  execPlugins: require('./lib/execPlugins'),
  getDataURI: require('./lib/getDataURI'),
  hash: require('./lib/hash'),
  log: require('./lib/log'),
  PluginError: require('./lib/PluginError'),
  resolve: require('./lib/resolve')
};
