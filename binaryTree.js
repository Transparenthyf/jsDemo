const binaryTree = {
  value: 0,
  leftNode: {
    value: 1,
    leftNode: {
      value: 3,
      leftNode: {
        value: 7,
      },
      rightNode: {
        value: 8
      }
    },
    rightNode: {
      value: 4
    }
  },
  rightNode: {
    value: 2,
    leftNode: {
      value: 5,
      leftNode: {
        value: 11
      }
    },
    rightNode: {
      value: 6
    }
  }
}

const printf = (node) => {
  if (typeof node.leftNode !== 'undefined') {
    printf(node.leftNode)
  }
  if (typeof node.rightNode !== 'undefined') {
    printf(node.rightNode)
  }
  console.log(node.value)
}

printf(binaryTree)
// console.log(printf(binaryTree))