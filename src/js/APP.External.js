var APP = APP || {};
APP.External = {
  setUp: function() {
    this.getClick();
  },

  getClick: function() {
    var href, lng;

    $('.external').on('click', function(event) {
      event.preventDefault();

      href = $(this).attr('href');
      lng = i18n.lng();

      if (lng != 'en-US') {
        var hrefPt = href.replace('.html', '-pt.html');
        APP.External.request(hrefPt);
      } else {
        APP.External.request(href);
      }

    });
  },

  request: function(href) {
    $.ajax({
      url: href,

      beforeSend: function() {
        $('#external').html('Carregando conteúdo...');
      },

      success: function(href) {
        $('#external').html(href);
      },

      error: function() {
        console.log('Ocorreu um erro!');
      }
    });
  }
}
