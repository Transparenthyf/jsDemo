let str = '(0, 276)'
// const reg = /[\u4E00-\u9FA5\uF900-\uFA2D\u0020]/
// const reg = /[\u0020]/
const reg = /[0-9]/g
// console.log(str.split(','))
let x = str.replace(/[\s\(\)]/g, '').split(',')
console.log(x, reg.test(str), Number(str))