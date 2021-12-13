const { src, dest } = require('gulp');

const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const webpack = require('webpack-stream');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const eslint = require('gulp-eslint');

module.exports = function script() {
	return src('app/scripts/**/*.js')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(sourcemaps.write('/sourcemaps/'))
		.pipe(dest('build/assets/scripts'));
};
