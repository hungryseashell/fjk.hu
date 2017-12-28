'use strict';

module.exports = {
  page: {
    regIsOn: Boolean(process.env.REG_IS_ON),
    year: 2018,
    home: 'https://fjk.hu',
    title: 'Fiatalok Jézusért Konferencia',
    assetsPath: '../../assets',
    nav: {
      hero: {
        url: '#hero',
        text: 'Téma'
      },
      speakers: {
        url: '#speakers',
        text: 'Előadók'
      },
      seminars: {
        url: '#seminars',
        text: 'Szemináriumok'
      },
      schedule: {
        url: '#schedule',
        text: 'Program'
      },
      venue: {
        url: '#venue',
        text: 'Helyszín'
      },
      registration: {
        url: '#registration',
        text: 'Regisztráció'
      },
      changeLang: {
        url: '../../en/conferences/2018',
        text: 'EN'
      }
    }
  },
  content: {
    title: 'Hit által',
    dates: '2018. jan. 24–28.',
    location: 'Budapest',
    motto: '„Akik hit által országokat gyõztek le, igazságot cselekedtek, az ígéreteket elnyerték”<br>Zsid 11:33',
    speakers: {
      title: 'Előadók',
      speakers: [
        {
          img: '/img/mcnulty.jpg',
          name: 'Dr. Norman McNulty',
          description: 'Ideggyógyász',
          bio: 'Dr. Norman McNulty ideggyógyász, munkáját a Tennessee állambeli Lawrenceburgben végzi. Lawrenceburgi praxisa előtt két évig a dél-karibi Trinidadban volt misszionárius egy adventista kórházban. Kaliforniában Loma Lindán az Advent HOPE Sabbath School és a Southwest Ifjúsági Konferencia vezetőjeként szolgált. Orvosi tanulmányait a Loma Linda Egyetemen végezte, rezidensként is itt dolgozott. Norman szabadidejében szívesen tanulmányozza az adventizmus prófétai üzenetét és küldetését, utazik a világ minden tájára, hogy erről beszélhessen. Feleségével, Joellel három gyermekük van: Saralyn, Anneke és Madeline.'
        },
        {
          img: '/img/ernst.jpg',
          name: 'Nelson Ernst',
          description: 'GLOW igazgató',
          bio: 'Nelsont fiatal korában először egy Jehova tanúja vezette Krisztushoz, ma az Adventista Egyház tagjaként szolgál.<br>22 évesen indította el a GLOW missziós szolgálatot, ami mára közel 93 millió füzetet nyomtatott ki világszerte 75 nyelven. A kaliforniai székhelyű szervezet igazgatójaként munkája során számos programot szervezett, amikor milliós példányszámban terjesztették a füzeteket. Lelkesítő tapasztalatainak megosztása mellett tanácsokkal segít bennünket, hogyan kezdhetjük el személyes szolgálatunkat, amelyen keresztül 1000 embert érhetünk el minden évben.'
        }
      ]
    },
    seminars: {
      title: 'Szemináriumok',
      tba: 'Hamarosan...',
      seminars: [
      ]
    },
    schedule: {
      title: 'Program',
      booklet: {
        link: '/files/program.pdf',
        text: 'Töltsd le a programot pdf-ben.'
      },
      schedule: {
        wednesday: {
          name: 'Szerda',
          items: [
            {
              time: '15:00-18:00',
              text: 'Regisztráció'
            },
            {
              time: '18:30-20:00',
              text: '<strong>Megnyitó plenáris előadás (Norman McNulty)</strong>'
            },
            {
              time: '19:30-21:00',
              text: 'Kiállítások nyitva'
            }
          ]
        },
        thursday: {
          name: 'Csütörtök',
          items: [
            {
              time: ' ',
              text: 'Személyes áhítat'
            },
            {
              time: '08:30-09:30',
              text: '<strong>Reggeli áhítat, imaalkalom (Erdődi Péter)</strong>'
            },
            {
              time: '09:45-10:45',
              text: '<strong>Bizonyságtétel (Manuel Iberico)</strong>'
            },
            {
              time: '11:00-13:00',
              text: 'Szemináriumok'
            },
            {
              time: '13:00-14:00',
              text: 'Ebéd'
            },
            {
              time: '13:00-14:30',
              text: 'Kiállítások nyitva'
            },
            {
              time: '14:30-16:30',
              text: 'Szemináriumok'
            },
            {
              time: '17:00-18:00',
              text: 'Vacsora'
            },
            {
              time: '18:00-19:30',
              text: '<strong>Plenáris előadás (Norman McNulty)</strong>'
            },
            {
              time: '19:30-21:00',
              text: 'Kiállítások nyitva'
            }
          ]
        },
        friday: {
          name: 'Péntek',
          items: [
            {
              time: ' ',
              text: 'Személyes áhítat'
            },
            {
              time: '08:30-09:30',
              text: '<strong>Reggeli áhítat, imaalkalom (Cserpán Ádám)</strong>'
            },
            {
              time: '09:45-10:45',
              text: '<strong>Bizonyságtétel (Nelson Ernst)</strong>'
            },
            {
              time: '11:00-13:00',
              text: 'Szemináriumok'
            },
            {
              time: '13:00-14:00',
              text: 'Ebéd'
            },
            {
              time: '13:00-14:00',
              text: 'Kiállítások nyitva'
            },
            {
              time: '14:00-16:30',
              text: '<strong>Missziós program</strong>'
            },
            {
              time: '17:00-18:00',
              text: 'Vacsora'
            },
            {
              time: '18:00-19:30',
              text: '<strong>Plenáris előadás (Norman McNulty)</strong>'
            },
            {
              time: '19:30-21:00',
              text: 'Kiállítások nyitva'
            }
          ]
        },
        sabbath: {
          name: 'Szombat',
          items: [
            {
              time: '09:30-10:40',
              text: '<strong>Reggeli plenáris előadás (Zlatko Musija)</strong>'
            },
            {
              time: '11:00-12:30',
              text: '<strong>Istentisztelet (Gary Blanchard)</strong>'
            },
            {
              time: '13:00-14:00',
              text: 'Ebéd'
            },
            {
              time: '14:30-16:30',
              text: 'Szemináriumok'
            },
            {
              time: '17:00-18:00',
              text: 'Vacsora'
            },
            {
              time: '18:00-19:30',
              text: '<strong>Plenáris előadás (Norman McNulty)</strong>'
            },
            {
              time: '19:30-21:00',
              text: 'Kiállítások nyitva'
            }
          ]
        },
        sunday: {
          name: 'Vasárnap',
          items: [
            {
              time: '08:30-09:30',
              text: '<strong>Reggeli áhítat, imaalkalom (Palotás Kristóf)</strong>'
            },
            {
              time: '09:45-11:30',
              text: '<strong>Záróplenáris (Gary Blanchard)</strong>'
            }
          ]
        }
      }
    },
    venue: {
      title: 'Helyszín',
      name: 'Terézvárosi Adventista Gyülekezet',
      address: '1062 Budapest, Székely Bertalan u. 13',
      description: {
        showOnMap: {
          url: 'https://www.google.hu/maps/place/Adventista+Egyh%C3%A1z/@47.5124065,19.0686943,17z/data=!3m1!4b1!4m5!3m4!1s0x4741dc76a3e9f379:0xe2e25891ed49b993!8m2!3d47.5124065!4d19.0686943',
          text: 'Mutasd térképen'
        },
        text: 'Hétköznap és vasárnap a Budapest Terézvárosi Adventista Gyülekezet lesz a Konferencia helyszíne.'
      },
      pics: [
        '/img/gyulkep.jpg',
        '/img/gyulkep-2.jpg',
        '/img/gyulkep-3.jpg'
      ]
    },
    sabbathVenue: {
      title: 'Helyszín',
      name: 'Szombaton: Rhema Konferencia Központ',
      address: '1089 Budapest, Golgota u. 9',
      description: {
        showOnMap: {
          url: 'https://goo.gl/maps/LSvEFgh2sQ32',
          text: 'Mutasd térképen'
        },
        text: 'A Konferencia szombati helyszíne idén először a <a href="http://rhemacenter.hu/" target="_blank">Golgota utcai gyülekezet</a> lesz, amely már számos egyházi rendezvényünknek adott otthont.'
      },
      pics: [
        '/img/rhema_1.jpg',
        '/img/rhema_2.jpg',
        '/img/rhema_3.jpg'
      ]
    },
    registration: {
      url: '../../registration',
      text: 'Regisztrálj még ma!'
    }
  }
};
