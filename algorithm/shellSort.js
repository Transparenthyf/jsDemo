import arraySwap from '../method/arraySwap.js'

let array = [3, 6, 7, 1, 5, 9, 0, 6, 4, 8, 2, 15]

function shellSort(array) {
  let gap = Math.floor(array.length / 2)
  while (gap > 0) {
    for (var i = gap; i < array.length; i += gap) {
      for (var j = i - gap; j >= 0 && array[j] > array[j + gap]; j -= gap) {
        arraySwap(array, j, gap + j)
      }
    }
    gap = Math.floor(gap / 2)
  }
  return array
}

console.log(shellSort(array))

export default shellSort