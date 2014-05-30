define(function(require) {
  
  var ScoreItem = require('../app/model/score');
  var ValueItem = require('../app/model/value');
  
  var run = function() {

    module('Score Model tests');

    QUnit.test('Check empty value', function() {

      var scoreItem = new ScoreItem({});

      QUnit.equal(scoreItem.get('home').name, 'home');
      QUnit.equal(scoreItem.get('guest').name, 'guest');

      QUnit.equal(scoreItem.get('home').points.get('number'), 0);
      QUnit.equal(scoreItem.get('guest').points.get('number'), 0);

    });

    QUnit.test('Check non empty value', function() {

      var scoreItem = new ScoreItem({
        home: {
          name: 'LAL',
          points: new ValueItem({number: 23})
        },
        guest: {
          name: 'OCK',
          points: new ValueItem({number: 34})
        }
      });

      QUnit.equal(scoreItem.get('home').name, 'LAL');
      QUnit.equal(scoreItem.get('guest').name, 'OCK');

      QUnit.equal(scoreItem.get('home').points.get('number'), 23);
      QUnit.equal(scoreItem.get('guest').points.get('number'), 34);

    });
    
    QUnit.test('Check result method', function() {

      var scoreItem = new ScoreItem({
        home: {
          name: 'LAL',
          points: new ValueItem({number: 23})
        },
        guest: {
          name: 'OCK',
          points: new ValueItem({number: 34})
        }
      });
      
      var result = scoreItem.getResult();
      
      QUnit.deepEqual(result, {winner: 'OCK', by: 11});

    });


  };

  return {run: run};
});

			