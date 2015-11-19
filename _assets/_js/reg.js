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

  swagCalculator
    .text(swagPrice)
    .data({
      asdf:1
    });

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

  regCalculator.text(price)
  $('#calculator').trigger('updateFullPrice');
}
calculatePrice();

$('#registrationForm').on('change', '[data-price], [data-price].shirtOrder', calculatePrice);

$('#registrationForm').on('submit', function (e) {
  e.preventDefault();
  var form = $(this).serializeArray();

  function get(key) {
    return form
      .find(function (param) {
        return param.name === key;
      }).value;
  }

  var meals = {
    lunch: [],
    dinner: []
  };

  meals.lunch = form
    .filter(function (param) {
      return param.name === 'lunch';
    })
    .map(function (lunch) {
      return lunch.value;
    });

  meals.dinner = form
    .filter(function (param) {
      return param.name === 'dinner';
    })
    .map(function (dinner) {
      return dinner.value;
    });

  var voluntaries = form
    .filter(function (param) {
      return param.name === 'voluntary';
    })
    .map(function (voluntary) {
      if (voluntary.value === 'other') {
        return form
          .find(function (param) {
            return param.name === 'voluntary-text';
          }).value;
      }
      return voluntary.value;
    });

  var shirts = form
    .filter(function (param) {
      return param.name.indexOf('shirt') > -1;
    })
    .reduce(function (shirts, shirt) {
      var number = parseInt(shirt.name.split('-')[1], 10) - 1;
      var dataType = shirt.name.split('-')[0];
      if (!shirts[number]) {
        shirts[number] = {};
      }
      shirts[number][dataType] = shirt.value;

      return shirts;
    }, [])
    .filter(function (shirt) {
      return shirt.shirtType.length * shirt.shirtSize.length * shirt.shirtQuantity.length;
    })
    .map(function (shirt) {
      if (shirt.shirtType.indexOf('Hoody') === -1) {
        return {
          type: shirt.shirtType,
          size: shirt.shirtSize,
          quantity: shirt.shirtQuantity
        };
      }

      return {
        type: shirt.shirtType,
        size: shirt.shirtSize,
        color: shirt.shirtColor,
        quantity: shirt.shirtQuantity
      };
    });

  var registration = {
    name: {
      lastName: get('lname'),
      firstName: get('fname')
    },
    email: get('email'),
    birthDay: get('birth'),

    city: get('city'),
    country: get('country'),

    attendance: get('attendance'),
    meals: meals,

    voluntaries: voluntaries,

    shirts: shirts
  };

  request
    .post('https://reg-fjk-staging.herokuapp.com/register')
    .send(registration)
    .end(function (err, res, body) {
      console.log('err', err);
      console.log('body', body);
      if (res.statusType === 2) {
        $('#success').show();
      } else {
        $('#server-error').show();
      }
    });

  console.log(JSON.stringify(registration, null, 2));
  return false;
});
