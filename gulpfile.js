var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');
var pkg = require('./package.json');
var comment = '\/*\r\n* Wing ' + pkg.version + '\r\n* Copyright 2017, Talon Bragg\r\n* http:\/\/mrnode.tk\/\r\n* Free to use under the MIT license.\r\n* https:\/\/custommarkup.ml\/license\r\n*\/\r\n';
var $ = require('gulp-load-plugins')();
 
gulp.task('build', function () {
  return gulp.src(['public/js/main.min.js'])
    .pipe($.concat('main.css'))
    .pipe($.size())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('uglify', ['build'], function() {
  gulp.src('public/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

gulp.task('watch', function() {
  gulp.watch(['public/js/*.js'], ['default']);
});

gulp.task('default', ['build', 'uglify']);
