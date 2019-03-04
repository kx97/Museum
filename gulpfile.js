'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');
var jsmin = require('gulp-uglify');
var babel = require('gulp-babel');
var cssmin = require('gulp-minify-css');
var imgmin = require('gulp-imagemin');
var del = require('del');
var connect = require('gulp-connect');

const src = './src';


gulp.task('sass', function () {
   //让gulp去拿原始的文件
   // 把scss原始文件交给gulp-sass去编译转化成CSS文件。
   return gulp.src('./src/sass/**/*.scss')
   .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))
   .pipe(gulp.dest('./src/css/'));
});

// 创建一个gulp任务：html
gulp.task('html', function() {
  return gulp.src('./index.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('./dist'))
  .pipe(connect.reload());
});

// 创建一个gulp 任务：js
gulp.task('js', function() {
  return gulp.src(src + '/js/index.js')
  .pipe(babel({
    presets: ["es2015"]
  }))
  .pipe(jsmin())
  .pipe(gulp.dest('./dist'))
  .pipe(connect.reload());
});

// 创建一个gulp 任务：css
gulp.task('css', function() {
  return gulp.src(src + '/css/*.css')
  .pipe(cssmin())
  .pipe(gulp.dest('./dist'))
  .pipe(connect.reload());
});

gulp.task('image', function() {
  return gulp.src(src + '/img/*')
  .pipe(imgmin())
  .pipe(gulp.dest('./dist'))
});

gulp.task('clean', function() {
  return del(['./dist/*']);
});


// 创建一个gulp 任务：conn
gulp.task('connect', function() {
  connect.server({
    port: 8080,
    livereload: true
  });
});

// 创建gulp监听任务：watch
gulp.task('watch', function () {
  gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
  gulp.watch('./index.html', gulp.series('html'));
  gulp.watch('./src/js/index.js', gulp.series('js'));
  gulp.watch('./src/css/*.css', gulp.series('css'));
  gulp.watch('./src/img/*', gulp.series('image'));
});

//gulp的默认任务
gulp.task('start', gulp.series(gulp.parallel("connect", 'watch')));
gulp.task('dist', gulp.series("clean", gulp.parallel('html', 'js', 'sass', 'css', 'image')));