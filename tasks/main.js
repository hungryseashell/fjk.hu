module.exports = function (grunt) {

  grunt.registerTask('style', 'Update style files', [
    'clean',
    'less',
    'browserify',
    'uglify',
    'cssmin',
    'copy'
  ]);

  grunt.registerTask('default', [
    'style',
    'exec:build'
  ]);

};
