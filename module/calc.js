// CMD的规范
define(function(require,module,exports){
  // 在node 中使用的是common.js规范 引入的时候必须加‘./’
  //node中定义的 fs 第三方加载require() npm 安装（mysql）
  // function 实现计算器
  // module.exports={}
  // new一个.js文件 exports require 
  //module 是一个全局变量
  // 模块是一个独立作用域
  // require 加载文件机制 加载时扩展名可以省略
  // require('./module')
  // require('./module.js')
  // require('./module.json')
  // require('./module.node')
  // 也可以记载文件夹的名字
  // require('./module')顺序：package.json下面的main的指向；若没有package.json，就会去加载index.js
  // 加载规则 如果不带'./'那么就是加载模块或者包，就是系统自带的fs或者npm 下载下来的node_modules里面的包，
  // node_modules里面的包加载不用加'./'变成绝对路径加载
  // ‘/’是系统根目录；‘./’和'../'是相对路径 
  // 模块缓存  
  // fs.writeFile(A,B,C) A是文件路径，B是文件内容，C是回调函数
  // fs.readFile(A,B)A是文件路径，B是回调函数
  // error与data 为null 或者(错误)信息

  // 服务器 http模块是创建服务器的
  // 1.加载http 模块 2.web服务器 
  // 3.服务器功能：发请求 
  // 注册请求事件，当客户端请求过来，就会自动触发服务器的request请求事件，然后执行第二个参数：回调处理
  // 4.绑定端口号，启动服务器
})