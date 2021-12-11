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
    disease:'',
  },

  onLoad: function (options) {
    wx.setNavigationBarColor({
      backgroundColor: '#f5c92c',
      frontColor: '#ffffff',
    })
  },

  onChange(event) {
    this.setData({
      disease:event.detail
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

  post(){
    // 这里将所有信息post给数据库
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
  }
})