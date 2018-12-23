'use strict';

module.exports = {
  page: {
    regIsOn: Boolean(process.env.REG_IS_ON),
    year: 2019,
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
        url: '../../../conferences/2019',
        text: 'HU'
      }
    }
  },
  content: {
    title: 'The image restored - True education',
    dates: 'Jan 23–27, 2019',
    location: 'Budapest, Hungary',
    motto: '„In the highest sense the work of education and the work of redemption are one...”<br>Ellen G. White (Education)',
    speakers: {
      title: 'Speakers',
      speakers: [
        {
          img: '/img/ramos.jpg',
          name: 'Israel Ramos',
          description: 'Pastor',
          bio: 'Pastor Israel Ramos serves as the Director and Coordinator of the Public Campus Ministries Department for the Michigan Conference and Lake Union, respectively. He is also the Director of the Center for Adventist Ministry to Public University Students (CAMPUS) in East Lansing, home of Michigan State University.  In 2002 he founded and served as president of GYC—a global grassroots movement for Adventist young adults. For nearly 20 years, he has served in public campus ministry as a missionary, chaplain, pastor, and church administrator. He and his wife Judy have three young sons: Imanuel, Micah, and Titus.'
        },
        {
          img: '/img/horvath-gabor.jpg',
          name: 'Gábor Horváth',
          description: 'Pastor, music instructor',
          bio: 'My name is Gábor Horváth. I come from a village called Nágocs, located in the Somogy county with my wife and two sons. My original profession is a music teacher (I got my diploma as a percussion instrument teacher in Debrecen and got my master’s degree in Pécs), but God led me to realize, that beyond my love for percussion instruments I can to more to others, so I was called in 1999 to study at the Sola Scriptura Theological School. I am working as a supporting pastor and a pastor since 2002, and I was also called to be a youth leader for 8 years. During my service I have finished an addiction consultant training at Semmelweis University and since 2006 I regularly work among alcohol, drug and medicine addicts. Our residential rehabilitation program started in 2010, where as a professional leader I try to look over the work done there (find out more at <a href="http://www.alkoholbeteg.hu/" target="_blank">www.alkoholbeteg.hu</a>). In the last 10 years, I have visited many primary and secondary schools as well as camps, and I have made connections with many young people, in order to think together about the questions of addiction and breaking free. I have joined the Seventh - day Adventist church this September and continue my service as a pastor in the area of Balatonlelle.'
        }
      ]
    },
    seminars: {
      title: 'Seminars',
      seminars: [
        {
          title: 'Codependency or love? What’s the difference?',
          speaker: 'Gábor Horváth',
          description: `Codependency and healthy relationships in the light of the Bible
      </p>

      <p>
        The covered topics of the seminar will be:
      </p>

      <p>
        <ol>
          <li><div>
            <p>Codependency and healthy relationships in the light of the Bible</p>
            <p>Basic relationships</p>
          </div></li>

          <li><div>
            <p>Two extremities of codependency and their characteristics</p>
            <p>Where are my boundaries? How can I see others’ boundaries?</p>
          </div></li>

          <li><div>
            <p>Characteristics of a healthy relationship</p>
            <p>Basics of a lifelong relationship</p>
          </div></li>

          <li><div>
            <p>How does God want to relate to me?</p>
            <p>Solid foundations, solid relationships</p>
        </div></li>
        </ol>`
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
              time: '18:00-19:40',
              text: '<strong>Opening Plenary (Israel Ramos)</strong>'
            },
            {
              time: '19:30-20:30',
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
              text: '<strong>Morning Devotion, Prayer-time (Réka Marosán)</strong>'
            },
            {
              time: '10:00-12:00',
              text: 'Seminars'
            },
            {
              time: '12:00-13:00',
              text: 'Lunch'
            },
            {
              time: '13:00-13:30',
              text: 'Exhibits open'
            },
            {
              time: '13:30-14:30',
              text: 'Testimony (Milan Moskala)'
            },
            {
              time: '14:30-15:00',
              text: 'Exercise (optional)'
            },
            {
              time: '15:00-17:00',
              text: 'Seminars'
            },
            {
              time: '17:00-18:00',
              text: 'Supper'
            },
            {
              time: '18:00-19:30',
              text: '<strong>Plenary (Israel Ramos)</strong>'
            },
            {
              time: '19:30-20:30',
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
              text: '<strong>Morning devotional (Zsolt Járai)</strong>'
            },
            {
              time: '09:45-10:45',
              text: '<strong>Testimony (Jonathan Ostrowski)</strong>'
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
              time: '14:00-16:30',
              text: '<strong>Outreach</strong>'
            },
            {
              time: '17:00-18:00',
              text: 'Supper'
            },
            {
              time: '18:00-19:30',
              text: '<strong>Plenary (Israel Ramos)</strong>'
            },
            {
              time: '19:30-20:30',
              text: 'Exhibits open'
            }
          ]
        },
        sabbath: {
          name: 'Sabbath',
          items: [
            {
              time: ' ',
              text: 'Personal devotions'
            },
            {
              time: '09:30-10:40',
              text: '<strong>Morning plenary</strong>'
            },
            {
              time: '11:00-12:30',
              text: '<strong>Divine service (Israel Ramos)</strong>'
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
              text: '<strong>Plenary (Israel Ramos)</strong>'
            },
            {
              time: '19:30-20:30',
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
              text: '<strong>Morning devotional (Ágnes Kóczián)</strong>'
            },
            {
              time: '09:45-11:30',
              text: '<strong>Closing plenary (Israel Ramos)</strong>'
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
