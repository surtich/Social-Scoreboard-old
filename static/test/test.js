"use strict";
require.config({
	paths: {
		QUnit: '../bower_components/qunit/qunit/qunit',
		jquery: '../bower_components/jquery/dist/jquery.min',
		underscore: '../bower_components/underscore/underscore',
		backbone: '../bower_components/backbone/backbone'
	},
	shim: {
		QUnit: {
			exports: 'QUnit',
			init: function() {
				QUnit.config.autoload = false;
				QUnit.config.autostart = false;
			}
		},
		backbone: {
			deps: ['jquery', 'underscore'],
			exports: 'Backbone'
		}
	}
});

require(
		['QUnit', './scoreModelTest', './scoreViewTest'],
		function(QUnit, scoreModelTest, scoreViewTest) {

			// run the tests.
			scoreModelTest.run();
			scoreViewTest.run();
			
			// start QUnit.
			QUnit.load();
			QUnit.start();
		}
);