let str = '1020px'
// const reg = /[\u4E00-\u9FA5\uF900-\uFA2D\u0020]/
// const reg = /[\u0020]/
const reg = /[0-9]*/  //匹配正整数
let x = str.match(reg)[0]
console.log(x, reg.test(str), Number(str))