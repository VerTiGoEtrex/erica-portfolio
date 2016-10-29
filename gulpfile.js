var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del');
var responsive = require('gulp-responsive');
var print = require('gulp-print');
var sizeOf = require('image-size');

gulp.task('clean', function() {
  return del([
    'images/**/*',
    '!images/bg.jpg'
  ]);
});

gulp.task('makeFullImages', function() {
  gulp.src('portfolioImages/*.jpg')
    .pipe(gulp.dest('images/fulls'));
});

gulp.task('makeThumbImages', function() {
  gulp.src('portfolioImages/*.jpg')
    .pipe(responsive({
      '*.jpg' : {
        height: 230
      }
    }))
    .pipe(gulp.dest('images/thumbs'));
});

gulp.task('makeImages', ['makeFullImages', 'makeThumbImages'])
