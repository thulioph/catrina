// ==========================================
// Lib that active konami code.
// ==========================================

var APP  = APP || {};
APP.EasterEggs = {
  setUp: function() {
    this.checkPlatform();
  },

  checkPlatform: function() {
    var mobile, regex, that;

    that = this;
    regex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    mobile = regex.test(navigator.userAgent);

    if (!mobile) {
      that.activeWithText();
    } else {
      that.activeWithGestures();
    }
  },

  activeWithText :function() {
    cheet('h u m a n s', function() {
      window.open(document.URL + 'humans.txt', 'Project Team');
    });
  },

  activeWithGestures: function() {
    var hammerPad, hitArea;

    hitArea = document.querySelector('#copyright');
    hammerPad = new Hammer(hitArea);

    hammerPad.on("tap", function(event){
      var pointer0 = event.pointers[0];

      if (event.type.match(/tap/g)) {
        var tap = event.tapCount;

        console.log('Try again :)');

        if (tap === 2) {
          window.open(document.URL + 'humans.txt', 'Project Team');
        }
      }

    });
  }
};
