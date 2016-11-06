'use strict';

module.exports = {
  page: {
    home: 'https://fjk.hu',
    title: 'Fiatalok Jézusért Konferencia',
    assetsPath: '../assets',
    nav: {
      conference: {
        url: '../conferences/2016/',
        text: 'Küldetésben'
      },
      changeLang: {
        url: '../en/registration/',
        text: 'EN'
      }
    }
  },
  content: {
    errors: {
      email: 'Kérlek helyes email címet adj meg',
      birth: 'Kérlek a helyes dátumot formátumot használd (1990/12/31)',
      empty: 'A mező kitöltése kötelező',
      server: 'Hiba merült fel az üzenet elküldése során. Kérjük, próbálja újra később!',
      user: 'Ezzel az email címmel már regisztráltak! Ha módosítani szeretnéd a regisztrációdat, keress meg minket a <a href="mailto:reg@fjk.hu">reg@fjk.hu</a> email címen!',
      progress: 'Regisztrációd feldolgozása folyamatban...',
      smallDisplay: 'A regisztrációdat csak nagyobb felbontású kijelzőn tudod folytatni...'
    },
    next: 'Tovább',
    prev: 'Vissza',
    submit: 'Jelentkezem',
    cta: 'Regisztrálj még ma!',
    price: 'Regisztráció díja',
    attendancePrice: 'Résztvételi díj <b><span id="regCalculator" class="price-calculator"></span> Ft</b>',
    swagPrice: 'Támogatói csomag <b><span id="swagCalculator" class="price-calculator">0</span> Ft</b>',
    fullPrice: 'Fizetendő összeg* <b><span id="fullCalculator"></span> Ft</b>',
    fullPriceHelp: 'A szállás költségét ezen felül kell rendezni!',
    success: {
      title: 'A regisztrációd sikeres!',
      subtitle: 'A részletekről küldtünk egy emailt!'
    },
    tabs: {
      conference: {
        title: 'Részvétel',
        mealTitle: 'Étkezés'
      },
      housing: {
        title: 'Szállás'
      },
      program: {
        title: 'Program',
        subtitle: 'Jelentkezz önkéntes munkára'
      },
      support: {
        title: 'Támogatás',
        subtitle: 'Támogasd a Konferenciát'
      },
      personal: {
        title: 'Személyes adatok',
        subtitle: 'A regisztrációhoz szükséges személyes adatok'
      }
    }
  }
};
