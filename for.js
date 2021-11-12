let obj = {
  name: 'lucy',
  height: 165,
  weight: 40,
  age: 20,
}

let arr = ['lucy', 165, 40, 20]

// for-in 遍历对象
for (let key in obj) {
  console.log(key)
}
// for-in 遍历数组
for (let key in arr) {
  console.log(key)
}
// for-of 遍历对象  of 只能遍历可迭代数据
// for (let item of obj) {
//   console.log(item)
// }
// for-of 遍历数组
for (let item of arr) {
  console.log(item)
}