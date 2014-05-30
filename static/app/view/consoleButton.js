define(['marionette', '../templates', '../model/value'], function(Marionette, templates, ValueItem) {
	
	var ConsoleButtonView = Marionette.ItemView.extend({
		template: templates.consoleButton,
		className: 'button',
		tagName: 'div', //not necesary this is the default
		serializeData: function() {
			return {
				points: this.options.points
			};
		},
		events: {
			'click a': 'changePoints'
		},
		changePoints: function() {
			this.model.add(this.options.points);
		}
	});
	
	return ConsoleButtonView;
});