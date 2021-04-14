export default {
  pages: [
    'pages/measure/index',
    'pages/mine/index',
    'pages/chart/index',
    'pages/webview/index',
    'pages/canvas/index',
    'pages/ble/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  "tabBar": {
    "custom": false,
    "selectedColor": "#01ca9e",
    list: [
      {
        "pagePath": "pages/measure/index",
        "text": "测量",
      },
      {
        "pagePath": "pages/chart/index",
        "text": "图表",
      },
      {
        "pagePath": "pages/mine/index",
        "text": "我的",
      }
    ]
  },
}
