import arraySwap from '../method/arraySwap.js'

// let arr = [3, 6, 7, 1, 5, 9, 0, 6, 4, 8, 2, 15]

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        arraySwap(arr, j + 1 , j)
      }
    }
  }
  return arr
}

// console.log(bubbleSort(arr))

export default bubbleSort