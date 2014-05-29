define(['../app/model/score'], function(ScoreItem) {

	var run = function() {

		module('Score Model tests');
		
		QUnit.test('Check empty score', function() {

			var scoreItem = new ScoreItem({});

			QUnit.equal(scoreItem.get('home'), 0, 'The home team score should be 0.');
			QUnit.equal(scoreItem.get('guest'), 0, 'The guest team score should be 0.');
		});

		QUnit.test('Check the team scores', function() {

			var scoreItem = new ScoreItem({
				home: 37,
				guest: 50
			});

			QUnit.equal(scoreItem.get('home'), 37, 'The home team score should be 37.');
			QUnit.equal(scoreItem.get('guest'), 50, 'The guest team score should be 37.');
		});

		QUnit.test('Check update score', function() {

			var scoreItem = new ScoreItem({
				home: 37,
				guest: 50
			});

			QUnit.equal(scoreItem.get('home'), 37, 'The home team score should be 37.');
			scoreItem.set({home: 52});
			QUnit.equal(scoreItem.get('home'), 52, 'Afted the update, the home team score should be 52.');
		});


	};
	return {run: run};
});

			