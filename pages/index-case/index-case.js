import { get_wxml, switchNav, caseList } from '../../utils/gethtml.js';
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navData: getApp().navData,
    currentTab:2,
    caseList: [],
    arrs:[],
    reshtext:"正在刷新...",
    count:0,
    resh:false,
    footerresh:false,
    startpoint:''
  },
  onLoad: function (options) {
    this.arr()
  },

  // mytouchstart: function (e) {
  //   var that = this;
  //   //开始触摸，获取触摸坐标
  //   console.log(e)
  //   that.setData({ startpoint: [e.touches[0].pageX, e.touches[0].pageY] });
  // },

  onPullDownRefresh: function () {
    this.setData({
      resh: true,
    })
    this.arr()
    wx.stopPullDownRefresh({
      success:()=>{
        setTimeout(()=>{
          this.setData({reshtext: "刷新成功...."},()=>{
            setTimeout(()=>{
              this.setData({
                resh: false,
              })
            },1000)
          })
        },1500)
      }
    })
  },
  onReachBottom: function () {
    this.setData({
      footerresh: true,
      reshtext: "正在加载..."
    })
    this.arr()
  },
  arr: function () {
    if (this.data.resh) {
      //刷新
      this.setData({
        reshtext: "正在刷新..."
      })
    } else {
      if (this.data.count < 4) {
        setTimeout(() => {
          this.setData({
            footerresh: false
          })
          for (let i = 0; i < caseList.length; i++) {
            this.data.arrs.push(caseList[i])
          }
          this.setData({
            caseList: this.data.arrs,
            count: ++this.data.count
          })
        }, 500)
      } else {
        this.setData({
          reshtext: "没有更多数据了..."
        })
      }
    }
  },
  onReady: function () {
    
  },

  onShow: function () {

  },
  switchNav(event) {
    switchNav(event)
  },

  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})