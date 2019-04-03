Page({
  data: {
    motto: '慕赵mio',
    balance: '￥1580,18'
  },
  changeMoney: function (e) {
    this.setData({
      Amount: -12345
    })
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '我的'
    })
  },
  set: function () {
    wx.navigateTo({
      url: '../set/set',
    })
  },
})