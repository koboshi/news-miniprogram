import apiConfig from "../config/api.js";

const NewsModel = {
  list: function (pageNum, pageSize, successCb, failCb, compCb) {
    // console.log(`page: ${pageNum}`);
    pageNum = pageNum > 0 ? pageNum : 1;
    pageSize = pageSize > 0 ? pageSize : 20;
    const url = apiConfig.BASE_URL + `/news/list/page/${pageNum}`;
    // console.log("fetch:" + url);
    wx.request({
      url: url,
      method: "GET",
      data: { size: pageSize },
      dataType: "json",
      success: successCb,
      error: failCb,
      complete: compCb,
    });
  },
  info: function (newsId, successCb, failCb, compCb) {
    const url = apiConfig.BASE_URL + `/news/info/id/${newsId}`;
    wx.request({
      url: url,
      method: "GET",
      data: {},
      dataType: "json",
      success: successCb,
      error: failCb,
      complete: compCb,
    });
  },
};

export default NewsModel;
