var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var jshint = require('gulp-jshint');

var path = {
  MARKUP: [
  	'src/*.hbs',
  	'src/partials/*.hbs'
  ],
  JS: [
    'src/assets/js/options.json',
  	'src/assets/js/app.js'
  ],
  LESS: [
  	'src/assets/less/style.less'
  ],
  LESS_ALL: [
  	'src/assets/less/*.less'
  ],
  FONTS: [
	  'src/assets/fonts/**'
  ],
  IMG: [
  	'src/assets/images/**'
  ],
  VENDOR: [
    'node_modules/jquery/dist/jquery.js',
    'src/assets/js/jquery.fitvids.js'
  ],
  DIST: './'
};

var all_tasks = ['lint', 'less', 'js', 'vendor', 'markup', 'img', 'misc'];

gulp.task('lint', function() {
  return gulp.src(path.JS)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('less', function () {
  gulp.src(path.LESS)
    .pipe(less())
    .pipe(cleanCSS())
    .pipe(gulp.dest(path.DIST + '/assets/css'));
});

gulp.task('js', function () {
  gulp.src(path.JS)
  	.pipe(sourcemaps.init())
			.pipe(concat('app.js'))
			.pipe(uglify())
		.pipe(sourcemaps.write())
    .pipe(gulp.dest(path.DIST + '/assets/js'));
});

gulp.task('markup', function(){
  gulp.src(path.MARKUP, {base: 'src'})
    .pipe(gulp.dest(path.DIST));
});

gulp.task('img', function(){
  gulp.src(path.IMG)
    .pipe(imagemin())
    .pipe(gulp.dest(path.DIST + '/assets/images'));
});

gulp.task('vendor', function() {
  gulp.src(path.VENDOR)
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest(path.DIST + '/assets/js'));
});

gulp.task('misc', function(){
  gulp.src('src/assets/fonts/**')
  	.pipe(gulp.dest(path.DIST + '/assets/fonts'));
});

gulp.task('watch', function () {
  gulp.watch(path.LESS_ALL, ['less']);
  gulp.watch(path.JS, ['lint', 'js']);
  gulp.watch(path.VENDOR, ['vendor']);
  gulp.watch(path.MARKUP, ['markup','misc']);
  gulp.watch(path.IMG, ['img']);
});

gulp.task('default', all_tasks);
