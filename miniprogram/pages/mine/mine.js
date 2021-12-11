var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    head_img:"/images/儿童城堡2.png",
    openid:'',
    login_id: false,
    user:''
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
    wx.setNavigationBarColor({
      backgroundColor: '#F9C53E',
      frontColor: '#ffffff',
    })

  },

  like:function(){
    wx.navigateTo({
      url: '../like/like',
    })
  },

  message:function(){
    wx.navigateTo({
      url: '../login/login',
    })
  },

  login:function(){
    wx.navigateTo({
      url: '../login/login',
    })
  },

  help:function(){
    wx.navigateTo({
      url: '../help/help',
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  bindGetUserInfo:function(res){
    console.log(res)
    var userinfos=res.detail.userInfo;
    if(userinfos!=undefined){
      this.setData({
        head_img: userinfos.avatarUrl,
        user:userinfos.nickName,
        login_id: true
      })
    }
    else{
      this.setData({
        head_img:'/images/儿童城堡2.png'
      })
    }
    wx.cloud.callFunction({
      name:'getOpenId',
      complete: res =>{
        this.setData({
          openid:res.result.openid
        })
        app.globalData.openid = res.result.openid
      }
    })
  },

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

  }
})