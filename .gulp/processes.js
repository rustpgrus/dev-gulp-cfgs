let js = require('./js');
let css = require('./css');
let html = require('./html');
let fonts = require('./fonts');
let images = require('./images');
let cleaner = require('./delFiles');
let browsersync = require('./browser-sync');

module.exports.clean = cleaner.clean;
module.exports.js = js.process;
module.exports.css = css.process;
module.exports.html = html.process;
module.exports.fonts = fonts.process;
module.exports.images = images.process;
module.exports.browsersync = browsersync;
