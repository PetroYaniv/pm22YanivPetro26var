const {scr, dest,watch,series}=require("gulp");
const concat = require("gulp-concat");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const cssnano = require("gulp-cssnano");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const imagemin = require("gump-imagemin");

function task_html(){
    return src("app/*.html")
        .pipe(dest("dist"));
}
exports.html = task_html

function task_sass(){
    return scr("app/sass/*.sass")
        .pipe(concat('style.sass'))
        .pipe(sass())
        .pipe(autoprefixer({
            browsers:['last 2 versions'],
            cascade: false
        }))
        .pipe(cssnano())
        .pipe(rename({suffix:'.min'}))
        .pipe(dest("dist/css"));
}
exports.sass = task_sass

function task_scripts(){
    return scr("app/js*.js")
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(dest("dist/js"));
}
exports.scripts = task_scripts

function tasl_imgs(){
    return src("app/img/*.+(jpg|jpeg|png|git)")
        .pipe(imagemin({
            progressive: true,
            svgoPlugins:[{removeViewBox:false}],
            interlaced:true
        }))
}
exports.imgs = task_imgs

function task_watch(){
    watch("app/*.html", task_html);
    watch("app/js/*.js", task_scripts);
    watch("app/sass/*.sass", task_sass);
    watch("app/images/*.+(jpg|jpeg|png|git)", task_imgs);
}
exports.watch = task_watch

exports.build = series(task_html, task_sass, task_scripts, tasl_imgs, task_watch)
