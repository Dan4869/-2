App({
    onLaunch:function(){
      wx.cloud.init({
        env:'calendar-2gwvhii6724490c3',
        traceUser: true
      })
    },
    globalData: {
        isIphoneX: false,
        userInfo: null,
        openid:''
      },
      onShow:function(){
        let  that = this;
        wx.getSystemInfo({
          success:  res=>{
            // console.log('手机信息res'+res.model)
            let modelmes = res.model;
            if (modelmes.search('iPhone X') != -1) {
              that.globalData.isIphoneX = true
            }
          }
        })    
      },
})

wx.cloud.init({
  env:'calendar-2gwvhii6724490c3',
  traceUser: true,
})