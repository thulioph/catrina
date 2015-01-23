var APP = APP || {};
APP.Language = {
  setUp: function() {
    this.startLanguage();
    this.changeLanguage();
  },

  startLanguage: function() {
    i18n.init({
      fallbackLng: 'en-US' // fallback when language is not defined language
      ,debug: false // debug
      ,fixLng: true // preserve cookie when language is not defined
      ,load: 'current' // define the correct form to describe language
    },

    function(translation) {
      var appName, string;

      $('[data-i18n]').i18n();
        appName = translation('app.name');
        string = document.cookie;

      if (string.indexOf('i18next=pt-BR') != -1) {
        APP.Language.i18pt();
        $('.pt').addClass('js-active');
      } else {
        APP.Language.i18en();
        $('.en').addClass('js-active');
      }

    });
  },

  i18en: function() {
    i18n.setLng('en-US', {fixLng: true}, function(translation){
      $('[data-i18n]').i18n();
    });

    $('#logo-primary').removeClass('js-logo-pt');
    $('#logo-primary').addClass('js-logo-en');
    $('.nav-logo').css('background-image', 'url(dist/images/logo-primary-2-en.png)');
    $('.navbar-brand').css('background-image', 'url(dist/images/logo-primary-2-en.png)');
  },

  i18pt: function() {
    i18n.setLng('pt-BR', {fixLng: true}, function(translation){
      $('[data-i18n]').i18n();
    });

    $('#logo-primary').removeClass('js-logo-en');
    $('#logo-primary').addClass('js-logo-pt');
    $('.nav-logo').css('background-image', 'url(dist/images/logo-primary-2-pt.png)');
    $('.navbar-brand').css('background-image', 'url(dist/images/logo-primary-2-pt.png)');
  },

  activeClass:function(element) {
    $('#switch-language button').removeClass('js-active');
    $(element).addClass('js-active');
  },

  changeLanguage: function() {
    var attr, element;

    $('#switch-language').on('click', 'button', function(event) {
      element = this;
      attr = $(this).attr('data-language');

      if (attr == 'en') {
        APP.Language.activeClass(element);
        APP.Language.i18en();
      } else if (attr == 'pt') {
        APP.Language.activeClass(element);
        APP.Language.i18pt();
      }
    });
  }
}
