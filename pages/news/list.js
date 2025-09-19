// pages/news/list.js
import NewsModel from "../../models/news.js";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    newsList: [],
    pageNum: 1,
    pageSize: 10,
    listLoadingShow: false,
    skeletonShow: false,
  },

  resetPageNum(cb) {
    this.setData({
      pageNum: 1,
    });
    typeof cb === "function" ? cb() : "";
  },

  loadNewsList(cb, reset = false) {
    if (this.data.newsList.length === 0) {
      this.setData({ skeletonShow: true });
    }
    NewsModel.list(this.data.pageNum, this.data.pageSize, (res) => {
      const data = res.data;
      if (data.error_code === 0) {
        const result = data.result;
        this.setData({
          pageNum: result.page,
          pageSize: result.size,
          newsList: reset
            ? result.list
            : this.data.newsList.concat(result.list),
          skeletonShow: false,
        });
      }
      typeof cb === "function" ? cb() : "";
    });
  },

  onLoad() {
    wx.showLoading({
      title: "加载中",
    });
    this.loadNewsList(() => {
      wx.hideLoading();
    });
  },

  onShow() {
    //设置tabbar的激活状态
    if (typeof this.getTabBar === "function") {
      this.getTabBar().setData({ current: "home" });
    }
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    //重新加载列表数据
    wx.showLoading({
      title: "刷新中",
    });
    this.resetPageNum(); //重置为第一页,列表先不清空
    this.loadNewsList(() => {
      wx.stopPullDownRefresh();
      wx.hideLoading();
    }, true);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    //加载下一页列表数据
    this.setData({ pageNum: this.data.pageNum + 1, listLoadingShow: true });
    this.loadNewsList(() => {
      this.setData({ listLoadingShow: false });
    });
  },

  /**
   * 列表点击事件
   */
  itemOnTap: function (e) {
    const newsId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/news/info?newsId=${newsId}`,
    });
  },
});
