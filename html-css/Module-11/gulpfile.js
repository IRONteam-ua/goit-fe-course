var gulp = require('gulp'), // Подключаем Gulp
    sass = require('gulp-sass'); // Подключаем Sass пакет
	jade = require('gulp-jade');

gulp.task('sass', function() { // Создаем таск "sass"
  return gulp.src(['crs/sass/**/*.sass', 'crs/sass/**/*.scss']) // Берем источник
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
    .pipe(gulp.dest('app/css')) // Выгружаем результата в папку css
  });

gulp.task('watch', function() {
  gulp.watch(['src/sass/**/*.sass', 'src/sass/**/*.scss'], ['sass']); // Наблюдение за sass файлами в папке sass
});

gulp.task('default', ['watch']);


 
// чтобы запустить эту задачу, наберите в командной строке gulp jade
gulp.task('jade', function() {
    return gulp.src('src/templates/**/*.jade')
        .pipe(jade()) 
        .pipe(gulp.dest('app/')); // указываем gulp куда положить скомпилированные HTML файлы
});