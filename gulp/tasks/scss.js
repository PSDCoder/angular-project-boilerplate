'use strict';

var path = require('path');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var combineMq = require('gulp-combine-mq');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var csso = require('gulp-csso');
var rename = require('gulp-rename');
var cssImport = require('gulp-cssimport');

module.exports = function (gm, gulp, config) {
    gulp.task('scss', function () {
        return gulp.src(config.paths.src.scss.input)
            .pipe(plumber())
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(cssImport())
            .pipe(combineMq())
            .pipe(postcss([
                autoprefixer({
                    browsers: ['last 2 versions']
                })
            ]))
            .pipe(csso())
            .pipe(sourcemaps.write('./'))
            .pipe(rename(function (filePath) {
                filePath.extname = path.extname(config.paths.src.scss.outputFilename);
                filePath.basename = path.basename(config.paths.src.scss.outputFilename, filePath.extname);
            }))
            .pipe(gulp.dest(config.paths.src.scss.output))
            .pipe(gm.get('browserSync').stream());
    });
};