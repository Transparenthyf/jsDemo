const fs = require('fs')

fs.readFile('C:/Users/isee/Desktop/demo/nodeDemo/API/readFile/version', 'utf-8', (err, data) => {
  if (err !== null) {
    console.log(err)
    return
  } else {
    console.log(data)
  }
})