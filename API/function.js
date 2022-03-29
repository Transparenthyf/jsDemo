const x = (value1, value2, callBack) => {
  console.log(value1, value2)
  if (typeof callBack === 'function') {
    console.log(callBack)
    callBack()
  }
}

function y(value1, value2, callBack) {
  console.log(value1, value2)
  console.log(callBack)
  callBack()
}

function z() {
  console.log(111)
}

x(123, 123, z)