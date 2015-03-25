// ==========================================
// Trackea os clicks do usuário.
// ==========================================

var APP  = APP || {};
APP.Tracking = {
  setUp: function() {
    this.initTracking();
  },

  initTracking: function() {
    var category, action;

    $('[data-track]').on('click', function() {
        category = $(this).attr('data-track'),
        action = $(this).attr('data-action');

      ga('send', 'event', category, action);
    });
  }
};
