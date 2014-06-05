var Main = {};

Main = {
	_BASEPATH: '../src/images',
	_currentScreen: null,

	setUp: function(){
		var that = this;

		that._currentScreen = $('body').data('screen');

		that.Tracking.trackingEvents();

		if (that._currentScreen == 'home') {
			that.Other.createOther();
		};

	},

	Tracking: {
		trackingEvents: function() {
			$('.nav-home').on('click', function(event) {
				ga('send', 'event', 'header', 'Menu', 'Home');
			});

			$('.nav-sobre').on('click', function(event) {
				ga('send', 'event', 'header', 'Menu', 'Sobre');
			});

			$('.nav-contato').on('click', function(event) {
				ga('send', 'event', 'header', 'Menu', 'Contato');
			});
		}
	},

	Other: {
		createOther: function() {
			console.log('Teste');
		}
	}
}