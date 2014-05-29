define(["backbone"], function(Backbone) {
	
	var ScoreItem = Backbone.Model.extend({
		defaults: {
			home: 0,
			guest: 0
		}
	});
	
	return ScoreItem;
});