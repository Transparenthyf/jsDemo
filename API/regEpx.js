let str = '1.168.3a4.24'

let reg = /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/

console.log(reg.test(str))
// console.log(str.replace(reg, '123123'))
