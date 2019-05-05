
var students = { "students": [{ "id": 1, "name": "Daisy", "gender": 0, "age": 18, "hobbies": "吃饭、睡觉" }, { "id": 2, "name": "Daisy", "gender": 0, "age": 18, "hobbies": "吃饭、睡觉" }, { "id": 3, "name": "Daisy", "gender": 0, "age": 18, "hobbies": "吃饭、睡觉" }, { "id": 4, "name": "Daisy", "gender": 0, "age": 18, "hobbies": "吃饭、睡觉" }, { "id": 5, "name": "Daisy", "gender": 0, "age": 18, "hobbies": "吃饭、睡觉" }, { "id": 6, "name": "Daisy", "gender": 0, "age": 18, "hobbies": "吃饭、睡觉" }, { "name": "", "age": "", "hobbies": "", "id": 7 }, { "name": "cxds", "gender": "1", "age": "33", "hobbies": "hgh", "id": 8 }, { "name": "cxds", "gender": "0", "age": "44", "hobbies": "hgh", "id": 9 }, { "name": "cxds", "gender": "1", "age": "55", "hobbies": "打羽毛球", "id": 10 }] }.students;//[]
// find ES6的方法，找到这一项之后，跳出循环，
// find 方法 浅拷贝
var student = { "id": 5, "name": "Daisyswsw", "gender": 0, "age": 18, "hobbies": "吃饭、睡觉" }
var stu = students.find((item) => {
  return item.id === student.id
})
console.log(stu);

// 重写这一项 浅拷贝
for (let key in student) {
  stu[key] = student[key];
}
console.log(stu);
console.log(students);
