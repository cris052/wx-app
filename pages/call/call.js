Page({
  data: {
    markers: [{
      iconPath: '1.jpg',
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: '#FF0000DD',
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '2.jpg',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  error(e) {
    console.log(e.detail)
  },
  onLoad: function () {
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success() {
              console.log('授权成功')
            }
          })
        }
      }
    })
  },
  chooseimage: function () {
    var _this = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        _this.setData({
          tempFilePaths: res.tempFilePath
        })
      }
    })
  },

  photo:function(){

    wx.chooseImage({
      success: function (res) {
        var tempFilePath = res.tempFilePaths[0]
        wx.getImageInfo({
          src: tempFilePath,
          success: function (res) {
            wx.saveImageToPhotosAlbum({
              filePath: res.path,
              success(res) {
                console.log("保存图片成功")
                wx.showToast({
                  title: '保存成功',
                  icon: 'success',
                  duration: 2000
                })
              },
              fail(err) {
                console.log('失败')
                console.log(err)

                if (err.errMsg == "saveImageToPhotosAlbum:fail cancel") {
                  wx.openSetting({
                    success(settingdata) {
                      console.log(settingdata)
                      if (settingdata.authSetting["scope.writePhotosAlbum"]) {
                        console.log('获取权限成功，给出再次点击图片保存到相册的提示。')
                      } else {
                        console.log('获取权限失败，给出不给权限就无法正常使用的提示')
                      }
                    }
                  })
                }
              }
            })
          }
        })
      }
    })
  }
})