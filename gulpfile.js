var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: '_site',
      routes:  {
          '/Data-submissions-interface': '_site'
      }
    }
  });
  gulp.watch("_site/*").on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync']);
