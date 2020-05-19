let paths = require('./paths');
let { src, dest } = require('gulp');
let webp = require('gulp-webp-html');
let browsersync = require('./browser-sync');
let fileinclude = require('gulp-file-include');

function process() {
	return src(paths.src.html)
		.pipe(fileinclude())
		.pipe(webp())
		.pipe(dest(paths.build.html))
		.pipe(browsersync.stream());
}

module.exports.process = process;
