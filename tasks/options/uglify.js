module.exports = {
  uglify: {
    bootstrap: {
      files: {
        '_site/assets/js/bootstrap.min.js': [
          'bower_components/bootstrap/js/dropdown.js',
          'bower_components/bootstrap/js/collapse.js',
          'bower_components/bootstrap/js/carousel.js',
          'bower_components/bootstrap/js/tooltip.js',
          'bower_components/bootstrap/js/popover.js',
          'bower_components/bootstrap/js/modal.js',
          'bower_components/bootstrap/js/scrollspy.js'
        ]
      }
    },
    custom: {
      files: {
        '_site/assets/js/fjk.min.js': '_temp/fjk.js'
      }
    }
  }
};
