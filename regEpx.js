let str = '1020'
// const reg = /[\u4E00-\u9FA5\uF900-\uFA2D\u0020]/
// const reg = /[\u0020]/
const reg = /^[1-9][0-9]*$/ 　 //匹配正整数

console.log(str.match(reg), reg.test(str), Number(str))