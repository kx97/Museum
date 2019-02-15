'use strict';
 //引入gulp包，node.js 代码
var gulp = require('gulp');
// 引入gulp-sass 包
var sass = require('gulp-sass');

// sass.compiler = require('node-sass');
//  创建一个gulp任务：sass
gulp.task('sass', function () {
   //让gulp去拿原始的文件
   // 把scss原始文件交给gulp-sass去编译转化成CSS文件。
   return gulp.src('./src/sass/**/*.scss')
   .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))
   .pipe(gulp.dest('./src/css/'));
});
// 创建gulp监听任务：sass:watch
gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});

//gulp的默认任务
gulp.task('default', ['sass:watch'], function() { 
  // default task code here
});