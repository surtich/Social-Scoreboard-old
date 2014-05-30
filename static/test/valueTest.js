define(['../app/model/value'], function(ValueItem) {

	var run = function() {

		module('Value Model tests');

		QUnit.test('Check empty value', function() {

			var valueItem = new ValueItem({});

			QUnit.equal(valueItem.get('number'), 0, 'The value should be 0.');
		});


		QUnit.test('Check non empty value', function() {

			var valueItem = new ValueItem({number: 10});

			QUnit.equal(valueItem.get('number'), 10, 'The value should be 10.');
		});


		QUnit.test('Check add method', function() {

			var valueItem = new ValueItem({number: 10});

			valueItem.add(2);

			QUnit.equal(valueItem.get('number'), 12, 'The value should be 12.');

			valueItem.add(-1);

			QUnit.equal(valueItem.get('number'), 11, 'The value should be 11.');
		});

		QUnit.test('Check cascade calls', function() {

			var valueItem = new ValueItem({number: 10});

			valueItem.add(2).add(-1);

			QUnit.equal(valueItem.get('number'), 11, 'The value should be 11.');
		});

		QUnit.test('Check cascade calls', function() {

			var valueItem = new ValueItem({number: 0});

			valueItem.add(-1);

			QUnit.equal(valueItem.get('number'), 0, 'The value should be 0.');
		});


	};

	return {run: run};
});

			