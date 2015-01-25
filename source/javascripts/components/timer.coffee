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
    @serialize()

    this

  serialize: ->
    localStorage.timer = JSON.stringify
      startTime: @startTime
      sections: @sections

  @storedTimerCurrent: ->
    if localStorage.timer
      {startTime, sections} = JSON.parse(localStorage.timer)
      startTime = moment(startTime)
      for title, minutes of sections
        startTime.add(minutes, 'm')
      startTime.isAfter()

  @deserialize: ->
    if localStorage.timer
      {startTime, sections} = JSON.parse(localStorage.timer)
      new Timer(moment(startTime), sections)

  start: ->
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

class EditTimer
  constructor: ->
    @el = $('#edit-timer')
    @startTime = @el.find('.start-time')
    @sections = @el.find('.sections')
    @endingTime = @el.find('.ending-time')
    @totalDuration = @el.find('.total-duration')

    @el.on 'click', '.add-section', @addSection
    @el.on 'click', '.remove-section', @removeSection
    @el.on 'change', '.start-time, .duration', @updateTotals

    @el.find('form').on 'invalid.fndtn.abide', ->
      alert("Please fill in the required fields")
    .on 'valid.fndtn.abide', @confirm

    $(document).on 'open.fndtn.reveal', '#edit-timer', @populateForm

  populateForm: =>
    return if @startTime.val()

    startTime = if window.timer
      timer.startTime
    else
      moment().startOf('h').add(1, 'h')
    @startTime.val(startTime.format('HH:mm'))

    if window.timer
      for title, duration of timer.sections
        @addSection(title, duration)

    @updateTotals()

  addSection: (title, duration=0) =>
    if typeof title is 'string'
      position = "before"
    else
      title = ""
      position = "after"

    lastSection = @sections.children().last()
    newSection = lastSection.clone()
    newSection.find('.title').val(title)
    newSection.find('.duration').val(duration)
    newSection.find('.error').removeClass('error')
    newSection.find('[data-invalid]').removeAttr('data-invalid')
    lastSection[position](newSection)

    @updateTotals()

  removeSection: (e) =>
    section = $(e.target).closest('li')
    if @sections.children().length > 1
      section.remove()
    else
      section.find('.title').val('')
      section.find('.duration').val(0)
    @updateTotals()

  updateTotals: =>
    minutes = 0
    @sections.find('.duration').each ->
      minutes += +$(this).val() || 0

    @totalDuration.text(minutes)

    endingTime = moment(@startTime.val(), "HH:mm")
    if endingTime.isValid()
      endingTime = endingTime.add(minutes, 'm')
      @endingTime.text(endingTime.format("H:mm:ss"))
    else
      @endingTime.text("")

  confirm: =>
    startTime = moment(@startTime.val(), "HH:mm")
    sections = {}
    @sections.children().each ->
      title = $(this).find('.title').val()
      duration = +$(this).find('.duration').val()
      sections[title] = duration

    if window.timer
      timer.reset(startTime, sections)
    else
      window.timer = new Timer(startTime, sections)

    timer.start()
    @el.foundation('reveal', 'close')

window.Timer = Timer
new EditTimer()

if Timer.storedTimerCurrent()
  window.timer = Timer.deserialize()
  timer.start()
else
  $('#edit-timer').foundation('reveal', 'open')
