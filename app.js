//app.js
const wxUtil = require('./utils/login.js')
import { api } from './utils/api.js'
let http = new api()

App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs);

    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       this.js(res=>{
    //         this.globalData.userInfo = res
    //         if (this.userInfoReadyCallback) {
    //           this.userInfoReadyCallback(res)
    //         }
    //       })
    //     }
    //   }
    // })

    wxUtil.login(res=>{
      this.globalData.tokenId = res.data.result.tokenId;
      this.globalData.token = res.data.result.token;
      this.globalData.sessionId = res.data.result.sessionId;
      this.globalData.loginStatus = res.data.result.loginStatus
    })


  },
  js: function(callback) {
    wxUtil.usetInfo((code, val) => {
      if (code) {
        wxUtil.PromiseAuth('scope.userInfo').then(res => {
          if (res.authSetting['scope.userInfo']) {
            wxUtil.usetInfo((code, val) => {
              console.log(res.authSetting, "res")
              callback(val.userInfo)
            })
          } else {
            wx.showModal({
              showCancel: false,
              title: '提示',
              content: '授权失败!',
              confirmColor: '#20b976'
            });
          }
        }).catch(res => {
          console.log(res, "cath")
        })
      } else {
        callback(val.userInfo)
      }
    })
  },


  globalData: {
    userInfo: null,
    phoneNumber: '18507497561',
    tokenId:'',
    token: '',
    sessionId:'',
    loginStatus:false
  },
  tellNumber: function() {
    wx.makePhoneCall({
      phoneNumber: this.globalData.phoneNumber
    })
  },
  navData: [{
    text: '首页'
  }, {
    text: '多金卡'
  }, {
    text: '案例'
  }, {
    text: '我的'
  }]
})