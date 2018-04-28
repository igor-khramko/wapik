const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const image = require('gulp-image');
const browserSync = require('browser-sync');

gulp.task('sass', function () {
    return gulp.src('./src/styles/main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./build/styles'));
  });
 
gulp.task('pug', function () {
  return gulp.src('./src/pages/*.pug')
  .pipe(pug({
    // Your options in here. 
    pretty:true
  }))
  .pipe(gulp.dest('./build'));
});

gulp.task('image', function () {
  gulp.src('./src/images/**')
    .pipe(image())
    .pipe(gulp.dest('./build/images'));
});

gulp.task('fonts', function () {
  return gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('./build/fonts'));
});

gulp.task('js', function () {
  return gulp.src('./src/scripts/**/*')
    .pipe(gulp.dest('./build/scripts'));
});

gulp.task('browserSync', function () {   
  browserSync({
    server: {
      baseDir: './build/'
    }
  })
});

gulp.task('watch', ['sass', 'pug', 'image', 'fonts', 'js', 'browserSync'], function () {   
  gulp.watch('src/styles/*.scss', ['sass']);
  gulp.watch('src/pages/*.pug', ['pug']);
  gulp.watch('src/images/*', ['image']);
  gulp.watch('src/fonts/*', ['fonts']);
  gulp.watch('src/scripts/*', ['js']);
  gulp.watch('build/*.html', browserSync.reload);
  gulp.watch('build/css//*.css').on("change", browserSync.reload);
  gulp.watch('build/scripts/*').on("change", browserSync.reload);
});

gulp.task('default', ['watch']);
  