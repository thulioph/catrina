// ==========================================
// Smooth scroll when click.
// ==========================================

var APP = APP || {};
APP.Scroll = {
  setUp: function(){
    this.getClick();
    this.getPosition();
    this.showBackTop();
    this.backTop();
  },

  getClick: function() {
    var target, that;

    that = this;

    // nav links
    $('.nav-list').on('click', 'a', function(event) {
      event.preventDefault();
      target = $( $(this).attr('href') );

      that.smoothScroll(target, 85);

      // adds and removes active class
      $('.nav-item').removeClass('js-nav-active');
      $(this).parent().addClass('js-nav-active');
    });
  },

  smoothScroll: function(target, offset) {
    $('html, body').animate({
      scrollTop: target.offset().top - offset
    }, 1500);
  },

  getPosition: function() {
    $(window).on('scroll', function() {
      if ($(document).scrollTop() >= 345) {
        $('#nav-primary').addClass('js-nav-active');
      } else if ($(document).scrollTop() <= 405) {
        $('#nav-primary').removeClass('js-nav-active');
      }
    });
  },

  showBackTop: function() {
    $(window).on('scroll', function() {
      if ($(document).scrollTop() >= 1885) {
        $('#back-top').addClass('js-show');
      } else {
        $('#back-top').removeClass('js-show');
      }
    });
  },

  backTop: function() {
    var that, target;

    that = this;

    $('#back-top').on('click', function(event) {
      event.preventDefault();
      target = $( $(this).attr('href') );

      that.smoothScroll(target, 0);
    });
  }
}
