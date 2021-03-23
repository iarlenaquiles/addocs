const gulp = require('gulp');
const markdown = require('gulp-markdown');
const browserSync = require('browser-sync');
const clean = require('gulp-clean');

exports.compile = () => {
  gulp.src('./**/*.md')
    .pipe(markdown())
    .pipe(gulp.dest('./dist'));
};

exports.run = () => {
  gulp.src('./dist/node_modules', { read: false })
    .pipe(clean());

  browserSync({ server: './dist', directory: true });
};
