require.config({
	paths: {
		jquery: '../bower_components/jquery/dist/jquery.min',
		underscore: '../bower_components/underscore/underscore',
		backbone: '../bower_components/backbone/backbone'
	},
	shim: {
		
		backbone: {
			deps: ['jquery', 'underscore'],
			exports: 'Backbone'
		}
	}
});
require(
		['./scoreModelTest'],
		function(scoreModelTest) {
			// run the tests.
			scoreModelTest.run();
			
			// start QUnit.
			QUnit.load();
			QUnit.start();
		}
);