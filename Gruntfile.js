'use strict';

module.exports = function (grunt) {
    
    //Add our tasks
    require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // sass (libsass) config
        sass: {
        options: {
            includePaths: ['_components/foundation-sites/scss']
          },
        dist: {
            options: {
              outputStyle: 'compressed',
              sourceMap: false
            },
            files: {
              'css/style.css': 'assets/scss/style.scss'
            }        
          }
        },
        
        // have Grunt uglify our Javascripts for us, keeping it tight
        uglify: {
            my_target: {
              files: {
                'js/site.min.js': [
                    '_components/jquery/dist/jquery.min.js',
                    '_components/owl.carousel/dist/owl.carousel.min.js',
                    'assets/js/responsive.js'
                ],
                'js/custom.min.js' : [
                    'assets/js/jCustom.js'
                ],
              }
            }
        },
        
        // watch for files to change and run tasks when they do
        watch: {
            grunt: { files: ['Gruntfile.js'] },
            sass: {
                files: ['assets/scss/**/*.{scss,sass}'],
                tasks: ['sass']
            }
        }

    });

    // Register build as the default task fallback
    grunt.registerTask('default', ['sass','uglify','watch']);

};