Page({
  data: {
    motto: '慕朝',
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
  phoneNumTap: function () {
    var that = this;
    // 提示呼叫号码还是将号码添加到手机通讯录
    wx.showActionSheet({
      itemList: ['呼叫', '添加为常用联系人'],
      success: function (res) {
        if (res.tapIndex === 0) {
          // 呼叫号码
          wx.makePhoneCall({
            phoneNumber: that.data.phoneNum,
          })
        } else if (res.tapIndex == 1) {
          // 添加到手机通讯录
          wx.addPhoneContact({
            firstName: 'test',//联系人姓名
            mobilePhoneNumber: that.data.phoneNum,//联系人手机号
          })
        }
      }
    })
  }
})