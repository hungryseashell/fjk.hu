'use strict';

var _ = require('lodash');

module.exports = function (grunt) {

  var config = {
    pkg: grunt.file.readJSON('./package.json')
  };

  var loadConfigs = function loadConfigs(path) {
    var configs = {};
    grunt.file.recurse(path, function (abspath) {
      _.extend(configs, require('./' + abspath));
    });
    return configs;
  };

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);
  grunt.loadTasks('tasks');
  _.extend(config, loadConfigs('tasks/options'));
  grunt.initConfig(config);
};
