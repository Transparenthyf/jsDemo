const test = async function (n) {
  if (n === 0) {
    await p()
    console.log(n)
  } else {
    test3(n)
  }
}

let p = async function () {
  return new Promise(function(resolve, reject) {
    setTimeout(function () {
      console.log(12222)
      resolve('ok')
    }, 3000)
  })
}

const test3 = async function (n) {
  console.log(n)
}

const x = async () => {
  let t = [0, 1, 2, 3, 0, 4, 5, 6]
  for (let i = 0; i < t.length; i++) {
    await test(t[i])
  }
}

x()
