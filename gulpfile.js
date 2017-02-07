var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');
 
gulp.task('uglify', function() {
  gulp.src('public/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

