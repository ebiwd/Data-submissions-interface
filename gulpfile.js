var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var child = require('child_process');
var gutil = require('gulp-util');

// invoke jekyll 
// https://aaronlasseigne.com/2016/02/03/using-gulp-with-jekyll/
gulp.task('jekyll', () => {
  const jekyll = child.spawn('jekyll', ['build',
    '--watch'
    // '--incremental',
    // '--drafts'
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});


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

gulp.task('default', ['jekyll', 'browser-sync']);
