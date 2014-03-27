return if $('#timers').length == 0

class Timer
  constructor: (startTime, sections) ->
    @timers           = $('#timers')
    @sectionCountdown = @timers.find('.section-countdown')
    @sectionTitle     = @timers.find('.section-title')
    @totalCountdown   = @timers.find('.total-countdown')
    @currentTime      = @timers.find('.current-time')
    @interval = 250
    @reset(startTime, sections)

  reset: (startTime, sections) ->
    @stop()
    @totalCountdown.text('00:00:00').removeClass('over').removeClass('live')
    @sectionCountdown.text('00:00:00').removeClass('over').removeClass('live')
    @sectionTitle.text('')

    @startTime = startTime if startTime
    @sections = sections if sections
    @totalMinutes = 0
    for title, minutes of @sections
      @totalMinutes += minutes

    this

  start: ->
    @reset()
    @update()
    this

  stop: ->
    clearTimeout(@timeout) if @timeout
    @timeout = null
    this

  update: =>
    time = moment()
    @currentTime.text time.format("HH:mm:ss")

    diff = time.diff @startTime
    if diff >= 0
      diff -= diff % 1000
      @updateTotalCountdown(diff)
      @updateSectionCountdown(diff)

    @timeout = setTimeout(@update, @interval)

  updateTotalCountdown: (diff) ->
    totalRemaining = @totalMinutes * 60000 - diff
    if totalRemaining <= 0
      totalRemaining = 0
      @totalCountdown.addClass('over')
    else
      @totalCountdown.removeClass('over')
    @totalCountdown.text(moment(totalRemaining).utc().format("HH:mm:ss"))

  updateSectionCountdown: (diff) ->
    return if @skipSectionCountdown

    minutes = diff / 60000
    sectionEnd = 0
    for title, sectionMinutes of @sections
      sectionEnd += sectionMinutes
      break if sectionEnd >= minutes

    sectionRemaining = sectionEnd * 60000 - diff
    if sectionRemaining <= 0
      sectionRemaining = 0
      @sectionCountdown.addClass('over').removeClass('live')
      @skipSectionCountdown = true
      setTimeout (=> @skipSectionCountdown = false), 5000
    else
      @sectionCountdown.removeClass('over').addClass('live')
    @sectionCountdown.text(moment(sectionRemaining).utc().format("HH:mm:ss"))

    @sectionTitle.text(title)

window.timer = new Timer moment(hour: 10, minute: 15),
  "ének": 9
  "ima": 1
  "információk": 5
  "átadás": 20
  "Szőllősi Enikő": 35

timer.start()

window.Timer = Timer
