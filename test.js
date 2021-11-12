let global = 0
let t = [0, 1, 2, 3, 0, 5, 6, 7]
let tt = [0, 0, 0, 0, 0, 0, 0, 0]

var test2 = function () {
  console.log('test2')
  for (let i = 0; i < 1000000000; i++) {
    global++
  }
}

var test3 = function (n) {
  console.log('test3')
	setTimeout(() => {
		tt[n] = n + global
		console.log(tt)
	}, 10)
}

for (let i = 0; i < t.length; i++) {
  console.log(t[i])
  if (t[i] === 0) {
    test2()
  } else {
    test3(t[i])
  }
}

// 异步函数的回调会在主线程空闲的时候执行
