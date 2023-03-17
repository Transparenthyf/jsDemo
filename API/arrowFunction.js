function promiseFunction1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('promiseFunction1')
      resolve()
    }, 3000)
  })
}

function promiseFunction2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('promiseFunction2')
      resolve()
    }, 3000)
  })
}

promiseFunction1()
  .then(() => promiseFunction2())
  .then(promiseFunction1)
