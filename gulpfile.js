const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');

gulp.task('sass', function () {
    return gulp.src('./src/styles/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./build/styles'));
  });
 
gulp.task('pug', function () {
  return gulp.src('./src/pages/*.pug')
  .pipe(pug({
    // Your options in here. 
  }))
  .pipe(gulp.dest('./build'));
});