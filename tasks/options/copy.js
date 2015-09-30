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
          'assets/js/snap.svg.min.js': 'bower_components/Snap.svg/dist/snap.svg-min.js'
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
