var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var del = require('del');
var exec = require('gulp-exec')

const build = () => {
    var options = {
        continueOnError: false, // default = false, true means don't emit error event
        pipeStdout: false, // default = false, true means stdout is written to file.contents
        customTemplatingThing: "test" // content passed to lodash.template()
      };
      var reportOptions = {
          err: true, // default = true, false means don't write err
          stderr: true, // default = true, false means don't write stderr
          stdout: true // default = true, false means don't write stdout
      };
      return gulp.src('./')
      .pipe(exec('hexo generate', options))
      .pipe(exec.reporter(reportOptions));
}

gulp.task('reload', function (done) {
    browserSync.reload();
    done();
});

gulp.task('clean', function() {
    return del(['public/**/*']);
});

gulp.task(build)

gulp.task('default', function () {
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });

    gulp.watch("./public/**").on("change", browserSync.reload);
    gulp.watch("./source/**").on("change", build)
})