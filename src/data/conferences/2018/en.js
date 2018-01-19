'use strict';

module.exports = {
  page: {
    regIsOn: Boolean(process.env.REG_IS_ON),
    year: 2018,
    home: 'https://fjk.hu/en',
    title: 'Fiatalok Jézusért Konferencia',
    assetsPath: '../../../assets',
    nav: {
      hero: {
        url: '#hero',
        text: 'Theme'
      },
      speakers: {
        url: '#speakers',
        text: 'Speakers'
      },
      seminars: {
        url: '#seminars',
        text: 'Seminars'
      },
      schedule: {
        url: '#schedule',
        text: 'Schedule'
      },
      venue: {
        url: '#venue',
        text: 'Venue'
      },
      registration: {
        url: '#registration',
        text: 'Registration'
      },
      changeLang: {
        url: '../../../conferences/2018',
        text: 'HU'
      }
    }
  },
  content: {
    title: 'By faith',
    dates: 'Jan 24–28, 2018',
    location: 'Budapest, Hungary',
    motto: '„Who through faith subdued kingdoms, wrought righteousness, obtained promises”<br>Heb 11:33',
    speakers: {
      title: 'Speakers',
      speakers: [
        {
          img: '/img/mcnulty.jpg',
          name: 'Norman McNulty, MD',
          description: 'Neurologist',
          bio: "Norman McNulty, MD, is a board-certified neurologist practicing in Lawrenceburg, TN in the United States of America. Prior to starting his neurology practice in Lawrenceburg, he served for two years as a missionary at the Adventist hospital in Trinidad in the Southern Caribbean. He served in senior leadership capacities of Advent HOPE Sabbath School and Southwest Youth Conference while in Loma Linda, California. He completed medical school and a neurology residency at Loma Linda University. He enjoys studying and speaking about Adventism's prophetic message and mission in his free time and travels throughout the world to speak on these topics. He is married to Joelle, and they have three daughters, Saralyn, Anneke, and Madeline."
        },
        {
          img: '/img/ernst.jpg',
          name: 'Nelson Ernst',
          description: 'GLOW Director',
          bio: "After being converted to Christ by a Jehovah’s Witness, Nelson Ernst started a ministry when he was 22. That ministry has printed nearly 93 million tracts in 75 languages globally—it’s called GLOW.  Nelson is now the director of this ministry based in California at the Pacific Union. As part of his job he has organized and led several million-tract distribution efforts and shares exciting front line stories from these outreaches as well as tips on how to begin your own personal ministry to reach 1,000 people every year."
        },
        {
          img: '/img/blanchard.png',
          name: 'Gary Blanchard',
          description: 'World Youth Director',
          bio: 'Pastor Gary has served as a Bible teacher, chaplain, youth pastor, district pastor and most recently as the Texas Conference Youth Director. He loves seeing young people “rightly trained” and empowered to be God’s army of youth. Gary has traveled around the world preaching the Three Angels Message and inspiring young people to do the same. Pastor Gary’s gifts are encouragement, preaching and leadership and he daily seeks to “walk in the Spirit” so that he can be a contagious reflector of Christ. He enjoys long walks in the woods, reading the Bible, going on dates with his wife and talking with God. Pastor Gary and his wife Erica have three young adult children (Gary, Ben and Sierra)"'
        },
        {
          img: '/img/musija.png',
          name: 'Zlatko Musija',
          description: 'Trans-European Division Youth Director',
          bio: 'Zlatko Musija is a member of youth ministry team for the Trans-European Division of Seventh-Day Adventists. Zlatko grew up in Croatia where he served until recently as a pastor, teacher, youth director and president. He enjoys opening the Bible with youth and others, inspiring and equipping them to live a transformed life of mission and service. His passion is to help all generations in the Church grow and thrive, encouraged and supported by each other. Zlatko is husband and father of two, and loves spending time in nature – hiking and beholding the beauty of the created world.'
        }

      ]
    },
    seminars: {
      title: 'Seminars',
      seminars: [
        {
          title: "Revelation's Sanctuary Theme",
          speaker: 'Norman McNulty, MD',
          description: ''
        },
        {
          title: 'No Faith in Laodicea',
          speaker: 'Norman McNulty, MD',
          description: ''
        },
        {
          title: 'The Purpose of Adventism',
          speaker: 'Norman McNulty, MD',
          description: ''
        },
        {
          title: 'Three Angels, the Faith of Jesus, and the Loud Cry',
          speaker: 'Norman McNulty, MD',
          description: ''
        },
        {
          title: 'Why Church can be Boring',
          speaker: 'Nelson Ernst',
          description: ''
        },
        {
          title: 'How to Fit Doug Batchelor in Your Pocket',
          speaker: 'Nelson Ernst',
          description: ''
        },
        {
          title: 'I Gave Out 1 Million Tracts. You Can Too.',
          speaker: 'Nelson Ernst',
          description: ''
        },
        {
          title: 'How to Reach Out to Jehovah’s Witnesses',
          speaker: 'Nelson Ernst',
          description: ''
        },
        {
          title: 'One year in mission challenge',
          speaker: 'Gary Blanchard',
          description: ''
        },
        {
          title: 'Get lit!',
          speaker: 'Gary Blanchard',
          description: ''
        },
        {
          title: 'The Journey of Faith – Steps to Extraordinary Faith',
          speaker: 'Zlatko Musija',
          description: 'Biblical story about faith development; about our wonderful God who is patiently helping us to develop extraordinary faith that will be a blessing to us and others!'
        }
      ]
    },
    schedule: {
      title: 'Schedule',
      booklet: {
        link: '/files/schedule.pdf',
        text: 'Download the booklet in pdf format.'
      },
      schedule: {
        wednesday: {
          name: 'Wednesday',
          items: [
            {
              time: '15:00-18:00',
              text: 'Registration'
            },
            {
              time: '19:15-20:30',
              text: '<strong>Opening Plenary (Norman McNulty)</strong>'
            },
            {
              time: '19:30-21:00',
              text: 'Exhibits open'
            }
          ]
        },
        thursday: {
          name: 'Thursday',
          items: [
            {
              time: ' ',
              text: 'Personal devotions'
            },
            {
              time: '08:30-09:30',
              text: '<strong>Morning devotional (Péter Erdődi)</strong>'
            },
            {
              time: '09:45-10:45',
              text: '<strong>Testimony (Manuel Iberico)</strong>'
            },
            {
              time: '11:00-13:00',
              text: 'Seminars'
            },
            {
              time: '13:00-14:00',
              text: 'Lunch'
            },
            {
              time: '13:00-14:30',
              text: 'Exhibits open'
            },
            {
              time: '14:30-16:30',
              text: 'Seminars'
            },
            {
              time: '17:00-18:00',
              text: 'Supper'
            },
            {
              time: '18:00-19:30',
              text: '<strong>Plenary (Norman McNulty)</strong>'
            },
            {
              time: '19:30-21:00',
              text: 'Exhibits open'
            }
          ]
        },
        friday: {
          name: 'Friday',
          items: [
            {
              time: ' ',
              text: 'Personal devotions'
            },
            {
              time: '08:30-09:30',
              text: '<strong>Morning devotional (Ádám Cserpán)</strong>'
            },
            {
              time: '09:45-10:45',
              text: '<strong>Testimony (Nelson Ernst)</strong>'
            },
            {
              time: '11:00-13:00',
              text: 'Seminars'
            },
            {
              time: '13:00-14:00',
              text: 'Lunch'
            },
            {
              time: '13:00-14:00',
              text: 'Exhibits open'
            },
            {
              time: '14:00-16:30',
              text: '<strong>Outreach</strong>'
            },
            {
              time: '17:00-18:00',
              text: 'Supper'
            },
            {
              time: '18:00-19:30',
              text: '<strong>Plenary (Norman McNulty)</strong>'
            },
            {
              time: '19:30-21:00',
              text: 'Exhibits open'
            }
          ]
        },
        sabbath: {
          name: 'Sabbath',
          items: [
            {
              time: '09:30-10:40',
              text: '<strong>Morning plenary (Zlatko Musija)</strong>'
            },
            {
              time: '11:00-12:30',
              text: '<strong>Divine service (Gary Blanchard)</strong>'
            },
            {
              time: '13:00-14:00',
              text: 'Lunch'
            },
            {
              time: '14:30-16:30',
              text: 'Seminars'
            },
            {
              time: '17:00-18:00',
              text: 'Supper'
            },
            {
              time: '18:00-19:30',
              text: '<strong>Plenary (Norman McNulty)</strong>'
            },
            {
              time: '19:30-21:00',
              text: 'Exhibits open'
            }
          ]
        },
        sunday: {
          name: 'Sunday',
          items: [
            {
              time: ' ',
              text: 'Personal devotions'
            },
            {
              time: '08:30-09:30',
              text: '<strong>Morning devotional (Kristóf Palotás)</strong>'
            },
            {
              time: '09:45-11:30',
              text: '<strong>Closing plenary (Gary Blanchard)</strong>'
            }
          ]
        }
      }
    },
    venue: {
      title: 'Venue',
      name: 'Budapest Central SDA Church',
      address: '1062 Budapest, Székely Bertalan u. 13',
      description: {
        showOnMap: {
          url: 'https://www.google.hu/maps/place/Adventista+Egyh%C3%A1z/@47.5124065,19.0686943,17z/data=!3m1!4b1!4m5!3m4!1s0x4741dc76a3e9f379:0xe2e25891ed49b993!8m2!3d47.5124065!4d19.0686943',
          text: 'Show it on a map'
        },
        text: 'On weekdays and on Sunday, the Conference will take place in the Central Church of Budapest.'
      },
      pics: [
        '/img/gyulkep.jpg',
        '/img/gyulkep-2.jpg',
        '/img/gyulkep-3.jpg'
      ]
    },
    sabbathVenue: {
      title: 'Venue',
      name: 'On Sabbath: Rhema Conference Center',
      address: '1089 Budapest, Golgota u. 9',
      description: {
        showOnMap: {
          url: 'https://goo.gl/maps/LSvEFgh2sQ32'
,
          text: 'Show it on a map'
        },
        text: 'The conference will take place at the <a href="http://rhemacenter.hu/indexen.html" target="_blank">Rhema Conference Center</a>, where we had several occasions before as well.'
      },
      pics: [
        '/img/rhema_1.jpg',
        '/img/rhema_2.jpg',
        '/img/rhema_3.jpg'
      ]
    },
    registration: {
      url: '../../registration',
      text: 'Register today!'
    }
  }
};
