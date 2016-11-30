var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var ngmin = require('gulp-ngmin');
var notify = require('gulp-notify');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var bower = require('bower');
var sh = require('shelljs');

var paths = {
    css: './assets/scss/**/*.scss',
    scripts: './assets/js/**/*.js'
};

gulp.task('scripts', function() {
    gulp.src(paths.scripts)
        .pipe(sourcemaps.init())
        .pipe(concat('app.min.js'))
        .pipe(ngmin().on('error', notify.onError(function(error) {
            gutil.log(error);
            return error.message;
        })))
        .pipe(uglify({mangle: false}).on('error', notify.onError(function(error) {
            gutil.log(error);
            return error.message;
        })))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./www/build'))
        .pipe(notify('JS generated!'));
});

gulp.task('css', function(done) {
    gulp.src('./assets/scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', notify.onError(function(error) {
            gutil.log(error);
            return error.message;
        })))
        .on('error', sass.logError)
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename('app.min.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./www/build'))
        .on('end', done)
        .pipe(notify('CSS generated!'));
});

gulp.task('default', ['build', 'watch']);

gulp.task('watch', function() {
    gulp.watch(paths.css, ['css']);
    gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('build', ['css', 'scripts']);

gulp.task('install', ['git-check'], function() {
    return bower.commands.install()
        .on('log', function(data) {
            gutil.log('bower', gutil.colors.cyan(data.id), data.message);
        })
    ;
});

gulp.task('git-check', function(done) {
    if (!sh.which('git')) {
        console.log(
            '  ' + gutil.colors.red('Git is not installed.'),
            '\n  Git, the version control system, is required to download Ionic.',
            '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
            '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
        );
        process.exit(1);
    }

    done();
});