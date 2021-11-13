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
// 让函数立即执行一次，返回一个匿名函数给 counter
})()

const add = '+'
const sub = '-'

// 闭包之后只能调用 counter 对 num 进行加减
console.log(counter(add))
console.log(counter(add))
console.log(counter(add))
console.log(counter(add))
console.log(counter(add))
console.log(counter(sub))
console.log(counter(sub))

// 闭包使用完毕，进行内存释放
counter = null