define(['marionette', '../templates'], function(Marionette, templates) {
	
	var ScoreView = Marionette.ItemView.extend({
		template: templates.score
	});
	
	return ScoreView;
});