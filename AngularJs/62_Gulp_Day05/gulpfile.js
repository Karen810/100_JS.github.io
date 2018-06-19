// 引入本地安装的gulp
var gulp = require('gulp');

var less = require('gulp-less');

var cssmin = require('gulp-cssmin');

var imagemin = require('gulp-imagemin');

var uglify = require('gulp-uglify');

var concat = require('gulp-concat');

var htmlmin = require('gulp-htmlmin');

var autoprefixer = require('gulp-autoprefixer');

var rev = require('gulp-rev');//地址MD5加密，清缓存

var revCollector = require('gulp-rev-collector');

var useref = require('gulp-useref');

var gulpif = require('gulp-if');

// 返回值gulp是一个对象，借助此对象可以实现任务清单的定制
// 通过一系列的来方法来实现

//定义任务(将less转成css)
gulp.task('less',function(){
    // console.log('学习gulp')

    // 借助gulp.src来制定less文件位置
    gulp.src('./public/less/*.less')
        //借助于gulp插件实现less转css的操作
        .pipe(less())
        .pipe(cssmin())
        .pipe(autoprefixer())
        //rev通过文件路径的改变告诉浏览器这是个新地址，解决缓存问题
        .pipe(rev())

        //通过gulp.dest进行存储
        .pipe(gulp.dest('./release/public'))

        .pipe(rev.manifest())
        .pipe(gulp.dest('./release/rev'));



    //借助于gulp插件实现less转css的操作

});


// 处理图片
gulp.tast('image', function(){
    gulp.src('./public/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('.release/public/images'));

});


//压缩js
gulp.task('js', function(){
    gulp.src('./scripts/*.js')
        .pipe(uglify())
        .pipe(concat())
        .pipe(gulp.dest('./release'))
});

//压缩html
gulp.task('html', function(){
    gulp.src(['./01-index.html','./views/*.html'], {base: './'})
        .pipe(htmlmin({collapseWhitespace: true, removeConments: true, minify: true}))
        //removeConments：去掉注释   minify：压缩页面里面的js和css
        .pipe(gulp.dest('./release/'))
});


//替换加密后的地址
gulp.task('rev', function(){
   gulp.src(['./release/rev/*.json', './release/**/*.html'], {base: './release/'})
       .pipe(revCollector())
       .pipe(gulp.dest('./release'))
});



//useref  build两个css/js文件合并成一个文件并更改地址
gulp.task('useref', function(){
    gulp.src('./01-index.html')
        .pipe(useref())

        .pipe(gulpif('*.js', uglify()))
        .pipe(gulp.dest('./release'));
});








































