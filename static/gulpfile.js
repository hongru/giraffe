var gulp =  require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-ruby-sass');
var cssmin = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('uglify', ['uglify:debug'], function () {
    return gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'));
});
gulp.task('uglify:debug', function () {
    return gulp.src("./src/**/*.js")
        .pipe(rename({suffix: '.debug'}))
        .pipe(gulp.dest("./build"));
});

gulp.task('sass', function () {
    return sass('./src/css/')
        .on('error', function (err) {
            console.error('Sass Error!', err.message);
        })
        .pipe(gulp.dest('./src/css'));
});

gulp.task('cssmin', ['cssmin:debug'], function () {
    return gulp.src('./src/css/*.css')
    .pipe(cssmin({keepBreaks:true}))
    .pipe(gulp.dest('./build/css'));
});
gulp.task('cssmin:debug', ['sass'], function () {
    return gulp.src('./src/**/*.css')
        .pipe(rename({suffix: '.debug'}))
        .pipe(gulp.dest('./build'));
});

gulp.task('watches', function () {
    gulp.watch(['./src/js/*.js'], ['uglify']);
    gulp.watch(['./src/css/*.scss'], ['cssmin']);
});

gulp.task('copy', function () {
    return gulp.src('./src/semantic/**/*')
        .pipe(gulp.dest('./build/semantic'));
});


gulp.task('concat', function () {
    // 有了htmlone ，基本可以不用concat, 如果有 concat 需求，自己在这里配置 concat list
    // 
});

gulp.task('default', ['uglify', 'cssmin', 'copy', 'watches']);
