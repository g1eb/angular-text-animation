'use strict';

var gulp = require('gulp');
var embedTemplates = require('gulp-angular-embed-templates');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
 
gulp.task('build', function () {
  gulp.src(['src/text-animation.js'])
    .pipe(embedTemplates())
    .pipe(uglify())
    .pipe(concat('text-animation.min.js'))
    .pipe(gulp.dest('./dist'));
  gulp.src(['src/text-animation.css'])
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(cssnano())
    .pipe(concat('text-animation.min.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.+(js|html|css)', ['build']);
});
