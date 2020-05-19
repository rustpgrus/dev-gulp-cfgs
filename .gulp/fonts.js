let paths = require('./paths');
let { src, dest } = require('gulp');
let ttf2woff = require('gulp-ttf2woff');
let ttf2woff2 = require('gulp-ttf2woff2');

function process() {
	src(paths.src.fonts)
		.pipe(ttf2woff())
		.pipe(dest(paths.build.fonts));

	return src(paths.src.fonts)
		.pipe(ttf2woff2())
		.pipe(dest(paths.build.fonts));
}

module.exports.process = process;
