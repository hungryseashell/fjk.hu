return if Modernizr.touch

confIntro = $('.conf-intro')
  
setStellarOffset = ->
  confIntro.each ->
    $section = $(this)
    bgRatio = parseFloat($section.css('line-height')) / parseInt($section.css('font-size'))
    sectionWidth = $section.outerWidth()
    sectionHeight = $section.outerHeight()
    sectionRatio = sectionWidth / sectionHeight
    offset = if sectionRatio > bgRatio then Math.floor((sectionWidth / bgRatio - sectionHeight) / 2) else 0
    $section.css('background-position', "50% -#{offset}px")
    $section.data('stellar-vertical-offset', -3*offset)

setStellarOffset()
$(window).on 'resize', setStellarOffset

$(window).stellar
  horizontalScrolling: false
  responsive: true
