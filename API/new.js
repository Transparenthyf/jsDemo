// 直接创建和 String/Number 创建的都是原始值
// new String/new Number 创建的为引用值（对象）

let str1 = 'abcdefghijk'
let str2 = String('abc')
let str3 = new String('abc')
str3.temp = 'efg'
console.log(str1.slice(-2), typeof str1)
console.log(str2, typeof str2)
console.log(str3, typeof str3)
console.log(str1 === str2)
console.log(str1 === str3)
console.log(str2 === str3)

console.log('********************')

let num1 = 123
let num2 = Number(123)
let num3 = new Number(123)
console.log(num1, typeof num1)
console.log(num2, typeof num2)
console.log(num3, typeof num3)
console.log(num1 === num2)
console.log(num1 === num3)
console.log(num2 === num3)