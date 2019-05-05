// 浏览器收到HTML响应内容后,解析HTML文件，遇到 link script img iframe video audio 等带有src href（link）端口号+url（src/href）
// 等外链接资源的时候，浏览器会自动对这些资源发起新的请求，请求所有静态资源都存放在一个目录
// 把请求路径当做文件路径来进行访问，一个资源对应一个请求，最好放在同一个文件下，只用 服务端渲染 判断，然后读取，后台开发人员处理
// 在html页面写 charset=utf8 即可,不用服务器写
// 页面处理静态资源 服务端渲染
// url.indexOf('/public/')===0 字符串的indexOf()
// 评论就能拿到数据
const http = require('http');
const fs = require('fs');
http
  .createServer((request,response)=>{
    var url=request.url;
    if (url==='/'){
      fs.readFile('./index.html',function(err,data){
        if(err){
          return response.end('404 not found')
        }else{
          response.end(data)
        }
      })
    }else if(url.indexOf('/public/')===0){
      fs.readFile('.'+url, function (err, data) {
        if (err) {
          return response.end('404 not found')
        } else {
          response.end(data)
        }
      })
    }
  })
  .listen(8006,function(){
    console.log('服务器启动....');
    
  })