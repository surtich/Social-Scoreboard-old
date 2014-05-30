define(['marionette', '../templates', '../model/value'], function(Marionette, templates, ValueItem) {
	
	var ValueView = Marionette.ItemView.extend({
		template: templates.score,
		className: 'points',
		tagName: 'div', //not necesary this is the default
		initialize: function() {
			this.model.on('change', this.render, this);
		}
	});
	
	return ValueView;
});