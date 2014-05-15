"use strict";

module.exports = function( grunt ) {

	// Load all tasks
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		// Watch
		watch: {
			css: {
				options: {
					livereload: true,
					port: 9000
				},
				files: [ 'src/sass/**/*' ],
				tasks: [ 'compass', 'concat' ]
			},
			js: {
				files: 'src/js/**/*',
				tasks: [ 'uglify' ]
			}
		},

		// Compile scss
		compass: {
			dist: {
				options: {
					force: true,
					config: 'config.rb'
				}
			}
		},

		// Concat css
		concat: {
			css: {
				src: 'src/css/main.css',
				dest: 'dist/css/styles.combined.min.css'
			}
		},

		// Concat and minify javascripts
		uglify: {
			options: {
				mangle: false,
				livereload: true
			},
			dist: {
				files: {
					'dist/js/scripts.combined.min.js' : 'src/js/**/*'
				}
			}
		},

		// Optimizes images
		imagemin: {
		    dynamic: {
		    	files: [{
		        	expand: true,
		        	cwd: 'src/images',
		        	src: ['**/*.{png,jpg,gif}'],
		        	dest: 'dist/images'
		    	}]
		    }
		},

		// Clean old images
		clean: {
			build: {
				src: ['dist/images']
			}
		}
	});

	// registrando tarefa default
	grunt.registerTask( 'default', [ 'watch' ] );
	grunt.registerTask( 'img', [ 'clean', 'imagemin' ] );
};