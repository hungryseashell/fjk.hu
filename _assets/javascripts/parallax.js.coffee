return if Modernizr.touch

setStellarOffset = ->
  $('#fjk2014').each ->
    $section = $(this)
    diff = $section.outerHeight() - $section.outerWidth()
    offset = diff < 0 ? diff : 0
    $section.data('stellar-vertical-offset', diff/2 + 50)

setStellarOffset()
$(window).on 'resize', setStellarOffset

$(window).stellar
  horizontalScrolling: false
  responsive: true
