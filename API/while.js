let num = 0

while (num < 10) {
  console.log(num)
  if (num === 6) {
    console.log('end', num)
    break
  }
  num++
}