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
const clean = require("gulp-clean");
const zip = require('gulp-zip');

const resolve = (name) => path.resolve(__dirname, name);

gulp.task("clean", () => {
  return gulp.src(['./templates/assets/css', './templates/assets/js', './theme-butterfly-dist.zip'], {
    read: false,
    allowEmpty: true,
  }).pipe(
    clean({
      force: true,
    })
  );
});

gulp.task("css", function () {
  return gulp.src('./src/less/page/*.less')
    .pipe(less())
    .pipe(autoPrefix({
      overrideBrowserslist: [
        "> 2%", "last 2 versions", "not ie 6-9"
      ],
      cascade: true,
    }))
    .pipe(minifyCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./templates/assets/css'))
})

gulp.task("js", function () {
  const getEntryData = () => {
    try {
      let files = fs.readdirSync("./src/js/page", "utf-8");
      const result = {};
      files.forEach((file) => {
        const fileName = file.replace(/.js$/, "");
        result[fileName] = resolve(`./src/js/page/${file}`);
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

gulp.task("zip", done => {
  gulp.src([
    './templates/**/*.*',
    './settings.yaml',
    './settings-custom.yaml',
    './theme.yaml',
  ], {base: '.'})
    .pipe(zip('theme-butterfly-dist.zip'))
    .pipe(gulp.dest('./'));
  done();
  console.log('\x1B[32m打包完成,生产文件在根目录下的 theme-butterfly-dist.zip\x1B[0m')
});

gulp.task(
  "watch",
  function () {
    // noinspection JSCheckFunctionSignatures
    gulp.watch(['./src/**/**/**/*.less'], gulp.series('css'));
    // noinspection JSCheckFunctionSignatures
    gulp.watch(['./src/js/**/**/**/*.js'], gulp.series('js'));
  }
);
gulp.task(
  "default",
  gulp.series(
    gulp.parallel("css", "js")
  )
);
