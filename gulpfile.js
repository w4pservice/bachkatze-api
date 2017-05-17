'use strict';

var gulp = require('gulp');
var tsb = require('gulp-tsb');
var nodemon = require('gulp-nodemon');

gulp.task('default', ['nodemon', 'watch',]);

gulp.task('watch', function () {
    gulp.watch('src/**/*.ts', ['build']);
});

var tsConfigSrc = tsb.create('./tsconfig.json');
gulp.task('build', function () {
    return gulp.src('./src/**/*.ts')
        .pipe(tsConfigSrc()) 
        .pipe(gulp.dest('./dist'));
});

gulp.task('views', function() {
	gulp.src('./src/views/*.*')
	.pipe(gulp.dest('./dist/views'))
});

gulp.task('nodemon', function (cb) {
	var started = false;
	return nodemon({
		script: './dist/www.js'
	}).on('start', function () {
		if (!started) {
			cb();
			started = true; 
		} 
	});
});