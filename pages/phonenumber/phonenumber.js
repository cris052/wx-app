var app = getApp()
Page({
  data: {
    messages: [
      {
        url: "../images/4.jpg",
        title: "商脉",
        message: '好的',
        num: 2,
        time: '11:15',
        remove: false,
        flag: '../images/7.jpg'
      },
      {
        url: "../images/3.jpg",
        title: "甲乙",
        message: '好的',
        num: 1,
        time: '11:08',
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
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
