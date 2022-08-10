async function test(n) {
  if (n === 0) {
    await p()
  } else {
    console.log(n)
  }
}

async function p(num) {
  return new Promise((resolve, reject) => {
    if (num === 0) {
      setTimeout(() => {
        console.log(0)
        resolve('ok')
      }, 3000)
    } else {
      console.log(num)
      reject('err')
    }
  })
}

/*
const x = async () => {
  let t = [0, 1, 2, 3, 0, 4, 5, 6]
  for (let i = 0; i < t.length; i++) {
    await test(t[i])
  }
}
x()
*/


/*
p(1).then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
})
*/

p(1).then((res) => {
  console.log(res)
}, (err) => {
  console.log(err)
})