// ==========================================
// Verify if user have internet.
// ==========================================

var APP  = APP || {};
APP.Status = {
  setUp: function() {
    var handlerStatus;

    handlerStatus = APP.delegate(this, this.getStatus);
    $(window).on('online offline', handlerStatus);
  },

  getStatus: function() {
    var that = this;

    if (navigator.onLine == true) {
      that.statusOn();
    } else {
      that.statusOff();
    }
  },

  statusOn: function() {
    var body;

    body = document.querySelector('body');
    body.classList.remove('js-offline');
    body.removeAttribute('data-status');

    APP.Storage.searchToSend();
  },

  statusOff: function() {
    var body;

    body = document.querySelector('body');
    body.classList.add('js-offline');
    body.setAttribute('data-status', 'Você parece não possuir acesso a internet :(');
  }
};
