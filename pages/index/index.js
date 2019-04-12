//index.js
//获取应用实例
const app = getApp()
import { get_wxml, switchNav } from '../../utils/gethtml.js';
import { api } from '../../utils/api.js'
let http = new api()
Page({
  data: {
    navData: getApp().navData,
    currentTab: 0,
    bannerImg:[], //banner轮播图
    sections:[],  //内容模块
    bannerImgHeight:'',  //swiper 等于 图片高度
    // _id_1:'',
    // _id_2:'',
    // _id_3:''
  },
  onReady: function () {

  },
  onLoad: function (options) {
    const bannerImg = http.bannerInfo();
    const indexList = http.indexList();


    console.log(app.globalData.loginStatus, "this.globalData.loginStatus")
    
// 首页轮播图    
    // bannerImg.then(res => {
    //   this.setData({bannerImg:res.data})
    //   get_wxml(".index_banner", res => {
    //     this.setData({ bannerImgHeight :res[0].height})
    //   })
    // })
// 首页内容部分
    // indexList.then(res => {
    //   this.setData({
    //     sections: res.data,
    //     // _id_1: res.data[1].projectId,
    //     // _id_2: res.data[2].projectId,
    //     // _id_3: res.data[3].projectId
    //   })
    // })
  },
// 点击导航
  switchNav(event) {
    switchNav(event)
  },
  onShow: function () {
    
  },

  onHide: function () {
    
  },

  onUnload: function () {
    
  },

  onPullDownRefresh: function () {
    
  },

  onReachBottom: function () {
    
  },
  onShareAppMessage: function () {
    
  }
})
