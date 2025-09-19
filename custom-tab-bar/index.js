// custom-tab-bar/index.js
// const config = require("../config/tabar.js");
import config from "../config/tabbar.js";

Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    list: config.list,
    current: config.list[0].key,
  },
  /**
   * 组件的声明周期事件
   */
  lifetimes: {},

  /**
   * 组件的方法列表
   */
  methods: {
    tabBarOnClick: function (e) {
      const url = "/" + e.currentTarget.dataset.page;
      const key = e.currentTarget.dataset.key;
      wx.switchTab({
        url: url,
      });
    },
  },
});
