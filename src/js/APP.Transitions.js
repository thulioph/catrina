// ==========================================
// Transition between pages
// ==========================================

var APP = APP || {};
APP.Transitions = {
  setUp: function() {
    this.checkPage();
  },

  checkPage:function() {
    var id, that;

    that = this;
    id = $('body').attr('id');

    that.activeTransition(id);
  },

  activeTransition: function(id) {
    var content;

    content = $(id).smoothState({
      prefetch: true, // delay between hover and click
      pageCacheSize: 4, // cache in memory
      onStart: { // run with click
        duration: 500, // duration of animations
        render: function(url, $container) {
          content.toggleAnimationClass('is-exiting');
          $('body').animate({ scrollTop: 0 });
        }
      }
    }).data('smoothState');
  }
}
