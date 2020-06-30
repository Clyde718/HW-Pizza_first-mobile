const gulp = require('gulp'); // Подключаем Gulp
const sass = require('gulp-sass'); // Подключаем Sass-пакет
const livereload = require('gulp-livereload'); // livereload 


gulp.task('sass', function() { // Создаём таск "sass"
	return gulp.src('./build/sass/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./build/css'))
	.pipe(livereload());
});


gulp.task('watch', function() {
	   livereload.listen();
    gulp.watch(['build/sass/**/*.sass', 'build/sass/**/*.scss'], gulp.parallel('sass'));
});

