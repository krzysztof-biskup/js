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
          './css/style.css': 'sass/styles.sass'
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
            styles: {
            files: 'sass/*.sass',
            tasks: ['sass']
            },
			scripts: {
            files: 'js/*.js',
            tasks: ['jshint']
            },
        
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
    	watchTask: true,
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

  grunt.registerTask('default', ['sass', 'jshint', 'browserSync', 'watch']);
};