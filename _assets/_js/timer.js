const moment = require('moment');

$('#edit-timer').modal('show');

var EditTimer, Timer,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

if (!$('#timers').length) {
  return;
}

Timer = (function() {
  function Timer(startTime, sections) {
    this.update = bind(this.update, this);
    this.timers = $('#timers');
    this.sectionCountdown = this.timers.find('.section-countdown');
    this.sectionTitle = this.timers.find('.section-title');
    this.totalCountdown = this.timers.find('.total-countdown');
    this.currentTime = this.timers.find('.current-time');
    this.interval = 250;
    this.skipSectionCountdown = false;
    this.reset(startTime, sections);
  }

  Timer.prototype.reset = function(startTime, sections) {
    console.log(Date.now() % 100000, 'reset');
    var minutes, ref, title;
    this.stop();
    this.totalCountdown.text('00:00:00').removeClass('over').removeClass('live');
    this.sectionCountdown.text('00:00:00').removeClass('over').removeClass('live');
    this.sectionTitle.text('');
    if (startTime) {
      this.startTime = startTime;
    }
    if (sections) {
      this.sections = sections;
    }
    this.totalMinutes = 0;
    ref = this.sections;
    for (title in ref) {
      minutes = ref[title];
      this.totalMinutes += minutes;
    }
    this.serialize();
    return this;
  };

  Timer.prototype.serialize = function() {
    console.log(Date.now() % 100000, 'serialize');
    return localStorage.timer = JSON.stringify({
      startTime: this.startTime,
      sections: this.sections
    });
  };

  Timer.storedTimerCurrent = function() {
    var minutes, ref, sections, startTime, title;
    if (localStorage.timer) {
      ref = JSON.parse(localStorage.timer), startTime = ref.startTime, sections = ref.sections;
      startTime = moment(startTime);
      for (title in sections) {
        minutes = sections[title];
        startTime.add(minutes, 'm');
      }
      return startTime.isAfter();
    }
  };

  Timer.deserialize = function() {
    var ref, sections, startTime;
    if (localStorage.timer) {
      ref = JSON.parse(localStorage.timer), startTime = ref.startTime, sections = ref.sections;
      return new Timer(moment(startTime), sections);
    }
  };

  Timer.prototype.start = function() {
    console.log(Date.now() % 100000, 'start');
    this.update();
    return this;
  };

  Timer.prototype.stop = function() {
    console.log(Date.now() % 100000, 'stop');
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = null;
    return this;
  };

  Timer.prototype.update = function() {
    console.log(Date.now() % 100000, 'update');
    if (this.skipSectionCountdown) {
      return;
    }
    var diff, time;
    time = moment();
    this.currentTime.text(time.format("HH:mm:ss"));
    diff = time.diff(this.startTime);
    if (diff >= 0) {
      diff -= diff % 1000;
      this.updateTotalCountdown(diff);
      this.updateSectionCountdown(diff);
    }
    return this.timeout = setTimeout(this.update, this.interval);
  };

  Timer.prototype.updateTotalCountdown = function(diff) {
    console.log(Date.now() % 100000, 'updateTotalCountdown');
    var totalRemaining;
    totalRemaining = this.totalMinutes * 60000 - diff;
    if (totalRemaining <= 0) {
      totalRemaining = 0;
      this.totalCountdown.addClass('over');
    } else {
      this.totalCountdown.removeClass('over');
    }
    return this.totalCountdown.text(moment(totalRemaining).utc().format("HH:mm:ss"));
  };

  Timer.prototype.updateSectionCountdown = function(diff) {
    console.log(Date.now() % 100000, 'updateSectionCountdown');
    var minutes, ref, sectionEnd, sectionMinutes, sectionRemaining, title;
    if (this.skipSectionCountdown) {
      return;
    }
    minutes = diff / 60000;
    sectionEnd = 0;
    ref = this.sections;
    for (title in ref) {
      sectionMinutes = ref[title];
      sectionEnd += sectionMinutes;
      if (sectionEnd >= minutes) {
        break;
      }
    }

    sectionRemaining = sectionEnd * 60000 - diff;
    if (sectionRemaining <= 0) {
      sectionRemaining = 0;
      this.sectionCountdown.addClass('over').removeClass('live');
      this.skipSectionCountdown = true;
      var _this = this;
      $('.next-section').on('click', function() {
        _this.skipSectionCountdown = false;
        var curr = Object.keys(window.timer.sections)[0];
        delete window.timer.sections[curr];

        _this.reset(moment(), window.timer.sections);
        _this.start();
      })
    } else {
      this.sectionCountdown.removeClass('over').addClass('live');
    }

    this.sectionCountdown.text(moment(sectionRemaining).utc().format("HH:mm:ss"));
    return this.sectionTitle.text(title);
  };

  return Timer;

})();

EditTimer = (function() {
  function EditTimer() {
    this.confirm = bind(this.confirm, this);
    this.updateTotals = bind(this.updateTotals, this);
    this.removeSection = bind(this.removeSection, this);
    this.addSection = bind(this.addSection, this);
    this.populateForm = bind(this.populateForm, this);
    this.el = $('#edit-timer');
    this.startTime = this.el.find('.start-time');
    this.sections = this.el.find('.sections');
    this.endingTime = this.el.find('.ending-time');
    this.totalDuration = this.el.find('.total-duration');
    this.el.on('click', '.add-section', this.addSection);
    this.el.on('click', '.remove-section', this.removeSection);
    this.el.on('change', '.start-time, .duration', this.updateTotals);
    this.el.find('form')
      .on('invalid.fndtn.abide', function() {
        return alert("Please fill in the required fields");
      })
      .on('valid.fndtn.abide', this.confirm)
      .on('submit', this.confirm);
    $(document).on('show.bs.modal', '#edit-timer', this.populateForm);
  }

  EditTimer.prototype.populateForm = function() {
    console.log(Date.now() % 100000, 'populateForm');
    var duration, ref, startTime, title;
    if (this.startTime.val()) {
      return;
    }

    startTime = window.timer ? timer.startTime : moment().startOf('h').add(1, 'h');

    this.startTime.val(startTime.format('HH:mm'));
    if (window.timer) {
      ref = timer.sections;
      for (title in ref) {
        duration = ref[title];
        this.addSection(title, duration);
      }
    }
    return this.updateTotals();
  };

  EditTimer.prototype.addSection = function(title, duration) {
    console.log(Date.now() % 100000, 'addSection');
    var lastSection, newSection, position;
    if (duration == null) {
      duration = 0;
    }
    if (typeof title === 'string') {
      position = "before";
    } else {
      if (typeof title.preventDefault === "function") {
        title.preventDefault();
      }
      title = "";
      position = "after";
    }
    lastSection = this.sections.children().last();
    newSection = lastSection.clone();
    newSection.find('.title').val(title);
    newSection.find('.duration').val(duration);
    newSection.find('.error').removeClass('error');
    newSection.find('[data-invalid]').removeAttr('data-invalid');
    lastSection[position](newSection);
    return this.updateTotals();
  };

  EditTimer.prototype.removeSection = function(e) {
    console.log(Date.now() % 100000, 'removeSection');
    var section;
    e.preventDefault();
    section = $(e.target).closest('li');
    if (this.sections.children().length > 1) {
      section.remove();
    } else {
      section.find('.title').val('');
      section.find('.duration').val(0);
    }
    return this.updateTotals();
  };

  EditTimer.prototype.updateTotals = function() {
    console.log(Date.now() % 100000, 'updateTotals');
    var endingTime, minutes;
    minutes = 0;
    this.sections.find('.duration').each(function() {
      return minutes += +$(this).val() || 0;
    });
    this.totalDuration.text(minutes);
    endingTime = moment(this.startTime.val(), "HH:mm");
    if (endingTime.isValid()) {
      endingTime = endingTime.add(minutes, 'm');
      return this.endingTime.text(endingTime.format("H:mm:ss"));
    } else {
      return this.endingTime.text("");
    }
  };

  EditTimer.prototype.confirm = function(e) {
    console.log(Date.now() % 100000, 'confirm');
    e.preventDefault();
    var sections, startTime;
    startTime = moment(this.startTime.val(), "HH:mm");
    sections = {};
    this.sections.children().each(function() {
      var duration, title;
      title = $(this).find('.title').val();
      duration = +$(this).find('.duration').val();
      return sections[title] = duration;
    });
    if (window.timer) {
      timer.reset(startTime, sections);
    } else {
      window.timer = new Timer(startTime, sections);
    }
    timer.start();
    return this.el.modal('toggle');
  };

  return EditTimer;

})();

window.Timer = Timer;

new EditTimer();

if (Timer.storedTimerCurrent()) {
  window.timer = Timer.deserialize();
  timer.start();
} else {
  $('#edit-timer').modal('show');
}
