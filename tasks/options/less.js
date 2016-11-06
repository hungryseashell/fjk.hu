module.exports = {
  less: {
    production: {
      options: {
        paths: [
          'src/assets/less/**',
          'bower_components/bootstrap/less',
          'bower_components/animate.less'
        ],
        yuicompress: true
      },
      files: {
        '_temp/fjk.css': 'src/assets/less/fjk.less'
      }
    }
  }
};
