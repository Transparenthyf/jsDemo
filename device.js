


    // 整理记录合并信息
    // const disposal = (data) => {
    //   console.log('disposal')
    //   // 初始化
    //   state.presentRow.productName = 0
    //   state.presentRow.companyName = 0
    //   state.presentRow.deviceName = 0
    //   for (let i = 0; i < data.length; i++) {
    //     state.spanObj.productName[i] = 1
    //     state.spanObj.companyName[i] = 1
    //     state.spanObj.deviceName[i] = 1
    //   }
    //   let newProduct = false
    //   let newCompany = false
    //   // 记录合并信息
    //   for (let i = 0; i < data.length - 1; i++) {
    //     if (data[i].productName === data[i + 1].productName) {
    //       state.spanObj.productName[state.presentRow.productName]++
    //       state.spanObj.productName[i + 1] = 0
    //       newProduct = false
    //     } else {
    //       state.presentRow.productName = i + 1
    //       newProduct = true
    //     }
    //     if (data[i].companyName === data[i + 1].companyName && !newProduct) {
    //       state.spanObj.companyName[state.presentRow.companyName]++
    //       state.spanObj.companyName[i + 1] = 0
    //       newCompany = false
    //     } else {
    //       state.presentRow.companyName = i + 1
    //       newCompany = true
    //     }
    //     if (data[i].deviceName === data[i + 1].deviceName && !newCompany) {
    //       state.spanObj.deviceName[state.presentRow.deviceName]++
    //       state.spanObj.deviceName[i + 1] = 0
    //     } else {
    //       state.presentRow.deviceName = i + 1
    //     }
    //   }
    // }
    // // 要合并的信息
    // spanObj: {
    //   productName: [],
    //   companyName: [],
    //   deviceName: [],
    // },
    // // 记录正在判断的行数
    // presentRow: {
    //   productName: 0,
    //   companyName: 0,
    //   deviceName: 0
    // },
    // 分页操作
    // const paging = (page) => {
    //   for(let i = 0;i < state.deviceData.length;i++){
    //     clearTimeout(state.deviceData[i].setTimeout)
    //   }
    //   axios.get('/device',{
    //     params: {
    //       page: page,
    //       pageSize: 100
    //   }}).then((res) => {
    //     state.spanObj.productName = []
    //     state.spanObj.companyName = []
    //     state.spanObj.deviceName = []
    //     disposal(res.data.info)
    //     state.deviceData = res.data.info
    //     state.totalItemCount = res.data.count
    //     // 处理收到的数据
    //     for(let i = 0;i < state.deviceData.length;i++){
    //       // let onLineCount = 0
    //       state.deviceData[i].onLine = '-'
    //       state.deviceData[i].setTimeout = setTimeout(() => {
    //         state.deviceData[i].onLine = false
    //         state.deviceData[i].runStatus = '-'
    //         state.deviceData[i].runSecond = '-'
    //         state.deviceData[i].count = '-'
    //         state.deviceData[i].okRate = '-'
    //       }, 10000)
    //     }
    //   }).catch((err) => {
    //     console.log(err)
    //   })
    // }