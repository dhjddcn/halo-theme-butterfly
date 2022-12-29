const gulp = require( 'gulp' );
const { src, dest } = require( 'gulp' );
const less = require( 'gulp-less' );
const uglify = require( "gulp-uglify" );
const minifyCSS = require( 'gulp-csso' );
const autoPrefix = require( 'gulp-autoprefixer' );
const rename = require( 'gulp-rename' );
const gulpBabel = require( "gulp-babel" );


gulp.task( "css", function () {
  return src( './src/css/*.less' )
    .pipe( less() )
    .pipe( autoPrefix( {
      overrideBrowserslist: [
        "> 2%", "last 2 versions", "not ie 6-9"
      ],
      cascade: true
    } ) )
    .pipe( minifyCSS() )
    .pipe( rename( {
      suffix: '.min'
    } ) )
    .pipe( dest( './templates/assets/css' ) )
} )

gulp.task( "js", function () {
  return src( './src/js/*.js', )
    .pipe(
      gulpBabel( {
        presets: [ '@babel/preset-env' ]
      } )
    )
    .pipe( uglify() )
    .pipe( rename( {
      extname: '.min.js'
    } ) )
    .pipe( dest( './templates/assets/js' ) )
} )

gulp.task(
  "watch",
  function (  ) {
    // noinspection JSCheckFunctionSignatures
    gulp.watch(['./src/css/*.less','./src/modules/**/*.less'],gulp.series('css'));
    // noinspection JSCheckFunctionSignatures
    gulp.watch('./src/js/*.js',gulp.series('js'));
  }
);
gulp.task(
  "default",
  gulp.series(
    gulp.parallel( "css", "js" )
  )
);

