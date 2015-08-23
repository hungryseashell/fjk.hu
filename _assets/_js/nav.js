var body = $('body');

var menuItems = $('.nav>.dropdown>.dropdown-menu>li>a');
if (!menuItems.length) {
  menuItems = $('.nav>li>a');
}

var requestAnimationFrame = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function (callback) {
    window.setTimeout(function () {
      var timestamp = Date.now();
      callback(timestamp);
    }, 1000 / 60);
  };

// current time, beginning value, change total in value, duration total
function elasticEase(t, b, c, d) {
  return c * ((t = t / d - 1) * t * ((1.4 + 1) * t + 1.4) + 1) + b;
}

function inOutQuintic(t, b, c, d) {
  var ts = (t /= d) * t;
  var tc = ts * t;
  return b + c * (6 * tc * ts + -15 * ts * ts + 10 * tc);
}

function navigate(e) {
  if (e.target.hash.indexOf('#') < 0) {
    return;
  }

  e.preventDefault();

  var anchorEl = document.getElementById(e.target.hash.slice(1));

  if (!anchorEl) {
    return false;
  }

  var sectionPos = anchorEl.offsetTop;

  var start = window.scrollY;
  var duration = 30;
  var distance = sectionPos - window.scrollY;
  var t = 0;

  requestAnimationFrame(scrollMe);

  function scrollMe() {
    t++;
    window.scrollTo(0, inOutQuintic(t, start, distance, duration));

    if (t != duration) {
      requestAnimationFrame(scrollMe);
    }
  }
}

menuItems.on('click', navigate);
