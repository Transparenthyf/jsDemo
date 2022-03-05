import arraySwap from '../method/arraySwap.js'

let arr = [3, 6, 7, 1, 5, 9, 0, 6, 4, 8, 2, 15]

for (let i = 0; i < arr.length; i++) {
  let index = i
  for (let j = i; j < arr.length; j++) {
    if (arr[j] < arr[index]) {
      index = j
    }
  }
  arraySwap(arr, i, index)
}

console.log(arr)