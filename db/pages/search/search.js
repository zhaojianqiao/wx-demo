// pages/search/search.js
var subjectsUtil = require("../../utils/util.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal: "",
    movies: [],
    loadingHidden: true,
    modalHidden: true,
    tip: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  bindKeyInput(event) {
    this.setData({ inputVal: event.detail.value });
  },
  search() {
    var page = this;
    var queryStr = page.data.inputVal;
    if (queryStr == "") {
      this.setData({ "tip": "输入内容不能为空" });
      this.setData({ "modalHidden": false });
    } else {
      page.setData({ loadingHidden: false });
      wx.request({
        url: "https://api.douban.com/v2/movie/search?q=" + queryStr,
        header: {
          "Content-Type": "json"
        },
        data: { count: 50 },
        success: function (res) {
          var subjects = res.data.subjects;
          page.setData({ inputVal: res.data.title + "，共”" + res.data.total + "”调记录" });
          subjectsUtil.processSubjects(subjects);
          page.setData({ "movies": subjects, "loadingHidden": true });
        }
      });
    }

  },
  modalChange() {
    this.setData({ "modalHidden": true });
  }
})