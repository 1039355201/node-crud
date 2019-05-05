/**
 * 设计操作数据的API 文件模块
 * 只处理数据，不关心业务
 * 异步封装，promise
 */


const dbPath='./db.json'
const fs = require('fs');
/**
 * 获取所有学生列表
 *通过回调函数传参 拿出结果
 */
function find(callback) { 
  fs.readFile(dbPath,'utf8',function(err,data){
    if (err) {
      return callback(err)
    }
    callback(null,JSON.parse(data).students)
  })
}

/**
 * 保存所有信息
 */
function save(student,callback) {
  fs.readFile(dbPath, 'utf8', function (err, data) {
    if (err) {
      return callback(err)
    }
    var students = JSON.parse(data).students;//[]
    student.id = students[students.length-1].id+1 //处理id不唯一
    students.push(student);//[]
    var fileData = JSON.stringify({ students: students});
    // 数据持久化
    fs.writeFile(dbPath, fileData,function(err){
      if (err) {
        // 写入错误就把错误对象传递给他
        return callback(err)
      }
      // 成功就没错，所以错误对象就是null
      return callback(null)
    })
  })
}

/**
 * updateById 更新
 */
function updateById(student, callback){
  fs.readFile(dbPath, 'utf8', function (err, data) {
    if (err) {
      return callback(err);
    }
    var students = JSON.parse(data).students;//[]
    // find ES6的方法，找到这一项之后，跳出循环，
    var stu = students.find((item)=>{
      return item.id == student.id
    })
    // 重写这一项 浅拷贝 for...in
    for (let key in student){
      stu[key] = student[key];
    }
    
    var fileData = JSON.stringify({ students: students });
    fs.writeFile(dbPath, fileData, function (err) {
      if (err) {
        // 写入错误就把错误对象传递给他
        return callback(err)
      }
      // 成功就没错，所以错误对象就是null
      return callback(null)
    })
  })
}
/**
 * 通过id 查询
 */
function findById(id,callback){
  fs.readFile(dbPath,'utf8',function(err,data){
    if(err){
      return callback(err)
    }
    var students = JSON.parse(data).students
    var stu=students.find((item)=>{
      return item.id==id
    })
    callback(null, stu)
  })
}

/**
 * 处理删除学生
 */
function deleteById(id,callback){
  fs.readFile(dbPath, 'utf8', function (err, data) {
    if (err) {
      return callback(err)
    }
    var students = JSON.parse(data).students
    // findIndex方法专门用来根据条件返回下标
    var stuIndex = students.findIndex((item) => {
      return item.id == id
    })
    //根据下标删除对应的学生对象
    students.splice(stuIndex,1);
    //重写 重新存储JSON信息
    var fileData = JSON.stringify({ students: students });
    fs.writeFile(dbPath, fileData, function (err) {
      if (err) {
        // 写入错误就把错误对象传递给他
        return callback(err)
      }
      // 成功就没错，所以错误对象就是null
      return callback(null)
    })
  })
}
module.exports={
  find,
  save,
  updateById,
  findById,
  deleteById,
}