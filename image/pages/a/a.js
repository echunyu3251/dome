Page({
  data: {
    x: 0,
    y: 0,
    touchArray: [
      { "id": 0, "name": "a", "age": 12,"c0":"red" },
      { "id": 1, "name": "b", "age": 12 ,"c0":"green"},
      { "id": 2, "name": "c", "age": 12 ,"c0": "yellow"},
      { "id": 3, "name": "d", "age": 12 ,"c0": "pink"},
      { "id": 4, "name": "e", "age": 12 ,"c0": "#ccc"},
      { "id": 5, "name": "f", "age": 12 ,"c0": "orange"}

    ],
    display: "block",
    mainx: 0,
    leftX:0,
    Pleft:0,
    wid:600,
    hei:844,
    windowWid:0
  },
  touch: function (event) {
    var Cindex = event.target.dataset.index
    var Lx = event.touches[0].pageX
    console.log(Lx,0)
    // var Lx = event.detail.x
    // console.log(event.detail.x)
    this.setData({
      mainx: Cindex,
      leftX:Lx
    })
    console.log(event,1)
    console.log(event.target.dataset.index,2)
    console.log(event.target.id,3)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        // console.log(res.model)
        console.log(res.windowWidth)
        var ww = res.windowWidth;
        // console.log(res.windowHeight)
        that.setData({
        windowWid:ww
      })
      }
    })
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