'use strict';

function mobilecheck() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

if (mobilecheck() && window.location.pathname.indexOf('registration') > -1) {
  window.location.replace('/conferences/2016');
}

var animatingFlag;
var inValidFlag;

$('#registrationForm').on('invalid.bs.validator', function (e) {
  inValidFlag = true;
});

$('#registrationForm').on('valid.bs.validator', function (e) {
  inValidFlag = false;
});

$('.personal-tab input[required]').change(function () {
  $(this).parent().removeClass('has-error');
  if (!$(this).val().length) {
    $(this).parent().addClass('has-error');
  }
});

$('.next').click(function () {
  $('#registrationForm').validator();

  if (animatingFlag || inValidFlag) {
    return false;
  }

  var inputs = $(this)
    .parent()
    .find('input[required]');

  inputs.removeClass('has-error');

  var invalidInputs = inputs
    .filter(function () {
      return $(this).val().length === 0;
    })
    .each(function () {
      $(this)
        .parent()
        .addClass('has-error');
    });

  if (invalidInputs.length !== 0) {
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
  if (animatingFlag || inValidFlag) {
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
$('#attendanceSabbath').click(function () {
  $('input[name$="day"]').prop('checked', false);
});

$('input[name$="day"]').click(function () {
  $('#attendanceFull').prop('checked', true);
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
$('#shirtOrders').on('change', 'select[name^="shirtType"]', function () {
  var self = $(this);
  var val = self.val();

  var shirtSizeOptions = self
    .parent()
    .children('select[name^="shirtSize"], select[name^="shirtColor"]')
    .children('option');

  shirtSizeOptions.show();

  if (val) {
    var shirtColorSelector = self
      .parent()
      .children('.shirtColor');
    if (val.indexOf('Hoody') > -1) {
      self
        .parent()
        .children('select[name^="shirtColor"]')
        .val('');
      shirtColorSelector.show();
    } else {
      shirtColorSelector.hide();
    }

    self
      .parent()
      .children('select[name^="shirtSize"], select[name^="shirtColor"], select[name^="shirtQuantity"]')
      .prop('selectedIndex', 0);

    shirtSizeOptions
      .filter(function () {
        return !$(this).hasClass(val);
      })
      .hide();
  }
});

$('#shirtOrders').on('click', 'a.minusOne', function () {
  $(this)
    .parent()
    .remove();
  calculatePrice();
});

$('#shirtOrders').on('change', 'select', function () {
  var row = $(this).parent();
  var price = 1;

  row
    .children()
    .find(':selected')
    .each(function () {
      price *= $(this).data().singlePrice;
    });

  row
    .children('input')
    .data('price', price);
  calculatePrice();
});

$('#shirtPlusOne').click(function () {
  var lines = $('#shirtOrders .row');
  var count = lines.length + 1;
  $('#shirtOrders').append(
    '<div class="shirt-order form-inline row" data-count=' + count + '>' +
      '<input class="shirtOrder" type="hidden" name="name" value="" data-price=0>' +
      '<select name="shirtType-' + count + '">' +
        '<option value="">Tipus</option>' +
        '<option value="men" data-single-price=1500>Ferfi (1500 Ft/db)</option>' +
        '<option value="women" data-single-price=1500>Noi (1500 Ft/db)</option>' +
        '<option value="kid" data-single-price=1700>Gyerek (1700 Ft/db)</option>' +
        '<option value="menHoody" data-single-price=3700>Ffi pullcsi (3700 Ft/db)</option>' +
        '<option value="womenHoody" data-single-price=3700>Noi pullcsi (3700 Ft/db)</option>' +
      '</select>' +
      '<select name="shirtSize-' + count + '">' +
        '<option class="menHoody womenHoody men women kid" value="" data-single-price=0>Meret</option>' +
        '<option class="menHoody womenHoody men women" value="S" data-single-price=1>S</option>' +
        '<option class="menHoody womenHoody men women" value="M" data-single-price=1>M</option>' +
        '<option class="menHoody womenHoody men women" value="L" data-single-price=1>L</option>' +
        '<option class="menHoody womenHoody men women" value="XL" data-single-price=1>XL</option>' +
        '<option class="menHoody womenHoody men women" value="2XL" data-single-price=1>2XL</option>' +
        '<option class="men" value="3XL" data-single-price=1>3XL</option>' +
        '<option class="kid" value="2A" data-single-price=1>2A</option>' +
        '<option class="kid" value="4A" data-single-price=1>4A</option>' +
        '<option class="kid" value="6A" data-single-price=1>6A</option>' +
        '<option class="kid" value="8A" data-single-price=1>8A</option>' +
        '<option class="kid" value="10A" data-single-price=1>10A</option>' +
        '<option class="kid" value="12A" data-single-price=1>12A</option>' +
      '</select>' +
      '<select class="shirtColor" name="shirtColor-' + count + '">' +
        '<option class="menHoody womenHoody" value="Navy" data-single-price=1>Navy</option>' +
        '<option class="womenHoody" value="Sport Grey" data-single-price=1>Sport Grey</option>' +
        '<option class="menHoody" value="Forest green" data-single-price=1>Forest green</option>' +
        '<option class="menHoody" value="Maroon" data-single-price=1>Maroon</option>' +
        '<option class="menHoody" value="Dark Chocolate" data-single-price=1>Dark Chocolate</option>' +
      '</select>' +
      '<select name="shirtQuantity-' + count + '">' +
        '<option value="" data-single-price=0>Mennyiseg</option>' +
        '<option value="1" data-single-price=1>1</option>' +
        '<option value="2" data-single-price=2>2</option>' +
        '<option value="3" data-single-price=3>3</option>' +
        '<option value="4" data-single-price=4>4</option>' +
        '<option value="5" data-single-price=5>5</option>' +
      '</select>' +
      '<a type="button" class="minusOne plusOne">-</a>' +
    '</div>');
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

  regCalculator
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
}
calculatePrice();

$('#registrationForm').on('change', payableSelector, calculatePrice);

$('#registrationForm').on('submit', function (e) {
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
