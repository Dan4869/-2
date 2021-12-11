var util = require('../utils/utils')
const app = getApp();
Page({
  data: {
    imgUrls:[
      '/images/早餐.png',
      '/images/午餐.png',
      '/images/晚餐.png'
    ],
    active: 0,
    current:0,
    value:""
    },

    move_swiper(e){
      this.setData({
        current:e.detail.current
      })
    },
    go_dish:function(opition){
      var a = this.data.current
      if(a==0){
        wx.navigateTo({
          url: '../breafast/breafast',
        })
      }
      else if(a==1){
        wx.navigateTo({
          url: '../lunch/lunch',
        })
      }
      else if(a==2){
        wx.navigateTo({
          url: '../dinner/dinner',
        })
      }
    },

    onSearch1(e){
      this.setData({
        value:e.detail
      })
      var value=e.detail
      wx.navigateTo({
        url: '../foods_research/foods_research?value='+value,
      })
    },

    onSearch2(e){
      this.setData({
        value:e.detail
      })
      var value=e.detail
      wx.navigateTo({
        url: '../news_research/news_research?value'+value,
      })
    },

    onCancel:function(options){
    },

    onLoad: function(options) {
      var TIME = util.formatTime(new Date());
      var Time_cur = 0
      if(TIME >=7 && TIME<10){
        Time_cur = 0
      }
      else if(TIME >=11 && TIME<14){
        Time_cur = 1
      }
      else if(TIME >=17 && TIME<20){
        Time_cur = 2
      }
      // else 有一些不该吃东西的时段
      this.setData({
        current:Time_cur
      })
    },
    onShow: function() {
      if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
    },
    
})
