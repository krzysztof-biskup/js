module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  	
  	jshint: {
      all: ['js/*.js']
    },
  

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'sass/styles.sass'
        }
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'img/build/'
        }]
      }
    },

    watch: {
            files: 'app/scss/**/*.scss',
            tasks: ['sass']
        },
        sass: {
            dev: {
                files: {
                    'css/style.css': 'sass/styles.scss'
                }
            }
        },

    browserSync: {
    bsFiles: {
        src : [
                './css/*.css',
                './*.html',
                './js/*.js'
                    ]
    },
    options: {
        server: {
            baseDir: "./"
        }
    }
}

  });
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin'); 
  grunt.loadNpmTasks('grunt-contrib-jshint'); 
  grunt.loadNpmTasks('grunt-browser-sync');
  
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task(s).

  grunt.registerTask('default', ['sass', 'imagemin', 'jshint', 'browserSync', 'watch']);
};