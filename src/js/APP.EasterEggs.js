// ==========================================
// Lib that active konami code.
// ==========================================

var APP  = APP || {};
APP.EasterEggs = {
  setUp: function() {
    this.activeWithText();
  },

  activeWithText :function() {
    cheet('h u m a n s', function() {
      window.open(document.URL + 'humans.txt', 'Project Team');
    });
  },

  activeWithGestures: function() {
    console.log('Gestos');
  }
};
