import * as echarts from '../../ec-canvas/echarts';
const app = getApp();
const db = wx.cloud.database();
function initChart(canvas, width, height){
  const chart = echarts.init(canvas,null,{
    width:width,
    height:height,
  });
  canvas.setChart(chart);
  var option = {
    dataset: {
      source: [
        ['amount', 'product'],
        [12, '1星'],
        [54, '2星'],
        [32, '3星'],
        [55, '4星'],
        [45, '5星']
      ]
    },
    grid: { left:200 },
    xAxis: { show: false, max:65 },
    yAxis: { type: 'category' ,
             axisLine:false,
             axisTick:false,
             axisLabel:{
               show:true,
               fontSize:14,
               color:'#9b9b9b'
             },
    },
    series: [
      {
        type: 'bar',
        encode: {
          // Map the "amount" column to X axis.
          x: 'amount',
          // Map the "product" column to Y axis
          y: 'product'
        },
        itemStyle: {
              normal: {
                color:'#ffd596'
              }
            },
        barCategoryGap:5,
        label:{
          show:true,
          position:'right',
          textStyle:{
            color:'#9b9b9b',
            fontSize:14
          },
          formatter: function(value){
            var val= value.data[0];
            if(val){
              val=val+'%'
            }
            return val
          }
        }
      }
    ]
  };
  chart.setOption(option);
  return chart;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    food_id:'8',
    name:'麻婆豆腐',
    img:'https://bkimg.cdn.bcebos.com/pic/a71ea8d3fd1f4134970ab767315582cad1c8a786f0da?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto',
    breif:'麻婆豆腐，是四川省传统名菜之一',
    method:'干净锅， 放入花椒里面小火哄炒；',
    click:true,
    value:0,
    score:9.1,
    ratio:4.5,
    ec:{
      onInit: initChart
    },
  },

  onChange(event) {
    this.setData({
      value: event.detail,
    });
  },
  click(){
    console.log("点击了")
    this.setData({
      click:false
    })
    db.collection('food_like').add({
      data:{
        userid:app.globalData.openid,
        id:this.data.food_id
      }
    })
  },

  clicked(){
    console.log("未点击")
    this.setData({
      click:true
    })
    db.collection('food_like').where({
      userid:app.globalData.openid,
      id:this.data.food_id
    }).remove({
      success:function(){
        
      }
    })
  },


  onLoad: function (options) {
    if(options.id){
      this.setData({
        food_id:options.id
      })
    }
    // if(xxx=true){
    //   this.setData({
    //     value: ?
    //   })
    // }用户以及菜品id寻求数据库中的评分显示
    // if(xxx=true){
    //   this.setData({
    //     click:?
    //   })
    // }查询云数据库寻找用户是否收藏
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})