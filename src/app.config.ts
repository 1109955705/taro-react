export default {
  pages: [
    'pages/home/index',
    'pages/aaa/index',
    'pages/mine/index',
    'pages/chart/index',
    'pages/ble/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    custom: true,
    color: '#CCCCCC',
    selectedColor: '#01ca9e',
    list: [
      {
        pagePath: 'pages/home/index',
        text: '测量xxs',
        iconPath: 'assets/images/tabbar/home_default.png',
        selectedIconPath: 'assets/images/tabbar/home_click.png',
      },
      {
        pagePath: 'pages/chart/index',
        text: '图表',
        iconPath: 'assets/images/tabbar/chart_default.png',
        selectedIconPath: 'assets/images/tabbar/chart_click.png',
      },
      {
        pagePath: 'pages/mine/index',
        text: '我的',
        iconPath: 'assets/images/tabbar/mine_default.png',
        selectedIconPath: 'assets/images/tabbar/mine_click.png',
      },
    ],
  },
  subPackages: [
    {
      root: 'pages/canvas/',
      pages: ['index'],
    },
  ],
};
