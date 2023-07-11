export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/calculator/index',
    'pages/report/index',
    'pages/settings/index',
    'pages/component-demo/index'
  ],
  darkmode: true,
  themeLocation: 'theme.json',
  window: {
    navigationBarBackgroundColor: "@navBgColor",
    backgroundColor: "@bgColor",
    backgroundColorTop: "@bgColorTop",
    backgroundColorBottom: "@bgColorBottom"
  },
  tabBar: {
    custom: false,
    color: '@tabFontColor',
    selectedColor: '@tabFontColor',
    backgroundColor: '@bgColor',
    list: [
      {
        pagePath: 'pages/index/index',
        selectedIconPath: 'images/edit-fill.png',
        iconPath: 'images/edit.png',
        text: '记账'
      },
      {
        // pagePath: 'pages/report/index',
        pagePath: 'pages/component-demo/index',
        selectedIconPath: 'images/sales-report-fill.png',
        iconPath: 'images/sales-report.png',
        text: '报表'
      },
      {
        pagePath: 'pages/settings/index',
        selectedIconPath: 'images/settings-fill.png',
        iconPath: 'images/settings.png',
        text: '设置'
      }
    ]
  },
})
