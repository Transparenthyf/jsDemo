function insert(node, value) {
  // 节点不存在，新建一个节点
  if (typeof node.value === 'undefined') {
    node.value = value
    node.leftNode = {}
    node.rightNode = {}
    return true
  }
  // 将 value 与当前节点值作比较
  if (node.value === value) {
    // value 已存在
    return false
  } else if (node.value > value) {
    insert(node.leftNode, value)
  } else {
    insert(node.rightNode, value)
  }
}

exports.insert = insert