//order.js

Page({
  data: {
    address:null,
    price: '60'
  },
  checkweight: function (e) {
    console.log(e.detail.value)
    this.setData({
      price: e.detail.value
    })
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var str = '';
    for(var i in e.detail.value){
      str += i + '=' + e.detail.value[i] + '&';
    }
    wx.navigateTo({
      url: '../pay/pay?' + str
    })
  }
})
