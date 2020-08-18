const { src, dest } = require("gulp");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

const buildCSS = () => {
  return src("src/vn.css")
    .pipe(dest("dist"))
    .pipe(cleanCSS())
    .pipe(rename({ extname: ".min.css" }))
    .pipe(dest("dist"));
};

exports.default = buildCSS;
