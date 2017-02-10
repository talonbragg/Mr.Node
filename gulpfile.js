var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');
var beautify = require('gulp-beautify');
 
gulp.task('uglify', function() {
  gulp.src('public/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

    gulp.task('beautify', function() {
    gulp.src('dist/js/main.js')
    .pipe(beautify({indent_size: 2}))
    .pipe(gulp.dest('dist/js'))
});