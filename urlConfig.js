var distUrl= './dist',
    srcUrl= './src',
    baseUrl= __dirname
var urlConfig = {
    distUrl: distUrl,
    srcUrl: srcUrl,
    baseUrl: baseUrl,
    tmpl:'./tmpl',
    sass: {
        src: `${srcUrl}/sass`,
        dist: `${srcUrl}/css`,
    },
    css: {
        src: `${srcUrl}/css`,
        dist: `${distUrl}/css`,
    },
    js: {
        src: `${srcUrl}/js`,
        dist: `${distUrl}/js`,
    },
    img: {
        src: `${srcUrl}/images`,
        dist: `${distUrl}/images`,
    },
    rev: {        
        rev: './rev',
        css: './rev/css',
        js: './rev/js',
        pic: './rev/pic'
    },
    html: `${srcUrl}/**/*.html`,
}
module.exports = urlConfig;