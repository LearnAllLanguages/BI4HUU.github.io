var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
// var ts = require('gulp-typescript');
gulp.task('sass', function () {
	return gulp.src('Source/style.sass')
	.pipe(sass())
	// .pipe(prefix('last 2 versions', '>1%', 'ie 9'))
	.pipe(gulp.dest('Build'))
	.pipe(livereload());
});
gulp.task('pug', function () {
	return gulp.src('Source/index.pug')
		.pipe(pug())
		.pipe(gulp.dest('Build'))
		// livereload.listen();{pretty: true}
		.pipe(livereload());
});
gulp.task('js', function () {
	return gulp.src('Source/script.js')
		.pipe(gulp.dest('Build'))
		.pipe(livereload());
});
gulp.task('watch', () => {
	// livereload({ start: true })
	livereload.listen()
	gulp.watch('Source/index.pug', gulp.series('pug'));
	gulp.watch('Source/script.js', gulp.series('js'));
	gulp.watch('Source/style.sass', gulp.series('sass'));
});
gulp.task('default', gulp.series(
	gulp.parallel('pug', 'js', 'sass'), 'watch'
	// gulp.parallel('pug', 'sass'), 'watch'
));