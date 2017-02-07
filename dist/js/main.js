// Mr.node
// Copyright 2017 Talon Bragg
// Open Source and free to use
// Licensed under the MIT liscense

//Variables
var fs = require('fs');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var uglify = require('gulp-uglifyjs');
var minifyCSS = require('gulp-minify-css');
//Front end file creations, File types: Javascript, CSS, HTML
function createjs() {
    fs.writeFile('rename.js', '//change the name of this file to whatever you like', function(err) {
        if (err) return console.log(err);
        console.log('Javascript file created');
    });
}

function createcss() {
    fs.writeFile('rename.css', '/* Change the name of this file to whatever you like */', function(err) {
        if (err) return console.log(err);
        console.log('Cascading Style Sheets file created')
    });
}

function createhtml() {
    fs.writeFile('rename.html', '<!-- Change the name of this file to whatever you like -->', function(err) {
        if (err) return console.log(err);
        console.log('Hyper Text Markup Language file created')
    });
}

function createminjs() {
    fs.writeFile('rename.min.js', '//Change the name of this file to whatever you like', function(err) {
        if (err) return console.log(err);
        console.log('Minified Javascript file created');
    });
}

function createmincss() {
    fs.writeFile('rename.min.css', '/* Change the name of this file to whatever you like', function(err) {
        if (err) return console.log(err);
        console.log('Minified Cascading Style Sheets file created');
    });
}
// Minify Files, File types: Javascript
function minifyjs() {
    gulp.task('uglify', function() {
    gulp.src('public/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

}
