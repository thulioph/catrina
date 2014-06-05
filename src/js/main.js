var Main = {};

Main = {
	_BASEPATH: '../src/images',
	_currentScreen: null,

	setUp: function(){
		var that = this;

		that._currentScreen = $('body').data('screen');

		// Events Tracking
		that.Tracking.trackingEvents();

		// Language
		that.Language.startLanguage();

		$('.language-en').on('click', function() {
				that.Language.i18en();
		});

		$('.language-pt').on('click', function() {
				that.Language.i18pt();
		});

		// if (that._currentScreen == 'home') {};

	},

	Tracking: {
		trackingEvents: function() {
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
	},

	Language: {
		startLanguage: function() {
			i18n.init({
				fallbackLng: 'pt-BR' //fallback quando não definir linguagem
				,debug: true //debug do plugin
				,fixLng: true //preserva o cookie quando a linguagem for definida
				,load: 'current' //define a forma correta de declarar linguagens
			},
			function(translation) {
				$('[data-i18n]').i18n();
				var appName = translation('app.name');
			});
		},

		i18en: function() {
			i18n.setLng('en-US', {fixLng: true}, function(translation){
				$('[data-i18n]').i18n();
			});
		},

		i18pt: function() {
			i18n.setLng('pt-BR', {fixLng: true}, function(translation){
				$('[data-i18n]').i18n();
			});
		}
	}
}