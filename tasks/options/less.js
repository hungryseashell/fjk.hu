module.exports = {
  less: {
    production: {
      options: {
        paths: ['_assets/_less/**', 'bower_components/bootstrap/less'],
        yuicompress: true
      },
      files: {
        '_temp/fjk.css': '_assets/_less/fjk.less'
      }
    }
  }
};
