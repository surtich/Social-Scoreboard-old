define(['backbone', './value'], function(Backbone, ValueItem) {
	
	var ScoreItem = Backbone.Model.extend({
		defaults: {
      home: {
        name: 'home',
        points: new ValueItem({})
      },
      guest: {
        name: 'guest',
        points: new ValueItem({})
      }
		},
    getResult: function(){
      
      var result = {};
      
      var diff = this.get('home').points.get('number') - this.get('guest').points.get('number');
      
      switch (true) {
        case diff > 0:
          result.winner = this.get('home').name;
          break;
        case diff < 0:
          result.winner = this.get('guest').name;
          break;
        default:
           result.winner = 'tie';
      }
      
      result.by = Math.abs(diff);
      
      return result;
      
    }
	});
	
	return ScoreItem;
});