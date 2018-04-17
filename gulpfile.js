"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var gulpBemCss = require('gulp-bem-css');
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();

gulp.task("style", function() {
  gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("source/css"))
    .pipe(server.stream());
});

gulp.task("serve", ["style"], function() {
  server.init({
    server: "source/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

gulp.task('html', () => {
    return gulp.src('source/sass/*.html')
      .pipe(gulpBemCss({
        folder: 'source/sass/test', // Path for creating directories and stylesheet files.
        extension: 'scss', // Extension of stylesheet files
        elementSeparator: '__', // Element separator in class names
        modifierSeparator: '--' // Modifier separator in class names
      }))
      .pipe(gulp.dest('dist'));
  });

  gulp.watch("source/sass/**/*.{scss,sass}", ["style"]);
  gulp.watch("source/*.html").on("change", server.reload);
});
