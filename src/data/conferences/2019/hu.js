'use strict';

module.exports = {
  page: {
    regIsOn: Boolean(process.env.REG_IS_ON),
    year: 2019,
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
        url: '../../en/conferences/2019',
        text: 'EN'
      }
    }
  },
  content: {
    title: 'A helyreállított képmás - Igazi nevelés',
    dates: '2019. jan. 23–27.',
    location: 'Budapest',
    motto: '„Ha a szót annak legnemesebb értelmében vesszük, a nevelés munkája és a megváltás műve tulajdonképpen azonos...”<br>Ellen G. White (Nevelés)',
    speakers: {
      title: 'Előadók',
      speakers: [
        {
          img: '/img/ramos.jpg',
          name: 'Israel Ramos',
          description: 'Lelkész',
          bio: 'Israel Ramos lelkész, a Michigani Egyházterület egyetemistákért végzett szolgálatának igazgatója és a Lake Union koordinátora. Továbbá vezeti még a Michigan State Universitynek otthont adó East Lansingben az egyetemistákért végzett szolgálati központot is (CAMPUS). 2002-ben megalapította a GYC-t, mely fiatal adventista felnőttek számára jött létre, ennek később az elnöke is lett. Közel 20 éve végez szolgálatot az egyetemistákért misszionáriusként, lelkészként és gyülekezeti adminisztrátorként. Feleségével, Judyval három gyermekük van: Imanuel, Micah és Titus.'
        },
        {
          img: '/img/horvath-gabor.jpg',
          name: 'Horváth Gábor',
          description: 'Lelkész, zenepedagógus',
          bio: 'A nevem Horváth Gábor, egy Somogy megyei kis faluban, Nágocson élek feleségemmel és két kisfiammal. Az alapszakmám zenepedagógus (ütőhangszertanárként diplomáztam Debrecenben és végeztem mesterképzést Pécsett), de Isten arra vezetett, hogy az ütőhangszerek szeretetén túl többet is tehetnék másokért, így 1999-ben elhívást kaptam a Sola scriptura Lelkészképző iskola nappali szakára. 2002 óta dolgozom segédlelkészként és lelkészként, valamint 8 évre ifjúságvezetői szolgálatra is elhívást kaptam. Szolgálatom közben elvégeztem a SOTE addiktológiai konzultáns képzését és 2006 óta rendszeresen dolgozom alkohol- drog- és gyógyszerfüggők között. 2010-ben indult bentlakásos rehabilitációs programunk, ahol szakmai vezetőként igyekszem összefogni az itt folyó munkát (részletesen: www.alkoholbeteg.hu). Az elmúlt 10 évben számos általános és középiskolában, illetve táborban megfordultam és sok fiatalhoz kapcsolódhattam, hogy együtt gondolkodhassunk a függőség és a szabadulás kérdéséről. Szeptembertől nyertem felvételt az Hetednapi Adventista Egyház soraiba és folytathatom szolgálatomat a balatonlellei körzet lelkészeként.'
        }
      ]
    },
    seminars: {
      title: 'Szemináriumok',
      seminars: [
        {
          title: 'Függök tőle vagy szeretem? Mi a különbség?',
          speaker: 'Horváth Gábor',
          description: `Társfüggőség és egészséges kapcsolódás a Biblia mérlegén
      </p>

      <p>
        A szeminárium alatt feldolgozott témák a következők:
      </p>

      <p>
        <ol>
          <li><div>
            <p>Hogyan lesz valakiből társfüggő? Mi van akkor, ha én is az vagyok?</p>
            <p>Alapkapcsolódásaim számbavétele</p>
          </div></li>

          <li><div>
            <p>A társfüggőség két szélsősége és megjelenési formái</p>
            <p>Hol vannak a határaim, mennyire látom a másik határait?</p>
          </div></li>

          <li><div>
            <p>Az egészséges párkapcsolat jellemzői</p>
            <p>Alapozás egy életre szóló kapcsolathoz</p>
          </div></li>

          <li><div>
            <p>Hogyan szeretne Isten kapcsolódni hozzám?</p>
            <p>Stabil alapozás, stabil kapcsolatok</p>
        </div></li>
        </ol>`
        }
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
              time: '18:00-19:40',
              text: '<strong>Megnyitó plenáris előadás (Israel Ramos)</strong>'
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
              text: '<strong>Reggeli áhítat, imaalkalom (Marosán Réka)</strong>'
            },
            {
              time: '10:00-12:00',
              text: 'Szemináriumok'
            },
            {
              time: '12:00-13:00',
              text: 'Ebéd'
            },
            {
              time: '13:00-13:30',
              text: 'Kiállítások nyitva'
            },
            {
              time: '13:30-14:30',
              text: '<strong>Bizonyságtétel (Milan Moskala)</strong>'
            },
            {
              time: '14:30-15:00',
              text: 'Mozgás (fakultatív)'
            },
            {
              time: '15:00-17:00',
              text: 'Szemináriumok'
            },
            {
              time: '17:00-18:00',
              text: 'Vacsora'
            },
            {
              time: '18:00-19:30',
              text: '<strong>Plenáris előadás (Israel Ramos)</strong>'
            },
            {
              time: '19:30-20:30',
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
              text: '<strong>Reggeli áhítat, imaalkalom (Járai Zsolt)</strong>'
            },
            {
              time: '09:45-10:45',
              text: '<strong>Bizonyságtétel (Jonathan Ostrowski)</strong>'
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
              time: '14:00-16:30',
              text: '<strong>Missziós program</strong>'
            },
            {
              time: '17:00-18:00',
              text: 'Vacsora'
            },
            {
              time: '18:00-19:30',
              text: '<strong>Plenáris előadás (Israel Ramos)</strong>'
            },
            {
              time: '19:30-20:30',
              text: 'Kiállítások nyitva'
            }
          ]
        },
        sabbath: {
          name: 'Szombat',
          items: [
            {
              time: ' ',
              text: 'Személyes áhítat'
            },
            {
              time: '09:30-10:40',
              text: '<strong>Reggeli plenáris előadás</strong>'
            },
            {
              time: '11:00-12:30',
              text: '<strong>Istentisztelet (Israel Ramos)</strong>'
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
              text: '<strong>Plenáris előadás (Israel Ramos)</strong>'
            },
            {
              time: '19:30-20:30',
              text: 'Kiállítások nyitva'
            }
          ]
        },
        sunday: {
          name: 'Vasárnap',
          items: [
            {
              time: ' ',
              text: 'Személyes áhítat'
            },
            {
              time: '08:30-09:30',
              text: '<strong>Reggeli áhítat, imaalkalom (Kóczián Ági)</strong>'
            },
            {
              time: '09:45-11:30',
              text: '<strong>Záróplenáris (Israel Ramos)</strong>'
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
