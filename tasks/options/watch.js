module.exports = {
  watch: {
    style: {
      files: ['_less/**/*'],
      tasks: ['less', 'newer:uglify', 'newer:cssmin', 'newer:copy', 'exec:build']
    },
    html: {
      files: ['_includes/**/*', '_layouts/**/*'],
      tasks: ['default']
    },
    options: {
      livereload: true,
      spawn: false
    },
  }
};
