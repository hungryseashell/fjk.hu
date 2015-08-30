var nav = require('./nav');

var body = $('body');
var navbar = $('#main-nav');

// Fix the header
var goingDown = true;
var goingUp = false;

setInterval(function () {
  if (goingDown && window.scrollY > 200) {
    goingDown = false;
    goingUp = true;

    navbar.addClass('navbar-fixed-top site-header-animation-down');
  } else if (goingUp && window.scrollY === 0) {
    goingDown = true;
    goingUp = false;

    navbar
      .addClass('navbar-fixed-top')
      .removeClass('site-header-animation-down');
  }
}, 30);

var wow = new WOW({
  boxClass: 'animated',
  mobile: false
});
wow.init();


console.log('FJK - Do you want to help?');
console.log('Drop us a line at dev@fjk.hu');
