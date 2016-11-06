function shortener(files) {
  return Object.keys(files).map(function (key) {
    var obj = {};
    obj['_site/assets/js/' + key] = 'bower_components/' + files[key];
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
  cwd: 'src/assets/img/',
  src: ['*'],
  dest: '_site/assets/img/'
});

files.push({
  expand: true,
  cwd: 'src/assets/files/',
  src: ['*'],
  dest: '_site/assets/files/'
});

files.push({
  expand: true,
  cwd: 'src/assets/forms/',
  src: ['*'],
  dest: '_site/assets/forms/'
});

files.push({
  expand: true,
  cwd: 'src/assets/js/jwplayer/',
  src: ['*'],
  dest: '_site/assets/js/jwplayer/'
});

module.exports = {
  copy: {
    main: {
      files: files
    }
  }
};
