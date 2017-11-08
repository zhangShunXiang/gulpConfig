
var taskConfig={
        cssConcat:{
            base64:true, //是否转码base64
            base64MaxImageSize:500, //单位bytes , 要转码 base64 必须设置为true;
            domainName:'../',  //域名路径替换
            exincludeDomain:["//js.tdw.cn/", "http://js.tuandai.com/", "http://123/"] //过滤不修改版本号域名
        }
}
 
module.exports = taskConfig;