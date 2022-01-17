const { arraySwap } = require('../method/arraySwap')

let arr = [3, 6, 7, 1, 5, 9, 0, 6, 4, 8, 2]

for (let i = 0; i < arr.length; i++) {

}

const quickSort = (array, begin, finish) => {
  // 开始结束中间没有值时退出
  if (finish - begin <= 1) {
    return
  }

  //寻找 begin 的正确位置
  let targetIndex = begin + 1
  for (let i  = begin + 1; i <= finish; i++) {
    if (array[i] < array[begin]) {
      arraySwap(array, i, targetIndex)
      targetIndex++
    }
  }
  arraySwap(array, begin, targetIndex - 1)

  // 递归剩余的值
  quickSort(array, begin, targetIndex - 1)
  quickSort(array, targetIndex, finish)
}

quickSort(arr, 0, arr.length - 1)
console.log(arr)