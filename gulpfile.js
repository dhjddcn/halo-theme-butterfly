const gulp = require('gulp');
const gzip = require('gulp-gzip');
const path = require('path');
const fs = require('fs');
const clean = require('gulp-clean');
const zip = require('gulp-zip');
const exec = require('child_process').exec;
const yaml = require('yamljs');
const inquirer = require('inquirer');
const resolve = (name) => path.resolve(__dirname, name);

gulp.task('clean', () => {
  return gulp.src([
    './templates/',
    './theme-butterfly-dist.zip',
  ], {
    read: false,
    allowEmpty: true,
  }).pipe(
    clean({
      force: true,
    }),
  );
});

const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const autoPrefix = require('gulp-autoprefixer');
const minifyCss = require('gulp-minify-css');
const csso = require('gulp-csso');
const cssnano = require('gulp-cssnano');
const cleanCss = require('gulp-clean-css');

const postcss = require('gulp-postcss');
gulp.task('css', function() {
  return gulp.src('./src/scss/page/*.scss').
  pipe(sass({}, {})).
  pipe(postcss([
    require('css-mqpacker')(),
    require('postcss-import')(),
  ])).
  pipe(minifyCss()).
  pipe(autoPrefix({
    overrideBrowserslist: [
      '> 5%',
      'last 2 versions',
      'last 3 Safari versions',
      'Firefox >= 20',
    ],
    cascade: false,
  })).
  pipe(rename({suffix: '.min'})).
  pipe(gulp.dest('./templates/assets/css'));
});

const uglify = require('gulp-uglify');
const webpack = require('webpack-stream');
gulp.task('js', function() {
  const getEntryData = () => {
    try {
      let files = fs.readdirSync('./src/js/page', 'utf-8');
      const result = {};
      files.forEach((file) => {
        const fileName = file.replace(/.js$/, '');
        result[fileName] = resolve(`./src/js/page/${file}`);
      });

      return result;
    } catch (error) {
      throw new Error(error);
    }
  };

  return webpack({
    mode: 'production',
    entry: getEntryData(),
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: resolve('src'),
          exclude: resolve('node_modules'),
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ['@babel/plugin-proposal-decorators', {'legacy': true}],
              '@babel/plugin-transform-runtime',
            ],
          },
        },
        {
          test: /\.css$/,
          use: ['css-loader'],
        },
      ],
    },
    stats: 'errors-only',
    output: {
      filename: '[name].min.js',
    },
  }).pipe(uglify()).pipe(gulp.dest('./templates/assets/js')).pipe(
    gzip({
      threshold: '10kb',
    }),
  ).pipe(gulp.dest('./templates/assets/js'));
});

const htmlMin = require('gulp-htmlmin');
gulp.task('html', function() {
  return gulp.src('./src/html/**/*.html').pipe(htmlMin({
    removeComments: true,//清除HTML注释
    collapseWhitespace: true,//压缩HTML
    collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
    removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
    minifyJS: {
      ignoreCustomComments: [
        /^\s*\/\*!\[\[.*?]]\*\/\s*$/, // 匹配 /*[[ ... ]]*/ 形式的注释
      ],
    },//压缩页面JS
    minifyCSS: false,
    ignoreCustomFragments: [/<th:block[^>]*\/>/],
  })).pipe(gulp.dest('./templates'));
});

gulp.task('zip', done => {
  gulp.src([
    './templates/**/*.*',
    './settings.yaml',
    './annotation-setting.yaml',
    './theme.yaml',
  ], {base: '.'}).pipe(zip('theme-butterfly-dist.zip')).pipe(gulp.dest('./'));
  done();
  console.log(
    '\x1B[32m打包完成,生产文件在根目录下的 theme-butterfly-dist.zip\x1B[0m');
});

gulp.task('release', async done => {
  const {value} = await inquirer.prompt([
    {
      type: 'list', // 交互类型 -- 单选（无序）
      message: '请选择发布版:', // 引导词
      name: 'value', // 自定义的字段名
      choices: [
        {name: '小版本', value: 'patch'},
        {name: '中版本', value: 'minor'},
        {name: '大版本', value: 'major'},
      ], // 选项列表
    },
  ]);

  await exec(`npm version ${value} --no-git-tag-version`,
    async (error, stdout, stderr) => {
      if(error) {
        console.error(`执行出错: ${error}`);
        return;
      }
      const version = stdout.replace('v', '').replace('\n', '');

      const themeYaml = yaml.load('./theme.yaml');

      themeYaml.spec.version = version;

      await fs.writeFileSync('./theme.yaml',
        yaml.dump(themeYaml, './theme.yaml'), 'utf8');
    });

  done();
});

// 复制文件夹 font plugins
gulp.task('copy-folder', function() {
  return gulp.src([
    './src/font/**/*',
    './src/plugins/**/*',
  ], {base: 'src'}) // 设置基本路径为 'src'
  .pipe(gulp.dest('./templates/assets/'));
});

gulp.task(
  'watch',
  function() {
    gulp.watch(['./src/**/**/**/*.scss'], gulp.series('css'));
    gulp.watch(['./src/js/**/**/**/*.js'], gulp.series('js'));
    gulp.watch(['./src/html/**/**/**/*.html'], gulp.series('html'));
  },
);

gulp.task(
  'default',
  gulp.series(
    gulp.parallel('copy-folder', 'css', 'js', 'html'),
  ),
);