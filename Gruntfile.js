module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			src: ['Gruntfile.js', 'static/app/**/*.js', 'static/js/init.js'],
			tests: ['static/test/**/*.js']
		},
		qunit: {
			all: ['static/test/test.html']
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	
	grunt.registerTask('default', ['jshint', 'qunit']);

};