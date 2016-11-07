'use strict';

const assetsPath = '../assets';

module.exports = {
  page: {
    home: 'https://fjk.hu',
    title: 'Fiatalok Jézusért Konferencia',
    assetsPath: assetsPath,
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
    info: {
      title: 'Tudnivalók',
      description: 'A regisztrációd véglegesítéséhez szükséges a regisztráció során megjelölt <span class="emph">teljes</span> végösszeg átutalása. A regisztráció során megjelenített részvételi díj <span class="emph">nem tartalmazza</span> a szállás költségeit, ennek kiegyenlítésére a konferencián, személyesen lesz lehetőséged. A regisztráció során megjelölt összeget átutalással kérjük befizetni, a <span class="emph">12001008-01177336-00100001</span> (<span class="emph">ASI Magyarország</span>) számlaszámra. A közlemény rovatban a regisztráló személy(ek) neve mellett mindenféleképpen legyen feltüntetve az is, hogy „<span class="emph">FJK támogatás</span>”. Külföldi utalás esetén a következő adatok szükségesek: IBAN: HU19 1200 1008 0117 7336 0010 0001, Swift code: UBRTHUHB. Ha bármilyen egyéb kérésed, kérdésed van, írj bátran az <a href="mailto:info@fjk.hu">info@fjk.hu</a> e-mail címre!'
    },
    tabs: {
      conference: {
        title: 'Részvétel',
        meal: {
          title: 'Étkezés',
          thursday: 'Csütörtök',
          friday: 'Péntek',
          sabbath: 'Szombat',
          lunch: 'Ebéd',
          dinner: 'Vacsora',
          info: 'Reggelit a szállással együtt biztosítunk'
        },
        attendance: {
          full: 'Résztveszek az egész konferencián',
          sabbath: 'Csak szombatra jövök'
        }
      },
      housing: {
        title: 'Szállás',
        broadway: 'Ez a szállás már betelt, nem tudunk további foglalást fogadni!',
        benczur: 'Ezt a szállást egyéni, vagy két fős foglalás esetén ajánljuk! A hotelben 1 illetve 2 ágyas szobák állnak rendelkezésre, felújított illetve standard minőségben. A két fős szobákba egyéni jelentkezés is lehetséges, azonban ebben az esetben a Konferencia szervezői fogják elhelyezni az így résztvevőket a különálló két ágyas szobákban egy másik, azonos módon jelentkező résztvevővel együtt. További részletek a szállás foglalási nyomtatványban találhatóak. Nézd meg a <a href="http://www.hotelbenczur.hu/en" target="_blank">hotelszobákat</a> és töltsd le a <a href="' + assetsPath + '/forms/benczur-hu.docx">jelentkezési lapot</a>.'
      },
      program: {
        title: 'Program',
        subtitle: 'Jelentkezz önkéntes munkára',
        label: 'Önkéntes munkára jelentkezés',
        translate: 'Fordítás (angol-magyar)',
        smallGroups: 'Kiscsoportos beszélgetés vezetése',
        diaconia: 'Teremdiakónia',
        other: 'Egyéb szolgálat'
      },
      support: {
        title: 'Támogatás',
        subtitle: 'Támogasd a Konferenciát',
        label: 'Támogatói csomagok',
        description: 'Most van lehetőséged Támogatói Csomagokon keresztül hozzájárulni a Konferencia szervezéséhez. Minden csomagban egyedileg tervezett, FJK logóval ellátott termékeket találhatsz. Válassz egyet, és támogass minket!',
        '10000': '(Jegyzetfüzet + Hűtőmágnes + Laptop matrica + Vászontáska + Natúr kozmetikai csomag + 100 db-os Glow csomag)',
        '5000': '(Jegyzetfüzet + Hűtőmágnes + Laptop matrica + Vászontáska + 50 db-os Glow csomag)',
        '3000': '(Jegyzetfüzet + Hűtőmágnes + Laptop matrica + 30 db-os Glow csomag)',
        '1000': '(Jegyzetfüzet + 20 db-os Glow csomag)',
        '0': 'Imádkozom a Konferenciáért!',
        hoodies: {
          title: 'A pulóvereket itt nézheted meg:<a id="popover-menHoody" rel="popover" data-content="" title="Férfi pulóver">férfi</a> és<a id="popover-womenHoody" rel="popover" data-content="" title="Női pulóver">női</a>. A méretek:<a id="popover-men" rel="popover" data-content="" title="Férfi méretek">férfi</a>,<a id="popover-women" rel="popover" data-content="" title="Női méretek">női</a>,<a id="popover-kid" rel="popover" data-content="" title="Gyerek méretek">gyerek</a>,<a id="popover-menHoodySize" rel="popover" data-content="" title="Férfi pulóverek méretek">Férfi pulóverek</a> és<a id="popover-womenHoodySize" rel="popover" data-content="" title="Női pulóverek méretek">női pulóverek</a>.',
          type: 'Típus',
          size: 'Méret',
          quantity: 'Mennyiség',
          shirts: {
            men: 'Férfi póló (1500 Ft)',
            women: 'Női póló (1500 Ft)',
            kid: 'Gyerek póló (1700 Ft)',
            menHoody: 'Férfi pulóver (3700 Ft)',
            womenHoody: 'Női pulóver (3700 Ft)'
          }
        }
      },
      personal: {
        title: 'Személyes adatok',
        subtitle: 'A regisztrációhoz szükséges személyes adatok',
        lname: 'Vezetéknév*',
        fname: 'Keresztnév*',
        birth: 'Születési idő (1990/12/31)*',
        city: 'Város*',
        country: 'Ország*',
        newsletter: 'Feliratkozom az FJK hírlevélre'
      }
    }
  }
};
