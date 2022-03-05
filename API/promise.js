const test = async (n) => {
  if (n === 0) {
    await p()
    console.log(n)
  } else {
    test3(n)
  }
}

let p = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(12222)
      resolve('ok')
    }, 3000)
  })
}

const test3 = async (n) => {
  console.log(n)
}

const x = async () => {
  let t = [0, 1, 2, 3, 0, 4, 5, 6]
  for (let i = 0; i < t.length; i++) {
    await test(t[i])
  }
}

// x()

const y = async () => {
  await new Promise((resolve, reject) => {
    console.log(sdfasd)
    resolve()
  })
  setTimeout(() => {
    console.log(1111111)
  }, 3000)
}

y()