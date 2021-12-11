// pages/dislike/dislike.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dislikeA:[{id:'1',name:'豆腐',status:1},
    {id:'2',name:'鱼头',status:1},
    {id:'3',name:'丸子',status:0}],//模拟数据库中检索的内容和状态
  },

  status0(e){
    var id = e.currentTarget.dataset.id;
    console.log(id)
    for(var i in this.data.dislikeA){
      if(id==this.data.dislikeA[i].id)
      var a = "dislikeA["+i+"].status"
      this.setData({
        [a]:0
      })
    }
  },

  status1(e){
    var id = e.currentTarget.dataset.id;
    console.log(id)
    for(var i in this.data.dislikeA){
      if(id==this.data.dislikeA[i].id)
      var a = "dislikeA["+i+"].status"
      this.setData({
        [a]:1
      })
    }
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

  }
})