// let array = [3, 6, 7, 1, 5, 9, 0, 6, 4, 8, 2, 15]

function mergeSort(array, start, finish) {
  // 初始化参数
  let middle = start + Math.floor((finish - start) / 2)
  let start1 = start
  let finish1 = middle
  let start2 = middle + 1
  let finish2 = finish
  let tmpArray = []

  // 递归终止条件
  if (finish === start) {
    return
  }

  // 递归调用
  mergeSort(array, start1, finish1)
  mergeSort(array, start2, finish2)

  // 排序
  for (let i = 0; i < finish - start + 1; i++) {
    if (start1 > finish1) {
      tmpArray[i] = array[start2]
      start2++
    } else if (start2 > finish2) {
      tmpArray[i] = array[start1]
      start1++
    } else {
      if (array[start1] < array[start2]) {
        tmpArray[i] = array[start1]
        start1++
      } else {
        tmpArray[i] = array[start2]
        start2++
      }
    }
  }

  let start3 = start
  for (let item of tmpArray) {
    array[start3] = item
    start3++
  }

  return array
}

// console.log(mergeSort(array, 0, array.length - 1))

export default mergeSort