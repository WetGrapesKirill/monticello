const bs = require("browser-sync").create();
const { src, dest, watch } = require('gulp');

const pug = require('gulp-pug');

const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const sourcemaps = require('gulp-sourcemaps');
const csso = require('gulp-csso');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');

const webpack = require('webpack-stream');

function html() {
    return src('./src/pug/index.pug')
        .pipe(pug())
        .pipe(dest('./dist/'));
}

function css() {
    return src('./src/scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer()]))
        .pipe(csso())
        .pipe(sourcemaps.write('./'))
        .pipe(dest('./dist/css/'));
}

function js() {
    return src('./src/js/script.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(dest('dist/js'));

};

function imagewebp() {
    return src('./src/img/*')
        .pipe(webp())
        .pipe(dest('dist/webp'))
}

function imageminify() {
    return src('./src/img/*')
        .pipe(imagemin())
        .pipe(dest('dist/img'))
}

exports.imageminify = imageminify;
exports.imagewebp = imagewebp;
exports.js = js;
exports.html = html;
exports.css = css;
exports.default = function () {
    bs.init({
        server: "./dist"
    });

    html();
    css();
    js();
    imagewebp();
    imageminify();


    watch(['./src/**/*.pug', './src/**/*.scss', './src/**/*.js', './src/img/*'], function () {
        html();
        css();
        js();
        bs.reload();
        done();
    });
};