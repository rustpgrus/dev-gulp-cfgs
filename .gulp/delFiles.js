let del = require('del');
const paths = require('./paths');

function delFiles(params) {
    return del([paths.clean]);
}

module.exports.clean = delFiles;

