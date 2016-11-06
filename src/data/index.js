'use strict';

const landingHu = require('./landing/hu');
const landingEn = require('./landing/en');
const conferenceHu = require('./conferences/2016/hu');
const conferenceEn = require('./conferences/2016/en');
const registrationHu = require('./registration/hu');
const registrationEn = require('./registration/en');

module.exports = {
  landing: {
    hu: landingHu,
    en: landingEn
  },
  conferences: {
    '2016': {
      hu: conferenceHu,
      en: conferenceEn
    }
  },
  registration: {
    hu: registrationHu,
    en: registrationEn
  },
  error: {
    page: {
      home: 'https://fjk.hu',
      title: 'Fiatalok Jézusért Konferencia',
      assetsPath: './assets',
      nav: []
    },
  }
};
