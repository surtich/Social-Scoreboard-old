define(['../app/model/score'], function(ScoreItem) {
	
	var scoreItem = new ScoreItem({
		home: 37,
		guest: 50
	});

	console.log(scoreItem.get('home'));
	scoreItem.set({home: 52});
	console.log(scoreItem.get('home'));
	
	return scoreItem;

});

			