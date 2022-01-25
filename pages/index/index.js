// index.js
const app = getApp()

Page({
  data: {
    query: '', // 用户的输入
    hideClearIcon: true, // 隐藏关闭按钮 true 为隐藏
    result: [],
    curLang: {} // 选择语言
  },

  onInput: function (e) {
    this.setData({ query: e.detail.value })
    if (this.data.query.length > 0) {
      this.setData({ hideClearIcon: false })
    } else {
      this.setData({ hideClearIcon: true })
    }
  },

  onTapClose: function () {
    this.setData({ query: '', hideClearIcon: true })
  },

  onConfirm: function () {
    if (!this.data.query) return
  }
})
