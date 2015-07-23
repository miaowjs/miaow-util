function plugin (name, version, execute) {
  execute.__pluginName__ = name;
  execute.__pluginVersion__ = version;

  execute.toString = function () {
    return [name, version].join('@');
  };

  return execute;
}

module.exports = plugin;
