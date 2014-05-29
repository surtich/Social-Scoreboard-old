define(['marionette', './view/score', './model/score'], function(Marionette, ScoreView, ScoreModel) {

	var app = new Marionette.Application();
	
	var scoreTest = new ScoreModel({
		home: 34,
		guest: 45
	});
	
	var scoreView = new ScoreView({
		model: scoreTest
	});
	
	app.addRegions({
		headerRegion: '#header',
		mainRegion: '#main',
		footerRegion: '#footer'
	});
	
	app.addInitializer(function() {
		app.mainRegion.show(scoreView);
	});

	return app;
});
