var app=getApp()
Page({

  data: {
    head_img:"http://m.qpic.cn/psc?/V511wiye4dvmgZ3zlgOE3jgrSY3358sX/ruAMsa53pVQWN7FLK88i5voK1bKdm0RWEE5OM*VftcogZuJgn6PTEzagkO7*W.nnmxGJoILLqgg7F22CkAejwRBsh1ixzpK7FH2L2Pt8Cls!/mnull&bo=LAEsAQAAAAADByI!&rf=photolist&t=5",
    openid:'',
    login_id: false,
    user:''
  },
  onLoad: function (options) {
    if(!app.globalData.openid){
      wx.showToast({
        title: '点击登录使用',
        duration: 3000,
        icon:'error'
      })
    }
  },
  onReady: function () {

  },
  onShow: function () {
    wx.setNavigationBarColor({
      backgroundColor: '#F9C53E',
      frontColor: '#ffffff',
    })
  },
  like:function(){
    if(!app.globalData.openid){
      wx.showToast({
        title: '点击登录使用',
        duration: 3000,
        icon:'error'
      })
    }
    else{
      wx.navigateTo({
        url: '../like/like',
      })
    }
  },
  message:function(){
    if(!app.globalData.openid){
      wx.showToast({
        title: '点击登录使用',
        duration: 3000,
        icon:'error'
      })
    }
    else{
      wx.navigateTo({
        url: '../login/login',
      })
    }
  },
  login:function(){
    if(!app.globalData.openid){
      wx.showToast({
        title: '点击登录使用',
        duration: 3000,
        icon:'error'
      })
    }
    else{
      wx.navigateTo({
        url: '../login/login',
      })
    }
  },
  help:function(){
    if(!app.globalData.openid){
      wx.showToast({
        title: '点击登录使用',
        duration: 3000,
        icon:'error'
      })
    }
    else{
      wx.navigateTo({
        url: '../help/help',
      })
    }
  },
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
        app.globalData.openid = this.data.openid
        console.log(app.globalData.openid)
      }
    })
  }
})