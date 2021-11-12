const counter = (() => {
  let num = 0
  return (flag) => {
    if (flag === '+') {
      num++
    } else if (flag === '-') {
      num--
    }
    return num
  }
// 让匿名函数运行一次，返回一个匿名函数给 add
})()

const add = '+'
const sub = '-'

console.log(counter(add))
console.log(counter(add))
console.log(counter(add))
console.log(counter(add))
console.log(counter(add))
console.log(counter(sub))
console.log(counter(sub))

// 闭包之后只能调用 counter 进行加减

counter = null