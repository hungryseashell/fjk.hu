'use strict';

const assetsPath = '../../assets';

module.exports = {
  page: {
    home: 'https://fjk.hu/en',
    title: 'Fiatalok Jézusért Konferencia',
    assetsPath: assetsPath,
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
    info: {
      title: 'Information',
      description: 'To finalize your registration, you have to transfer the <span class="emph">whole amount</span> of the calculated registration fee. We would like to inform you, that the amount that you see at the end of your online registration <span class="emph">does not include accommodation fee</span>. You can settle your accommodation costs by personal registration at the Conference. We require your registration fee amount to be transferred to the following account: <span class="emph">12001008-01177336-00100001</span> (<span class="emph">ASI Magyarország</span>). At the memo, please add the name of the registered participant(s), and please also add „<span class="emph">FJK támogatás</span>”. For not domestic transfer, please use the followings: IBAN: HU19 1200 1008 0117 7336 0010 0001, Swift code: UBRTHUHB. If you have any other question or request, please feel free to contact us via e-mail at <a href="mailto:info@fjk.hu">info@fjk.hu</a>!'
    },
    tabs: {
      conference: {
        title: 'Attendance',
        meal: {
          title: 'Meal',
          thursday: 'Thursday',
          friday: 'Friday',
          sabbath: 'Sabbath',
          lunch: 'Lunch',
          dinner: 'Dinner',
          info: 'Breakfast is included in the accommodation prices'
        },
        attendance: {
          full: 'Participating in the whole conference',
          sabbath: 'Visiting only on Sabbath'
        }
      },
      housing: {
        title: 'Housing',
        broadway: "This accommodation is booked, we can't receive additional bookings.",
        benczur: 'This accommodation is recommended for individual or double booking! The housing will be in hotel rooms with 1 or 2 beds, which are separable. Separate application is also possible, but in this case the conference organisers will house the applicants on one of the beds, along with a participant, who applied similarly. Please download the accommodation booking form for more information. Check out the <a href="http://www.hotelbenczur.hu/en target="_blank">apartments</a> then <a href="' + assetsPath + '/forms/benczur-en.docx">the application form</a>.'
      },
      program: {
        title: 'Program',
        subtitle: 'Help us',
        label: 'Volunteer work',
        translate: 'Translation (English - Hungarian)',
        smallGroups: 'Guiding small-group discussions',
        diaconia: 'Diaconia',
        other: 'Other services'
      },
      support: {
        title: 'Support',
        subtitle: 'Support the Conference',
        label: 'Funding packages',
        description: 'Here you have the opportunity to donate by Funding Packages. Every package includes specially designed, FJK – marked products. Choose one and support us!',
        '10000': '(Notebook + Fridge magnet + Laptop sticker + Cloth Bag + Natur cosmetics selection + 100-item-Glow package)',
        '5000': '(Notebook + Fridge magnet + Laptop sticker + Cloth Bag + 50-item-Glow package)',
        '3000': '(Notebook + Fridge magnet + Laptop sticker + 30-item-Glow package)',
        '1000': '(Notebook + 20-item-Glow package)',
        '0': 'I pray for the Conference!',
        hoodies: {
          title: 'You can check out the hoodies here:<a id="popover-menHoody" rel="popover" data-content="" title="Men\'s hoodies">men</a> és<a id="popover-womenHoody" rel="popover" data-content="" title="Women\'s hoodies">women</a>. Size:<a id="popover-men" rel="popover" data-content="" title="Men">men</a>,<a id="popover-women" rel="popover" data-content="" title="Women">women</a>,<a id="popover-kid" rel="popover" data-content="" title="Kid">kid</a>,<a id="popover-menHoodySize" rel="popover" data-content="" title="Men\'s hoodies">men\'s hoodies</a> és<a id="popover-womenHoodySize" rel="popover" data-content="" title="Women\'s hoodies">women\'s hoodies</a>.',
          type: 'Type',
          size: 'Size',
          quantity: 'Quantity',
          shirts: {
            men: "Men's T-Shirts (1500 Ft)",
            women: "Women's T-Shirts (1500 Ft)",
            kid: "Child (1700 Ft)",
            menHoody: "Men's hoody (3700 Ft)",
            womenHoody: "Women's hoody (3700 Ft)"
          }
        }
      },
      personal: {
        title: 'Personal details',
        subtitle: 'We use this data only for the registration',
        lname: 'Last name*',
        fname: 'First name*',
        d: 'Email*',
        birth: 'Date of birth (1990/12/31)*',
        city: 'City*',
        country: 'Country / Region*',
        newsletter: 'Sign up for FJK newsletter'
      }
    }
  }
};
