var APP = APP || {};
APP.Scroll = {
  setUp: function(){
    this.getClick();
    this.getHeader();
  },

  getClick: function() {
    var target, that;

    that = this;

    // nav links
    $('.nav-list').on('click', 'a', function(event) {
      event.preventDefault();
      target = $( $(this).attr('href') );

      // collapsed navbar
      $('#navbar').removeClass('in');
      $('#navbar').attr('aria-expanded', 'false');

      that.smoothScroll(target, 30);

      // adds and removes active class
      $('.nav-list a').removeClass('js-nav-active');
      $(this).addClass('js-nav-active');
    });

    // footer link
    $('.scroll').on('click', function(event) {
      event.preventDefault();
      target = $( $(this).attr('href') );

      that.smoothScroll(target, 50);
    });
  },

  smoothScroll: function(target, offset) {
    $('html, body').animate({
      scrollTop: target.offset().top - offset
    }, 2000);
  },

  getPosition: function() {
    var that = this;

    $(window).on('scroll', function() {
      if ($(document).scrollTop() >= 585) {
        $('#nav-primary').addClass('js-fixed');
        that.addLogo();
      } else if ($(document).scrollTop() <= 586) {
        $('#nav-primary').removeClass('js-fixed');
        that.removeLogo();
      }
    });
  },

  getPositionMobile: function() {
    $(window).on('scroll', function() {
      if ($(document).scrollTop() >= 400) {
        $('#nav-primary').addClass('js-fixed');
        $('.navbar-brand').addClass('js-opacity');
      } else if ($(document).scrollTop() <= 401) {
        $('#nav-primary').removeClass('js-fixed');
        $('.navbar-brand').removeClass('js-opacity');
      }
    });
  },

  getHeader: function() {
    var iphone, that, href;

    that = this;
    iphone = navigator.userAgent.match(/iPhone/i);
    href = 'organizers.html';

    if (iphone == null) {
      that.getPosition();
    } else {
      that.dataMobile();
      that.getPositionMobile();
      APP.External.request(href);
    }
  },

  addLogo: function() {
    $('.nav-item').removeClass('col-md-3');
    $('.nav-item').addClass('col-md-2');

    $('.nav-logo').removeClass('invisible col-md-1');
    $('.nav-logo').addClass('col-md-4');
    $('.nav-logo').css('width', '33.33333%');
    $('.nav-logo').css('padding', 'auto');
  },

  removeLogo: function() {
    $('.nav-item').removeClass('col-md-2');
    $('.nav-item').addClass('col-md-3');

    $('.nav-item:nth-child(1)').removeClass('col-md-2');
    $('.nav-item:nth-child(1)').addClass('col-md-3');

    $('.nav-logo').removeClass('col-md-4');
    $('.nav-logo').addClass('invisible col-md-1');
    $('.nav-logo').css('width', '0');
    $('.nav-logo').css('padding', '0');
  },

  dataMobile: function() {
    $('.nav-desktop').css('display', 'none');
    $('.nav-desktop').removeAttr('id');

    $('.navbar').attr('id', 'nav-primary');
    $('.navbar').css('display', 'block');
  }
}
