// ==========================================
// Verifica se o usuário possui conexão
// ==========================================

var APP  = APP || {};
APP.Tracking = {
  setUp: function() {
    this.initTracking();
  },

  initTracking: function() {
    $('.nav-home').on('click', function(event) {
      ga('send', 'event', 'header', 'Menu', 'Home');
    });

    $('.nav-about').on('click', function(event) {
      ga('send', 'event', 'header', 'Menu', 'Sobre');
    });

    $('.nav-contact').on('click', function(event) {
      ga('send', 'event', 'header', 'Menu', 'Contato');
    });
  }
};
