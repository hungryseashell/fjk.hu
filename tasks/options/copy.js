module.exports = {
  copy: {
    main: {
      files: [
        {
          'assets/js/jquery.min.js': 'bower_components/jquery/dist/jquery.min.js'
        },
        {
          'assets/js/wow.min.js': 'bower_components/wow/dist/wow.min.js'
        },
        {
          expand: true,
          cwd   :'_assets/_img/',
          src   : ['*'],
          dest  : 'assets/img/'
        }
      ]
    }
  }
};
