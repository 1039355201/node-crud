// 引入http模块
const express = require('express');

// 创造服务器
const app = express();

app.engine('html', require('express-art-template'))

app.get('/',function(req,res){
  res.render('index.html');
});

app.use('/public/', express.static('./public/'))
app.use('/node_modules/', express.static('./node_modules/'))



app.listen(4089,function(){
  console.log('服务器已启动......');  
})

// 从文件读取的东西一定是字符串，必须手动转换成对象，然后才能操作 
var students=JSON.parse(data).students //得到数组
// 配置模板引擎和 下载包body-parser 一定要在app.use(router)挂载路由之前
// 从文件读取数据是字符串，追加数据：‘{students:[]}’->JSON.parse(‘{students:[]}’)-> {students:[]} -> JSON.parse(‘{students:[]}’).students
// JSON.parse(‘{students:[]}’).students->[] ->[].push (表单数据) ->JSON.Stringfy({students:students})-> ‘{students:[]}’-> 写入文件
// 如果需要获取一个函数中异步操作的结果，则必须通过回调函数来获取
// 增删改查  封装异步API 异步操作。通过回调函数。