// ==========================================
// LocalStorage
// ==========================================

var APP = APP || {};
APP.Storage = {
  setUp: function() {
  },

  // converte o conteúdo do ajax em string;
  convertString: function(chave, html) {
    var that, string;

    that = this;
    string = JSON.stringify(html);

    that.insertLocalStorage(chave, string);
  },

  // insere o conteúdo no localStorage;
  insertLocalStorage: function(text, string) {
    localStorage.setItem(text, string);
  },

  // verifica se o conteúdo existe;
  getStorageReceitasInterna: function(key, href) {
    var that = this;

    if (localStorage.getItem(key) == null) {
      APP.Request.ReceitasInterna.ajax(href, key);
    } else {
      that.checkCapaticy(key);
      var href = JSON.parse(localStorage.getItem(key));
      $('#main').html(href);
    }
  },

  // verifica a capacidade do localStorage
  checkCapaticy: function(key) {
    var len, max;

      max = 5126,
      len = localStorage.getItem(key).length;

      if (len <= max) {
        console.warn('Seu localStorage está com: ' +  Math.round(max-len) + 'kb');
      } else {
        console.warn('Seu localStorage está com: ' + len);
      }
  }
}
