let arr = [3, 6, 7, 1, 5, 9, 0, 6, 4, 8, 2, 15]
let tempArr = []

function countSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (tempArr[arr[i]]) {
      tempArr[arr[i]]+= 1
    } else {
      tempArr[arr[i]] = 1
    }
  }
  let index = 0
  for (let i = 0; i < tempArr.length; i++) {
    while (tempArr[i] > 0) {
      arr[index] = i
      tempArr[i]--
      index++
    }
  }
  return arr
}

console.log(countSort(arr))

export default countSort