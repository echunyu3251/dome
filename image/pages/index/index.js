//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    img: [],
    swiperList: [
      { "id": 1, "img": 'https://rb.sunlands.com/images/College/swiper1.jpg' },
      { "id": 2, "img": 'https://rb.sunlands.com/images/College/swiper1.jpg' },
      { "id": 3, "img": 'https://rb.sunlands.com/images/College/swiper1.jpg' },
      { "id": 4, "img": 'https://rb.sunlands.com/images/College/swiper1.jpg' }
    ],
    curIndex: 0,
    itemWidth: 160,
    translateDistance: 200
  },
  //触摸开始的事件
  swiperTouchstart: function (e) {
    let startClinetX = e.changedTouches[0].clientX;
    this.setData({
      startClinetX: startClinetX, //触摸开始位置；
      startTimestamp: e.timeStamp, //触摸开始时间；
    })
  },
  //触摸结束的事件
  swiperTouchend: function (e) {
    let that = this;
    //时间间隔
    let times = e.timeStamp - this.data.startTimestamp;
    //距离间隔；
    let distance = e.changedTouches[0].clientX - this.data.startClinetX;
    //判断
    if (times < 500 && Math.abs(distance) > 10) {
      let curIndex = that.data.curIndex;
      let x0 = this.data.itemWidth,
        x1 = this.data.translateDistance,
        x = 0;
      if (distance > 0) {
        curIndex = curIndex - 1
        if (curIndex < 0) {
          curIndex = 0;
          x0 = 0;
        }
        x = x1 + x0;
      }
    } else {
      curIndex = curIndex + 1
      if (curIndex >= this.data.swiperList.length) {
        curIndex = this.data.swiperList.length - 1;
      
        x0 = 0;
      }
      x = x1 - x0;
    

    }
  },
  getSelectItem: function (e) {
    var that = this;

    var itemWidth = e.detail.scrollWidth / that.data.proList.length;//每个商品的宽度
    var scrollLeft = e.detail.scrollLeft;//滚动宽度
    var curIndex = Math.round(scrollLeft / itemWidth);//通过Math.round方法对滚动大于一半的位置进行进位
    for (var i = 0, len = that.data.proList.length; i < len; ++i) {
      that.data.proList[i].selected = false;
    }
    that.data.proList[curIndex].selected = true;
    that.setData({
      proList: that.data.proList,
      giftNo: this.data.proList[curIndex].id
    });
  },
})
