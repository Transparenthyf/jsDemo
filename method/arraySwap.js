// 交换数组元素位置

function arraySwap(arr, index1, index2) {
  let temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}

export default arraySwap