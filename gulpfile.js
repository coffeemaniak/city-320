"use strict";

const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('css', function () {
   return gulp.src('less/style.less')
     .pipe(less())
     .pipe(gulp.dest('build/css'))
});

// gulp.watch('less/**/*/less', gulp.task('css'));
