module.exports = {
  watch: {
    style: {
      files: ['_less/**/*'],
      tasks: ['less', 'newer:uglify', 'newer:cssmin', 'newer:copy', 'exec:build']
    },
    other: {
      files: ['_includes/**/*', '_layouts/**/*', '**/*.html', '_js/*.js'],
      tasks: ['default']
    },
    options: {
      livereload: true,
      spawn: false
    },
  }
};
