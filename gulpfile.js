const gulp = require('gulp');
const less = require('gulp-less');
const uglify = require("gulp-uglify");
const minifyCSS = require('gulp-csso');
const autoPrefix = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const gzip = require("gulp-gzip");
const webpack = require("webpack-stream");
const path = require("path");
const fs = require("fs");
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

const resolve = (name) => path.resolve(__dirname, name);

gulp.task("css", function () {
  return gulp.src('./src/css/*.less')
    .pipe(less())
    .pipe(autoPrefix({
      overrideBrowserslist: [
        "> 2%", "last 2 versions", "not ie 6-9"
      ],
      cascade: true
    }))
    .pipe(minifyCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./templates/assets/css'))
})


gulp.task("js", function () {
  const getEntryData = () => {
    const ignoreFiles = ['u'];
    try {
      let files = fs.readdirSync("./src/js", "utf-8");
      files = files.filter((file) => {
        return ignoreFiles.length
          ? /\.js$/.test(file) && !ignoreFiles.includes(file)
          : /\.js$/.test(file);
      });

      const result = {};
      files.forEach((file) => {
        const fileName = file.replace(/.js$/, "");
        result[fileName] = resolve(`./src/js/${file}`);
      });

      return result;
    } catch (error) {
      throw new Error(err);
    }
  };

  return webpack({
    mode: "production",
    entry: getEntryData(),
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          include: resolve("src"),
          exclude: resolve("node_modules"),
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime",],
          },
        },
      ],
    },
    
    stats: "errors-only",
    output: {
      filename: "[name].min.js",
    },

  })
    .pipe(uglify())
    .pipe(gulp.dest('./templates/assets/js'))
    .pipe(
      gzip({
        threshold: "10kb",
      })
    )
    .pipe(gulp.dest('./templates/assets/js'));
})

gulp.task(
  "watch",
  function () {
    // noinspection JSCheckFunctionSignatures
    gulp.watch(['./src/**/**/**/*.less','./dev/**/**/**/*.less'], gulp.series('css'));
    // noinspection JSCheckFunctionSignatures
    gulp.watch(['./src/js/*.js','./dev/js/*.js'], gulp.series('js'));
  }
);
gulp.task(
  "default",
  gulp.series(
    gulp.parallel("css", "js")
  )
);
