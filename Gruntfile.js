module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
	    phpunit: {
		    classes: {
		        dir: 'tests'
		    },
		    options: {
		        bin: 'vendor/bin/phpunit',
		        bootstrap: '',
		        colors: true
		    }
		},
		karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }
	});
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-phpunit');
	grunt.registerTask('default', [
        'phpunit', 'karma'
    ]);
};