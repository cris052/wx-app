//detail.js
//获取应用实例
const app = getApp()
Page({
  data: {
    info : 
      { id: 1, 
        img: "../../photos/1.jpg",
        title: "逆流而上的你",  
        cTime: "2019-2-19 15:20", 
        acter: "主演： 马丽 潘粤明 张凯丽 孙坚 黄梦莹 李乃文 刘威葳 倪大红 刘颖伦 张棪琰 穆丽燕 徐美玲 孔琳 [全部主演]",
        update: "剧集： 更新至8集/共42集   更新：VIP会员每日24点更新，非会员次日24",
        type: "类型：喜剧 家庭 都市  导演：潘越  年份：2019  地区：内地",
        page: '刘艾，作为在城市里奋斗打拼的金牌销售，和做设计师的老公杨光有个简单朴素的愿望，好好赚钱生孩子换房子，可是到年终时，严苛的老板却出尔反尔，不履行自己的承诺。刘艾愤而辞职，眼见自己的计划落空，老公也遭遇事业不顺等一系列的现实打击，她沮丧不已差点放弃，这时在老公和朋友们的开解下，刘艾逆流而上，从一个小公司重新出发，不仅一步步通过自己的能力做到了实至名归的“销售王”，还给了原来老板一个漂亮的还击，成功实现了当初和老公杨光计划的所有愿望。'},
  },

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {
    var that = this


    wx.request({
      url: 'http://localhost/weicms/index.php?s=/w16/Wxzxy/Wxzxy/getDetail',
      data: {id:options.id},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        that.setData({
          info: res.data
        })
      }
    })
  },

  ccc: function () {
    wx.navigateBack({

    })
  }
})