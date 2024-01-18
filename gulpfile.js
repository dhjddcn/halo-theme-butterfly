const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
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
const exec = require('child_process').exec;
const yaml = require('yamljs');
const inquirer = require('inquirer');
const tailwindcss = require('tailwindcss');
const postcss = require('gulp-postcss')


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
  return gulp.src('./src/scss/page/*.scss')
    .pipe(sass({}, {}))
    .pipe(postcss([
      tailwindcss,
    ]))
    .pipe(autoPrefix({
      overrideBrowserslist: [
        "> 5%",
        "last 2 versions",
        "last 3 Safari versions",
        "Firefox >= 20",
      ],
      cascade: true,
    }))
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
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
      throw new Error(error);
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
    './annotation-setting.yaml',
    './theme.yaml',
  ], {base: '.'})
    .pipe(zip('theme-butterfly-dist.zip'))
    .pipe(gulp.dest('./'));
  done();
  console.log('\x1B[32m打包完成,生产文件在根目录下的 theme-butterfly-dist.zip\x1B[0m')
});

gulp.task("release", async done => {
  const {value} = await inquirer.prompt([
    {
      type: "list", // 交互类型 -- 单选（无序）
      message: "请选择发布版:", // 引导词
      name: "value", // 自定义的字段名
      choices: [
        {name: "小版本", value: "patch"},
        {name: "中版本", value: "minor"},
        {name: "大版本", value: "major"},
      ], // 选项列表
    },
  ])

  await exec(`npm version ${value} --no-git-tag-version`, async (error, stdout, stderr) => {
    if (error) {
      console.error(`执行出错: ${error}`);
      return;
    }
    const version = stdout.replace('v', '').replace('\n', '');

    const themeYaml = yaml.load('./theme.yaml');

    themeYaml.spec.version = version

    await fs.writeFileSync('./theme.yaml', yaml.dump(themeYaml, './theme.yaml'), 'utf8');
  });

  done();
});

gulp.task(
  "watch",
  function () {
    // noinspection JSCheckFunctionSignatures
    gulp.watch(['./src/**/**/**/*.scss'], gulp.series('css'));
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
