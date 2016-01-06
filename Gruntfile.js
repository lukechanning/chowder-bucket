'use strict';

module.exports = function (grunt) {
    
    // Show elapsed time after tasks run to visualize performance
    require('time-grunt')(grunt);
    // Load all Grunt tasks that are listed in package.json automagically
    require('load-grunt-tasks')(grunt);
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        // shell commands for use in Grunt tasks
        shell: {
            jekyllServe: {
                command: 'jekyll serve --host $IP --port $PORT --baseurl ""'
            }
        },

        // sass (libsass) config
        sass: {
          dist: {
            options: { 
                loadPath: [
                    '_components/foundation-sites/scss',
                    '_components/motion-ui/src'
                    ],
                style: 'expanded'
            },
            files: {
                'css/style.css': '_assets/scss/style.scss'
            }        
          }
        },
        
        // have Grunt uglify our Javascripts for us, keeping it tight
        uglify: {
            site_scripts: {
              files: {
                'js/site.min.js': [
                    '_components/jquery/dist/jquery.min.js',
                    '_components/owl.carousel/dist/owl.carousel.min.js',
                    '_assets/js/responsive.js'
                ],
                'js/custom.min.js' : [
                    '_assets/js/jCustom.js'
                ],
              }
            }
        },
        
        // watch for files to change and run tasks when they do
        watch: {
            grunt: { files: ['Gruntfile.js'] },
            sass: {
                files: ['_assets/scss/**/*.{scss,sass}'],
                tasks: ['sass']
            }
        },
        
        //load concurrently all the junk we need
        concurrent: {
            serve: [
                'sass',
                'uglify',
                'watch',
                'shell:jekyllServe'
            ],
            options: {
                logConcurrentOutput: true
            }
        },

    });
    
    grunt.loadNpmTasks('grunt-contrib-sass');
    
    // register the serve task
    grunt.registerTask('serve', ['concurrent:serve']);

    // Register build as the default task fallback
    grunt.registerTask('default', ['sass','uglify']);

};