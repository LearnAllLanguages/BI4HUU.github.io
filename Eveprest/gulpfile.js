var gulp = require('gulp');
var pug = require('gulp-pug');
var stylus = require('gulp-stylus')
var livereload = require('gulp-livereload')


gulp.task('html', function(){
	return gulp.src('Source/index.pug')
		.pipe(pug({
			pretty: false
		}))
		.pipe(gulp.dest('Build'))
		.pipe(livereload());
});

gulp.task('css', function () {
	return gulp.src('Source/style.styl')
		.pipe(stylus({
			compress: true
		}))
	// .pipe(prefix('last 2 versions', '>1%', 'ie 9'))
	.pipe(gulp.dest('Build'))
	.pipe(livereload());
});

gulp.task('js', function(){
	return gulp.src('Source/*.js')
		.pipe(gulp.dest('Build'))
		.pipe(livereload());
});

gulp.task('default', [ 'watch' ]);
gulp.task('watch', () => {
	// livereload({ start: true })
	livereload.listen()
	gulp.watch('Source/*.pug', ['html']);
	gulp.watch('Source/*.styl', ['css']);
	gulp.watch('Source/*.js', ['js']);
});

// var less = require('gulp-sass');
// var minifyCSS = require('gulp-csso');
// var concat = require('gulp-concat');
// var sourcemaps = require('gulp-sourcemaps');
// gulp.task('watch', function() {
//   livereload.listen();
//   gulp.watch('less/*.less', ['less']);
// });