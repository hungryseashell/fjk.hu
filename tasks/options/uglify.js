module.exports = {
  uglify: {
    bootstrap: {
      files: {
        'assets/js/bootstrap.min.js': [
          'bower_components/bootstrap/js/dropdown.js',
          'bower_components/bootstrap/js/collapse.js',
          'bower_components/bootstrap/js/scrollspy.js'
        ]
      }
    }
  }
};
