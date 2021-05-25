export default {
  pages: [
    'pages/measure/index',
    'pages/mine/index',
    'pages/chart/index',
    'pages/canvas/index',
    'pages/ble/index',
    'pages/shop/index',
    'pages/shop1/index',
    'pages/test/index',
],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: false,
    color: "#CCCCCC",
    selectedColor: "#01ca9e",
    list: [
      {
        pagePath: "pages/measure/index",
        text: "测量xxs",
        iconPath: "assets/images/tabbar/home_default.png",
        selectedIconPath: "assets/images/tabbar/home_click.png"
      },
      {
        pagePath: "pages/chart/index",
        text: "图表",
        iconPath: "assets/images/tabbar/chart_default.png",
        selectedIconPath: "assets/images/tabbar/chart_click.png"
      },
      {
        pagePath: "pages/mine/index",
        text: "我的",
        iconPath: "assets/images/tabbar/mine_default.png",
        selectedIconPath: "assets/images/tabbar/mine_click.png"
      }
    ]
  },
  subPackages:[
    {
      "root": "pages/echarts/",
      "pages": [
        "index",
      ]
    }
  ]
}
