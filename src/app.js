const gulp = require('gulp');
const markdown = require('gulp-markdown');

const adDocs = (done) => {
  gulp.src('**/*.md')
    .pipe(markdown())
    .pipe(gulp.dest('./dist')
      .on('end', () => {
        if (done) {
          done();
        }
      }));
};

adDocs(() => {
  console.log('Done!');
});
