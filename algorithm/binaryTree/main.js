// import newNode from "./newNode.js"
// import insert from "./insertTree.js"
// import printf from "./printTree.js"

const { newNode } = require('./newNode.js')
const { insert } = require('./insertTree.js')
const { printf } = require('./printTree.js')

const binaryTree = newNode(30)


insert(binaryTree, 32)
insert(binaryTree, 10)
insert(binaryTree, 1)
insert(binaryTree, 12)
insert(binaryTree, 31)
insert(binaryTree, 60)
console.log(binaryTree)


printf(binaryTree)