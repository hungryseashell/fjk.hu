'use strict';

var request = require('superagent');

require('./reg/mobilcheck');
require('./reg/tab');
require('./reg/shirt')(calculatePrice);
require('./reg/bindings');

function changeSwagCalculator() {
  var swagCalculator = $('#swagCalculator');
  var selectedSwag = $('[data-swag]:checked');
  var swagPrice = selectedSwag.val();

  swagCalculator.text(swagPrice);

  $('#calculator').trigger('updateFullPrice');
}

$('#swag').change(changeSwagCalculator);

$('#calculator').on('updateFullPrice', function (e) {
  var swagPrice = parseInt($('#swagCalculator').text(), 10);
  var regPrice = parseInt($('#regCalculator').text(), 10);
  var price = swagPrice + regPrice;

  $('#fullCalculator')
    .animate({
      'font-size': '150%'
    }, {
      duration: 250
    })
    .text(price)
    .animate({
      'font-size': '100%'
    }, {
      duration: 250
    });
});

var payableSelector = '[data-price]:checked, [data-price].shirtOrder';

function calculatePrice() {
  var prices = $(payableSelector);

  var regCalculator = $('#regCalculator');
  var orignalVal = parseInt(regCalculator.text(), 10);
  var price = 0;
  prices.each(function () {
    price += $(this).data().price;
  });

  if (orignalVal === price) {
    return;
  }

  regCalculator.text(price);
  $('#calculator').trigger('updateFullPrice');
}
calculatePrice();

$('#registrationForm').on('change', '[data-price], [data-price].shirtOrder', calculatePrice);

$('#registrationForm').on('submit', function (e) {
  e.preventDefault();
  var form = $(this).serializeArray();

  form.push({
    name: 'lang',
    value: (window.location.pathname.indexOf('/en/') > -1)
  });

  $('html,body').css('cursor', 'progress');
  request
    .post('https://reg-fjk-staging.herokuapp.com/register')
    .send(form)
    .end(function (err, res, body) {
      $('html,body').css('cursor', 'default');
      if (err) {
        return $('#server-error').show();
      }

      if (res.statusType === 2) {
        $('input[type=submit]')
          .parent()
          .children('.next')
          .trigger('click');
      } else {
        $('#server-error').fadeIn();
      }
    });

  return true;
});
