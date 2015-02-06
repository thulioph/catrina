// ==========================================
// Verifica se o usuário possui conexão
// ==========================================

var APP  = APP || {};
APP.Tracking = {
  setUp: function() {
    this.initTracking();
  },

  initTracking: function() {
    $("[data-track='nav-home']").on('click', function(event) {
      // 'send', 'event', 'element position', 'label', 'element that click'
      ga('send', 'event', 'header', 'Nav', 'Home');
    });

    $("[data-track='nav-about']").on('click', function(event) {
      ga('send', 'event', 'header', 'Nav', 'About');
    });

    $("[data-track='nav-social']").on('click', function(event) {
      ga('send', 'event', 'header', 'Nav', 'Social');
    });

    $("[data-track='nav-contact']").on('click', function(event) {
      ga('send', 'event', 'header', 'Nav', 'Contact');
    });
  }
};
