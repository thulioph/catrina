// ==========================================
// Request external pages with local storage
// ==========================================

var APP = APP || {};
APP.Request = {
  setUp: function() {
    this.getClick();
  },

  getClick: function() {
    var href, text, that, sectionId;

    that = this;

    $('.request').on('click', function(event) {
      event.preventDefault();

      href = $(this).attr('href');
      text = $(this).attr('href').replace('.html', '');
      sectionId = text;

      APP.Storage.getStorage(text, href, sectionId);
    });
  },

  ajax: function(url, key, sectionId) {
    $.ajax({
      url: url,
      type: 'GET',

      beforeSend: function() {
        console.log('Loading..');
      },

      success: function(data) {
        $('#'+sectionId).html(data);

        // adds in local storage
        var value = $('#'+sectionId).html();
        APP.Storage.convertString(key, value);
      },

      error: function(error) {
        console.warn(error);
      }
    });
  }
}
