class @ParallaxSlides

  constructor: ->
    @slides = $('.slide')
    @initializeSlides()

  initializeSlides: ->
    suffix = sizeSuffix()

    @slides.each ->
      $slide = $(this)

      if $slide.data('resize')
        $section = $slide.next('section')
        $slide.width($section.outerWidth(true))
        $slide.height($section.outerHeight(true))

      slideWidth  = $slide.width()
      slideHeight = $slide.height()
      slideRatio  = slideWidth / slideHeight
      imgWidth  = $slide.data('image-width')
      imgHeight = $slide.data('image-height')
      imgRatio  = imgWidth / imgHeight

      if imgRatio < slideRatio
        imgWidth = slideWidth
        imgHeight = Math.floor(slideWidth / imgRatio)
      else
        imgWidth = Math.floor(slideHeight * imgRatio)
        imgHeight = slideHeight

      $slide.html """
        <img src="#{$slide.data("image-#{suffix}")}" width="#{imgWidth}" height="#{imgHeight}">
      """

      $img = $slide.find('img')

      if imgRatio < slideRatio
        $img.css('top', "-#{Math.floor((imgHeight - slideHeight) / 2)}px")
      else
        $img.css('left', "-#{Math.floor((imgWidth - slideWidth) / 2)}px")

  sizeSuffix = ->
    width = $(window).width()
    switch
      when width <= 640  then 's'
      when width <= 1024 then 'm'
      when width <= 1440 then 'l'
      else                    'xl'
