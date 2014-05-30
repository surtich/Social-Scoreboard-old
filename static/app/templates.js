/*global define */

define(function (require) {
	'use strict';
	
	return {
		score: require('tpl!./tmpl/value.html'),
		consoleButton: require('tpl!./tmpl/console_button.html')
	};
});