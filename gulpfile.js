// Initialize modules
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
const { src, dest, watch, series, parallel } = require('gulp');
// Importing all the Gulp-related packages we want to use
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
var replace = require('gulp-replace');


// File paths
// const files = { 
//     jsPath: []
// }


// JS task: concatenates and uglifies JS files to script.js
function jsTask(){
    return src([
        './lib/helper.js', './lib/html.js', './lib/math.js', './lib/database.js', './lib/date.js', './lib/form.js', './lib/password.js','./lib/module.js', 
         ])
        .pipe(concat('rademe.js'))
        .pipe(dest('.')
    );
}

// Cachebust
var cbString = new Date().getTime();
function cacheBustTask(){
    return src(['index.html'])
        .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
        .pipe(dest('.'));
}

// Watch task: watch SCSS and JS files for changes
// If any change, run scss and js tasks simultaneously
function watchTask(){
    watch('./lib/*.js', 
        series(
            parallel(jsTask),
            cacheBustTask
        )
    );    
}

// Export the default Gulp task so it can be run
// Runs the scss and js tasks simultaneously
// then runs cacheBust, then watch task
exports.default = series(
    parallel(jsTask), 
    cacheBustTask,
    watchTask
);