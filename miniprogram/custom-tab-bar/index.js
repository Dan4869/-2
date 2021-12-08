const app = getApp();
Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "pages/index/index",
      iconPath: "/images/icon_home.png",
      selectedIconPath: "/images/icon_home_HL.png",
      text: "首页",
      isSpecial: false
    }, {
      pagePath: "pages/photo/photo",
      iconPath: "/images/icon_release.png",
      selectedIconPath: "/images/icon_release.png",
      text: "",
      isSpecial: true
    }, {
      pagePath: "pages/mine/mine",
      iconPath: "/images/icon_mine.png",
      selectedIconPath: "/images/icon_mine_HL.png",
      text: "我的",
      isSpecial: false
    }],
    //适配IphoneX的屏幕底部横线
    isIphoneX: app.globalData.isIphoneX
  },
  attached() {},
  methods: {
    switchTab(e) {
      const dataset = e.currentTarget.dataset
      const path = dataset.path
      const index = dataset.index
      console.log(dataset)
      //如果是特殊跳转界面
      if (this.data.list[index].isSpecial) {
        wx.navigateTo({
          url: "/"+path
        })

      } else {
        //正常的tabbar切换界面
        wx.switchTab({
          url: "/"+path
        })
        this.setData({
          selected: index
        })
      }
    }
  }
})