// pages/news/info.js
import NewsModel from "../../models/news.js";
import utils from "../../utils/util.js";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    newsInfo: {
      id: "",
      title: "",
      content: "",
      contentList: [],
      createAt: "",
      updateAt: "",
      publishDate: "",
    },
    newsId: "",
    skeletonShow: false,
  },

  loadNewsInfo(cb) {
    wx.showLoading({
      title: "加载中",
    });
    this.setData({ skeletonShow: true });
    NewsModel.info(this.data.newsId, (res) => {
      const data = res.data;
      if (data.error_code === 0 && Object.keys(data.result).length > 0) {
        const result = data.result;
        result.info.contentList = result.info.content.split("\n");
        result.info.publishDate = utils.formatDate(result.info.updateAt);
        this.setData({
          newsInfo: result.info,
          skeletonShow: false,
        });
      }
      wx.hideLoading();
      typeof cb === "function" ? cb() : "";
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({ newsId: options.newsId });
    this.loadNewsInfo();
  },
});
