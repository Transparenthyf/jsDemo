let str = 'stroke:#88FF88;fill-opacity:0;stroke-width:1'
// const reg = /[\u4E00-\u9FA5\uF900-\uFA2D\u0020]/
// const reg = /[\u0020]/
let reg = /fill-opacity:[0-9].?[0-9]*;/

// const reg = /[0-9]/g
// console.log(str.split(','))
// let x = str.replace(/[\s\(\)]/g, '').split(',')
// console.log(x, reg.test(str), Number(str))
// console.log(reg.test(str))
console.log(str.replace(reg, 'fill-opacity:0.5;'))
