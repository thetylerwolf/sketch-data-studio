module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // Clean-up
    clean: {
      dist: [ '*.min.js' ]
    },

    // JS Validation
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      js: {
        src: [ 'totop.js' ]
      }
    },

    // JS Minification
    uglify: {
      options: {
        mangle: false,
        report: 'min'
      },
      js: {
        files: {
          'totop.min.js': [ 'totop.js' ]
        }
      }
    }

  });

 /*
  *  This section is where we require the necessary plugins.
  *  Let's be simple and just tell Grunt
  *  to read our package.json devDependencies:
  */
  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});


 /*
  *  This section is where we setup the Grunt tasks
  */
  grunt.registerTask('default', [ 'clean', 'jshint', 'uglify' ]);

};
