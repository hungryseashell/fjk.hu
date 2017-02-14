'use strict';

module.exports = {
  page: {
    regIsOn: Boolean(process.env.REG_IS_ON),
    live: {
      isOn: Boolean(process.env.LIVE_IS_ON),
      url: './live',
      cta: 'Go watch live!'
    },
    mini: {
      isOn: false
    },
    home: 'https://fjk.hu/en',
    title: 'Youth for Jesus Conference',
    assetsPath: '../assets',
    nav: {
      nextYear: {
        url: './conferences/2017',
        text: 'In 2017'
      },
      spirit: {
        url: '#spirit',
        text: 'Spirit'
      },
      leadership: {
        url: '#leadership',
        text: 'Leadership'
      },
      changeLang: {
        url: '../',
        text: 'HU'
      }
    }
  },
  content: {
    bio: "<span>FJK</span> is an Adventist conference organized by young people for young people. On <span>this yearly occasion</span> the attendees are encouraged by sermons, seminars and meeting opportunities to <span>renew their faith</span>, to reform their lives, and to <span>actively</span> support the Seventh-day Adventist Church, so the <span>Three Angel's Message</span> can reach to the whole world during this generation.",
    spirit: {
      title: 'Spirit of FJK',
      subtitle: 'In seeking to uphold the distinctive message of the Seventh-day Adventist Church, FJK will promote among its participants:',
      items: [
        {
          title: 'A respect for Scripture',
          subtitle: 'as the foundation and test of all teachings and practices.'
        },
        {
          title: 'An appreciation for the Spirit of Prophecy',
          subtitle: 'as an authoritative source of instruction, comfort, and warning.'
        },
        {
          title: 'A quest for Biblical holiness',
          subtitle: 'through a daily prayer and devotional experience with Jesus and a commitment to following His Word.'
        },
        {
          title: 'A vibrant worship experience',
          subtitle: 'one that is characterized by principle, reverence, and decorum.'
        },
        {
          title: 'A passion for lost',
          subtitle: 'souls animated by personal experience in the saving love of Jesus and a desire for His imminent return.'
        },
        {
          title: 'A cultivation of godly relationships',
          subtitle: 'preserving purity and encouraging accountability.'
        },
        {
          title: 'An exemplary and abundant lifestyle',
          subtitle: 'in recreation, entertainment, dress, and healthful living.'
        },
        {
          title: 'An enthusiasm for service',
          subtitle: 'through care for the needy, service to the community, promotion of human rights, and stewardship of the environment.'
        },
        {
          title: 'A commitment to the Seventh-day Adventist Church',
          subtitle: 'as God’s remnant church by supporting and upholding its principles, organization, and leadership.'
        },
        {
          title: 'An attitude of humility and cordiality',
          subtitle: 'as we seek to clarify, articulate, and defend the Biblical teachings of the Seventh-day Adventist church.'
        }
      ]

    },
    leadership: {
      title: 'Leadership',
      ecom: {
        title: 'Executive Committee',
        members: [
          'Enikő Szőllősi <em>president</em>',
          'János Rajki <em>secretary</em>',
          'Judit Döbrei-Rakonczai <em>treasurer</em>',
          'Csilla Farkas',
          'Dávid Rárósi',
          'Eszter Tóth'
        ]
      },
      board: {
        title: 'Board of Directors',
        members: [
          'András Ambrus',
          'Zoltán Ambrus',
          'László Bácsi',
          'Károly Csengei',
          'Róbert Csizmadia',
          'Péter Erdődi',
          'Kamill Farkas',
          'Melinda Farkasné Rajki',
          'Orsolya Németh-Ambrus',
          'István Matus',
          'Boglárka Mészáros',
          'Sándor Ócsai',
          'Zoltán Szallós-Farkas'
        ]
      },
      departments: {
        title: 'Departments',
        members: [
          { dep: 'Communication ', name: 'Eszter Tóth' },
          { dep: 'Logistics ', name: 'Judit Döbrei-Rakonczai' },
          { dep: 'Media ', name: 'Gábor Döbrei' },
          { dep: 'Evangelism ', name: 'Dávid Rárósi' },
          { dep: 'Programming ', name: 'Csilla Farkas' }
        ]
      }
    },
    registration: {
      url: './en/registration',
      text: 'Register to the Conference of 2017'
    }
  }
};
