'use strict';

const { landing, conferences, registration, live, mini, booklet } = require('./data');

module.exports = [
  { templateFile: '404.pug', data: {}, destinationPath: '404.html' },

  { templateFile: 'landing.pug', data: landing.hu, destinationPath: 'index.html' },
  { templateFile: 'landing.pug', data: landing.en, destinationPath: 'en/index.html' },

  { templateFile: 'conference.pug', data: conferences['2016'].hu, destinationPath: 'conferences/2016/index.html' },
  { templateFile: 'conference.pug', data: conferences['2016'].en, destinationPath: 'en/conferences/2016/index.html' },

  { templateFile: 'conference.pug', data: conferences['2017'].hu, destinationPath: 'conferences/2017/index.html' },
  { templateFile: 'conference.pug', data: conferences['2017'].en, destinationPath: 'en/conferences/2017/index.html' },

  { templateFile: 'conference.pug', data: conferences['2018'].hu, destinationPath: 'conferences/2018/index.html' },
  { templateFile: 'conference.pug', data: conferences['2018'].en, destinationPath: 'en/conferences/2018/index.html' },

  { templateFile: 'conference.pug', data: conferences['2019'].hu, destinationPath: 'conferences/2019/index.html' },
  { templateFile: 'conference.pug', data: conferences['2019'].en, destinationPath: 'en/conferences/2019/index.html' },

  { templateFile: 'conference.pug', data: conferences['2020'].hu, destinationPath: 'conferences/2020/index.html' },
  { templateFile: 'conference.pug', data: conferences['2020'].en, destinationPath: 'en/conferences/2020/index.html' },

  { templateFile: 'registration.pug', data: registration.hu, destinationPath: 'registration/index.html' },
  { templateFile: 'registration.pug', data: registration.en, destinationPath: 'en/registration/index.html' },

  { templateFile: 'live.pug', data: live.hu, destinationPath: 'live/index.html' },
  { templateFile: 'live.pug', data: live.en, destinationPath: 'en/live/index.html' },

  { templateFile: 'mini.pug', data: mini.hu, destinationPath: 'mini/index.html' },

  { templateFile: 'booklet.pug', data: booklet['2019'].hu, destinationPath: 'booklet/2019/index.html' },
  { templateFile: 'booklet.pug', data: booklet['2019'].en, destinationPath: 'en/booklet/2019/index.html' }
];
