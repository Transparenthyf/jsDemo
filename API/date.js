// let date = '123456789'
let date = new Date()

// 86,400,000
console.log(new Date(new Date().toLocaleDateString()).getTime())
// console.log((date.getMonth() + 1) + '-' + date.getDate() + ' ' + ((date.getHours() < 10) ? '0' + date.getHours() : date.getHours()) + ':' + ((date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()))
// console.log(date.toTimeString())
