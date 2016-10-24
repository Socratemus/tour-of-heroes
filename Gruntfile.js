module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      default: {
        files: ['app/**/*.*'],
        tasks: ['copy:main'],
        options: {
          spawn: false,
        },
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, src: ['**/*.html','**/*.css'], dest: 'dist/', cwd: 'app'}
        ],
      }
    }
  });

  
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['watch:default']);
};