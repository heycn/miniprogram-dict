// history.js

Page({
  data: {
    history: []
  },

  onShow: function () {
    this.setData({ history: wx.getStorageSync('history') })
  },

  onTabItem: function () {
    wx.reLaunch({
      url: '/pages/index/index?query=${e.currentTarget.dataset.query}'
    })
  }
})
