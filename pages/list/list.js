//list.js
//获取应用实例
var app = getApp()
Page({
  data: {
    newslist: [],
    lastid: 0,
    confirmHidden: true,
    toastHidden: true,
    loadHidden: true,
    isfrist: 1,
    msg: '没有更多文章了'
  },
  loadData: function (lastid) {
    //显示出加载中的提示
    this.setData({ loadHidden: false })
    var limit = 1
    var that = this

    wx.request({
      url: 'http://localhost/weicms/index.php?s=/w16/Wxzxy/Wxzxy/getlist',
      data: { lastid: lastid, limit: limit },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        if (!res.data) {
          that.setData({ toastHidden: false })
          return false
        }
        // wx.showToast({
        //   title: '加载中',
        //   icon: 'loading',
        //   duration: 2000
        // })

        // setTimeout(function () {
        //   wx.hideToast()
        // }, 200)
        var len = res.data.length
        if (len != 0) {
          that.setData({ lastid: res.data[len-1].id })
        } 
        else {
          that.setData({ toastHidden: false })
        }
        var dataArr = that.data.newslist
        var newdata = dataArr.concat(res.data);

        that.setData({ newslist: newdata })
      },
      complete: function () {
        //显示出加载中的提示
        that.setData({ loadHidden: true })

      }
    })
  },
  loadmore: function (event) {
    var id = event.currentTarget.dataset.lastid
    var isfrist = event.currentTarget.dataset.isfrist
    var that = this

    wx.getNetworkType({
      success: function (res) {
        var networkType = res.networkType // 返回网络类型2g，3g，4g，wifi

        if (networkType != 'wifi' && isfrist == '1') {
          that.setData({ confirmHidden: false })
        }
      }
    })

    this.setData({ isfrist: 0 })
    this.loadData(id);
  },
  onLoad: function () {
    var that = this
    this.loadData(0);
  },
  toastChange: function () {
    this.setData({ toastHidden: true })
  },
  modalChange: function () {
    this.setData({ confirmHidden: true })
  }
})