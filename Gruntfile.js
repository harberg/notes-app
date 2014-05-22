module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: ['dist'],

    copy: {
      all: {
        expand: true,
        cwd: 'app',
        src: ['*.css', '*.html', '/images/**/*', '!Gruntfile.js'],
        dest: 'dist/',
        flatten: true,
        filter: 'isFile'
      },
    },

    browserify: {
      all: {
        src: 'app/js/**/*.js',
        dest: 'dist/client.js'
      },
      options: {
        transform: ['debowerify'],
        debug: true
      }
    },

    jshint: {
      all: ['Gruntfile.js', 'app/**/*.js', 'test/**/*.js'],
      options: {
        jshintrc: true,
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      },
    },

    express: {
      options: {
        // Override defaults here
      },
      dev: {
        options: {
          script: 'server.js'
        }
      },
      prod: {
        options: {
          script: 'server.js',
          node_env: 'production'
        }
      },
      test: {
        options: {
          script: 'server.js'
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },

      html: {
        files: '<%= copy.all.src %>',
      },

      js: {
        files: '<%= browserify.all.src %>',
        tasks: ['browserify'],
      },

      assets: {
        files: ['assets/**/*', '*.css', 'images/**/*', 'img/**/*', '!Gruntfile.js'],
        tasks: ['copy'],
      }
    },

    simplemocha: {
      options: {
        globals: ['should'],
        timeout: 3000,
        ignoreLeaks: false,
        grep: '*-test',
      },
      all: { src: ['test/unit/**/*.js'] }
    },

    mocha: {
      test: {
        src: ['test/browser/**/*.html'],
        options: {
          run: true,
        },
      },
    },

  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('build', ['clean', 'browserify', 'copy']);
  grunt.registerTask('serve', ['build', 'express:dev', 'watch']);
  grunt.registerTask('test',['express:dev','simplemocha','casper', 'mocha' ]);

};