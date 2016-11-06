'use strict';

module.exports = {
  page: {
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
      changeLang: {
        url: '../../../conferences/2016',
        text: 'HU'
      }
    }
  },
  content: {
    title: 'In Mission',
    dates: 'Jan 27–31, 2016',
    location: 'Budapest, Hungary',
    motto: 'Also I heard the voice of the Lord, saying,<br><i>Whom shall I send, and who will go for us?</i><br>Then said I <i>Here am I; send me.</i>”<br>Isa 6:8',
    speakers: {
      title: 'Speakers',
      speakers: [
        {
          img: '/img/doug-batchelor.jpg',
          name: 'Doug Batchelor',
          description: 'Lelkész, média misszionárius',
          bio: 'Doug Batchelor az Amazing Facts szervezet elnöke és előadója, valamint a kaliforniai Granite Bay Adventista gyülekezet lelkésze. Bibliai témájú TV műsora minden nap látható a amerikai kábeltelevíziós csatornákon, illetve műhold segítségével az egész világon. Házigazdája a Bible Answers Live (Bibliai válaszok Élőben) betelefonálós rádióprogramnak. Ez az adás minden vasárnap este hallgatható Észak-Amerika egész területén. Számos cikk és könyv szerzője. Doug a mély lelkiség és látás embere, mégis gyakorlatias hozzáállása és spontán humora révén képes arra, hogy keresztények és nem hívő közönséghez egyaránt szóljon. Szeret repülni, búvárkodni, quadot vezetni és gitározni. Feleségével, Karennel öt gyermekük van.'
        }
      ]
    },
    seminars: {
      title: 'Seminars',
      seminars: [
        {
          title: 'Bibliai kérdések és válaszok',
          speaker: 'Doug Batchelor',
          description: 'Szembesültél már olyan kérdésekkel a Bibliából, amire nem tudtál válaszolni? Foglalkoztat egy kérdés, és szeretnéd tudni, mi Isten Igéjének a válasza rá? <br> Doug Batchelor a Bible Answers Live! - bibliai kérdésekkel foglalkozó rádióműsor házigazdája. Most Magyarországon először, személyesen tehetjük fel a kérdéseinket, és kereshetjük együtt a Biblia pontos válaszát.'
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
              text: 'Regisztráció'
            },
            {
              time: '18:00-19:30',
              text: '<strong>Opening Plenary (Pastor Doug Batchelor)</strong>'
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
              time: '07:00-07:30',
              text: 'Morning exercise'
            },
            {
              time: '08:30-09:30',
              text: '<strong>Morning devotional, small groups session (Dániel Varga)</strong>'
            },
            {
              time: '09:45-10:45',
              text: '<strong>Testimony (Gábor Horváth)</strong>'
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
              time: '14:00-14:30',
              text: 'Break, FJK Choir Rehearsal'
            },
            {
              time: '14:30-16:30',
              text: 'Seminars'
            },
            {
              time: '16:30-17:00',
              text: 'Break, FJK Choir Rehearsal'
            },
            {
              time: '17:00-18:00',
              text: 'Supper'
            },
            {
              time: '18:00-19:30',
              text: '<strong>Plenary (Pastor Doug Batchelor)</strong>'
            },
            {
              time: '19:30-21:00',
              text: 'Exhibits open'
            }
          ]
        },
        friday: {
          name: 'Péntek',
          items: [
            {
              time: ' ',
              text: 'Personal devotions'
            },
            {
              time: '07:00-07:30',
              text: 'Morning exercise'
            },
            {
              time: '08:30-09:30',
              text: '<strong>Morning devotional, small groups session (Domján Marcell)</strong>'
            },
            {
              time: '09:45-10:45',
              text: '<strong>Testimony (Jan-Harry Cabungcal)</strong>'
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
              time: '14:00-17:00',
              text: '<strong>Outreach</strong>'
            },
            {
              time: '17:00-18:00',
              text: 'Supper'
            },
            {
              time: '18:00-19:30',
              text: '<strong>Plenary (Pastor Doug Batchelor)</strong>'
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
              text: '<strong>Sabbath School (Jan-Harry Cabungcal)</strong>'
            },
            {
              time: '11:00-12:30',
              text: '<strong>Divine service (Pastor Doug Batchelor)</strong>'
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
              text: '<strong>Plenary (Pastor Doug Batchelor)</strong>'
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
              time: '07:00-07:30',
              text: 'Morning exercise'
            },
            {
              time: '08:30-09:30',
              text: '<strong>Morning devotional, small groups session (Kamill Farkas)</strong>'
            },
            {
              time: '09:45-11:30',
              text: '<strong>Closing plenary (Jan Harry Cabungcal)</strong>'
            }
          ]
        }
      }
    },
    venue: {
      title: 'Venue',
      name: 'Dürer Rendezvényház',
      address: '1146 Budapest, Ajtósi Dürer sor 19-21',
      description: {
        showOnMap: 'Show it on a map',
        text: 'The conference will take place at the <a href="http://durerhaz.hu/" target="_blank">Dürer Rendezvényház</a>, a modern cultural complex in Pest next to the Városliget, with excellent public transport accessibility.'
      }
    }
  }
};
