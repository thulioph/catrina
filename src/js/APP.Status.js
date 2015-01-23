// ==========================================
// Verifica se o usuário possui conexão
// ==========================================

var APP  = APP || {};
APP.Status = {
  setUp: function() {
    var handlerStatus;

    handlerStatus = APP.delegate(this, this.getStatus);
    $(window).on('online offline', handlerStatus);

    this.getStatus();
  },

  getStatus: function() {
    if (navigator.onLine == true) {
      APP.Status.statusOn();
    } else {
      APP.Status.statusOff();
    }
  },

  statusOn: function() {
    var body;

    body = document.querySelector('body');
    body.classList.remove('js-offline');
    body.removeAttribute('data-status');
  },

  statusOff: function() {
    var body;

    body = document.querySelector('body');
    body.classList.add('js-offline');
    body.setAttribute('data-status', 'Você parece não possuir acesso a internet :(');
  }
};
