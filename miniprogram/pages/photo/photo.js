// pages/photo/photo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isAuth:0,
    src:'',
    imgB64:'',
    token:'',
    res:''
  },
  getB64ByUrl: function() {
    var that = this
    var url = that.data.src
    const FileSysetemManager = wx.getFileSystemManager();
    FileSysetemManager.readFile({
      filePath: url,
      encoding: 'base64',
      success(res){
        that.setData({
          imgB64: res.data
        });
      }
    })
  },

  getToken:function(callback){
    var that = this
    wx.request({
      url: 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=7CvCaQjMH9woh9GGH4CmIZA5&client_secret=x8zHjyQTFvyLTXlsbfc3Aa4bzHObZKFx',
      method: 'POST',
      complete:function(res){
        console.log('请求完成')
      },
      success:function(res){
        console.log(res)
        that.setData({
          token:res.data.access_token
        })
      },
      fail:function(res){
        console.log('请求失败')
        console.log(res)
      }
    })
  },
 select_img: function(res){
    var that = this
    wx.chooseImage({
      count:9,
      encoding:'base64',
      sizeType:['original','compressed'],
      sourceType:['album','camera'],
      success(res){
        const tempFilePaths = res.tempFilePaths
        // that.getB64ByUrl(tempFilePaths[0])
        that.setData({
          src:tempFilePaths[0],
          imgB64:wx.getFileSystemManager().readFileSync(tempFilePaths[0],"base64")
        })
        wx.showToast({
          title: '已经选中照片',
        })
      }
    })
  }, 
  takePhoto(){
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success:(res) => {
        this.getB64ByUrl(res.tempImagePath)
        this.setData({
          src: res.tempImagePath
        })
        wx.showToast({
          title: '已经选中拍摄好的照片',
        })
      }
    })
  },

  error(e){
    console.log(e.detail)
  },

  recognize_img:function(res){
    var token = this.data.token
    var imgB64= this.data.imgB64
    console.log(token)
    wx.request({
      url: 'https://aip.baidubce.com/rest/2.0/image-classify/v2/dish?access_token='+token,
      method:'POST',
      header:{
        'content-type':'application/x-www-form-urlencoded'
      },
      data:{
        image: imgB64
      },
      success:res=>{
        this.setData({
          result:res
        })
        wx.showModal({
          title:'识别结果',
          content:res.data.result[0].name +"，其热量为"+ res.data.result[0].calorie,
          confirmText:'正确',
          cancelText:'错误'
        })
      }
    })
  },
    // callback:function(callback){
    //   this.getB64ByUrl()
    // },
    // execute:function(){
    //   this.callback(()=>{
    //     this.recognize_img()
    //   })
    // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(){
    this.getToken()
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

  go_index:function(){
    wx.switchTab({
      url: '../index/index',
    })
  }
})