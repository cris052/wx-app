//ame.js
//获取应用实例
const app = getApp()
Page({
  data: {
    img:"../images/2.jpg",
    title:"微信网页版 - 搜狗百科",
    intro:"2014年2月20日，腾讯宣布推出QQ浏览器微信版，由QQ浏览器与微信两个产品线团队合作，联合开发了QQ浏览器微信版，即微信浏览器。在即将发布的浏览器中，..",
    context:"内容介绍",
    method:"登录方法",
    functions:"主要功能",
    exit:"退出方法",
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    playIndex: null,//用于记录当前播放的视频的索引值
    courseList: [{
      videoUrl: 'videos/1.mp4',//视频路径
      coverUrl: 'imgs/2.jpg', //视频封面图
      duration: '03:00', //视频时长
    }, {
      videoUrl: 'videos/2.mp4',
      coverUrl: 'imgs/1.jpg',
      duration: '04:45'
    }]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '简介'
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  dl:function(){
    wx.login({
      success(res) {
        if (res.code) {
          // 发起网络请求
          wx.request({
            url: 'https://blog.csdn.net/qq_39925376',
            data: {
              code: res.code
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  pay:function(){
    wx.requestPayment({
      timeStamp: '',
      nonceStr: '',
      package: '',
      signType: 'MD5',
      paySign: '',
      success(res) { },
      fail(res) { }
    })
  },
  videoPlay: function (e) {
    var curIdx = e.currentTarget.dataset.index;
    // 没有播放时播放视频
    if (!this.data.playIndex) {
      this.setData({
        playIndex: curIdx
      })
      var videoContext = wx.createVideoContext('video' + curIdx) 
      //这里对应的视频id
      videoContext.play()
    } else { 
      // 有播放时先将prev暂停，再播放当前点击的current
      var videoContextPrev = wx.createVideoContext('video' + this.data.playIndex)
      if (this.data.playIndex != curIdx) {
        videoContextPrev.pause()
      }
      this.setData({
        playIndex: curIdx
      })
      var videoContextCurrent = wx.createVideoContext('video' + curIdx)
      videoContextCurrent.play()
    }
  }
})
