

<p>ES6->ES5 转译: gulp babelEs5</p>
<p>sass编译：gulp sass</p>
<p>css文件合并，压缩：gulp cssConcat</p>
<p>js文件合并，压缩：gulp jsConcat</p>
<p>图片压缩：gulp tiny，<br/>
 图片压缩包使用 `gulp-tinypng-nokey ` <br/>
官方说明：这是在 https://tinypng.com/ 模拟用户上传和下载的行为，来得到压缩图片，突破使用官网api每月500张限制 <br/>
经测试：翻压缩率跟在官方网站压缩出来的一样大小。翻墙可能更快。 <br/>
建议使用单独任务进行压缩。  <br/>
</p>
<p>给HTML 文件中资源文件加版本号：gulp htmlRevCollector</p>
<p>移动文件：gulp moveFile</p>
<p>移动项目：gulp moveProject</p>
<p>清空文件：gulp clean</p>
<p>打包输出生产环境：gulp build</p>
<p>开发环境：gulp dev</p>

动态服务器配置，在代理配置你加入你要代理的域名或IP。 这样你就可以浏览一些动态文本 如aspx, php等。
browserSync.init({
    proxy: "https://www.tdw.cn/"
});
