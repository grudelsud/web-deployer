var Base = require('./base');

module.exports = Base.extend({
	defaults: {
		"ver_git": "git version",
		"ver_httpd": "httpd version"
	},
	initialize: function() {

		Base.prototype.initialize.apply(this, arguments);


		var that = this;
		var exec;
		try {
			// rendr executes backbone.js both on server and client side so require('child_process') 
			// throws an exception in the browser preventing further requests to backbone if not caught
			exec = require('child_process').exec;
		} catch(e) {
			exec = function() {};
		}

		exec('git --version', function(error, stdout, stderr) {
			that.set("ver_git", stdout);
		});

		exec('httpd -V', function(error, stdout, stderr) {
			var lines = stdout.split('\n');
			that.set("ver_httpd", lines[0]);
		});

	},
	url: '/',
});

module.exports.id = 'Server';
