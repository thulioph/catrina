var Main = {};

Main = {
	_BASEPATH: '../src/images',
	_currentScreen: null,

	setUp: function(){
		var that = this;

		that._currentScreen = $('body').data('screen');

		if (that._currentScreen == 'home') {
			that.Other.createOther();
		};

	},

	Other: {
		createOther: function() {
			console.log('Teste');
		}
	}
}