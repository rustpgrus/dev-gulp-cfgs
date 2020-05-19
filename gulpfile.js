let fs = require("fs");
let gulp = require('gulp');
let fonter = require('gulp-fonter');
const paths = require('./.gulp/paths');
let processes = require('./.gulp/processes');

function fontsStyle(params) {
    let sfonts = paths.source_folder + "/scss/fonts.scss";

    let fcontent = fs.readFileSync(sfonts);
    if (fcontent == '') {
        fs.writeFile(sfonts, '', (err) => { });

        return fs.readdir(paths.source_folder + "/fonts", function (err, files) {
            files.forEach(function (fname) {
                let fontName = fname.split(".")[0];
                fs.appendFile(sfonts, "@include font('" + fontName + "', '" + fontName + "', 900, normal);\n", err => { });
            });
        });
    }
}


function watchFiles(params) {
    gulp.watch([paths.watch.css], processes.css);
    gulp.watch([paths.watch.html], processes.html);
    gulp.watch([paths.watch.js], processes.js);
    gulp.watch([paths.watch.img], processes.images);
}

gulp.task('otf2ttf', function () {
    return gulp.src([paths.source_folder + "/fonts/*.otf"])
        .pipe(fonter({
            formats: ['ttf']
        }))
        .pipe(gulp.dest(paths.source_folder + "/fonts/"));
});

let build = gulp.series(
    processes.clean,
    fontsStyle,
    gulp.parallel(
        processes.fonts,
        processes.images,
        processes.js,
        processes.css,
        processes.html
    )
);

let watch = gulp.parallel(
    build,
    watchFiles,
    processes.browsersync.sync
);



exports.build = build;
exports.watch = watch;
exports.default = watch;
