let obj1 = {
  lastImageItem: [],
  imageItem: [],
  nextImageItem: []
}

let flag = 'lastImageItem'

obj1[flag] = [0, 1, 2]

const test = (flag, num) => {
  console.log(flag === null)
  console.log(flag !== null)
  console.log(typeof flag !== 'undefined')
  console.log(typeof flag)
  console.log(num)
}
console.log(obj1)
test(null, 111)