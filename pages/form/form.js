Page({
  formSubmit(e) {
    console.log('数据为：', e.detail.value)
  },
  formReset() {
    console.log('form发生了reset事件')
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '隐私'
    })
   }
})

