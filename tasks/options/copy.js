function shortener(files) {
  return Object.keys(files).map(function (key) {
    var obj = {};
    obj['assets/js/' + key] = 'bower_components/' + files[key];
    return obj;
  });
}

var files = shortener({
  'jquery.min.js': 'jquery/dist/jquery.min.js',
  'bootstrap-validator.min.js': 'bootstrap-validator/dist/validator.min.js',
  'jquery.easing.min.js': 'jquery-easing-original/jquery.easing.min.js',
  'wow.min.js': 'wow/dist/wow.min.js',
  'snap.svg.min.js': 'Snap.svg/dist/snap.svg-min.js'
});

files.push({
  expand: true,
  cwd: '_assets/_img/',
  src: ['*'],
  dest: 'assets/img/'
});

module.exports = {
  copy: {
    main: {
      files: files
    }
  }
};
