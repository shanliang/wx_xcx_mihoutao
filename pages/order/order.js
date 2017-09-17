//order.js

Page({
  data: {
    address:null,
    price: '60',
    priceTip: '团购价￥55(2箱起团)'
  },
  checkweight: function (e) {
    if( e.detail.value === '60'){
      this.setData({
        price: e.detail.value,
        priceTip: '团购价￥55(2箱团)'
      });
    }else{
      this.setData({
        price: e.detail.value,
        priceTip: ''
      });
    }
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
