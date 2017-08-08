'use strict';
/**
 * 1. LESS编译 压缩 合并
 * 2. JS合并 压缩 混淆
 * 3. image复制
 * 4. html压缩
 */
// 在gulpfile中先载入gulp包,因为这个包提供了一些API
var gulp = require('gulp');
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');
// 1.LESS编译 压缩 合并
gulp.task('style',function(){
    // 这里是在执行style任务时自动执行的
   gulp.src("src/styles/*.less")
       .pipe(less())
       .pipe(cssnano())
       .pipe()
       .pipe(gulp.dest('dist/styles'));
});

gulp.task('',function(){
   
})