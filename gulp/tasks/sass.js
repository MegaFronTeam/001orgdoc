module.exports = () => {
	$.gulp.task('sass', () => {
		return $.gulp.src($.sourse + '/sass/main.scss')
			.pipe($.sassGlob())
			.pipe($.gp.sass().on("error", $.gp.notify.onError()))

			//.pipe(gulpif(envDev, sourcemaps.write({includeContent: false, sourceRoot: '/public'})))
			// .pipe($.gcmq())
			.pipe($.gulpif(!$.envDev, $.gcmq()))
			.pipe($.gp.rename({ suffix: '.min', prefix: '' }))
			.pipe($.gp.autoprefixer({

				grid: true,
				overrideBrowserslist: [ 
					"> 0.5%",
					"last 2 major versions",
					"not dead",
					"Chrome >= 80",
					"Firefox >= 90",
					"Firefox ESR",
					"iOS >= 13",
					"Safari >= 13",
					"not Explorer <= 11"
				]
			}))
			.pipe($.cleanCSS({ compatibility: 'ie11', level: 2 }))
			.pipe($.gulp.dest($.public + '/css'))
			//.on('end', browserSync.stream());
			.pipe($.browserSync.stream());
	});

}