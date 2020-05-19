let gulp = require('gulp');
const paths = require('./paths');

function watchFiles(params) {
    gulp.watch([paths.watch.css], css);
    gulp.watch([paths.watch.html], watch);
    gulp.watch([paths.watch.js], js);
    gulp.watch([paths.watch.img], images);
}

