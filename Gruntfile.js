module.exports = function(grunt) {

  "use strict";

  // Load plugins in package.json
  require('load-grunt-tasks')(grunt);

  // Load time plugin
  require('time-grunt')(grunt);

  // Parse JSON and init
  var gruntConfig = grunt.file.readJSON('./grunt-config.json');
  grunt.initConfig(gruntConfig);

  // Register tasks
  grunt.registerTask('default', ['browserSync', 'watch']);
  grunt.registerTask('img', ['imagemin']);
}
