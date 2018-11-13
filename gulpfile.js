var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() { 
  return gulp.src('src/scss/main.scss') 
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) 
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
  });

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "app/"
    });

    gulp.watch("src/scss/*.scss", ['sass']);
    gulp.watch("app/").on('change', browserSync.reload);
});


gulp.task('default', ['serve']);


// gulp.task('watch', function() {
//   gulp.watch('src/scss/main.scss', ['sass']);
// });

// gulp.task('default', ['watch']);
