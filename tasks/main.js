module.exports = function(grunt) {

  grunt.registerTask('style', 'Update style files', [
    'clean',
    'less',
    'browserify',
    'uglify',
    'cssmin',
    'copy'
  ]);

  grunt.registerTask('serve', [
    'style',
    'exec:serve',
    'watch'
  ]);

  grunt.registerTask('default', [
    'style',
    'exec:build'
  ]);

  grunt.registerTask('deploy', [
    'default',
    'sftp:test'
  ]);
};
