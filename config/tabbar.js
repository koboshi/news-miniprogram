//使用了自定义tabbar，此为tabbar的真实配置，忽略app.json的tabbar配置项
const config = {
  list: [
    {
      key: "home",
      text: "主页",
      icon: "md-home",
      pagePath: "pages/news/list",
      disabled: false,
    },
    {
      key: "setting",
      text: "设置",
      icon: "md-settings",
      pagePath: "pages/setting/index",
      disabled: true,
    },
    {
      key: "about",
      text: "关于",
      icon: "md-person",
      pagePath: "pages/about/index",
      disabled: true,
    },
  ],
};

export default config;
