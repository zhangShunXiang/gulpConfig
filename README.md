
因为需要的依赖包很大，建议用yarn进行依赖包下载，用npm经常中途会卡死:

##### yarn安装：
`npm install yarn`

##### 用yarn 安装依赖包：
`yarn install`


##### 生产环境：
`gulp build`

##### 开发环境:
`gulp dev`

##### 测试环境:
`gulp` 


##### 包含功能： 
sass 注入;
css 合并，自动添加版本号
js 合并，自动添加版本号
图片转base64  (base64 个弊端是 IE 的兼容性问题。IE 8 以下不支持 data url，IE 8 开始支持 data url，却有大小限制，32k）。建议把配置设置为10K左右图片进行编码。
图片自动添加版本号
es6 转 es5 （这里有个坑,实时编译时候一但报错就是停掉整个进程，只能完成项目后进行手动编译,谁有解决方法告诉一声） gulp  babelEs5
图片压缩

图片压缩包使用 `gulp-tinypng-nokey `
官方说明：这是在 https://tinypng.com/ 模拟用户上传和下载的行为，来得到压缩图片，突破使用官网api每月500张限制
经测试：翻压缩率跟在官方网站压缩出来的一样大小。翻墙可能更快。
建议使用单独任务进行压缩。 
`gulp tiny` 

动态服务器配置，在代理配置你加入你要代理的域名或IP。 这样你就可以浏览一些动态文本 如aspx, php等。
browserSync.init({
    proxy: "https://www.tdw.cn/"
});
