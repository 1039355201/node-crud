// npm init -y -> npm i express -S -> hello world  
// 配置模板引擎 npm i express-art-template art-template -S 就可以渲染views下面的文件
// 增删改查
/** 
 * app.js 
 * 职责：
 *  创建服务
 *  做一些服务相关配置
 *    模板引擎
 *    body-parser解析表单post请求体
 *    提供静态资源服务
 *  挂载路由
 *  监听端口启动服务
 * 
*/
const express=require('express');
const app = express();
const fs = require('fs');
const router=require('./router');
const bodyParser = require('body-parser')

// 开放目录 可以被访问
app.use('/public/', express.static('./public/'))
app.use('/node_modules/', express.static('./node_modules/'))

app.engine('html', require('express-art-template'))
// 配置 body-parser
// 只要加入这个配置，则在 req 请求对象上会多出来一个属性：body
// 也就是说你就可以直接通过 req.body 来获取表单 POST 请求体数据了

app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json

app.use(router)

app.listen(3076,()=>{
  console.log('服务器已启动.....');
})