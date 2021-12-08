Page({
  data: {
    btn_hover1:true,
    btn_hover2:true,
    btn_hover3:true,
    btn_hover4:true,
    btn_hover5:true,
    minDate: new Date(1921,1,1).getTime(),
    maxDate: new Date(2099, 12, 31).getTime(),
    currentDate: new Date().getTime(),
    columns: ['男', '女'],
    show1: false,
    show2: false,
  },

  onLoad: function (options) {
    wx.setNavigationBarColor({
      backgroundColor: '#f5c92c',
      frontColor: '#ffffff',
    })
  },

  dislike:function(){
    wx.navigateTo({
      url: '../dislike/dislike',
    })
  },

  return:function(){
    wx.switchTab({
      url: '../mine/mine',
    })
  },

  showPopup1() {
    this.setData({ show1: true });
  },
  showPopup2() {
    this.setData({ show2: true });
  },

  onClose1() {
    this.setData({ show1: false });
  },
  onClose2() {
    this.setData({ show2: false });
  },

  onReady: function () {

  },

  onShow: function () {

  },

  onHide: function () {

  },

  onUnload: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  },

  onInput(event) {
    this.setData({
      currentDate: event.detail,
    });
  },

  d1:function(){
    this.setData({
      btn_hover1:false
    })
  },
  d1_h:function(){
    this.setData({
      btn_hover1:true
    })
  },
  d2:function(){
    this.setData({
      btn_hover2:false
    })
  },
  d2_h:function(){
    this.setData({
      btn_hover2:true
    })
  },
  d3:function(){
    this.setData({
      btn_hover3:false
    })
  },
  d3_h:function(){
    this.setData({
      btn_hover3:true
    })
  },
  d4:function(){
    this.setData({
      btn_hover4:false
    })
  },
  d4_h:function(){
    this.setData({
      btn_hover4:true
    })
  },
  d5:function(){
    this.setData({
      btn_hover5:false
    })
  },
  d5_h:function(){
    this.setData({
      btn_hover5:true
    })
  },
})