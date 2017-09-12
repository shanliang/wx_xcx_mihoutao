//order.js

Page({
  data: {
    address: null,
    weight: '',
    num:''
  },
  onLoad: function(option){
    console.log(option)
    this.setData({
      weight: option.weight,
      num: option.num
    })
  },
  bindChooseAddress: function () {
    var self = this
    wx.chooseAddress({
      success: function (res) {
        self.setData({
          address: res,
        })

        console.log(res.userName)
        console.log(res.postalCode)
        console.log(res.provinceName)
        console.log(res.cityName)
        console.log(res.countyName)
        console.log(res.detailInfo)
        console.log(res.nationalCode)
        console.log(res.telNumber)
      }
    })
  },
  ajax: function () {
    wx.request({
      url: 'https://iduoguo.com', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/xml' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    this.ajax();
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  }
})
