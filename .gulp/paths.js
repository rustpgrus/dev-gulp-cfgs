const project_folder = "dist";
const source_folder = "src";

const build = {
    html: project_folder + "/",
    css: project_folder + "/css/",
    js: project_folder + "/js/",
    fonts: project_folder + "/fonts/",
    img: project_folder + "/img/",
};

const src = {
    html: [source_folder + "/*.html", "!" + source_folder + "/_*.html"],
    css: source_folder + "/scss/style.scss",
    js: source_folder + "/js/script.js",
    fonts: source_folder + "/fonts/*.ttf",
    img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
};

const watch = {
    html: source_folder + "/**/*.html",
    css: source_folder + "/scss/**/*.scss",
    js: source_folder + "/js/**/*.js",
    img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
};

const clean = "./" + project_folder + "/**/*";

module.exports.src = src;
module.exports.build = build;
module.exports.watch = watch;
module.exports.clean = clean;
module.exports.source_folder = source_folder;
module.exports.project_folder = project_folder;
