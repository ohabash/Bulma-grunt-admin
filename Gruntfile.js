module.exports = function(grunt) {
  // var urlRewrite = require('grunt-connect-rewrite');
  var modRewrite = require('connect-modrewrite');
  grunt.loadNpmTasks('grunt-run');
  // npm install connect-modrewrite --save


  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    // run commands ex: grunt run:webpack
    run: {
      webpack: {
        exec: 'npm run re_build',
      }
    },


    //watch
    watch: {
      sass: {
        files: 'assets/scss/**/*.scss',
        tasks: ['sass'],
      },
      run:{
        files: 'assets/js/*.js',
        tasks: ['run:webpack'],
      }
    },


    // Minify
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'assets/dist/css',
          src: ['*.css', '!*.min.css'],
          dest: 'assets/dist/css',
          ext: '.min.css'
        }]
      }
    },


    // sass
    sass: {
      dist: {
        files: {
          'assets/dist/css/style.css': 'assets/scss/*.scss'
        }
      }
    },


    // browsersync
    browserSync: {
        bsFiles: {
            src : [
                'assets/dist/css/*.css',
                'dist/*.js',
                '*/*.html',
                '*/*/*.html',
                '*.html'
            ]
        },
        options: {
            watchTask: true,
            // server: './'
            server: {
                baseDir :'./',
                middleware: [
                       modRewrite(['!\.html|\.js|\.jpg|\.mp4|\.mp3|\.gif|\.svg\|.css|\.png$ /index.html [L]'])
                ]
            }
        }
    }






  });

  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // grunt.registerTask('test', ['jshint', 'qunit']);
  //
  grunt.registerTask('default', ['browserSync', 'watch']);
};
