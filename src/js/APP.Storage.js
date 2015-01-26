// ==========================================
// Local Storage
// ==========================================

var APP = APP || {};
APP.Storage = {
  setUp: function() {},

  // convert return of ajax to string
  convertString: function(chave, html) {
    var that, string;

    that = this;
    string = JSON.stringify(html);

    that.insertLocalStorage(chave, string);
  },

  // adds content in local storage
  insertLocalStorage: function(text, string) {
    localStorage.setItem(text, string);
  },

  // verify if content is true
  getStorage: function(key, href, sectionId) {
    var that = this;

    if (localStorage.getItem(key) == null) {
      APP.Request.ajax(href, key, sectionId);
    } else {
      that.checkCapaticy(key);
      var href = JSON.parse(localStorage.getItem(key));
      $('#'+sectionId).html(href);
    }
  },

  // verify the capacity of local storage
  checkCapaticy: function(key) {
    var len, max;

      max = 5126,
      len = localStorage.getItem(key).length;

      if (len <= max) {
        console.warn('Seu localStorage está com: ' +  Math.round(max-len) + 'kb');
      } else {
        console.warn('Seu localStorage está com: ' + len);
      }
  },

  // check if have data to send.
  searchToSend: function() {
    console.warn('Check if have data..');

    var data = [];

    for (var i = 0; i < localStorage.length; i++){
      data.push(localStorage.getItem(localStorage.key(i)));
      APP.Contact.sendForm(data);
    }

    console.log('Data: ', data);
  }
}
