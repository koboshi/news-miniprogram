// components/skeleton/list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    rows: 7,
  },

  /**
   * 组件的方法列表
   */
  methods: {},

  lifetimes: {
    attached: function () {
      const arr = Array.from({ length: this.data.rows });
      this.setData({
        loopArray: arr,
      });
      //todo
    },
  },
});
