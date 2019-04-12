import { api } from './api.js'
let http = new api()

function PromiseAuth(scope) {
  return new Promise(function (resolve, reject) {
    if (wx.getSetting) {
      wx.getSetting({
        success: function (res) {
          console.log(res,"resautohesetion")
          if (!res.authSetting[scope]) {
            confirm({
              content: `请授权，才能正常使用功能！`,
              title: '温馨提示'
            }).then(ress=>{
              resolve(ress);
                console.log(ress,"confirm")
            }).catch(ress=>{
                console.log(ress,"cancel")
            })
          }
        },
        fail: function () {
          resolve(false);
        }
      })
    } else {
      wx.showModal({
        showCancel: false,
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。',
        confirmColor: '#20b976'
      });
      reject(false);
    }
  })
}

function confirm({ content = '', title = ''}) {
  return new Promise((resolve, reject) => {
    wx.showModal({
      title,
      content,
      confirmText:  '确定',
      confirmColor: '#21c0ae',
      success: function (res) {
        if (res.confirm) {
          wx.openSetting({
            success(rep) {
              if (rep.authSetting){
                console.log(rep,"rep.authSettin")
                resolve(rep)
              }
            }
          })
        } else if (res.cancel) {
          reject(res)
        }
      }
    })
  })
}

function usetInfo(callback){
  wx.getUserInfo({
    success: function (res) {
      callback(null, res || {});
    },
    fail: function (res) {
      callback('fail', {});
    }
  })
}

function login(callback){
    wx.login({
      success: function (res) {
        console.log(res, "code")
        if (res.code) {                     //发起网络请求    
          http.getsession(res.code).then(res => {
            callback(res)
          })
        }
        else {
          console.log('获取用户登录态失败！' + res.errMsg)
          callback('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
}


module.exports = {
  PromiseAuth, usetInfo, login
}