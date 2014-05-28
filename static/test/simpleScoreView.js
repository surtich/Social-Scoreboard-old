(function() {

	var scoreItem = new ScoreItem({
		home: 37,
		guest: 50
	});

	var scoreView = new ScoreView({model: scoreItem});
	scoreView.render();
	console.log(scoreView.el);

})();

			