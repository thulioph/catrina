// ==========================================
// Smooth scroll when click.
// ==========================================

var APP = APP || {};
APP.Scroll = {
  setUp: function(){
    this.getClick();
  },

  getClick: function() {
    var target, that;

    that = this;

    // nav links
    $('.nav-list').on('click', 'a', function(event) {
      event.preventDefault();
      target = $( $(this).attr('href') );

      that.smoothScroll(target, 45);

      // adds and removes active class
      $('.nav-list a').removeClass('js-nav-active');
      $(this).addClass('js-nav-active');
    });
  },

  smoothScroll: function(target, offset) {
    $('html, body').animate({
      scrollTop: target.offset().top - offset
    }, 2000);
  }
}
