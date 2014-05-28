define(['../app/view/score', './simpleScoreModel'], function(ScoreView, scoreItem) {
	
	var scoreView = new ScoreView({model: scoreItem});
	scoreView.render();
	console.log(scoreView.el);

});

			