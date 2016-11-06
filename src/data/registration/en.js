'use strict';

module.exports = {
  page: {
    home: 'https://fjk.hu/en',
    title: 'Fiatalok Jézusért Konferencia',
    assetsPath: '../../assets',
    nav: {
      conference: {
        url: '../conferences/2016/',
        text: 'In Mission'
      },
      changeLang: {
        url: '../registration/',
        text: 'HU'
      }
    }
  },
  content: {
    errors: {
      email: 'Please use valid email address',
      birth: 'Please use the valid date format (1990/12/31)',
      empty: 'Please fill out this field',
      server: 'Something went wrong, please try again later!',
      user: 'This email address has already been used for a registration! If you want to modify it, please contact us by email at <a href="mailto:reg@fjk.hu">reg@fjk.hu</a>!',
      progress: 'Your registration is in progress...',
      smallDisplay: 'Please proceed your registration on higher resolution screen...'
    },
    next: 'Next',
    prev: 'Previous',
    submit: 'Submit',
    cta: 'Register today!',
    price: 'Registration fee',
    attendancePrice: 'Participation fee <b><span id="regCalculator" class="price-calculator"></span> Ft</b>',
    swagPrice: 'Funding packages <b><span id="swagCalculator" class="price-calculator">0</span> Ft</b>',
    fullPrice: 'Fee to be transferred* <b><span id="fullCalculator"></span> Ft</b>',
    fullPriceHelp: 'The accommodation fee is not included!',
    success: {
      title: 'Your application was successful!',
      subtitle: "We'll send you an email with the details!"
    },
    tabs: {
      conference: {
        title: 'Attendance',
        mealTitle: 'Meal'
      },
      housing: {
        title: 'Housing'
      },
      program: {
        title: 'Program',
        subtitle: 'Help us'
      },
      support: {
        title: 'Support',
        subtitle: 'Support the Conference'
      },
      personal: {
        title: 'Personal details',
        subtitle: 'We use this data only for the registration'
      }
    }
  }
};
