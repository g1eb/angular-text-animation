'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify-es').default;
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

function buildJS() {
  return gulp.src(['src/text-animation.js'])
    .pipe(uglify())
    .pipe(concat('text-animation.min.js'))
    .pipe(gulp.dest('./dist'));
};

function buildCSS() {
  return gulp.src(['src/text-animation.css'])
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('text-animation.min.css'))
    .pipe(gulp.dest('./dist'));
};

function watch() {
  return gulp.task('watch', function() {
    gulp.watch('src/**/*.+(js|html|css)', ['build']);
  });
};

exports.watch = watch;
exports.buildJS = buildJS;
exports.buildCSS = buildCSS;
exports.build = gulp.series(buildJS, buildCSS);
exports.default = gulp.series(watch);
