const paths = require('./paths');

let sass = require('gulp-sass');
let { src, dest } = require('gulp');
let renamer = require('gulp-rename');
let webpcss = require('gulp-webpcss');
let cssclean = require('gulp-clean-css');
let browsersync = require('./browser-sync');
let groupmedia = require('gulp-group-css-media-queries');

function process() {
    return src(paths.src.css)
        .pipe(sass())
        .pipe(groupmedia())
	.pipe(webpcss())
        .pipe(dest(paths.build.css))
        .pipe(cssclean())
        .pipe(renamer({
            extname: ".min.css"
        }))
        .pipe(dest(paths.build.css))
        .pipe(browsersync.stream());
}

module.exports.process = process;
