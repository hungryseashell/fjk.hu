$('#attendanceSabbath').click(function() {
  $('input[value$="day"]').prop('checked', false);
});

$('input[value$="day"]').click(function() {
  $('#attendanceFull').prop('checked', true);
});

// Voluntary service
$('#otherVoluntaryText').focusin(function() {
  $('#otherVoluntaryChB').prop('checked', true);
});

$('#otherVoluntaryText').focusout(function() {
  if (!this.value.length) {
    $('#otherVoluntaryChB').prop('checked', false);
  }
});
