var promise =new Promise(function(resolve,reject){
  var time=1000;
  setTimeout(() => {
    console.log(time);
    var data ="默认数据";
    resolve(data);
  }, time);
});
promise.then(function(res){
  console.log(res); 
})
// 如果需要获取一个函数中异步操作的结果，则必须通过回调函数来获取
function fn(callback){
  setTimeout(() => {
    var data = "默认数据";
    callback(data);
  }, 1000);
}
fn(function(data){
  console.log(data); 
})