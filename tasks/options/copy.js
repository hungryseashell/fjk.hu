module.exports = {
  copy: {
    main: {
      files: [
        {
          'assets/js/jquery.min.js': 'bower_components/jquery/dist/jquery.min.js'
        },
        {
          expand: true,
          cwd   :'_img/',
          src   : ['*'],
          dest  : 'assets/img/'
        }
      ]
    }
  }
};
