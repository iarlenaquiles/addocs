const gulp = require('gulp');
const markdown = require('gulp-markdown');
// const npm = require('npm');
const browserSync = require('browser-sync');

exports.compile = () => {
  gulp.src('**/*.md')
    .pipe(markdown())
    .pipe(gulp.dest('./dist'));
};

// exports.run = () => {
//   npm.load(() => npm.commands.run(['run:gulp']));
// };

exports.run = () => {
  browserSync({ server: './dist', directory: true });
};
