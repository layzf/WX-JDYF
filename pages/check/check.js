import { get_wxml } from '../../utils/gethtml.js';
import { api } from '../../utils/api.js'
let http = new api()

const app = getApp()
Page({
  data: {
    options:'',
    showModalStatus:false,
    animationData:'',
    date:'',
    model_height: 0,
    bottom:0,
    detailsList:[],
    join_obj:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const projectInfo = http.projectInfo(options.id);
    
    this.setData({
      options: options.id
    })
    console.log(options,"options")
    switch (parseInt(options.id)) {
      case 1:
        wx.setNavigationBarTitle({
          title: '金雕验房预约'
        })
        break;
      case 2: 
        wx.setNavigationBarTitle({
          title: '金雕监理'
        })
        break;
      case 3:
        wx.setNavigationBarTitle({
          title: '金雕空气检测'
        })
        break;
      default:
        wx.setNavigationBarTitle({
          title: '振业城小区验房团购'
        })
        break;
    }
    projectInfo.then(res=>{
      var join_obj ={
        "projectContent": res.data.projectContent,
        "projectName": res.data.projectName,
        "imgUrl": res.data.imgUrl,
        "projectType": res.data.projectType
      };
      this.setData({
        detailsList: res.data,
        join_obj: join_obj
      })
    })
  },
  index_model: function () {
    this.showModal()
  },
  showModal: function () {                              // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 400,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation;
    animation.translateY(500).step()
    if (!this.data.showModalStatus){
        this.setData({
          animationData: animation.export(),
          showModalStatus: true
        })
        setTimeout(function () {
          animation.translateY(0).step()
          this.setData({
            animationData: animation.export()
          })
        }.bind(this), 400)
      }else{      
          this.setData({
            animationData: animation.export(),
          })
          setTimeout(function () {
            animation.translateY(0).step()
            this.setData({
              animationData: animation.export(),
              showModalStatus: false
            })
          }.bind(this), 400)
      }
  },
   //选择日期
  bindDateChange(e) {  
    this.setData({
      date: e.detail.value
    })
  },
  //拨打电话
  tellNumber: function () {
    app.tellNumber()
  },

  focus: function (e) {
    get_wxml(`.commodity_attr_box`, (rects) => {
      this.setData({
        bottom: rects[0].height/2
      })
    });
  },
  /* 文本框失焦时更改状态*/
  blur: function (e) {
    this.setData({
      bottom: 0
    })
  },
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.setData({
      showModalStatus:false
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})