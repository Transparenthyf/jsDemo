// 阻塞代码实例
// const fs = require("fs")

// const data = fs.readFileSync('helloWorld.txt')

// console.log(data.toString())
// console.log("程序执行结束！")

// 非阻塞代码实例
const fs = require('fs')

fs.readFile('helloWorld.txt', (err, data) => {
  if (err) return console.log(err)
  console.log(data.toString())
})

console.log("程序执行结束！")