     var gulp = require('gulp'),
        path = require('path'),
        babel = require("gulp-babel"),              //es6转es5
        compass = require('gulp-compass'),          // compass编译Sass, 生成雪碧图
        sass = require('gulp-sass'),                // sass编译
        sourcemaps = require('gulp-sourcemaps'),    // sass地图
        rename = require('gulp-rename'),            // 重命名文件
        uglify = require('gulp-uglify'),            // JS压缩
        concat = require('gulp-concat'),            // JS拼接
        imagemin = require('gulp-imagemin'),        // 图片压缩
        cache = require('gulp-cache'),              // 缓存通知
        connect = require('gulp-connect'),          // web服务
        cleanCss = require('gulp-clean-css'),        // 压缩CSS
        cssver = require('gulp-make-css-url-version-s'),    // css文件引用URL加版本号
        clean = require('gulp-clean'),              // 清空文件夹
        notify = require('gulp-notify'),            // 更新通知
        rev = require('gulp-rev'),                   // html添加版本号
        revCollector = require('gulp-rev-collector'),
        runSequence = require('run-sequence'),           //同步运行任务
        browserSync = require('browser-sync').create(), // 浏览器同步
        reload = browserSync.reload,                // 自动刷新
        del = require('del'),                        //删除文件
        base64 = require('gulp-base64'),             //图片转base64
        plumber = require('gulp-plumber'),          //跳 过错误编译
        tiny = require('gulp-tinypng-nokey'),       // 图片压缩
        gulpIgnore = require('gulp-ignore'),        //文件过滤    
        gulpif = require('gulp-if'),                //条件过滤
        urlConfig = require('./urlConfig.js')
        taskConfig = require('./gulpConfig.js')
        


    gulp.task('test', function () {
        console.log(urlConfig.img.src, urlConfig.rev.pic)
    })

    // ES6转ES5
    gulp.task("babelEs5", () => {
        return gulp.src([`${urlConfig.js.src}/**/*.js`])
            .pipe(plumber())
            .pipe(babel())
            .pipe(gulp.dest(urlConfig.tmpl))
            .pipe(notify({ message: '<%= file.relative %>...转译完成' }))
    });

    // scss处理 
    gulp.task("sass", () => {
        return gulp.src(`${urlConfig.sass.src}/**/*.scss`)
            .pipe(notify({ message: '<%= file.relative %>　编译中...' }))
            .pipe(plumber())
            .pipe(sass())
            .pipe(gulp.dest(urlConfig.css.src))
            .pipe(notify({ message: '<%= file.relative %>　编译完成' }))
    });

    //输出带hash值版本图片.
    var onOff = false
    gulp.task("picVison", () => {
        return gulp.src([`./src/images/**/*`])
            .pipe(gulpif(onOff, rev()))
            .pipe(gulp.dest('./dist/images/'))
            .pipe(gulpif(onOff, rev.manifest()))
            .pipe(gulpif(onOff, gulp.dest(`${urlConfig.rev.pic}`)))
    });

    // CSS合并 图片base64编码 压缩 添加版本号
    var base64 = true
    gulp.task("cssConcat", () => {
        return gulp.src([`${urlConfig.css.src}/base.css`, `${urlConfig.css.src}/main2.css`, `${urlConfig.css.src}/public.css`])
            .pipe(concat('index.css'))
            .pipe(gulpif(base64,base64({
                maxImageSize: 500 // bytes 
                // debug: true
            })))
            .pipe(cleanCss())
            .pipe(cssver({
                domainName:'../' , ////域名路径替换 
                exincludeDomain: ["//js.tdw.cn/", "http://js.tuandai.com/", "http://123/"] //过滤不修改版本号域名
            }))
            .pipe(rev())
            .pipe(gulp.dest(urlConfig.css.dist))
            .pipe(rev.manifest())
            .pipe(gulp.dest(urlConfig.rev.css))
    });


    // JS合并/压缩/添加版本号
    gulp.task("jsConcat", () => {
        return gulp.src([`${urlConfig.js.src}/js.js`,
        `${urlConfig.js.src}/profit.js`,
        `${urlConfig.js.src}/page6-1-echarts.js`,
        `${urlConfig.js.src}/page6-2-echarts.js`,
        `${urlConfig.js.src}/page6-3-echarts.js`,
        `${urlConfig.js.src}/page6-4-echarts.js`,
        `${urlConfig.js.src}/page6-5-echarts.js`])
            .pipe(concat('concat.js'))
            .pipe(uglify())
            .pipe(rev())
            .pipe(gulp.dest(urlConfig.js.dist))
            .pipe(rev.manifest())
            .pipe(gulp.dest(urlConfig.rev.js))
    });

    //图片压缩（单独进行任务）
    gulp.task('tiny', (e) => {
        return gulp.src([`${urlConfig.img.src}/**/*`])
            .pipe(tiny())
            .pipe(gulp.dest(urlConfig.img.src))
            .pipe(notify({ message: `<%= file.relative %> 压缩完成` }))

    });

    // html 中资源文件添加版本号
    gulp.task('htmlRevCollector', () => {
        return gulp.src([`${urlConfig.rev.rev}/**/*.json`, `${urlConfig.srcUrl}/**/*.html`])
            .pipe(revCollector())
            .pipe(gulp.dest(urlConfig.distUrl))
    })


    //移动文件
    gulp.task('moveFile', () => {
        return gulp.src(['./src/lib/**'])
            .pipe(gulp.dest('./dist/lib'))
            .pipe(reload({ stream: true }))
    })

    // 选择最终输出路径
    gulp.task('moveProject', () => {
        return gulp.src('./dist')
            .pipe(gulp.dest('h:/q-th'))
    })

    //清空目录
    gulp.task('clean', () => {
        return gulp.src([urlConfig.distUrl])
            .pipe(clean());
    })


    //返回修改文件路径 增加template 后缀
    function changeJsAddtmp(file, filePath) {
        return gulp.src(file)
            .pipe(plumber())
            .pipe(babel())
            .pipe(rename(function (path) { path.basename += "-template" }))
            .pipe(gulp.dest(filePath))
            .pipe(reload({ stream: true }))
            .pipe(notify({ message: '<%= file.relative %>...转译完成' }))
    }

    function changeSassAddtmp(file) {
        return gulp.src(file)
            .pipe(sass())
            .pipe(rename(function (path) { path.basename += "-template" }))
            .pipe(gulp.dest(filePath))
            .pipe(reload({ stream: true }))
            .pipe(notify({ message: '<%= file.relative %>...编译完成' }))
    }


    //返回修改文件路径
    function changeSass(file) {
        return gulp.src(file)
            .pipe(sass())
            .pipe(gulp.dest(urlConfig.css.src))
            .pipe(reload({ stream: true }))
            .pipe(notify({ message: '<%= file.relative %>...编译完成' }))
    }

    function changeJs(file) {
        return gulp.src(file)
            .pipe(plumber())
            .pipe(babel())
            .pipe(gulp.dest(urlConfig.tmpl))
            .pipe(reload({ stream: true }))
            .pipe(notify({ message: '<%= file.relative %>...转译完成' }))
    }

    //打包输出生产环境
    gulp.task("build", ['clean'], () => {
        runSequence('sass', 'picVison', ['cssConcat', 'jsConcat',], 'htmlRevCollector', 'moveFile')
        browserSync.init({
            filters: ["**"],
            server: {
                baseDir: urlConfig.distUrl,
                index: "index.html"
            },
            port: 8880,
        });
        gulp.watch([`${urlConfig.distUrl}/**/*.html`]).on('change', reload);

    })

    //开发环境
    gulp.task("dev", ['sass'], () => {
        // 静态服务器
        browserSync.init({
            filters: ["**"],
            server: {
                baseDir: urlConfig.srcUrl,
                index: "index.html"
            },
            port: 8881,
        });
        //动态服务器
        // browserSync.init({
        //     proxy: "www.gulp.com"
        // });
        gulp.watch(`${urlConfig.sass.src}/**/*.scss`, function (e) {
            var filePath = path.parse(e.path).dir.split('\\').join('/')
            console.log('\n文件改变的路径为' + e.path);
            changeSass(e.path, filePath)
        });
        gulp.watch(`${urlConfig.js.src}/**/*.js`, function (e) {
            var filePath = path.parse(e.path).dir.split('\\').join('/')
            console.log('\n文件改变的路径为' + e.path);
            changeJsAddtmp(e.path, filePath)
        });
        gulp.watch([`${urlConfig.srcUrl}/**/*.html`, `${urlConfig.tmpl}/**/*.js`]).on('change', reload);
    })

    //测试环境
    gulp.task("default", ['sass'], () => {
        // 静态服务器
        browserSync.init({
            filters: ["**"],
            server: {
                baseDir: urlConfig.srcUrl,
                index: "index.html"
            },
            port: 8881,
        });
        //动态服务器
        // browserSync.init({
        //     proxy: "www.gulp.com"
        // });

    })
 
 