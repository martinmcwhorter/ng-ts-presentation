var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var tsify = require('tsify');
var gutil = require('gulp-util');
var watch = require('gulp-watch');
var paths = {
    pages: ['src/**/*.html']
};

var watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: "src/main.ts",
    cache: {},
    packageCache: {}
}).plugin(tsify));

gulp.task('html:copy', function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest('dist'));
});

gulp.task('html:watch', () => {
    return gulp.src(paths.pages)
        .pipe(watch(paths.pages))
        .pipe(gulp.dest('dist')); 
})

gulp.task('ts:watch', bundle);

function bundle() {
    return watchedBrowserify
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
}

gulp.task('default', ['html:copy', 'html:watch', 'ts:watch']);
watchedBrowserify.on('update', bundle);
watchedBrowserify.on('log', gutil.log);
