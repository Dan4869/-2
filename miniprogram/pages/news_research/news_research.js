// pages/news_research/news_research.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    foods:[{
      name:'麻婆豆腐',
      id:'1',
      img:'https://bkimg.cdn.bcebos.com/pic/a71ea8d3fd1f4134970ab767315582cad1c8a786f0da?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
      breif:'麻婆豆腐，是四川省传统名菜之一',
      method:'干净锅， 放入花椒里面小火哄炒；'
    },
    {
      name:'剁椒鱼头',
      id:'2',
      img:'https://bkimg.cdn.bcebos.com/pic/79f0f736afc379310a55eac66c8ea04543a98326bb80?x-bce-process=image/resize,m_lfit,w_536,limit_1/format,f_jpg',
      breif:'剁椒鱼头是湖南省的传统名菜，属于湘菜系。',
      method:'将鱼头洗净，从鱼唇正中剖开，在鱼头下面鱼肉较厚的部分斜划几刀。'
    }
  ],
    key:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      key:options.value
    })
    console.log(this.data.key)
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
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

  },
  go_news(e){
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../news/news?id='+id,
    })
  }
})