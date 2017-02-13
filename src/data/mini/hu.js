'use strict';

module.exports = {
  page: {
    regIsOn: Boolean(process.env.REG_IS_ON),
    year: 2017,
    home: 'https://fjk.hu',
    title: 'Fiatalok Jézusért Konferencia',
    assetsPath: '../assets',
    nav: {
      hero: {
        url: '#hero',
        text: 'Téma'
      },
      speakers: {
        url: '#speakers',
        text: 'Előadók'
      },
      info: {
        url: '#info',
        text: 'Információk'
      },
      registration: {
        url: '#reg',
        text: 'Regisztráció'
      }
    }
  },
  content: {
    title: 'Növekedés Krisztusban',
    dates: '2017. feb. 24–26.',
    location: 'Szolnok',
    motto: '',
    speakers: {
      title: 'Előadók',
      speakers: [
        {
          img: '/img/sebastian-matula.jpg',
          name: 'Sebastian Matula',
          description: '',
          bio: 'Teologiai mesterkėpzésemet King\'s College Londonban most fejezem be. Svédországban születtem magyar szülők gyermekeként. Magyarországon éltem 6 éven keresztül. Mielőtt komolyan vettem volna a hitemet és Isten szolgálatába léptem volna, profi futballista voltam, aki fényes jövőnek nézett elébe. Egy sérülés azonban megállított ezen a pályán, s ez végül elvezetett arra, hogy átgondoljam az életemet. Rádöbbentem, hogy egyedül Jézus állja ki az idők próbáját."'
        },
        {
          img: '/img/erdodi-peter.jpg',
          name: 'Erdődi Péter',
          description: 'Szoftverfejlesztő, laikus Biblia-kutató',
          bio: 'Informatikai tanulmányai után teológiát tanult a Sola Scriptura Főiskolán. Korábbi hallgatótársaival együtt mindene Biblia-kutatás, Jézus Krisztus Evangéliumának mind mélyebb megértése és továbbadása. Három gyermek édesapja, feleségével, Erikával a ráckevei hetednapi adventista gyülekezet tagjai.'
        }
      ]
    },
    registration: {
      url: 'https://goo.gl/forms/G0wityrAe1Zvujgf2',
      text: 'Regisztrálj még ma!'
    }
  }
};
