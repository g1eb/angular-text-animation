'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

gulp.task('build', function () {
  gulp.src(['src/text-animation.js'])
    .pipe(uglify())
    .pipe(concat('text-animation.min.js'))
    .pipe(gulp.dest('./dist'));
  gulp.src(['src/text-animation.css'])
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('text-animation.min.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.+(js|html|css)', ['build']);
});
