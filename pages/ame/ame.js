//ame.js
//获取应用实例
const app = getApp()
Page({
  data: {
    img:"../images/3.jpg",
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
    videoPlay: null,
    dataList: [],
    poster: 'imgs/2.jpg',
    name: '真相是假',
    author: '阿鸣',
    src: 'audio/阿鸣 - 真相是假【阿鸣】（Cover：洪卓立）.mp3'
   
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
  pay: function () {
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
  onLoad: function () {
    this.getData();
    wx.hideShareMenu();
  },
  videoPlay: function (e) {
    var _index = e.currentTarget.dataset.id
    this.setData({
      _index: _index
    })
    //停止正在播放的视频
    var videoContextPrev = wx.createVideoContext(_index + "")
    videoContextPrev.stop();

    setTimeout(function () {
      //将点击视频进行播放
      var videoContext = wx.createVideoContext(_index + "")
      videoContext.play();
    }, 500)
  },
  // 模拟数据加载
  getData: function () {

    this.setData({
      dataList: [{ "id": 1, "title": "MV-香蜜沉沉烬如霜(毛不易)", "content": "videos/1.mp4", "cover": "imgs/2.jpg" }, { "id": 2, "title": "MV-四时令(慕寒)", "content": "videos/2.mp4", "cover": "imgs/1.jpg" }]
    });

  },
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  funplay: function () {
    console.log("audio play");
  },
  funpause: function () {
    console.log("audio pause");
  },
  funtimeupdate: function (u) {
    console.log(u.detail.currentTime);
    console.log(u.detail.duration);
  },
  funended: function () {
    console.log("audio end");
  },
  funerror: function (u) {
    console.log(u.detail.errMsg);
  }
  
})
