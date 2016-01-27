require('./nav');
require('./reg');
require('./timer');
require('./jwplayer/jwplayer');

var navbar = $('#main-nav');
var svgHeader = $('#header-svg');

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

/**
  After crunchconf.com
*/

var colors = [
  '#e67e22',
  '#f39c12'
];

function hexCoords(x, y, r) {
  var d = r * Math.cos(Math.PI / 6);
  return [
    [Math.round(x), Math.round(y - r)],
    [Math.round(x + d), Math.round(y - r / 2)],
    [Math.round(x + d), Math.round(y + r / 2)],
    [Math.round(x), Math.round(y + r)],
    [Math.round(x - d), Math.round(y + r / 2)],
    [Math.round(x - d), Math.round(y - r / 2)],
    [Math.round(x), Math.round(y - r)]
  ];
}

function drawHeader() {
  var paper = Snap('#header-svg');

  if (!paper) {
    return;
  }

  var r = 50;
  var d = r * Math.cos(Math.PI / 6);
  var x = d;
  var y = 0;
  var w = svgHeader.width();
  var h = svgHeader.height();
  var drawing = true;
  paper.clear();
  while (drawing) {
    var coords = hexCoords(x, y, Math.random() > 0.7 ? 2 * r : r);
    var p = paper.polyline(coords).attr({
      fill: colors[Math.floor(Math.random() * colors.length)]
    });
    p.addClass('hex');
    p.attr('opacity', Math.round(Math.random() * 40) / 100 + 0.6);

    if (x <= w) {
      x += 2 * d;
    } else {
      y += r + r / 2;
      x = y % r > 0 ? 0 : d;
      if (y > h + r) {
        drawing = false;
      }
    }
  }
}

function animateHeader() {
  window.requestAnimationFrame(animateHeader);
  var paper = Snap('#header-svg');
  if (!paper) {
    return;
  }
  var h = paper.selectAll('.hex');
  if (Math.random() < 0.05) {
    var rand = Math.floor(Math.random() * h.length);
    h[rand].attr({
      fill: colors[Math.floor(Math.random() * colors.length)]
    });
  }
}

$(document).ready(function () {
  drawHeader();
  animateHeader();

  var wTemp = svgHeader.width();
  $(window).resize(function() {
    if (wTemp < svgHeader.width()) {
      drawHeader();
    }
    wTemp = svgHeader.width();

    if (wTemp < 940) {
      $('nav').addClass('mini fixed');
    } else {
      $('nav').removeClass('mini');
    }
    $(window).trigger('scroll');
  }).trigger('resize');
});

console.log('FJK - Do you want to help?');
console.log('Drop us a line at dev@fjk.hu');
