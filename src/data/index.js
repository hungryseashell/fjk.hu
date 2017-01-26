'use strict';

module.exports = {
  landing: {
    hu: require('./landing/hu'),
    en: require('./landing/en')
  },
  conferences: {
    '2016': {
      hu: require('./conferences/2016/hu'),
      en: require('./conferences/2016/en')
    },
    '2017': {
      hu: require('./conferences/2017/hu'),
      en: require('./conferences/2017/en')
    }
  },
  registration: {
    hu: require('./registration/hu'),
    en: require('./registration/en')
  },
  live: {
    hu: require('./live/hu'),
    en: require('./live/en')
  }
};
