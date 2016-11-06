'use strict';

module.exports = {
  page: {
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
      changeLang: {
        url: '../../en/conferences/2016',
        text: 'EN'
      }
    }
  },
  content: {
    title: 'Küldetésben',
    dates: '2016. jan. 27–31.',
    location: 'Budapest',
    motto: '„És hallám az Úrnak szavát, aki ezt mondja vala:<br><i>Kit küldjek el és ki megyen el nékünk?</i><br>Én pedig mondék: <i>Ímhol vagyok én, küldj el engemet!</i>”<br>Ézs 6:8',
    speakers: {
      title: 'Előadók',
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
      title: 'Szemináriumok',
      seminars: [
        {
          title: 'Bibliai kérdések és válaszok',
          speaker: 'Doug Batchelor',
          description: 'Szembesültél már olyan kérdésekkel a Bibliából, amire nem tudtál válaszolni? Foglalkoztat egy kérdés, és szeretnéd tudni, mi Isten Igéjének a válasza rá? <br> Doug Batchelor a Bible Answers Live! - bibliai kérdésekkel foglalkozó rádióműsor házigazdája. Most Magyarországon először, személyesen tehetjük fel a kérdéseinket, és kereshetjük együtt a Biblia pontos válaszát.'
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
              time: '18:00-19:30',
              text: '<strong>Megnyitó plenáris előadás (Doug Batchelor)</strong>'
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
              time: '07:00-07:30',
              text: 'Reggeli torna'
            },
            {
              time: '08:30-09:30',
              text: '<strong>Reggeli áhítat, kiscsoportos beszélgetések (Varga Dániel)</strong>'
            },
            {
              time: '09:45-10:45',
              text: '<strong>Bizonyságtétel (Horváth Gábor)</strong>'
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
              time: '14:00-14:30',
              text: 'Szünet, FJK kóruspróba'
            },
            {
              time: '14:30-16:30',
              text: 'Szemináriumok'
            },
            {
              time: '16:30-17:00',
              text: 'Szünet, FJK kóruspróba'
            },
            {
              time: '17:00-18:00',
              text: 'Vacsora'
            },
            {
              time: '18:00-19:30',
              text: '<strong>Plenáris előadás (Doug Batchelor)</strong>'
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
              time: '07:00-07:30',
              text: 'Reggeli torna'
            },
            {
              time: '08:30-09:30',
              text: '<strong>Reggeli áhítat, kiscsoportos beszélgetések (Domján Marcell)</strong>'
            },
            {
              time: '09:45-10:45',
              text: '<strong>Bizonyságtétel (Jan-Harry Cabungcal)</strong>'
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
              time: '14:00-17:00',
              text: '<strong>Missziós program</strong>'
            },
            {
              time: '17:00-18:00',
              text: 'Vacsora'
            },
            {
              time: '18:00-19:30',
              text: '<strong>Plenáris előadás (Doug Batchelor)</strong>'
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
              text: '<strong>Szombatiskola (Jan-Harry Cabungcal)</strong>'
            },
            {
              time: '11:00-12:30',
              text: '<strong>Istentisztelet (Doug Batchelor)</strong>'
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
              text: '<strong>Plenáris előadás (Doug Batchelor)</strong>'
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
              time: ' ',
              text: 'Személyes áhítat'
            },
            {
              time: '07:00-07:30',
              text: 'Reggeli torna'
            },
            {
              time: '08:30-09:30',
              text: '<strong>Reggeli áhítat, kiscsoportos beszélgetések (Farkas Kamill)</strong>'
            },
            {
              time: '09:45-11:30',
              text: '<strong>Záróplenáris (Jan-Harry Cabungcal)</strong>'
            }
          ]
        }
      }
    },
    venue: {
      title: 'Helyszín',
      name: 'Dürer Rendezvényház',
      address: '1146 Budapest, Ajtósi Dürer sor 19-21',
      description: {
        showOnMap: 'Mutasd térképen',
        text: 'Az előzetesen regisztrálók magas száma miatt új helyszínt kellett választanunk az idei konferenciának, ami a 2011-ben felújított kulturális központban, a <a href="http://durerhaz.hu/" target="_blank">Dürer Rendezvényházban</a> lesz. A Városliget szomszédságában lévő terület könnyen megközelíthető tömegközlekedéssel, az autók számára parkolóhely biztosított.'
      }
    }
  }
};
