"use strict";
require.config({
	paths: {
		QUnit: '../bower_components/qunit/qunit/qunit',
		jquery: '../bower_components/jquery/dist/jquery.min',
		underscore: '../bower_components/underscore/underscore',
		backbone: '../bower_components/backbone/backbone',
		marionette: '../bower_components/marionette/lib/backbone.marionette.min'
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
		},
		marionette: {
			deps: ['jquery', 'underscore', 'backbone'],
			exports: 'Marionette'
		}
	}
});

require(
		['QUnit', './scoreModelTest'],
		function(QUnit, scoreModelTest) {

			// run the tests.
			scoreModelTest.run();
			
			// start QUnit.
			QUnit.load();
			QUnit.start();
		}
);