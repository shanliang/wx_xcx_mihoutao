//order.js
//获取应用实例
const app = getApp()
Page({
  data: {
    address: null,
    weight: '',
    num: '',
    amount: ''
  },
  onLoad: function (option) {
    console.log(option)
    var map = {
      '60': '5',
      '110': '10'
    }
    var num = option.num
    var price = option.weight
    if ((num > 1) && (price === '60')) {
      price = 55;
    }
    var amount = num * price;
    this.setData({
      weight: map[option.weight],
      num: option.num,
      amount: amount
    })
  },
  bindChooseAddress: function () {
    this.getAddress()
  },
  getAddress: function () {
    var self = this;
    wx.chooseAddress({
      success: function (res) {
        self.setData({
          address: res,
        })
      }
    })
  },
  ajax: function () {
    var orderData = this.data
    var userInfo = getApp().globalData.userInfo
    wx.request({
      url: 'https://iduoguo.com/Mall/index/test', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      data: {
        userInfo: userInfo,
        orderData: orderData
      },
      success: function (res) {
        wx.showToast({
          title: '提交成功',
          icon: 'success',
          duration: 1000
        })
        setTimeout(function(){
          wx.navigateTo({
            url: '../success/success'
          })
        }, 1010)
      }
    })
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    if (this.data.address) {
      this.ajax();
    } else {
      wx.showModal({
        title:'提示',
        content: '请选择收货地址',
        showCancel: false
      })
    }

  }
})
