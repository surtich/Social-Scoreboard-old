define(['../app/model/score', '../app/view/score'], function(ScoreItem, ScoreView) {

	var run = function() {

		module('Score View tests');

		test('Check the template score', function() {

			var scoreItem = new ScoreItem({
				home: 37,
				guest: 50
			});

			var scoreView = new ScoreView({model: scoreItem});
			
			scoreView.render();
			
			equal(scoreView.el.innerHTML, '<h3>37 : 50</h3>', 'The template does not match.');
		});

	};
	return {run: run};

});

			