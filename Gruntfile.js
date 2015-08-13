module.exports = function(grunt) {

  require('time-grunt')(grunt);

  grunt.initConfig({
    uglify: {
      bootstrap: {
        files: {
          'assets/js/bootstrap.min.js': ['bower_components/bootstrap/js/collapse.js',
                                         'bower_components/bootstrap/js/scrollspy.js',
                                         'bower_components/bootstrap/js/button.js',
                                         'bower_components/bootstrap/js/affix.js']
        }
      }
    },
    copy: {
      jquery: {
        files: {
          'assets/js/jquery.min.js': 'bower_components/jquery/dist/jquery.min.js'
        }
      }
    },
    exec: {
      build: {
        cmd: 'jekyll build'
      },
      serve: {
        cmd: 'jekyll serve --watch'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', [ 'uglify', 'copy', 'exec:build' ]);

};
