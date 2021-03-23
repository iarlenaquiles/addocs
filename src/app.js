const gulp = require('gulp');
const markdown = require('gulp-markdown');
const browserSync = require('browser-sync');

exports.compile = () => {
  gulp.src('**/*.md')
    .pipe(markdown())
    .pipe(gulp.dest('./dist'));
};

exports.run = () => {
  browserSync({ server: './dist', directory: true });
};
