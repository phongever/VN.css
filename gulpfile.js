const { src, dest, series, watch } = require("gulp");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

const buildVNCSS = () => {
  return src("src/styles/vn.css")
    .pipe(dest("dist/styles"))
    .pipe(cleanCSS())
    .pipe(rename({ extname: ".min.css" }))
    .pipe(dest("dist/styles"));
};

const buildCSS = () => {
  return src(["src/styles/*.css", "!src/styles/vn.css"]).pipe(
    dest("dist/styles")
  );
};

const watchCSS = () => {
  watch("src/styles/*.css", buildCSS);
};

const copyImage = () => {
  return src("src/image/*.png").pipe(dest("dist/image"));
};

exports.default = series([copyImage, buildCSS, buildVNCSS, watchCSS]);
exports.build = series([copyImage, buildCSS, buildVNCSS]);
