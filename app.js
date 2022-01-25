// app.js

App({
  onLaunch: function () {
    // 展示本地存储能力
    this.globalData.curLang =
      wx.getStorageSync('curLang') || this.globalData.langList[0]
  },
  globalData: {
    curLang: {},
    langList: [
      { chs: '英文', lang: 'en' },
      { chs: '中文', lang: 'zh' },
      { chs: '日语', lang: 'jp' },
      { chs: '韩语', lang: 'kor' },
      { chs: '法语', lang: 'fra' },
      { chs: '西班牙语', lang: 'spa' },
      { chs: '阿拉伯语', lang: 'ara' }
    ]
  }
})
