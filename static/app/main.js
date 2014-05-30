define(['marionette', './view/value', './view/consoleButton', './model/value'], function(Marionette, ValueView, ConsoleButtonView, ValueModel) {

	var app = new Marionette.Application();
	
	var homeScore = new ValueModel({
		number: 34
	});
	
	var guestScore = new ValueModel({
		number: 12
	});
	
	var homeView = new ValueView({
		model: homeScore
	});
	
	var guestView = new ValueView({
		model: guestScore
	});
	
	var button_1Home = new ConsoleButtonView({
		model: homeScore,
		points: 1
	});

	app.addRegions({
		homeTeam: '#home',
		guestTeam: '#guest',
		button_1Home: '#button_1_home'
	});
	
	app.addInitializer(function() {
		app.homeTeam.show(homeView);
		app.guestTeam.show(guestView);
		app.button_1Home.show(button_1Home);
	});

	return app;
});
