'use strict';

const { landing, conferences, registration, error } = require('./data');

module.exports = [
  { templateFile: '404.pug', data: error, destinationPath: '404.html' },

  { templateFile: 'landing.pug', data: landing.hu, destinationPath: 'index.html' },
  { templateFile: 'landing.pug', data: landing.en, destinationPath: 'en/index.html' },

  { templateFile: 'conference.pug', data: conferences['2016'].hu, destinationPath: 'conferences/2016/index.html' },
  { templateFile: 'conference.pug', data: conferences['2016'].en, destinationPath: 'en/conferences/2016/index.html' },

  { templateFile: 'registration-hu.pug', data: registration.hu, destinationPath: 'registration/index.html' },
  { templateFile: 'registration-en.pug', data: registration.en, destinationPath: 'en/registration/index.html' },
];
