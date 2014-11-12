module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		bower: {
    		install: {},
    		options: {
    			targetDir: 'bower_components'
    		}
  		},
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
	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-phpunit');
	grunt.registerTask('test', [
        'phpunit', 'karma'
    ]);
	grunt.registerTask('default', ['bower']);
};