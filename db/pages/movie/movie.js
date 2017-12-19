// pages/movie/movie.js
var subjectsUtil = require("../../utils/util.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ndicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    movies: [],
    loadingHidden: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMovie();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

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
  
  },
  loadMovie(){
    var page = this;
    wx.request({
      url: "https://api.douban.com/v2/movie/in_theaters",
      header: {
        'Content-Type': 'json'
      }, data: { count: 50 },
      success: function (res) {
        var subjects = res.data.subjects;
        subjectsUtil.processSubjects(subjects);
        page.setData({ "movies": subjects, "loadingHidden": true });
      }
    })
  }
})