//引入gulp
var gulp = require('gulp');
var sass = require('gulp-sass');

//创建一个任务
gulp.task('cs',function(){
    //查找文件
    gulp.src('./src/sass/*.scss')

    //管道传输，编译
    .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))

    //输出到硬盘
    .pipe(gulp.dest('./src/css/'))
})


//自动刷新页面
var browserSync = require('browser-sync');

gulp.task('server',function(){
    //启动一个自动刷新的服务器
    browserSync({
        //创建一个静态服务器
        // server:'./src',
        //指定端口
        port:1008,
        //代理服务器
        proxy:'http://localhost:10086',

        //监听文件修改
        // files:['./src/**/*.html','./src/css/*.css','./src/api/*.php']
        files:['./src/**/index.html','./src/css/index.css','./src/api/index.php']

        

    });
    //监听sass修改
    // gulp.watch('./src/sass/*.scss',['cs']);
    gulp.watch('./src/sass/index.scss',['cs']);

});