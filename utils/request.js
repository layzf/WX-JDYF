// const ajax = (ajaxData, method) => {
//   wx.showLoading({
//     title: '加载中',
//     mask: true
//   });
//   return new Promise((resolve, reject) => wx.request({
//     url: ajaxData.url,
//     method: method || 'GET',
//     data: ajaxData.data,
//     success(e) {
//       if (e.data.code == 0) {
//         resolve(e)
//         wx.hideLoading();
//       } else {
//         wx.showToast({
//           title: e.data.message,
//           icon: 'none'
//         })
//         reject(e)
//       }
//     },
//     fail(e) {
//       wx.showLoading({
//         title: '网络错误'
//       })
//     }
//   }))
// }
// export { ajax }



class request {

  request({ url, data = {}, method = 'GET' }) {
    return new Promise((resolve, reject) => {
      this._request(url, resolve, reject, data, method)
    })
  }
    constructor(){
      this.requestUrl = 'http://172.16.203.7:8080/'
    }
   
  _request(url, resolve, reject, data, method) {
      // wx.showLoading({
      //   title: '加载中',
      //   mask: true
      // });
    var urls = this.requestUrl;
    wx.request({
      url:'http://172.16.203.7:8080/' + url,
      method: method,
      data: data,
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        if (res.statusCode==200){
            resolve(res)
            wx.hideLoading();
        }
        // let code = res.data.resp_code.toString()
        // if (code == '000000') {
        //   resolve(res.data)
        // } else if (code == '000005') {
        //   reject()
        //   this._showToast('token失效，请重新登录')
        // } else {
        //   reject()
        //   let msg = res.data.resp_message
        //   this._showToast(msg)
        // }
      },
      fail: (err) => {
        // wx.hideLoading();
        reject()
        this._showToast('请求出错，请稍后重试')
      }
    })
  }
  _showToast(title) {
    wx.showToast({
      title: title,
      icon: 'none',
      duration: 2000
    })
  }
}

export { request }
