Page({
  formSubmit(e) {
    console.log('数据为：', e.detail.value)
  },
  formReset() {
    console.log('form发生了reset事件')
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '设置'
    })
  },
  ys:function(){
    wx.navigateTo({
      url: '../form/form?id={{id}}',
    })
  },
  dc: function () {
    wx.navigateTo({
      url: '../servey/servey?id={{id}}',
    })
  },
  login: function () {
    wx.navigateTo({
      url: '../login/login',
    })
  }
})