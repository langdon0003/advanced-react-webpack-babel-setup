gulp.task(
  'scss',
  gulp.series('bootstrap:scss', function compileScss() {
    return gulp
      .src(['./assets/scss/*.scss'])
      .pipe(
        sass
          .sync({
            outputStyle: 'expanded',
          })
          .on('error', sass.logError)
      )
      .pipe(autoprefixer())
      .pipe(gulp.dest('./assets/css'));
  })
);

// Minify CSS
gulp.task(
  'css:minify',
  gulp.series('scss', function cssMinify() {
    return gulp
      .src('./assets/css/*.css')
      .pipe(cleanCSS())
      .pipe(
        rename({
          suffix: '.min',
        })
      )
      .pipe(gulp.dest('./dist/assets/css'))
      .pipe(browserSync.stream());
  })
);
