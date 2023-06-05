export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/calculator/index',
    'pages/report/index',
    'pages/settings/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    list: [{
      pagePath: "pages/index/index",
      text: "首页"
    }, {
      pagePath: "pages/calculator/index",
      text: "计算器"
    }, {
      pagePath: "pages/report/index",
      text: "报表"
    }, {
      pagePath: "pages/settings/index",
      text: "设置"
    }]
  },
})
