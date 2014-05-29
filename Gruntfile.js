module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			src: ['Gruntfile.js', 'static/app/**/*.js', 'static/js/init.js'],
			tests: ['static/test/**/*.js']
		},
		qunit: {
			all: ['static/test/test.html']
		},
		requirejs: {
			compile: {
			  options: {
				baseUrl: "./static/app",
				mainConfigFile: "./static/app/init.js",
				removeCombined: true,
				findNestedDependencies: true,
				dir: "./static/dist",
				modules: [{
						name: "init",
						exclude: [
							"backbone",
							"bootstrap",
							"jquery",
							"underscore",
							"tpl",
							"marionette"
						]
				}],
				paths: {
					jquery: '../bower_components/jquery/dist/jquery.min',
					underscore: '../bower_components/underscore/underscore',
					backbone: '../bower_components/backbone/backbone',
					marionette: '../bower_components/marionette/lib/backbone.marionette.min',
					tpl: '../lib/tpl',
					bootstrap: '../bower_components/bootstrap/dist/js/bootstrap'
				}
			  }
			}
		},
		run: {
			commands: {
				exec: 'npm run-script local-server'
			}
  }
	});
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-run');
	
	grunt.registerTask('default', ['jshint', 'qunit']);
	
	
	grunt.registerTask('dist', ['jshint', 'qunit', 'requirejs']);
	
	grunt.registerTask('server', ['jshint', 'qunit', 'run']);

};