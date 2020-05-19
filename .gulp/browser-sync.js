const paths = require('./paths');

let browsersync = require('browser-sync');
function browserSync(params) {
	browsersync.init({
		server: {
			baseDir: "./" + paths.project_folder + "/",
		},
		port: 3000,
		notify: false,
	});
}

module.exports.sync = browserSync;
module.exports.stream = browsersync.stream;
