
/**
 * 职责：
 *    处理路由
 *    根据不同的请求方法+请求路径设置具体的请求函数
 *    模块职责单一
 */
const express = require('express');
// 1.创建一个路由容器
const router = express.Router();
const fs = require('fs');
const students = require('./student');
// students.updateById({
//   id:5,
//   name:'石婷',
//   age:24
// },function(err){
//   if(err){
//     console.log('修改失败！'); 
//   }
//     console.log('修改成功！'); 
// })
// 2.把路由都挂载到路由容器中
// 从文件中读取的数据一定是字符串，用的时候一定要手动转换成对象
router.get('/students', function (req, res) {
  students.find(function (err,students){
    if (err) {
      return res.status(500).send('Server error')
    };
    res.render('index.html', {
      fruits: ['苹果', '香蕉', '橘子'],
      students: students
    })
  })
  
})

router.get('/students/new', function (req, res) {
  res.render('new.html')
  })

router.post('/students/new', function (req, res) {
  // 1.获取表单数据
  // 2.处理 
  // 3.发送响应
  var student=req.body;
  students.save(student,function(err){
    if (err) {
      return res.status(500).send('Server error')
    };
    //成功跳回首页
    res.redirect('/students');

  })
 
})

router.get('/students/edit', function (req, res) {
  var id = req.query.id;//通过url获取到的id都是字符串，需要转换成number类型
  students.findById(parseInt(id), function (err,stu) {
    if (err) {
      return res.status(500).send('Server error')
    };
    // 得到stu 信息后先得到渲染的页面
    // 然后updateById更新页面
    res.render('edit.html',{
      stu:stu,
    })
    console.log(stu);
    
  })
  // res.send('index')
})

router.post('/students/edit', function (req, res) {
  // 2.更新students.updateById
  students.updateById(req.body,function(err){
    if (err) {
      return res.status(500).send('Server error')
    };
    // 3.发送响应
    //成功跳回首页
    res.redirect('/students')
  })
  console.log(req.body);
  
})

router.get('/students/delete', function (req, res) {
  // 1.获取要删除的id
  // 2.根据id执行删除操作
  // 3.根据操作结果发送响应数据
  console.log(req.query.id);
  students.deleteById(req.query.id, function (err) {
    if (err) {
      return res.status(500).send('Server error')
    };
    // 3.发送响应
    //成功跳回首页
    res.redirect('/students')
  })
})
module.exports = router