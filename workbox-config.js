// https://developers.google.com/web/tools/workbox/guides/generate-complete-sw
module.exports = {
  "globDirectory": "_site/",
  "globPatterns": [
    "**/*.{css,ico,svg,gif,js}",
    "assets/img/asi-logo.png",
    "assets/img/bg-2019.jpg",
    "assets/img/gyulkep-2.jpg",
    "assets/img/gyulkep-3.jpg",
    "assets/img/gyulkep.jpg",
    "assets/img/horvath-gabor.jpg",
    "assets/img/jonathan-ostrowski.jpg",
    "assets/img/logo-black.png",
    "assets/img/logo-color-white.png",
    "assets/img/logo-text.png",
    "assets/img/logo-white.png",
    "assets/img/logo.png",
    "assets/img/milan-moskala.jpg",
    "assets/img/ramos.jpg",
    "assets/img/rhema_1.jpg",
    "assets/img/rhema_2.jpg",
    "assets/img/rhema_3.jpg",
    "assets/img/sda-logo.png",
    "booklet/2019/index.html",
    "en/booklet/2019/index.html"
  ],
  "swDest": "_site/sw.js",
  "skipWaiting": true,
  "clientsClaim": true
};
