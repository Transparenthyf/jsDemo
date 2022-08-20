for (let i = 0; i < 300; i++) {
  let str = getCharacter()
  for (let i = 0; i < 9; i++) {
    str += Math.floor(Math.random() * 10)
  }
  console.log(str)
}

function getCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 'A'.charCodeAt(0))
}
