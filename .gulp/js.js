let paths = require('./paths');
let { src, dest } = require('gulp');
let renamer = require('gulp-rename');
let browsersync = require('./browser-sync');
let fileinclude = require('gulp-file-include');
let uglify = require('gulp-uglify-es').default;

function process() {
	return src(paths.src.js)
		.pipe(fileinclude())
		.pipe(dest(paths.build.js))
		.pipe(uglify())
		.pipe(renamer({
			extname: ".min.js"
		}))
		.pipe(dest(paths.build.js))
		.pipe(browsersync.stream());
}

module.exports.process = process;
