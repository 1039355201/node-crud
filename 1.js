// 清除定时器 
// ————dirname
// 登录系统 node
console.time('start');

var q =`请输入用户名\n`
var m =`请输入密码\n`
// 设标志位
var flag=true
var users={
  'admin':'admin',
  'user1':'123',
  'user2': '666',
}
process.stdout.write(q)
process.stdin.on('data',(input)=>{
  input=input.toString().trim();
  // process.stdin.write(typeof(Object.keys(users).indexOf(input)))
  // 代表在验证用户名阶段
  if(flag){
    // 用户名不存在
    if (Object.keys(users).indexOf(input) === -1) {
      process.stdout.write(`用户名不存在\n`);
      process.stdout.write(q);
    }else{
      // 用户名存在
      process.stdout.write(m);
      flag=false;
      username=input;
    }
  }
  else{ 
    //存在
    // console.log('存在');
    if (users[username] === input){
      console.log('登录成功');
    }else{
      console.log('密码错误');
      process.stdout.write(m);
    }
  } 
})
console.timeEnd('start');