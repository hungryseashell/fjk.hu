return if Modernizr.touch

setStellarOffset = ->
  $('#fjk2014').each ->
    $section = $(this)
    diff = $section.outerHeight() - $section.outerWidth()
    offset = if diff < 0 then Math.floor(diff/2) else 0
    $section.css('background-position', "50% #{offset}px")
    $section.data('stellar-vertical-offset', 3*offset)

setStellarOffset()
$(window).on 'resize', setStellarOffset

$(window).stellar
  horizontalScrolling: false
  responsive: true
