module.exports = {
  less: {
    production: {
      options: {
        paths: ['_less/**', 'bower_components/bootstrap/less'],
        yuicompress: true
      },
      files: {
        'assets/css/fjk.min.css': '_less/fjk.less'
      }
    }
  }
};
