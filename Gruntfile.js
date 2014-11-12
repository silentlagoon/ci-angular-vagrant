module.exports = function(grunt) {
	grunt.initConfig({
	    phpunit: {
		    classes: {
		        dir: 'tests'
		    },
		    options: {
		        bin: 'vendor/bin/phpunit',
		        bootstrap: '',
		        colors: true
		    }
		}
	});
	grunt.loadNpmTasks('grunt-phpunit');
	grunt.registerTask('default', [
        'phpunit'
    ]);
};