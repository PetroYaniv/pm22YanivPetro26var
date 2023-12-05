const {src, dest,watch, series}=require("gulp");
const concat = require("gulp-concat");
const sass = require("gulp-sass")(require('sass'))
const autoprefixer = require("gulp-autoprefixer");
const cssnano = require("gulp-cssnano");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");
const browserSync = require('browser-sync').create();

function task_html(){

    return src("app/*.html")
        .pipe(dest("dist"));
}
exports.html = task_html
function  task_browser(){
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
}

exports.browsersync = task_browser
function task_scss(){
    return src("app/sass/*.scss")
        .pipe(concat('style.scss'))
        .pipe(sass())
        .pipe(autoprefixer({
            browsers:['last 2 versions'],
            cascade: false
        }))
        .pipe(cssnano())
        .pipe(rename({suffix:'.min'}))
        .pipe(dest("dist/css"));
}
exports.sass = task_scss
function task_data(){
    return src("app/js/*.json")
//        .pipe(uglify())
        .pipe(dest("dist/js"));

}
exports.data = task_data

function task_scripts(){
    return src("app/js/*.js")
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(dest("dist/js"));

}
exports.scripts = task_scripts

function task_libs(){
    return src("app/libs/*.js")
        .pipe(concat('libs.js'))
        .pipe(dest("dist/js"));
}
exports.libs = task_libs

function task_imgs(){
    return src("app/img/*.+(jpg|jpeg|png|git)")
        .pipe(imagemin({
            progressive: true,
            svgoPlugins:[{removeViewBox:false}],
            interlaced:true
        }))
        .pipe(dest("dist/img"))
}
exports.imgs = task_imgs

function task_watch(){
    watch("app/*.html", task_html);
    watch("app/js/*.js", task_scripts);
    watch("app/sass/*.scss", task_scss);
    watch("app/images/*.+(jpg|jpeg|png|git)", task_imgs);

}
exports.watch = task_watch

exports.default =series(task_html, task_scss, task_scripts, task_libs, task_data,task_imgs, task_browser, task_watch)
