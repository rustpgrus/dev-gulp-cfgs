let webp = require('gulp-webp');
const paths = require('./paths');
let { src, dest } = require('gulp');
let imagemin = require('gulp-imagemin');
let browsersync = require('./browser-sync');

function process() {
	return src(paths.src.img)
		.pipe(webp({
			quality: 70,
		}))
		.pipe(dest(paths.build.img))
		.pipe(src(paths.src.img))
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{ removeViewBox: false }],
			interlaced: true,
			optimizationLevel: 3,
		}))
		.pipe(dest(paths.build.img))
		.pipe(browsersync.stream());
}

module.exports.process = process;
