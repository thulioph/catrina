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
    this.sectionActive();
  },

  getClick: function() {
    var target, that;

    that = this;

    // nav links
    $('.nav-list').on('click', 'a', function(event) {
      event.preventDefault();
      target = $( $(this).attr('href') );

      that.smoothScroll(target, 85);
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
  },

  sectionActive: function() {
    var that = this;

    $(document).on('scroll', that.markerSection);
  },

  markerSection: function() {
    var that, scrollPos;

    that = this;
    scrollPos = $(document).scrollTop()+115;

    $('.nav-item').each(function() {
      var currentElement = $(this),
          currentLink = $(this).children(), // get a
          refElement  = $(currentLink.attr('href'));

      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('.nav-link').removeClass('js-nav-active');
        currentElement.addClass('js-nav-active');
      } else {
        currentElement.removeClass('js-nav-active');
      }
    });
  },

  // called when APP.Instagram and App.Twitter are created.
  progressBar: function() {
    var winHeight = $(window).height(),
        docHeight = $('main').height(),
        progressBar = $('progress'),
        max, value;

    max = docHeight - winHeight;
    progressBar.attr('max', max);

    $(document).on('scroll', function(){
      value = $(window).scrollTop();
      progressBar.attr('value', value);
    });
  },
}
