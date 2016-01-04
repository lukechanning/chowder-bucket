module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {
      foundation: {
        expand: true,
        src: '_components/foundation/scss/**',
        dest: '_sass/**',
        flatten: true,
      },
    },

  });

  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['copy']);
}