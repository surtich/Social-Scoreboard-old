var ScoreView = Backbone.View.extend({
	render: function() {
		var html = '<h3>' + this.model.get('home') + ' : '  + this.model.get('guest') + '</h3>';
		$(this.el).html(html);
	}
});