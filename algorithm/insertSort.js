import arraySwap from '../method/arraySwap.js'

// let arr = [3, 6, 7, 1, 5, 9, 0, 6, 4, 8, 2, 15]

function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        arraySwap(arr, j, j - 1)
      } else {
        break
      }
    }
  }
  return arr
}

// console.log(insertSort(arr))

export default insertSort