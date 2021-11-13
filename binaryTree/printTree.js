export default function printf(node) {
  if (typeof node.leftNode.value !== "undefined") {
    printf(node.leftNode)
  }
  if (typeof node.rightNode.value !== "undefined") {
    printf(node.rightNode)
  }
  console.log(node.value)
}