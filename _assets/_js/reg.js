'use strict';

var animatingFlag;

$('.next').click(function () {
  if (animatingFlag) {
    return false;
  }
  animatingFlag = true;

  var current_fs = $(this).parent();
  var next_fs = $(this).parent().next();

  // activate next step on progressbar using the index of next_fs
  $('#progressbar li')
    .eq($('.tab').index(next_fs))
    .addClass('active');

  // show the next tab
  next_fs.show();
  // hide the current tab with style
  current_fs.animate({
    opacity: 0
  }, {
    step: function(now, mx) {
      var scale = 1 - (1 - now) * 0.2;
      var left = (now * 50) + '%';
      var opacity = 1 - now;

      current_fs.css({
        transform: 'scale(' + scale + ')'
      });

      next_fs.css({
        left: left,
        opacity: opacity
      });
    },
    duration: 800,
    complete: function () {
      current_fs.hide();
      animatingFlag = false;
    },
    easing: 'easeInOutBack'
  });
});

$('.previous').click(function () {
  if (animatingFlag) {
    return false;
  }
  animatingFlag = true;

  var current_fs = $(this).parent();
  var previous_fs = $(this).parent().prev();

  // de-activate current step on progressbar
  $('#progressbar li')
    .eq($('.tab').index(current_fs))
    .removeClass('active');

  // show the previous tab
  previous_fs.show();
  // hide the current tab with style
  current_fs.animate({
    opacity: 0
  }, {
    step: function(now, mx) {
      var scale = 0.8 + (1 - now) * 0.2;
      var left = ((1 - now) * 50) + '%';
      var opacity = 1 - now;

      current_fs.css({
        left: left
      });

      previous_fs.css({
        transform: 'scale(' + scale + ')',
        opacity: opacity
      });
    },
    duration: 800,
    complete: function () {
      current_fs.hide();
      animatingFlag = false;
    },
    easing: 'easeInOutBack'
  });
});

// Meal data bindings
$('#housingSabbath').click(function () {
  $('input[name$="day"]').prop('checked', false);
});

$('input[name$="day"]').click(function () {
  $('#housingNone').prop('checked', true);
});

// Voluntary service
$('#otherVoluntaryText').focusin(function () {
  $('#otherVoluntaryChB').prop('checked', true);
});

$('#otherVoluntaryText').focusout(function () {
  if (!this.value.length) {
    $('#otherVoluntaryChB').prop('checked', false);
  }
});

// Shirt
$('#shirtOrders').on('click', 'a.minusOne', function () {
  $(this)
    .parent()
    .remove();
});

$('#shirtPlusOne').click(function () {
  var lines = $('#shirtOrders .row');
  var count = lines.length + 1;
  $('#shirtOrders').append(
    '<div class="shirt-order form-inline row" data-count=' + count + '>' +
      '<select name="shirtType-' + count + '">' +
        '<option value="">Tipus</option>' +
        '<option value="men">Ferfi (1300 Ft/db)</option>' +
        '<option value="women">Noi (1300 Ft/db)</option>' +
        '<option value="kid">Gyerek (1700 Ft/db)</option>' +
      '</select>' +
      '<select name="shirtSize-' + count + '">' +
        '<option value="">Meret</option>' +
        '<option value="S">S</option>' +
        '<option value="M">M</option>' +
        '<option value="L">L</option>' +
        '<option value="XL">XL</option>' +
        '<option value="2XL">2XL</option>' +
        '<option value="3XL">3XL (FFi)</option>' +
        '<option value="2A">2A</option>' +
        '<option value="4A">4A</option>' +
        '<option value="6A">6A</option>' +
        '<option value="8A">8A</option>' +
        '<option value="10A">10A</option>' +
        '<option value="12A">12A</option>' +
      '</select>' +
      '<select name="shirtQuantity-' + count + '">' +
        '<option value="">Mennyiseg</option>' +
        '<option value="1">1</option>' +
        '<option value="2">2</option>' +
        '<option value="3">3</option>' +
        '<option value="4">4</option>' +
        '<option value="5">5</option>' +
      '</select>' +
      '<a type="button" class="minusOne plusOne">-</a>' +
    '</div>');
});

$('#registrationForm').submit(function (e) {
  e.preventDefault();

  var serialized = $(this).serializeArray();
  // var breakfasts = serialized
  //   .filter(function (param) {
  //     return param.value === 'breakfast';
  //   })
  //   .map(function (breakfast) {
  //     return breakfast.name;
  //   });

  // console.log(JSON.stringify(serialized, null, 2));
  console.log(JSON.stringify(serialized, null, 2));
  return false;
});
