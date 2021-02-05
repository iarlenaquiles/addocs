const markdown = require('gulp-markdown');
const gulp = require('gulp');

gulp.task('generate_pages', function() {
  return gulp.src('src/pages/**.md')
    .pipe(markdown())
    .pipe(gulp.dest("build/pages"));
});
