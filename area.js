
let points = '2,1 4,1 3,2 6,4 3,4 1,2'

const area = (points) => {
  // 记录多边形点坐标
  let pointsArray = []
  for (let i = 0; i < points.split(" ").length; i ++) {
    let point = {
      x: 0,
      y: 0
    }
    // 拆解坐标
    point.x = parseFloat(points.split(" ")[i].split(",")[0])
    point.y = parseFloat(points.split(" ")[i].split(",")[1])
    pointsArray[i] = point
  }
  // 面积
  let S = 0
  // 最右侧点的坐标 (用于显示)
  let rightMost = {
    x: 0,
    y: 0
  }
  for (let i = 0; i < pointsArray.length; i++) {
    if (pointsArray[i].x > rightMost.x) {
      rightMost.x = pointsArray[i].x
      rightMost.y = pointsArray[i].y
    }
    // 下一点索引
    let next = 0
    if (i === pointsArray.length - 1) {
      next = 0
    } else {
      next = i + 1
    }
    let x = pointsArray[next].x - pointsArray[i].x
    let y = (pointsArray[next].y + pointsArray[i].y) / 2
    S += x * y
  }
  console.log(rightMost.x, rightMost.y)
  return Math.abs(S)
}
let s = area(points)
console.log(s)