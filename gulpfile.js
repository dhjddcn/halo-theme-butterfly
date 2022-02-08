const gulp = require( 'gulp' );
const { src, dest } = require( 'gulp' );
const less = require( 'gulp-less' );
const uglify = require( "gulp-uglify" );
const minifyCSS = require( 'gulp-csso' );
const autoprefix = require( 'gulp-autoprefixer' );
const rename = require( 'gulp-rename' );
const gulpBabel = require( "gulp-babel" );


gulp.task( "css", function () {
    return src( './source/css/*.less' )
        .pipe( less() )
        .pipe( autoprefix( {
            overrideBrowserslist: [
                "> 2%", "last 2 versions", "not ie 6-9"
            ],
            cascade: false
        } ) )

        .pipe( minifyCSS() )
        .pipe( rename( {
            suffix: '.min'
        } ) )
        .pipe( dest( './source/css/min' ) )
} )

gulp.task( "js", function () {
    return src( './source/js/*.js', )
        .pipe(
            gulpBabel( {
                presets: [ '@babel/preset-env' ]
            } )
        )
        .pipe( uglify() )
        .pipe( rename( {
            extname: '.min.js'
        } ) )
        .pipe( dest( './source/js/min' ) )
} )

gulp.task(
    "default",
    gulp.series(
        gulp.parallel( "css", "js" )
    )
);

