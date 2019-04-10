var app = getApp()
Page({
  data: {
    messages: [
      {
        url: "../images/31.jpg",
        title: "小鱼",
        message: '没问题',
        num: 2,
        time: '11:15',
        remove: false,
        flag: '../images/14.jpg'
      },
      {
        url: "../images/32.jpg",
        title: "小花",
        message: '好的,明天就给你寄过去',
        num: 0,
        time: '11:08',
        remove: false,
        flag: '../images/14.jpg'
      },
      {
        url: "../images/33.jpg",
        title: "小草",
        message: '是的',
        num: 5,
        time: '14:05',
        remove: false,
        flag: '../images/14.jpg'
      }
    ]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    wx.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
