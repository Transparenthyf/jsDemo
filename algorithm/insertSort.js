const { arraySwap } = require('../method/arraySwap')

let arr = [3, 6, 7, 1, 5, 9, 0, 4, 8, 2]

for (let i = 1; i < arr.length; i++) {
  for (let j = i; j > 0; j--) {
    if (arr[j] < arr[j - 1]) {
      arraySwap(arr, j, j - 1)
    } else {
      break
    }
  }
}

console.log(arr)