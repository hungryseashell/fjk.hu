'use strict';

const assetsPath = '../../assets';

module.exports = {
  page: {
    regIsOn: Boolean(process.env.REG_IS_ON),
    liveIsOn: Boolean(process.env.LIVE_IS_ON),
    regIsClosed: 'The registration is closed',
    home: 'https://fjk.hu/en',
    title: 'Fiatalok Jézusért Konferencia',
    assetsPath: assetsPath,
    nav: {
      conference: {
        url: '../conferences/2019/',
        text: 'The image restored - True education'
      },
      changeLang: {
        url: '../../registration/',
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
      subtitle: 'We\'ll send you an email with the details!'
    },
    info: {
      title: 'Information',
      description: 'To finalize your registration, you have to transfer the <span class="emph">whole amount</span> of the calculated registration fee. We require your registration fee amount to be transferred to the following account: <span class="emph">12001008-01177336-00100001</span> (<span class="emph">ASI Magyarország</span>). At the memo, please add the name of the registered participant(s), and please also add „<span class="emph">FJK támogatás</span>”. If you have any other question or request, please feel free to contact us via e-mail at <a href="mailto:info@fjk.hu">info@fjk.hu</a>!<br>Please note that if you can use only a non-Hungarian bank for transfer, then you are not required to pay deposit - due to high amount of transfer costs. You can settle your registration fee at the conference registration venue in cash. In this case, please expect an e-mail from the organizers right before the conference when we ask you for a second confirmation of your application.<br>Cost of participation:<br>The Early bird registration fee is 3.000 Ft. For Early Bird registration please transfer the above amount by the 30th of December, 2018 until 23:55.<br>The normal registration fee is 3.500 HUF, and is open until the 14th of January, 2019, 23.55. For valid registration, please transfer the money until the afore mentioned date and time.<br>The last minute registration fee is 4,500 HUF. Please register and transfer the amount until the 21st of January, 2019, 23:55.<br>Conference participation is free only on Sabbath and/or weekdays from 17:00, but requires registration.'
    },
    tabs: {
      conference: {
        title: 'Attendance',
        meal: {
          title: 'Meal',
          subtitle: 'From now on we would like to put greater emphasis on environmental protection. So, the plates on which you get your meals will be made from rapidly degradable material.',
          thursday: 'Thursday',
          friday: 'Friday',
          sabbath: 'Sabbath',
          lunch: 'Lunch',
          dinner: 'Dinner'
        },
        attendance: {
          full: 'Participating in the whole conference',
          sabbath: 'Visiting only on Sabbath and/or on workdays after 17:00'
        }
      },
      housing: {
        title: 'Housing',
        subtitle: 'We would also like to help you find accommodation easily for the time of the conference. We found the following possibilites that you can look up and arrange accomodation:',
        options: [
          {
            title: 'Opera Hostel:<br><small>1066 Budapest, Ó u. 13.</small>',
            subtitle: '<strong>3.840 HUF/person/1 night</strong>, multiple beds room (8 person), male or female'
          },
          {
            title: 'Avenue Hostel<br><small>1067 Budapest, Oktogon tér 4.</small>',
            subtitle: '<strong>3.000-4.000 HUF/person/1 night</strong>, multiple beds room (4-, 6-, 8 person), male or female'
          },
          {
            title: 'Broadway City Panzió<br><small>1066 Budapest, Nagymező u. 4.</small>',
            subtitle: '<strong>3.000-4.000 HUF/person/1 night</strong>, multiple beds room'
          },
          {
            title: 'Baraka Hostel<br><small>1073 Budapest, Erzsébet krt 1-3.</small>',
            subtitle: '<strong>3.000-4.000 HUF/person/1 night</strong>, multiple beds room'
          }
        ]
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
        description: 'Here you have the opportunity to donate by Funding Packages. Every package includes specially designed, FJK – marked products, pocket-book (more options) and Glow tracts. Choose one and support us!<br>Color of the items of your bundle (pick a color that you like):',
        small: 'Small: pocket-book (more options) + stickers/fridge magnet + Glow tracts',
        normal_1: 'Normal: pocket-book (more options) + stickers/fridge magnet + mug with spoon + drawstring bag',
        extra_1: 'Expanded I: pocket-book (more options) + stickers/fridge magnet + water bottle + drawstring bag\n',
        extra_2: 'Expanded II: pocket-book (more options) + stickers/fridge magnet + mug with spoon + shopping bag',
        extra_3: 'Expanded III: pocket-book (more options) + stickers/fridge magnet + mug with spoon + drawstring bag + power bank\n',
        '0': 'I pray for the Conference!',
        colors: {
          red: 'red (fire, purification, power)',
          green: 'green (growth, restart, renewal)',
          blue: 'blue (purity)'
        },
        hoodies: {
          title: 'Size: <a id="popover-men" rel="popover" data-content="" title="Men\'s t-shirt">men\'s t-shirt</a>, <a id="popover-women" rel="popover" data-content="" title="Women\'s t-shirt">women\'s t-shirt</a>, <a id="popover-menHoodySize" rel="popover" data-content="" title="Men\'s hoodies">men\'s hoodies</a> and <a id="popover-womenHoodySize" rel="popover" data-content="" title="Women\'s hoodies">women\'s hoodies</a>.',
          type: 'Type',
          size: 'Size',
          quantity: 'Quantity',
          shirts: {
            men: 'Men\'s T-Shirts (1250 Ft)',
            women: 'Women\'s T-Shirts (1250 Ft)',
            menHoody: 'Men\'s hoody (4000 Ft)',
            womenHoody: 'Women\'s hoody (4500 Ft)'
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
