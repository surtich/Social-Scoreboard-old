define(["backbone"], function(Backbone) {
	
	var ValueItem = Backbone.Model.extend({
		defaults: {
			number: 0
		},
		add: function(amount) {
			var newValue = this.get('number') + amount;
			
			if (newValue < 0) {
				newValue = 0;
			}
			
			this.set('number', newValue);
			
			return this;
		}
	});
	
	return ValueItem;
});