module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
    // 必须加JSON.stringify包裹 https://webpack.js.org/plugins/define-plugin/
    SERVICE_URL: JSON.stringify('http://sit.third-api.yolanda.hk/open_api'),
    H5_URL: JSON.stringify('http://xcx-h5-preview.glb.qnniu.com'),
  },
  mini: {},
  h5: {}
}
