module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // Clean-up Task configuration.
    clean: {
      dist: [ 'css/style.*.*' ]
    },

    // HTML Validation Task Configuration
    validation: {
      options: {
        charset: 'utf-8',
        doctype: 'HTML5',
        failHard: false,
        reset: true,
        relaxerror: [
          'Bad value X-UA-Compatible for attribute http-equiv on element meta.',
          'Empty heading.',
          'Bad value'
        ]
      },
      files: {
        src: [ '*.html' ]
      }
    },

    // JS Validation Task Configuration
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      }
    },

    // JS Minification
    // https://github.com/gruntjs/grunt-contrib-uglify
    // uglify: {
    //   options: {
    //     mangle: false,
    //     report: 'min'
    //   },
    //   js: {
    //     files: {
    //       'js/totop.min.js': ['js/totop.js']
    //     }
    //   }
    // },

    // LESS Configuration
    less: {
      compileCore: {
        options: {
          strictMath: true
          //sourceMap: true,
          //outputSourceFiles: true,
          //sourceMapURL: 'css/style.css.map',
          //sourceMapFilename: 'css/style.css.map'
        },
        files: {
          'css/style.css': 'less/style.less',
          'css/cover.css': 'less/cover.less',
          'css/svg-draw.css': 'less/svg-draw.less'
        }
      },
      minify: {
        options: {
          cleancss: true,
          report: 'min'
        },
        files: {
          'css/style.min.css': 'css/style.css',
          'css/cover.min.css': 'css/cover.css',
          'css/svg-draw.min.css': 'css/svg-draw.css'
        }
      }
    },

    // CSS Lint Configuration
    // https://github.com/gruntjs/grunt-contrib-csslint
    // https://github.com/stubbornella/csslint/wiki/Rules
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      src: ['css/style.css']
    },

    // Connect Static Server Configuration
    // https://github.com/gruntjs/grunt-contrib-connect
    connect: {
      server: {
        options: {
          port: 3000,
          base: '.'
        }
      }
    },

    //Watch and LiveReload configuration
    watch: {
      // js: {
      //   files: ['js/toTop.js'],
      //   //tasks: ['concat:js', 'uglify:js'],
      //   tasks: ['uglify'],
      //   options: {
      //     livereload: true,
      //   }
      // },
      css: {
        files: ['less/*.less', 'less/bootstrap/*.less'],
        tasks: ['less'],
        options: {
          livereload: true,
        }
      },
      html: {
        files: ['*.html'],
        tasks: ['validation'],
        options: {
          livereload: true,
        }
      }
    }

  });


 /*
  *  This section is where we require the necessary plugins.
  *
  *  Let's be elegant and just tell Grunt
  *  to read our package.json devDependencies:
  */
  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});


 /*
  *  This section is where we setup the Grunt tasks
  */

  // HTML validation task
  grunt.registerTask('validate-html', ['validation']);

  // Compile LESS
  grunt.registerTask('compile-less', ['less']);

  // Process Javascript
  grunt.registerTask('process-js', ['jshint']);

  // Lint CSS
  grunt.registerTask('validate-css', ['csslint']);

  // Default Task (drives LiveReload)
  grunt.registerTask('default', [ 'clean', 'less', 'validation', 'connect', 'watch' ]);

};
