// pages/index/index.js
var amapFile = require('../../libs/amap-wx.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // region:["北京市","北京市","东城区"]
  //   skycon: {
  //     CLEAR_DAY: '晴',
  //     CLEAR_NIGHT: '晴',
  //     PARTLY_CLOUDY_DAY: '多云',
  //     PARTLY_CLOUDY_NIGHT: '多云'}
  // },
  // changeRegion:function(e){
  //   this.setData({
  //     region:e.detail.value
  //   })
  //   this.getWeather();
  // },
  // getWeather(latitude, longitude) {
  //   var that = this; // this不可以直接在wxAPI函数内部使用
  //   var key = ""
  //   wx.request({
  //     url: 'https://api.caiyunapp.com/v2/' + key + '/' + longitude +',' + latitude + '/realtime.json',
  //     success: function (res) {
  //       console.log(res.data)
  //       that.setData({now:res.data.result})
  //       var skycon = that.data.skycon
  //       console.log(skycon[res.data.result.skycon])
  //     }
  //   })
  // },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({ key: '' });
    myAmapFun.getWeather({
      success: function (data) {
        //成功回调
        console.log(data)
        that.setData({now:data})
      },
      fail: function (info) {
        //失败回调
        console.log(info)
      }
    })
  },

  // onLoad: function (options) {
  //   console.log("开始onload")
  //   const vm = this
  //   wx.getSetting({
  //     success(res) {
  //       console.log("成功访问授权")
  //       // 1. scope.userLocation 为真， 代表用户已经授权
  //       if (res.authSetting['scope.userLocation']) {
  //         console.log("已授权")
  //         // 1.1 使用 getlocation 获取用户 经纬度位置
  //         wx.getLocation({
  //           success(res) {
  //             // 1.2 获取用户位置成功后，将会返回 latitude, longitude 两个字段，代表用户的经纬度位置
  //             console.log(res)
  //             // 1.3 将获取到的 经纬度传值给 getAddress 解析出 具体的地址
  //             vm.getWeather(res.latitude, res.longitude)
  //           }
  //         })
  //       } else {
  //         // 2. 用户未授权的情况下， 打开授权界面， 引导用户授权.
  //         console.log("未授权")
  //         wx.authorize({
  //           scope: 'scope.userLocation',
  //           success(res) {
  //             console.log("授权成功")
  //             // 2.1 如果二次授权允许了 userLocation 权限， 就再次执行获取位置的接口
  //             if (res.authSetting["scope.userLocation"]) {
  //               wx.getLocation({
  //                 type: 'wgs84',
  //                 success(res) {
  //                   // 2.2 获取用户位置成功后，将会返回 latitude, longitude 两个字段，代表用户的经纬度位置
  //                   console.log(res)
  //                   // 2.3 将获取到的 经纬度传值给 getAddress 解析出 具体的地址
  //                   vm.getWeather(res.latitude, res.longitude)
  //                 }
  //               })
  //             }
  //           },
  //           fail(res){
  //             console.log("cnm")
  //           }
  //         })
  //       }
  //     }
  //   })
  // },
  
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})